import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, service, budget, message, honeypot } = body;

    // Spam honeypot trap
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Inquiry processed successfully." },
        { status: 200 }
      );
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "A valid name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "A message with at least 10 characters is required." },
        { status: 400 }
      );
    }

    // In local development or template deployment, log the inquiry
    console.log("------------------------------------------");
    console.log("New Contact Form Inquiry Received:");
    console.log(`From: ${name} <${email}>`);
    console.log(`Service: ${service || "General"}`);
    console.log(`Budget: ${budget || "Not specified"}`);
    console.log(`Subject: ${subject || "No subject"}`);
    console.log(`Message: ${message}`);
    console.log("------------------------------------------");

    // Extensible email delivery hook:
    // If you configure RESEND_API_KEY or SENDGRID_API_KEY in your .env.local file,
    // dispatch can be triggered here.

    return NextResponse.json(
      {
        success: true,
        message: "Your message was sent successfully! I will review your inquiry and respond promptly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process message submission. Please try again." },
      { status: 500 }
    );
  }
}
