import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { XenditService } from '@/lib/xendit'

const xendit = new XenditService()

export async function GET(request: NextRequest) {
  try {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: invoices, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ invoices })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { client_name, amount, description, due_date } = await request.json()

    // Create invoice in database
    const { data: invoice, error: dbError } = await supabase
      .from('invoices')
      .insert({
        user_id: session.user.id,
        client_name,
        amount,
        description,
        due_date,
        status: 'pending'
      })
      .select()
      .single()

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 400 })
    }

    // Create Xendit payment invoice
    const xenditInvoice = await xendit.createInvoice({
      external_id: `inv-${invoice.id}`,
      amount: amount,
      description: description,
      invoice_duration: 86400, // 24 hours
      customer: {
        given_names: client_name,
        email: session.user.email!
      },
      success_redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/invoices/${invoice.id}?status=success`,
      failure_redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/invoices/${invoice.id}?status=failed`
    })

    // Update invoice with Xendit details
    await supabase
      .from('invoices')
      .update({
        xendit_invoice_id: xenditInvoice.id,
        payment_url: xenditInvoice.invoice_url
      })
      .eq('id', invoice.id)

    return NextResponse.json({ 
      invoice: {
        ...invoice,
        xendit_invoice_id: xenditInvoice.id,
        payment_url: xenditInvoice.invoice_url
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
