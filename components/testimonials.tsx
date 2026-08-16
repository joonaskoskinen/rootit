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
    <section id="esimerkit" className="border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Prosessi"
          title="Näin työskentelen"
          description="En vielä julkaise asiakasreferenssejä — rakennan tätä osiota rehellisesti sitä mukaa kun yhteistyöt valmistuvat. Tässä on sen sijaan tarkka kuva siitä, miten työskentelen, jotta tiedät mitä odottaa."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              step: "1",
              title: "Ilmainen arvio ensin",
              desc: "Näet konkreettisesti mitä korjataan, ennen kuin maksat mitään tai sitoudut mihinkään.",
            },
            {
              step: "2",
              title: "Selkeä hinta etukäteen",
              desc: "Tiedät kokonaishinnan ennen työn aloitusta. Ei yllätyksiä laskussa.",
            },
            {
              step: "3",
              title: "Suora yhteys minuun",
              desc: "Ei tikettijärjestelmiä tai välikäsiä — puhut koko ajan suoraan tekijän kanssa.",
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
            Haluatko olla yksi ensimmäisistä julkaistavista asiakastöistä?{" "}
            <span className="font-medium text-foreground">Aloita ilmaisesta sivustoarviosta.</span>
          </p>
          <RequestReviewButton variant="outline" withArrow={false} className="shrink-0" />
        </div>
      </div>
    </section>
  )
}
