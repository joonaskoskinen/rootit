import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const BASE_URL = 'https://rootit.fi'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rootit – Nettisivut yrityksille alk. 29 € / kk',
  description:
    'Modernit, nopeat ja mobiiliystävälliset nettisivut yrityksellesi alk. 29 € + alv / kk. Toteutus, hosting ja tekninen ylläpito selkeällä kuukausihinnalla.',
  generator: 'v0.app',
  applicationName: 'Rootit',
  keywords: [
    'verkkosivujen parannus',
    'pienyrityksen verkkosivut',
    'sivuston konversio',
    'verkkosivujen selkeytys',
    'sivustoarvio',
    'CTA-rakenne',
    'mobiilikäytettävyys',
    'kampaamon verkkosivut',
    'palveluyrityksen verkkosivut',
  ],
  authors: [{ name: 'Rootit' }],
  creator: 'Rootit',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fi_FI',
    url: BASE_URL,
    siteName: 'Rootit',
    title: 'Rootit – Nettisivut yrityksille alk. 29 € / kk',
    description:
      'Modernit nettisivut yrityksellesi alk. 29 € + alv / kk. Toteutus, hosting ja tekninen ylläpito mukana.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Rootit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rootit – Nettisivut yrityksille alk. 29 € / kk',
    description:
      'Modernit nettisivut yrityksellesi alk. 29 € + alv / kk. Toteutus, hosting ja tekninen ylläpito mukana.',
    images: ['/og-image.jpg'],
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
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1119',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
      name: 'Rootit',
      description:
        'Rootit tarjoaa yrityksille modernit nettisivut selkeällä kuukausihinnalla. Toteutus, hosting ja tekninen ylläpito samasta paikasta.',
      url: BASE_URL,
      areaServed: { '@type': 'Country', name: 'Finland' },
      serviceType: [
        'Nettisivut yrityksille',
        'Verkkosivut kuukausihinnalla',
        'Hosting ja tekninen ylläpito',
        'SEO-palvelut',
      ],
      knowsLanguage: ['fi'],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Rootit',
      description: 'Selkeämmät verkkosivut pienyrityksille',
      publisher: { '@id': `${BASE_URL}/#organization` },
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
    <html lang="fi" className="scroll-smooth bg-background" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
