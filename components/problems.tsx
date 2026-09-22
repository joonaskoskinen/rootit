import { SectionHeading } from "@/components/section-heading"

const PROBLEMS = [
  {
    title: "Ei ole heti selvää, mitä yritys tekee",
    desc: "Kävijän pitäisi ymmärtää muutamassa sekunnissa, mitä tarjoat ja kenelle.",
  },
  {
    title: "Sivusto näyttää vanhentuneelta",
    desc: "Ensivaikutelma vaikuttaa siihen, syntyykö luottamus yritykseen.",
  },
  {
    title: "Mobiilikäyttö ei toimi kunnolla",
    desc: "Sivuston pitää toimia yhtä hyvin puhelimella kuin tietokoneella.",
  },
  {
    title: "Tärkeät tiedot ovat vaikeasti löydettävissä",
    desc: "Yhteystiedot, palvelut, hinnat tai ajanvaraus eivät saa olla piilossa.",
  },
  {
    title: "Sivuston sisältö kaipaa päivitystä",
    desc: "Vanha sisältö antaa helposti kuvan, ettei sivustoa enää ylläpidetä.",
  },
  {
    title: "Et halua käyttää aikaa sivuston tekniseen ylläpitoon",
    desc: "Voit keskittyä omaan liiketoimintaasi ja jättää sivuston ylläpidon rootITille.",
  },
]

export function Problems() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Ongelmat"
          title="Onko verkkosivusi näissä kunnossa?"
          description="Hyvä verkkosivu ei tarvitse olla monimutkainen. Sen pitää olla selkeä, toimiva ja ajan tasalla."
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
