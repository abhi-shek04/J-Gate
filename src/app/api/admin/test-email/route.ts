import { NextResponse } from "next/server";
import { sendNotificationEmail, RECEIVER_EMAIL } from "@/lib/mailer";

/* ============================================================
   GET /api/admin/test-email
   - Verifies live email delivery to contact@indobox.co.jp
   ============================================================ */

export async function GET() {
  try {
    const timestamp = new Date().toISOString();
    const testResult = await sendNotificationEmail({
      to: RECEIVER_EMAIL,
      subject: `✅ [J-Gate Mail Test] Verification for ${RECEIVER_EMAIL}`,
      fields: {
        Status: "Active & Verified",
        Receiver_Email: RECEIVER_EMAIL,
        Timestamp: timestamp,
      },
      text: `J-Gate email notification test at ${timestamp} delivering to ${RECEIVER_EMAIL}`,
    });

    return NextResponse.json({
      status: testResult.ok ? "SUCCESS" : "WARNING",
      targetEmail: RECEIVER_EMAIL,
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
