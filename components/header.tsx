"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { RequestReviewButton, openReviewForm } from "@/components/request-review-button"
import { cn } from "@/lib/utils"

function Wordmark() {
  return (
    <span className="text-lg font-semibold tracking-tight text-foreground">
      Root<span className="text-primary">it</span>
    </span>
  )
}

const NAV = [
  { href: "/#palvelut", label: "Palvelut" },
  { href: "/#prosessi", label: "Prosessi" },
  { href: "/#ukk", label: "UKK" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        isScrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Rootit etusivu">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Päänavigaatio">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <RequestReviewButton
            withArrow={false}
            className="hidden px-4 py-2 md:inline-flex"
          />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Valikko"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
            aria-label="Mobiilinavigaatio"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                openReviewForm()
              }}
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Pyydä ilmainen sivustoarvio
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
