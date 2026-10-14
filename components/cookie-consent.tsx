'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const CONSENT_COOKIE = 'rootit-cookie-consent'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180

type ConsentChoice = 'accepted' | 'necessary'

function readConsent(): ConsentChoice | null {
  if (typeof document === 'undefined') return null

  const value = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`))
    ?.split('=')[1]

  return value === 'accepted' || value === 'necessary' ? value : null
}

function saveConsent(choice: ConsentChoice) {
  document.cookie = `${CONSENT_COOKIE}=${choice}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`
}

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentChoice | null>(null)

  useEffect(() => {
    setConsent(readConsent())
  }, [])

  if (consent) return null

  const chooseConsent = (choice: ConsentChoice) => {
    saveConsent(choice)
    setConsent(choice)
  }

  return (
    <aside
      aria-label="Evästeasetukset"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-border/80 bg-card/95 p-4 shadow-2xl backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="max-w-3xl">
          <h2 className="font-display text-base font-semibold text-card-foreground">Käytämme evästeitä</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Käytämme välttämättömiä evästeitä sivuston tekniseen toimintaan. Voit hyväksyä evästeet tai jatkaa vain välttämättömillä evästeillä. Lue lisää{' '}
            <a className="font-medium text-primary underline underline-offset-4" href="/tietosuoja">
              tietosuojaselosteesta
            </a>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={() => chooseConsent('necessary')}>
            Vain välttämättömät
          </Button>
          <Button onClick={() => chooseConsent('accepted')}>Hyväksy evästeet</Button>
        </div>
      </div>
    </aside>
  )
}
