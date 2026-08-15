"use client"

import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight } from "lucide-react"

function openForm() {
  window.dispatchEvent(new CustomEvent("openConsultationForm"))
}

export function CTASection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-16" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-4 lg:px-6 lg:pb-28">
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center gap-6 rounded-2xl bg-pine px-6 py-14 text-center text-pine-foreground shadow-[0_24px_60px_-24px_rgba(15,45,32,0.5)] transition-all duration-700 sm:rounded-3xl sm:px-10 sm:py-20",
            isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          <h2
            id="cta-heading"
            className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {t("cta.title")}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-pine-muted sm:text-lg">{t("cta.desc")}</p>

          <Button
            size="lg"
            onClick={openForm}
            className="mt-2 h-13 cursor-pointer rounded-lg bg-pine-foreground px-8 text-base font-medium text-pine hover:bg-pine-foreground/90 sm:h-14"
          >
            {t("cta.button")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-sm text-pine-muted">
            {t("cta.demo")} · {t("cta.oneOff")}
          </p>
        </div>
      </div>
    </section>
  )
}
