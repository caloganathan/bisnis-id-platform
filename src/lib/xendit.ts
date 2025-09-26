// Xendit integration for Indonesian payments
interface XenditPaymentRequest {
  external_id: string
  amount: number
  description: string
  invoice_duration: number
  customer?: {
    given_names: string
    email: string
    mobile_number?: string
  }
  success_redirect_url?: string
  failure_redirect_url?: string
}

export class XenditService {
  private apiKey: string
  private baseUrl: string

  constructor() {
    this.apiKey = process.env.XENDIT_SECRET_KEY!
    this.baseUrl = 'https://api.xendit.co'
  }

  async createInvoice(params: XenditPaymentRequest) {
    const response = await fetch(`${this.baseUrl}/v2/invoices`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(this.apiKey + ':').toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })

    if (!response.ok) {
      throw new Error('Failed to create Xendit invoice')
    }

    return response.json()
  }

  async getInvoice(invoiceId: string) {
    const response = await fetch(`${this.baseUrl}/v2/invoices/${invoiceId}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(this.apiKey + ':').toString('base64')}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to get Xendit invoice')
    }

    return response.json()
  }

  verifyWebhookSignature(rawBody: string, signature: string): boolean {
    const crypto = require('crypto')
    const webhookToken = process.env.XENDIT_WEBHOOK_TOKEN!
    const expectedSignature = crypto
      .createHmac('sha256', webhookToken)
      .update(rawBody)
      .digest('hex')
    
    return signature === expectedSignature
  }
}
