"use client"

import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTASection() {
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
    <section id="contact" className="py-16 sm:py-20 lg:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-card p-6 shadow-lg transition-all duration-700 sm:rounded-3xl sm:p-8 lg:p-12",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          {/* Background decoration - reduced on mobile */}
          <div className="pointer-events-none absolute -right-20 -top-20 hidden h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:block" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 hidden h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:block" />

          <div className="relative flex flex-col items-center justify-between gap-6 sm:gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <h2 id="cta-heading" className="font-display text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl text-balance">
                {t("cta.title")}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
                {t("cta.desc")}
              </p>
              <p className="mt-2 text-xs text-muted-foreground/80 sm:mt-3 sm:text-sm">
                {t("cta.oneOff")}
              </p>

              {/* Demo USP */}
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary sm:mt-4 sm:px-4 sm:py-2 sm:text-sm">
                <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {t("cta.demo")}
              </div>
            </div>

            <Button
              size="lg"
              className="h-12 w-full shrink-0 rounded-full bg-primary px-6 text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer sm:h-14 sm:w-auto sm:px-8"
              onClick={handleConsultationClick}
            >
              {t("cta.button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
