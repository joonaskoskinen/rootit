import { SectionHeading } from "@/components/section-heading"

const SLOTS = [
  {
    field: "Kampaamot ja kauneushoitolat",
    desc: "Ajanvarauksen selkeys ja mobiilikäyttö.",
  },
  {
    field: "Hierojat ja hyvinvointipalvelut",
    desc: "Luottamuksen rakentaminen ensivaikutelmassa.",
  },
  {
    field: "Putki-, sähkö- ja remonttiala",
    desc: "Nopea yhteydenotto kiireellisissä tilanteissa.",
  },
]

export function Testimonials() {
  return (
    <section id="esimerkit" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Referenssit"
          title="Asiakastyöt ja esimerkit"
          description="Rakennan tätä osiota sitä mukaa kun yhteistyöt valmistuvat. Tässä esimerkkejä toimialoista, joissa korjaukset tyypillisesti tuottavat selkeimmän hyödyn."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SLOTS.map((slot, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-dashed border-border bg-card/60 p-7"
            >
              <span className="inline-flex w-fit items-center rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Esimerkkitoimiala
              </span>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{slot.desc}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{slot.field}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Haluatko olla yksi ensimmäisistä esimerkeistä?{" "}
          <span className="font-medium text-foreground">Aloita ilmaisesta sivustoarviosta.</span>
        </p>
      </div>
    </section>
  )
}
