import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"

const FAQS = [
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
    a: "Pienille, usein paikallisille palveluyrityksille: kampaamoille, kauneushoitoloille, hierojille, hammaslääkäreille, asianajotoimistoille, putki-, sähkö- ja remonttifirmoille sekä muille vastaaville. Jos sivusi pitäisi tuoda enemmän yhteydenottoja, tämä on sinua varten.",
  },
  {
    q: "Kauan Viikon sivukorjaus kestää?",
    a: "Nimensä mukaisesti se on nopea ja rajattu. Kun sisältö ja suunta on sovittu, tärkeimmät korjaukset tehdään tyypillisesti viikon sisällä. Aikatauluun vaikuttaa lähinnä se, kuinka nopeasti saan tarvittavat tiedot ja materiaalit.",
  },
  {
    q: "Kirjoitatteko myös tekstit?",
    a: "Kyllä. Autan selkeyttämään otsikot ja tärkeimmät tekstit niin, että asiakas ymmärtää nopeasti mitä tarjoat. Sinä tunnet alasi — minä autan sanomaan sen selkeästi ja toimintaan ohjaavasti.",
  },
  {
    q: "Voinko pyytää ensin vain arvion?",
    a: "Ehdottomasti, ja se on suositeltu tapa aloittaa. Ilmainen sivustoarvio ei sido mihinkään. Saat konkreettiset huomiot, ja päätät sen jälkeen itse, haluatko edetä korjaukseen.",
  },
  {
    q: "Toimiiko tämä, jos suurin osa liikenteestä tulee mobiilista?",
    a: "Silloin tästä on erityisen paljon hyötyä. Mobiilikäyttö ja selkeä CTA ovat parannusten ytimessä, koska juuri puhelimella pienetkin esteet karsivat yhteydenottoja.",
  },
  {
    q: "Voiko yhteistyötä jatkaa myöhemmin?",
    a: "Kyllä, mutta se on täysin vapaaehtoista. Korjauksen jälkeen voit jatkaa pienillä, jatkuvilla parannuksilla, tai jättää sivun sellaisekseen. Et sitoudu mihinkään jatkuvaan.",
  },
]

export function FaqSection() {
  return (
    <section id="ukk" className="bg-secondary/50 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="UKK"
            title="Usein kysyttyä"
            description="Rehellisiä vastauksia yleisimpiin kysymyksiin. Jos jokin jää mietityttämään, kysy arvion yhteydessä."
          />

          <Accordion type="single" collapsible className="w-full">
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
