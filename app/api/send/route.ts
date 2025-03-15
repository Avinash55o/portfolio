import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["avinashboruah8@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
