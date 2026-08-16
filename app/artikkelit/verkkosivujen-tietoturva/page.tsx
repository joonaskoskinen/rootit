import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Verkkosivujen tietoturva: 5 tärkeintä perusasiaa | Rootit.fi",
  description: "Tietoturvan perusasiat helposti: HTTPS, päivitykset, salasanat, varmuuskopiot ja muut keinot pitää sivusto turvassa.",
  keywords: ["verkkosivujen tietoturva", "HTTPS", "SSL", "WordPress tietoturva", "varmuuskopiot", "2FA", "kaksivaiheinen tunnistautuminen", "sivuston suojaus"],
  alternates: {
    canonical: "https://rootit.fi/artikkelit/verkkosivujen-tietoturva",
  },
  openGraph: {
    title: "Verkkosivujen tietoturva: 5 tärkeintä perusasiaa",
    description: "Tietoturvan perusasiat helposti: HTTPS, päivitykset, salasanat, varmuuskopiot ja muut keinot pitää sivusto turvassa.",
    url: "https://rootit.fi/artikkelit/verkkosivujen-tietoturva",
    siteName: "Rootit.fi",
    locale: "fi_FI",
    type: "article",
  },
}

export default function VerkkosivujenTietoturvaPage() {
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
              Verkkosivujen tietoturva: 5 asiaa jotka jokaisen pitäisi tietää
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Verkkosivun tietoturva ei ole vain isoja yrityksiä varten. Pienikin sivusto voi joutua hyökkäyksen kohteeksi, jos salasanat ovat heikot, päivitykset laiminlyödään tai varmuuskopioita ei ole.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Hyvä tietoturva ei tarkoita monimutkaista järjestelmää, vaan muutamaa perusasiaa, jotka tehdään kunnolla. Kun nämä ovat kunnossa, sivusto on jo paljon turvallisempi.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">1. Käytä HTTPS:ää</h2>
            <p>
              HTTPS eli SSL/TLS-salaus suojaa liikennettä selaimen ja palvelimen välillä. Se estää ulkopuolisia näkemästä tai muuttamasta tietoja matkalla.
            </p>
            <p>
              Käytännössä tämä on perusvaatimus kaikille sivustoille, etenkin jos siellä on lomakkeita, kirjautumisia tai asiakastietoja. Jos sivustossa ei ole HTTPS:ää, se näyttää käyttäjälle heti vähemmän luotettavalta.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">2. Pidä päivitykset ajan tasalla</h2>
            <p>
              Vanhentunut WordPress, lisäosa tai teema on yksi tavallisimmista tietoturvariskeistä. Päivitykset sisältävät usein korjauksia haavoittuvuuksiin, joita hyökkääjät voivat muuten hyödyntää.
            </p>
            <p>
              Siksi päivitysten lykkääminen ei yleensä ole hyvä säästökeino. Parempi tapa on pitää sivusto ajan tasalla säännöllisesti ja testata muutokset hallitusti.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">3. Käytä vahvoja salasanoja ja kaksivaiheista tunnistautumista</h2>
            <p>
              Heikot salasanat ovat edelleen yksi helpoimmista tavoista murtautua sisään. Siksi jokaisella tärkeällä tunnuksella pitäisi olla uniikki ja vahva salasana sekä mahdollisuuksien mukaan kaksivaiheinen tunnistautuminen.
            </p>
            <p>
              Tämä koskee WordPressiä, hostingia, sähköpostia ja muita hallintatunnuksia. Kun kirjautuminen vaatii myös vahvistuksen puhelimesta tai sovelluksesta, satunnainen hyökkääjä jää helposti ulos.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">4. Varmuuskopioi säännöllisesti</h2>
            <p>
              Backup ei ole hyödyllinen, jos sitä ei voi palauttaa. Siksi varmuuskopioita pitäisi ottaa säännöllisesti ja säilyttää myös muualla kuin samassa ympäristössä, jossa itse sivusto on.
            </p>
            <p>
              Moni huomaa varmuuskopion puutteen vasta silloin, kun sivusto on jo rikki tai hakkeroitu. Hyvä käytäntö on testata palautus etukäteen, jotta tiedät että se todella toimii.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">5. Poista turha ja seuraa poikkeamia</h2>
            <p>
              Kaikki ylimääräinen lisää riskiä. Käyttämättömät lisäosat, vanhat teemat ja turhat käyttäjätunnukset kannattaa poistaa, koska ne voivat muodostaa turhia hyökkäyspintoja.
            </p>
            <p>
              Myös lokien ja kirjautumisten seuraaminen auttaa huomaamaan poikkeavat tapahtumat ajoissa. Jos joku yrittää jatkuvasti kirjautua sisään tai tiedostoihin tehdään odottamattomia muutoksia, siihen kannattaa reagoida heti.
            </p>

            <h2 className="mt-12 text-2xl font-semibold">Käytännön tarkistuslista</h2>
            <p>
              Jos haluat hoitaa tietoturvan nopeasti kuntoon, aloita näistä:
            </p>
            <ul className="my-6 list-disc pl-6 space-y-2">
              <li>Varmista, että HTTPS on käytössä</li>
              <li>Päivitä WordPress, teema ja lisäosat</li>
              <li>Ota käyttöön 2FA tärkeille tunnuksille</li>
              <li>Tarkista, että varmuuskopiot tehdään automaattisesti</li>
              <li>Poista käyttämättömät lisäosat ja vanhat käyttäjät</li>
              <li>Seuraa kirjautumisia ja epäilyttäviä muutoksia</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold">Yhteenveto käytännössä</h2>
            <p>
              Verkkosivujen tietoturva rakentuu perusasioista: salaus, päivitykset, vahvat tunnukset, varmuuskopiot ja turhan karsinta. Kun nämä hoidetaan, sivusto kestää paljon paremmin tavallisimmat riskit.
            </p>
            <p>
              Tietoturva ei ole kertaprojekti, vaan jatkuva tapa huolehtia sivustosta. Siksi pienetkin toimenpiteet ovat arvokkaita, kun ne tehdään säännöllisesti.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-2xl bg-muted/50 p-8 text-center">
            <h3 className="mb-3 text-xl font-semibold">Haluatko varmistaa sivustosi tietoturvan?</h3>
            <p className="mb-6 text-muted-foreground">
              Ota yhteyttä, niin käydään tilanne läpi yhdessä.
            </p>
            <Button asChild size="lg">
              <Link href="/#consultation-mockup">Ota yhteyttä</Link>
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between border-t pt-8">
            <Link 
              href="/artikkelit/domain-ja-dns" 
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Edellinen artikkeli
            </Link>
            <Link 
              href="/artikkelit/etatuki-turvallisesti" 
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
