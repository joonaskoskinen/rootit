import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character)

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    const body = await request.json()
    const { name, company, email, category, description } = body
    if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.trim() || typeof description !== "string" || !description.trim()) return NextResponse.json({ error: "Name, email and description are required" }, { status: 400 })
    const safe = { name: escapeHtml(name.trim()), company: escapeHtml(typeof company === "string" ? company.trim() : ""), email: escapeHtml(email.trim()), category: escapeHtml(typeof category === "string" ? category : ""), description: escapeHtml(description.trim()).replace(/\n/g, "<br>") }
    const resend = new Resend(apiKey)
    await resend.emails.send({ from: "Rootit <joonas@rootit.fi>", to: "joonas@rootit.fi", subject: `Uusi tukipyyntö: ${safe.name}`, html: `<h2>Uusi Rootitin tukipyyntö</h2><p><strong>Nimi:</strong> ${safe.name}</p><p><strong>Yritys:</strong> ${safe.company || "Ei annettu"}</p><p><strong>Sähköposti:</strong> ${safe.email}</p><p><strong>Aihe:</strong> ${safe.category || "Ei valittu"}</p><h3>Kuvaus:</h3><p>${safe.description}</p>`, text: `Uusi Rootitin tukipyyntö\n\nNimi: ${name}\nYritys: ${company || "Ei annettu"}\nSähköposti: ${email}\nAihe: ${category || "Ei valittu"}\n\nKuvaus:\n${description}` })
    return NextResponse.json({ success: true })
  } catch (error) { console.error("Error sending consultation request:", error); return NextResponse.json({ error: "Failed to send consultation request" }, { status: 500 }) }
}
