"use client"

import { Check } from "lucide-react"
import { RequestReviewButton } from "@/components/request-review-button"

const GROUPS = [
  { title: "Etä-IT-tuki", plans: [
    ["Nopea apu", "alk. 39 € + alv / korjaus", ["Yksittäinen etäkorjaus", "Sopii Wi-Fi-, tulostin-, sähköposti-, ohjelma- tai laiteongelmaan"] , "Varaa aika", false],
    ["Etä-IT-tuki kuukausittain", "alk. 49 € + alv / kk", ["Jatkuva apu yksityishenkilölle tai pienyritykselle", "Etäapu arjen IT-ongelmiin", "Microsoft 365 -tuki", "Pienet asennukset ja käyttöönotot", "Tietoturvan perustarkistus", "Ennaltaehkäisevät vinkit"], "Aloita kuukausituki", true],
    ["Pienyrityksen IT-kumppani", "Tarjous tilanteen mukaan", ["Säännöllisempi tuki pienyritykselle", "Käyttäjien ja laitteiden tuki", "Microsoft 365 -hallinta", "Etäkäsittely ongelmatilanteissa", "Tietoturvan perusteet", "IT-alkukartoitus"], "Pyydä tarjous", false],
  ]},
  { title: "Verkkosivut ja ylläpito", plans: [
    ["Sivusto kuntoon", "alk. 29 € + alv / kk", ["Yhden sivun tai olemassa olevan sivuston selkeytys", "Sisällön, rakenteen ja mobiilikäytettävyyden parantaminen", "Sopii vanhentuneelle tai epäselvälle sivulle"], "Pyydä arvio", false],
    ["Sivusto ja ylläpito", "alk. 59 € + alv / kk", ["Selkeä verkkosivu tai olemassa olevan sivuston kehittäminen", "Sisältöpäivitykset ja pienet muutokset", "Tekninen ylläpito", "Yhteystietojen, palvelujen ja kuvien päivitykset"], "Aloita ylläpito", true],
    ["Kasvava sivusto", "alk. 99 € + alv / kk", ["Laajempi verkkosivukokonaisuus pienyritykselle", "Useampi sivu tai palvelu", "Sisällön ja rakenteen jatkokehitys", "Sopii asiakashankintaa tukevalle sivustolle"], "Pyydä tarjous", false],
  ]},
] as const

export function Pricing() { return <section id="hinnat" className="border-t border-border py-20 sm:py-24" aria-labelledby="pricing-heading"><div className="mx-auto max-w-6xl px-5 lg:px-8"><h2 id="pricing-heading" className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Hinnoittelu</h2><p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">Selkeät vaihtoehdot eri tilanteisiin.</p>{GROUPS.map((group) => <div key={group.title} className="mt-14"><h3 className="text-2xl font-semibold text-foreground">{group.title}</h3><div className="mt-6 grid gap-6 lg:grid-cols-3">{group.plans.map(([name, price, features, cta, featured]) => <article key={name} className={`relative flex flex-col rounded-2xl border p-6 ${featured ? "border-primary/40 bg-primary/10 shadow-lg" : "border-border bg-card"}`}>{featured && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Suosituin</span>}<h4 className="text-xl font-semibold">{name}</h4><p className="mt-4 text-2xl font-semibold text-accent">{price}</p><ul className="mt-6 flex flex-1 flex-col gap-3">{features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{feature}</li>)}</ul><RequestReviewButton label={cta} variant={featured ? "primary" : "outline"} className="mt-7 w-full" /></article>)}</div></div>)}<p className="mt-12 text-center text-sm text-muted-foreground">Etä-IT-tuki ja verkkosivupalvelut ovat erillisiä palveluita. Voit tilata kumpaakin tai vain toisen.</p></div></section> }
