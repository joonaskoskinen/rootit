"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function openReviewForm(problem?: string) {
  const mockup = document.getElementById("consultation-mockup")
  const detail = problem ? { problem } : undefined
  const openForm = () => window.dispatchEvent(new CustomEvent("openConsultationForm", { detail }))

  if (mockup) {
    mockup.scrollIntoView({ behavior: "smooth", block: "center" })
    setTimeout(openForm, 500)
  } else {
    openForm()
  }
}

type Props = {
  label?: string
  variant?: "primary" | "outline"
  className?: string
  withArrow?: boolean
}

export function RequestReviewButton({
  label = "Pyydä IT-apua",
  variant = "primary",
  className,
  withArrow = true,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => openReviewForm()}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "bg-accent text-accent-foreground hover:bg-accent/90"
          : "border border-border bg-transparent text-foreground hover:bg-secondary",
        className,
      )}
    >
      {label}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </button>
  )
}
