import { RequestReviewButton } from "@/components/request-review-button"

export function FinalCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Katsotaan, mitä sivullasi kannattaa parantaa
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Saat konkreettiset huomiot sivustasi ja tiedät, mitä kannattaa tehdä seuraavaksi. Arvio on ilmainen eikä sido mihinkään.
          </p>
          <div className="mt-9 flex justify-center">
            <RequestReviewButton className="px-8 py-3.5 text-base" />
          </div>
        </div>
      </div>
    </section>
  )
}
