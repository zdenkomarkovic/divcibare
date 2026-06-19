import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Neispravni podaci forme.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = parsed.data;

    const apiKey = process.env.MAILJET_API_KEY;
    const secretKey = process.env.MAILJET_SECRET_KEY;
    const senderEmail =
      process.env.SITE_MAIL_SENDER ?? "noreply@manikamwebsolutions.com";
    const receiverEmail =
      process.env.SITE_MAIL_RECEIVER ?? "draganprosic1975@gmail.com";

    if (!apiKey || !secretKey) {
      console.error("Mailjet kredencijali nisu konfigurisani.");
      return NextResponse.json(
        { error: "Servis za slanje poruka trenutno nije dostupan." },
        { status: 503 }
      );
    }

    const htmlPart = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #1E3A28; padding: 24px 32px;">
          <h2 style="color: #C9A455; margin: 0; font-size: 20px;">Nova poruka — Divčibare Apartmani</h2>
        </div>
        <div style="padding: 32px; background: #F5F0E8; border: 1px solid #EDE5D5;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D5; font-weight: bold; width: 140px; color: #8A7869;">Ime i prezime</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D5; font-weight: bold; color: #8A7869;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D5;"><a href="mailto:${email}" style="color: #1E3A28;">${email}</a></td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D5; font-weight: bold; color: #8A7869;">Telefon</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #EDE5D5;"><a href="tel:${phone}" style="color: #1E3A28;">${phone}</a></td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 16px 0 0; font-weight: bold; color: #8A7869; vertical-align: top;">Poruka</td>
              <td style="padding: 16px 0 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
        <div style="background: #1E3A28; padding: 16px 32px; text-align: center;">
          <p style="color: #8A7869; font-size: 12px; margin: 0;">Divčibare Apartmani · ul. Beli narcis 80, Divčibare</p>
        </div>
      </div>
    `;

    const textPart = [
      "Nova poruka sa sajta — Divčibare Apartmani",
      "---",
      `Ime: ${name}`,
      `Email: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      `\nPoruka:\n${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const mjResponse = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString("base64")}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: senderEmail, Name: "Divčibare Apartmani" },
            To: [{ Email: receiverEmail, Name: "Dragan Prošić" }],
            ReplyTo: { Email: email, Name: name },
            Subject: `Novi upit: ${name} — Divčibare Apartmani`,
            TextPart: textPart,
            HTMLPart: htmlPart,
          },
        ],
      }),
    });

    if (!mjResponse.ok) {
      const err = await mjResponse.text();
      console.error("Mailjet greška:", err);
      return NextResponse.json(
        { error: "Greška pri slanju poruke. Pokušajte ponovo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Kontakt API greška:", err);
    return NextResponse.json(
      { error: "Interna greška servera." },
      { status: 500 }
    );
  }
}
