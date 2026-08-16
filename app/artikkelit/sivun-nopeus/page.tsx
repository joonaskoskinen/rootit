import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleSchema } from "@/components/article-schema"

export const metadata: Metadata = {
  title: "Miksi sivusto on hidas? Näin latausnopeus vaikuttaa asiakkaisiin | Rootit",
  description: "Hidas verkkosivu karkottaa kävijöitä ennen kuin he näkevät sisältöä. Katso yleisimmät syyt hitauteen ja mistä kannattaa aloittaa korjaus.",
  keywords: ["sivusto hidas", "latausnopeus", "verkkosivun nopeus", "sivu latautuu hitaasti", "Core Web Vitals", "kuvien optimointi"],
  alternates: {
    canonical: "https://rootit.fi/artikkelit/sivun-nopeus",
  },
  openGraph: {
    title: "Miksi sivusto on hidas? Näin latausnopeus vaikuttaa asiakkaisiin",
    description: "Hidas verkkosivu karkottaa kävijöitä ennen kuin he näkevät sisältöä. Katso yleisimmät syyt hitauteen ja mistä kannattaa aloittaa korjaus.",
    url: "https://rootit.fi/artikkelit/sivun-nopeus",
    siteName: "Rootit",
    locale: "fi_FI",
    type: "article",
  },
}

export default function SivunNopeusPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ArticleSchema
        title="Miksi sivusto on hidas? Näin latausnopeus vaikuttaa asiakkaisiin"
        description="Hidas verkkosivu karkottaa kävijöitä ennen kuin he näkevät sisältöä. Katso yleisimmät syyt hitauteen ja mistä kannattaa aloittaa korjaus."
        url="https://rootit.fi/artikkelit/sivun-nopeus"
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
              Miksi sivusto on hidas ja miksi se maksaa asiakkaita?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kävijä ei odota. Jos sivu ei ehdi näyttää mitään muutamassa sekunnissa, suurin osa lähtee pois ennen kuin näkee, mitä yritys tekee tai miten sitä voi lähestyä.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Latausnopeus ei ole vain tekninen yksityiskohta. Se on ensimmäinen ja usein hiljaisin syy siihen, että sivu ei tuo yhteydenottoja, vaikka sisältö ja ulkoasu olisivat kunnossa. Hitautta ei aina huomaa itse, koska oma tietokone ja yhteys ovat usein nopeampia kuin asiakkaan.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Miksi muutama sekunti ratkaisee</h2>
            <p>
              Suurin osa kävijöistä tulee sivulle mobiilissa, usein hakutuloksesta tai linkistä somessa. Jos sivu ei näytä mitään parissa sekunnissa, moni painaa takaisin-nappia ja päätyy seuraavaan hakutulokseen.
            </p>
            <p>
              Tämä tarkoittaa, että hidas sivu ei vain tunnu ikävältä - se aktiivisesti karsii asiakkaita pois ennen kuin viesti tai tarjous ehtii näkyä.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yleisimmät syyt hitauteen</h2>
            <p>
              Yleisin yksittäinen syy on liian raskaat kuvat, joita ei ole pakattu tai kokoa muutettu ennen lataamista sivulle. Toinen tavallinen syy on liian moni lisäosa tai skripti, joita sivu lataa vaikka niitä ei oikeasti tarvita jokaisella sivulla.
            </p>
            <p>
              Myös huono hosting, päivittämätön alusta ja liian raskaat teemat hidastavat sivua. Usein kyse ei ole yhdestä isosta ongelmasta, vaan monesta pienestä asiasta, jotka summautuvat.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Miten hitautta voi mitata</h2>
            <p>
              Nopeutta ei kannata arvioida vain omalla tunnollaan. Ilmaiset työkalut, kuten Googlen PageSpeed Insights, näyttävät konkreettisesti, mikä sivulla hidastaa latausta ja kuinka paljon.
            </p>
            <p>
              Erityisesti kannattaa katsoa, kuinka nopeasti sivun tärkein sisältö - esimerkiksi otsikko ja päänappi - tulee näkyviin. Se on kävijälle tärkeämpää kuin se, milloin koko sivu on täysin latautunut.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Mistä kannattaa aloittaa</h2>
            <p>
              Helpoin ja usein tehokkain korjaus on kuvien optimointi: oikea koko, pakattu tiedostomuoto ja tarpeeton lataaminen pois käytöstä sivuilta, joilla kuvaa ei näytetä. Tämä yksin voi puolittaa latausajan monella sivulla.
            </p>
            <p>
              Seuraavaksi kannattaa käydä läpi lisäosat ja skriptit: mitä oikeasti tarvitaan ja mitä on jäänyt käyttöön turhaan. Vasta viimeiseksi kannattaa harkita hostingin tai alustan vaihtoa, koska se on isompi toimenpide.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Milloin hitaus on todellinen ongelma</h2>
            <p>
              Jos sivu tuntuu hidastelevalta myös hyvällä yhteydellä, tai jos kävijät mainitsevat sivun jumittavan, kannattaa reagoida nopeasti. Sama pätee, jos liikennettä on paljon, mutta yhteydenottoja tulee vähän - hitaus on yksi tavallisimmista selittäjistä sen takana.
            </p>
            <p>
              Pienelle sivustolle riittää usein muutama kohdennettu korjaus. Isommalle tai myyntikriittiselle sivulle kannattaa tehdä säännöllinen tarkistus, ettei hitaus pääse hiipimään takaisin ajan myötä.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yhteenveto käytännössä</h2>
            <p>
              Hidas sivu on kallis ongelma, koska se karsii asiakkaita jo ennen kuin he näkevät, mitä yritys tarjoaa. Suurin osa hitaudesta korjaantuu muutamalla kohdennetulla toimenpiteellä, ilman koko sivun uudistamista.
            </p>
            <p>
              Kun latausnopeus mitataan ja korjataan järjestelmällisesti, sivu pysyy nopeana myös jatkossa - ei vain sillä hetkellä, kun se viimeksi testattiin.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">Tuntuuko sivustosi hitaalta?</h3>
            <p className="mb-6 text-muted-foreground">
              Ota yhteyttä, niin katsotaan mistä hitaus johtuu.
            </p>
            <Button asChild size="lg">
              <Link href="/#consultation-mockup">Ota yhteyttä</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between border-t pt-8">
            <Link
              href="/artikkelit/wordpress-ei-toimi"
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Edellinen artikkeli
            </Link>
            <Link
              href="/artikkelit/domain-ja-dns"
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
