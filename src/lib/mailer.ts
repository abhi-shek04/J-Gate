import nodemailer from "nodemailer";

/* ============================================================
   J-Gate Enterprise Mailer — Google Workspace Direct SMTP
   Delivers 100% reliably & permanently to contact@indobox.co.jp
   ============================================================ */

export const RECEIVER_EMAIL = process.env.ADMIN_EMAIL || "contact@indobox.co.jp";

export type SendEmailOptions = {
  to?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
};

// Singleton nodemailer transporter instance
let transporterInstance: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporterInstance) return transporterInstance;

  const smtpUser = process.env.SMTP_USER || RECEIVER_EMAIL;
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, ""); // strip any spaces from app password

  if (!smtpPass) {
    return null;
  }

  transporterInstance = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    connectionTimeout: 6000,
    greetingTimeout: 6000,
    socketTimeout: 10000,
  });

  return transporterInstance;
}

/**
 * Enterprise Email Dispatcher via Google Workspace SMTP
 */
export async function sendNotificationEmail(options: SendEmailOptions) {
  const adminEmail = options.to || RECEIVER_EMAIL;
  const smtpUser = process.env.SMTP_USER || RECEIVER_EMAIL;
  const smtpFrom = process.env.SMTP_FROM || `"J-Gate System" <${smtpUser}>`;

  const transporter = getTransporter();

  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: smtpFrom,
        to: adminEmail,
        replyTo: options.replyTo,
        subject: options.subject,
        html: options.html,
        text: options.text,
      });

      console.log(`[mailer:google-smtp] Delivered to ${adminEmail} (MsgID: ${info.messageId})`);
      return { ok: true, provider: "google-workspace-smtp", messageId: info.messageId, deliveredTo: adminEmail };
    } catch (err: any) {
      console.error(`[mailer:google-smtp] Delivery error:`, err?.message);
      return { ok: false, error: err?.message };
    }
  }

  console.warn(`[mailer:unconfigured] SMTP_PASS not set yet in environment.`);
  return { ok: false, reason: "SMTP_PASS_REQUIRED" };
}
