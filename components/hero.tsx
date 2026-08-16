"use client"

import { useRef } from "react"
import { Check } from "lucide-react"
import { PhoneMockup, type PhoneMockupRef } from "@/components/phone-mockup"
import { RequestReviewButton } from "@/components/request-review-button"
import { HeroAmbientBackground } from "@/components/hero-ambient-background"

const BULLETS = [
  "Selkeä viesti heti etusivulla",
  "Parempi mobiilikokemus ja CTA-rakenne",
  "Helpompi tie yhteydenottoon tai varaukseen",
]

export function Hero() {
  const phoneMockupRef = useRef<PhoneMockupRef>(null)

  return (
    <section className="relative overflow-hidden">
      {/* Ambient root/node -verkosto — jatkaa logon ja mockupin visuaalista kieltä */}
      <HeroAmbientBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <h1
              className="reveal text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "60ms" }}
            >
              Selkeämpi sivu.
              <br />
              Enemmän yhteydenottoja.
            </h1>

            <p
              className="reveal mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "120ms" }}
            >
              Korjaamme pienyritysten verkkosivut sellaisiksi, että asiakas ymmärtää
              nopeasti mitä tarjoat ja tietää, mitä tehdä seuraavaksi. Selkeys, luottamus,
              mobiilikäyttö ja yhteydenottopolku kuntoon — ilman raskasta uudistusprojektia.
            </p>

            <ul
              className="reveal mt-7 space-y-2.5"
              style={{ animationDelay: "180ms" }}
            >
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div
              className="reveal mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "240ms" }}
            >
              <RequestReviewButton className="w-full sm:w-auto" />
              <p className="text-sm text-muted-foreground">
                Ilmainen eikä sido mihinkään.
              </p>
            </div>
          </div>

          {/* Phone mockup — the visual anchor */}
          <div
            id="consultation-mockup"
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <PhoneMockup ref={phoneMockupRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
