import { SectionHeading } from "@/components/section-heading"

const STEPS = [
  {
    title: "Pyydä ilmainen sivustoarvio",
    desc: "Kerro sivustosi osoite ja lähetä arviopyyntö. Se on ilmainen eikä sido mihinkään.",
  },
  {
    title: "Saat selkeät huomiot",
    desc: "Käyn sivusi läpi ja kerron tärkeimmät pullonkaulat: mikä hämmentää ja mikä estää yhteydenottoa.",
  },
  {
    title: "Sovitaan Viikon sivukorjauksesta",
    desc: "Jos haluat edetä, sovitaan selkeä sisältö ja aikataulu korjaukselle. Tiedät etukäteen mitä tehdään.",
  },
  {
    title: "Korjaamme tärkeimmät sivut",
    desc: "Selkeytämme viestin, parannamme CTA:n ja mobiilikäytön sekä sujuvoitamme yhteydenottopolun.",
  },
  {
    title: "Julkaistaan selkeämpi sivu",
    desc: "Sivu menee tuotantoon. Halutessasi jatkamme pienillä parannuksilla eteenpäin.",
  },
]

export function Process() {
  return (
    <section id="prosessi" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Prosessi"
          title="Näin homma etenee"
          description="Selkeä ja kevyt prosessi. Tiedät koko ajan, missä mennään ja mitä seuraavaksi tapahtuu."
        />

        <ol className="mt-14 space-y-0">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-border py-6 last:border-b"
            >
              <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <div className="max-w-xl">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
