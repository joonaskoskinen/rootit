import { MonitorCog, Globe2, UsersRound } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { RequestReviewButton } from "@/components/request-review-button"

const SERVICES = [
  { icon: MonitorCog, title: "Etä-IT-tuki", text: "Nopea apu tietokoneisiin, puhelimiin, Microsoft 365:een, verkkoihin, tulostimiin, salasanoihin ja tietoturvaan. Useimmat ongelmat ratkeavat etänä ilman kotiinkutsumista.", cta: "Varaa IT-apu", featured: true },
  { icon: Globe2, title: "Verkkosivut ja ylläpito", text: "Selkeät ja toimivat verkkosivut pienyrityksille. Hoidan myös sivuston ylläpidon, pienet päivitykset ja tekniset korjaukset, jotta sinun ei tarvitse murehtia niistä.", cta: "Pyydä sivustoarvio", featured: false },
  { icon: UsersRound, title: "Pienyrityksen IT-kumppani", text: "Yksi luotettava yhteyshenkilö, joka auttaa käyttäjiä, laitteita, Microsoft 365:tä ja arjen IT-ongelmissa.", cta: "Pyydä tarjous", featured: false },
]

export function Services() {
  return <section id="palvelut" className="scroll-mt-20 border-t border-border"><div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8"><SectionHeading eyebrow="Palvelut" title="Mitä voin auttaa?" description="Etä-IT-tuki on pääpalveluni. Verkkosivut ja ylläpito ovat selkeä lisäpalvelu pienyrityksille." /><div className="mt-14 grid gap-6 lg:grid-cols-3">{SERVICES.map(({ icon: Icon, title, text, cta, featured }) => <article key={title} className={`flex flex-col rounded-2xl border p-7 sm:p-8 ${featured ? "border-primary/40 bg-primary/10 shadow-lg shadow-primary/10 lg:-translate-y-2" : "border-border bg-card"}`}><Icon className="size-7 text-primary" aria-hidden="true" /><h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">{title}</h3><p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{text}</p><RequestReviewButton label={cta} variant={featured ? "primary" : "outline"} className="mt-7 self-start" /></article>)}</div></div></section>
}
