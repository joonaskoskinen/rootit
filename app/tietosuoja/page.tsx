import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Tietosuojaseloste – Rootit",
  description: "Rootitin tietosuojaseloste: mitä tietoja kerätään, mihin niitä käytetään ja miten voit käyttää oikeuksiasi.",
  robots: { index: true, follow: true },
}

const lastUpdated = "16.8.2026"

export default function TietosuojaPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-20 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Takaisin etusivulle
      </Link>

      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground text-balance">
        Tietosuojaseloste
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Päivitetty {lastUpdated}</p>
      <p className="mt-5 leading-relaxed text-muted-foreground">
        Tässä selosteessa kerromme, mitä henkilötietoja Rootit kerää, mihin niitä käytetään,
        kuinka kauan niitä säilytetään ja mitä oikeuksia sinulla on. Käsittelemme tietoja
        EU:n yleisen tietosuoja-asetuksen (GDPR) mukaisesti.
      </p>

      <div className="mt-10 space-y-9 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">1. Rekisterinpitäjä</h2>
          <p className="mt-2">
            Rootit
            <br />
            Sähköposti:{" "}
            <a href="mailto:rootit.info@gmail.com" className="text-primary hover:underline">
              rootit.info@gmail.com
            </a>
            <br />
            Verkkosivu: rootit.fi
          </p>
          <p className="mt-2">
            Tietosuojaa koskevissa kysymyksissä voit olla yhteydessä yllä olevaan
            sähköpostiosoitteeseen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">2. Mitä tietoja keräämme</h2>
          <p className="mt-2">
            Keräämme vain ne tiedot, jotka annat itse ottaessasi yhteyttä tai pyytäessäsi
            ilmaista sivustoarviota:
          </p>
          <ul className="mt-3 space-y-1.5 pl-5">
            <li className="list-disc">sähköpostiosoite</li>
            <li className="list-disc">mahdollinen puhelinnumero</li>
            <li className="list-disc">verkkosivustosi osoite</li>
            <li className="list-disc">viestisi sisältö ja muut vapaaehtoisesti antamasi tiedot</li>
          </ul>
          <p className="mt-3">
            Emme kerää arkaluonteisia henkilötietoja emmekä käytä sivustolla profilointia tai
            automaattista päätöksentekoa.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">3. Mihin tietoja käytetään</h2>
          <p className="mt-2">Käytämme antamiasi tietoja ainoastaan seuraaviin tarkoituksiin:</p>
          <ul className="mt-3 space-y-1.5 pl-5">
            <li className="list-disc">yhteydenottoosi vastaaminen ja sivustoarvion toimittaminen</li>
            <li className="list-disc">palvelusta sopiminen ja sen toteuttaminen kanssasi</li>
            <li className="list-disc">tarpeellinen viestintä yhteistyön aikana</li>
          </ul>
          <p className="mt-3">
            Emme käytä tietojasi markkinointiin ilman suostumustasi emmekä myy tai vuokraa niitä
            kolmansille osapuolille.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">4. Käsittelyn peruste</h2>
          <p className="mt-2">
            Henkilötietojen käsittely perustuu suostumukseesi yhteydenoton yhteydessä sekä
            oikeutettuun etuumme vastata yhteydenottoihin ja hoitaa asiakassuhdetta. Jos
            solmimme sopimuksen, käsittely perustuu sopimuksen täytäntöönpanoon.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">5. Säilytysaika</h2>
          <p className="mt-2">
            Säilytämme tietoja vain niin kauan kuin on tarpeen yhteydenoton hoitamiseksi ja
            mahdollisen asiakassuhteen ylläpitämiseksi. Jos yhteistyötä ei synny, poistamme
            yhteydenottotiedot viimeistään 12 kuukauden kuluessa. Asiakassuhteeseen liittyvät
            tiedot säilytetään lakisääteisten velvoitteiden edellyttämän ajan.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">6. Tietojen luovutus ja käsittelijät</h2>
          <p className="mt-2">
            Emme luovuta tietojasi ulkopuolisille markkinointitarkoituksiin. Käytämme
            luotettavia palveluntarjoajia esimerkiksi sähköpostin ja lomakkeen välitykseen,
            jolloin tietoja voidaan käsitellä näiden palveluiden kautta. Tietoja voidaan
            käsitellä myös EU/ETA-alueen ulkopuolella, jolloin huolehdimme asianmukaisista
            suojatoimista. Tietoja voidaan luovuttaa viranomaisille vain lain niin vaatiessa.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">7. Evästeet</h2>
          <p className="mt-2">
            Sivusto voi käyttää välttämättömiä evästeitä sivuston teknisen toiminnan
            varmistamiseksi. Emme käytä seurantaan tai mainontaan perustuvia evästeitä ilman
            suostumustasi.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">8. Tietojen suojaus</h2>
          <p className="mt-2">
            Käsittelemme tietoja luottamuksellisesti. Pääsy tietoihin on rajattu vain niille,
            jotka tarvitsevat niitä yhteydenoton hoitamiseksi, ja käytämme asianmukaisia
            teknisiä ja organisatorisia suojatoimia.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">9. Sinun oikeutesi</h2>
          <p className="mt-2">Sinulla on oikeus:</p>
          <ul className="mt-3 space-y-1.5 pl-5">
            <li className="list-disc">tarkastaa, mitä tietoja sinusta on tallennettu</li>
            <li className="list-disc">pyytää tietojesi oikaisua tai poistamista</li>
            <li className="list-disc">rajoittaa tai vastustaa käsittelyä</li>
            <li className="list-disc">peruuttaa antamasi suostumus milloin tahansa</li>
            <li className="list-disc">tehdä valitus tietosuojaviranomaiselle</li>
          </ul>
          <p className="mt-3">
            Voit käyttää oikeuksiasi ottamalla yhteyttä osoitteeseen{" "}
            <a href="mailto:rootit.info@gmail.com" className="text-primary hover:underline">
              rootit.info@gmail.com
            </a>
            . Jos katsot, että tietojasi käsitellään lainvastaisesti, voit tehdä valituksen
            tietosuojavaltuutetun toimistolle (tietosuoja.fi).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">10. Muutokset tähän selosteeseen</h2>
          <p className="mt-2">
            Voimme päivittää tätä tietosuojaselostetta esimerkiksi palvelun tai lainsäädännön
            muuttuessa. Ajantasainen versio on aina saatavilla tällä sivulla, ja päivämäärä
            näkyy sivun yläosassa.
          </p>
        </section>
      </div>
    </main>
  )
}
