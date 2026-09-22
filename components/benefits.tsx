import { SectionHeading } from "@/components/section-heading"

const BENEFITS = [
  {
    title: "Modernit verkkosivut",
    desc: "Yrityksesi näyttää ajantasaiselta ja luotettavalta kaikilla laitteilla.",
  },
  {
    title: "Tekninen ylläpito",
    desc: "Pidän huolen, että sivusto pysyy toimivana, turvallisena ja ajan tasalla.",
  },
  {
    title: "Pienet muutokset mukana",
    desc: "Tekstien, kuvien ja muiden sisältöjen päivittäminen ei vaadi erillistä projektia.",
  },
  {
    title: "Ei suurta kertamaksua",
    desc: "Kuukausipalvelu tekee verkkosivuista helpommin hankittavat pienyritykselle.",
  },
]

export function Benefits() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Hyöty"
            title="Mitä palveluun kuuluu"
            description="Saat toimivan verkkosivun ja apua sen ylläpitoon ilman suurta aloitusinvestointia."
          />

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title}>
                <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
