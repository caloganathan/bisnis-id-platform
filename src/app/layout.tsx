import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bisnis.ID - Platform Bisnis Indonesia Terlengkap',
  description: 'Pendirian PT, akuntansi, dan kepatuhan pajak untuk bisnis Indonesia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
