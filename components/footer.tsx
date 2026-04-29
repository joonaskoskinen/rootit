"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

function RootITLogo() {
  return (
    <svg viewBox="0 0 120 32" fill="none" className="h-6 w-auto">
      <circle cx="10" cy="16" r="4" fill="currentColor" opacity="0.9"/>
      <circle cx="22" cy="8" r="3" fill="currentColor" opacity="0.7"/>
      <circle cx="22" cy="24" r="3" fill="currentColor" opacity="0.7"/>
      <path d="M13 14 L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M13 18 L19 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 11 L22 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <text x="32" y="22" fontFamily="var(--font-display), system-ui" fontSize="18" fontWeight="600" fill="currentColor" letterSpacing="-0.02em">
        root<tspan fontWeight="700" fill="url(#footerLogoGradient)">IT</tspan>
      </text>
      <defs>
        <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.75 0.14 175)"/>
          <stop offset="100%" stopColor="oklch(0.72 0.18 300)"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border py-8 sm:py-12" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Link href="/" className="flex items-center gap-2 font-bold tracking-wide">
              <RootITLogo />
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("footer.slogan")}
            </p>
          </div>

          {/* Contact column */}
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-sm font-medium text-foreground mb-1">{t("footer.contact")}</p>
            <a 
              href="mailto:rootit.info@gmail.com" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("footer.email")}
            </a>
            <p className="text-sm text-muted-foreground">
              {t("footer.location")}
            </p>
          </div>

          {/* Nav column */}
          <nav className="flex flex-col items-center gap-1 sm:items-start lg:items-end" aria-label="Alanavigaatio">
            <Link href="#services" className="min-h-[44px] flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground px-2 -mx-2">
              {t("footer.services")}
            </Link>
            <Link href="#pricing" className="min-h-[44px] flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground px-2 -mx-2">
              {t("footer.pricing")}
            </Link>
            <Link href="#how-it-works" className="min-h-[44px] flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground px-2 -mx-2">
              {t("nav.howItWorks")}
            </Link>
            <Link href="#faq" className="min-h-[44px] flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground px-2 -mx-2">
              {t("nav.faq")}
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t border-border pt-6 text-center sm:mt-8 sm:pt-8">
          <p className="text-xs text-muted-foreground sm:text-sm">
            &copy; {new Date().getFullYear()} rootIT. {t("footer.slogan")}
          </p>
        </div>
      </div>
    </footer>
  )
}
