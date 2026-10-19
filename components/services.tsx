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
          title="Verkkosivut, yhteydenotot ja ylläpito"
          description="Rakennamme selkeän kokonaisuuden, joka auttaa asiakkaitasi ymmärtämään palvelusi ja ottamaan yhteyttä."
        />

        {/* Featured offer: Verkkosivujen parannus */}
        <div className="mt-14 overflow-hidden rounded-xl border border-primary/25 bg-card">
          <div className="grid items-stretch lg:grid-cols-[1fr_1fr]">
            <div className="flex flex-col border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Pääpalvelu</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
Verkkosivut + ylläpito
              </h3>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                  29 € + alv / kk
                </span>
                <span className="text-sm text-muted-foreground">kuukausihinta</span>
              </p>
              <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Selkeät verkkosivut, tekninen ylläpito ja pienet muutokset samassa palvelussa. Tarvittaessa sivuille voidaan toteuttaa myös yrityksellesi sopiva tarjouspyyntö- tai yhteydenottolomake.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Aloitusmaksu alkaen 190 € + alv (kertaluonteinen). Ei sidottua sopimuskautta.
              </p>
              <div className="mt-auto pt-7">
                <RequestReviewButton label="Pyydä ilmainen sivustoarvio" />
              </div>
            </div>

            <div className="bg-secondary/40 p-8 sm:p-10">
              <p className="text-sm font-medium text-foreground">Sisältää:</p>
              <ul className="mt-4 flex flex-col gap-3">
                {FIX_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-full grid border-t border-border sm:grid-cols-3">
              {[[Clock3, "30 min muutoksia / kk"], [Globe2, "Hosting sisältyy, domain erikseen"], [LogOut, "Irtisanomisaika 1 kk"]].map(([Icon, label]) => (
                <div key={label as string} className="flex items-center gap-3 border-b border-border px-8 py-4 text-sm text-muted-foreground last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-10">
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{label as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary offers */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Kertaluontoinen työ
            </p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">Yksittäiset korjaukset</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tarvitsetko vain yhden muutoksen? Korjaan esimerkiksi etusivun, mobiilinäkymän,
              yhteydenottolomakkeen tai muun yksittäisen ongelman ilman kuukausimaksua.
            </p>
            <span className="mt-5 inline-flex text-sm font-medium text-primary">Alk. 90 € + alv</span>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Kuukausipalvelun lisänä
            </p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">Lisätyöt</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Ylläpidän sivustoa ja teen pieniä muutoksia tarpeen mukaan. Tarjouspyyntöihin liittyviä ilmoituksia,
              vahvistusviestejä tai muita työnkulun parannuksia voidaan sopia erillisenä lisätyönä.
            </p>
            <span className="mt-5 inline-flex items-baseline gap-2 text-sm font-medium text-primary">
              60 € / h + alv
              <span className="text-xs font-normal text-muted-foreground">laskutus 30 min tarkkuudella</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
