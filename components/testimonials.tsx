import { SectionHeading } from "@/components/section-heading"

const SLOTS = [
  { field: "Kampaamot ja kauneushoitolat" },
  { field: "Hierojat ja hyvinvointi" },
  { field: "Putki-, sähkö- ja remonttiala" },
]

export function Testimonials() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Referenssit"
          title="Asiakastyöt ja esimerkit"
          description="Kokoamme tähän asiakaskommentteja ja ennen/jälkeen-esimerkkejä sitä mukaa kun yhteistyöt valmistuvat. Alla toimialoja, joiden sivuja parannamme."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SLOTS.map((slot, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-dashed border-border bg-card/60 p-7"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                &bdquo;Asiakaskommentti tähän.&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">Yrityksen nimi</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{slot.field}</p>
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
