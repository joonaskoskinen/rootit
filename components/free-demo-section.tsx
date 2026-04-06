"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { MessageCircle, MapPin, Wrench, CreditCard, Layout, Zap } from "lucide-react"

export function WhyRune() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 })
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 })
  const { ref: audienceRef, isInView: audienceInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const benefits = [
    {
      icon: MessageCircle,
      title: t("why1.title"),
      description: t("why1.desc"),
    },
    {
      icon: MapPin,
      title: t("why2.title"),
      description: t("why2.desc"),
    },
    {
      icon: Wrench,
      title: t("why3.title"),
      description: t("why3.desc"),
    },
    {
      icon: CreditCard,
      title: t("why4.title"),
      description: t("why4.desc"),
    },
    {
      icon: Layout,
      title: t("why5.title"),
      description: t("why5.desc"),
    },
    {
      icon: Zap,
      title: t("why6.title"),
      description: t("why6.desc"),
    },
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
    <section id="why" className="py-16 sm:py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={headerRef}
          className={cn(
            "mb-8 text-center transition-all duration-700 sm:mb-12",
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h2 id="why-heading" className="mb-3 font-display text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {t("why.title")}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            {t("why.subtitle")}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className={cn(
                  "group rounded-xl border border-border bg-gradient-to-b from-card/90 to-card/60 p-4 shadow-lg transition-all duration-500 hover:border-primary/20 hover:shadow-primary/5 sm:rounded-2xl sm:p-6",
                  cardsInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 transition-all group-hover:from-primary/20 group-hover:to-accent/20 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-1.5 font-display text-base font-semibold tracking-tight sm:mb-2 sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Target audience section */}
        <div
          ref={audienceRef}
          className={cn(
            "mt-10 rounded-2xl border border-border bg-gradient-to-b from-card/90 to-card/60 p-5 shadow-lg transition-all duration-700 sm:mt-16 sm:rounded-3xl sm:p-8",
            audienceInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h3 className="mb-4 text-center font-display text-lg font-semibold tracking-tight sm:mb-6 sm:text-xl">
            {t("audience.title")}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {audience.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground sm:px-4 sm:py-2 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
