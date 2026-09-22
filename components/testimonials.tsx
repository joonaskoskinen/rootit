import { SectionHeading } from "@/components/section-heading"
import { RequestReviewButton } from "@/components/request-review-button"

// Kun ensimmäiset oikeat asiakastyöt valmistuvat, korvaa tämä array
// oikeilla referensseillä: { field, desc, result } — ei placeholder-tekstiä.
//
// Esim:
// { field: "Kampaamo X, Helsinki", desc: "Uudistettu ajanvarauspolku",
//   result: "Yhteydenotot kasvoivat 40% kahdessa kuukaudessa" }

export function Testimonials() {
  return (
    <section id="muutokset" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Työskentelytapa"
          title="Näin työskentelen"
          description="RootIT on pieni ja henkilökohtainen palvelu. Siksi pidän yhteistyön tarkoituksella suoraviivaisena."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Ilmainen arvio ensin",
              desc: "Näet ensin, mitä sivullasi kannattaa parantaa.",
            },
            {
              step: "2",
              title: "Selkeä hinta etukäteen",
              desc: "Sovitaan työn sisältö ja kokonaishinta ennen aloittamista.",
            },
            {
              step: "3",
              title: "Suora yhteys minuun",
              desc: "Puhut suoraan tekijän kanssa koko projektin ajan.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex flex-col rounded-xl border border-border bg-card/60 p-7"
            >
              <span className="font-mono text-xs text-primary">{item.step}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border border-dashed border-border bg-card/40 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Rakennan parhaillaan ensimmäisiä asiakasreferenssejä. En halua täyttää sivua keksityillä case-esimerkeillä, joten julkaisen oikeat työt sitä mukaa kun niitä valmistuu.
          </p>
          <RequestReviewButton variant="outline" withArrow={false} className="shrink-0" />
        </div>
      </div>
    </section>
  )
}
