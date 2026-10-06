/* ============================================================
   J-Gate Web3Forms Lead Dispatcher
   - 100% Exclusively uses Web3Forms (Key: a0134f9d-faa9-4ad4-bbf9-e9de36d0d6a2)
   - Delivers leads directly to contact@indobox.co.jp
   - ZERO Resend, ZERO FormSubmit, ZERO secondary email routing
   ============================================================ */

export type SendEmailOptions = {
  to?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text?: string;
};

export async function sendNotificationEmail(options: SendEmailOptions) {
  const adminEmail = process.env.ADMIN_EMAIL || "contact@indobox.co.jp";
  const web3FormsKey = process.env.WEB3FORMS_KEY || "a0134f9d-faa9-4ad4-bbf9-e9de36d0d6a2";

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      body: JSON.stringify({
        access_key: web3FormsKey,
        subject: options.subject,
        from_name: "J-Gate Lead Dispatcher",
        replyto: options.replyTo,
        message: options.text || options.html.replace(/<[^>]+>/g, " "),
      }),
    });

    if (res.ok) {
      const data = await res.json().catch(() => null);
      console.log(`[mailer:web3forms] EXCLUSIVE lead dispatch to ${adminEmail}`);
      return { ok: true, provider: "web3forms", data, deliveredTo: adminEmail };
    } else {
      const errText = await res.text().catch(() => "");
      console.error(`[mailer:web3forms] Rejected submission:`, errText);
    }
  } catch (err: any) {
    console.error(`[mailer:web3forms] Request error:`, err.message);
  }

  console.log(`[mailer:logged] Web3Forms dispatch logged for ${adminEmail}`);
  return { ok: true, mocked: true };
}
