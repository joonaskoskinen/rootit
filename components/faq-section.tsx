import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"

const FAQS = [
  {
    q: "Mitä verkkosivut + ylläpito maksaa?",
    a: "Verkkosivut + ylläpito maksaa 29 € + alv / kk. Lisäksi tulee kertaluonteinen aloitusmaksu alkaen 190 € + alv. Hosting sisältyy hintaan, domain on erikseen (noin 10–20 € / vuosi). Yksittäiset korjaukset alkavat 90 € + alv.",
  },
  {
    q: "Voiko kuukausipalvelun lopettaa?",
    a: "Kyllä. Irtisanomisaika on 1 kuukausi, ei sidottua sopimuskautta. Irtisanominen onnistuu sähköpostilla. Sivusto ja sisältö kuuluvat sinulle, ja luovutan ne pyydettäessä.",
  },
  {
    q: "Tarvitsenko kokonaan uudet sivut?",
    a: "Yleensä et. Useimmiten suurin hyöty tulee siitä, että nykyisen sivun viesti selkeytetään, tärkein toimintakehotus nostetaan esiin ja yhteydenotto tehdään helpommaksi. Kokonaan uudet sivut ovat vasta viimeinen vaihtoehto.",
  },
  {
    q: "Voitteko työskennellä nykyisten sivujeni päälle?",
    a: "Kyllä. Teemme korjaukset mielellämme olemassa olevalle sivulle, jos alusta sen sallii. Katson tilanteen arvion yhteydessä ja kerron suoraan, mikä on järkevin tapa edetä.",
  },
  {
    q: "Kenelle tämä palvelu sopii?",
    a: "Kaikille, jotka tarvitsevat uudet verkkosivut tai haluavat parantaa nykyisiä sivujaan. Autan selkeyttämään sisältöä, uudistamaan ilmettä ja tekemään sivustosta toimivamman niin yrityksille, yhdistyksille, asiantuntijoille kuin organisaatioillekin.",
  },
  {
    q: "Kauan verkkosivujen tekeminen tai korjaus kestää?",
    a: "Aikataulu riippuu työn laajuudesta. Sovimme siitä etukäteen, kun tiedämme mitä sivulla pitää tehdä.",
  },
  {
    q: "Kirjoitatteko myös tekstit?",
    a: "Kyllä. Autan selkeyttämään otsikot ja tärkeimmät tekstit niin, että asiakas ymmärtää nopeasti mitä tarjoat. Sinä tunnet alasi — minä autan sanomaan sen selkeästi ja toimintaan ohjaavasti.",
  },

  {
    q: "Voinko tilata vain yksittäisen korjauksen?",
    a: "Kyllä. Voit tilata yksittäisen muutoksen tai korjauksen ilman kuukausimaksua. Sovitaan työstä ja hinnasta etukäteen.",
  },
  {
    q: "Voinko pyytää ensin vain arvion?",
    a: "Ehdottomasti. Saat konkreettiset huomiot ja päätät sen jälkeen itse, haluatko edetä korjaukseen.",
  },
  {
    q: "Toimiiko tämä, jos suurin osa liikenteestä tulee mobiilista?",
    a: "Kyllä. Käyn läpi erityisesti tekstien koon, painikkeet, rakenteen ja tärkeimmät toiminnot puhelimen näkökulmasta.",
  },
]

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
}

export function FaqSection() {
  return (
    <section id="ukk" className="bg-secondary/50 scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              title="Usein kysyttyä"
              description="Rehellisiä vastauksia yleisimpiin kysymyksiin. Jos jokin jää mietityttämään, kysy arvion yhteydessä."
            />
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Etkö löytänyt vastausta?</h3>
              <p className="mt-2 text-sm text-muted-foreground">Kysy suoraan sähköpostilla.</p>
              <a className="mt-3 block text-sm text-primary underline underline-offset-4" href="mailto:rootit.info@gmail.com">rootit.info@gmail.com</a>
            </div>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {FAQS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
