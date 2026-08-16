import { SectionHeading } from "@/components/section-heading"

const PROBLEMS = [
  {
    title: "Ei ole heti selvää, mitä yritys tekee",
    desc: "Kävijä joutuu arvailemaan. Muutamassa sekunnissa ratkeaa, jääkö hän vai poistuuko.",
  },
  {
    title: "Tärkein toimintakehotus jää piiloon",
    desc: "Yhteydenotto tai ajanvaraus hukkuu muun sisällön sekaan tai puuttuu kokonaan.",
  },
  {
    title: "Mobiilissa sivu toimii heikommin kuin pitäisi",
    desc: "Suurin osa kävijöistä tulee puhelimella, mutta sivu on suunniteltu tietokoneelle.",
  },
  {
    title: "Teksti on liian ympäripyöreää",
    desc: "Yleisluontoiset lauseet eivät kerro asiakkaalle, miksi valita juuri sinut.",
  },
  {
    title: "Luottamusta rakentavat elementit puuttuvat",
    desc: "Arvostelut, kuvat ja konkreettiset tiedot puuttuvat, joten sivu ei vakuuta.",
  },
  {
    title: "Yhteydenotto vaatii liikaa vaivaa",
    desc: "Pitkä lomake, piilotettu numero tai epäselvä polku karsii yhteydenottoja turhaan.",
  },
]

export function Problems() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Ongelmat"
          title="Mikä pienyritysten sivuilla yleensä on pielessä"
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
