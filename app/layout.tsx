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
  title: 'Rootit – Selkeämmät verkkosivut pienyrityksille',
  description:
    'Rootit korjaa pienyritysten verkkosivut niin, että asiakas ymmärtää nopeasti ja ottaa yhteyttä. Selkeämpi viesti, parempi mobiilikokemus ja toimiva yhteydenottopolku – ilman raskasta uudistusprojektia.',
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
      'Korjaamme pienyritysten sivut sellaisiksi, että asiakas ymmärtää ja ottaa yhteyttä. Pyydä ilmainen sivustoarvio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rootit – Selkeämmät verkkosivut pienyrityksille',
    description:
      'Korjaamme pienyritysten sivut sellaisiksi, että asiakas ymmärtää ja ottaa yhteyttä. Pyydä ilmainen sivustoarvio.',
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
  themeColor: '#f7f5f0',
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
        'Rootit parantaa pienyritysten verkkosivuja: selkeämpi viesti, parempi mobiilikokemus ja toimiva yhteydenottopolku, jotta sivu tuottaa enemmän yhteydenottoja.',
      url: BASE_URL,
      areaServed: { '@type': 'Country', name: 'Finland' },
      serviceType: [
        'Verkkosivujen parannus',
        'Konversio-optimointi',
        'Sivustoarvio',
        'Verkkosivujen ylläpito',
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
