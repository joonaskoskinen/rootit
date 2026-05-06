import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Sähköposti roskapostiin? Tarkista SPF, DKIM ja DMARC | Rootit.fi",
  description: "Menevätkö viestit roskapostiin? Lue selkeä opas SPF-, DKIM- ja DMARC-asetuksista sekä käytännön korjausvinkeistä.",
  keywords: ["sähköposti roskaposti", "SPF", "DKIM", "DMARC", "sähköpostin toimitusvarmuus", "email deliverability", "sähköpostiasetukset"],
  alternates: {
    canonical: "https://rootit.fi/artikkelit/sahkoposti-roskapostiin",
  },
  openGraph: {
    title: "Sähköposti roskapostiin? Tarkista SPF, DKIM ja DMARC",
    description: "Menevätkö viestit roskapostiin? Lue selkeä opas SPF-, DKIM- ja DMARC-asetuksista sekä käytännön korjausvinkeistä.",
    url: "https://rootit.fi/artikkelit/sahkoposti-roskapostiin",
    siteName: "Rootit.fi",
    locale: "fi_FI",
    type: "article",
  },
}

export default function SahkopostiRoskapostiinPage() {
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
              Sähköposti menee roskapostiin? Tarkista nämä asetukset
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kun sähköposti päätyy roskapostikansioon, ongelma ei yleensä ole yksittäisessä viestissä vaan lähetyksen luottamuksessa. Sähköpostin toimitusvarmuuteen vaikuttavat ainakin lähettäjän tunnistus, domainin asetukset, viestin sisältö ja vastaanottajan palvelimen oma suodatus.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Siksi pelkkä &quot;lähetä uudestaan&quot; ei yleensä auta, vaan taustalla oleva syy pitää selvittää. Hyvä uutinen on, että monen roskapostiongelman voi korjata melko suoraviivaisesti.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Miksi viestit päätyvät roskapostiin?</h2>
            <p>
              Sähköpostipalvelimet yrittävät koko ajan arvioida, onko viesti luotettava vai epäilyttävä. Jos lähettäjän domainista ei ole kunnollisia varmennuksia, viestin otsikko ja sisältö näyttävät epäilyttäviltä tai palvelin huomaa poikkeavaa lähetyskäyttäytymistä, viesti voidaan siirtää roskapostiin.
            </p>
            <p>
              Tämä koskee erityisesti yrityssähköposteja, joissa viestien pitäisi mennä perille luotettavasti asiakkaille, yhteistyökumppaneille ja toimittajille. Ongelma voi näkyä myös niin, että osa vastaanottajista saa viestit normaalisti ja osa ei lainkaan.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">SPF, DKIM ja DMARC</h2>
            <p>
              Nämä kolme lyhennettä ovat sähköpostin perusasiaa:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li><strong>SPF</strong> kertoo, mistä palvelimista domainin nimissä saa lähettää sähköpostia</li>
              <li><strong>DKIM</strong> allekirjoittaa viestin kryptografisesti</li>
              <li><strong>DMARC</strong> määrittää, miten vastaanottajan pitäisi toimia, jos lähettäjä ei läpäise tarkistuksia</li>
            </ul>
            <p>
              Kun nämä ovat kunnossa, vastaanottajalle on helpompi osoittaa, että viesti oikeasti tulee siltä taholta, jonka nimissä se lähetetään. Ilman näitä viestejä voidaan pitää epäluotettavina tai jopa väärinä lähetyksinä.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Tarkista nämä ensimmäisenä</h2>
            <p>
              Aloita lähettävästä domainista. Varmista, että SPF-recordissa ovat oikeat palvelimet ja ettei sama domain yritä lähettää viestejä useasta eri paikasta ilman asetuksia.
            </p>
            <p>
              Tarkista sen jälkeen, että DKIM-allekirjoitus on käytössä ja toimii oikein. Lopuksi katso DMARC-politiikka: aluksi se voi olla varovainen, mutta tärkeintä on, että se on olemassa ja antaa näkyvyyden virheisiin.
            </p>
            <p>
              Jos jokin näistä puuttuu, toimitusvarmuus kärsii helposti.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Sisältö vaikuttaa myös</h2>
            <p>
              Teknisten asetusten lisäksi myös itse viestin sisältö merkitsee. Liian myyvä otsikko, epäilyttävät linkit, huonosti muotoiltu HTML tai liiallinen määrä kuvia voivat kasvattaa roskapostiriskiä.
            </p>
            <p>
              Sama koskee tilanteita, joissa lähetysmäärät kasvavat yhtäkkiä rajusti tai lähettäjän maine on heikko. Siksi kannattaa pitää viestit siisteinä, hyödyllisinä ja rakenteeltaan maltillisina.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Milloin ongelma ei ole teidän päässä</h2>
            <p>
              Jos viestit menevät roskapostiin vain tietyille vastaanottajille, vika voi olla heidän omassa sähköpostijärjestelmässään. Esimerkiksi tiukat yritysverkot ja suodattimet voivat käsitellä samoja viestejä eri tavalla.
            </p>
            <p>
              Jos taas kaikki viestit alkavat mennä roskapostiin yhtä aikaa, syy on yleensä oma domain, oma sähköpostipalvelu tai lähetysmalli. Tällöin kannattaa tarkistaa myös mahdolliset muutokset: uusi palveluntarjoaja, uusi verkkosivulomake tai uusi lähetysjärjestelmä.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Käytännön korjauspolku</h2>
            <p>
              Hyvä eteneminen on tämä:
            </p>
            <ol className="my-6 list-decimal pl-6 space-y-2">
              <li>Tarkista domainin SPF-, DKIM- ja DMARC-tiedot</li>
              <li>Testaa lähetys toisesta sähköpostipalvelusta</li>
              <li>Tarkista viestin sisältö</li>
              <li>Katso lopuksi mahdolliset lokit tai virheraportit</li>
            </ol>
            <p>
              Jos käytössä on verkkosivulomake, varmista että se ei lähetä viestejä &quot;väärällä tavalla&quot; suoraan palvelimelta ilman kunnollista autentikointia. Moni lomake näyttää toimivan, mutta päätyy vastaanottajan roskapostiin juuri tästä syystä.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Yhteenveto käytännössä</h2>
            <p>
              Roskapostiin päätyvä sähköposti on yleensä yhdistelmä teknisiä asetuksia ja lähettäjän luottamusta. Kun SPF, DKIM ja DMARC ovat kunnossa, viestit menevät huomattavasti todennäköisemmin perille.
            </p>
            <p>
              Siksi tämä on yksi niistä asioista, joissa pieni alkuinvestointi säästää paljon aikaa myöhemmin. Kun sähköposti toimii, myös yhteydenotot, tarjouksien lähettäminen ja asiakasviestintä toimivat paljon varmemmin.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">Tarvitsetko apua sähköpostiasetusten kanssa?</h3>
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
