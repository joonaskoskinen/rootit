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
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={headerRef}
          className={cn(
            "mb-12 text-center transition-all duration-700",
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h2 className="mb-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-balance">
            {t("services.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
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
        "group relative flex flex-col rounded-3xl border p-6 shadow-lg transition-all duration-500",
        service.featured
          ? "border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-card lg:-translate-y-2"
          : "border-border bg-gradient-to-b from-card/90 to-card/60",
        isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {service.featured && (
        <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-medium text-primary-foreground">
          {t("badge.demo")}
        </div>
      )}
      
      <div className={cn(
        "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all",
        service.featured 
          ? "bg-gradient-to-br from-primary/20 to-accent/20" 
          : "bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20"
      )}>
        <service.icon className={cn(
          "h-7 w-7",
          service.featured ? "text-primary" : "text-primary"
        )} />
      </div>
      
      <h3 className="mb-3 font-display text-xl font-semibold tracking-tight">{service.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      
      <p className="mb-4 text-xs text-muted-foreground/80 italic">{service.examples}</p>
      
      {service.demo && (
        <div className="mb-4 flex items-start gap-2 rounded-xl bg-primary/5 border border-primary/10 p-3">
          <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
          <p className="text-sm text-primary font-medium">{service.demo}</p>
        </div>
      )}
      
      <div className="mt-auto pt-4">
        <Button
          onClick={onCta}
          className={cn(
            "w-full rounded-full cursor-pointer",
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
