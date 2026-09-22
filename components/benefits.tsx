import { SectionHeading } from "@/components/section-heading"

const BENEFITS = [
  {
    title: "Selkeämpi ensivaikutelma",
    desc: "Kävijä ymmärtää heti, mitä yritys tekee ja kenelle palvelu on tarkoitettu.",
  },
  {
    title: "Helpompi käyttää",
    desc: "Rakenne, mobiilinäkymä ja navigointi tekevät sivustosta nopeamman hahmottaa.",
  },
  {
    title: "Selkeämpi seuraava askel",
    desc: "Yhteydenotto, ajanvaraus tai muu tärkeä toiminto löytyy silloin kun sitä tarvitaan.",
  },
  {
    title: "Vähemmän turhaa kitkaa",
    desc: "Kun olennaiset asiat löytyvät helposti, kävijän ei tarvitse arvailla tai etsiä.",
  },
]

export function Benefits() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Hyöty"
            title="Mitä parempi sivu käytännössä tarkoittaa"
            description="Selkeämpi rakenne ja helpompi käyttökokemus auttavat kävijää löytämään olennaisen."
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
