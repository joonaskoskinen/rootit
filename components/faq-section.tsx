import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"

const FAQS = [
  ["Tarjoatko vain etä-IT-tukea?", "Pääpalveluni on etä-IT-tuki, mutta teen myös selkeitä verkkosivuja ja hoidan niiden ylläpitoa pienyrityksille."],
  ["Voinko tilata vain verkkosivut?", "Kyllä. Voit tilata vain sivuston tai ylläpidon ilman etä-IT-tukea."],
  ["Voinko tilata vain IT-tuen?", "Kyllä. Voit käyttää vain yksittäistä etäkorjausta tai kuukausittaista IT-tukea."],
  ["Miten tiedän, kumpi palvelu sopii minulle?", "Jos ongelma on tietokoneessa, puhelimessa, verkossa, sähköpostissa tai Microsoft 365:ssä, kyse on todennäköisesti etä-IT-tuesta. Jos haluat parantaa yrityksesi verkkosivuja, kyse on verkkosivupalvelusta."],
] as const

export function FaqSection() { return <section id="ukk" className="scroll-mt-20 border-t border-border bg-secondary/50"><div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8"><SectionHeading title="Usein kysyttyä" description="Vastauksia palveluiden valintaan ja tilaamiseen." /><Accordion type="single" collapsible defaultValue="item-0" className="w-full">{FAQS.map(([q, a], i) => <AccordionItem key={q} value={`item-${i}`}><AccordionTrigger className="text-left text-base font-medium hover:no-underline">{q}</AccordionTrigger><AccordionContent className="text-sm leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section> }
