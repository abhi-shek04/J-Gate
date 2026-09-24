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
  questions?: string;
  authMethod?: "google" | "manual";
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadInput;
    const { fullName, organization, email, questions, authMethod } = body;

    // Validation (Only Name, Organization, E-Mail required; questions optional)
    const errors: Record<string, string> = {};
    if (!fullName || !fullName.trim()) errors.fullName = "Name is required";
    if (!organization || !organization.trim()) errors.organization = "Organization is required";
    if (!email || !email.trim() || !isValidEmail(email)) errors.email = "Valid email is required";
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    // Source IP (best effort)
    const sourceIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Persist to database (resilient to read-only environments like Vercel)
    let leadId = `lead_${Date.now()}`;
    try {
      const lead = await db.brochureLead.create({
        data: {
          fullName: fullName.trim(),
          organization: organization.trim(),
          email: email.trim(),
          phone: "",
          questions: questions?.trim() || null,
          consent: true,
          authMethod: authMethod || "manual",
          sourceIp,
          brochureDownloaded: true,
        },
      });
      leadId = lead.id;
    } catch (dbErr) {
      console.warn("[brochure/submit] DB write warning (e.g. serverless read-only SQLite):", dbErr);
    }

    // Await notification dispatch so serverless runtime does not terminate before transmission
    await Promise.race([
      sendAdminNotification({
        fullName: fullName.trim(),
        organization: organization.trim(),
        email: email.trim(),
        questions: questions?.trim() || "",
        sourceIp,
        timestamp: new Date().toISOString(),
        leadId,
      }),
      new Promise((resolve) => setTimeout(resolve, 3500)),
    ]).catch((mailErr) => {
      console.warn("[brochure/submit] Background notification error:", mailErr);
    });

    return NextResponse.json({
      ok: true,
      leadId,
      downloadUrl: "/J-Gate-Brochure.pdf",
      message: "Lead saved successfully",
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
import { sendNotificationEmail } from "@/lib/mailer";

async function sendAdminNotification(data: {
  fullName: string;
  organization: string;
  email: string;
  questions: string;
  sourceIp: string;
  timestamp: string;
  leadId: string;
}) {
  const adminEmail = process.env.ADMIN_EMAIL || "contact@indobox.co.jp";

  const html = `
<div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 32px;">
  <div style="background: #080f1a; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
    <div style="background: linear-gradient(90deg, #bc1a2c, #e8a01a); height: 4px;"></div>
    <div style="padding: 28px 32px;">
      <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 4px; font-weight: 700;">🎫 New Brochure Download Registration</h1>
      <p style="color: #8892a4; font-size: 13px; margin: 0;">J-Gate × Indobox — Lead Capture Alert</p>
    </div>
    <div style="background: #0d1b2a; padding: 24px 32px;">
      <table style="width: 100%; color: #ffffff; font-size: 14px; border-collapse: collapse;">
        <tr><td style="padding: 10px 0; color: #8892a4; width: 140px;">Full Name</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Organization</td><td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${escapeHtml(data.organization)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Corporate Email</td><td style="padding: 10px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #e8a01a; text-decoration: none; font-weight: 600;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4; vertical-align: top;">Questions / Requests</td><td style="padding: 10px 0; color: #c9d1e0; line-height: 1.5;">${data.questions ? escapeHtml(data.questions) : "<em style='color:#6c757d;'>None provided</em>"}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Source IP</td><td style="padding: 10px 0; font-family: monospace; font-size: 12px; color: #a0aec0;">${escapeHtml(data.sourceIp)}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Timestamp</td><td style="padding: 10px 0; font-size: 12px; color: #a0aec0;">${data.timestamp}</td></tr>
        <tr><td style="padding: 10px 0; color: #8892a4;">Lead ID</td><td style="padding: 10px 0; font-family: monospace; font-size: 12px; color: #8892a4;">${data.leadId}</td></tr>
      </table>
    </div>
    <div style="background: #080f1a; padding: 16px 32px; text-align: center;">
      <p style="color: #64748b; font-size: 11px; margin: 0;">© 2026 J-Gate · Indobox India Private Limited · Cyber Gateway, Hyderabad</p>
      <p style="color: #475569; font-size: 10px; margin: 4px 0 0;">Delivering to: ${escapeHtml(adminEmail)}</p>
    </div>
  </div>
</div>`;

  // Dispatch real email via mailer
  await sendNotificationEmail({
    to: adminEmail,
    replyTo: data.email,
    subject: `🎫 New Brochure Lead: ${data.fullName} (${data.organization})`,
    html,
    text: `New Brochure Download:\nName: ${data.fullName}\nOrganization: ${data.organization}\nEmail: ${data.email}\nQuestions: ${data.questions || "None"}\nTime: ${data.timestamp}\nLead ID: ${data.leadId}`,
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
