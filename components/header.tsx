"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

function RootITLogo() {
  return (
    <svg viewBox="0 0 120 32" fill="none" className="h-7 w-auto">
      {/* Root/tree icon - abstract connected nodes representing systems/roots */}
      <circle cx="10" cy="16" r="4" fill="currentColor" opacity="0.9"/>
      <circle cx="22" cy="8" r="3" fill="currentColor" opacity="0.7"/>
      <circle cx="22" cy="24" r="3" fill="currentColor" opacity="0.7"/>
      <path d="M13 14 L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M13 18 L19 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 11 L22 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      {/* Text: rootIT */}
      <text x="32" y="22" fontFamily="var(--font-display), system-ui" fontSize="18" fontWeight="600" fill="currentColor" letterSpacing="-0.02em">
        root<tspan fontWeight="700" fill="url(#logoGradient)">IT</tspan>
      </text>
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.75 0.14 175)"/>
          <stop offset="100%" stopColor="oklch(0.72 0.18 300)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleConsultationClick = () => {
    setIsMobileMenuOpen(false)
    const mockup = document.getElementById("consultation-mockup")
    if (mockup) {
      mockup.scrollIntoView({ behavior: "smooth", block: "center" })
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("openConsultationForm"))
      }, 500)
    }
  }

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      isScrolled 
        ? 'border-border/60 bg-background/80 backdrop-blur-xl' 
        : 'border-transparent bg-transparent'
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-wide">
          <RootITLogo />
        </Link>

        <nav className="hidden items-center gap-6 text-muted-foreground md:flex" aria-label="Päänavigaatio">
          <Link href="#services" className="text-sm transition-colors hover:text-foreground">
            {t("nav.services")}
          </Link>
          <Link href="#pricing" className="text-sm transition-colors hover:text-foreground">
            {t("nav.pricing")}
          </Link>
          <Link href="#how-it-works" className="text-sm transition-colors hover:text-foreground">
            {t("nav.howItWorks")}
          </Link>
          <Link href="#faq" className="text-sm transition-colors hover:text-foreground">
            UKK
          </Link>
          <Link 
            href="https://www.teamviewer.com/en/download/portal/windows/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm transition-colors hover:text-foreground"
          >
            <Download className="h-3.5 w-3.5" />
            {t("nav.remoteSupport")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "fi" ? "en" : "fi")}
            className="hidden rounded-full border border-border/50 px-2.5 py-1 text-[10px] font-medium text-muted-foreground/70 transition-colors hover:bg-muted hover:text-muted-foreground sm:inline-flex"
            title={lang === "fi" ? "Switch to English" : "Vaihda suomeksi"}
          >
            {lang === "fi" ? "EN" : "FI"}
          </button>
          <Button 
            className="hidden rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 sm:inline-flex cursor-pointer"
            onClick={handleConsultationClick}
          >
            {t("nav.contact")}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobiilinavigaatio">
            <Link 
              href="#services" 
              className="rounded-lg px-4 py-3 text-base transition-colors hover:bg-muted active:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link 
              href="#pricing" 
              className="rounded-lg px-4 py-3 text-base transition-colors hover:bg-muted active:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.pricing")}
            </Link>
            <Link 
              href="#how-it-works" 
              className="rounded-lg px-4 py-3 text-base transition-colors hover:bg-muted active:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.howItWorks")}
            </Link>
            <Link 
              href="#faq" 
              className="rounded-lg px-4 py-3 text-base transition-colors hover:bg-muted active:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Usein kysyttyä
            </Link>
            <Link 
              href="https://www.teamviewer.com/en/download/portal/windows/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base transition-colors hover:bg-muted active:bg-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download className="h-4 w-4" />
              {t("nav.remoteSupport")}
            </Link>
            <Button 
              className="mt-3 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground cursor-pointer"
              onClick={handleConsultationClick}
            >
              {t("nav.contact")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
