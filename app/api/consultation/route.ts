import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

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

    const resend = new Resend(apiKey)

    const body = await request.json()
    const { email, phone, description, preferredTime } = body

    if (!email || !description) {
      return NextResponse.json(
        { error: "Email and description are required" },
        { status: 400 }
      )
    }

    // Send email notification
    await resend.emails.send({
      from: "Rune <onboarding@resend.dev>",
      to: "koskinenjoonas@yahoo.com",
      subject: `Uusi konsultaatiopyyntö: ${email}`,
      html: `
        <h2>Uusi konsultaatiopyyntö</h2>
        <p><strong>Sähköposti:</strong> ${email}</p>
        <p><strong>Puhelinnumero:</strong> ${phone || "Ei annettu"}</p>
        <p><strong>Sopiva ajankohta:</strong> ${preferredTime || "Ei annettu"}</p>
        <h3>Kuvaus:</h3>
        <p>${description.replace(/\n/g, "<br>")}</p>
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
