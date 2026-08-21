import { NextResponse } from "next/server";
import { transporter } from "@/lib/mails";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      phone,
      inquiry,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    // Email to EIE India
    await transporter.sendMail({
      from: `"EIE India Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Website Inquiry - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">

          <h2 style="color: #059669;">
            New Website Inquiry
          </h2>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone || "Not provided"}
          </p>

          <p>
            <strong>Company:</strong> ${company || "Not provided"}
          </p>

          <p>
            <strong>Inquiry Type:</strong> ${inquiry || "Not specified"}
          </p>

          <h3>Message</h3>

          <p>
            ${message.replace(/\n/g, "<br />")}
          </p>

          <hr />

          <p>
            <strong>Reply to:</strong> ${email}
          </p>

        </div>
      `,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: `"EIE India" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting EIE India",

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">

          <h2>Hello ${name},</h2>

          <p>
            Thank you for contacting EIE India.
          </p>

          <p>
            We have received your inquiry and our team will get back
            to you shortly.
          </p>

          <hr />

          <p>
            <strong>Your Inquiry:</strong>
          </p>

          <p>
            ${message.replace(/\n/g, "<br />")}
          </p>

          <p>
            Regards,<br />
            EIE India Team
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully",
    });

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to send inquiry",
      },
      { status: 500 }
    );
  }
}