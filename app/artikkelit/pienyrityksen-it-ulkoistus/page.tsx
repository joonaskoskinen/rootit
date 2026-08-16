import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Pienyrityksen IT-arki: mitä kannattaa ulkoistaa? | Rootit.fi",
  description: "Mitkä IT-tehtävät kannattaa ulkoistaa pienyrityksessä? Katso käytännön vinkit, hyödyt ja mitä kannattaa pitää omissa käsissä.",
  keywords: ["IT-ulkoistus", "pienyritys IT", "IT-tuki yritykselle", "ulkoistettu IT", "yrityksen IT-hallinta", "IT-palvelut pienyritykselle"],
  alternates: {
    canonical: "https://rootit.fi/artikkelit/pienyrityksen-it-ulkoistus",
  },
  openGraph: {
    title: "Pienyrityksen IT-arki: mitä kannattaa ulkoistaa?",
    description: "Mitkä IT-tehtävät kannattaa ulkoistaa pienyrityksessä? Katso käytännön vinkit, hyödyt ja mitä kannattaa pitää omissa käsissä.",
    url: "https://rootit.fi/artikkelit/pienyrityksen-it-ulkoistus",
    siteName: "Rootit.fi",
    locale: "fi_FI",
    type: "article",
  },
}

export default function PienyrityksenItUlkoistusPage() {
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
              Pienyrityksen IT-arki: Mitä kannattaa ulkoistaa?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pienyrityksessä kaikkea ei kannata eikä tarvitse tehdä itse. Kun IT-arkea ulkoistaa järkevästi, säästyy aikaa, riskejä pienenee ja oma työ keskittyy siihen, mikä oikeasti tuottaa liiketoimintaa.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Ulkoistus ei tarkoita sitä, että luovuttaisit kaiken käsistäsi, vaan sitä että siirrät tietyt tehtävät sellaiselle, joka tekee ne nopeammin ja varmemmin. Tämä on usein fiksumpaa kuin yrittää hoitaa kaikki satunnaisesti itse.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mitä kannattaa ulkoistaa?</h2>
            <p>
              Tyypillisiä ulkoistettavia IT-tehtäviä ovat:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Tekninen tuki</li>
              <li>Päivitysten hallinta</li>
              <li>Varmuuskopiot</li>
              <li>Tietoturva</li>
              <li>Verkkosivujen ylläpito</li>
              <li>Pilvipalveluiden asetukset</li>
              <li>Sähköpostin toimitusongelmat</li>
              <li>Domainit, DNS ja käyttäjätunnukset</li>
            </ul>
            <p>
              Jos tehtävä on toistuva, tekninen tai helposti rikkoontuva, se on usein hyvä kandidaatti ulkoistukseen. Tällöin sisäinen aika ei kulu tulipalojen sammuttamiseen.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mitä kannattaa pitää omissa käsissä?</h2>
            <p>
              Kaikkea ei silti kannata antaa ulkopuolelle. Nämä kannattaa pitää omassa hallinnassa:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Liiketoiminnan päätökset</li>
              <li>Asiakasviestinnän sisältö</li>
              <li>Tärkeimmät tunnukset</li>
              <li>Strategiset valinnat</li>
            </ul>
            <p>
              Ulkoistaja voi hoitaa teknisen toteutuksen, mutta sinun pitäisi tietää, mitä järjestelmässä tapahtuu ja kenellä on pääsy mihinkin. Näin säilytät kontrollin, vaikka et tekisi kaikkea itse.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Milloin ulkoistus kannattaa?</h2>
            <p>
              Ulkoistus kannattaa erityisesti silloin, kun ongelmat vievät aikaa enemmän kuin ne tuottavat arvoa. Jos sama tekninen asia pyörii jatkuvasti pöydällä, jos päivitykset unohtuvat tai jos tietoturva mietityttää, ulkoistus voi säästää rahaa jo hyvin nopeasti.
            </p>
            <p>
              Myös kasvuvaiheessa se on järkevää, koska silloin teknisten asioiden määrä yleensä lisääntyy. Pienyrityksen ei tarvitse rakentaa omaa IT-osastoa ennen kuin siihen oikeasti on tarve.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Hyödyt käytännössä</h2>
            <p>
              Ulkoistuksen suurimpia hyötyjä ovat:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Ennustettavat kustannukset</li>
              <li>Nopeampi reagointi</li>
              <li>Parempi osaaminen</li>
            </ul>
            <p>
              Kun apu on saatavilla tarvittaessa, ongelmat eivät jää pitkäksi aikaa roikkumaan. Samalla saat käyttöösi osaamista, jota ei ehkä olisi kannattavaa palkata omaksi työntekijäksi. Tämä on erityisen hyödyllistä silloin, kun tarve on monipuolinen mutta ei kokoaikainen.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yksinkertainen tapa aloittaa</h2>
            <p>
              Aloita yhdestä selkeästä kokonaisuudesta, esimerkiksi sivuston ylläpidosta tai sähköpostin hallinnasta. Kun yksi osa-alue toimii hyvin, voit laajentaa myöhemmin muihin palveluihin.
            </p>
            <p>
              Kannattaa myös sopia etukäteen:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Miten yhteydenpito toimii</li>
              <li>Mitä sisältyy palveluun</li>
              <li>Kuka vastaa mistäkin</li>
            </ul>
            <p>
              Mitä selkeämpi malli on alussa, sitä vähemmän tulee väärinymmärryksiä myöhemmin.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yhteenveto käytännössä</h2>
            <p>
              Pienyrityksen IT-arki toimii parhaiten, kun omat voimavarat käytetään liiketoimintaan ja tekniset tukitehtävät hoidetaan järkevästi ulkoa käsin.
            </p>
            <p>
              Ulkoistus ei ole luovuttamista, vaan tapa hankkia osaamista silloin kun sitä tarvitaan. Usein jo muutama oikein ulkoistettu asia vähentää stressiä ja tekee arjesta paljon sujuvampaa. Kun perusta on kunnossa, myös kasvu on helpompaa.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">Haluatko keskustella IT-ulkoistuksesta?</h3>
            <p className="mb-6 text-muted-foreground">
              Ota yhteyttä, niin katsotaan yhdessä mikä sopisi juuri teidän tilanteeseen.
            </p>
            <Button asChild size="lg">
              <Link href="/#consultation-mockup">Ota yhteyttä</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between border-t pt-8">
            <Link 
              href="/artikkelit/etatuki-turvallisesti" 
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Edellinen artikkeli
            </Link>
            <div />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
