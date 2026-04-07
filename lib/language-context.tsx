"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "fi"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.whyRune": "Why Rune Access",
    "nav.pricing": "Pricing",
    "nav.getStarted": "Start Scan",
    
    // Hero
    "hero.badge": "Accessibility Copilot for SMBs",
    "hero.headline1": "See what",
    "hero.headline2": "blocks conversions",
    "hero.headline3": "and how to",
    "hero.headline4": "fix it",
    "hero.description": "Scan your booking flow, checkout, or contact form. Get prioritized fixes that show exactly what to change - not just a list of errors.",
    "hero.stat": "67%",
    "hero.statLabel": "No-show reduction with fixes",
    "hero.cta1": "Scan Your Site",
    "hero.cta2": "See How It Works",
    "hero.trust": "Free scan. No credit card required.",
    "hero.liveDemo": "Live demo",
    "hero.urlPlaceholder": "https://your-website.com",
    "hero.scanButton": "Scan Free",
    
    // How it works
    "how.badge": "How it works",
    "how.title": "From URL to actionable fixes in minutes",
    "how.step1.title": "Enter your site URL",
    "how.step1.desc": "Paste your website address. We scan your key pages - booking, checkout, forms, and contact pages.",
    "how.step2.title": "See your dashboard",
    "how.step2.desc": "Get a clear overview: critical errors, severity levels, and which issues affect revenue the most.",
    "how.step3.title": "Get fix instructions",
    "how.step3.desc": "Not just 'error found' - we tell you exactly what to change: add this label, fix this contrast, add alt text here.",
    "how.step4.title": "Generate statement",
    "how.step4.desc": "Create a professional accessibility statement for your site. Stay compliant with EAA requirements.",
    
    // Features
    "features.title": "Everything you need to fix accessibility issues.",
    "features.subtitle": "From scanning to compliance - Rune Access helps you find, fix, and document accessibility issues without needing an expert team.",
    "feature1.badge": "Scanning",
    "feature1.title": "Automated Page Scan",
    "feature1.desc": "Scan your key pages automatically - booking flow, checkout, forms, contact. See issues across your entire customer journey.",
    "feature2.badge": "Monitoring",
    "feature2.title": "Continuous Monitoring",
    "feature2.desc": "Get alerts when new issues appear after deployments. Never let accessibility regressions slip through.",
    "feature3.badge": "Alerts",
    "feature3.title": "Critical Error Alerts",
    "feature3.desc": "Email notifications when critical issues appear. Know immediately when something breaks accessibility.",
    "feature4.badge": "Compliance",
    "feature4.title": "Statement Generator",
    "feature4.desc": "Generate a professional accessibility statement with one click. Meet EAA requirements and build trust with customers.",
    "feature5.badge": "Insights",
    "feature5.title": "Prioritized Fixes",
    "feature5.desc": "Not just error counts - see which issues block the most users and affect revenue. Fix what matters first.",
    "feature6.badge": "Reports",
    "feature6.title": "Monthly Reports",
    "feature6.desc": "Track progress over time. Share reports with stakeholders showing improvement trends and remaining issues.",
    
    // Pricing
    "pricing.title": "Simple pricing.",
    "pricing.subtitle": "For solo businesses to agencies managing multiple sites. Start with a free scan, upgrade when you need continuous monitoring.",
    "pricing.mostPopular": "Most Popular",
    "pricing.starter": "Single Site",
    "pricing.starter.desc": "For one website with basic scanning needs.",
    "pricing.starter.f1": "Weekly automated scans",
    "pricing.starter.f2": "Prioritized fix list",
    "pricing.starter.f3": "Statement generator",
    "pricing.pro": "Pro",
    "pricing.pro.desc": "Best for businesses with booking or checkout.",
    "pricing.pro.f1": "Daily monitoring",
    "pricing.pro.f2": "Critical error alerts",
    "pricing.pro.f3": "Customer journey analysis",
    "pricing.scale": "Agency",
    "pricing.scale.desc": "Manage multiple client sites from one dashboard.",
    "pricing.scale.f1": "Up to 10 sites",
    "pricing.scale.f2": "White-label reports",
    "pricing.scale.f3": "Priority support",
    "pricing.perMonth": "/mo",
    
    // CTA
    "cta.title": "Ready to see what's blocking your customers?",
    "cta.desc": "Join SMBs already using Rune Access to find and fix accessibility issues. Your first scan is free - see issues in minutes.",
    "cta.button": "Scan Your Site Free",
    
    // Footer
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    
    // Dashboard mockup
    "phone.siteHealth": "Site Health",
    "phone.score": "Score",
    "phone.critical": "Critical",
    "phone.warnings": "Warnings",
    "phone.passed": "Passed",
    "phone.topIssues": "Top Issues to Fix",
    "phone.issue1": "Missing form labels",
    "phone.issue1.desc": "Booking form fields lack accessible labels",
    "phone.issue2": "Low contrast text",
    "phone.issue2.desc": "Submit button text hard to read",
    "phone.issue3": "Missing alt text",
    "phone.issue3.desc": "Service images need descriptions",
    "phone.fix": "How to fix",
    "phone.fixDesc": "Add a label element with for attribute pointing to the input id, or use aria-label.",
    "phone.codeExample": "Code example",
    "phone.apply": "Mark as Fixed",
    "phone.generating": "Generating statement...",
    "phone.statement": "Accessibility Statement",
    "phone.statementReady": "Statement ready!",
    "phone.download": "Download PDF",
    "phone.lastScan": "Last scan: 2 hours ago",
    "phone.scanNow": "Scan Now",
    "phone.enterUrl": "Enter your website URL",
    "phone.startScan": "Start Free Scan",
    "phone.scanning": "Scanning...",
    "phone.pagesFound": "pages found",
    
    // FAQ
    "faq.title": "Questions? Answered.",
    "faq.subtitle": "Everything you need to know about accessibility compliance and how Rune Access helps.",
    "faq.q1": "What is the European Accessibility Act (EAA)?",
    "faq.a1": "The EAA is EU legislation requiring digital products and services to be accessible to people with disabilities. It applies to e-commerce, banking, transport, and other services. The deadline for compliance is June 28, 2025.",
    "faq.q2": "Who needs to comply with EAA?",
    "faq.a2": "Any business offering products or services in the EU market must comply, including online stores, booking systems, and service providers. This applies regardless of where your business is located - if you serve EU customers, you need to be compliant.",
    "faq.q3": "What is WCAG and how does it relate to EAA?",
    "faq.a3": "WCAG (Web Content Accessibility Guidelines) is the technical standard that EAA references. Meeting WCAG 2.1 Level AA is generally considered sufficient for EAA compliance. Rune Access scans against these guidelines.",
    "faq.q4": "What happens if I don't comply?",
    "faq.a4": "Penalties vary by country but can include fines, being forced to take services offline, and reputational damage. More importantly, inaccessible sites lose customers - 15-20% of people have some form of disability.",
    "faq.q5": "How is Rune Access different from free tools like WAVE?",
    "faq.a5": "Free tools show errors but don't help you fix them. Rune Access provides exact fix instructions with code examples, prioritizes issues by business impact, monitors continuously, and generates compliance documentation.",
    "faq.q6": "Do I need a developer to use Rune Access?",
    "faq.a6": "Not necessarily. Our fix instructions are detailed enough for anyone with basic HTML knowledge. For complex issues, you can share the exact fix instructions with your developer or agency.",
    
    // Comparison
    "compare.title": "Why teams choose Rune Access",
    "compare.subtitle": "See how we compare to other accessibility solutions.",
    "compare.feature": "Feature",
    "compare.runeAccess": "Rune Access",
    "compare.freeTools": "Free Tools",
    "compare.enterprise": "Enterprise",
    "compare.f1": "Automated scanning",
    "compare.f2": "Fix instructions with code",
    "compare.f3": "Continuous monitoring",
    "compare.f4": "Statement generator",
    "compare.f5": "Priority by business impact",
    "compare.f6": "Setup time",
    "compare.f6.rune": "2 minutes",
    "compare.f6.free": "Instant",
    "compare.f6.enterprise": "Weeks",
    "compare.f7": "Price",
    "compare.f7.rune": "From $39/mo",
    "compare.f7.free": "Free",
    "compare.f7.enterprise": "$500+/mo",
    "compare.yes": "Yes",
    "compare.no": "No",
    "compare.limited": "Limited",
  },
  fi: {
    // Header
    "nav.whyRune": "Miksi Rune Access",
    "nav.pricing": "Hinnat",
    "nav.getStarted": "Aloita skannaus",
    
    // Hero
    "hero.badge": "Saavutettavuus-Copilot pk-yrityksille",
    "hero.headline1": "Näe mikä",
    "hero.headline2": "estää konversiot",
    "hero.headline3": "ja miten se",
    "hero.headline4": "korjataan",
    "hero.description": "Skannaa varauspolkusi, checkout tai yhteydenottolomake. Saat priorisoidut korjausohjeet - et vain virhelistaa.",
    "hero.stat": "67%",
    "hero.statLabel": "Vähemmän peruutuksia korjausten jälkeen",
    "hero.cta1": "Skannaa sivustosi",
    "hero.cta2": "Näin se toimii",
    "hero.trust": "Ilmainen skannaus. Ei luottokorttia.",
    "hero.liveDemo": "Livedemo",
    "hero.urlPlaceholder": "https://sivustosi.fi",
    "hero.scanButton": "Skannaa ilmaiseksi",
    
    // How it works
    "how.badge": "Näin se toimii",
    "how.title": "URL:stä toimiviin korjauksiin minuuteissa",
    "how.step1.title": "Syötä sivustosi URL",
    "how.step1.desc": "Liitä verkkosivusi osoite. Skannaamme tärkeimmät sivut - varauksen, checkoutin, lomakkeet ja yhteystiedot.",
    "how.step2.title": "Näe dashboardisi",
    "how.step2.desc": "Saat selkeän yleiskuvan: kriittiset virheet, vakavuustasot ja mitkä ongelmat vaikuttavat eniten liikevaihtoon.",
    "how.step3.title": "Saat korjausohjeet",
    "how.step3.desc": "Ei vain 'virhe löydetty' - kerromme tarkalleen mitä muuttaa: lisää tämä label, korjaa tämä kontrasti, lisää alt-teksti tähän.",
    "how.step4.title": "Luo seloste",
    "how.step4.desc": "Luo ammattimainen saavutettavuusseloste sivustollesi. Pysy EAA-vaatimusten mukaisena.",
    
    // Features
    "features.title": "Kaikki mitä tarvitset saavutettavuusongelmien korjaamiseen.",
    "features.subtitle": "Skannauksesta noudattamiseen - Rune Access auttaa löytämään, korjaamaan ja dokumentoimaan saavutettavuusongelmat ilman asiantuntijatiimiä.",
    "feature1.badge": "Skannaus",
    "feature1.title": "Automaattinen sivuskannaus",
    "feature1.desc": "Skannaa tärkeimmät sivusi automaattisesti - varauspolku, checkout, lomakkeet, yhteystiedot. Näe ongelmat koko asiakaspolulta.",
    "feature2.badge": "Seuranta",
    "feature2.title": "Jatkuva monitorointi",
    "feature2.desc": "Saat hälytykset kun uusia ongelmia ilmenee julkaisujen jälkeen. Saavutettavuusregressiot eivät pääse läpi.",
    "feature3.badge": "Hälytykset",
    "feature3.title": "Kriittiset virhehälytykset",
    "feature3.desc": "Sähköposti-ilmoitukset kun kriittisiä ongelmia ilmenee. Tiedät heti kun jokin rikkoo saavutettavuuden.",
    "feature4.badge": "Compliance",
    "feature4.title": "Selosteen generaattori",
    "feature4.desc": "Luo ammattimainen saavutettavuusseloste yhdellä klikkauksella. Täytä EAA-vaatimukset ja rakenna luottamusta.",
    "feature5.badge": "Oivallukset",
    "feature5.title": "Priorisoidut korjaukset",
    "feature5.desc": "Ei vain virhelaskureita - näe mitkä ongelmat estävät eniten käyttäjiä ja vaikuttavat liikevaihtoon. Korjaa tärkeimmät ensin.",
    "feature6.badge": "Raportit",
    "feature6.title": "Kuukausiraportit",
    "feature6.desc": "Seuraa edistymistä ajan mittaan. Jaa raportit sidosryhmille näyttäen parannustrendit ja jäljellä olevat ongelmat.",
    
    // Pricing
    "pricing.title": "Selkeä hinnoittelu.",
    "pricing.subtitle": "Yksittäisille yrityksille ja toimistoille jotka hallinnoivat useita sivustoja. Aloita ilmaisella skannauksella, päivitä kun tarvitset jatkuvaa seurantaa.",
    "pricing.mostPopular": "Suosituin",
    "pricing.starter": "Yksi sivusto",
    "pricing.starter.desc": "Yhdelle sivustolle perusskannauksella.",
    "pricing.starter.f1": "Viikottaiset automaattiset skannaukset",
    "pricing.starter.f2": "Priorisoitu korjauslista",
    "pricing.starter.f3": "Selosteen generaattori",
    "pricing.pro": "Pro",
    "pricing.pro.desc": "Parhaiten yrityksille joilla on varaus tai checkout.",
    "pricing.pro.f1": "Päivittäinen seuranta",
    "pricing.pro.f2": "Kriittiset virhehälytykset",
    "pricing.pro.f3": "Asiakaspolun analyysi",
    "pricing.scale": "Agency",
    "pricing.scale.desc": "Hallinnoi useita asiakassivustoja yhdestä dashboardista.",
    "pricing.scale.f1": "Jopa 10 sivustoa",
    "pricing.scale.f2": "White-label raportit",
    "pricing.scale.f3": "Priorisoitu tuki",
    "pricing.perMonth": "/kk",
    
    // CTA
    "cta.title": "Valmis näkemään mikä estää asiakkaitasi?",
    "cta.desc": "Liity pk-yrityksiin jotka jo käyttävät Rune Accessia saavutettavuusongelmien löytämiseen ja korjaamiseen. Ensimmäinen skannaus on ilmainen.",
    "cta.button": "Skannaa sivustosi ilmaiseksi",
    
    // Footer
    "footer.features": "Ominaisuudet",
    "footer.pricing": "Hinnat",
    "footer.privacy": "Tietosuoja",
    "footer.terms": "Ehdot",
    
    // Dashboard mockup
    "phone.siteHealth": "Sivuston tila",
    "phone.score": "Pisteet",
    "phone.critical": "Kriittiset",
    "phone.warnings": "Varoitukset",
    "phone.passed": "Hyväksytyt",
    "phone.topIssues": "Tärkeimmät korjattavat",
    "phone.issue1": "Puuttuvat lomake-labelit",
    "phone.issue1.desc": "Varauslomakkeen kentiltä puuttuu saavutettavat labelit",
    "phone.issue2": "Matala kontrasti",
    "phone.issue2.desc": "Lähetä-napin teksti vaikea lukea",
    "phone.issue3": "Puuttuva alt-teksti",
    "phone.issue3.desc": "Palvelukuvat tarvitsevat kuvaukset",
    "phone.fix": "Näin korjaat",
    "phone.fixDesc": "Lisää label-elementti for-attribuutilla joka osoittaa inputin id:hen, tai käytä aria-labelia.",
    "phone.codeExample": "Koodiesimerkki",
    "phone.apply": "Merkitse korjatuksi",
    "phone.generating": "Luodaan selostetta...",
    "phone.statement": "Saavutettavuusseloste",
    "phone.statementReady": "Seloste valmis!",
    "phone.download": "Lataa PDF",
    "phone.lastScan": "Viimeisin skannaus: 2 tuntia sitten",
    "phone.scanNow": "Skannaa nyt",
    "phone.enterUrl": "Syötä sivustosi URL",
    "phone.startScan": "Aloita ilmainen skannaus",
    "phone.scanning": "Skannataan...",
    "phone.pagesFound": "sivua löydetty",
    
    // FAQ
    "faq.title": "Kysymyksiä? Vastauksia.",
    "faq.subtitle": "Kaikki mitä sinun tarvitsee tietää saavutettavuusvaatimuksista ja miten Rune Access auttaa.",
    "faq.q1": "Mikä on Euroopan saavutettavuusdirektiivi (EAA)?",
    "faq.a1": "EAA on EU-lainsäädäntö, joka vaatii digitaalisten tuotteiden ja palvelujen olevan saavutettavia vammaisille henkilöille. Se koskee verkkokauppaa, pankkipalveluita, liikennettä ja muita palveluita. Määräaika noudattamiselle on 28. kesäkuuta 2025.",
    "faq.q2": "Kenen pitää noudattaa EAA:ta?",
    "faq.a2": "Jokaisen yrityksen, joka tarjoaa tuotteita tai palveluita EU-markkinoilla, on noudatettava, mukaan lukien verkkokaupat, varausjärjestelmät ja palveluntarjoajat. Tämä pätee riippumatta siitä, missä yrityksesi sijaitsee - jos palvelet EU-asiakkaita, sinun on oltava vaatimusten mukainen.",
    "faq.q3": "Mikä on WCAG ja miten se liittyy EAA:han?",
    "faq.a3": "WCAG (Web Content Accessibility Guidelines) on tekninen standardi, johon EAA viittaa. WCAG 2.1 Level AA -tason täyttämistä pidetään yleensä riittävänä EAA-vaatimusten noudattamiseksi. Rune Access skannaa näitä ohjeita vasten.",
    "faq.q4": "Mitä tapahtuu, jos en noudata vaatimuksia?",
    "faq.a4": "Seuraamukset vaihtelevat maittain, mutta voivat sisältää sakkoja, palveluiden sulkemisen ja mainehaittoja. Tärkeämpää on, että saavuttamattomat sivustot menettävät asiakkaita - 15-20% ihmisistä on jonkinlainen vamma.",
    "faq.q5": "Miten Rune Access eroaa ilmaisista työkaluista kuten WAVE?",
    "faq.a5": "Ilmaiset työkalut näyttävät virheet, mutta eivät auta korjaamaan niitä. Rune Access tarjoaa tarkat korjausohjeet koodiesimerkkeineen, priorisoi ongelmat liiketoimintavaikutuksen mukaan, seuraa jatkuvasti ja luo vaatimustenmukaisuusdokumentaation.",
    "faq.q6": "Tarvitsenko kehittäjää Rune Accessin käyttöön?",
    "faq.a6": "Ei välttämättä. Korjausohjeemme ovat riittävän yksityiskohtaisia kenelle tahansa, jolla on perus HTML-osaaminen. Monimutkaisissa ongelmissa voit jakaa tarkat korjausohjeet kehittäjällesi tai toimistollesi.",
    
    // Comparison
    "compare.title": "Miksi tiimit valitsevat Rune Accessin",
    "compare.subtitle": "Katso miten vertaudumme muihin saavutettavuusratkaisuihin.",
    "compare.feature": "Ominaisuus",
    "compare.runeAccess": "Rune Access",
    "compare.freeTools": "Ilmaiset työkalut",
    "compare.enterprise": "Enterprise",
    "compare.f1": "Automaattinen skannaus",
    "compare.f2": "Korjausohjeet koodilla",
    "compare.f3": "Jatkuva seuranta",
    "compare.f4": "Selosteen generaattori",
    "compare.f5": "Priorisointi liiketoimintavaikutuksella",
    "compare.f6": "Käyttöönottoaika",
    "compare.f6.rune": "2 minuuttia",
    "compare.f6.free": "Heti",
    "compare.f6.enterprise": "Viikkoja",
    "compare.f7": "Hinta",
    "compare.f7.rune": "Alkaen 39€/kk",
    "compare.f7.free": "Ilmainen",
    "compare.f7.enterprise": "500€+/kk",
    "compare.yes": "Kyllä",
    "compare.no": "Ei",
    "compare.limited": "Rajoitettu",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language
    if (saved && (saved === "en" || saved === "fi")) {
      setLangState(saved)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem("lang", newLang)
  }

  const t = (key: string): string => {
    return translations[lang][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
