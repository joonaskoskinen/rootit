import { ArrowRight, Check, Minus, Plus, ShieldCheck, Sparkles } from "lucide-react"
import { ConsultationForm } from "@/components/consultation-form"

const plans = [
  {
    name: "Startti",
    price: "29 €",
    description: "Sopii pienelle yritykselle, joka tarvitsee selkeät perussivut.",
    cta: "Aloita 29 €/kk",
    features: ["1–3 sivua", "Responsiivinen ja mobiiliystävällinen design", "Yhteydenottolomake", "SSL", "Hosting", "Domainin tekninen käyttöönotto", "Perus-SEO", "Google Maps tarvittaessa", "Tekninen ylläpito", "Varmuuskopiot", "Pienet tekniset korjaukset", "Normaali sähköpostituki"],
  },
  {
    name: "Yritys",
    price: "59 €",
    description: "Yrityksille, jotka haluavat ammattimaiset ja paremmin näkyvät verkkosivut.",
    cta: "Valitse Yritys",
    featured: true,
    features: ["Kaikki Startti-paketista", "5–7 sivua", "Yksilöllisempi ulkoasu", "Google Analytics", "Google Search Console", "Laajempi perus-SEO", "Google Business Profile -tuki", "30 min sisältömuutoksia kuukaudessa", "Lomakkeiden ja yhteydenottojen optimointi", "Nopeampi asiakastuki"],
  },
  {
    name: "Pro",
    price: "99 €",
    description: "Yrityksille, jotka haluavat laajemmat verkkosivut ja jatkuvaa kehitystä.",
    cta: "Valitse Pro",
    features: ["Kaikki Yritys-paketista", "8–12 sivua", "Täysin yksilöllinen suunnittelu", "Laajempi SEO", "Blogi / uutiset", "Liidien keräys", "Edistyneemmät lomakkeet", "1 h sisältömuutoksia kuukaudessa", "Priorisoitu tuki", "Jatkuva kehitys ja optimointi"],
  },
]

const demos = ["Rakennusliike", "Parturi", "Autokorjaamo", "Ravintola", "Konsultti", "Hieronta"]
const faq = [
  ["Kuinka nopeasti nettisivut valmistuvat?", "Aikataulu riippuu sivuston laajuudesta, sisällöistä ja materiaalien saatavuudesta. Kerromme realistisen arvion tarjousvaiheessa."],
  ["Mitä 29 €/kk sisältää?", "Startti sisältää 1–3 sivua, responsiivisen toteutuksen, lomakkeen, SSL:n, hostingin, perus-SEO:n, teknisen ylläpidon, varmuuskopiot ja pienet tekniset korjaukset."],
  ["Tarvitsenko oman domainin?", "Et välttämättä. Voimme auttaa domainin teknisessä käyttöönotossa. Domainin rekisteröinti voi olla erillinen ulkopuolinen kustannus."],
  ["Voinko käyttää nykyistä domainiani?", "Kyllä. Nykyinen domain voidaan yleensä ohjata uuteen sivustoon. Tarkistamme tekniset yksityiskohdat ennen julkaisua."],
  ["Voinko pyytää muutoksia sivustoon myöhemmin?", "Kyllä. Yritys- ja Pro-paketteihin kuuluu kuukausittaista sisältömuutosaikaa. Muut muutokset sovitaan erikseen."],
  ["Onko hosting mukana?", "Kyllä, hosting kuuluu kaikkiin tässä esiteltyihin paketteihin."],
  ["Onko SSL mukana?", "Kyllä. SSL kuuluu Startti-, Yritys- ja Pro-paketteihin."],
  ["Voinko lopettaa palvelun?", "Palvelun lopettamisesta sovitaan sopimusehtojen mukaisesti. Kerromme ehdot selkeästi ennen aloittamista."],
  ["Mitä tapahtuu, jos lopetan palvelun?", "Sivuston hosting ja Rootitin tekninen ylläpito päättyvät sovitun mukaisesti. Käymme lopetukseen liittyvät käytännöt läpi etukäteen."],
  ["Kuuluuko sähköposti hintaan?", "Sähköposti ei automaattisesti kuulu kuukausihintaan. Tarvittaessa selvitämme sopivan sähköpostiratkaisun ja sen erilliset kustannukset."],
  ["Voinko saada verkkokaupan?", "Verkkokauppa ei kuulu näihin peruspaketteihin. Kerro tarpeestasi tarjouspyynnössä, niin arvioimme toteutuksen erikseen."],
  ["Voitteko auttaa Google-näkyvyyden kanssa?", "Kyllä. Perus-SEO kuuluu Startti-pakettiin ja laajemmat SEO-toimenpiteet Yritys- ja Pro-paketteihin. Tuloksia ei voi luvata etukäteen."],
]

