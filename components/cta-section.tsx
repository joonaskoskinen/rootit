"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center justify-between gap-8 rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-card p-8 shadow-lg transition-all duration-700 lg:flex-row lg:p-10",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t("cta.desc")}
            </p>
          </div>
          
          <Button
            asChild
            size="lg"
            className="shrink-0 rounded-full bg-gradient-to-r from-primary to-accent px-8 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            <Link href="#pricing">{t("cta.button")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
