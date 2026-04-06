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
import Script from "next/script"

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

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="py-16 sm:py-20 lg:py-28" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div
            ref={headerRef}
            className={cn(
              "mb-8 text-center transition-all duration-700 sm:mb-12",
              headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <h2 id="faq-heading" className="mb-3 font-display text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
              {t("faq.title")}
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
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
            <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-gradient-to-b from-card/90 to-card/60 px-4 shadow-sm sm:rounded-2xl sm:px-6"
                >
                  <AccordionTrigger className="py-4 text-left text-sm font-medium hover:no-underline sm:py-5 sm:text-base [&[data-state=open]>svg]:rotate-180">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground sm:pb-5 sm:text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
