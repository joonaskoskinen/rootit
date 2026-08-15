"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroContactCard() {
  const { t } = useLanguage()
  const cardRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleOpenForm = () => {
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      setTimeout(() => emailRef.current?.focus({ preventScroll: true }), 600)
    }
    window.addEventListener("openConsultationForm", handleOpenForm)
    return () => window.removeEventListener("openConsultationForm", handleOpenForm)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      description: formData.get("description") as string,
      preferredTime: (formData.get("preferredTime") as string) || "",
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
      setError(t("form.error"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      ref={cardRef}
      id="consultation-mockup"
      className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(20,35,25,0.04),0_12px_32px_-12px_rgba(20,35,25,0.12)] sm:p-7"
    >
      {isSubmitted ? (
        <div className="flex flex-col items-center py-10 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
            <CheckCircle2 className="h-7 w-7 text-primary" />
          </div>
          <p className="font-display text-xl font-semibold">{t("form.success.title")}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("form.success.desc")}</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-display text-lg font-semibold tracking-tight">{t("form.title")}</h2>
            <span className="flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {t("chat.online")}
            </span>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t("form.desc")}</p>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="hero-email" className="text-xs font-medium text-muted-foreground">
                {t("form.email")} *
              </Label>
              <Input
                ref={emailRef}
                id="hero-email"
                name="email"
                type="email"
                required
                placeholder={t("form.email.placeholder")}
                className="rounded-lg border-input bg-background"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="hero-description" className="text-xs font-medium text-muted-foreground">
                {t("form.description")} *
              </Label>
              <Textarea
                id="hero-description"
                name="description"
                required
                placeholder={t("form.description.placeholder")}
                className="min-h-24 resize-none rounded-lg border-input bg-background"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="hero-phone" className="text-xs font-medium text-muted-foreground">
                {t("form.phone")}
              </Label>
              <Input
                id="hero-phone"
                name="phone"
                type="tel"
                placeholder={t("form.phone.placeholder")}
                className="rounded-lg border-input bg-background"
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="h-12 w-full rounded-lg bg-primary text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("form.submitting")}
                </>
              ) : (
                <>
                  {t("form.submit")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-center text-xs leading-relaxed text-muted-foreground">{t("hero.microcopy")}</p>
          </form>
        </>
      )}
    </div>
  )
}
