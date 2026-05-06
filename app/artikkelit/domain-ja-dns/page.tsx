import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Domain ja DNS: mitä ne tarkoittavat ja miksi ne ratkaisevat | Rootit.fi",
  description: "Mikä on domain ja mitä DNS tekee? Selkeä opas verkkosivun osoitteeseen, asetuksiin ja yleisiin ongelmiin.",
  keywords: ["domain", "DNS", "verkkotunnus", "DNS-asetukset", "MX-tietue", "A-tietue", "CNAME", "verkkosivun osoite"],
  alternates: {
    canonical: "https://rootit.fi/artikkelit/domain-ja-dns",
  },
  openGraph: {
    title: "Domain ja DNS: mitä ne tarkoittavat ja miksi ne ratkaisevat",
    description: "Mikä on domain ja mitä DNS tekee? Selkeä opas verkkosivun osoitteeseen, asetuksiin ja yleisiin ongelmiin.",
    url: "https://rootit.fi/artikkelit/domain-ja-dns",
    siteName: "Rootit.fi",
    locale: "fi_FI",
    type: "article",
  },
}

export default function DomainJaDnsPage() {
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
              Domain ja DNS: Mitä ne ovat ja miksi ne ovat tärkeitä?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Domain ja DNS ovat kaksi verkkosivun taustalla olevaa perusasiaa, jotka vaikuttavat siihen, löytyykö sivu oikeasta osoitteesta ja toimiiko sähköposti normaalisti.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Moni käyttää sanaa domain tarkoittamaan koko verkkosivua, vaikka oikeasti domain on vain osoite ja DNS on järjestelmä, joka ohjaa liikenteen oikeaan paikkaan. Kun nämä ovat kunnossa, sivusto aukeaa oikein, sähköposti toimii ja muutokset voidaan tehdä hallitusti. Kun ne ovat pielessä, ongelmat voivat näkyä yllättävän monessa paikassa.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mitä domain tarkoittaa?</h2>
            <p>
              Domain on verkkosivun nimi eli osoite, jonka kirjoitat selaimeen, kuten rootit.fi. Se on käyttäjälle näkyvä tunniste, jonka avulla sivusto on helppo löytää ja muistaa.
            </p>
            <p>
              Domain itsessään ei kuitenkaan vielä sisällä sivuston sisältöä tai tiedostoja. Se on vähän kuin yrityksen nimi ja postiosoite samassa paketissa.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mitä DNS tekee?</h2>
            <p>
              DNS on järjestelmä, joka muuttaa domainin tekniseksi osoitteeksi, jotta selain tietää, mistä palvelimelta sisältö haetaan. Kun joku kirjoittaa domainin selaimeen, DNS kertoo minne liikenne ohjataan.
            </p>
            <p>
              Sama koskee sähköpostia, alidomaineja ja monia muita palveluita. Käytännössä DNS on yksi tärkeimmistä taustajärjestelmistä koko verkkonäkyvyydessä.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Miksi DNS on niin tärkeä?</h2>
            <p>
              Jos DNS-asetukset ovat väärin, sivu voi näyttää vanhaa sisältöä, mennä väärälle palvelimelle tai olla kokonaan tavoittamattomissa. Sähköposti voi myös lakata toimimasta, jos MX-tietueet eivät osoita oikeaan paikkaan.
            </p>
            <p>
              Tämä tekee DNS:stä erityisen tärkeän silloin, kun sivustoa siirretään, sähköpostia vaihdetaan tai palveluntarjoaja vaihtuu. Pieni virhe asetuksissa voi näkyä asiakkaalle heti.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yleisimmät DNS-ongelmat</h2>
            <p>
              Yksi tavallisimmista ongelmista on se, että domain osoittaa väärään IP-osoitteeseen. Toinen on se, että sähköpostin MX-tietueet puuttuvat tai ovat vanhentuneet.
            </p>
            <p>
              Myös TTL-arvot, alidomainit ja CNAME-tietueet voivat aiheuttaa hämmennystä, jos niitä muutetaan ilman ymmärrystä kokonaisuudesta. Ongelma ei aina näy heti, koska muutokset voivat päivittyä hitaasti eri puolilla verkkoa.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Milloin asetuksia kannattaa koskea?</h2>
            <p>
              DNS-asetuksia kannattaa muuttaa vain silloin, kun tiedät tarkalleen mitä olet tekemässä tai kun muutokselle on selkeä tarve. Esimerkiksi:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Verkkosivun siirto uuteen palveluun</li>
              <li>Sähköpostipalvelun vaihto</li>
              <li>Uuden alidomainin käyttöönotto</li>
            </ul>
            <p>
              Jos kyse on vain pienestä testistä tai arvailusta, riski on yleensä suurempi kuin hyöty. DNS on juuri se paikka, jossa varovaisuus säästää aikaa ja hermoja.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Näin ongelmia vältetään</h2>
            <p>
              Pidä aina kirjaa siitä, mitkä DNS-tietueet ovat käytössä ennen muutoksia. Tee muutokset yksi kerrallaan ja varmista lopuksi, että sivu, sähköposti ja mahdolliset alidomainit toimivat kuten pitää.
            </p>
            <p>
              Kun vaihdat palveluntarjoajaa, tarkista myös, onko vanhoja tietueita jäänyt päälle. Moni ongelma johtuu siitä, että uusi ja vanha asetuskokonaisuus ovat sekaisin keskenään.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yhteenveto käytännössä</h2>
            <p>
              Domain on verkkosivun osoite ja DNS on järjestelmä, joka ohjaa sen oikeaan paikkaan. Ne näyttävät taustalla yksinkertaisilta, mutta käytännössä niillä on valtava merkitys siihen, toimiiko sivusto ja sähköposti varmasti.
            </p>
            <p>
              Kun domain ja DNS ovat kunnossa, suuri osa verkkopalvelun perusongelmista pysyy poissa. Kun ne menevät pieleen, ongelmat voivat näyttää aluksi pieniltä, mutta vaikuttaa koko yrityksen näkyvyyteen ja yhteydenpitoon.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">Tarvitsetko apua domain- tai DNS-asioissa?</h3>
            <p className="mb-6 text-muted-foreground">
              Ota yhteyttä, niin selvitetään tilanne yhdessä.
            </p>
            <Button asChild size="lg">
              <Link href="/#consultation-mockup">Ota yhteyttä</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between border-t pt-8">
            <Link 
              href="/artikkelit/sahkoposti-roskapostiin" 
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Edellinen artikkeli
            </Link>
            <Link 
              href="/artikkelit/verkkosivujen-tietoturva" 
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
