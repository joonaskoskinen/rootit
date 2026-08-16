import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Etätuki turvallisesti – näin etäyhteys toimii | Rootit.fi",
  description: "Miten etätuki toimii ja miten se tehdään turvallisesti? Käytännön opas etäyhteyksiin, tietoturvaan ja yleisiin käyttötapoihin.",
  keywords: ["etätuki", "etäyhteys", "TeamViewer", "turvallinen etätuki", "IT-tuki etänä", "remote support", "etähuolto"],
  alternates: {
    canonical: "https://rootit.fi/artikkelit/etatuki-turvallisesti",
  },
  openGraph: {
    title: "Etätuki turvallisesti – näin etäyhteys toimii",
    description: "Miten etätuki toimii ja miten se tehdään turvallisesti? Käytännön opas etäyhteyksiin, tietoturvaan ja yleisiin käyttötapoihin.",
    url: "https://rootit.fi/artikkelit/etatuki-turvallisesti",
    siteName: "Rootit.fi",
    locale: "fi_FI",
    type: "article",
  },
}

export default function EtatukiTurvallisestiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link 
            href="/artikkelit" 
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Takaisin artikkeleihin
          </Link>

          <header className="mb-12">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Etätuki: Näin se toimii turvallisesti
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Etätuki on nopea ja käytännöllinen tapa ratkaista IT-ongelmia ilman paikan päällä käyntiä. Kun yhteys ja toimintatavat ovat kunnossa, etänä voi hoitaa suuren osan arjen ongelmista turvallisesti ja tehokkaasti.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Tärkeintä on, että asiakas tietää aina mitä tehdään, miksi tehdään ja millä oikeuksilla. Hyvä etätuki ei ole vain nopea yhteys, vaan hallittu prosessi.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mitä etätuki tarkoittaa?</h2>
            <p>
              Etätuki tarkoittaa sitä, että asiantuntija pääsee auttamaan toisen laitteen tai järjestelmän kanssa etäyhteyden kautta. Käytännössä tämä voi tarkoittaa ruudun jakamista, laitteen hallintaa, asetusten tarkistamista, ohjelmien asennusta tai vian selvittämistä.
            </p>
            <p>
              Etätuki sopii hyvin tilanteisiin, joissa ongelma ei ole fyysinen laitevika vaan ohjelmisto-, asetus- tai käyttöongelma. Usein ongelma saadaan ratkaistua paljon nopeammin kuin odottamalla käyntiä paikan päälle.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Miten yhteys otetaan?</h2>
            <p>
              Tyypillisesti asiakas käynnistää etätukityökalun ja antaa kertakäyttöisen tunnuksen tai luvan istuntoon. Sen jälkeen asiantuntija näkee tai hallitsee laitetta vain sovitun ajan ja sovitussa laajuudessa.
            </p>
            <p>
              Hyvässä etätukiprosessissa asiakas tietää koko ajan, milloin yhteys on päällä ja milloin se suljetaan. Tämä tekee tilanteesta läpinäkyvän ja helpommin luotettavan.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mikä tekee etätuesta turvallista?</h2>
            <p>
              Turvallinen etätuki perustuu siihen, että yhteys on salattu, käyttöoikeudet ovat rajatut ja tunnistautuminen on kunnossa. Käytännössä tämä tarkoittaa ainakin:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Vahvaa tunnistautumista</li>
              <li>Vain tarpeellisten oikeuksien antamista</li>
              <li>Istunnon sulkemista heti työn valmistuttua</li>
            </ul>
            <p>
              Monissa työkaluissa voi myös estää tarpeettoman paikallisen ohjauksen tai varmistaa, että käyttäjä näkee mitä tehdään. Mitä vähemmän oikeuksia annetaan, sitä pienempi riski.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Millaisiin ongelmiin etätuki sopii?</h2>
            <p>
              Etätuki sopii erityisen hyvin:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Ohjelmisto-ongelmiin</li>
              <li>Sähköpostiin ja sen asetuksiin</li>
              <li>Päivityksiin ja käyttäjätunnuksiin</li>
              <li>Verkkosivujen hallintaan</li>
              <li>Pilvipalveluihin</li>
            </ul>
            <p>
              Se toimii hyvin myös pienyrityksille, joissa ei ole omaa IT-tiimiä mutta tarvitaan nopea apu ongelmatilanteissa. Jos ongelma liittyy fyysiseen rikkoutumiseen, kuten hajonneeseen laitteeseen, etätuki ei tietenkään aina riitä. Silti suuri osa arjen ongelmista on ratkaistavissa täysin etänä.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Hyvät turvallisuuskäytännöt</h2>
            <p>
              Etätukea kannattaa käyttää niin, että oikeudet annetaan vain tarvittavaksi ajaksi ja vain siihen laitteeseen, johon apua tarvitaan. Istunnon aikana on hyvä välttää tarpeetonta selaamista ja pitää työ selkeästi rajattuna.
            </p>
            <p>
              Moni ammattilainen käyttää myös lokitusta, jotta tiedetään mitä tehtiin ja milloin. Tämä on tärkeää sekä tietoturvan että myöhemmän jäljitettävyyden kannalta.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mitä asiakkaan kannattaa tarkistaa?</h2>
            <p>
              Ennen etäistuntoa on hyvä varmistaa:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Käytössä on oikea ohjelma</li>
              <li>Yhteys on luotettava</li>
              <li>Yhteys avataan vain silloin kun apu on oikeasti käynnissä</li>
            </ul>
            <p>
              Jos kyseessä on yritysympäristö, kannattaa lisäksi tarkistaa, että tunnukset eivät ole jaettuja ja että käyttäjillä on omat kirjautumisensa. Kun nämä perusasiat ovat kunnossa, etätuki on yleensä nopeampi ja turvallisempi kuin monet muut vaihtoehdot.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yhteenveto käytännössä</h2>
            <p>
              Etätuki toimii hyvin, kun se on rajattu, salattu ja selkeästi sovittu. Se säästää aikaa, vähentää turhaa odottelua ja sopii erityisen hyvin moniin tavallisiin IT-ongelmiin.
            </p>
            <p>
              Turvallisuus syntyy ennen kaikkea hyvistä käytännöistä, ei pelkästään työkalusta. Siksi etätuki kannattaa toteuttaa niin, että asiakas pysyy koko ajan kartalla ja yhteys suljetaan heti työn jälkeen.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">Tarvitsetko etätukea?</h3>
            <p className="mb-6 text-muted-foreground">
              Ota yhteyttä, niin hoidetaan ongelma nopeasti ja turvallisesti.
            </p>
            <Button asChild size="lg">
              <Link href="/#consultation-mockup">Ota yhteyttä</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between border-t pt-8">
            <Link 
              href="/artikkelit/verkkosivujen-tietoturva" 
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Edellinen artikkeli
            </Link>
            <Link 
              href="/artikkelit/pienyrityksen-it-ulkoistus" 
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Seuraava artikkeli
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
