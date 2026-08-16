import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

// Yksinkertainen in-memory rate limit (IP -> viimeisin lähetysaika).
// Nollautuu deployn/kylmäkäynnistyksen yhteydessä — riittää perustason
// roskapostisuojaksi, ei korvaa oikeaa rate-limit-palvelua isommassa liikenteessä.
const lastSubmission = new Map<string, number>()
const RATE_LIMIT_MS = 60_000 // 1 lähetys / minuutti / IP

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const recipient = process.env.CONSULTATION_RECIPIENT_EMAIL
    if (!recipient) {
      console.error("CONSULTATION_RECIPIENT_EMAIL is not configured")
      return NextResponse.json(
        { error: "Recipient not configured" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { email, phone, description, preferredTime, website } = body

    // Honeypot: aito käyttäjä ei koskaan täytä tätä piilokenttää.
    // Lisää lomakkeeseen kenttä name="website" joka on CSS:llä piilotettu
    // (ei display:none, koska botit tunnistavat sen — käytä esim.
    // position: absolute; left: -9999px;).
    if (website) {
      // Näytetään botille "onnistunut" vastaus, jotta se ei yritä uudelleen.
      return NextResponse.json({ success: true })
    }

    if (!email || !description) {
      return NextResponse.json(
        { error: "Email and description are required" },
        { status: 400 }
      )
    }

    // Kevyt rate limit IP:n perusteella
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown"
    const now = Date.now()
    const last = lastSubmission.get(ip)
    if (last && now - last < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Too many requests, please wait a moment." },
        { status: 429 }
      )
    }
    lastSubmission.set(ip, now)

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: "Rootit <onboarding@resend.dev>", // TODO: vaihda verifioituun omaan domainiin, esim. noreply@rootit.fi
      to: recipient,
      subject: `Uusi sivustoarviopyyntö: ${email}`,
      html: `
        <h2>Uusi sivustoarviopyyntö</h2>
        <p><strong>Sähköposti:</strong> ${email}</p>
        <p><strong>Puhelinnumero:</strong> ${phone || "Ei annettu"}</p>
        <p><strong>Sopiva ajankohta:</strong> ${preferredTime || "Ei annettu"}</p>
        <h3>Kuvaus:</h3>
        <p>${String(description).replace(/\n/g, "<br>")}</p>
      `,
      text: `
Uusi konsultaatiopyyntö

Sähköposti: ${email}
Puhelinnumero: ${phone || "Ei annettu"}
Sopiva ajankohta: ${preferredTime || "Ei annettu"}

Kuvaus:
${description}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending consultation request:", error)
    return NextResponse.json(
      { error: "Failed to send consultation request" },
      { status: 500 }
    )
  }
}
