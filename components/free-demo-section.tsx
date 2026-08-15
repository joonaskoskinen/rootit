"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

function openForm() {
  window.dispatchEvent(new CustomEvent("openConsultationForm"))
}

export function FreeDemoSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const points = [t("demo.point1"), t("demo.point2"), t("demo.point3"), t("demo.point4"), t("demo.point5")]

  return (
    <section id="free-demo" className="scroll-mt-16" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div
          ref={ref}
          className={cn(
            "overflow-hidden rounded-2xl bg-pine text-pine-foreground shadow-[0_24px_60px_-24px_rgba(15,45,32,0.5)] transition-all duration-700 sm:rounded-3xl",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            {/* Left: pitch */}
            <div className="p-7 sm:p-10 lg:p-14">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-pine-muted">
                {t("badge.demo")}
              </p>
              <h2
                id="demo-heading"
                className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl"
              >
                {t("demo.title")}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-pine-muted">{t("demo.subtitle")}</p>

              <Button
                size="lg"
                onClick={openForm}
                className="mt-8 h-12 cursor-pointer rounded-lg bg-pine-foreground px-7 text-base font-medium text-pine hover:bg-pine-foreground/90"
              >
                {t("demo.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right: checklist */}
            <div className="border-t border-pine-foreground/10 bg-pine-foreground/[0.04] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <ul className="flex flex-col divide-y divide-pine-foreground/10">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-start gap-3.5 py-4 first:pt-0 last:pb-0 transition-all duration-500",
                      isInView ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                    )}
                    style={{ transitionDelay: `${150 + index * 90}ms` }}
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine-foreground/15">
                      <Check className="h-3 w-3 text-pine-foreground" />
                    </span>
                    <p className="text-sm leading-relaxed text-pine-foreground/90">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
