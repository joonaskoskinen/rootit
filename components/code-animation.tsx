"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"
import { CheckCircle2, Circle, Terminal } from "lucide-react"

export function CodeAnimation() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(0)
  const [codeLines, setCodeLines] = useState<number[]>([])

  const steps = [
    { key: "code.step1", status: "done" },
    { key: "code.step2", status: "done" },
    { key: "code.step3", status: "done" },
    { key: "code.step4", status: "done" },
  ]

  const codeSnippets = [
    '$ rune diagnose --site example.fi',
    '',
    '  Checking DNS records...',
    '  Checking SSL certificate...',
    '  Checking form endpoints...',
    '',
    '  [!] Issue found: contact form',
    '      POST /api/contact → 500 error',
    '',
    '$ rune fix contact-form',
    '',
    '  Updating email handler...',
    '  Verifying SMTP connection...',
    '  Testing form submission...',
    '',
    '  [✓] Form fixed successfully',
    '  [✓] Test email delivered',
  ]

  useEffect(() => {
    // Animate code lines appearing
    if (codeLines.length < codeSnippets.length) {
      const timer = setTimeout(() => {
        setCodeLines(prev => [...prev, prev.length])
      }, 200)
      return () => clearTimeout(timer)
    } else {
      // Reset after showing all
      const resetTimer = setTimeout(() => {
        setCodeLines([])
        setCurrentStep(0)
      }, 3000)
      return () => clearTimeout(resetTimer)
    }
  }, [codeLines.length, codeSnippets.length])

  // Update current step based on code progress
  useEffect(() => {
    if (codeLines.length >= 6) setCurrentStep(1)
    if (codeLines.length >= 9) setCurrentStep(2)
    if (codeLines.length >= 14) setCurrentStep(3)
    if (codeLines.length >= 17) setCurrentStep(4)
  }, [codeLines.length])

  return (
    <div className="w-full max-w-md">
      {/* Terminal window */}
      <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/80 shadow-2xl backdrop-blur-sm">
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex flex-1 items-center justify-center gap-2 text-xs text-muted-foreground">
            <Terminal className="h-3 w-3" />
            <span>rune-cli</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="h-64 overflow-hidden bg-zinc-950/90 p-4 font-mono text-xs">
          <div className="space-y-0.5">
            {codeSnippets.map((line, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-200",
                  codeLines.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                )}
              >
                <span
                  className={cn(
                    line.startsWith('$') && "text-green-400",
                    line.includes('[!]') && "text-yellow-400",
                    line.includes('[✓]') && "text-green-400",
                    line.includes('Checking') && "text-zinc-400",
                    line.includes('Updating') && "text-blue-400",
                    line.includes('Verifying') && "text-blue-400",
                    line.includes('Testing') && "text-blue-400",
                    line.includes('→') && "text-red-400",
                    !line.startsWith('$') && !line.includes('[') && !line.includes('Checking') && !line.includes('Updating') && !line.includes('Verifying') && !line.includes('Testing') && !line.includes('→') && "text-zinc-500"
                  )}
                >
                  {line || '\u00A0'}
                </span>
              </div>
            ))}
            {/* Blinking cursor */}
            {codeLines.length < codeSnippets.length && (
              <span className="inline-block h-4 w-2 animate-pulse bg-green-400" />
            )}
          </div>
        </div>

        {/* Progress steps */}
        <div className="border-t border-border/50 bg-muted/20 px-4 py-3">
          <div className="flex items-center gap-3 overflow-x-auto">
            {steps.map((step, index) => (
              <div
                key={step.key}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 text-xs transition-all duration-300",
                  currentStep > index
                    ? "text-green-500"
                    : currentStep === index
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {currentStep > index ? (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                ) : (
                  <Circle className={cn("h-3.5 w-3.5", currentStep === index && "animate-pulse")} />
                )}
                <span className="whitespace-nowrap">{t(step.key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
