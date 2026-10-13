import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendNotificationEmail, RECEIVER_EMAIL } from "@/lib/mailer";

/* ============================================================
   POST /api/brochure/submit
   - Validates brochure download lead input
   - Saves to database (BrochureLead)
   - Dispatches email notification directly to contact@indobox.co.jp
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

    try {
      const mailRes = await sendNotificationEmail({
        to: RECEIVER_EMAIL,
        replyTo: email.trim(),
        subject: `🎫 [J-Gate Brochure Download] ${fullName.trim()} (${organization.trim()})`,
        fields: {
          Form_Type: "Brochure Download Registration",
          Full_Name: fullName.trim(),
          Organization: organization.trim(),
          Email: email.trim(),
          Questions_or_Requests: questions?.trim() || "None provided",
          Submitted_At: timestamp,
          Lead_ID: leadId,
        },
        text: `New Brochure Download\nName: ${fullName.trim()}\nOrganization: ${organization.trim()}\nEmail: ${email.trim()}\nQuestions: ${questions?.trim() || "None"}\nTime: ${timestamp}`,
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
