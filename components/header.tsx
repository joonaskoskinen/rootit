"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

function RootITLogo() {
  return (
    <span className="flex items-center gap-2">
      {/* Root mark: node with branching roots */}
      <svg viewBox="0 0 28 28" fill="none" className="h-7 w-7" aria-hidden="true">
        <circle cx="14" cy="9" r="4.5" fill="var(--primary)" />
        <path
          d="M14 13.5 V20 M14 17 L8.5 22.5 M14 17 L19.5 22.5"
          stroke="var(--primary)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        root<span className="text-primary">IT</span>
      </span>
    </span>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleConsultationClick = () => {
    setIsMobileMenuOpen(false)

    if (pathname !== "/") {
      router.push("/#consultation-mockup")
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("openConsultationForm"))
      }, 800)
      return
    }

    window.dispatchEvent(new CustomEvent("openConsultationForm"))
  }

  const navLinks = [
    { href: "/#services", label: t("nav.services") },
    { href: "/#pricing", label: t("nav.pricing") },
    { href: "/#how-it-works", label: t("nav.howItWorks") },
    { href: "/#faq", label: t("nav.faq") },
    { href: "/artikkelit", label: t("nav.articles") },
  ]

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 lg:px-6">
        <Link href="/" aria-label="rootIT - etusivu">
          <RootITLogo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Päänavigaatio">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://www.teamviewer.com/en/download/portal/windows/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Download className="h-3.5 w-3.5" />
            {t("nav.remoteSupport")}
          </Link>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setLang(lang === "fi" ? "en" : "fi")}
            className="hidden rounded-full border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex"
            title={lang === "fi" ? "Switch to English" : "Vaihda suomeksi"}
          >
            {lang === "fi" ? "EN" : "FI"}
          </button>
          <Button
            className="hidden rounded-full bg-primary px-5 font-medium text-primary-foreground hover:bg-primary/90 sm:inline-flex cursor-pointer"
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
        <div className="fixed inset-x-0 bottom-0 top-[65px] z-40 overflow-y-auto border-t border-border bg-background md:hidden safe-area-inset safe-area-bottom">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobiilinavigaatio">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-secondary active:bg-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.teamviewer.com/en/download/portal/windows/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-secondary active:bg-secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download className="h-4 w-4" />
              {t("nav.remoteSupport")}
            </Link>
            <Button
              className="mt-3 h-12 rounded-full bg-primary font-medium text-primary-foreground hover:bg-primary/90 cursor-pointer"
              onClick={handleConsultationClick}
            >
              {t("nav.contact")}
            </Button>

            <div className="mt-4 flex justify-center border-t border-border pt-4">
              <button
                onClick={() => {
                  setLang(lang === "fi" ? "en" : "fi")
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
              >
                {lang === "fi" ? "Switch to English" : "Vaihda suomeksi"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
