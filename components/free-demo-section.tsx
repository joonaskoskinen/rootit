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
    <section id="free-demo" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={ref}
          className={cn(
            "relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-card p-8 shadow-xl transition-all duration-700 lg:p-12",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                {t("badge.demo")}
              </div>
              
              <h2 className="mb-4 font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-balance">
                {t("demo.title")}
              </h2>
              
              <p className="mb-6 text-muted-foreground leading-relaxed">
                {t("demo.subtitle")}
              </p>
              
              <Button
                size="lg"
                onClick={handleConsultationClick}
                className="rounded-full bg-gradient-to-r from-primary to-accent px-8 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 cursor-pointer"
              >
                {t("demo.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Right side - Points */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3 rounded-xl bg-background/50 border border-border/50 p-4 transition-all duration-500",
                    isInView ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
