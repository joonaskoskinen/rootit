"use client"

import { Wrench, Layout, Headphones, CheckCircle, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function Features() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 })
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

  const services = [
    {
      icon: Wrench,
      title: t("service1.title"),
      description: t("service1.desc"),
      examples: t("service1.examples"),
      color: "primary",
    },
    {
      icon: Layout,
      title: t("service2.title"),
      description: t("service2.desc"),
      examples: t("service2.examples"),
      demo: t("service2.demo"),
      color: "accent",
      featured: true,
    },
    {
      icon: Headphones,
      title: t("service3.title"),
      description: t("service3.desc"),
      examples: t("service3.examples"),
      color: "primary",
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={headerRef}
          className={cn(
            "mb-8 text-center transition-all duration-700 sm:mb-12",
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h2 id="services-heading" className="mb-3 font-display text-2xl font-bold leading-tight tracking-tight sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl text-balance">
            {t("services.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t("services.subtitle")}
          </p>
          {/* SEO intro text */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground/80">
            Tarjoan IT-tukea etänä koko Suomeen. Palveluihini kuuluvat verkkosivujen korjaukset ja uudistukset, 
            WordPress-apu, domain- ja DNS-ongelmat sekä sähköpostiasetukset. Sopii pienyrityksille, yrittäjille, 
            yhdistyksille ja yksityishenkilöille.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={i} 
              onCta={handleConsultationClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: {
    icon: typeof Wrench
    title: string
    description: string
    examples: string
    demo?: string
    color: string
    featured?: boolean
  }
  index: number
  onCta: () => void
}

function ServiceCard({ service, index, onCta }: ServiceCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()
  
  return (
    <article
      ref={ref}
      className={cn(
        "group relative flex flex-col rounded-2xl border p-5 shadow-lg transition-all duration-500 sm:rounded-3xl sm:p-6",
        service.featured
          ? "border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-card lg:-translate-y-2"
          : "border-border bg-gradient-to-b from-card/90 to-card/60",
        isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {service.featured && (
        <div className="absolute -top-3 left-5 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-primary-foreground sm:left-6 sm:px-4">
          {t("badge.demo")}
        </div>
      )}
      
      <div className={cn(
        "mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all sm:mb-4 sm:h-14 sm:w-14 sm:rounded-2xl",
        service.featured 
          ? "bg-gradient-to-br from-primary/20 to-accent/20" 
          : "bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20"
      )}>
        <service.icon className={cn(
          "h-6 w-6 sm:h-7 sm:w-7",
          service.featured ? "text-primary" : "text-primary"
        )} />
      </div>
      
      <h3 className="mb-2 font-display text-lg font-semibold tracking-tight sm:mb-3 sm:text-xl">{service.title}</h3>
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:mb-4">{service.description}</p>
      
      <p className="mb-3 text-xs text-muted-foreground/80 italic sm:mb-4">{service.examples}</p>
      
      {service.demo && (
        <div className="mb-3 flex items-start gap-2 rounded-xl bg-primary/5 border border-primary/10 p-3 sm:mb-4">
          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
          <p className="text-sm text-primary font-medium">{service.demo}</p>
        </div>
      )}
      
      <div className="mt-auto pt-3 sm:pt-4">
        <Button
          onClick={onCta}
          className={cn(
            "h-11 w-full rounded-full cursor-pointer sm:h-auto",
            service.featured
              ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {t("pricing.cta")}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  )
}
