"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

interface PricingPlan {
  name: string
  price: string
  suffix?: string
  description: string
  features: string[]
  note: string
  featured: boolean
}

function openForm() {
  window.dispatchEvent(new CustomEvent("openConsultationForm"))
}

function PricingCard({ plan, index, isInView }: { plan: PricingPlan; index: number; isInView: boolean }) {
  const { t } = useLanguage()

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl p-6 transition-all duration-500 sm:p-7",
        plan.featured
          ? "bg-pine text-pine-foreground shadow-[0_20px_48px_-20px_rgba(15,45,32,0.5)]"
          : "border border-border bg-card shadow-[0_1px_2px_rgba(20,35,25,0.04)]",
        isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      )}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {t("pricing.recommended")}
        </span>
      )}

      <p
        className={cn(
          "text-sm font-medium uppercase tracking-[0.12em]",
          plan.featured ? "text-pine-muted" : "text-muted-foreground",
        )}
      >
        {plan.name}
      </p>

      <div className="mt-4 flex items-baseline gap-1.5">
        <span className={cn("text-sm", plan.featured ? "text-pine-muted" : "text-muted-foreground")}>
          {t("pricing.from")}
        </span>
        <span className="font-display text-4xl font-bold tracking-tight">{plan.price}</span>
        {plan.suffix && (
          <span className={cn("text-base", plan.featured ? "text-pine-muted" : "text-muted-foreground")}>
            {plan.suffix}
          </span>
        )}
      </div>

      <p
        className={cn(
          "mt-3 text-sm leading-relaxed",
          plan.featured ? "text-pine-muted" : "text-muted-foreground",
        )}
      >
        {plan.description}
      </p>

      <ul
        className={cn(
          "mt-6 flex-1 space-y-3 border-t pt-6",
          plan.featured ? "border-pine-foreground/15" : "border-border",
        )}
      >
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed">
            <Check
              className={cn("mt-0.5 h-4 w-4 shrink-0", plan.featured ? "text-pine-foreground" : "text-primary")}
            />
            <span className={plan.featured ? "text-pine-foreground/90" : undefined}>{feature}</span>
          </li>
        ))}
      </ul>

      <p
        className={cn(
          "mt-5 text-xs leading-relaxed",
          plan.featured ? "text-pine-muted" : "text-muted-foreground",
        )}
      >
        {plan.note}
      </p>

      <Button
        onClick={openForm}
        className={cn(
          "mt-5 h-11 w-full cursor-pointer rounded-lg font-medium",
          plan.featured
            ? "bg-pine-foreground text-pine hover:bg-pine-foreground/90"
            : "bg-secondary text-secondary-foreground hover:bg-accent",
        )}
      >
        {t("pricing.cta")}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </article>
  )
}

export function Pricing() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const plans: PricingPlan[] = [
    {
      name: t("pricing.oneoff"),
      price: t("pricing.oneoff.price"),
      description: t("pricing.oneoff.desc"),
      features: [
        t("pricing.oneoff.f1"),
        t("pricing.oneoff.f2"),
        t("pricing.oneoff.f3"),
        t("pricing.oneoff.f4"),
        t("pricing.oneoff.f5"),
      ],
      note: t("pricing.oneoff.note"),
      featured: false,
    },
    {
      name: t("pricing.project"),
      price: t("pricing.project.price"),
      description: t("pricing.project.desc"),
      features: [
        t("pricing.project.f1"),
        t("pricing.project.f2"),
        t("pricing.project.f3"),
        t("pricing.project.f4"),
        t("pricing.project.f5"),
      ],
      note: t("pricing.project.note"),
      featured: true,
    },
    {
      name: t("pricing.monthly"),
      price: t("pricing.monthly.price"),
      suffix: "/kk",
      description: t("pricing.monthly.desc"),
      features: [
        t("pricing.monthly.f1"),
        t("pricing.monthly.f2"),
        t("pricing.monthly.f3"),
        t("pricing.monthly.f4"),
        t("pricing.monthly.f5"),
      ],
      note: t("pricing.monthly.note"),
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="scroll-mt-16" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 id="pricing-heading" className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{t("pricing.subtitle")}</p>
        </div>

        <div ref={ref} className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} isInView={isInView} />
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          {t("pricing.noCommitment")} · {t("pricing.custom")}
        </p>
      </div>
    </section>
  )
}
