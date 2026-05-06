"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Globe, 
  Shield, 
  Monitor, 
  Wrench,
  Clock,
  BookOpen
} from "lucide-react"

const articles = [
  {
    id: 1,
    title: "WordPress-sivusto ei toimi? Näin selvität yleisimmät ongelmat",
    description: "WordPress on suosittu, mutta välillä se temppuilee. Käyn läpi tyypillisimmät ongelmat: valkoinen ruutu, hitaus, päivitykset ja lisäosat. Opit tunnistamaan ongelman ja saat selkeät ohjeet ensiapuun.",
    category: "WordPress",
    icon: Globe,
    readTime: "8 min",
    keywords: ["wordpress ongelmat", "wordpress hidas", "wordpress ei toimi", "valkoinen ruutu wordpress"],
    href: "/artikkelit/wordpress-ei-toimi",
  },
  {
    id: 2,
    title: "Sähköposti menee roskapostiin? Tarkista nämä asetukset",
    description: "Jos asiakkaiden viestit eivät tule perille tai omat viestisi päätyvät roskapostiin, syy löytyy usein DNS-asetuksista. Selitän selkokielellä mitä SPF, DKIM ja DMARC tarkoittavat ja miten ne korjataan.",
    category: "Sähköposti",
    icon: Mail,
    readTime: "6 min",
    keywords: ["sähköposti roskapostissa", "SPF asetus", "DKIM", "sähköposti ei toimi"],
    href: "/artikkelit/sahkoposti-roskapostiin",
  },
  {
    id: 3,
    title: "Domain ja DNS: Mitä ne ovat ja miksi ne ovat tärkeitä?",
    description: "Domain on verkkosivusi osoite ja DNS ohjaa liikenteen oikeaan paikkaan. Kerron yksinkertaisesti miten ne toimivat, mitä virheitä kannattaa välttää ja milloin kannattaa pyytää apua.",
    category: "Domain & DNS",
    icon: Globe,
    readTime: "7 min",
    keywords: ["domain mikä on", "DNS asetukset", "verkkotunnus", "domain siirto"],
    href: "/artikkelit/domain-ja-dns",
  },
  {
    id: 4,
    title: "Verkkosivujen tietoturva: 5 asiaa jotka jokaisen pitäisi tietää",
    description: "Tietoturva ei ole vain suurten yritysten asia. Käyn läpi viisi perusasiaa: SSL-sertifikaatti, päivitykset, salasanat, varmuuskopiot ja käyttöoikeudet. Pienetkin toimet tekevät ison eron.",
    category: "Tietoturva",
    icon: Shield,
    readTime: "5 min",
    keywords: ["verkkosivujen tietoturva", "SSL sertifikaatti", "wordpress tietoturva", "sivuston suojaus"],
    href: "/artikkelit/verkkosivujen-tietoturva",
  },
  {
    id: 5,
    title: "Etätuki: Näin se toimii turvallisesti",
    description: "Etätuki on nopea ja kätevä tapa ratkaista IT-ongelmia. Selitän miten etäyhteys otetaan, mitä työkaluja käytetään ja miten varmistat että yhteys on turvallinen. Sinä hallitset koko ajan mitä tapahtuu.",
    category: "Etätuki",
    icon: Monitor,
    readTime: "4 min",
    keywords: ["etätuki", "TeamViewer", "etäyhteys turvallisesti", "IT-tuki etänä"],
    href: "/artikkelit/etatuki-turvallisesti",
  },
  {
    id: 6,
    title: "Pienyrityksen IT-arki: Mitä kannattaa ulkoistaa?",
    description: "Kaikkea ei tarvitse osata itse. Käyn läpi mitä IT-tehtäviä kannattaa ulkoistaa, milloin se on järkevää ja miten löydät luotettavan kumppanin. Säästät aikaa ja vältät turhaa stressiä.",
    category: "IT-arki",
    icon: Wrench,
    readTime: "6 min",
    keywords: ["IT ulkoistaminen", "pienyritys IT", "IT-tuki yritykselle", "yksinyrittäjä IT"],
    href: "/artikkelit/pienyrityksen-it-ulkoistus",
  },
]

