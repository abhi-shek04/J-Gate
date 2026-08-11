import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/* ============================================================
   POST /api/brochure/submit
   - Validates lead capture input
   - Saves to BrochureLead table (Prisma/SQLite)
   - Sends admin notification email (Nodemailer if SMTP env
     configured; otherwise logs structured notification to
     server console so the flow is demonstrable)
   - Returns success + brochure download URL
   ============================================================ */

type LeadInput = {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  questions?: string;
  consent: boolean;
  authMethod?: "google" | "manual";
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadInput;
    const { fullName, organization, email, phone, questions, consent, authMethod } = body;

    // Validation
    const errors: Record<string, string> = {};
    if (!fullName || !fullName.trim()) errors.fullName = "Name is required";
    if (!organization || !organization.trim()) errors.organization = "Organization is required";
    if (!email || !email.trim() || !isValidEmail(email)) errors.email = "Valid email is required";
    if (!phone || !phone.trim()) errors.phone = "Phone is required";
    if (!consent) errors.consent = "Consent is required";
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    // Source IP (best effort)
    const sourceIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Persist to database
    const lead = await db.brochureLead.create({
      data: {
        fullName: fullName.trim(),
        organization: organization.trim(),
        email: email.trim(),
        phone: phone.trim(),
        questions: questions?.trim() || null,
        consent: true,
        authMethod: authMethod || "manual",
        sourceIp,
        brochureDownloaded: true,
      },
    });

    // Send admin notification email
    await sendAdminNotification({
      fullName,
      organization,
      email,
      phone,
      questions: questions || "",
      sourceIp,
      timestamp: new Date().toISOString(),
      leadId: lead.id,
    });

    return NextResponse.json({
      ok: true,
      leadId: lead.id,
      downloadUrl: "/J-Gate-Brochure.pdf",
      message: "Lead saved and admin notified",
    });
  } catch (err) {
    console.error("[brochure/submit] error:", err);
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

/* ============================================================
   Admin email notification — structured HTML alert
   Uses Nodemailer if SMTP env vars present, otherwise logs
   a structured notification to the server console.
   ============================================================ */
async function sendAdminNotification(data: {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  questions: string;
  sourceIp: string;
  timestamp: string;
  leadId: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@j-gate.com";
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const html = `
<div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 32px;">
  <div style="background: #080f1a; border-radius: 12px; overflow: hidden;">
    <div style="background: linear-gradient(90deg, #bc1a2c, #e8a01a); height: 4px;"></div>
    <div style="padding: 28px 32px;">
      <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 4px;">🎫 New Brochure Download Registration</h1>
      <p style="color: #8892a4; font-size: 13px; margin: 0;">J-Gate — A new lead has registered</p>
    </div>
    <div style="background: #0d1b2a; padding: 24px 32px;">
      <table style="width: 100%; color: #ffffff; font-size: 14px; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; color: #8892a4; width: 140px;">Full Name</td><td style="padding: 10px 0; font-weight: 600;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Organization</td><td style="padding: 10px 0; font-weight: 600;">${escapeHtml(data.organization)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Email</td><td style="padding: 10px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #e8a01a; text-decoration: none;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Contact</td><td style="padding: 10px 0; font-weight: 600;">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4; vertical-align: top;">Questions</td><td style="padding: 10px 0; color: #c9d1e0;">${data.questions ? escapeHtml(data.questions) : "<em style='color:#555;'>No questions provided</em>"}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Source IP</td><td style="padding: 10px 0; font-family: monospace; font-size: 12px;">${escapeHtml(data.sourceIp)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Timestamp</td><td style="padding: 10px 0; font-size: 12px;">${data.timestamp}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Lead ID</td><td style="padding: 10px 0; font-family: monospace; font-size: 12px; color: #8892a4;">${data.leadId}</td></tr>
      </table>
    </div>
    <div style="background: #080f1a; padding: 16px 32px; text-align: center;">
      <p style="color: #4a4e69; font-size: 11px; margin: 0;">© 2026 J-Gate · Indobox India Private Limited · Hyderabad</p>
    </div>
  </div>
</div>`;

  // If SMTP credentials are configured, send real email via Nodemailer
  if (smtpHost && smtpUser && smtpPass) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: smtpUser, pass: smtpPass },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || "noreply@j-gate.com",
        to: adminEmail,
        subject: `🎫 New Brochure Lead: ${data.fullName} (${data.organization})`,
        html,
      });
      console.log(`[brochure] Admin email sent to ${adminEmail} for lead ${data.leadId}`);
      return;
    } catch (err) {
      console.error("[brochure] SMTP send failed, falling back to log:", err);
    }
  }

  // Fallback: structured console notification (demonstrable flow)
  console.log("\n═══════════════════════════════════════════════════════");
  console.log("🎫  NEW BROCHURE LEAD — ADMIN NOTIFICATION");
  console.log("═══════════════════════════════════════════════════════");
  console.log(`  To:       ${adminEmail}`);
  console.log(`  Name:     ${data.fullName}`);
  console.log(`  Org:      ${data.organization}`);
  console.log(`  Email:    ${data.email}`);
  console.log(`  Phone:    ${data.phone}`);
  console.log(`  Questions: ${data.questions || "(none)"}`);
  console.log(`  IP:       ${data.sourceIp}`);
  console.log(`  Time:     ${data.timestamp}`);
  console.log(`  Lead ID:  ${data.leadId}`);
  console.log("═══════════════════════════════════════════════════════\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
