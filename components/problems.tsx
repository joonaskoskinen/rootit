"use client"

import { useState } from "react"
import { Check, ArrowRight, Laptop, Mail, Users, Printer } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { openReviewForm } from "@/components/request-review-button"

const PROBLEMS = [["Tietokone tai Windows temppuilee", "Hidas kone, päivitys tai muu tavallinen ongelma.", Laptop], ["Sähköposti tai Outlook ei toimi", "Viestit, asetukset ja yhteydenpito takaisin kuntoon.", Mail], ["Kirjautuminen tai käyttöoikeus puuttuu", "Käyttäjätunnukset, salasanat ja perustason käyttöoikeudet.", Users], ["Tulostin tai ohjelma aiheuttaa säätöä", "Käytännön apua yleisten työkalujen ja laitteiden kanssa.", Printer]] as const

export function Problems() {
  const [selected, setSelected] = useState<number[]>([])
  const toggle = (index: number) => setSelected((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])
  const ask = () => openReviewForm(selected.map((index) => PROBLEMS[index][0]).join(", "))
  return <section id="ongelmat" className="border-t border-border scroll-mt-20 py-16 md:py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeading eyebrow="Tuttuja tilanteita?" title="Apua arjen IT-ongelmiin" description="Kaikkea ei tarvitse osata ratkaista itse. Valitse alta tilanne, jossa tarvitset apua, tai kerro omin sanoin." /><div className="mt-10 grid gap-3 sm:grid-cols-2">{PROBLEMS.map(([title, desc, Icon], index) => { const isSelected = selected.includes(index); return <button key={title} type="button" aria-pressed={isSelected} onClick={() => toggle(index)} className={`rounded-xl border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isSelected ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/40"}`}><span className={`mb-4 flex size-10 items-center justify-center rounded-lg border transition-colors ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-primary/10 text-primary"}`}>{isSelected ? <Check className="size-4" /> : <Icon className="size-4" />}</span><h3 className="font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p></button> })}</div><div className="mt-8 flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">{selected.length}/4</span> kohtaa valittu</p><button type="button" onClick={ask} className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{selected.length ? "Pyydä IT-apua näihin" : "Valitse tilanne"}<ArrowRight className="size-4" /></button></div></div></section>
}

export { Problems as ProblemSection }
