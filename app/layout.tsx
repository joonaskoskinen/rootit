import type { Metadata, Viewport } from 'next'
import { Caveat, Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const BASE_URL = 'https://rootit.fi'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwriting',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'rootIT – selkeät verkkosivut projektillesi',
    template: '%s | rootIT',
  },
  description:
    'rootIT suunnittelee, toteuttaa ja ylläpitää selkeitä verkkosivuja yrityksille, yhdistyksille, asiantuntijoille ja kaikille, jotka tarvitsevat uudet verkkosivut tai haluavat parantaa nykyisiä.',
  generator: 'JK',
  applicationName: 'rootIT',
  keywords: [
    'verkkosivujen parannus',
    'yrityksen verkkosivut',
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
    url: '/',
    siteName: 'rootIT',
    title: 'rootIT – selkeät verkkosivut projektillesi',
    description:
      'rootIT suunnittelee, uudistaa ja ylläpitää selkeitä verkkosivuja yrityksille, yhdistyksille ja asiantuntijoille. Pyydä ilmainen sivustoarvio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'rootIT – selkeät verkkosivut projektillesi',
    description:
      'rootIT suunnittelee, uudistaa ja ylläpitää selkeitä verkkosivuja yrityksille, yhdistyksille ja asiantuntijoille. Pyydä ilmainen sivustoarvio.',
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
  themeColor: '#05080f',
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
        'Rootit suunnittelee, toteuttaa ja ylläpitää verkkosivuja yrityksille, yhdistyksille, asiantuntijoille ja kaikille, jotka tarvitsevat uudet verkkosivut tai haluavat parantaa nykyisiä.',
      url: BASE_URL,
      email: 'mailto:rootit.info@gmail.com',
      areaServed: { '@type': 'Country', name: 'Finland' },
      priceRange: '€€',
      serviceType: [
        'Verkkosivujen suunnittelu',
        'Verkkosivujen toteutus',
        'Verkkosivujen uudistus',
        'Verkkosivujen ylläpito',
        'Sivustoarvio',
      ],
      knowsLanguage: ['fi'],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Rootit',
      description: 'Selkeät verkkosivut projektillesi',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
