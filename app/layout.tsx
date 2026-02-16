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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/creations/elite-logo.png', type: 'image/png' },
    ],
    apple: '/images/creations/elite-logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a2744',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased min-h-screen overscroll-x-none">{children}</body>
    </html>
  )
}