export function ArticlesContent() {
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 })
  const { ref: articlesRef, isInView: articlesInView } = useInView({ threshold: 0.1 })
  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.1 })

  const handleConsultationClick = () => {
    const mockup = document.getElementById("consultation-mockup")
    if (mockup) {
      mockup.scrollIntoView({ behavior: "smooth", block: "center" })
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("openConsultationForm"))
      }, 500)
    } else {
      window.location.href = "/#contact"
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div
            ref={heroRef}
            className={cn(
              "text-center transition-all duration-700",
              heroInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <Badge variant="secondary" className="mb-4 gap-1.5">
              <BookOpen className="h-3.5 w-3.5" />
              IT-vinkit ja oppaat
            </Badge>
            
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              Käytännön neuvoja{" "}
              <span className="text-gradient">IT-ongelmiin</span>
            </h1>
            
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg">
              Täältä löydät ajankohtaisia vinkkejä, oppaita ja käytännön neuvoja yleisimpiin IT-ongelmiin. 
              Kirjoitan selkeällä kielellä ilman turhaa teknistä jargonia - tavoitteena on auttaa sinua 
              ratkaisemaan ongelmat tai ymmärtämään milloin kannattaa pyytää apua.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground sm:mt-8">
              <span className="flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-primary" />
                Selkokieliset oppaat
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                Käytännön vinkit
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" />
                Luotettavaa tietoa
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div
            ref={articlesRef}
            className={cn(
              "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700",
              articlesInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            {articles.map((article, index) => {
              const Icon = article.icon
              return (
                <Link 
                  key={article.id}
                  href={article.href}
                  className="block"
                >
                  <Card 
                    className={cn(
                      "group relative h-full overflow-hidden border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg",
                      articlesInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs font-normal">
                          {article.category}
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <div className="mt-3 flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {article.description}
                      </CardDescription>
                      
                      {/* Keywords for SEO - visually hidden but accessible */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {article.keywords.slice(0, 3).map((keyword) => (
                          <span 
                            key={keyword}
                            className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Lue artikkeli
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Follow Section */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Miksi seurata tätä sivua?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Päivitän sivua säännöllisesti uusilla artikkeleilla ja vinkeillä. 
              Sisältö perustuu oikeisiin tilanteisiin joita kohtaan asiakkaiden kanssa päivittäin. 
              Tavoitteeni on auttaa sinua välttämään yleisimmät sudenkuopat ja säästämään aikaa.
            </p>
            
            <ul className="mt-6 space-y-2 text-left text-sm text-muted-foreground sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Käytännön neuvoja, ei teoriaa teorian vuoksi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Selkeä kieli ilman turhaa teknistä jargonia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Oikeiden ongelmien ratkaisuja oikeilta asiakkailta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Vinkit päivitetään ajantasaisiksi säännöllisesti</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16 sm:pb-20 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div
            ref={ctaRef}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-card p-6 shadow-lg transition-all duration-700 sm:rounded-3xl sm:p-8 lg:p-12",
              ctaInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 hidden h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:block" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 hidden h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:block" />

            <div className="relative flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="font-display text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl text-balance">
                  Tarvitsetko apua IT-ongelmaan?
                </h2>
                <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
                  Artikkelit auttavat ymmärtämään ongelmia, mutta joskus on helpompaa pyytää apua. 
                  Kerro tarpeestasi ja palaan asiaan vuorokauden sisällä.
                </p>
                <p className="mt-2 text-xs text-muted-foreground/80 sm:mt-3 sm:text-sm">
                  Kertatyöt, sivustoprojektit tai etätuki - kaikki käy.
                </p>
              </div>

              <Button
                size="lg"
                className="h-12 w-full shrink-0 rounded-full bg-primary px-6 text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer sm:h-14 sm:w-auto sm:px-8"
                onClick={handleConsultationClick}
              >
                Ota yhteyttä
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "IT-vinkit ja oppaat | rootIT",
            description: "Käytännön neuvoja IT-ongelmiin pienyrittäjille ja yksinyrittäjille.",
            url: "https://rootit.fi/artikkelit",
            publisher: {
              "@type": "Organization",
              name: "rootIT",
              url: "https://rootit.fi"
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: articles.map((article, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: article.title,
                description: article.description
              }))
            }
          })
        }}
      />
    </>
  )
}
