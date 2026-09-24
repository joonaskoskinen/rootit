import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RequestReviewButton } from '@/components/request-review-button'

const BASE_URL = 'https://rootit.fi'

const services = {
  'verkkosivut-pienyritykselle': {
    title: 'Verkkosivut pienyritykselle',
    description: 'Selkeät, modernit ja mobiiliystävälliset verkkosivut pienyritykselle ilman turhaa monimutkaisuutta.',
    intro: 'Yrityksesi tarvitsee verkkosivut, jotka kertovat nopeasti mitä tarjoat ja miten sinuun saa yhteyden. Rakennan sivuston, joka näyttää hyvältä, toimii puhelimella ja on helppo pitää ajan tasalla.',
    points: ['Selkeä rakenne ja tekstit', 'Mobiiliystävällinen toteutus', 'Yhteydenottoon ohjaavat sivut', 'Tekninen ylläpito saatavilla'],
  },
  'verkkosivujen-yllapito': {
    title: 'Verkkosivujen ylläpito',
    description: 'Verkkosivujen tekninen ylläpito ja pienet muutokset pienyrityksille alk. 29 € + alv / kk.',
    intro: 'Sinun ei tarvitse käyttää aikaa päivityksiin, korjauksiin tai pieniin sisältömuutoksiin. Huolehdin sovitusti verkkosivustosi toimivuudesta ja pidän sisällön ajan tasalla.',
    points: ['Alk. 29 € + alv / kk', 'Tekninen ylläpito', 'Pienet sisältömuutokset', 'Joustava palvelu ilman suurta aloitusmaksua'],
  },
  'verkkosivujen-korjaus': {
    title: 'Verkkosivujen korjaus',
    description: 'Yksittäiset verkkosivujen korjaukset ilman kuukausimaksua. Korjaa toimimaton, vanha tai sekava sivu.',
    intro: 'Tarvitsetko vain yhden asian kuntoon? Korjaan esimerkiksi mobiilinäkymän, yhteydenottolomakkeen, etusivun rakenteen tai vanhentuneen sisällön ilman kuukausimaksua.',
    points: ['Yksittäinen sovittu työ', 'Ei kuukausimaksua', 'Selkeä hinta etukäteen', 'Sopii myös nykyisen sivuston korjaukseen'],
  },
} as const

type ServiceSlug = keyof typeof services

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services[slug as ServiceSlug]
  if (!service) return {}
  return {
    title: `${service.title} | Rootit`,
    description: service.description,
    keywords: [service.title.toLowerCase(), 'verkkosivut pienyritykselle', 'Rootit'],
    alternates: { canonical: `${BASE_URL}/palvelut/${slug}` },
    openGraph: {
      title: `${service.title} | Rootit`,
      description: service.description,
      url: `${BASE_URL}/palvelut/${slug}`,
      type: 'website',
      locale: 'fi_FI',
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug as ServiceSlug]
  if (!service) return null

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: { '@type': 'ProfessionalService', name: 'Rootit', url: BASE_URL },
    areaServed: { '@type': 'Country', name: 'Finland' },
    url: `${BASE_URL}/palvelut/${slug}`,
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Takaisin etusivulle
          </Link>
          <header className="mt-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Rootit-palvelu</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">{service.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{service.intro}</p>
          </header>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.7fr]">
            <section>
              <h2 className="text-2xl font-semibold text-foreground">Mitä palveluun kuuluu?</h2>
              <ul className="mt-6 space-y-4">
                {service.points.map((point) => <li key={point} className="flex items-start gap-3 text-muted-foreground"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{point}</li>)}
              </ul>
            </section>
            <aside className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-xl font-semibold text-foreground">Aloita maksuttomalla arviolla</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Kerron suoraan, mikä ratkaisu sopii tilanteeseesi: jatkuva palvelu tai yksittäinen korjaus.</p>
              <div className="mt-6"><RequestReviewButton label="Pyydä ilmainen arvio" /></div>
            </aside>
          </div>
          <div className="mt-14 border-t border-border pt-8">
            <Link href="/artikkelit" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Lue verkkosivuaiheisia artikkeleita <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
