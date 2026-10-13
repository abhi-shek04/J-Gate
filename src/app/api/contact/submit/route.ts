import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendNotificationEmail, RECEIVER_EMAIL } from "@/lib/mailer";

/* ============================================================
   POST /api/contact/submit
   - Validates contact form inquiry
   - Saves to database (ContactInquiry)
   - Dispatches email notification directly to contact@indobox.co.jp
   ============================================================ */

type ContactInput = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  lang?: "EN" | "JP";
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactInput;
    const { name, email, subject, message, lang } = body;

    const errors: Record<string, string> = {};
    if (!name || !name.trim()) errors.name = "Name is required";
    if (!email || !email.trim() || !isValidEmail(email)) errors.email = "Valid email is required";
    if (!message || !message.trim()) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const sourceIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    let inquiryId = `inq_${Date.now()}`;
    try {
      const inquiry = await db.contactInquiry.create({
        data: {
          name: name.trim(),
          email: email.trim(),
          subject: subject?.trim() || "General Inquiry",
          message: message.trim(),
          lang: lang || "EN",
          sourceIp,
        },
      });
      inquiryId = inquiry.id;
    } catch (dbErr) {
      console.warn("[contact/submit] DB write warning:", dbErr);
    }

    const timestamp = new Date().toISOString();
    let emailDelivered = false;

    try {
      const mailRes = await sendNotificationEmail({
        to: RECEIVER_EMAIL,
        replyTo: email.trim(),
        subject: `📩 [J-Gate Contact Inquiry] from ${name.trim()}`,
        fields: {
          Form_Type: "Contact Us Form",
          Name: name.trim(),
          Email: email.trim(),
          Subject: subject?.trim() || "General Inquiry",
          Message: message.trim(),
          Language: lang === "JP" ? "Japanese (JP)" : "English (EN)",
          Submitted_At: timestamp,
          Inquiry_ID: inquiryId,
        },
        text: `New Contact Inquiry\nName: ${name.trim()}\nEmail: ${email.trim()}\nMessage:\n${message.trim()}\nLanguage: ${lang || "EN"}\nTime: ${timestamp}`,
      });
      emailDelivered = !!mailRes.ok;
    } catch (mailErr) {
      console.warn("[contact/submit] Mail dispatch error:", mailErr);
    }

    return NextResponse.json({
      ok: true,
      inquiryId,
      emailDelivered,
      receiver: RECEIVER_EMAIL,
      message: "Inquiry received successfully",
    });
  } catch (err) {
    console.error("[contact/submit] error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
