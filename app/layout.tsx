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
  title: 'Verkkosivut pienyrityksille ja ylläpito alk. 29 € | Rootit',
  description:
    'Rootit tekee pienyrityksille selkeät verkkosivut ja huolehtii ylläpidosta. Verkkosivut + ylläpito alk. 29 € + alv / kk. Myös yksittäiset korjaukset ilman kuukausimaksua.',
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
    title: 'Rootit – Selkeämmät verkkosivut pienyrityksille',
    description:
      'Selkeät verkkosivut, tekninen ylläpito ja pienet muutokset pienyrityksille. Myös yksittäiset korjaukset ilman kuukausimaksua.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Rootit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rootit – Selkeämmät verkkosivut pienyrityksille',
    description:
      'Selkeät verkkosivut, tekninen ylläpito ja pienet muutokset pienyrityksille. Myös yksittäiset korjaukset ilman kuukausimaksua.',
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
        'Rootit tekee pienyrityksille selkeät verkkosivut ja huolehtii niiden ylläpidosta. Palveluun kuuluu myös yksittäisiä verkkosivujen korjauksia ilman kuukausimaksua.',
      url: BASE_URL,
      email: 'mailto:rootit.info@gmail.com',
      areaServed: { '@type': 'Country', name: 'Finland' },
      priceRange: '€€',
      serviceType: [
        'Verkkosivut pienyrityksille',
        'Verkkosivujen ylläpito',
        'Verkkosivujen korjaus',
        'Kotisivut yritykselle',
        'Sivustoarvio',
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
