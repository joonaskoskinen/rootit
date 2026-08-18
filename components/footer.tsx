import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <svg viewBox="0 0 120 32" fill="none" className="h-7 w-auto text-foreground" role="img" aria-label="rootIT">
              <circle cx="10" cy="16" r="4" fill="currentColor" opacity="0.9" />
              <circle cx="22" cy="8" r="3" fill="currentColor" opacity="0.7" />
              <circle cx="22" cy="24" r="3" fill="currentColor" opacity="0.7" />
              <path d="M13 14 L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M13 18 L19 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M22 11 L22 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              <text
                x="32"
                y="22"
                fontFamily="var(--font-sans), system-ui"
                fontSize="18"
                fontWeight="600"
                fill="currentColor"
                letterSpacing="-0.02em"
              >
                root<tspan fontWeight="700" fill="url(#footerLogoGradient)">IT</tspan>
              </text>
              <defs>
                <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="oklch(0.82 0.09 35)" />
                  <stop offset="100%" stopColor="oklch(0.83 0.08 10)" />
                </linearGradient>
              </defs>
            </svg>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Selkeämmät verkkosivut pienyrityksille. Korjaamme sivut sellaisiksi, että
              asiakas ymmärtää ja ottaa yhteyttä.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-medium text-foreground">Yhteys</span>
            <a
              href="mailto:rootit.info@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              rootit.info@gmail.com
            </a>
            <a
              href="https://rootit.fi"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              rootit.fi
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Rootit</p>
          <div className="flex gap-5">
            <Link href="/artikkelit" className="transition-colors hover:text-foreground">
              Artikkelit
            </Link>
            <Link href="/tietosuoja" className="transition-colors hover:text-foreground">
              Tietosuojaseloste
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
