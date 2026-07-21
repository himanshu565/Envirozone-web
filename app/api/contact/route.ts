import { NextResponse } from "next/server";
import { transporter } from "@/lib/mails";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      company,
      inquiry,
      message,
    } = body;

    await transporter.sendMail({
      from: `"Envirozone Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form - ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Inquiry:</strong> ${inquiry}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Envirozone" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Envirozone",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting Envirozone.</p>
        <p>We have received your inquiry.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}