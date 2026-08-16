"use client"

import { useRef } from "react"
import { Check } from "lucide-react"
import { PhoneMockup, type PhoneMockupRef } from "@/components/phone-mockup"
import { RequestReviewButton } from "@/components/request-review-button"

const BULLETS = [
  "Selkeä viesti heti etusivulla",
  "Parempi mobiilikokemus ja CTA-rakenne",
  "Helpompi tie yhteydenottoon tai varaukseen",
]

// Otsikko pilkottuna sanoiksi, jotta jokainen sana voi terävöityä
// omalla viiveellään ("epäselvä -> selkeä" on kirjaimellisesti brändin lupaus).
const HEADLINE_LINE_1 = ["Selkeämpi", "sivu."]
const HEADLINE_LINE_2 = ["Enemmän", "yhteydenottoja."]

function FocusWord({ word, index }: { word: string; index: number }) {
  return (
    <span
      className="focus-word inline-block"
      style={{ animationDelay: `${120 + index * 90}ms` }}
    >
      {word}
    </span>
  )
}

export function Hero() {
  const phoneMockupRef = useRef<PhoneMockupRef>(null)

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <div className="relative inline-block">
              <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="block">
                  {HEADLINE_LINE_1.map((w, i) => (
                    <FocusWord key={w} word={w} index={i} />
                  ))}
                </span>
                <span className="block">
                  {HEADLINE_LINE_2.map((w, i) => (
                    <FocusWord key={w} word={w} index={HEADLINE_LINE_1.length + i} />
                  ))}
                </span>
              </h1>
              {/* Väriaaltoviiva joka pyyhkäisee otsikon alta kun teksti terävöityy */}
              <span className="headline-sweep" aria-hidden="true" />
            </div>

            <p
              className="reveal mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "620ms" }}
            >
              Korjaamme pienyritysten verkkosivut sellaisiksi, että asiakas ymmärtää
              nopeasti mitä tarjoat ja tietää, mitä tehdä seuraavaksi. Selkeys, luottamus,
              mobiilikäyttö ja yhteydenottopolku kuntoon — ilman raskasta uudistusprojektia.
            </p>

            <ul
              className="reveal mt-7 space-y-2.5"
              style={{ animationDelay: "700ms" }}
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
              style={{ animationDelay: "780ms" }}
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
