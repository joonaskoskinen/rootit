import type { Metadata } from "next"
import { Suspense } from "react"
import { AccessibilityDemo } from "@/components/accessibility-demo"

export const metadata: Metadata = {
  title: "Try Rune Access - Accessibility Scanner Demo",
  description: "Scan your website for accessibility issues. Get prioritized fixes and generate an accessibility statement in minutes.",
}

export default function DemoPage() {
  return (
    <div className="relative min-h-screen bg-gradient-radial">
      {/* Noise texture overlay */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" /></div>}>
        <AccessibilityDemo />
      </Suspense>
    </div>
  )
}
