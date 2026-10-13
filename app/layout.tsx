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
    default: 'rootIT – selkeät verkkosivut pienyrityksille',
    template: '%s | rootIT',
  },
  description:
    'rootIT tekee ja ylläpitää selkeitä verkkosivuja pienyrityksille. Pyydä ilmainen sivustoarvio ja päätä itse, etenetkö.',
  generator: 'JK',
  applicationName: 'rootIT',
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
    url: '/',
    siteName: 'rootIT',
    title: 'rootIT – selkeät verkkosivut pienyrityksille',
    description:
      'rootIT tekee ja ylläpitää selkeitä verkkosivuja pienyrityksille. Pyydä ilmainen sivustoarvio ja päätä itse, etenetkö.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'rootIT – selkeät verkkosivut pienyrityksille',
    description:
      'rootIT tekee ja ylläpitää selkeitä verkkosivuja pienyrityksille. Pyydä ilmainen sivustoarvio ja päätä itse, etenetkö.',
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
