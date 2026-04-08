"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Shield } from "lucide-react"

export function FreeDemoSection() {
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

  const points = [
    t("demo.point1"),
    t("demo.point2"),
    t("demo.point3"),
    t("demo.point4"),
    t("demo.point5"),
  ]

  return (
    <section id="free-demo" className="py-16 sm:py-20 lg:py-28" aria-labelledby="demo-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-card p-5 shadow-xl transition-all duration-700 sm:rounded-3xl sm:p-8 lg:p-12",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          {/* Background decoration - hidden on mobile for performance */}
          <div className="pointer-events-none absolute -right-20 -top-20 hidden h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:block" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 hidden h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:block" />
          
          <div className="relative grid gap-6 items-center sm:gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary sm:mb-4 sm:px-4 sm:py-1.5">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {t("badge.demo")}
              </div>
              
              <h2 id="demo-heading" className="mb-3 font-display text-xl font-bold tracking-tight sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl text-balance">
                {t("demo.title")}
              </h2>
              
              <p className="mb-5 text-sm text-muted-foreground leading-relaxed sm:mb-6 sm:text-base">
                {t("demo.subtitle")}
              </p>
              
              <Button
                size="lg"
                onClick={handleConsultationClick}
                className="h-11 w-full rounded-full bg-primary px-6 text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer sm:h-auto sm:w-auto sm:px-8"
              >
                {t("demo.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Right side - Points */}
            <div className="space-y-2.5 sm:space-y-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-2.5 rounded-lg bg-background/50 border border-border/50 p-3 transition-all duration-500 sm:gap-3 sm:rounded-xl sm:p-4",
                    isInView ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-6 sm:w-6">
                    <CheckCircle className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                  </div>
                  <p className="text-xs leading-relaxed sm:text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
