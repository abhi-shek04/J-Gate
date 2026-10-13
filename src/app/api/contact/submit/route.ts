import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendNotificationEmail, RECEIVER_EMAIL } from "@/lib/mailer";

/* ============================================================
   POST /api/contact/submit
   - Validates contact form inquiry
   - Saves to database (ContactInquiry)
   - Dispatches email notification directly to contact@indobox.co.jp via Google Workspace SMTP
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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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

    const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #080f1a; color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.12);">
  <div style="background: linear-gradient(90deg, #bc1a2c, #e8a01a); height: 4px;"></div>
  <div style="padding: 24px 28px; background: #0c1424; border-bottom: 1px solid rgba(255,255,255,0.08);">
    <h1 style="color: #ffffff; font-size: 20px; margin: 0 0 6px; font-weight: 700;">📩 New Contact Inquiry</h1>
    <p style="color: #94a3b8; font-size: 13px; margin: 0;">J-Gate × Indobox — Direct Client Message</p>
  </div>
  <div style="padding: 24px 28px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr>
        <td style="padding: 10px 0; color: #94a3b8; width: 140px; border-bottom: 1px solid rgba(255,255,255,0.06);">Client Name</td>
        <td style="padding: 10px 0; color: #ffffff; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">${escapeHtml(name.trim())}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.06);">Email Address</td>
        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
          <a href="mailto:${escapeHtml(email.trim())}" style="color: #e8a01a; text-decoration: none; font-weight: 600;">${escapeHtml(email.trim())}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.06);">Subject</td>
        <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid rgba(255,255,255,0.06);">${escapeHtml(subject?.trim() || "General Inquiry")}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.06);">Language Mode</td>
        <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid rgba(255,255,255,0.06);">${lang === "JP" ? "🇯🇵 Japanese (JP)" : "🇬🇧 English (EN)"}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0 6px; color: #94a3b8; vertical-align: top;" colspan="2">Message:</td>
      </tr>
      <tr>
        <td colspan="2" style="background: rgba(255,255,255,0.04); padding: 14px; border-radius: 8px; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap; font-size: 13.5px; border: 1px solid rgba(255,255,255,0.08);">
          ${escapeHtml(message.trim())}
        </td>
      </tr>
    </table>
    <div style="margin-top: 20px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #64748b;">
      <p style="margin: 0;">Received: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo", dateStyle: "medium", timeStyle: "short" })} JST</p>
    </div>
  </div>
</div>`;

    try {
      const mailRes = await sendNotificationEmail({
        to: RECEIVER_EMAIL,
        replyTo: email.trim(),
        subject: `📩 [J-Gate Contact Inquiry] from ${name.trim()} (${subject?.trim() || "General Inquiry"})`,
        html,
        text: `New Contact Inquiry\nName: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject?.trim() || "General Inquiry"}\nMessage:\n${message.trim()}`,
        fields: {
          "Client Name": name.trim(),
          "Client Email": email.trim(),
          "Subject": subject?.trim() || "General Inquiry",
          "Message": message.trim(),
          "Language": lang === "JP" ? "Japanese (JP)" : "English (EN)",
          "Time": timestamp,
          "Inquiry ID": inquiryId,
        },
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
