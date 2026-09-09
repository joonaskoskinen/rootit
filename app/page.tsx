import { ArrowRight, Check, ChevronDown, CircleCheck, Clock3, FileText, Gauge, Handshake, LayoutList, MessageCircle, Smartphone, Sparkles, Wrench } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RequestReviewButton } from "@/components/request-review-button"

const problems = [
  "Ei ole heti selvää, mitä yritys tekee",
  "Tärkein toimintakehotus jää piiloon",
  "Mobiilissa sivu toimii heikommin kuin pitäisi",
  "Teksti on liian ympäripyöreää",
  "Luottamusta rakentavat elementit puuttuvat",
  "Yhteydenotto vaatii liikaa vaivaa",
]

const benefits = [
  ["Enemmän yhteydenottoja samalla liikenteellä", "Kun seuraava askel on helppo löytää, useampi kävijä ottaa sen."],
  ["Selkeämpi ensivaikutelma", "Kävijä ymmärtää nopeasti, oletko oikea yritys auttamaan."],
  ["Helpompi päätös asiakkaalle", "Hyvä rakenne vastaa tärkeimpiin kysymyksiin ennen yhteydenottoa."],
  ["Vähemmän kitkaa yhteydenotossa", "Lomake, puhelinnumero tai varaus löytyy silloin kun sitä tarvitaan."],
]

const mainFeatures = [
  "Etusivun viestin selkeytys",
  "CTA-rakenteen parannus",
  "Mobiilikäytön tärkeimmät korjaukset",
  "Luottamusta tukevat osiot",
  "Sujuvampi tie yhteydenottoon tai varaukseen",
  "Nopea toteutus ilman raskasta uudistusprojektia",
]

