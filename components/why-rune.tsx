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
    <section id="why" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={headerRef}
          className={cn(
            "mb-12 text-center transition-all duration-700",
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("why.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("why.subtitle")}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className={cn(
                  "group rounded-2xl border border-border bg-gradient-to-b from-card/90 to-card/60 p-6 shadow-lg transition-all duration-500 hover:border-primary/20 hover:shadow-primary/5",
                  cardsInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-all group-hover:from-primary/20 group-hover:to-accent/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
            "mt-16 rounded-3xl border border-border bg-gradient-to-b from-card/90 to-card/60 p-8 shadow-lg transition-all duration-700",
            audienceInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h3 className="mb-6 text-center font-display text-xl font-semibold tracking-tight">
            {t("audience.title")}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {audience.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-background/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
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
