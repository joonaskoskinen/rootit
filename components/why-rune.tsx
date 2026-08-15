"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { MessageCircle, MapPin, Wrench, CreditCard, Layout, Zap } from "lucide-react"

export function WhyRune() {
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 })
  const { ref: audienceRef, isInView: audienceInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const benefits = [
    { icon: MessageCircle, title: t("why1.title"), description: t("why1.desc") },
    { icon: MapPin, title: t("why2.title"), description: t("why2.desc") },
    { icon: Wrench, title: t("why3.title"), description: t("why3.desc") },
    { icon: CreditCard, title: t("why4.title"), description: t("why4.desc") },
    { icon: Layout, title: t("why5.title"), description: t("why5.desc") },
    { icon: Zap, title: t("why6.title"), description: t("why6.desc") },
  ]

  const audience = [
    t("audience.item1"),
    t("audience.item2"),
    t("audience.item3"),
    t("audience.item4"),
    t("audience.item5"),
    t("audience.item6"),
    t("audience.item7"),
  ]

  return (
    <section id="why" className="scroll-mt-16" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 id="why-heading" className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t("why.title")}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{t("why.subtitle")}</p>
        </div>

        {/* Benefits: quiet two-column list, no cards */}
        <div ref={cardsRef} className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className={cn(
                  "flex flex-col transition-all duration-500",
                  cardsInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Audience */}
        <div
          ref={audienceRef}
          className={cn(
            "mt-14 border-t border-border pt-10 transition-all duration-700 lg:mt-16",
            audienceInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <h3 className="shrink-0 font-display text-lg font-semibold tracking-tight">{t("audience.title")}</h3>
            <div className="flex flex-wrap gap-2">
              {audience.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
