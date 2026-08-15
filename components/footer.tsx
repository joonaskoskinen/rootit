"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

function RootITLogo() {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6 text-primary" aria-hidden="true">
        <circle cx="10" cy="16" r="4" fill="currentColor" opacity="0.9" />
        <circle cx="22" cy="8" r="3" fill="currentColor" opacity="0.65" />
        <circle cx="22" cy="24" r="3" fill="currentColor" opacity="0.65" />
        <path d="M13 14 L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 18 L19 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        root<span className="text-primary">IT</span>
      </span>
    </span>
  )
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-secondary/40" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex max-w-xs flex-col gap-3">
            <Link href="/" aria-label="rootIT — etusivu">
              <RootITLogo />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">{t("footer.slogan")}</p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <p className="text-sm font-semibold">{t("footer.contact")}</p>
              <a
                href="mailto:rootit.info@gmail.com"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("footer.email")}
              </a>
              <p className="text-sm text-muted-foreground">{t("footer.location")}</p>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-2.5" aria-label="Alanavigaatio">
              <p className="text-sm font-semibold">Sivusto</p>
              <Link href="/#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {t("footer.services")}
              </Link>
              <Link href="/#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {t("footer.pricing")}
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.howItWorks")}
              </Link>
              <Link href="/#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {t("nav.faq")}
              </Link>
              <Link
                href="/artikkelit"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.articles")}
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} rootIT · {t("footer.slogan")}
          </p>
        </div>
      </div>
    </footer>
  )
}
