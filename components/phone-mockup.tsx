"use client"

import { useState, useEffect, forwardRef, useImperativeHandle } from "react"
import { Check, Clock, ChevronRight, Sparkles, ArrowLeft, Loader2, CheckCircle2, ArrowRight, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export interface PhoneMockupRef {
  openForm: () => void
}

export const PhoneMockup = forwardRef<PhoneMockupRef>(function PhoneMockup(_, ref) {
  const { t } = useLanguage()
  const [showForm, setShowForm] = useState(false)
  
  useImperativeHandle(ref, () => ({
    openForm: () => setShowForm(true)
  }))
  
  useEffect(() => {
    const handleOpenForm = () => setShowForm(true)
    window.addEventListener("openConsultationForm", handleOpenForm)
    return () => window.removeEventListener("openConsultationForm", handleOpenForm)
  }, [])
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      description: formData.get("description") as string,
      preferredTime: formData.get("preferredTime") as string,
    }

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSubmitted(true)
    } catch {
      setError(t("form.error"))
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
    <div className="relative w-full max-w-[280px] sm:max-w-[340px]">
      {/* Subtle glow effect */}
      <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-2xl sm:-inset-5 sm:rounded-[3rem] sm:blur-3xl" />
      
      {/* Phone frame with realistic shadow */}
      <div className="relative w-full rounded-[2rem] border border-white/[0.08] bg-[#0a0c10] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)] sm:rounded-[2.5rem] sm:p-3">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3.5 z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black sm:top-4 sm:h-[26px] sm:w-[100px]" />
        
        {/* Screen */}
        <div className="relative flex h-[460px] flex-col overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-[#13161f] to-[#0d0f16] text-white sm:h-[580px] sm:rounded-[2rem]">
          {/* Status bar */}
          <div className="flex justify-between px-7 pt-2.5 text-[10px] font-medium opacity-60 sm:px-8 sm:pt-3 sm:text-xs">
            <span>09:41</span>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <div className="flex items-end gap-0.5">
                <div className="h-1 w-0.5 rounded-full bg-white/60" />
                <div className="h-1.5 w-0.5 rounded-full bg-white/60" />
                <div className="h-2 w-0.5 rounded-full bg-white/60" />
                <div className="h-2.5 w-0.5 rounded-full bg-white/60" />
              </div>
            </div>
          </div>

          {/* Sliding container */}
          <div className="relative flex-1 overflow-hidden">
            {/* Main content - slides left */}
            <div className={cn(
              "absolute inset-0 flex flex-col px-3.5 pb-4 pt-4 transition-all duration-500 ease-out sm:px-4 sm:pb-5 sm:pt-5",
              showForm ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
            )}>
              {/* Header */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">{t("phone.title")}</h3>
                <p className="mt-0.5 text-[11px] text-white/40">Hallitse IT-tukipyyntöjäsi</p>
              </div>
              
              {/* Task cards with better hierarchy */}
              <div className="space-y-2 sm:space-y-2.5">
                {/* Task 1 - In Progress - Highlighted */}
                <div className="rounded-xl border border-primary/25 bg-gradient-to-br from-primary/[0.12] to-primary/[0.04] px-3 py-2.5 shadow-[0_2px_8px_-2px_rgba(59,130,246,0.15)]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold leading-tight">{t("phone.task1")}</div>
                      <div className="mt-1 flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-[11px] font-medium text-primary">{t("phone.task1.status")}</span>
                      </div>
                    </div>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Task 2 - Done - Calmer */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium leading-tight text-white/80">{t("phone.task2")}</div>
                      <div className="mt-1 flex items-center gap-1.5">
                        <Check className="h-2.5 w-2.5 text-emerald-400/70" />
                        <span className="text-[11px] text-emerald-400/70">{t("phone.task2.status")}</span>
                      </div>
                    </div>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                      <Check className="h-3.5 w-3.5 text-emerald-400/60" />
                    </div>
                  </div>
                </div>
                
                {/* Task 3 - Email - Subdued with two-line title for realism */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-medium leading-tight text-white/60">Sähköpostijärjestelmän konfigurointi</div>
                      <div className="mt-1 flex items-center gap-1.5">
                        <Mail className="h-2.5 w-2.5 text-white/30" />
                        <span className="text-[11px] text-white/40">{t("phone.task4.status")}</span>
                      </div>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/20" />
                  </div>
                </div>
                
                {/* Recommendation card - Special but not overwhelming */}
                <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] to-transparent px-3 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 shrink-0 text-accent/80" />
                        <span className="text-[13px] font-medium text-white/70">{t("phone.task3")}</span>
                      </div>
                      <div className="mt-0.5 text-[11px] text-white/40 pl-[18px]">
                        {t("phone.task3.desc")}
                      </div>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/20" />
                  </div>
                </div>
              </div>
              
              {/* Spacer */}
              <div className="flex-1" />
              
              {/* CTA Button - More native app feeling, less hero-style */}
              <button 
                onClick={() => setShowForm(true)}
                className="w-full rounded-xl bg-gradient-to-r from-primary via-primary to-accent py-2.5 text-[13px] font-semibold text-white transition-all active:scale-[0.98] active:opacity-90 sm:py-3"
              >
                {t("phone.cta")}
              </button>
            </div>

            {/* Form content - slides in from right */}
            <div className={cn(
              "absolute inset-0 flex flex-col transition-all duration-500 ease-out",
              showForm ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            )}>
              {isSubmitted ? (
                /* Success state */
                <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{t("form.success.title")}</h3>
                  <p className="mb-6 text-sm text-white/60">{t("form.success.desc")}</p>
                  <button 
                    onClick={handleBack}
                    className="rounded-xl bg-white/10 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white/20"
                  >
                    {t("form.success.close")}
                  </button>
                </div>
              ) : (
                /* Form state */
                <>
                  {/* Header with back button */}
                  <div className="flex items-center gap-3 px-4 pt-5">
                    <button 
                      onClick={handleBack}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <h3 className="text-base font-semibold">{t("form.title")}</h3>
                  </div>
                  
                  {/* Scrollable form */}
                  <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-y-auto px-4 pb-5 pt-4">
                    <div className="space-y-3.5">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-email" className="text-xs font-medium text-white/60">{t("form.email")} *</label>
                        <input
                          id="phone-email"
                          name="email"
                          type="email"
                          required
                          placeholder={t("form.email.placeholder")}
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/25 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-tel" className="text-xs font-medium text-white/60">{t("form.phone")}</label>
                        <input
                          id="phone-tel"
                          name="phone"
                          type="tel"
                          placeholder={t("form.phone.placeholder")}
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/25 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                        />
                      </div>
                      
                      {/* Description */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-desc" className="text-xs font-medium text-white/60">{t("form.description")} *</label>
                        <textarea
                          id="phone-desc"
                          name="description"
                          required
                          rows={3}
                          placeholder={t("form.description.placeholder")}
                          className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/25 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                        />
                      </div>
                      
                      {/* Preferred time */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-time" className="text-xs font-medium text-white/60">{t("form.time")}</label>
                        <input
                          id="phone-time"
                          name="preferredTime"
                          type="text"
                          placeholder={t("form.time.placeholder")}
                          className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-sm placeholder:text-white/25 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="mt-2 text-xs text-red-400">{error}</p>
                    )}
                    
                    {/* Spacer */}
                    <div className="flex-1 min-h-3" />
                    
                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent py-3 font-semibold text-white transition-all disabled:opacity-70 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {t("form.submitting")}
                        </>
                      ) : (
                        <>
                          {t("form.submit")}
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2.5">
            <div className="h-1 w-28 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    </div>
  )
})
