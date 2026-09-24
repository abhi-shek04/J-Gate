import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

/* ============================================================
   GET /api/admin/test-email
   - Diagnostic tool to test and verify email delivery
   - Returns live response from email service (Resend / SMTP)
   ============================================================ */

export async function GET(req: NextRequest) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || "contact@indobox.co.jp";
    const hasResend = !!process.env.RESEND_API_KEY;
    const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
    const hasWebhook = !!process.env.LEAD_WEBHOOK_URL;

    const testResult = await sendNotificationEmail({
      to: adminEmail,
      subject: `🧪 [J-Gate System Test] Email Dispatch Verification`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background: #080f1a; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #4ade80;">✅ J-Gate Email System Active!</h2>
          <p style="color: #cbd5e1; font-size: 14px;">This is a test notification verifying that lead capture notifications are actively dispatched.</p>
          <hr style="border: 0; border-top: 1px solid #334155; margin: 16px 0;" />
          <p style="font-size: 13px; color: #94a3b8;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p style="font-size: 13px; color: #94a3b8;"><strong>Target Admin:</strong> ${adminEmail}</p>
        </div>
      `,
      text: `J-Gate Test Email: Email system active at ${new Date().toISOString()} delivering to ${adminEmail}`,
    });

    return NextResponse.json({
      status: testResult.ok ? "SUCCESS" : "WARNING",
      targetEmail: adminEmail,
      configuredChannels: {
        resendApiKeySet: hasResend,
        smtpConfigured: hasSmtp,
        webhookConfigured: hasWebhook,
      },
      dispatchResult: testResult,
      instructions: testResult.ok
        ? "Email dispatched! Check your inbox (or spam/updates folder) at the target email or resend account email."
        : "Check Vercel logs or configure RESEND_API_KEY or SMTP_HOST in Vercel Environment Variables.",
    });
  } catch (err: any) {
    console.error("[admin/test-email] Error:", err);
    return NextResponse.json(
      {
        status: "ERROR",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
