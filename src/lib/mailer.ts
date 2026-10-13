/* ============================================================
   J-Gate Mail Automation — Clean Fresh Implementation
   Receiver Email: contact@indobox.co.jp
   Handles:
     1. Contact Form Inquiries (/api/contact/submit)
     2. Brochure Download Leads (/api/brochure/submit)
   ============================================================ */

export const RECEIVER_EMAIL = "contact@indobox.co.jp";

export type SendEmailOptions = {
  to?: string;
  replyTo?: string;
  subject: string;
  html?: string;
  text?: string;
  fields?: Record<string, string>;
};

/**
 * Browser-side fallback lead sender to contact@indobox.co.jp
 */
export async function sendClientLeadToInbox(payload: {
  subject: string;
  replyTo: string;
  fields: Record<string, string>;
}): Promise<boolean> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(RECEIVER_EMAIL)}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: payload.subject,
        _replyto: payload.replyTo,
        _template: "table",
        _captcha: "false",
        ...payload.fields,
      }),
    });

    if (res.ok) {
      const data = await res.json().catch(() => null);
      if (data?.success === "true" || data?.success === true) {
        return true;
      }
    }
  } catch (err) {
    console.warn("[mailer:client] Browser dispatch warning:", err);
  }

  return false;
}

/**
 * Server-side email dispatcher delivering to contact@indobox.co.jp
 */
export async function sendNotificationEmail(options: SendEmailOptions) {
  const targetEmail = RECEIVER_EMAIL;
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;

  const origins = ["https://j-gate.asia", "https://j-gate.vercel.app"];

  for (const origin of origins) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Origin: origin,
          Referer: `${origin}/`,
        },
        body: JSON.stringify({
          _subject: options.subject,
          _replyto: options.replyTo,
          _template: "table",
          _captcha: "false",
          ...(options.fields || {
            Message: options.text || (options.html ? options.html.replace(/<[^>]+>/g, " ") : ""),
          }),
        }),
      });

      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (data?.success === "true" || data?.success === true) {
          console.log(`[mailer] Delivered to ${targetEmail} (origin: ${origin})`);
          return { ok: true, deliveredTo: targetEmail, provider: "formsubmit", data };
        }
      }
    } catch (err: any) {
      console.warn(`[mailer] Dispatch attempt (${origin}) warning:`, err?.message);
    }
  }

  return { ok: false, deliveredTo: targetEmail };
}
