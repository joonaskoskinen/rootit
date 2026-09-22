import { Check, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RequestReviewButton } from "@/components/request-review-button"

const FIX_ITEMS = [
  "Etusivun viestin selkeytys",
  "CTA-rakenteen parannus",
  "Mobiilikäytön tärkeimmät korjaukset",
  "Luottamusta tukevat osiot",
  "Selkeämpi yhteydenottopolku",
  "Kevyt ja käytännöllinen toteutus",
]

export function Services() {
  return (
    <section id="palvelut" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Palvelut"
          title="Kolme tapaa parantaa verkkosivuasi"
          description="Kaikki sivut eivät tarvitse täydellistä uudistusta. Aloitetaan siitä, mikä kannattaa oikeasti korjata."
        />

        {/* Featured offer: Verkkosivujen parannus */}
        <div className="mt-14 overflow-hidden rounded-xl border border-primary/25 bg-card">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Suosituin
                </span>
                <span className="text-sm text-muted-foreground">Pääpalvelu</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Verkkosivujen parannus
              </h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-semibold tracking-tight text-primary">
                  29 € + alv / kk
                </span>
                <span className="text-sm text-muted-foreground">kuukausihinta</span>
              </p>
              <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Korjaan nykyiseltä sivultasi tärkeimmät ongelmakohdat. Työ voi tarkoittaa esimerkiksi
                etusivun selkeyttämistä, mobiilin parantamista, tekstien uudistamista tai
                yhteydenottopolun korjaamista. Lopullinen hinta riippuu työn laajuudesta.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">Ei turhaa uudelleenrakentamista. Korjataan se, mikä oikeasti tarvitsee korjaamista.</p>
              <div className="mt-7">
                <RequestReviewButton label="Pyydä ilmainen sivustoarvio" />
              </div>
            </div>

            <div className="bg-secondary/40 p-8 sm:p-10">
              <p className="text-sm font-medium text-foreground">Sisältää:</p>
              <ul className="mt-4 space-y-3">
                {FIX_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Secondary offers */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Aloita tästä
            </p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">
              Ilmainen sivustoarvio
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Käyn sivusi läpi käytännön näkökulmasta ja nostan esiin tärkeimmät asiat, joita parantaisin
              ensin. Konkreettisia huomioita ilman ympäripyöreää konsulttipuhetta.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
              Lähtökohta yhteistyölle
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Korjauksen jälkeen
            </p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">Jatkuva kehitys</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Jos haluat jatkaa myöhemmin, voimme tehdä pieniä parannuksia tarpeen mukaan: kampanjasivuja,
              tekstipäivityksiä, CTA-muutoksia ja rakenteen hienosäätöä.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              Vapaaehtoinen ja joustava
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
