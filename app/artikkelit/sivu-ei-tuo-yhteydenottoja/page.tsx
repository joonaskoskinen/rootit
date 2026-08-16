import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleSchema } from "@/components/article-schema"

export const metadata: Metadata = {
  title: "Miksi kotisivu ei tuo yhteydenottoja? 6 yleistä syytä | Rootit",
  description: "Sivulla on kävijöitä, mutta yhteydenottoja ei tule? Käy läpi kuusi yleisintä syytä, jotka estävät kävijää ottamasta yhteyttä.",
  keywords: ["kotisivu ei tuo asiakkaita", "verkkosivu ei toimi", "call to action", "sivun konversio", "yhteydenottolomake", "verkkosivun toimivuus"],
  alternates: {
    canonical: "https://rootit.fi/artikkelit/sivu-ei-tuo-yhteydenottoja",
  },
  openGraph: {
    title: "Miksi kotisivu ei tuo yhteydenottoja? 6 yleistä syytä",
    description: "Sivulla on kävijöitä, mutta yhteydenottoja ei tule? Käy läpi kuusi yleisintä syytä, jotka estävät kävijää ottamasta yhteyttä.",
    url: "https://rootit.fi/artikkelit/sivu-ei-tuo-yhteydenottoja",
    siteName: "Rootit",
    locale: "fi_FI",
    type: "article",
  },
}

export default function SivuEiTuoYhteydenottojaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ArticleSchema
        title="Miksi kotisivu ei tuo yhteydenottoja? 6 yleistä syytä"
        description="Sivulla on kävijöitä, mutta yhteydenottoja ei tule? Käy läpi kuusi yleisintä syytä, jotka estävät kävijää ottamasta yhteyttä."
        url="https://rootit.fi/artikkelit/sivu-ei-tuo-yhteydenottoja"
      />
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
              Kävijöitä on, mutta yhteydenottoja ei tule? 6 yleistä syytä
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Moni sivusto näyttää siistiltä, mutta ei tuota yhtä yhteydenottoa kuukaudessa. Syy ei useinkaan ole liikenteen puute, vaan se, että sivu ei ohjaa kävijää selkeästi eteenpäin.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Kun kävijä saapuu sivulle, hänellä on muutama sekunti aikaa ymmärtää, mistä on kyse ja mitä hänen kannattaisi tehdä seuraavaksi. Jos tämä jää epäselväksi, kävijä poistuu - eikä hän jää selittämään syytä.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">1. Ensivaikutelma ei kerro, mitä yritys tekee</h2>
            <p>
              Jos otsikko ja ensimmäinen näkymä eivät kerro selkeästi, mitä yritys tekee ja kenelle, kävijä joutuu arvailemaan. Moni ei jaksa arvailla, vaan siirtyy seuraavaan hakutulokseen.
            </p>
            <p>
              Selkeä ensivaikutelma vastaa käytännössä kysymykseen: mitä tämä yritys tekee, ja kuuluuko minä sen kohderyhmään?
            </p>

            <h2 className="mt-12 text-2xl font-semibold">2. Seuraava askel ei ole näkyvissä</h2>
            <p>
              Jos sivulla ei ole selkeää nappia tai kehotusta - kuten "Pyydä tarjous" tai "Ota yhteyttä" - kävijä ei tiedä, mitä tehdä, vaikka olisi kiinnostunut. Pelkkä puhelinnumero pienellä fontilla footerissa ei riitä.
            </p>
            <p>
              Toimiva sivu näyttää selkeän seuraavan askeleen useassa kohdassa sivua, ei vain yhdessä paikassa aivan lopussa.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">3. Luottamus jää rakentumatta</h2>
            <p>
              Kävijä harvoin ottaa yhteyttä tuntemattomaan yritykseen, jos sivulla ei ole mitään, joka vahvistaa luottamusta: ei kuvia, ei referenssejä, ei selkeää tietoa siitä keitä te olette.
            </p>
            <p>
              Pienikin määrä konkretiaa - kuka teet työn, missä toimit, millaisia asiakkaita olet auttanut - vähentää kävijän epävarmuutta merkittävästi.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">4. Lomake tai yhteydenotto on liian raskas</h2>
            <p>
              Jos yhteydenottolomake kysyy kymmenen kenttää tai puhelinsoitto tuntuu isolta askeleelta, moni jättää sen tekemättä. Kynnys ottaa yhteyttä kannattaa pitää mahdollisimman matalana, varsinkin ensimmäisessä kontaktissa.
            </p>
            <p>
              Usein toimii parhaiten lyhyt lomake tai selkeä lupaus siitä, mitä tapahtuu yhteydenoton jälkeen - esimerkiksi "vastaan vuorokauden sisällä".
            </p>

            <h2 className="mt-12 text-2xl font-semibold">5. Sivu on hidas tai hankala mobiilissa</h2>
            <p>
              Suurin osa kävijöistä käyttää sivua puhelimella. Jos teksti on liian pientä, napit ovat vaikeasti osuttavissa tai sivu latautuu hitaasti, kävijä turhautuu ennen kuin ehtii nähdä sisältöä kunnolla.
            </p>
            <p>
              Tässä kohtaa kannattaa testata sivu itse omalla puhelimella, koska ongelma huomataan usein vasta silloin konkreettisesti.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">6. Sisältö puhuu yritykselle, ei asiakkaalle</h2>
            <p>
              Moni sivu kertoo paljon yrityksen historiasta ja arvoista, mutta ei vastaa kävijän oikeaan kysymykseen: mitä hyötyä minä saan ja miksi valitsisin juuri teidät. Kun teksti keskittyy asiakkaan ongelmaan, viesti osuu paremmin.
            </p>
            <p>
              Tämä ei tarkoita, että sivun pitäisi olla myyntipuhe alusta loppuun - riittää, että jokainen osio vastaa jotenkin kävijän kannalta olennaiseen kysymykseen.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mistä kannattaa aloittaa</h2>
            <p>
              Kaikkea ei tarvitse korjata kerralla. Usein suurin vaikutus saadaan, kun korjataan ensin ensivaikutelma ja seuraava askel - ne kaksi asiaa, jotka vaikuttavat suoraan siihen, jääkö kävijä sivulle vai poistuuko hän saman tien.
            </p>
            <p>
              Muut kohdat, kuten luottamuselementit ja lomakkeen keventäminen, kannattaa käydä läpi sen jälkeen, kun perusta on kunnossa.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yhteenveto käytännössä</h2>
            <p>
              Kun sivulla on kävijöitä mutta ei yhteydenottoja, syy löytyy tavallisesti sivun rakenteesta ja viestistä, ei liikenteen määrästä. Selkeä ensivaikutelma, näkyvä seuraava askel ja matala kynnys yhteydenottoon ratkaisevat useimmiten suurimman osan ongelmasta.
            </p>
            <p>
              Pienikin, kohdennettu korjaus näissä kohdissa voi näkyä suoraan siinä, kuinka moni kävijä lopulta ottaa yhteyttä.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">Ei tarpeeksi yhteydenottoja sivustolta?</h3>
            <p className="mb-6 text-muted-foreground">
              Ota yhteyttä, niin katsotaan mistä yhteydenottojen puute johtuu.
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
            <div />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
