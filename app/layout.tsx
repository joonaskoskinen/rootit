import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import { CrispChat } from '@/components/crisp-chat'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'rootIT - IT-apua ilman turhaa säätöä',
  description: 'Verkkosivujen korjaukset ja uudistukset, domain- ja sähköpostiasiat, yleinen IT-tuki etänä koko Suomeen. Autan pienyrityksiä, yrittäjiä, yhdistyksiä ja yksityishenkilöitä.',
  generator: 'v0.app',
  keywords: ['IT-tuki', 'verkkosivut', 'WordPress', 'etätuki', 'pienyritys', 'domain', 'sähköposti', 'tekninen apu', 'Suomi'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f4ef' },
    { media: '(prefers-color-scheme: dark)', color: '#090a11' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <CrispChat />
        <Analytics />
      </body>
    </html>
  )
}
