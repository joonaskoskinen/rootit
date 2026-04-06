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
  title: 'rootIT | IT-tuki etänä koko Suomeen - Verkkosivut & Digiapu',
  description: 'IT-tuki etänä koko Suomeen. Verkkosivujen korjaukset ja uudistukset, WordPress-apu, domain- ja sähköpostiongelmat. Autan pienyrityksiä, yrittäjiä ja yksityishenkilöitä.',
  generator: 'v0.app',
  keywords: [
    'IT-tuki',
    'IT-tuki etänä',
    'digiapu',
    'verkkosivujen korjaus',
    'verkkosivujen uudistus',
    'WordPress apu',
    'domain apu',
    'DNS apu',
    'sähköpostiongelmat',
    'pienyrityksen IT-tuki',
    'IT-apu koko Suomeen',
    'etätuki',
    'tekninen apu'
  ],
  authors: [{ name: 'rootIT' }],
  creator: 'rootIT',
  metadataBase: new URL('https://rootit.fi'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fi_FI',
    url: 'https://rootit.fi',
    siteName: 'rootIT',
    title: 'rootIT | IT-tuki etänä koko Suomeen',
    description: 'Verkkosivujen korjaukset ja uudistukset, WordPress-apu, domain- ja sähköpostiongelmat. Autan pienyrityksiä, yrittäjiä ja yksityishenkilöitä koko Suomessa.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'rootIT - IT-tuki etänä koko Suomeen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'rootIT | IT-tuki etänä koko Suomeen',
    description: 'Verkkosivujen korjaukset, WordPress-apu, domain- ja sähköpostiongelmat. IT-apua pienyrityksille ja yksityishenkilöille.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon.svg',
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

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://rootit.fi/#organization',
      name: 'rootIT',
      description: 'IT-tuki etänä koko Suomeen. Verkkosivujen korjaukset ja uudistukset, WordPress-apu, domain- ja sähköpostiongelmat.',
      url: 'https://rootit.fi',
      email: 'rootit.info@gmail.com',
      areaServed: {
        '@type': 'Country',
        name: 'Finland',
      },
      serviceType: [
        'IT-tuki',
        'Verkkosivujen korjaus',
        'Verkkosivujen uudistus',
        'WordPress-tuki',
        'Sähköpostituki',
        'Domain- ja DNS-apu',
        'Etätuki',
      ],
      priceRange: '€€',
      knowsLanguage: ['fi', 'en'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rootit.fi/#website',
      url: 'https://rootit.fi',
      name: 'rootIT',
      description: 'IT-tuki etänä koko Suomeen',
      publisher: {
        '@id': 'https://rootit.fi/#organization',
      },
      inLanguage: 'fi',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
