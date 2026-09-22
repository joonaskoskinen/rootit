import { SectionHeading } from "@/components/section-heading"

const STEPS = [
  {
    title: "Pyydä ilmainen sivustoarvio",
    desc: "Anna sivustosi osoite ja kerro lyhyesti, mikä siinä kaipaa mielestäsi parannusta.",
  },
  {
    title: "Saat konkreettiset huomiot",
    desc: "Käyn sivusi läpi ja nostan esiin tärkeimmät ongelmakohdat.",
  },
  {
    title: "Sovitaan mitä tehdään",
    desc: "Jos haluat edetä, sovitaan työn laajuus, hinta ja aikataulu etukäteen.",
  },
  {
    title: "Rakennan tai korjaan sivuston",
    desc: "Toteutan sovitut muutokset ja huolehdin, että sivusto toimii hyvin myös puhelimella.",
  },
  {
    title: "Ylläpito jatkuu sovitusti",
    desc: "Kuukausipalvelussa huolehdin pienistä muutoksista ja teknisestä ylläpidosta. Yksittäinen korjaus päättyy, kun sovittu työ on valmis.",
  },
]

export function Process() {
  return (
    <section id="prosessi" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Prosessi"
          title="Näin homma etenee"
          description="Kevyt prosessi ilman turhaa byrokratiaa. Valitset itse jatkuvan palvelun tai yksittäisen korjauksen."
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
