import nodemailer from "nodemailer";

/* ============================================================
   J-Gate Unified Mailer
   - Sends real emails to contact@indobox.co.jp when SMTP is configured
   - Configurable via SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT
   - If SMTP is not configured, logs cleanly and returns instantly (<1ms)
     without blocking on dead port 25 MX connections.
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
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpFrom = process.env.SMTP_FROM || `"J-Gate Portal" <noreply@j-gate.com>`;

  // 1. If SMTP credentials are configured, send real email with strict timeout
  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
        connectionTimeout: 4000,
        greetingTimeout: 4000,
        socketTimeout: 5000,
      });

      const info = await transporter.sendMail({
        from: smtpFrom,
        to: adminEmail,
        replyTo: options.replyTo,
        subject: options.subject,
        html: options.html,
        text: options.text,
      });

      console.log(`[mailer] Email delivered to ${adminEmail} (MsgID: ${info.messageId})`);
      return { ok: true, info };
    } catch (err: any) {
      console.error(`[mailer] SMTP error sending email to ${adminEmail}:`, err.message);
      return { ok: false, error: err.message };
    }
  }

  // 2. Mock/Dev logging fallback (instant, 0 delay, no blocking port 25 timeouts)
  console.log(`[mailer:mock] Admin notification for ${adminEmail} | Subject: "${options.subject}"`);
  return { ok: true, mocked: true };
}

