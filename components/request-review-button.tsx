"use client"

import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function openReviewForm() {
  const mockup = document.getElementById("consultation-mockup")
  if (mockup) {
    mockup.scrollIntoView({ behavior: "smooth", block: "center" })
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("openConsultationForm"))
    }, 500)
  } else {
    window.dispatchEvent(new CustomEvent("openConsultationForm"))
  }
}

type Props = {
  label?: string
  variant?: "primary" | "outline"
  className?: string
  withArrow?: boolean
}

export function RequestReviewButton({
  label = "Pyydä ilmainen sivustoarvio",
  variant = "primary",
  className,
  withArrow = true,
}: Props) {
  return (
    <button
      type="button"
      onClick={openReviewForm}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-[#0a514c]"
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
