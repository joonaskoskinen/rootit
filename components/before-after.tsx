import { X, Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const BEFORE = [
  "Epäselvä otsikko",
  "Hajallaan oleva rakenne",
  "Heikko luottamus",
  "Piilossa oleva CTA",
  "Liikaa kitkaa yhteydenotossa",
]

const AFTER = [
  "Selkeä viesti heti ruudun yläosassa",
  "Looginen, helposti seurattava rakenne",
  "Enemmän luottamusta rakentavia elementtejä",
  "Näkyvä ja selkeä seuraava askel",
  "Sivu tukee myyntiä eikä vain ole olemassa",
]

export function BeforeAfter() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Ennen / jälkeen"
          title="Sama yritys, selkeämpi sivu"
          description="Muutos ei tarkoita, että kaikki heitetään roskiin. Yleensä riittää, että tärkeimmät asiat nostetaan esiin ja turha karsitaan pois."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-xl border border-border bg-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Ennen
            </p>
            <ul className="mt-6 space-y-4">
              {BEFORE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border">
                    <X className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-xl border border-primary/25 bg-card p-8 shadow-[0_1px_0_0_var(--primary)]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Jälkeen
            </p>
            <ul className="mt-6 space-y-4">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
