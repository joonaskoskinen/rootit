import { SectionHeading } from "@/components/section-heading"

const PROBLEMS = [
  {
    title: "Ei ole heti selvää, mitä yritys tekee",
    desc: "Kävijän pitäisi ymmärtää muutamassa sekunnissa, mitä tarjoat ja kenelle.",
  },
  {
    title: "Tärkein toimintakehotus jää piiloon",
    desc: "Puhelinnumero, yhteydenotto tai ajanvaraus pitäisi löytyä ilman etsimistä.",
  },
  {
    title: "Mobiilikäyttö toimii huonommin kuin pitäisi",
    desc: "Tekstit, painikkeet ja rakenne eivät aina toimi puhelimen pienellä näytöllä.",
  },
  {
    title: "Teksti jää liian yleiselle tasolle",
    desc: "Selkeä ja konkreettinen teksti kertoo nopeasti, mitä asiakas saa ja miksi juuri tämä yritys.",
  },
  {
    title: "Luottamusta rakentavia asioita puuttuu",
    desc: "Kuvat, arvostelut, referenssit, hinnat tai muut konkreettiset tiedot voivat helpottaa päätöstä.",
  },
  {
    title: "Yhteydenotto vaatii liikaa vaivaa",
    desc: "Lyhyt lomake, selkeä numero tai näkyvä varauspainike tekee seuraavasta askeleesta helpomman.",
  },
]

export function Problems() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Ongelmat"
          title="Mitä verkkosivulla kannattaa yleensä korjata"
          description="Sivu voi näyttää ihan hyvältä ja silti jättää yhteydenottoja saamatta. Yleensä syy on jokin näistä."
        />

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <div key={p.title} className="border-t border-border pt-5">
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
