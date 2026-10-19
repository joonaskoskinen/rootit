"use client"

import { Check } from "lucide-react"
import { RequestReviewButton } from "@/components/request-review-button"
import { PhoneMockup } from "@/components/phone-mockup"

const BULLETS = ["Microsoft 365, sähköposti ja Outlook", "Windows, tietokoneet ja arjen ohjelmat"]

export function Hero() {
  return (
    <section className="relative isolate w-full min-w-0 overflow-x-hidden overflow-y-visible">
      <video className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-[0.1] [mask-image:linear-gradient(to_bottom,black_0%,black_62%,transparent_100%)]" autoPlay muted loop playsInline aria-hidden="true"><source src="/hero-background.mp4" type="video/mp4" /></video>
      <div className="pointer-events-none absolute inset-0 z-0 bg-background/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="order-1 lg:order-1">
          <p className="text-sm font-medium tracking-wide text-primary">rootIT · selkeää IT-apua pienyrityksille</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">IT-apua ilman turhaa hintalappua.</h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">Autan pienyrityksiä arjen IT-ongelmissa, Microsoft 365:n kanssa ja silloin, kun tietokoneet tai ohjelmat eivät toimi. Selkeä palvelu, reilu hinnoittelu ja apua silloin, kun sitä tarvitset.</p>
          <ul className="mt-7 flex flex-col gap-2.5">{BULLETS.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-base text-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{bullet}</li>)}</ul>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"><RequestReviewButton label="Pyydä IT-apua" className="w-full sm:w-auto" /><a href="#palvelut" className="text-sm font-medium text-primary underline-offset-4 hover:underline">Tutustu palveluihin</a></div>
          <p className="mt-3 text-sm text-muted-foreground">Tiedät aina, mistä maksat. Ei turhaa sopimuspakkoa.</p>
        </div>
        <div id="consultation-mockup" className="order-2 flex justify-center pt-2 lg:order-2 lg:justify-end lg:pt-0"><div className="w-full max-w-[min(290px,calc(100vw-2rem))] sm:max-w-[290px] lg:max-w-[330px]"><PhoneMockup /></div></div>
      </div>
    </section>
  )
}

export const HEADLINE_LINE_1 = ["IT-apua", "ilman turhaa"]
export const HEADLINE_LINE_2 = ["hintalappua.", ""]
export default Hero
