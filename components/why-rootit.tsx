import { Gauge, MessageSquareText, ShieldCheck, Target } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const REASONS = [
  {
    icon: Gauge,
    title: "Puhut suoraan tekijälle",
    desc: "Ei myyntitiimiä eikä välikäsiä. Keskustelemme suoraan siitä, mitä sivullesi kannattaa tehdä.",
  },
  {
    icon: MessageSquareText,
    title: "Selkeä hinta etukäteen",
    desc: "Sovitaan työn sisältö ja hinta ennen aloittamista. Tiedät, mitä olet tilaamassa.",
  },
  {
    icon: ShieldCheck,
    title: "Ei turhaa uudelleenrakentamista",
    desc: "Jos nykyinen sivusi voidaan korjata, sitä ei tarvitse rakentaa kokonaan uudestaan.",
  },
  {
    icon: Target,
    title: "Aloita ilman sitoutumista",
    desc: "Ilmainen sivustoarvio kertoo, onko sivullasi jotain konkreettista korjattavaa.",
  },
]

export function WhyRootit() {
  return (
    <section id="miksi-rootit" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Miksi Rootit"
          title="Miksi rootIT?"
          description="RootIT on pieni ja henkilökohtainen palvelu. Keskityn siihen, mitä nykyisellä sivullasi kannattaa käytännössä parantaa."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => {
            const Icon = reason.icon
            return (
              <div key={reason.title} className="flex flex-col gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
