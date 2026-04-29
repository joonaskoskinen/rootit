import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import { CrispChat } from '@/components/crisp-chat'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const BASE_URL = 'https://rootit.fi'

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
    url: BASE_URL,
    siteName: 'rootIT',
    title: 'rootIT | IT-tuki etänä koko Suomeen',
    description: 'Verkkosivujen korjaukset ja uudistukset, WordPress-apu, domain- ja sähköpostiongelmat. Autan pienyrityksiä, yrittäjiä ja yksityishenkilöitä koko Suomessa.',
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
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
    images: [`${BASE_URL}/og-image.jpg`],
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
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#organization`,
      name: 'rootIT',
      description: 'IT-tuki etänä koko Suomeen. Verkkosivujen korjaukset ja uudistukset, WordPress-apu, domain- ja sähköpostiongelmat.',
      url: BASE_URL,
      email: 'rootit.info@gmail.com',
      image: `${BASE_URL}/og-image.jpg`,
      logo: `${BASE_URL}/icon.svg`,
      areaServed: {
        '@type': 'Country',
        name: 'Finland',
        '@id': 'https://www.wikidata.org/wiki/Q33',
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
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      sameAs: [
        'https://wa.me/358452599069',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'rootIT',
      description: 'IT-tuki etänä koko Suomeen',
      publisher: {
        '@id': `${BASE_URL}/#organization`,
      },
      inLanguage: 'fi',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // Service offerings
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/#service-it-tuki`,
      name: 'IT-tuki etänä',
      description: 'Etätuki tietokone- ja IT-ongelmiin. Nopea apu TeamViewerin kautta.',
      provider: { '@id': `${BASE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Finland' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'IT-tukipalvelut',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Kertakorjaus',
            description: 'Yksittäisen ongelman ratkaisu',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '49',
              priceCurrency: 'EUR',
              minPrice: '49',
            },
          },
          {
            '@type': 'Offer',
            name: 'Projekti',
            description: 'Laajempi projekti sovittuun hintaan',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '199',
              priceCurrency: 'EUR',
              minPrice: '199',
            },
          },
          {
            '@type': 'Offer',
            name: 'Kuukausituki',
            description: 'Jatkuva IT-tuki kuukausimaksulla',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '99',
              priceCurrency: 'EUR',
              minPrice: '99',
              billingDuration: 'P1M',
            },
          },
        ],
      },
    },
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/#service-web`,
      name: 'Verkkosivujen korjaus ja uudistus',
      description: 'WordPress-sivujen korjaukset, päivitykset ja modernisointi.',
      provider: { '@id': `${BASE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Finland' },
    },
    {
      '@type': 'Service',
      '@id': `${BASE_URL}/#service-email`,
      name: 'Sähköposti- ja domain-apu',
      description: 'DNS-ongelmat, sähköpostin konfigurointi, domain-siirrot.',
      provider: { '@id': `${BASE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'Finland' },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect to third-party origins for performance */}
        <link rel="preconnect" href="https://client.crisp.chat" />
        <link rel="dns-prefetch" href="https://client.crisp.chat" />
        <link rel="preconnect" href="https://get.teamviewer.com" />
        <link rel="dns-prefetch" href="https://get.teamviewer.com" />
        
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
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
