"use client"

import { useRef } from "react"
import { PhoneMockup, type PhoneMockupRef } from "@/components/phone-mockup"
import { RequestReviewButton } from "@/components/request-review-button"

export function Hero() {
  const phoneMockupRef = useRef<PhoneMockupRef>(null)

  return (
    <section className="relative isolate w-full min-w-0 overflow-hidden">
      <video className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-[0.08] [mask-image:linear-gradient(to_bottom,black_0%,black_62%,transparent_100%)]" autoPlay muted loop playsInline aria-hidden="true">
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 z-0 bg-background/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary">rootIT · etä-IT-tuki pienyrityksille</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">Etä-IT-tukea, kun teknologia ei toimi.</h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">Autan nopeasti ja selkeästi etänä: Windows, Mac, Microsoft 365, verkot, tulostimet, tietoturva ja arjen tekniset ongelmat. Teen myös selkeitä verkkosivuja ja hoidan niiden ylläpidon pienyrityksille.</p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <RequestReviewButton label="Varaa ilmainen arvio" className="w-full sm:w-auto" />
            <a href="#palvelut" className="text-sm font-medium text-primary underline-offset-4 hover:underline">Katso palvelut</a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Etä-IT-tuki · Verkkosivut ja ylläpito · Selkeä hinta · Suora yhteys tekijään</p>
        </div>
        <div id="consultation-mockup" className="flex justify-center pt-2 lg:justify-end lg:pt-0"><div className="w-full max-w-[min(290px,calc(100vw-2rem))] sm:max-w-[290px] lg:max-w-[330px]"><PhoneMockup ref={phoneMockupRef} /></div></div>
      </div>
    </section>
  )
}

export const HEADLINE_LINE_1 = ["Etä-IT-tukea"]
export const HEADLINE_LINE_2 = ["kun teknologia ei toimi."]
export default Hero
