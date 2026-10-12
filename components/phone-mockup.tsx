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
  const [description, setDescription] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState<string>("")

  useImperativeHandle(ref, () => ({
    openForm: () => setShowForm(true),
  }))

  useEffect(() => {
    const handleOpenForm = (event: Event) => {
      const problem = (event as CustomEvent<{ problem?: unknown }>).detail?.problem
      if (typeof problem === "string") setDescription(problem)
      setShowForm(true)
    }
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
    const data = {
      website: (formData.get("site") as string) || "",
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: (formData.get("description") as string) || "",
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
    setDescription("")
    setError(null)
  }

  return (
    <div className="relative w-full max-w-[320px] [perspective:1400px] sm:max-w-[350px]">
      <div
        ref={tiltRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        className="relative transition-transform duration-200 ease-out [transform-style:preserve-3d] will-change-transform"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${showForm ? 180 : tilt.y}deg) scale(${isHovering ? 1.015 : 1})`,
          transitionDuration: showForm ? "800ms" : undefined,
          transitionTimingFunction: showForm ? "cubic-bezier(0.22, 1, 0.36, 1)" : undefined,
        }}
      >
        <div className="animate-phone-float">
          {/* iPhone-style frame */}
          <div
            className="relative w-full rounded-[2.2rem] bg-gradient-to-br from-[#6d7076] via-[#24262b] to-[#111216] p-[3px] shadow-[0_22px_32px_-24px_rgba(5,8,18,0.7),inset_0_0_0_1px_rgba(255,255,255,0.28)] sm:rounded-[2.5rem] sm:p-[4px]"
            style={{ transform: "translateZ(30px)" }}
          >
            {/* Side controls */}
            <div className="pointer-events-none absolute -left-[3px] top-[86px] flex flex-col gap-3 sm:-left-[4px] sm:top-[100px] sm:gap-4" aria-hidden="true">
              <span className="h-8 w-[3px] rounded-l-full bg-gradient-to-b from-[#aeb1b6] to-[#303238] sm:h-10" />
              <span className="h-12 w-[3px] rounded-l-full bg-gradient-to-b from-[#aeb1b6] to-[#303238] sm:h-14" />
              <span className="h-12 w-[3px] rounded-l-full bg-gradient-to-b from-[#aeb1b6] to-[#303238] sm:h-14" />
            </div>
            <div className="pointer-events-none absolute -right-[3px] top-[130px] h-16 w-[3px] rounded-r-full bg-gradient-to-b from-[#aeb1b6] to-[#303238] sm:-right-[4px] sm:top-[150px] sm:h-20" aria-hidden="true" />

            {/* Screen */}
<div
              className={cn(
                "relative flex min-h-[600px] flex-col overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-[#12151e] to-[#0b0d13] text-white sm:min-h-[640px] sm:rounded-[2rem]",
              )}
            >
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-2.5 z-20 flex h-[25px] w-[94px] -translate-x-1/2 items-center justify-end rounded-full bg-black px-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:top-3 sm:h-[27px] sm:w-[104px]">
                <span className="size-2 rounded-full bg-[#11151d] shadow-[inset_0_0_3px_1px_rgba(80,100,140,0.5)]" />
              </div>
              <video className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.16]" autoPlay muted loop playsInline aria-hidden="true">

    <source src="/phone-mockup-video.mp4" type="video/mp4" />
  </video>
  <div className="pointer-events-none absolute inset-0 bg-[#0b0d13]/70" aria-hidden="true" />
  <div className="relative z-10 flex min-h-[600px] flex-1 flex-col sm:min-h-[640px]">
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
              <div className="relative flex flex-1 flex-col overflow-hidden px-5">
                  <div className="flex flex-1 flex-col justify-center px-1 pt-4">
                    <div className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                      rootIT
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-lg">
                      <div className="flex items-center justify-between text-[8px] text-white/60">
                        <span className="font-semibold">Selkeä sivu</span>
                        <span className="text-primary">Palvelut</span>
                      </div>
                      <div className="mt-3 rounded-xl bg-primary/15 p-3">
                        <p className="text-[15px] font-semibold leading-tight">Sivu, joka tekee asioinnista helppoa.</p>
                        <div className="mt-3 h-1.5 w-2/3 rounded-full bg-white/20" />
                        <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>



                {/* Free-review request form */}

                <div
                  className={cn(
                    "absolute inset-0 flex flex-col bg-card transition-all duration-500 ease-out",
                    showForm ? "translate-x-0 opacity-100 [transform:rotateY(180deg)]" : "translate-x-full opacity-0",
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
                      <div className="flex items-center gap-2 border-b border-border px-3 pb-2 pt-3">
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
                        className="flex flex-1 flex-col overflow-y-auto px-3 pb-3 pt-2"
                      >
                        <div className="space-y-2">
                          <div className="space-y-1">
                            <label htmlFor="phone-site" className="text-[11px] font-medium text-muted-foreground">
                              Sivustosi osoite
                            </label>
                            <input
                              id="phone-site"
                              name="site"
                              type="text"
                              inputMode="url"
                              placeholder="esim. yritys.fi"
                              className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-[12px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div className="space-y-1">
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
                              className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-[12px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div className="space-y-1">
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
                              className="w-full rounded-lg border border-border bg-background px-2.5 py-1.5 text-[12px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="phone-desc" className="text-[11px] font-medium text-muted-foreground">
                              Mikä sivustossasi tuntuu tällä hetkellä suurimmalta ongelmalta? (valinnainen)
                            </label>
          <textarea
            id="phone-desc"
            name="description"
            rows={2}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Kerro lyhyesti, mikä sivustossa kaipaa mielestäsi parannusta."
            className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
                          </div>
                        </div>

                        {error && <p className="mt-2 text-[12px] text-destructive">{error}</p>}

                        <div className="min-h-3 flex-1" />

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2 text-[12px] font-semibold text-primary-foreground transition-transform active:scale-[0.98] disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Lähetetään…
                            </>
                          ) : (
                            <>
                              Lähetä sivustoarvio
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

            {/* iPhone back glass, revealed during the 360° form transition */}
            <div
              className="pointer-events-none absolute inset-[3px] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#34363d] via-[#16181d] to-[#090a0d] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:inset-[4px] sm:rounded-[2.25rem]"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.13),transparent_28%),linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.05)_48%,transparent_60%)]" />
              <div className="absolute left-5 top-7 flex size-[76px] flex-wrap gap-1.5 rounded-[22px] border border-white/10 bg-black/25 p-2 shadow-[0_8px_18px_rgba(0,0,0,0.35)] sm:left-6 sm:top-8 sm:size-[84px] sm:rounded-[24px] sm:p-2.5">
                <span className="size-7 rounded-full border-2 border-[#343840] bg-[#08090c] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08)] sm:size-8" />
                <span className="size-7 rounded-full border-2 border-[#343840] bg-[#08090c] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.08)] sm:size-8" />
                <span className="size-2.5 rounded-full bg-[#d2d5db]/70 sm:size-3" />
                <span className="size-2.5 rounded-full bg-[#17191e] sm:size-3" />
              </div>
              <div className="absolute bottom-6 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
})
