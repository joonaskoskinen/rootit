"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "fi" | "en"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fi: {
    // Header
    "nav.services": "Palvelut",
    "nav.pricing": "Hinnat",
    "nav.howItWorks": "Näin homma toimii",
    "nav.faq": "UKK",
    "nav.contact": "Ota yhteyttä",
    "nav.remoteSupport": "Etätuki",

    // Hero - refined with clearer headline and CTA hierarchy
    "hero.headline1": "IT-asiat kuntoon ilman turhaa säätöä.",
    "hero.subheadline": "IT-apua ilman turhaa säätöä",
    "hero.description": "Korjaan rikkinäiset verkkosivut, uudistan vanhentuneet sivustot ja hoidan sähköposti-, domain- sekä muut IT-ongelmat etänä koko Suomeen.",
    "hero.cta1": "Kerro tarpeestasi",
    "hero.cta2": "Kysy uusista sivuista",
    "hero.cta3": "Kertatyön tarjouspyyntö",
    "hero.remoteLink": "Tarvitsetko etätukea?",
    "hero.microcopy": "Katsotaan yhdessä, mikä sopii sinulle. Ei myyntipuhetta, ei sitoutumispakkoa.",
    "hero.oneOff": "Kertatyöt ok - et tarvitse kuukausipakettia.",
    "hero.trust": "Suora yhteys tekijään. Selkeä hinnoittelu. Etätuki koko Suomeen.",
    "hero.demoUsp": "Sivustoprojekteissa näet suunnan ennen päätöstä",

    // Remote support - clearer and more reassuring
    "remote.title": "Tarvitsetko etätukea nyt?",
    "remote.button": "Lataa TeamViewer",
    "remote.helper": "Turvallinen etäyhteys avataan vain sinun luvallasi.",

    // Problem section - shorter, more scannable
    "problem.title": "Tuttuja tilanteita?",
    "problem.desc": "Autan näissä ja monissa muissa arjen digihaasteissa.",
    "problem.item1": "Yhteydenottolomake ei lähetä viestejä",
    "problem.item1.desc": "Asiakkaat eivät saa yhteyttä - kaupat jäävät saamatta.",
    "problem.item2": "Sivut näyttävät vanhentuneilta",
    "problem.item2.desc": "Nykyiset sivut eivät vakuuta, päivittäminen on hankalaa.",
    "problem.item3": "Sähköposti ei toimi oikein",
    "problem.item3.desc": "Viestit eivät mene perille tai menevät roskapostiin.",
    "problem.item4": "Tietokone hidas tai laite ei toimi",
    "problem.item4.desc": "Tulostin, Wi-Fi tai jokin muu aiheuttaa säätöä.",
    "problem.item5": "Aukioloajat pitäisi päivittää",
    "problem.item5.desc": "Pieni muutos, mutta ei aikaa tai osaamista.",
    "problem.item6": "Kirjautuminen ei onnistu",
    "problem.item6.desc": "Käyttäjätili hukassa tai salasana ei toimi.",
    "problem.item7": "Tarvitset uudet sivut",
    "problem.item7.desc": "Haluaisit toimivan sivuston ilman itse säätämistä.",
    "problem.item8": "Tarvitset apua yhteen ongelmaan",
    "problem.item8.desc": "Ei tarvetta IT-sopimukseen - vain nopea ratkaisu.",

    // Services section - sharpened with "sopii sinulle jos" feel
    "services.title": "Miten voin auttaa",
    "services.subtitle": "Kolme palvelupolkua - valitse tarpeesi mukaan.",

    "service1.title": "Nopeat kertakorjaukset",
    "service1.desc": "Rikkinäiset lomakkeet, pienet sivupäivitykset, domain- ja DNS-ongelmat, sähköpostiasetukset. Hoidan nopeasti ilman kuukausisopimusta.",
    "service1.examples": "Sopii kun tarvitset nopean korjauksen yksittäiseen ongelmaan.",

    "service2.title": "Verkkosivujen uudistus",
    "service2.desc": "Vanhojen sivujen modernisointi tai kokonaan uudet sivut. Paketti voi sisältää sivuston, teknisen käyttöönoton, ylläpidon ja hostingin.",
    "service2.examples": "Sopii kun nykyiset sivut eivät enää palvele tai tarvitset uudet.",
    "service2.demo": "Näet demoversion ennen sitoutumista",

    "service3.title": "Yleinen IT-tuki etänä",
    "service3.desc": "Sähköpostiongelmat, Microsoft 365, kirjautumisongelmat, hidas kone, tulostimet, Wi-Fi. Autan etäyhteydellä koko Suomeen.",
    "service3.examples": "Sopii kun tarvitset apua tekniikkaan ilman raskasta sopimusta.",

    // Free demo section - smoother, more premium wording
    "demo.title": "Näet suunnan ennen päätöstä",
    "demo.subtitle": "Sivustoprojekteissa rakennan ensin demoversion, jossa näet ulkoasun ja rakenteen. Jatkat vasta kun suunta tuntuu oikealta.",
    "demo.point1": "Näet konkreettisesti, miltä sivusto tulee näyttämään",
    "demo.point2": "Voit vaikuttaa suuntaan ennen kuin mitään on lyöty lukkoon",
    "demo.point3": "Demovaihe on maksuton - ei sitoutumispakkoa",
    "demo.point4": "Jatketaan vasta kun olet tyytyväinen suuntaan",
    "demo.point5": "Jos demo ei vakuuta, voit vetäytyä ilman kuluja",
    "demo.cta": "Kysy lisää demovaiheesta",

    // Trust / Why rootIT section - new trust points, less repetition
    "why.title": "Miksi rootIT?",
    "why.subtitle": "IT-apua sopivassa koossa - ilman turhaa byrokratiaa.",
    "why1.title": "Yksi yhteyshenkilö",
    "why1.desc": "Puhut suoraan minulle alusta loppuun. Ei tikettijärjestelmiä.",
    "why2.title": "Nopea reagointi",
    "why2.desc": "Vastaan yleensä vuorokauden sisällä - usein nopeammin.",
    "why3.title": "Selkeä viestintä",
    "why3.desc": "Kerron mitä teen ja miksi. Ei teknistä jargonia.",
    "why4.title": "Arvio ennen työtä",
    "why4.desc": "Tiedät hinnan etukäteen. Ei yllätyksiä laskussa.",
    "why5.title": "Ei myyntipuhetta",
    "why5.desc": "Ehdotan vain sitä mitä oikeasti tarvitset.",
    "why6.title": "Pienyrityksille sopiva",
    "why6.desc": "Ei raskasta prosessia. Käytännön apua arkeen.",

    // Target audience
    "audience.title": "Kenelle sopii",
    "audience.item1": "Kampaamot ja kauneushoitolat",
    "audience.item2": "Kahvilat ja ravintolat",
    "audience.item3": "Konsultit ja asiantuntijat",
    "audience.item4": "Pienet verkkokaupat",
    "audience.item5": "Yhdistykset ja järjestöt",
    "audience.item6": "Paikalliset palveluyritykset",
    "audience.item7": "Yksityishenkilöt",

    // Pricing - FIXED formatting
    "pricing.title": "Hinnoittelu",
    "pricing.subtitle": "Kolme tapaa ostaa apua - valitse tarpeesi mukaan.",
    "pricing.from": "alk.",

    "pricing.oneoff": "Kertatyöt",
    "pricing.oneoff.price": "50 €",
    "pricing.oneoff.priceNote": "alkaen",
    "pricing.oneoff.desc": "Yksittäiset korjaukset ja pienet tehtävät",
    "pricing.oneoff.f1": "Lomakkeiden korjaukset",
    "pricing.oneoff.f2": "Pienet sivupäivitykset",
    "pricing.oneoff.f3": "Domain- ja DNS-apu",
    "pricing.oneoff.f4": "Sähköpostiasetukset",
    "pricing.oneoff.f5": "Etätuki IT-ongelmiin",
    "pricing.oneoff.note": "Hinta riippuu työn laajuudesta. Kerron arvion etukäteen.",

    "pricing.project": "Sivustoprojektit",
    "pricing.project.price": "500 €",
    "pricing.project.priceNote": "alkaen",
    "pricing.project.desc": "Verkkosivujen uudistus tai uudet sivut",
    "pricing.project.f1": "Ilmainen demoversio",
    "pricing.project.f2": "Ei sitoutumispakkoa demovaiheessa",
    "pricing.project.f3": "Moderni, mobiiliystävällinen toteutus",
    "pricing.project.f4": "Tekninen käyttöönotto",
    "pricing.project.f5": "Hosting-ratkaisu kolmannen osapuolen kautta",
    "pricing.project.note": "Kysy tarjous - katsotaan yhdessä mitä tarvitset.",

    "pricing.monthly": "Jatkuva ylläpito",
    "pricing.monthly.price": "49 €",
    "pricing.monthly.priceNote": "alkaen",
    "pricing.monthly.desc": "Kuukausittainen tuki ja ylläpito",
    "pricing.monthly.f1": "Pienet muutokset kuukausittain",
    "pricing.monthly.f2": "Tietoturvapäivitykset",
    "pricing.monthly.f3": "Varmuuskopiot",
    "pricing.monthly.f4": "Priorisoitu tuki",
    "pricing.monthly.f5": "Säännöllinen sivuston tarkistus",
    "pricing.monthly.note": "Sopii jos tarvitset jatkuvaa apua.",

    "pricing.perMonth": "/kk",
    "pricing.recommended": "Suosittu",
    "pricing.cta": "Ota yhteyttä",
    "pricing.custom": "Räätälöidyt ratkaisut? Jutellaan.",
    "pricing.noCommitment": "Etätuki myös ilman kuukausipakettia",

    // Process section - 4 steps highlighting demo phase
    "process.badge": "Näin homma toimii",
    "process.title": "Selkeä prosessi, ei turhaa säätöä",
    "process.step1.title": "Kerro tarpeestasi",
    "process.step1.desc": "Ota yhteyttä lomakkeella tai sähköpostilla. Kuvaile ongelma tai tarve lyhyesti.",
    "process.step2.title": "Saat arvion",
    "process.step2.desc": "Kerron miten voin auttaa ja mitä se maksaa. Ei yllätyksiä.",
    "process.step3.title": "Näet suunnan ensin",
    "process.step3.desc": "Sivustoprojekteissa rakennan demoversion ennen sitoutumista.",
    "process.step4.title": "Toteutan ja viimeistelen",
    "process.step4.desc": "Kun olemme samaa mieltä, teen työn. Sinä keskityt omaan bisnekseesi.",

    // FAQ - stronger, more concise answers
    "faq.title": "Usein kysyttyä",
    "faq.subtitle": "Vastauksia yleisimpiin kysymyksiin.",

    "faq.q1": "Tarvitsenko kuukausipaketin?",
    "faq.a1": "Et. Voit pyytää apua yhteen ongelmaan ilman sitoumusta. Kuukausipaketti sopii, jos tarvitset säännöllistä apua ja haluat priorisoitua palvelua.",

    "faq.q2": "Voitko auttaa vain yhdessä pienessä asiassa?",
    "faq.a2": "Kyllä. Rikkinäinen lomake, sähköpostiongelma, pieni päivitys - hoidan mielelläni yksittäisiä tehtäviä. Kerron hinnan etukäteen.",

    "faq.q3": "Voitko uudistaa vanhat verkkosivut?",
    "faq.a3": "Kyllä. Rakennan vanhentuneet sivut uudelleen nykyaikaisiksi, selkeämmiksi ja helpommin päivitettäviksi. Näet demoversion ennen sitoutumista.",

    "faq.q4": "Mitä kokonaispaketti sisältää?",
    "faq.a4": "Sivuston suunnittelun ja toteutuksen, teknisen käyttöönoton, ja halutessasi jatkuvan ylläpidon. Hosting järjestetään luotettavan ulkopuolisen palveluntarjoajan kautta.",

    "faq.q5": "Miten hosting toimii?",
    "faq.a5": "Hosting järjestetään luotettavan palveluntarjoajan kautta (esim. Vercel, Netlify). Autan valinnassa ja käyttöönotossa. Et jää yksin teknisten asioiden kanssa.",

    "faq.q6": "Voitko auttaa etänä koko Suomessa?",
    "faq.a6": "Kyllä. Suurin osa työstä hoituu etäyhteydellä, joten sijainti ei ole este. Palvelen asiakkaita Helsingistä Rovaniemelle.",

    "faq.q7": "Millaisissa IT-ongelmissa voit auttaa etänä?",
    "faq.a7": "Sähköpostiongelmat, Outlook ja Microsoft 365, kirjautumisongelmat, hidas tietokone, tulostimet, Wi-Fi, ohjelmistojen asennus. Etäyhteys on turvallinen ja näet koko ajan mitä teen.",

    "faq.q8": "Autatko WordPressin kanssa?",
    "faq.a8": "Kyllä. WordPress-päivitykset, ongelmanratkaisu, pienet muutokset ja tarvittaessa sivuston uudelleenrakennus nykyaikaisemmalle alustalle.",

    "faq.q9": "Mitä jos demosivut eivät miellytä?",
    "faq.a9": "Demovaiheessa voit peruuttaa ilman kuluja. Tarkoitus on nimenomaan, että näet suunnan ja voit vaikuttaa siihen ennen kuin sitoudut.",

    "faq.q10": "Kuinka nopeasti vastaat?",
    "faq.a10": "Yleensä vuorokauden sisällä, usein nopeammin. Jos asia on kiireellinen, mainitse se viestissä.",

    // CTA - more specific, guides to right action
    "cta.title": "Miten voin auttaa sinua?",
    "cta.desc": "Kerro lyhyesti tarpeestasi, niin otan yhteyttä vuorokauden sisällä. Kartoitus on ilmainen eikä sido mihinkään.",
    "cta.oneOff": "Kertatyö, sivustoprojekti vai etätuki? Kaikki käy.",
    "cta.button": "Ota yhteyttä",
    "cta.demo": "Sivustoprojekteissa näet demoversion ensin",

    // Footer - more trustworthy
    "footer.services": "Palvelut",
    "footer.pricing": "Hinnat",
    "footer.privacy": "Tietosuoja",
    "footer.terms": "Ehdot",
    "footer.slogan": "IT-apua ilman turhaa säätöä.",
    "footer.contact": "Yhteystiedot",
    "footer.email": "rootit.info@gmail.com",
    "footer.location": "Etäpalvelu koko Suomeen",

    // Phone mockup
    "phone.title": "rootIT tuki",
    "phone.task1": "Yhteydenottolomake kuntoon",
    "phone.task1.status": "Käynnissä",
    "phone.task2": "Etusivun päivitys",
    "phone.task2.status": "Valmis",
    "phone.task3": "Verkkosivun korjaus käynnissä",
    "phone.task3.desc": "Kertatyön tarjous pyydetty",
    "phone.task4": "Sähköposti ohjautumaan oikein",
    "phone.task4.status": "Odottaa",
    "phone.cta": "Kerro tarpeestasi",

    // Live chat preview
    "chat.online": "Paikalla",
    "chat.msg1": "Hei, yhteydenottolomake ei lähetä viestejä",
    "chat.msg2": "Katsotaan! Pääsen tarkistamaan 10 minuutin sisällä.",
    "chat.msg3": "Loistava, kiitos!",
    "chat.msg4": "Korjattu - sähköpostiohjaus oli rikki. Testaa nyt!",

    // Code animation
    "code.step1": "Tarkistetaan",
    "code.step2": "Löydetty",
    "code.step3": "Korjataan",
    "code.step4": "Valmis",

    // Demo showcase section
    "demoSection.title": "Näin homma toimii käytännössä",
    "demoSection.subtitle": "Suora viestintä, nopea reagointi. Ei monimutkaisia prosesseja.",
    "demoSection.chat.title": "Suora yhteys",
    "demoSection.chat.desc": "Puhut suoraan tekijän kanssa. Ei tikettijärjestelmiä.",
    "demoSection.code.title": "Systemaattinen korjaus",
    "demoSection.code.desc": "Ongelma paikannetaan ja korjataan tehokkaasti.",

    // Form
    "form.title": "Ota yhteyttä",
    "form.desc": "Kerro tarpeestasi ja palaan asiaan vuorokauden sisällä.",
    "form.email": "Sähköposti",
    "form.email.placeholder": "sinun@email.fi",
    "form.phone": "Puhelinnumero (valinnainen)",
    "form.phone.placeholder": "+358 40 123 4567",
    "form.description": "Miten voin auttaa?",
    "form.description.placeholder": "Kuvaile ongelma tai tarve lyhyesti...",
    "form.time": "Milloin on hyvä aika ottaa yhteyttä?",
    "form.time.placeholder": "esim. arkiaamuisin, tiistai-iltapäivä...",
    "form.submit": "Lähetä",
    "form.submitting": "Lähetetään...",
    "form.error": "Jokin meni pieleen. Yritä uudelleen tai lähetä sähköpostia suoraan.",
    "form.success.title": "Viesti lähetetty!",
    "form.success.desc": "Palaan asiaan vuorokauden sisällä.",
    "form.success.close": "Sulje",

    // Trust badges
    "badge.direct": "Suora yhteys",
    "badge.oneoff": "Kertatyöt ok",
    "badge.demo": "Ilmaiset demot",
    "badge.remote": "Etätuki koko Suomeen",
    "badge.pricing": "Selkeä hinnoittelu",

    // Trust row (hero)
    "trust.direct": "Suora yhteys tekijään",
    "trust.oneoff": "Kertatyöt ilman kuukausipakkoa",
    "trust.demo": "Demo ensin sivustoprojekteissa",
  },
  en: {
    // Header
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.howItWorks": "How It Works",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.remoteSupport": "Remote Support",

    // Hero
    "hero.headline1": "IT sorted out without the hassle.",
    "hero.subheadline": "IT help without the hassle",
    "hero.description": "I fix broken websites, rebuild outdated ones, and solve email, domain and other IT problems remotely across Finland.",
    "hero.cta1": "Get in touch",
    "hero.cta2": "Ask about website project",
    "hero.cta3": "Request quote for one-time work",
    "hero.remoteLink": "Need remote support?",
    "hero.microcopy": "Let's figure out what works for you. No sales pitch, no commitment.",
    "hero.oneOff": "One-time jobs ok - no monthly plan required.",
    "hero.trust": "Direct contact. Clear pricing. Remote support across Finland.",
    "hero.demoUsp": "See the direction before committing for website projects",

    // Remote support
    "remote.title": "Need remote support now?",
    "remote.button": "Download remote support tool",
    "remote.helper": "Secure remote connection opened only with your permission. You see everything I do.",

    // Problem section
    "problem.title": "Sound familiar?",
    "problem.desc": "I help with these and many other everyday digital challenges.",
    "problem.item1": "Contact form doesn't send messages",
    "problem.item1.desc": "Customers can't reach you - sales are lost.",
    "problem.item2": "Website looks outdated",
    "problem.item2.desc": "Current site doesn't impress, updating is difficult.",
    "problem.item3": "Email isn't working properly",
    "problem.item3.desc": "Messages don't arrive or go to spam.",
    "problem.item4": "Computer slow or device not working",
    "problem.item4.desc": "Printer, Wi-Fi, or something else causing frustration.",
    "problem.item5": "Opening hours need updating",
    "problem.item5.desc": "Small change, but no time or skills.",
    "problem.item6": "Login not working",
    "problem.item6.desc": "User account lost or password doesn't work.",
    "problem.item7": "Need a new website",
    "problem.item7.desc": "Want a working site without managing it yourself.",
    "problem.item8": "Need help with one problem",
    "problem.item8.desc": "No need for IT contract - just a quick solution.",

    // Services section
    "services.title": "How I can help",
    "services.subtitle": "Three service paths - choose based on your needs.",

    "service1.title": "Quick one-time fixes",
    "service1.desc": "Broken forms, small page updates, domain and DNS issues, email settings. I handle them quickly without a monthly contract.",
    "service1.examples": "Good fit when you need a quick fix for a single problem.",

    "service2.title": "Website rebuild",
    "service2.desc": "Modernizing old sites or building completely new ones. Package can include site, technical setup, maintenance, and hosting.",
    "service2.examples": "Good fit when your current site no longer serves you or you need a new one.",
    "service2.demo": "See demo version before committing",

    "service3.title": "General remote IT support",
    "service3.desc": "Email issues, Microsoft 365, login problems, slow computer, printers, Wi-Fi. I help remotely across Finland.",
    "service3.examples": "Good fit when you need tech help without a heavy contract.",

    // Free demo section
    "demo.title": "See the direction before deciding",
    "demo.subtitle": "For website projects, I first build a demo version where you can see the design and structure. Continue only when the direction feels right.",
    "demo.point1": "See concretely what the site will look like",
    "demo.point2": "Influence the direction before anything is locked in",
    "demo.point3": "Demo phase is free - no commitment required",
    "demo.point4": "Continue only when you're happy with the direction",
    "demo.point5": "If demo doesn't convince you, walk away at no cost",
    "demo.cta": "Ask more about demo phase",

    // Trust / Why rootIT section
    "why.title": "Why rootIT?",
    "why.subtitle": "IT help sized right - without unnecessary bureaucracy.",
    "why1.title": "One contact person",
    "why1.desc": "You talk directly to me from start to finish. No ticket systems.",
    "why2.title": "Fast response",
    "why2.desc": "I usually respond within 24 hours - often faster.",
    "why3.title": "Clear communication",
    "why3.desc": "I explain what I do and why. No technical jargon.",
    "why4.title": "Estimate before work",
    "why4.desc": "You know the price upfront. No invoice surprises.",
    "why5.title": "No sales pitch",
    "why5.desc": "I only suggest what you actually need.",
    "why6.title": "Sized for small business",
    "why6.desc": "No heavy process. Practical help for everyday needs.",

    // Target audience
    "audience.title": "Who is this for",
    "audience.item1": "Hair salons and beauty shops",
    "audience.item2": "Cafes and restaurants",
    "audience.item3": "Consultants and experts",
    "audience.item4": "Small online stores",
    "audience.item5": "Associations and organizations",
    "audience.item6": "Local service businesses",
    "audience.item7": "Private individuals",

    // Pricing
    "pricing.title": "Pricing",
    "pricing.subtitle": "Three ways to get help - choose based on your needs.",

    "pricing.oneoff": "One-time work",
    "pricing.oneoff.price": "€50",
    "pricing.oneoff.priceNote": "from",
    "pricing.oneoff.desc": "Individual fixes and small tasks",
    "pricing.oneoff.f1": "Form fixes",
    "pricing.oneoff.f2": "Small page updates",
    "pricing.oneoff.f3": "Domain and DNS help",
    "pricing.oneoff.f4": "Email settings",
    "pricing.oneoff.f5": "Remote support for IT issues",
    "pricing.oneoff.note": "Price depends on scope. I'll give you an estimate upfront.",

    "pricing.project": "Website rebuild",
    "pricing.project.price": "€500",
    "pricing.project.priceNote": "from",
    "pricing.project.desc": "Website rebuild or completely new site",
    "pricing.project.f1": "Free demo version",
    "pricing.project.f2": "No commitment during demo phase",
    "pricing.project.f3": "Modern, mobile-friendly implementation",
    "pricing.project.f4": "Technical setup",
    "pricing.project.f5": "Hosting solution through third party",
    "pricing.project.note": "Request a quote - let's see together what you need.",

    "pricing.monthly": "Ongoing maintenance",
    "pricing.monthly.price": "€49",
    "pricing.monthly.priceNote": "from",
    "pricing.monthly.desc": "Monthly support and maintenance",
    "pricing.monthly.f1": "Small changes monthly",
    "pricing.monthly.f2": "Security updates",
    "pricing.monthly.f3": "Backups",
    "pricing.monthly.f4": "Priority support",
    "pricing.monthly.f5": "Regular site check",
    "pricing.monthly.note": "Good fit if you need ongoing help.",

    "pricing.perMonth": "/mo",
    "pricing.from": "from",
    "pricing.recommended": "Popular",
    "pricing.cta": "Contact",
    "pricing.custom": "Custom solutions? Let's talk.",
    "pricing.noCommitment": "Remote support also without monthly plan",

    // Process section - 4 steps
    "process.badge": "How it works",
    "process.title": "Clear process, no hassle",
    "process.step1.title": "Tell me your need",
    "process.step1.desc": "Contact via form or email. Describe the problem or need briefly.",
    "process.step2.title": "Get an estimate",
    "process.step2.desc": "I tell you how I can help and what it costs. No surprises.",
    "process.step3.title": "See direction first",
    "process.step3.desc": "For website projects, I build a demo version before commitment.",
    "process.step4.title": "I implement and finish",
    "process.step4.desc": "When we agree, I do the work. You focus on your business.",

    // FAQ
    "faq.title": "FAQ",
    "faq.subtitle": "Answers to common questions.",

    "faq.q1": "Do I need a monthly plan?",
    "faq.a1": "No. You can ask for help with one problem without commitment. Monthly plan is good if you need regular help and want priority service.",

    "faq.q2": "Can you help with just one small thing?",
    "faq.a2": "Yes. Broken form, email issue, small update - I'm happy to handle individual tasks. I'll tell you the price upfront.",

    "faq.q3": "Can you rebuild old websites?",
    "faq.a3": "Yes. I rebuild outdated sites to be modern, clearer, and easier to update. You'll see a demo version before committing.",

    "faq.q4": "What does a complete package include?",
    "faq.a4": "Website design and implementation, technical setup, and if desired ongoing maintenance. Hosting is arranged through a reliable third-party provider.",

    "faq.q5": "How does hosting work?",
    "faq.a5": "Hosting is arranged through a reliable provider (e.g., Vercel, Netlify). I help with selection and setup. You're not left alone with technical matters.",

    "faq.q6": "Can you help remotely across Finland?",
    "faq.a6": "Yes. Most work is done remotely, so location is not an obstacle. I serve customers from Helsinki to Rovaniemi.",

    "faq.q7": "What kind of IT issues can you help with remotely?",
    "faq.a7": "Email issues, Outlook and Microsoft 365, login problems, slow computer, printers, Wi-Fi, software installation. Remote connection is secure and you see everything I do.",

    "faq.q8": "Do you help with WordPress?",
    "faq.a8": "Yes. WordPress updates, troubleshooting, small changes, and if needed rebuilding the site on a more modern platform.",

    "faq.q9": "What if I don't like the demo pages?",
    "faq.a9": "During demo phase you can cancel at no cost. The point is precisely that you see the direction and can influence it before committing.",

    "faq.q10": "How quickly do you respond?",
    "faq.a10": "Usually within 24 hours, often faster. If it's urgent, mention it in your message.",

    // CTA
    "cta.title": "How can I help you?",
    "cta.desc": "Tell me briefly about your need and I'll get back to you within 24 hours. Consultation is free and doesn't commit you to anything.",
    "cta.oneOff": "One-time work, website project, or remote support? All welcome.",
    "cta.button": "Contact",
    "cta.demo": "For website projects, you see demo version first",

    // Footer
    "footer.services": "Services",
    "footer.pricing": "Pricing",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.slogan": "IT help without the hassle.",
    "footer.contact": "Contact",
    "footer.email": "rootit.info@gmail.com",
    "footer.location": "Remote service across Finland",

    // Phone mockup
    "phone.title": "rootIT support",
    "phone.task1": "Fix contact form",
    "phone.task1.status": "In progress",
    "phone.task2": "Homepage update",
    "phone.task2.status": "Done",
    "phone.task3": "Website fix in progress",
    "phone.task3.desc": "Quote requested for one-time work",
    "phone.task4": "Email routing fix",
    "phone.task4.status": "Waiting",
    "phone.cta": "Tell me your need",

    // Live chat preview
    "chat.online": "Online",
    "chat.msg1": "Hi, contact form isn't sending messages",
    "chat.msg2": "Let me check! I'll look into it within 10 minutes.",
    "chat.msg3": "Great, thanks!",
    "chat.msg4": "Fixed - email routing was broken. Test it now!",

    // Code animation
    "code.step1": "Checking",
    "code.step2": "Found",
    "code.step3": "Fixing",
    "code.step4": "Done",

    // Demo showcase section
    "demoSection.title": "How it works in practice",
    "demoSection.subtitle": "Direct communication, fast response. No complicated processes.",
    "demoSection.chat.title": "Direct contact",
    "demoSection.chat.desc": "You talk directly to the person doing the work. No ticket systems.",
    "demoSection.code.title": "Systematic fix",
    "demoSection.code.desc": "Problem is located and fixed efficiently.",

    // Form
    "form.title": "Contact",
    "form.desc": "Tell me your need and I'll get back to you within 24 hours.",
    "form.email": "Email",
    "form.email.placeholder": "your@email.com",
    "form.phone": "Phone (optional)",
    "form.phone.placeholder": "+358 40 123 4567",
    "form.description": "How can I help?",
    "form.description.placeholder": "Describe your problem or need briefly...",
    "form.time": "When is a good time to contact you?",
    "form.time.placeholder": "e.g. weekday mornings, Tuesday afternoon...",
    "form.submit": "Send",
    "form.submitting": "Sending...",
    "form.error": "Something went wrong. Please try again or email directly.",
    "form.success.title": "Message sent!",
    "form.success.desc": "I'll get back to you within 24 hours.",
    "form.success.close": "Close",

    // Trust badges
    "badge.direct": "Direct contact",
    "badge.oneoff": "One-time jobs ok",
    "badge.demo": "Free demos",
    "badge.remote": "Remote support Finland-wide",
  "badge.pricing": "Clear pricing",

    // Trust row (hero)
    "trust.direct": "Direct contact with the maker",
    "trust.oneoff": "One-time jobs without monthly plans",
    "trust.demo": "Demo first for website projects",
  },
  }

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("fi")

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
    return translations[lang][key as keyof typeof translations.fi] || key
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
