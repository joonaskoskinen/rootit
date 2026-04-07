"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

function RuneLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-8 w-8">
      <rect x="6" y="6" width="52" height="52" rx="18" stroke="currentColor" strokeWidth="4"/>
      <path d="M19 44V20H35C41 20 45 24 45 29C45 33 42 36 38 37L46 44H38L31 38H27V44H19Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
      <path d="M27 27H34C36.8 27 38.5 28.6 38.5 31C38.5 33.4 36.8 35 34 35H27" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  )
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row lg:px-6">
        <div className="flex items-center gap-2.5 font-bold tracking-wide">
          <RuneLogo />
          <span>RUNE <span className="text-primary">ACCESS</span></span>
        </div>
        
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <Link href="#features" className="transition-colors hover:text-foreground">
            {t("footer.features")}
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground">
            {t("footer.pricing")}
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            {t("footer.privacy")}
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            {t("footer.terms")}
          </Link>
        </nav>
        
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rune Access
        </p>
      </div>
    </footer>
  )
}