function Cta({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <ConsultationForm><button type="button" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${secondary ? "border border-border bg-secondary/60 text-foreground hover:bg-secondary" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>{children}<ArrowRight className="size-4" /></button></ConsultationForm>
}

export function RootitHome() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"><Sparkles className="size-3.5" /> Nettisivut yrityksille</p>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Nettisivut yrityksellesi <span className="text-primary">alk. 29 € / kk</span></h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">Modernit, nopeat ja mobiiliystävälliset nettisivut ilman tuhansien eurojen aloitusmaksua. Me hoidamme toteutuksen, hostingin ja teknisen ylläpidon.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Cta>Pyydä tarjous</Cta><a href="#paketit" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-secondary/60 px-5 text-sm font-semibold text-foreground hover:bg-secondary">Katso paketit</a></div>
            <p className="mt-5 text-sm font-medium text-muted-foreground"><span className="text-foreground">Alk. 29 € + alv / kk</span> · alkaen-hinta Startti-paketille</p>
          </div>
          <div className="rounded-[2rem] border border-primary/20 bg-card p-5 shadow-2xl shadow-primary/5 sm:p-7"><div className="flex items-center justify-between border-b border-border pb-5"><div><p className="text-xs uppercase tracking-widest text-muted-foreground">Rootit / Yritys</p><p className="mt-2 text-xl font-semibold">Selkeä sivu, joka toimii.</p></div><ShieldCheck className="size-8 text-primary" /></div><div className="mt-6 rounded-2xl bg-secondary/70 p-5"><p className="text-sm text-muted-foreground">Kuukausihinta</p><p className="mt-1 text-4xl font-semibold">29–99 € <span className="text-base font-normal text-muted-foreground">+ alv / kk</span></p><div className="mt-6 flex flex-col gap-3">{["Toteutus ja hosting", "SSL ja tekninen ylläpito", "Selkeä kuukausihinta"].map((item) => <p key={item} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />{item}</p>)}</div></div></div>
        </div>
      </section>

      <section id="paketit" className="scroll-mt-20 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Paketit</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">Valitse yrityksellesi sopiva taso.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Kaikissa paketeissa kuukausihinta on näkyvissä. Aloitusmaksu, domain ja muut ulkopuoliset palvelut sovitaan erikseen, jos niitä tarvitaan.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative flex flex-col rounded-3xl border p-6 ${plan.featured ? "border-primary/50 bg-primary/10 shadow-xl shadow-primary/10 lg:-translate-y-3" : "border-border bg-card/60"}`}>{plan.featured && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">Suosituin</span>}<p className="text-sm font-semibold uppercase tracking-widest text-primary">{plan.name}</p><p className="mt-5 text-4xl font-semibold tracking-tight">{plan.price}<span className="text-base font-normal text-muted-foreground"> + alv / kk</span></p><p className="mt-4 min-h-14 text-sm leading-relaxed text-muted-foreground">{plan.description}</p><ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-border pt-6">{plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{feature}</li>)}</ul><Cta secondary={!plan.featured}>{plan.cta}</Cta></article>)}</div><p className="mt-7 text-center text-sm text-muted-foreground">Mahdollinen aloitusmaksu, domainin rekisteröinti ja ulkopuoliset palvelut eivät automaattisesti sisälly kuukausihintaan. Kerromme niistä ennen työn aloittamista.</p></div></section>

      <section id="miksi-rootit" className="border-y border-border bg-secondary/30 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Miksi Rootit?</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">Selkeämpi tapa hankkia nettisivut.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2"><div className="rounded-3xl border border-border bg-card/60 p-6"><h3 className="text-xl font-semibold">Perinteinen nettisivuprojekti</h3><ul className="mt-6 flex flex-col gap-4 text-muted-foreground">{["Tuhansien eurojen aloitusmaksu", "Asiakkaan pitää huolehtia ylläpidosta", "Päivitykset laskutetaan erikseen", "Tekniset asiat jäävät asiakkaan vastuulle"].map((x) => <li key={x} className="flex gap-3"><Minus className="size-4 shrink-0 text-muted-foreground" />{x}</li>)}</ul></div><div className="rounded-3xl border border-primary/30 bg-primary/10 p-6"><h3 className="text-xl font-semibold">Rootit</h3><ul className="mt-6 flex flex-col gap-4">{["Selkeä kuukausihinta", "Ei suurta aloitusinvestointia", "Hosting mukana", "Tekninen ylläpito mukana", "Sivut pidetään toimintakunnossa", "Apua saa tarvittaessa"].map((x) => <li key={x} className="flex gap-3"><Check className="size-4 shrink-0 text-primary" />{x}</li>)}</ul></div></div></div></section>

      <section id="prosessi" className="scroll-mt-20 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Näin se toimii</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">Kolme askelta toimiville sivuille.</h2></div><ol className="mt-12 grid gap-5 md:grid-cols-3">{[["01", "Kerrot meille yrityksestäsi", "Täytät lyhyen tarjouspyynnön."], ["02", "Me rakennamme sivut", "Suunnittelemme ja toteutamme yrityksellesi sopivan verkkosivuston."], ["03", "Sivut julkaistaan", "Sivusto julkaistaan ja Rootit huolehtii teknisestä ylläpidosta."]].map(([n, title, desc]) => <li key={n} className="rounded-3xl border border-border bg-card/50 p-6"><p className="font-mono text-sm text-primary">{n}</p><h3 className="mt-10 text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{desc}</p></li>)}</ol></div></section>

      <section id="esimerkit" className="border-y border-border bg-secondary/30 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Demoprojektit</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">Tältä eri alojen sivut voivat näyttää.</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Nämä ovat toimialademoja, eivät Rootitin asiakasreferenssejä. Oikea toteutus suunnitellaan yrityksesi tarpeisiin.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{demos.map((demo, i) => <div key={demo} className="group min-h-44 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-primary/40"><div className={`h-24 rounded-2xl ${i % 3 === 0 ? "bg-primary/20" : i % 3 === 1 ? "bg-secondary" : "bg-primary/10"}`} /><p className="mt-5 text-lg font-semibold">{demo}</p><p className="mt-1 text-sm text-muted-foreground">Demo · verkkosivuesimerkki</p></div>)}</div></div></section>

      <section id="ukk" className="scroll-mt-20 py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">UKK</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">Usein kysyttyä.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Jos kysymys jää avoimeksi, kerro tilanteestasi tarjouspyynnössä.</p></div><div className="flex flex-col">{faq.map(([question, answer]) => <details key={question} className="group border-t border-border py-5 last:border-b"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold [&::-webkit-details-marker]:hidden">{question}<Plus className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45" /></summary><p className="mt-4 max-w-2xl pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></section>

      <section className="px-5 pb-20 sm:pb-28"><div className="mx-auto flex max-w-6xl flex-col items-start gap-8 rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground sm:px-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-sm font-semibold uppercase tracking-[0.14em] opacity-75">Aloitetaan selkeästi</p><h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">Onko yrityksesi nettisivut päivityksen tarpeessa?</h2><p className="mt-5 text-lg opacity-85">Modernit nettisivut alk. 29 € + alv / kk.</p></div><Cta secondary><span className="text-foreground">Pyydä tarjous</span></Cta></div></section>
    </>
  )
}
