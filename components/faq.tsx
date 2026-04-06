"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 })
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
    { q: t("faq.q9"), a: t("faq.a9") },
    { q: t("faq.q10"), a: t("faq.a10") },
  ]

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div
          ref={headerRef}
          className={cn(
            "mb-12 text-center transition-all duration-700",
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </div>

        <div
          ref={contentRef}
          className={cn(
            "transition-all duration-700 delay-200",
            contentInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-gradient-to-b from-card/90 to-card/60 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
