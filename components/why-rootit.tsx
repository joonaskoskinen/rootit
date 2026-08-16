import { SectionHeading } from "@/components/section-heading"

const REASONS = [
  {
    title: "Emme myy kaikkea kaikille",
    desc: "Keskitymme yhteen asiaan: pienyritysten sivujen selkeyteen ja konversioon. Se näkyy jäljessä.",
  },
  {
    title: "Käytännön korjaukset ensin",
    desc: "Emme aloita kalliista uudistusprojektista. Korjaamme ne asiat, jotka oikeasti vaikuttavat tuloksiin.",
  },
  {
    title: "Nopea ja selkeä prosessi",
    desc: "Kevyt eteneminen ilman turhia palavereja. Tiedät etukäteen mitä tehdään ja milloin.",
  },
  {
    title: "Viestintä ilman jargonia",
    desc: "Puhumme suomea, emme teknistä sanahelinää. Ymmärrät mitä tehdään ja miksi.",
  },
]

export function WhyRootit() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/60">
            Miksi Rootit
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Kapea fokus, konkreettinen jälki
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-background/70 sm:text-lg">
            Rootit ei ole yleinen digitoimisto. Autamme pieniä palveluyrityksiä saamaan
            sivunsa tuottamaan enemmän yhteydenottoja — sillä nimi kertoo, mistä on kyse:
            perusasiat kuntoon, jotta muu toimii.
          </p>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {REASONS.map((r) => (
            <div key={r.title} className="border-t border-background/15 pt-5">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/65">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
