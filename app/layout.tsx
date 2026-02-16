import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Elite Agence | Outils Digitaux Sur Mesure',
  description:
    'Elite Agence developpe les outils digitaux qui font evoluer les entreprises. Applications web sur mesure, automatisation, IA et CRM.',
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
