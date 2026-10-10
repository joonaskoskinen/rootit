"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const BEFORE = ["Epäselvä otsikko", "Hajallaan oleva rakenne", "Piilossa oleva CTA", "Liikaa kitkaa yhteydenotossa"]
const AFTER = ["Selkeä viesti heti", "Looginen rakenne", "Näkyvä seuraava askel", "Helpompi yhteydenottopolku"]

function MiniPage({ variant }: { variant: "before" | "after" }) {
  const after = variant === "after"
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-3 py-2">
        <span className="size-2 rounded-full bg-muted-foreground/30" /><span className="size-2 rounded-full bg-muted-foreground/30" /><span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 h-4 flex-1 rounded-sm bg-muted-foreground/10" />
      </div>
      <div className={`min-h-64 p-5 ${after ? "bg-card" : "bg-secondary/30"}`}>
        {after ? (
          <div className="flex h-full flex-col justify-between gap-5">
            <div><span className="mb-3 block text-[10px] font-semibold uppercase tracking-widest text-primary">Pienyrityksen palvelut</span><h4 className="max-w-[12rem] text-xl font-semibold leading-tight text-foreground">Selkeästi esiin se, mitä teet.</h4><p className="mt-3 max-w-[15rem] text-xs leading-relaxed text-muted-foreground">Asiakas ymmärtää heti, miten voit auttaa.</p></div>
            <div className="flex items-center justify-between gap-3"><span className="rounded-md bg-primary px-3 py-2 text-[10px] font-semibold text-primary-foreground">Pyydä arvio</span><span className="text-[10px] text-muted-foreground">Suora yhteys tekijään</span></div>
          </div>
        ) : (
          <div className="flex h-full flex-col gap-3 text-[10px] text-muted-foreground"><div className="flex justify-between"><span className="h-2 w-20 rounded bg-pink-400/50" /><span className="h-2 w-12 rounded bg-yellow-400/50" /></div><h4 className="max-w-[11rem] text-base font-bold text-foreground/70">Tervetuloa meille! Kaikkea kaikille.</h4><span className="h-2 w-full rounded bg-muted-foreground/20" /><span className="h-2 w-4/5 rounded bg-muted-foreground/20" /><div className="mt-2 flex gap-2"><span className="h-7 w-12 rounded bg-blue-400/40" /><span className="h-7 w-16 rounded bg-pink-400/30" /><span className="h-7 w-10 rounded bg-yellow-400/40" /></div><span className="mt-auto self-end text-[9px] opacity-50">Ota yhteyttä ›</span></div>
        )}
      </div>
    </div>
  )
}

export function BeforeAfter() {
  const [tab, setTab] = useState<"before" | "after">("after")
  return <section id="esimerkit" className="border-t border-border bg-secondary/30 scroll-mt-20"><div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8"><SectionHeading eyebrow="Esimerkit" title="Mitä selkeyttäminen voi käytännössä tarkoittaa" description="Havainnollistava esimerkki, ei oikea asiakas. Nykyistä sivua ei aina tarvitse rakentaa kokonaan uudestaan." /><div className="mx-auto mt-10 flex max-w-xs rounded-lg border border-border p-1 md:hidden"><button type="button" onClick={() => setTab("before")} className={`flex-1 rounded-md px-3 py-2 text-sm ${tab === "before" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}>Ennen</button><button type="button" onClick={() => setTab("after")} className={`flex-1 rounded-md px-3 py-2 text-sm ${tab === "after" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Jälkeen</button></div><div className="mt-6 grid gap-6 md:grid-cols-2"><div className={`${tab === "after" ? "hidden md:block" : ""} rounded-xl border border-border bg-card p-6 sm:p-8`}><p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Ennen</p><div className="mt-4"><MiniPage variant="before" /></div><ul className="mt-6 flex flex-col gap-3">{BEFORE.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground"><X className="mt-0.5 size-4 shrink-0" />{item}</li>)}</ul></div><div className={`${tab === "before" ? "hidden md:block" : ""} rounded-xl border border-primary/25 bg-card p-6 shadow-[0_1px_0_0_var(--primary)] sm:p-8`}><p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Jälkeen</p><div className="mt-4"><MiniPage variant="after" /></div><ul className="mt-6 flex flex-col gap-3">{AFTER.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}</ul></div></div></div></section>
}

export { BeforeAfter as BeforeAfterSection }
