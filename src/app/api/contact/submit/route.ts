import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/* ============================================================
   POST /api/contact/submit
   - Handles general contact inquiries from /contact
   - Persists inquiry to SQLite (ContactInquiry)
   - Dispatches notification to contact@indobox.co.jp
   - Sets reply-to header to sender's email for easy one-click responses
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

    // Save to database (resilient to serverless read-only environments)
    let inquiryId = `inq_${Date.now()}`;
    try {
      const inquiry = await db.contactInquiry.create({
        data: {
          name: name.trim(),
          email: email.trim(),
          subject: subject?.trim() || null,
          message: message.trim(),
          lang: lang || "JP",
          sourceIp,
        },
      });
      inquiryId = inquiry.id;
    } catch (dbErr) {
      console.warn("[contact/submit] DB write warning (e.g. serverless read-only SQLite):", dbErr);
    }

    // Send admin notification to Indobox asynchronously (non-blocking)
    sendContactNotification({
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || "General Inquiry",
      message: message.trim(),
      lang: lang || "JP",
      sourceIp,
      timestamp: new Date().toISOString(),
      inquiryId,
    }).catch((mailErr) => {
      console.warn("[contact/submit] Background notification error:", mailErr);
    });

    return NextResponse.json({
      ok: true,
      inquiryId,
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

import { sendNotificationEmail } from "@/lib/mailer";

async function sendContactNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  lang: string;
  sourceIp: string;
  timestamp: string;
  inquiryId: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "contact@indobox.co.jp";

  const html = `
<div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 32px;">
  <div style="background: #080f1a; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <div style="background: linear-gradient(90deg, #bc1a2c, #e8a01a); height: 4px;"></div>
    <div style="padding: 28px 32px;">
      <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 4px; font-weight: 700;">📩 New Contact Inquiry</h1>
      <p style="color: #8892a4; font-size: 13px; margin: 0;">J-Gate × Indobox — Direct Inquiry Alert</p>
    </div>
    <div style="background: #0d1b2a; padding: 24px 32px;">
      <table style="width: 100%; color: #ffffff; font-size: 14px; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; color: #8892a4; width: 140px;">Name</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Email</td><td style="padding: 10px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #e8a01a; text-decoration: none; font-weight: 600;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Subject</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${escapeHtml(data.subject)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #c9d1e0; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Preferred Language</td><td style="padding: 10px 0; color: #ffffff;">${data.lang === "JP" ? "🇯🇵 Japanese" : "🇬🇧 English"}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Source IP</td><td style="padding: 10px 0; font-family: monospace; font-size: 12px; color: #a0aec0;">${escapeHtml(data.sourceIp)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Timestamp</td><td style="padding: 10px 0; font-size: 12px; color: #a0aec0;">${data.timestamp}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Inquiry ID</td><td style="padding: 10px 0; font-family: monospace; font-size: 12px; color: #8892a4;">${data.inquiryId}</td></tr>
      </table>
    </div>
    <div style="background: #080f1a; padding: 16px 32px; text-align: center;">
      <p style="color: #64748b; font-size: 11px; margin: 0;">© 2026 J-Gate · Indobox India Private Limited · Cyber Gateway, Hyderabad</p>
      <p style="color: #475569; font-size: 10px; margin: 4px 0 0;">Delivering to: ${escapeHtml(adminEmail)}</p>
    </div>
  </div>
</div>`;

  await sendNotificationEmail({
    to: adminEmail,
    replyTo: data.email,
    subject: `📩 [J-Gate Inquiry] ${data.subject} — from ${data.name}`,
    html,
    text: `New Contact Inquiry:\nName: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nLanguage: ${data.lang}\nMessage:\n${data.message}\nTime: ${data.timestamp}\nID: ${data.inquiryId}`,
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
