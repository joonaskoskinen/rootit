import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background" role="contentinfo">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Root<span className="text-primary">it</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Selkeämmät verkkosivut pienyrityksille. Korjaamme sivut sellaisiksi, että
              asiakas ymmärtää ja ottaa yhteyttä.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="font-medium text-foreground">Yhteys</span>
            <a
              href="mailto:info@rootit.fi"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              info@rootit.fi
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
          <Link href="/tietosuoja" className="transition-colors hover:text-foreground">
            Tietosuojaseloste
          </Link>
        </div>
      </div>
    </footer>
  )
}
