"use client"

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  type PointerEvent,
} from "react"
import { ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
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
                {/* Default face — an on-brand animation (root/node motif) + the one CTA */}
                <div
                  className={cn(
                    "flex w-full flex-col px-5 pt-4 transition-all duration-500 ease-out",
                    showForm ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100",
                  )}
                >
                  {/* Animation stage */}
                  <div className="relative flex flex-1 items-center justify-center">
                    {/* Expanding rings */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="absolute rounded-full border border-primary/25 animate-root-ring"
                          style={{
                            width: "160px",
                            height: "160px",
                            animationDelay: `${i * 1.3}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Node graph */}
                    <svg
                      viewBox="0 0 200 200"
                      className="relative h-[200px] w-[200px]"
                      aria-hidden="true"
                    >
                      <defs>
                        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="oklch(0.76 0.13 178)" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="oklch(0.76 0.13 178)" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {/* connecting lines */}
                      {[
                        [100, 100, 52, 44],
                        [100, 100, 150, 52],
                        [100, 100, 40, 118],
                        [100, 100, 156, 132],
                        [100, 100, 100, 168],
                      ].map(([x1, y1, x2, y2], i) => (
                        <line
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="oklch(0.76 0.13 178)"
                          strokeWidth="1"
                          strokeOpacity="0.35"
                          className="animate-root-line"
                          style={{ animationDelay: `${i * 0.35}s` }}
                        />
                      ))}

                      {/* satellite nodes */}
                      {[
                        [52, 44],
                        [150, 52],
                        [40, 118],
                        [156, 132],
                        [100, 168],
                      ].map(([cx, cy], i) => (
                        <circle
                          key={i}
                          cx={cx}
                          cy={cy}
                          r="4"
                          fill="oklch(0.76 0.13 178)"
                          className="animate-root-node"
                          style={{ animationDelay: `${i * 0.35}s` }}
                        />
                      ))}

                      {/* core */}
                      <circle cx="100" cy="100" r="34" fill="url(#coreGlow)" />
                      <circle
                        cx="100"
                        cy="100"
                        r="9"
                        fill="oklch(0.76 0.13 178)"
                        className="animate-root-core"
                      />
                    </svg>
                  </div>

                  {/* Caption */}
                  <div className="phone-card-enter px-1 text-center" style={{ animationDelay: "120ms" }}>
                    <p className="text-[15px] font-semibold leading-snug text-white text-balance">
                      Selkeä sivu, joka ohjaa yhteydenottoon.
                    </p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-white/45">
                      Korjaamme perustan kuntoon — viesti, rakenne ja CTA.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="phone-card-enter py-4" style={{ animationDelay: "220ms" }}>
                    <button
                      onClick={() => setShowForm(true)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-[13px] font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
                    >
                      Pyydä ilmainen sivustoarvio
                      <ArrowRight className="h-4 w-4" />
                    </button>
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
