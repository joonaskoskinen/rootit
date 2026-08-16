import { SectionHeading } from "@/components/section-heading"

const BENEFITS = [
  {
    title: "Enemmän yhteydenottoja samalla liikenteellä",
    desc: "Et tarvitse lisää kävijöitä. Sama määrä ihmisiä tuottaa enemmän, kun sivu ohjaa toimintaan.",
  },
  {
    title: "Selkeämpi ensivaikutelma",
    desc: "Kävijä ymmärtää heti, mitä tarjoat ja kenelle. Se rakentaa luottamusta ensi sekunneista.",
  },
  {
    title: "Helpompi päätös asiakkaalle",
    desc: "Kun seuraava askel on selvä ja kynnys matala, yhteydenotto tai varaus tuntuu vaivattomalta.",
  },
  {
    title: "Vähemmän kitkaa yhteydenotossa",
    desc: "Lyhyempi polku ja selkeä lomake tarkoittavat, että useampi vie yhteydenoton loppuun.",
  },
]

export function Benefits() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Hyöty"
            title="Mitä korjauksista käytännössä seuraa"
            description="Hyvä sivu ei vain näytä siistiltä. Sen pitää tukea myyntiä. Tähän parannukset tähtäävät."
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
