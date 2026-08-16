"use client"

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  type PointerEvent,
} from "react"
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  CheckCircle2,
  CalendarCheck,
  Phone,
  Mail,
} from "lucide-react"
import { cn } from "@/lib/utils"

export interface PhoneMockupRef {
  openForm: () => void
}

/**
 * The phone is the site's visual signature.
 * Default face = a clean, polished mobile website (the "after" we deliver).
 * Tapping the CTA reveals the free-review request form (the one conversion action).
 */
export const PhoneMockup = forwardRef<PhoneMockupRef>(function PhoneMockup(_, ref) {
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState<string>("")

  useImperativeHandle(ref, () => ({
    openForm: () => setShowForm(true),
  }))

  useEffect(() => {
    const handleOpenForm = () => setShowForm(true)
    window.addEventListener("openConsultationForm", handleOpenForm)
    return () => window.removeEventListener("openConsultationForm", handleOpenForm)
  }, [])

  // Subtle pointer tilt
  const tiltRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return
    const el = tiltRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({ x: (0.5 - py) * 8, y: (px - 0.5) * 9 })
  }
  const handlePointerEnter = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return
    setIsHovering(true)
  }
  const handlePointerLeave = () => {
    setIsHovering(false)
    setTilt({ x: 0, y: 0 })
  }

  useEffect(() => {
    const update = () =>
      setCurrentTime(
        new Date().toLocaleTimeString("fi-FI", { hour: "2-digit", minute: "2-digit" }),
      )
    update()
    const interval = setInterval(update, 15000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const site = (formData.get("site") as string) || ""
    const message = (formData.get("description") as string) || ""
    const data = {
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: site ? `Sivusto: ${site}\n\n${message}` : message,
      preferredTime: "Ilmainen sivustoarvio",
    }

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("Failed to submit")
      setIsSubmitted(true)
    } catch {
      setError("Jokin meni pieleen. Yritä uudelleen tai lähetä sähköpostia suoraan.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBack = () => {
    setShowForm(false)
    setIsSubmitted(false)
    setError(null)
  }

  return (
    <div className="relative w-full max-w-[280px] [perspective:1400px] sm:max-w-[320px]">
      {/* Floating annotation chips — framing signals, kept clear of screen content */}
      <div className="pointer-events-none absolute -left-24 top-28 z-20 hidden rounded-md border border-border bg-card px-3 py-2 shadow-sm xl:block">
        <p className="text-[11px] font-medium text-foreground">Selkeä viesti</p>
        <p className="text-[10px] text-muted-foreground">heti ruudun yläosassa</p>
      </div>
      <div className="pointer-events-none absolute -right-20 bottom-32 z-20 hidden rounded-md border border-border bg-card px-3 py-2 shadow-sm xl:block">
        <p className="text-[11px] font-medium text-foreground">Näkyvä CTA</p>
        <p className="text-[10px] text-muted-foreground">yksi selkeä seuraava askel</p>
      </div>

      <div
        ref={tiltRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        className="relative transition-transform duration-200 ease-out [transform-style:preserve-3d] will-change-transform"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovering ? 1.015 : 1})`,
        }}
      >
        <div className="animate-phone-float">
          {/* Phone frame */}
          <div
            className="relative w-full rounded-[2.2rem] border border-black/10 bg-[#1c1c1a] p-2.5 shadow-[0_30px_60px_-20px_rgba(31,31,26,0.35)] sm:rounded-[2.5rem] sm:p-3"
            style={{ transform: "translateZ(30px)" }}
          >
            {/* Notch */}
            <div className="absolute left-1/2 top-3 z-10 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black sm:top-3.5" />

            {/* Screen */}
            <div className="relative flex min-h-[540px] flex-col overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-[#12151e] to-[#0b0d13] text-white sm:min-h-[580px] sm:rounded-[2rem]">
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-2.5 text-[10px] font-medium text-white/60 sm:pt-3">
                <span>{currentTime || "9.41"}</span>
                <div className="flex items-center gap-1">
                  <span>5G</span>
                  <div className="flex items-end gap-[2px]">
                    <div className="h-1 w-[3px] rounded-sm bg-white/40" />
                    <div className="h-1.5 w-[3px] rounded-sm bg-white/50" />
                    <div className="h-2 w-[3px] rounded-sm bg-white/60" />
                    <div className="h-2.5 w-[3px] rounded-sm bg-white/80" />
                  </div>
                </div>
              </div>

              {/* Sliding container */}
              <div className="relative flex flex-1 overflow-hidden">
                {/* Inbound feed (default face) — the result of a clearer site */}
                <div
                  className={cn(
                    "flex w-full flex-col px-4 pt-4 transition-all duration-500 ease-out sm:px-4",
                    showForm ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100",
                  )}
                >
                  {/* Header */}
                  <div className="phone-card-enter mb-4 flex items-start justify-between" style={{ animationDelay: "60ms" }}>
                    <div>
                      <h4 className="text-[17px] font-semibold tracking-tight text-white">Yhteydenotot</h4>
                      <p className="mt-0.5 text-[11px] text-white/45">Suoraan sivultasi</p>
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/15 px-2.5 py-1 text-[11px] font-medium text-primary">
                      12 tänään
                    </span>
                  </div>

                  {/* Highlighted new booking — live */}
                  <div
                    className="phone-card-enter rounded-xl border border-primary/25 bg-gradient-to-br from-primary/[0.14] to-primary/[0.03] px-3.5 py-3"
                    style={{ animationDelay: "170ms" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-[11px] font-medium text-primary">Uusi ajanvaraus · juuri nyt</span>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20">
                        <CalendarCheck className="h-3.5 w-3.5 text-primary" />
                      </div>
                    </div>
                    <p className="mt-2 text-[13px] font-semibold text-white">Maria K.</p>
                    <p className="text-[11px] text-white/50">Leikkaus &amp; muotoilu · pe klo 14.00</p>
                  </div>

                  {/* Secondary inbound items */}
                  <div className="mt-2.5 space-y-2.5">
                    <div
                      className="phone-card-enter flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5"
                      style={{ animationDelay: "260ms" }}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                        <Phone className="h-3.5 w-3.5 text-white/70" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-medium text-white">Soittopyyntö</p>
                        <p className="truncate text-[11px] text-white/45">Tarjous remontista · 8 min sitten</p>
                      </div>
                    </div>

                    <div
                      className="phone-card-enter flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5"
                      style={{ animationDelay: "350ms" }}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                        <Mail className="h-3.5 w-3.5 text-white/70" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-medium text-white">Yhteydenotto lomakkeella</p>
                        <p className="truncate text-[11px] text-white/45">Kysely hinnoista · 24 min sitten</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1" />

                  {/* Bottom CTA into the review form */}
                  <div className="phone-card-enter py-3" style={{ animationDelay: "440ms" }}>
                    <button
                      onClick={() => setShowForm(true)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-[13px] font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
                    >
                      Pyydä ilmainen sivustoarvio
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-2 text-center text-[10px] text-white/40">
                      Näin selkeämpi sivu näyttää tuloksissa.
                    </p>
                  </div>
                </div>

                {/* Free-review request form */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col bg-card transition-all duration-500 ease-out",
                    showForm ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
                  )}
                >
                  {isSubmitted ? (
                    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="mb-2 text-base font-semibold text-foreground">
                        Kiitos! Arviopyyntö vastaanotettu.
                      </h3>
                      <p className="mb-6 text-[13px] leading-relaxed text-muted-foreground">
                        Käyn sivusi läpi ja palaan asiaan sähköpostitse muutaman päivän sisällä.
                      </p>
                      <button
                        onClick={handleBack}
                        className="rounded-lg border border-border bg-secondary px-5 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        Takaisin
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 border-b border-border px-4 pb-3 pt-4">
                        <button
                          onClick={handleBack}
                          aria-label="Takaisin"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-muted"
                        >
                          <ArrowLeft className="h-4 w-4 text-foreground" />
                        </button>
                        <h3 className="text-sm font-semibold text-foreground">
                          Pyydä ilmainen sivustoarvio
                        </h3>
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-1 flex-col overflow-y-auto px-4 pb-4 pt-3"
                      >
                        <div className="space-y-3">
                          <div className="space-y-1.5">
                            <label htmlFor="phone-site" className="text-[11px] font-medium text-muted-foreground">
                              Sivustosi osoite
                            </label>
                            <input
                              id="phone-site"
                              name="site"
                              type="text"
                              inputMode="url"
                              placeholder="esim. yritys.fi"
                              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="phone-email" className="text-[11px] font-medium text-muted-foreground">
                              Sähköposti *
                            </label>
                            <input
                              id="phone-email"
                              name="email"
                              type="email"
                              required
                              autoComplete="email"
                              inputMode="email"
                              placeholder="sinun@sahkoposti.fi"
                              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="phone-tel" className="text-[11px] font-medium text-muted-foreground">
                              Puhelin (valinnainen)
                            </label>
                            <input
                              id="phone-tel"
                              name="phone"
                              type="tel"
                              autoComplete="tel"
                              inputMode="tel"
                              placeholder="040 123 4567"
                              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label htmlFor="phone-desc" className="text-[11px] font-medium text-muted-foreground">
                              Mitä haluat parantaa? (valinnainen)
                            </label>
                            <textarea
                              id="phone-desc"
                              name="description"
                              rows={3}
                              placeholder="Kerro lyhyesti, mikä nykyisessä sivussa mietityttää."
                              className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                        </div>

                        {error && <p className="mt-2 text-[12px] text-destructive">{error}</p>}

                        <div className="min-h-3 flex-1" />

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-[13px] font-semibold text-primary-foreground transition-transform active:scale-[0.98] disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Lähetetään…
                            </>
                          ) : (
                            <>
                              Lähetä arviopyyntö
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                        <p className="mt-2 text-center text-[10px] text-muted-foreground">
                          Ilmainen eikä sido mihinkään.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pb-2.5 pt-1">
                <div className="h-1 w-24 rounded-full bg-foreground/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
