"use client"

import Link from "next/link"
import { HeroContactCard } from "@/components/hero-contact-card"
import { Check, Download } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:pt-16 lg:px-6 lg:pb-24 lg:pt-24">
        {/* Intro paragraph for SEO */}
        <p className="sr-only">
          rootIT tarjoaa IT-tukea etänä koko Suomeen. Palvelemme pienyrityksiä, yrittäjiä, yhdistyksiä ja yksityishenkilöitä.
          Autamme verkkosivujen korjauksissa ja uudistuksissa, WordPress-ongelmissa, domain- ja DNS-asioissa sekä sähköpostiongelmissa.
        </p>

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* Left: copy */}
          <div className="flex flex-col items-start">
            <h1 className="rise-in rise-in-1 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.75rem]">
              {t("hero.headline1")}
            </h1>

            <p className="rise-in rise-in-2 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {t("hero.description")}
            </p>

            {/* Trust list */}
            <ul className="rise-in rise-in-3 mt-8 flex flex-col gap-3">
              {[t("trust.direct"), t("trust.oneoff"), t("trust.demo")].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Remote support */}
            <div className="rise-in rise-in-4 mt-10 flex items-center gap-2 rounded-full border border-border bg-card py-2 pl-4 pr-2 text-sm text-muted-foreground">
              <span>{t("hero.remoteLink")}</span>
              <Link
                href="https://download.teamviewer.com/download/TeamViewerQS_x64.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Download className="h-3.5 w-3.5" />
                {t("remote.button")}
              </Link>
            </div>
          </div>

          {/* Right: inline contact card */}
          <div className="rise-in rise-in-3 flex justify-center lg:justify-end">
            <HeroContactCard />
          </div>
        </div>
      </div>
    </section>
  )
}
