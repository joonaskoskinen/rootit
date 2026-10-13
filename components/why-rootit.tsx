import { MessageSquareText, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const REASONS = [
  [MessageSquareText, "Suora yhteys", "Sovitaan suoraan siitä, mitä sivullesi kannattaa tehdä."],
  [Wrench, "Korjaa, älä rakenna turhaan", "Jos nykyinen sivu voidaan korjata, uutta ei tehdä."],
] as const

const STEPS = ["Pyydä ilmainen sivustoarvio", "Saat konkreettiset huomiot", "Sovitaan työ, hinta ja aikataulu", "Korjaan tai rakennan sovitun"]

export function WhyRootit() {
  return (
    <section id="miksi-rootit" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading title="Selkeä tapa parantaa verkkosivua" description="rootIT on pieni ja henkilökohtainen palvelu. Keskityn siihen, mitä nykyisellä sivullasi kannattaa käytännössä parantaa." />
        <div className="mt-10 grid gap-10 rounded-xl border border-border bg-card p-6 sm:grid-cols-[0.8fr_1.2fr] sm:p-8">
          <div>
            <div className="max-w-md rounded-2xl rounded-bl-sm border border-primary/20 bg-primary/10 p-5 text-base leading-relaxed text-foreground">
              Hei! Lähetä sivusi osoite. rootIT käy sen läpi ja vastaa 2 arkipäivässä.
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {REASONS.map(([Icon, title, desc]) => (
              <div key={title} className="flex flex-col gap-4">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" aria-hidden="true" /></span>
                <div><h3 className="text-lg font-semibold text-foreground">{title}</h3><p className="mt-2 text-base leading-relaxed text-muted-foreground">{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14"><h3 className="text-xl font-semibold text-foreground">Näin homma etenee</h3><ol className="mt-6 grid gap-4 md:grid-cols-4">{STEPS.map((step, index) => <li key={step} className="flex gap-3 border-t border-border pt-4 md:block"><span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span><p className="text-base font-medium text-foreground md:mt-3">{step}</p></li>)}</ol></div>
        <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-5 text-sm leading-relaxed text-muted-foreground">Saat rehellisen arvion siitä, mitä sivustolla kannattaa tehdä — myös silloin, jos paras ratkaisu ei ole uusi sivusto.</div>
      </div>
    </section>
  )
}
