"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const steps = [
    { title: t("process.step1.title"), description: t("process.step1.desc") },
    { title: t("process.step2.title"), description: t("process.step2.desc") },
    { title: t("process.step3.title"), description: t("process.step3.desc"), highlight: true },
    { title: t("process.step4.title"), description: t("process.step4.desc") },
  ]

  return (
    <section id="how-it-works" className="scroll-mt-16" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          {/* Left: sticky heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">{t("process.badge")}</p>
            <h2
              id="how-it-works-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl"
            >
              {t("process.title")}
            </h2>
          </div>

          {/* Right: vertical timeline */}
          <ol ref={ref} className="relative flex flex-col">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className={cn(
                  "relative flex gap-5 pb-10 transition-all duration-500 last:pb-0 sm:gap-6",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Rail */}
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-border"
                  />
                )}

                {/* Number dot */}
                <span
                  className={cn(
                    "z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold",
                    step.highlight
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground",
                  )}
                >
                  {index + 1}
                </span>

                <div className="pt-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-lg font-semibold tracking-tight">{step.title}</h3>
                    {step.highlight && (
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                        {t("badge.demo")}
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
