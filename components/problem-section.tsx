"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { 
  FormInput, 
  Globe, 
  Mail, 
  Monitor, 
  Clock, 
  KeyRound, 
  Layout, 
  Headphones 
} from "lucide-react"

export function ProblemSection() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1 })
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const problems = [
    {
      icon: FormInput,
      title: t("problem.item1"),
      description: t("problem.item1.desc"),
    },
    {
      icon: Globe,
      title: t("problem.item2"),
      description: t("problem.item2.desc"),
    },
    {
      icon: Mail,
      title: t("problem.item3"),
      description: t("problem.item3.desc"),
    },
    {
      icon: Monitor,
      title: t("problem.item4"),
      description: t("problem.item4.desc"),
    },
    {
      icon: Clock,
      title: t("problem.item5"),
      description: t("problem.item5.desc"),
    },
    {
      icon: KeyRound,
      title: t("problem.item6"),
      description: t("problem.item6.desc"),
    },
    {
      icon: Layout,
      title: t("problem.item7"),
      description: t("problem.item7.desc"),
    },
    {
      icon: Headphones,
      title: t("problem.item8"),
      description: t("problem.item8.desc"),
    },
  ]

  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div
          ref={headerRef}
          className={cn(
            "mb-12 text-center transition-all duration-700",
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            {t("problem.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("problem.desc")}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.title}
                className={cn(
                  "group rounded-2xl border border-border bg-gradient-to-b from-card/90 to-card/60 p-5 shadow-lg transition-all duration-500 hover:border-destructive/20 hover:shadow-destructive/5",
                  cardsInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-destructive/10 to-destructive/5">
                  <Icon className="h-5 w-5 text-destructive/70" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold tracking-tight leading-tight">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
