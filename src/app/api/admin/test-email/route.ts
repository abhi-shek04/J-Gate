import { NextResponse } from "next/server";
import { sendNotificationEmail, RECEIVER_EMAIL } from "@/lib/mailer";

/* ============================================================
   GET /api/admin/test-email
   - Verifies live Google Workspace SMTP email delivery to contact@indobox.co.jp
   ============================================================ */

export async function GET() {
  try {
    const timestamp = new Date().toISOString();
    const hasSmtpPass = !!process.env.SMTP_PASS;

    const testResult = await sendNotificationEmail({
      to: RECEIVER_EMAIL,
      subject: `🧪 [J-Gate Google Workspace Test] Live Verification for ${RECEIVER_EMAIL}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background: #080f1a; color: #ffffff; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15);">
          <h2 style="color: #4ade80; margin: 0 0 8px;">✅ Google Workspace SMTP Active!</h2>
          <p style="color: #cbd5e1; font-size: 14px; margin: 0;">This verifies that J-Gate lead notifications are officially sent through Google Workspace directly to ${RECEIVER_EMAIL}.</p>
          <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 16px 0;" />
          <p style="font-size: 13px; color: #94a3b8; margin: 4px 0;"><strong>Timestamp:</strong> ${timestamp}</p>
          <p style="font-size: 13px; color: #94a3b8; margin: 4px 0;"><strong>Receiver:</strong> ${RECEIVER_EMAIL}</p>
        </div>
      `,
      text: `J-Gate Google Workspace SMTP active at ${timestamp} delivering to ${RECEIVER_EMAIL}`,
    });

    return NextResponse.json({
      status: testResult.ok ? "SUCCESS" : "NEEDS_CONFIGURATION",
      targetEmail: RECEIVER_EMAIL,
      smtpPassConfigured: hasSmtpPass,
      dispatchResult: testResult,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "ERROR",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
