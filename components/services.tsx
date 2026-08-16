import { Check, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RequestReviewButton } from "@/components/request-review-button"

const FIX_ITEMS = [
  "Etusivun viestin selkeytys",
  "CTA-rakenteen parannus",
  "Mobiilikäytön tärkeimmät korjaukset",
  "Luottamusta tukevat osiot",
  "Sujuvampi tie yhteydenottoon tai varaukseen",
  "Nopea toteutus ilman raskasta projektia",
]

export function Services() {
  return (
    <section id="palvelut" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Palvelut"
          title="Kolme tapaa parantaa sivusi"
          description="Aloita ilmaisesta arviosta. Suurin osa hyödystä tulee yhdestä keskitetystä korjauksesta — ei täydellisestä uudistuksesta."
        />

        {/* Featured offer: Viikon sivukorjaus */}
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
                Viikon sivukorjaus
              </h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-semibold tracking-tight text-primary">
                  Alkaen 290 €
                </span>
                <span className="text-sm text-muted-foreground">lopullinen hinta arvion jälkeen</span>
              </p>
              <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Keskitetty korjaus, joka parantaa juuri ne sivun osat, jotka vaikuttavat
                eniten yhteydenottoihin. Hinta riippuu laajuudesta — pelkkä auditointi tai yksi
                pieni korjaus on halvempi, laajempi kokonaisuus enemmän. Tarkan hinnan saat
                vasta ilmaisen arvion jälkeen, ei valmiiksi lyötyä listahintaa.
              </p>
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
              Käymme sivusi läpi käytännön näkökulmasta. Näet, mikä hämmentää kävijää ja mikä
              estää yhteydenottoa — selkeitä huomioita, ei ympäripyöreää konsulttipuhetta.
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
              Pienet, jatkuvat parannukset korjauksen jälkeen: kampanjasivut, CTA- ja
              tekstipäivitykset, rakenteen hienosäätö ja tasainen optimointi.
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