const faqs = [
  ["Mitä ilmainen sivustoarvio sisältää?", "Käymme sivusi läpi asiakkaan näkökulmasta ja nostamme esiin tärkeimmät selkeyteen, mobiilikäyttöön ja yhteydenottoon liittyvät korjaukset. Saat konkreettiset huomiot, et ympäripyöreää raporttia."],
  ["Mitä Viikon sivukorjaus tarkoittaa?", "Se on rajattu korjaus nykyiseen sivustoosi. Keskitymme niihin kohtiin, joilla on suurin vaikutus siihen, ymmärtääkö kävijä palvelusi ja löytääkö hän yhteydenoton."],
  ["Kuinka nopeasti työ valmistuu?", "Sovimme aloituksesta ja tärkeimmistä korjauksista yhdessä. Useimmat työt etenevät yhden viikon aikana, kun tarvittavat sisällöt ja pääsyt ovat saatavilla."],
  ["Voiko vanhan sivun uudistaa ilman uutta sivustoa?", "Voi. Rootit kehittää olemassa olevaa sivua. Uutta sivustoa ei tarvitse rakentaa vain siksi, että nykyinen viesti tai rakenne kaipaa korjausta."],
  ["Mitä jos haluan vain pienen korjauksen?", "Se sopii hyvin. Voimme aloittaa yksittäisestä otsikosta, CTA:sta, lomakkeesta tai mobiilin ongelmakohdasta ja laajentaa myöhemmin, jos tarvetta on."],
  ["Autatteko sisällön kanssa?", "Kyllä. Selkeytämme otsikoita, palvelukuvauksia ja toimintakehotuksia yhdessä kanssasi. Sinun ei tarvitse osata kirjoittaa verkkosivutekstiä valmiiksi."],
  ["Miten yhteydenotto toimii?", "Lähetä sivustoarviopyyntö. Palaamme asiaan, kysymme muutaman taustakysymyksen ja sovimme seuraavan askeleen ilman painostavaa myyntipuhetta."],
]

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">{title}</h2>{children && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{children}</p>}</div>
}

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="hero-shell">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:px-8 lg:py-32">
            <div>
              <p className="eyebrow">Verkkosivujen parannus pienyrityksille</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-7xl lg:text-[5.75rem]">Selkeämpi sivu.<br /><span>Enemmän yhteydenottoja.</span></h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">Rootit korjaa pienyritysten verkkosivuja niin, että asiakas ymmärtää nopeasti mitä tarjoat, luottaa sinuun ja tietää, mitä tehdä seuraavaksi.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><RequestReviewButton /><a href="#palvelut" className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">Katso palvelut <ArrowRight className="size-4" /></a></div>
              <p className="mt-4 text-sm text-muted-foreground">Ilmainen eikä sido mihinkään.</p>
            </div>
            <div className="hero-note"><div className="mb-6 flex items-center justify-between border-b border-border pb-4"><span className="font-mono text-xs uppercase tracking-[.16em] text-muted-foreground">Sivustoarvio / 01</span><span className="text-primary">●</span></div><p className="text-2xl font-medium leading-snug text-foreground">Hyvä sivu ei tarvitse enemmän sisältöä. Se tarvitsee oikean sisällön oikeassa järjestyksessä.</p><div className="mt-8 grid gap-3 border-t border-border pt-5 text-sm text-muted-foreground">{["Selkeä viesti heti etusivulla", "Parempi mobiilikokemus", "Helpompi tie yhteydenottoon"].map((item) => <div key={item} className="flex gap-3"><Check className="size-4 shrink-0 text-primary" />{item}</div>)}</div></div>
          </div>
        </section>

        <section className="section-block border-y border-border bg-secondary/30"><div className="mx-auto max-w-6xl px-5 py-20 lg:px-8"><SectionIntro eyebrow="01 / Lähtötilanne" title="Mikä pienyritysten sivuilla yleensä on pielessä" /><div className="mt-12 grid gap-x-8 gap-y-0 md:grid-cols-2 lg:grid-cols-3">{problems.map((problem, index) => <div key={problem} className="flex gap-4 border-t border-border py-5"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="text-base leading-relaxed text-foreground">{problem}</p></div>)}</div></div></section>

        <section className="section-block"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionIntro eyebrow="02 / Vaikutus" title="Mitä korjauksista käytännössä seuraa" /><div className="mt-12 grid gap-8 md:grid-cols-2">{benefits.map(([title, text], index) => <article key={title} className={`border-t border-border pt-5 ${index === 1 ? "md:mt-12" : ""}`}><span className="font-mono text-sm text-primary">0{index + 1}</span><h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3><p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>

        <section id="palvelut" className="section-block border-y border-border bg-secondary/30"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionIntro eyebrow="03 / Palvelut" title="Kolme tapaa parantaa sivusi" children="Aloita siitä kohdasta, joka tuntuu juuri nyt tärkeimmältä. Kaikki palvelut tehdään nykyisen sivusi pohjalta." /><div className="mt-12 grid gap-5 lg:grid-cols-3"><article className="service-card"><FileText className="size-6 text-primary" /><h3>Ilmainen sivustoarvio</h3><p>Ensimmäinen askel. Saat käytännön palautteen sivustasi ilman sitoumusta.</p><a href="#ota-yhteytta" className="card-link">Pyydä arvio <ArrowRight className="size-4" /></a></article><article className="service-card service-card-featured"><Wrench className="size-6 text-primary" /><h3>Viikon sivukorjaus</h3><p>Pääpalvelu, jossa korjaamme nykyisen sivun tärkeimmät yhteydenottoa hidastavat kohdat.</p><ul className="mt-6 flex flex-col gap-3 border-t border-border pt-5">{mainFeatures.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-primary" />{item}</li>)}</ul><a href="#paketit" className="card-link">Katso paketit <ArrowRight className="size-4" /></a></article><article className="service-card"><Gauge className="size-6 text-primary" /><h3>Jatkuva kehitys</h3><p>Pieniä, järkeviä parannuksia nykyiseen verkkosivuun myös ensimmäisen korjauksen jälkeen.</p><a href="#paketit" className="card-link">Tutustu vaihtoehtoihin <ArrowRight className="size-4" /></a></article></div></div></section>

        <section id="paketit" className="section-block"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionIntro eyebrow="04 / Hinnat" title="Paketit" children="Selkeä kuukausihinta. Ei raskasta uudistusprojektia eikä epämääräistä tuntityötä." /><div className="mt-12 grid items-start gap-5 lg:grid-cols-3"><PricingCard title="Peruspaketti" price="29 € + alv" suffix="/kk" description="Yksinkertaisiin sisältöpäivityksiin ja kevyisiin parannuksiin." items={["Olemassa olevan sivun sisällön selkeytys", "Otsikko, alaotsikko ja CTA", "Mobiilin peruskorjaukset", "Yhteydenottolomakkeen tarkistus", "Kevyet sisältöpäivitykset kerran kuussa"]} /><PricingCard featured title="Suosituin" price="59 €" suffix="/kk" description="Suositeltu vaihtoehto useimmille asiakkaille." items={["Kaikki Peruspaketin sisältö", "Etusivun ja palveluosioiden sisällön uudistus", "Selkeä palvelupolku ja CTA-rakenne", "2–3 sisältöosiota uusiksi", "Luottamusta lisäävät osiot, kuten FAQ tai referenssit", "Hakukoneystävälliset perusmuokkaukset", "Kuukausittainen kevyt optimointi"]} /><PricingCard title="Kasvupaketti" price="99 €" suffix="/kk" description="Kun haluat jatkuvaa kehitystä ja nopeampaa tukea." items={["Kaikki Suosituin-paketin sisältö", "Useamman sivun sisällön päivitys kuukaudessa", "Uusien palvelu- tai kampanjaosioiden rakentaminen nykyiselle sivulle", "Enemmän copywritingia ja myyntitekstin hiomista", "SEO-perusoptimoinnin laajennus", "Prioriteettituki ja nopeampi reagointi"]} /></div><div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground"><p>Kaikki paketit perustuvat olemassa olevan sivuston kehittämiseen, ei uuden sivuston rakentamiseen.</p><p>Voit aloittaa pienemmästä paketista ja päivittää myöhemmin isompaan.</p></div></div></section>

        <section className="section-block border-y border-border bg-secondary/30"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionIntro eyebrow="05 / Lopputulos" title="Sama yritys, selkeämpi sivu" /><div className="mt-12 grid gap-5 lg:grid-cols-2"><Comparison title="Ennen" tone="muted" items={["Epäselvä otsikko", "Hajallaan oleva rakenne", "Heikko luottamus", "Piilossa oleva CTA", "Liikaa kitkaa yhteydenotossa"]} /><Comparison title="Jälkeen" tone="accent" items={["Selkeä viesti heti ruudun yläosassa", "Looginen, helposti seurattava rakenne", "Enemmän luottamusta rakentavia elementtejä", "Näkyvä ja selkeä seuraava askel", "Sivu tukee myyntiä eikä vain ole olemassa"]} /></div></div></section>

        <section id="prosessi" className="section-block"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionIntro eyebrow="06 / Prosessi" title="Näin homma etenee" children="Tiedät koko ajan, mitä tapahtuu seuraavaksi. Aloittaminen ei vaadi pitkää määrittelyprojektia." /><div className="mt-12 grid gap-0 border-l border-border md:grid-cols-5">{["Pyydä ilmainen sivustoarvio", "Saat selkeät huomiot", "Sovitaan Viikon sivukorjauksesta", "Korjaamme tärkeimmät sivut", "Julkaistaan selkeämpi sivu"].map((step, index) => <div key={step} className="relative border-b border-border py-5 pl-7 md:border-b-0 md:border-t md:pl-5 md:pt-6"><span className="absolute -left-[9px] top-5 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground md:-top-[9px]">{index + 1}</span><p className="text-sm font-medium leading-relaxed">{step}</p></div>)}</div></div></section>

        <section className="section-block border-y border-border bg-secondary/30"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><SectionIntro eyebrow="07 / Miksi Rootit" title="Miksi valita Rootit" children="Et tarvitse uutta sivustoa vain siksi, että nykyinen ei vielä tee työtään kunnolla." /><div className="grid gap-7 sm:grid-cols-2">{[["Nopeat, mitattavat parannukset", Clock3], ["Selkeä viestintä koko matkan ajan", MessageCircle], ["Ei riskiä, ei sitoutumista etukäteen", Handshake], ["Räätälöity juuri nykyiselle sivustolle", LayoutList]].map(([text, Icon]) => <div key={text as string} className="border-t border-border pt-4"><Icon className="size-5 text-primary" /><p className="mt-4 font-medium">{text as string}</p></div>)}</div></div></section>

        <section id="esimerkit" className="section-block"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionIntro eyebrow="08 / Asiakastyöt" title="Asiakastyöt ja esimerkit" children="Tähän kokoamme myöhemmin oikeita ennen–jälkeen-esimerkkejä ja asiakkaiden kokemuksia." /><div className="mt-12 grid gap-5 md:grid-cols-3"><div className="example-card md:col-span-2"><span className="font-mono text-xs uppercase tracking-[.16em] text-primary">Esimerkki tulossa</span><p className="mt-16 max-w-md text-2xl font-medium">Näytämme mielellämme, mitä sivun selkeyttäminen tarkoittaa käytännössä.</p></div><div className="example-card flex flex-col justify-between"><Sparkles className="size-6 text-primary" /><p className="text-sm leading-relaxed text-muted-foreground">Ei keksittyjä sitaatteja. Lisäämme tähän oikeat asiakastyöt, kun ensimmäiset projektit ovat julkaistavissa.</p></div></div></div></section>

        <section id="ukk" className="section-block border-y border-border bg-secondary/30"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[.7fr_1.3fr] lg:px-8"><SectionIntro eyebrow="09 / UKK" title="Usein kysyttyä" /><div className="flex flex-col">{faqs.map(([question, answer]) => <details key={question} className="group border-t border-border py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none"><span>{question}</span><ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></section>

        <section id="ota-yhteytta" className="section-block"><div className="mx-auto max-w-3xl px-5 text-center lg:px-8"><p className="eyebrow">10 / Aloitetaan tästä</p><h2 className="section-title mx-auto">Katsotaan yhdessä, mikä sivullasi kannattaa korjata ensin.</h2><p className="section-copy mx-auto">Pyydä ilmainen sivustoarvio. Saat konkreettiset huomiot ilman sitoumusta tai painostavaa myyntipuhetta.</p><div className="mt-8"><RequestReviewButton /></div></div></section>
      </main>
      <Footer />
    </div>
  )
}

function PricingCard({ title, price, suffix, description, items, featured = false }: { title: string; price: string; suffix: string; description: string; items: string[]; featured?: boolean }) { return <article className={`pricing-card ${featured ? "pricing-card-featured" : ""}`}>{featured && <div className="pricing-badge">Suosituin</div>}<p className="text-sm font-semibold text-primary">{title}</p><div className="mt-5 flex items-baseline gap-1"><span className="text-4xl font-semibold tracking-tight">{price}</span><span className="text-sm text-muted-foreground">{suffix}</span></div><p className="mt-4 min-h-12 text-sm leading-relaxed text-muted-foreground">{description}</p><ul className="mt-7 flex flex-col gap-3 border-t border-border pt-6">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed"><CircleCheck className="size-4 shrink-0 text-primary" />{item}</li>)}</ul><div className="mt-8"><RequestReviewButton label="Kysy paketista" variant={featured ? "primary" : "outline"} withArrow={false} className="w-full" /></div></article> }

function Comparison({ title, items, tone }: { title: string; items: string[]; tone: "muted" | "accent" }) { return <div className={`comparison comparison-${tone}`}><div className="flex items-center justify-between border-b border-border pb-4"><h3 className="text-lg font-semibold">{title}</h3><span className="font-mono text-xs text-muted-foreground">{tone === "accent" ? "TAVOITE" : "LÄHTÖTILANNE"}</span></div><ul className="mt-6 flex flex-col gap-4">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul></div> }

// Pricing card and comparison intentionally stay local: they share the page's editorial rhythm without creating another page-level abstraction.
