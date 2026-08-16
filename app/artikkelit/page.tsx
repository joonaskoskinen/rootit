import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesContent } from "@/components/articles-content"

export const metadata: Metadata = {
  title: "IT-vinkit ja oppaat | rootIT - Käytännön neuvoja IT-ongelmiin",
  description: "Ajankohtaisia vinkkejä, oppaita ja käytännön neuvoja IT-ongelmiin. WordPress, sähköposti, domain, DNS, tietoturva ja etätuki. Selkeää IT-apua pienyrittäjille ja yksinyrittäjille.",
  keywords: [
    "IT-vinkit",
    "WordPress ongelmat",
    "sähköposti ei toimi",
    "domain ongelmat",
    "DNS asetukset",
    "verkkosivujen korjaus",
    "tietoturva",
    "etätuki",
    "IT-tuki pienyrityksille",
    "digiapua",
  ],
  openGraph: {
    title: "IT-vinkit ja oppaat | rootIT",
    description: "Käytännön neuvoja IT-ongelmiin pienyrittäjille ja yksinyrittäjille. WordPress, sähköposti, domain ja paljon muuta.",
    type: "website",
    locale: "fi_FI",
  },
  alternates: {
    canonical: "https://rootit.fi/artikkelit",
  },
}

export default function ArticlesPage() {
  return (
    <div className="relative min-h-screen bg-gradient-radial">
      {/* Noise texture overlay */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
        }}
      />

      <Header />
      
      <main>
        <ArticlesContent />
      </main>
      
      <Footer />
    </div>
  )
}
