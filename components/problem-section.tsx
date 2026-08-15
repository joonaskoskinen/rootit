"use client"

import { useLanguage } from "@/lib/language-context"

export function ProblemSection() {
  const { t } = useLanguage()

  const problems = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
    title: t(`problem.item${i}`),
    desc: t(`problem.item${i}.desc`),
  }))

  return (
    <section id="problem" className="border-t border-border bg-secondary/50" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 id="problem-heading" className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t("problem.title")}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{t("problem.desc")}</p>
        </div>

        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {problems.map((problem) => (
            <li key={problem.title} className="flex gap-4 border-b border-border py-5">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <div>
                <h3 className="font-medium leading-snug">{problem.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{problem.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
