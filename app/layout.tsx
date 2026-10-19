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
    default: 'Edullinen IT-tuki pienyrityksille | Rootit',
    template: '%s | rootIT',
  },
  description:
    'Helposti lähestyttävää IT-apua pienyrityksille. Apua Microsoft 365:n, sähköpostin, tietokoneiden ja arjen IT-ongelmien kanssa. Selkeä hinnoittelu.',
  generator: 'JK',
  applicationName: 'rootIT',
  keywords: [
    'IT-tuki pienyrityksille',
    'edullinen IT-tuki',
    'IT-apu yrittäjälle',
    'Microsoft 365 -apu',
    'Outlook-apu',
    'sähköpostiongelmat',
    'Windows-tuki',
    'etätuki',
    'verkkosivut pienyrityksille',
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
    title: 'Edullinen IT-tuki pienyrityksille | Rootit',
    description:
      'Helposti lähestyttävää IT-apua pienyrityksille. Apua Microsoft 365:n, sähköpostin, tietokoneiden ja arjen IT-ongelmien kanssa. Selkeä hinnoittelu.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edullinen IT-tuki pienyrityksille | Rootit',
    description:
      'Helposti lähestyttävää IT-apua pienyrityksille. Apua Microsoft 365:n, sähköpostin, tietokoneiden ja arjen IT-ongelmien kanssa. Selkeä hinnoittelu.',
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
        'Rootit tarjoaa selkeää ja helposti lähestyttävää IT-apua pienyrityksille ja yrittäjille ilman kallista IT-sopimusta.',
      url: BASE_URL,
      email: 'mailto:rootit.info@gmail.com',
      areaServed: { '@type': 'Country', name: 'Finland' },
      priceRange: '€€',
      serviceType: [
        'IT-tuki pienyrityksille',
        'Microsoft 365 -apu',
        'Sähköposti- ja Outlook-apu',
        'Windows-tuki',
        'Verkkosivujen toteutus',
      ],
      knowsLanguage: ['fi'],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Rootit',
      description: 'Selkeää IT-apua pienyrityksille ilman turhaa IT-sopimusta.',
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
