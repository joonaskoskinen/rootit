"use client"

import { useRef } from "react"
import { Check } from "lucide-react"
import { PhoneMockup, type PhoneMockupRef } from "@/components/phone-mockup"
import { RequestReviewButton } from "@/components/request-review-button"

const BULLETS = ["Modernit ja selkeät verkkosivut", "Ylläpito ja pienet muutokset samassa palvelussa", "Ei suurta kertamaksua"]

export function Hero() {
  const phoneMockupRef = useRef<PhoneMockupRef>(null)
  return (
    <section className="relative isolate overflow-hidden">
      <video
        className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-[0.24]"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-man-typing-on-a-laptop-1571/1080p.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 z-0 bg-background/65" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[1fr_340px] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-medium tracking-wide text-primary">rootIT · verkkosivut ilman turhaa säätöä</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Selkeät verkkosivut pienyrityksille.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Modernit sivut, tekninen ylläpito ja pienet parannukset ilman suurta kertamaksua. Aloita ilmaisella arviolla ja päätä itse, etenetkö.
          </p>
          <ul className="mt-7 flex flex-col gap-2.5">
            {BULLETS.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-base text-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{bullet}</li>)}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <RequestReviewButton className="w-full sm:w-auto" />
            <a href="#palvelut" className="text-sm font-medium text-primary underline-offset-4 hover:underline">Katso palvelut</a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Suora yhteys tekijään · Hinta sovitaan etukäteen · Ei sitoutumista</p>
        </div>
        <div id="consultation-mockup" className="order-1 flex justify-center lg:order-2 lg:justify-end"><PhoneMockup ref={phoneMockupRef} /></div>
      </div>
    </section>
  )
}

export function AssessmentPreview() {
  return <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-card p-5"><p className="text-sm font-semibold text-foreground">Tällaisen arvion saat</p><div className="mt-4 flex flex-col gap-3">{["01  Otsikko ei kerro heti, mitä tarjoat", "02  Yhteydenotto jää liian alas sivulla", "03  Mobiilin painikkeet ovat vaikeita käyttää"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="size-2 rounded-full bg-primary" />{item}</div>)}</div><p className="mt-4 border-t border-border pt-4 text-sm text-primary">Suositus: selkeytetään ensimmäinen näkymä ja nostetaan yhteydenotto esiin.</p></div>
}

export { AssessmentPreview as ArvionNayte }

export const HEADLINE_LINE_1 = ["Selkeät", "verkkosivut"]
export const HEADLINE_LINE_2 = ["pienyrityksille.", "alk. 29 € + alv / kk."]

export default Hero
