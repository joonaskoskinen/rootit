"use client"

import { useLanguage } from "@/lib/language-context"
import { LiveChatPreview } from "./live-chat-preview"
import { CodeAnimation } from "./code-animation"

export function DemoShowcase() {
  const { t } = useLanguage()

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t("demoSection.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            {t("demoSection.subtitle")}
          </p>
        </div>

        {/* Demo cards */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Chat preview card */}
          <div className="flex flex-col items-center">
            <LiveChatPreview />
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-foreground">
                {t("demoSection.chat.title")}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                {t("demoSection.chat.desc")}
              </p>
            </div>
          </div>

          {/* Code animation card */}
          <div className="flex flex-col items-center">
            <CodeAnimation />
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-foreground">
                {t("demoSection.code.title")}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                {t("demoSection.code.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
