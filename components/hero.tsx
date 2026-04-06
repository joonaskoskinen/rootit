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
    <section className="relative overflow-hidden pb-12 pt-8 lg:pb-20 lg:pt-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        
        {/* Main content grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          
          {/* Left side - Copy */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {/* Headline */}
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              <span className="text-gradient-cyan">{t("hero.headline1")}</span>
            </h1>
            
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl">
              {t("hero.description")}
            </p>
            
            {/* Primary CTAs */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button 
                size="lg" 
                className="h-14 rounded-full bg-gradient-to-r from-primary to-accent px-10 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 cursor-pointer"
                onClick={handleConsultationClick}
              >
                {t("hero.cta1")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 rounded-full px-8 cursor-pointer"
                onClick={handleConsultationClick}
              >
                {t("hero.cta2")}
              </Button>
            </div>
            
            {/* Remote support link - subtle */}
            <div className="mt-5 flex items-center justify-center gap-1.5 text-sm text-muted-foreground lg:justify-start">
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
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" />
                {t("trust.direct")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" />
                {t("trust.oneoff")}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" />
                {t("trust.demo")}
              </span>
            </div>
          </div>
          
          {/* Right side - Phone mockup */}
          <div ref={mockupContainerRef} id="consultation-mockup" className="order-1 flex items-center justify-center lg:order-2 lg:justify-end">
            <PhoneMockup ref={phoneMockupRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
