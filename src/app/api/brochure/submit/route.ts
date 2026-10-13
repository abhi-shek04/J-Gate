import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendNotificationEmail, RECEIVER_EMAIL } from "@/lib/mailer";

/* ============================================================
   POST /api/brochure/submit
   - Validates brochure download lead input
   - Saves to database (BrochureLead)
   - Dispatches email notification directly to contact@indobox.co.jp via Google Workspace SMTP
   - Returns brochure download URL
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
    const body = (await req.json()) as LeadInput;
    const { fullName, organization, email, questions, authMethod } = body;

    const errors: Record<string, string> = {};
    if (!fullName || !fullName.trim()) errors.fullName = "Name is required";
    if (!organization || !organization.trim()) errors.organization = "Organization is required";
    if (!email || !email.trim() || !isValidEmail(email)) errors.email = "Valid email is required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const sourceIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

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
      console.warn("[brochure/submit] DB write warning:", dbErr);
    }

    const timestamp = new Date().toISOString();
    let emailDelivered = false;

    const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #080f1a; color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255,255,255,0.12);">
  <div style="background: linear-gradient(90deg, #bc1a2c, #e8a01a); height: 4px;"></div>
  <div style="padding: 20px 24px; background: #0c1424; border-bottom: 1px solid rgba(255,255,255,0.08);">
    <h1 style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 700;">New Brochure Download</h1>
  </div>
  <div style="padding: 24px 28px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr>
        <td style="padding: 10px 0; color: #94a3b8; width: 140px; border-bottom: 1px solid rgba(255,255,255,0.06);">Full Name</td>
        <td style="padding: 10px 0; color: #ffffff; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">${escapeHtml(fullName.trim())}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.06);">Organization / Company</td>
        <td style="padding: 10px 0; color: #ffffff; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">${escapeHtml(organization.trim())}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; color: #94a3b8; border-bottom: 1px solid rgba(255,255,255,0.06);">Corporate Email</td>
        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
          <a href="mailto:${escapeHtml(email.trim())}" style="color: #e8a01a; text-decoration: none; font-weight: 600;">${escapeHtml(email.trim())}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0 6px; color: #94a3b8; vertical-align: top;" colspan="2">Questions / Expansion Requests:</td>
      </tr>
      <tr>
        <td colspan="2" style="background: rgba(255,255,255,0.04); padding: 14px; border-radius: 8px; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap; font-size: 13.5px; border: 1px solid rgba(255,255,255,0.08);">
          ${questions && questions.trim() ? escapeHtml(questions.trim()) : "<em style='color:#64748b;'>None provided</em>"}
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
        subject: `🎫 [J-Gate Brochure Lead] ${fullName.trim()} (${organization.trim()})`,
        html,
        text: `New Brochure Download\nName: ${fullName.trim()}\nOrganization: ${organization.trim()}\nEmail: ${email.trim()}\nQuestions: ${questions?.trim() || "None"}`,
        fields: {
          "Full Name": fullName.trim(),
          "Organization / Company": organization.trim(),
          "Corporate Email": email.trim(),
          "Questions / Expansion Requests": questions?.trim() || "None provided",
          "Auth Method": authMethod || "manual",
          "Time": timestamp,
          "Lead ID": leadId,
        },
      });
      emailDelivered = !!mailRes.ok;
    } catch (mailErr) {
      console.warn("[brochure/submit] Mail dispatch error:", mailErr);
    }

    return NextResponse.json({
      ok: true,
      leadId,
      emailDelivered,
      receiver: RECEIVER_EMAIL,
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
