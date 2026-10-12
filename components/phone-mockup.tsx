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
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
      
      {/* Phone frame */}
      <div className="relative w-[300px] rounded-[2.5rem] border border-white/10 bg-[#0b0d12] p-3 shadow-2xl sm:w-[340px] sm:p-4">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
        
        {/* Screen */}
        <div className="relative flex h-[520px] flex-col overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#151927] to-[#0f1320] text-white sm:h-[560px]">
          {/* Status bar */}
          <div className="flex justify-between px-8 pt-3 text-xs opacity-70">
            <span>09:41</span>
            <span>5G</span>
          </div>

          {/* Sliding container */}
          <div className="relative flex-1 overflow-hidden">
            {/* Main content - slides left */}
            <div className={cn(
              "absolute inset-0 flex flex-col px-5 pb-5 pt-8 transition-all duration-500 ease-out",
              showForm ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
            )}>
              {/* Header */}
              <div className="mb-6 text-center">
                <h3 className="text-lg font-semibold">{t("phone.title")}</h3>
              </div>
              
              {/* Task cards - compact layout */}
              <div className="space-y-2.5">
                {/* Task 1 - In Progress */}
                <div className="rounded-xl border border-primary/30 bg-primary/10 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{t("phone.task1")}</div>
                      <div className="flex items-center gap-1.5 text-xs text-primary">
                        <Clock className="h-3 w-3 shrink-0" />
                        <span>{t("phone.task1.status")}</span>
                      </div>
                    </div>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Task 2 - Done */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{t("phone.task2")}</div>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                        <Check className="h-3 w-3 shrink-0" />
                        <span>{t("phone.task2.status")}</span>
                      </div>
                    </div>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>
                
                {/* Task 3 - Email routing */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{t("phone.task4")}</div>
                      <div className="flex items-center gap-1.5 text-xs text-white/50">
                        <Mail className="h-3 w-3 shrink-0" />
                        <span>{t("phone.task4.status")}</span>
                      </div>
                    </div>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-3.5 w-3.5 text-white/50" />
                    </div>
                  </div>
                </div>
                
                {/* Recommendation card */}
                <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-primary/5 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent" />
                        <span className="text-sm font-medium truncate">{t("phone.task3")}</span>
                      </div>
                      <div className="text-xs text-white/60 truncate">
                        {t("phone.task3.desc")}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-white/30" />
                  </div>
                </div>
              </div>
              
              {/* Spacer */}
              <div className="flex-1" />
              
              {/* CTA Button */}
              <button 
                onClick={() => setShowForm(true)}
                className="w-full rounded-2xl bg-gradient-to-r from-primary to-accent py-3.5 font-medium text-white shadow-lg transition-transform active:scale-[0.98]"
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
                    className="rounded-2xl bg-white/10 px-6 py-2.5 text-sm font-medium transition-colors hover:bg-white/20"
                  >
                    {t("form.success.close")}
                  </button>
                </div>
              ) : (
                /* Form state */
                <>
                  {/* Header with back button */}
                  <div className="flex items-center gap-3 px-4 pt-6">
                    <button 
                      onClick={handleBack}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <h3 className="text-base font-semibold">{t("form.title")}</h3>
                  </div>
                  
                  {/* Scrollable form */}
                  <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-y-auto px-4 pb-4 pt-4">
                    <div className="space-y-3">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-email" className="text-xs font-medium text-white/70">{t("form.email")} *</label>
                        <input
                          id="phone-email"
                          name="email"
                          type="email"
                          required
                          placeholder={t("form.email.placeholder")}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                      </div>
                      
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-tel" className="text-xs font-medium text-white/70">{t("form.phone")}</label>
                        <input
                          id="phone-tel"
                          name="phone"
                          type="tel"
                          placeholder={t("form.phone.placeholder")}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                      </div>
                      
                      {/* Description */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-desc" className="text-xs font-medium text-white/70">{t("form.description")} *</label>
                        <textarea
                          id="phone-desc"
                          name="description"
                          required
                          rows={3}
                          placeholder={t("form.description.placeholder")}
                          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                        />
                      </div>
                      
                      {/* Preferred time */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone-time" className="text-xs font-medium text-white/70">{t("form.time")}</label>
                        <input
                          id="phone-time"
                          name="preferredTime"
                          type="text"
                          placeholder={t("form.time.placeholder")}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
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
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent py-3 font-medium text-white shadow-lg transition-transform disabled:opacity-70 active:scale-[0.98]"
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
          <div className="flex justify-center pb-2">
            <div className="h-1 w-32 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  )
})
