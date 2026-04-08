"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneMockup, PhoneMockupRef } from "@/components/phone-mockup"
import { ArrowRight, Download, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()
  const phoneMockupRef = useRef<PhoneMockupRef>(null)
  const mockupContainerRef = useRef<HTMLDivElement>(null)

  const handleConsultationClick = () => {
    mockupContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    setTimeout(() => {
      phoneMockupRef.current?.openForm()
    }, 500)
  }
  
  return (
    <section className="relative overflow-hidden pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-20 lg:pt-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        
        {/* Intro paragraph for SEO - visible to search engines, styled subtly */}
        <p className="sr-only">
          rootIT tarjoaa IT-tukea etänä koko Suomeen. Palvelemme pienyrityksiä, yrittäjiä, yhdistyksiä ja yksityishenkilöitä. 
          Autamme verkkosivujen korjauksissa ja uudistuksissa, WordPress-ongelmissa, domain- ja DNS-asioissa sekä sähköpostiongelmissa.
        </p>
        
        {/* Main content grid */}
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          
          {/* Left side - Copy */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {/* Headline */}
            <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              <span className="text-gradient-cyan">{t("hero.headline1")}</span>
            </h1>
            
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:mx-0 lg:text-xl">
              {t("hero.description")}
            </p>
            
            {/* Primary CTAs */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:justify-start">
              <Button 
                size="lg" 
                className="h-12 w-full rounded-full bg-primary px-8 text-primary-foreground shadow-md hover:bg-primary/90 cursor-pointer sm:h-14 sm:w-auto sm:px-10"
                onClick={handleConsultationClick}
              >
                {t("hero.cta1")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 w-full rounded-full px-6 cursor-pointer sm:h-14 sm:w-auto sm:px-8"
                onClick={handleConsultationClick}
              >
                {t("hero.cta2")}
              </Button>
            </div>
            
            {/* Remote support link - subtle */}
            <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground sm:mt-5 lg:justify-start">
              <span>{t("hero.remoteLink")}</span>
              <Link 
                href="https://download.teamviewer.com/download/TeamViewerQS_x64.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                <Download className="h-3.5 w-3.5" />
                {t("remote.button")}
              </Link>
            </div>
            
            {/* Trust row */}
            <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                {t("trust.direct")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                {t("trust.oneoff")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                {t("trust.demo")}
              </span>
            </div>
          </div>
          
          {/* Right side - Phone mockup */}
          <div ref={mockupContainerRef} id="consultation-mockup" className="order-1 flex items-center justify-center px-4 sm:px-0 lg:order-2 lg:justify-end">
            <PhoneMockup ref={phoneMockupRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
