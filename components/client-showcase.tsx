"use client"

import { ArrowUpRight, ExternalLink, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const PROJECT_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Oi2iiny14qaSm2cO8fwvbAmxel9XfF.png"

export function ClientShowcase() {
  const { t } = useLanguage()

  return (
    <section id="esimerkit" className="relative overflow-hidden border-y border-border/70 bg-card/35 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            {t("showcase.eyebrow")}
          </div>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t("showcase.title")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t("showcase.description")}
          </p>
          <a
            href="https://plushimo.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t("showcase.cta")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <a
          href="https://plushimo.com"
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-primary/5 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={t("showcase.imageLabel")}
        >
          <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">plushimo.com</span>
            <span className="inline-flex items-center gap-1.5">
              {t("showcase.visit")}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>
          <img
            src={PROJECT_IMAGE}
            alt={t("showcase.imageAlt")}
            className="block h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </a>
      </div>
    </section>
  )
}
