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
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-28" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={ref}
          className={cn(
            "mb-8 text-center transition-all duration-700 sm:mb-12",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <div className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary sm:mb-4 sm:px-4 sm:py-1.5">
            {t("process.badge")}
          </div>
          <h2 id="how-it-works-heading" className="font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            {t("process.title")}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isHighlighted = 'highlight' in step && step.highlight
            return (
              <div
                key={step.number}
                className={cn(
                  "group relative rounded-2xl border p-5 transition-all duration-700 hover:shadow-lg sm:rounded-3xl sm:p-6",
                  isHighlighted 
                    ? "border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-card shadow-primary/10 hover:shadow-primary/20" 
                    : "border-border bg-gradient-to-b from-card to-card/60 hover:border-primary/30 hover:shadow-primary/5",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
              >
                {isHighlighted && (
                  <div className="absolute -top-2.5 left-5 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-0.5 text-xs font-medium text-primary-foreground sm:left-6">
                    {t("badge.demo")}
                  </div>
                )}
                {/* Step number */}
                <div className="mb-3 text-3xl font-bold text-muted-foreground/30 transition-colors group-hover:text-primary/30 sm:mb-4 sm:text-4xl">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-all group-hover:from-primary/20 group-hover:to-accent/20 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                </div>
                
                {/* Content */}
                <h3 className="mb-1.5 font-display text-base font-semibold sm:mb-2 sm:text-lg">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{step.description}</p>
                
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
