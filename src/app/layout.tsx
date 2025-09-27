import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bisnis.ID - Platform Bisnis Indonesia Terlengkap',
  description: 'Pendirian PT, akuntansi, dan kepatuhan pajak untuk bisnis Indonesia. Solusi all-in-one untuk entrepreneur lokal dan investor asing.',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale?: string }
}) {
  const locale = params?.locale || 'id'
  setRequestLocale(locale)
  
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
