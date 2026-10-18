"use client"

import { useRef } from "react"
import { PhoneMockup, type PhoneMockupRef } from "@/components/phone-mockup"
import { RequestReviewButton } from "@/components/request-review-button"

export function Hero() {
  const phoneMockupRef = useRef<PhoneMockupRef>(null)
  return (
    <section className="relative isolate w-full min-w-0 overflow-x-hidden overflow-y-visible">
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="order-1 lg:order-1">
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Jos sivusi ei kerro heti mitä teet, korjataan se.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Moi, olen Joonas. Teen tavallisia yrityksen ja yhdistyksen verkkosivuja yksin, alusta loppuun. Ei myyjiä eikä välikäsiä.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <RequestReviewButton className="w-full sm:w-auto" />
            <a href="#palvelut" className="text-sm font-medium text-primary underline-offset-4 hover:underline">Katso palvelut</a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Ilmainen arvio. Palaan asiaan kahden arkipäivän sisällä.</p>
        </div>
        <div id="consultation-mockup" className="order-2 flex justify-center pt-2 lg:order-2 lg:justify-end lg:pt-0"><div className="w-full max-w-[min(290px,calc(100vw-2rem))] sm:max-w-[290px] lg:max-w-[330px]"><PhoneMockup ref={phoneMockupRef} /></div></div>
      </div>
    </section>
  )
}

export function AssessmentPreview() {
  return <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-card p-5"><p className="text-sm font-semibold text-foreground">Tällaisen arvion saat</p><div className="mt-4 flex flex-col gap-3">{["01  Otsikko ei kerro heti, mitä tarjoat", "02  Yhteydenotto jää liian alas sivulla", "03  Mobiilin painikkeet ovat vaikeita käyttää"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="size-2 rounded-full bg-primary" />{item}</div>)}</div><p className="mt-4 border-t border-border pt-4 text-sm text-primary">Suositus: selkeytetään ensimmäinen näkymä ja nostetaan yhteydenotto esiin.</p></div>
}

export { AssessmentPreview as ArvionNayte }

export const HEADLINE_LINE_1 = ["Verkkosivut", "jotka kasvavat"]
export const HEADLINE_LINE_2 = ["mukana.", "alk. 29 € + alv / kk."]

export default Hero
