import { Check, Clock3, Globe2, LogOut } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RequestReviewButton } from "@/components/request-review-button"

const FIX_ITEMS = [
  "Moderni ja selkeä toteutus",
  "Tekninen ylläpito",
  "Pienet sisältömuutokset (30 min / kk)",
  "Hosting sisältyy",
]

export function Services() {
  return (
    <section id="palvelut" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Palvelut"
          title="Valitse tarpeeseesi sopiva palvelu"
          description="Voit tilata verkkosivut ylläpidolla tai yksittäisen korjauksen ilman kuukausimaksua."
        />

        {/* Featured offer: Verkkosivut + ylläpito */}
        <div className="mt-14 border-y border-border">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="flex flex-col border-b border-border py-10 pr-0 lg:border-b-0 lg:border-r lg:py-14 lg:pr-16">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Pääpalvelu</p>
              <h3 className="mt-6 max-w-xl text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-5xl">
                Verkkosivut, jotka tekevät työnsä.
              </h3>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Modernit ja selkeät verkkosivut sekä tekninen ylläpito ja pienet muutokset. Sivusto pysyy toimivana ja ajan tasalla ilman suurta kertamaksua.
              </p>
              <div className="mt-10 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">29 € + alv / kk</span>
                <span className="text-sm text-muted-foreground">kuukausihinta</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Aloitusmaksu alkaen 190 € + alv. Ei sidottua sopimuskautta.</p>
              <div className="mt-10">
                <RequestReviewButton label="Pyydä ilmainen sivustoarvio" />
              </div>
            </div>

            <div className="flex flex-col justify-between py-10 lg:py-14 lg:pl-14">
              <div>
                <p className="text-sm font-medium text-foreground">Sisältää</p>
                <ul className="mt-6 flex flex-col gap-4">
                  {FIX_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-12 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Yksi selkeä kuukausihinta. Sinä keskityt yritykseesi, minä pidän sivuston kunnossa.
              </p>
            </div>
          </div>
          <div className="grid border-t border-border sm:grid-cols-3">
            {[[Clock3, "30 min muutoksia / kk"], [Globe2, "Hosting sisältyy, domain erikseen"], [LogOut, "Irtisanomisaika 1 kk"]].map(([Icon, label]) => (
              <div key={label as string} className="flex items-center gap-3 border-b border-border py-4 text-sm text-muted-foreground last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0">
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{label as string}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary offers */}
        <div className="mt-16 border-t border-border">
          <div className="grid border-b border-border lg:grid-cols-2">
            <div className="border-b border-border py-8 lg:border-b-0 lg:border-r lg:pr-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">01 / Kertaluontoinen työ</p>
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Yksittäiset korjaukset</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">Etusivu, mobiilinäkymä, lomake tai muu yksittäinen ongelma ilman kuukausimaksua.</p>
                </div>
                <span className="shrink-0 text-sm font-medium text-primary">Alk. 90 € + alv</span>
              </div>
            </div>
            <div className="py-8 lg:pl-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">02 / Kuukausipalvelun lisänä</p>
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">Lisätyöt</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">Tekstipäivityksiä, kampanjasivuja ja muita sovittuja parannuksia tarpeen mukaan.</p>
                </div>
                <span className="flex shrink-0 flex-col text-sm font-medium text-primary">60 € / h + alv<span className="mt-1 text-xs font-normal text-muted-foreground">30 min tarkkuudella</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
