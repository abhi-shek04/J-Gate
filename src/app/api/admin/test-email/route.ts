import { NextRequest, NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

/* ============================================================
   GET /api/admin/test-email
   - Diagnostic tool to test and verify Web3Forms delivery
   ============================================================ */

export async function GET(req: NextRequest) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || "contact@indobox.co.jp";
    const hasWeb3Key = !!(process.env.WEB3FORMS_KEY || "a0134f9d-faa9-4ad4-bbf9-e9de36d0d6a2");

    const testResult = await sendNotificationEmail({
      to: adminEmail,
      subject: `🧪 [J-Gate Web3Forms Test] Direct Lead Verification`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background: #080f1a; color: #ffffff; border-radius: 12px;">
          <h2 style="color: #4ade80;">✅ J-Gate Web3Forms Dispatch Active!</h2>
          <p style="color: #cbd5e1; font-size: 14px;">This is a test notification verifying Web3Forms lead dispatch directly to ${adminEmail}.</p>
          <hr style="border: 0; border-top: 1px solid #334155; margin: 16px 0;" />
          <p style="font-size: 13px; color: #94a3b8;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p style="font-size: 13px; color: #94a3b8;"><strong>Target Admin:</strong> ${adminEmail}</p>
        </div>
      `,
      text: `J-Gate Web3Forms Lead Dispatch active at ${new Date().toISOString()} delivering to ${adminEmail}`,
    });

    return NextResponse.json({
      status: testResult.ok ? "SUCCESS" : "WARNING",
      targetEmail: adminEmail,
      configuredChannel: {
        web3FormsKeyActive: hasWeb3Key,
      },
      dispatchResult: testResult,
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
