"use client"

import { Wrench, Layout, Headphones, ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

function scrollToForm() {
  window.dispatchEvent(new CustomEvent("openConsultationForm"))
}

export function Features() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Wrench,
      num: "1",
      title: t("service1.title"),
      description: t("service1.desc"),
      examples: t("service1.examples"),
    },
    {
      icon: Layout,
      num: "2",
      title: t("service2.title"),
      description: t("service2.desc"),
      examples: t("service2.examples"),
      demo: t("service2.demo"),
      featured: true,
    },
    {
      icon: Headphones,
      num: "3",
      title: t("service3.title"),
      description: t("service3.desc"),
      examples: t("service3.examples"),
    },
  ]

  return (
    <section id="services" className="scroll-mt-16" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl"
          >
            {t("services.title")}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        {/* SEO intro text */}
        <p className="sr-only">
          Tarjoan IT-tukea etänä koko Suomeen. Palveluihini kuuluvat verkkosivujen korjaukset ja uudistukset,
          WordPress-apu, domain- ja DNS-ongelmat sekä sähköpostiasetukset. Sopii pienyrityksille, yrittäjille,
          yhdistyksille ja yksityishenkilöille.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={cn(
                  "group relative flex flex-col rounded-2xl border p-6 transition-shadow sm:p-7",
                  service.featured
                    ? "border-transparent bg-pine text-pine-foreground shadow-[0_16px_40px_-16px_rgba(20,50,35,0.4)]"
                    : "border-border bg-card shadow-[0_1px_2px_rgba(20,35,25,0.04)] hover:shadow-[0_12px_28px_-14px_rgba(20,35,25,0.16)]",
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl",
                      service.featured ? "bg-pine-foreground/10" : "bg-accent",
                    )}
                  >
                    <Icon className={cn("h-5 w-5", service.featured ? "text-pine-foreground" : "text-primary")} />
                  </span>
                  {service.featured && (
                    <span className="flex items-center gap-1.5 rounded-full bg-pine-foreground/10 px-3 py-1 text-xs font-medium text-pine-foreground">
                      <Sparkles className="h-3 w-3" />
                      {t("badge.demo")}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{service.title}</h3>
                <p
                  className={cn(
                    "mt-2.5 text-sm leading-relaxed",
                    service.featured ? "text-pine-muted" : "text-muted-foreground",
                  )}
                >
                  {service.description}
                </p>

                <p
                  className={cn(
                    "mt-4 border-l-2 pl-3 text-sm leading-relaxed",
                    service.featured ? "border-pine-foreground/25 text-pine-muted" : "border-border text-muted-foreground",
                  )}
                >
                  {service.examples}
                </p>

                <div className="mt-auto pt-6">
                  <button
                    onClick={scrollToForm}
                    className={cn(
                      "inline-flex cursor-pointer items-center gap-2 text-sm font-medium transition-all",
                      service.featured
                        ? "text-pine-foreground hover:gap-3"
                        : "text-primary hover:gap-3",
                    )}
                  >
                    {t("pricing.cta")}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
