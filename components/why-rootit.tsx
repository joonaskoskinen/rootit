import { Gauge, MessageSquareText, ShieldCheck, Target } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const REASONS = [
  {
    icon: Gauge,
    title: "Nopeat, mitattavat parannukset",
    desc: "Keskitymme muutoksiin, jotka näkyvät suoraan yhteydenottojen ja varausten määrässä – ei turhaan hienosäätöön.",
  },
  {
    icon: MessageSquareText,
    title: "Selkeä viestintä koko matkan ajan",
    desc: "Tiedät aina, missä kohtaa mennään ja mitä seuraavaksi tapahtuu. Ei ammattislangia, ei arvailua.",
  },
  {
    icon: ShieldCheck,
    title: "Ei riskiä, ei sitoutumista etukäteen",
    desc: "Aloitamme ilmaisella arviolla. Näet konkreettisesti, mitä korjataan, ennen kuin päätät jatkaa.",
  },
  {
    icon: Target,
    title: "Rajattu laajuus, selkeä lopputulos",
    desc: "Emme yritä korjata kaikkea kerralla. Keskitymme siihen yhteen asiaan, joka vaikuttaa eniten, jotta lopputulos on nopea ja ennustettava.",
  },
]

export function WhyRootit() {
  return (
    <section id="miksi-rootit" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Miksi Rootit"
          title="Miksi valita meidät"
          description="Emme myy irtonaisia tunteja tai kuukausipaketteja. Autamme sinua ratkaisemaan yhden konkreettisen ongelman: sivustosi ei muuta kävijöitä asiakkaiksi."
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
