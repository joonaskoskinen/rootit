"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { MessageSquare, FileCheck, Eye, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: t("process.step1.title"),
      description: t("process.step1.desc"),
    },
    {
      number: "02",
      icon: FileCheck,
      title: t("process.step2.title"),
      description: t("process.step2.desc"),
    },
    {
      number: "03",
      icon: Eye,
      title: t("process.step3.title"),
      description: t("process.step3.desc"),
      highlight: true,
    },
    {
      number: "04",
      icon: Wrench,
      title: t("process.step4.title"),
      description: t("process.step4.desc"),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={ref}
          className={cn(
            "mb-12 text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            {t("process.badge")}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("process.title")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isHighlighted = 'highlight' in step && step.highlight
            return (
              <div
                key={step.number}
                className={cn(
                  "group relative rounded-3xl border p-6 transition-all duration-700 hover:shadow-lg",
                  isHighlighted 
                    ? "border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-card shadow-primary/10 hover:shadow-primary/20" 
                    : "border-border bg-gradient-to-b from-card to-card/60 hover:border-primary/30 hover:shadow-primary/5",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
              >
                {isHighlighted && (
                  <div className="absolute -top-2.5 left-6 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-0.5 text-xs font-medium text-primary-foreground">
                    {t("badge.demo")}
                  </div>
                )}
                {/* Step number */}
                <div className="mb-4 text-4xl font-bold text-muted-foreground/30 transition-colors group-hover:text-primary/30">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 transition-all group-hover:from-primary/20 group-hover:to-accent/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="mb-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                
                {/* Connector line (hidden on last item and on mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-border to-transparent lg:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
