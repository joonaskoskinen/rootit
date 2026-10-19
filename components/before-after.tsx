import { Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const STEPS = [["1", "Kerro, mikä on pielessä", "Lähetä viesti ja kuvaile ongelma omin sanoin. Sinun ei tarvitse tuntea teknisiä termejä."], ["2", "Sovitaan hinta", "Kerron, miten voin auttaa ja mitä työn odotetaan maksavan ennen maksullisen työn aloittamista."], ["3", "Saat avun", "Selvitän ongelman etänä, kun se on mahdollista, ja kerron selkeästi mitä tehtiin."]]

export function BeforeAfter() {
  return <section id="miten-toimii" className="border-t border-border bg-secondary/30 scroll-mt-20"><div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8"><SectionHeading eyebrow="Näin homma toimii" title="Apua ilman monimutkaista prosessia" description="Yksi asia kerrallaan, selkeästi sovittuna." /><div className="mt-12 grid gap-4 md:grid-cols-3">{STEPS.map(([number, title, description]) => <article key={number} className="rounded-xl border border-border bg-card p-7"><span className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{number}</span><h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p><Check className="mt-6 size-4 text-primary" aria-hidden="true" /></article>)}</div></div></section>
}

export { BeforeAfter as BeforeAfterSection }
