import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Tietosuojaseloste – Rootit",
  description: "Rootitin tietosuojaseloste.",
  robots: { index: false, follow: true },
}

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

      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">
        Tietosuojaseloste
      </h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        Tähän tulee Rootitin tietosuojaseloste. Sisältö täydennetään ennen sivuston
        julkaisua: mitä tietoja kerätään, mihin niitä käytetään, kuinka kauan niitä
        säilytetään ja miten rekisteröity voi käyttää oikeuksiaan.
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Rekisterinpitäjä</h2>
          <p className="mt-2">Rootit — info@rootit.fi</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Kerättävät tiedot</h2>
          <p className="mt-2">
            Arviopyyntölomakkeen kautta annetut tiedot (sähköposti, mahdollinen puhelinnumero,
            sivuston osoite ja viesti) käsitellään ainoastaan yhteydenoton hoitamiseksi.
          </p>
        </section>
      </div>
    </main>
  )
}
