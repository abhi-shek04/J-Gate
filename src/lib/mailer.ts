import nodemailer from "nodemailer";
import dns from "node:dns/promises";

/* ============================================================
   J-Gate Unified Mailer
   - Sends real emails to contact@indobox.co.jp
   - Supports configured SMTP (Gmail, Google Workspace, AWS SES, Brevo, etc.)
   - If SMTP credentials are not present, resolves the recipient MX server
     (e.g., smtp.google.com for indobox.co.jp) and delivers directly via port 25!
   ============================================================ */

export type SendEmailOptions = {
  to?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
};

export async function sendNotificationEmail(options: SendEmailOptions) {
  const adminEmail = options.to || process.env.ADMIN_EMAIL || "contact@indobox.co.jp";
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || `"J-Gate Portal" <noreply@j-gate.com>`;

  let transporter: nodemailer.Transporter;

  if (smtpHost && smtpUser && smtpPass) {
    // 1. Authenticated SMTP Transporter
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: smtpUser, pass: smtpPass },
    });
  } else {
    // 2. Direct MX Delivery Transporter (connects directly to recipient MX server)
    const domain = adminEmail.split("@")[1] || "indobox.co.jp";
    let mxHost = "smtp.google.com"; // default for indobox.co.jp
    try {
      const records = await dns.resolveMx(domain);
      if (records && records.length > 0) {
        records.sort((a, b) => a.priority - b.priority);
        mxHost = records[0].exchange;
      }
    } catch (err) {
      console.warn(`[mailer] MX resolution for ${domain} failed, using ${mxHost}:`, err);
    }

    transporter = nodemailer.createTransport({
      host: mxHost,
      port: 25,
      secure: false,
      tls: { rejectUnauthorized: false },
    });
  }

  try {
    const info = await transporter.sendMail({
      from: smtpFrom,
      to: adminEmail,
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    console.log(`[mailer] Email delivered to ${adminEmail} (MsgID: ${info.messageId}, Status: ${info.response})`);
    return { ok: true, info };
  } catch (err: any) {
    console.error(`[mailer] Error sending email to ${adminEmail}:`, err.message);
    return { ok: false, error: err.message };
  }
}
