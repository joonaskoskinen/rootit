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
    const { website, email, phone, description } = body

    if (!email || !description) {
      return NextResponse.json(
        { error: "Email and description are required" },
        { status: 400 }
      )
    }

    // Send email notification
    await resend.emails.send({
      from: "Rootit <onboarding@resend.dev>",
      to: "koskinenjoonas@yahoo.com",
      subject: `Uusi sivustoarviopyyntö: ${email}`,
      html: `
        <h2>Uusi sivustoarviopyyntö</h2>
        <p><strong>Sivusto:</strong> ${website || "Ei annettu"}</p>
        <p><strong>Sähköposti:</strong> ${email}</p>
        <p><strong>Puhelinnumero:</strong> ${phone || "Ei annettu"}</p>
        <h3>Kuvaus:</h3>
        <p>${description.replace(/\n/g, "<br>")}</p>
      `,
      text: `
Uusi konsultaatiopyyntö

Sivusto: ${website || "Ei annettu"}
Sähköposti: ${email}
Puhelinnumero: ${phone || "Ei annettu"}

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
