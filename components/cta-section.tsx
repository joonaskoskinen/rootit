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
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-card p-8 shadow-lg transition-all duration-700 lg:p-12",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl text-balance">
                {t("cta.title")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t("cta.desc")}
              </p>
              <p className="mt-3 text-sm text-muted-foreground/80">
                {t("cta.oneOff")}
              </p>
              
              {/* Demo USP */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
                <CheckCircle className="h-4 w-4" />
                {t("cta.demo")}
              </div>
            </div>
            
            <Button
              size="lg"
              className="shrink-0 h-14 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 cursor-pointer"
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
