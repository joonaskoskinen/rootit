"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  note: string
  featured: boolean
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const handleConsultationClick = () => {
    const mockup = document.getElementById("consultation-mockup")
    if (mockup) {
      mockup.scrollIntoView({ behavior: "smooth", block: "center" })
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("openConsultationForm"))
      }, 500)
    }
  }

  return (
    <article
      ref={ref}
      className={cn(
        "relative flex flex-col rounded-3xl border p-6 transition-all duration-500",
        plan.featured
          ? "border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-card shadow-xl shadow-primary/10 lg:-translate-y-2"
          : "border-border bg-gradient-to-b from-card/90 to-card/60 shadow-lg",
        isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-primary-foreground">
          {t("pricing.recommended")}
        </div>
      )}
      
      <div className="mb-4 inline-flex items-center self-start rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
        {plan.name}
      </div>
      
      <div className="mb-2">
        <span className="text-sm font-normal text-muted-foreground">{t("pricing.from")} </span>
        <span className="font-display text-4xl font-bold tracking-tight">{plan.price}</span>
        {plan.name === t("pricing.monthly") && (
          <span className="text-lg font-normal text-muted-foreground">/kk</span>
        )}
      </div>
      
      <p className="mb-6 text-sm text-muted-foreground">{plan.description}</p>
      
      <ul className="mb-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <p className="mb-4 text-xs text-muted-foreground/80 italic">{plan.note}</p>
      
      <Button
        className={cn(
          "w-full rounded-full cursor-pointer",
          plan.featured
            ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
        onClick={handleConsultationClick}
      >
        {t("pricing.cta")}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </article>
  )
}

export function Pricing() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 })
  const { ref: noteRef, isInView: noteInView } = useInView({ threshold: 0.1 })
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
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={headerRef}
          className={cn(
            "mb-12 text-center transition-all duration-700",
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h2 className="mb-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t("pricing.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Additional notes */}
        <div
          ref={noteRef}
          className={cn(
            "mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700",
            noteInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <span className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground">
            {t("pricing.noCommitment")}
          </span>
          <span className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            {t("badge.demo")}
          </span>
        </div>
        
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t("pricing.custom")}
        </p>
      </div>
    </section>
  )
}
