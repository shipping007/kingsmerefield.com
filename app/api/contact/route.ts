import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    const to = process.env.CONTACT_TO_EMAIL || "Mateotodd@mail.co.uk"
    // Use Resend onboarding sender by default so it works without domain setup
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

    // Construct a simple HTML email
    const html = `
      <div>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message as string).replace(/\n/g, "<br/>")}</p>
      </div>
    `

    await resend.emails.send({
      to,
      from,
      subject: `New enquiry from ${name}`,
      reply_to: email,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("Contact API error", err)
    return NextResponse.json({ ok: false, error: "Failed to send. Please try again later." }, { status: 500 })
  }
}
