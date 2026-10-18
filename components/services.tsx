import { ShieldCheck, DatabaseBackup, Laptop, MessageCircle, KeyRound, ShoppingCart } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const SERVICES = [
  [MessageCircle, "Etätuki", "Nopea apu arjen ongelmiin ilman odottelua ja turhaa teknistä kieltä."],
  [ShieldCheck, "Tietoturva", "MFA, salasanahallinta, sähköpostin suojaus sekä NIS2- ja GDPR-valmius."],
  [DatabaseBackup, "Varmuuskopiot", "Varmuuskopioiden valvonta ja säännölliset palautustestit, jotta tiedot ovat palautettavissa."],
  [KeyRound, "Microsoft 365 ja Google Workspace", "Käyttäjät, sähköpostit, käyttöoikeudet ja arjen työkalut hallintaan."],
  [Laptop, "Laitteet ja päivitykset", "Koneiden elinkaari, päivitykset ja haittaohjelmasuojaus hallitusti."],
  [ShoppingCart, "Neuvonta ja hankinnat", "Puolueeton apu laite-, ohjelmisto- ja palveluhankintoihin."],
] as const

export function Services() { return <section id="palvelut" className="scroll-mt-20 border-t border-border"><div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8"><SectionHeading eyebrow="Palvelut" title="Pienyrityksen IT yhden kumppanin kautta" description="Huolehdimme tärkeimmistä IT-asioista etänä, selkeästi ja sovitulla kuukausihinnalla." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.map(([Icon, title, description]) => <article key={title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"><div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" aria-hidden="true" /></div><h3 className="mt-5 font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}</div></div></section> }
