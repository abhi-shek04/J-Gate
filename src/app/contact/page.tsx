"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
  Globe2,
  MessageCircle,
  Languages,
  Clock,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   /contact — REAL PDF content (Slide 13)
   Premium editorial layout:
     1. PageHero — Connect With J-Gate / Unlocking new possibilities...
     2. Direct Channels — 2 cards (Email crimson + Phone saffron)
     3. Direct Inquiry Form — Name/Email/Subject/Message + Language
                              preference toggle + success state.
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
  lang: "EN" | "JP";
};

type FormErrors = Partial<Record<keyof ContactForm, string>>;

export default function ContactPage() {
  const { t, tx } = useI18n();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
    lang: "JP",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) {
      e.name = tx({ EN: "Please enter your name", JP: "お名前を入力してください" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = tx({ EN: "Please enter a valid email", JP: "有効なメールアドレスを入力してください" });
    }
    if (!form.message.trim()) {
      e.message = tx({ EN: "Please enter a message", JP: "メッセージを入力してください" });
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrors({
          message: tx({
            EN: "Failed to send message. Please try again.",
            JP: "送信に失敗しました。もう一度お試しください。",
          }),
        });
        setSubmitting(false);
        return;
      }
      setSubmitting(false);
      setSent(true);
    } catch {
      setErrors({
        message: tx({
          EN: "Network error. Please try again.",
          JP: "通信エラーが発生しました。もう一度お試しください。",
        }),
      });
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", subject: "", message: "", lang: "JP" });
    setErrors({});
  };

  const inputClass =
    "w-full rounded-md border bg-white/[0.05] px-4 py-3 font-inter text-base sm:text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-saffron";
  const labelClass = "mb-1.5 block font-inter text-[11px] font-semibold uppercase text-mist";

  return (
    <>
      <PageHero
        eyebrowKey="contact.eyebrow"
        titleNode={
          <>
            {tx({ EN: "Connect With", JP: "J-Gateに" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "J-Gate", JP: "繋がる" })}
            </span>
          </>
        }
        subtitleKey="contact.subtitle"
      />

      {/* ───────────────────────────────────────────────────────────
          Section 1 — Direct Channels (Email + Phone)
          2-card grid. Crimson accent for Email, saffron accent for Phone.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Direct Channels", JP: "直接連絡先" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.625rem,3vw,2.25rem)" }}
              >
                {tx({ EN: "Reach Us Directly", JP: "直接お問い合わせください" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.9rem,1.3vw,1.05rem)" }}
              >
                {tx({
                  EN: "Pick the channel that fits — email for written inquiries, phone for direct conversation. All support is provided in Japanese.",
                  JP: "用途に合わせてお選びください — 書面はメール、直接のお話は電話。すべて日本語でサポートいたします。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {/* Email card — crimson accent */}
            <Reveal variant="left">
              <article className="luxury-light-card card-sheen gold-hairline relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xl hover:shadow-2xl hover:border-crimson/40 transition-all duration-300">
                <div className="flex items-center gap-4.5">
                  <div className="icon-pod h-13 w-13 shrink-0">
                    <Mail className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span
                      className="font-inter text-[11px] font-bold uppercase tracking-wider text-crimson"
                    >
                      {tx({ EN: "Official Email", JP: "公式メール窓口" })}
                    </span>
                    <a
                      href="mailto:contact@indobox.co.jp"
                      className="mt-1 block break-all font-serif-jp text-[17px] font-bold text-ink transition-colors hover:text-crimson sm:text-[18px]"
                    >
                      contact@indobox.co.jp
                    </a>
                  </div>
                </div>
                {/* Japanese support note */}
                <p className="mt-6 flex items-start gap-2.5 rounded-2xl border border-crimson/15 bg-crimson/[0.04] p-3.5 font-inter text-[13px] leading-relaxed text-slate-700">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
                  {tx({
                    EN: "Feel free to consult about anything; support is provided in Japanese.",
                    JP: "何でもご相談ください — 常駐日本人スタッフが日本語で丁寧に対応いたします。",
                  })}
                </p>
              </article>
            </Reveal>

            {/* Phone card — saffron accent */}
            <Reveal variant="right" delay={80}>
              <article className="luxury-light-card card-sheen gold-hairline relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xl hover:shadow-2xl hover:border-saffron/40 transition-all duration-300">
                <div className="flex items-center gap-4.5">
                  <div className="icon-pod h-13 w-13 shrink-0 !bg-saffron/15 !border-saffron/30 !text-saffron-dark">
                    <Phone className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span
                      className="font-inter text-[11px] font-bold uppercase tracking-wider text-saffron-dark"
                    >
                      {tx({ EN: "Direct Phone", JP: "直通電話" })}
                    </span>
                    <a
                      href="tel:+919910360648"
                      className="mt-1 block font-serif-jp text-[17px] font-bold text-ink transition-colors hover:text-saffron-dark sm:text-[18px]"
                    >
                      +91-9910360648
                    </a>
                  </div>
                </div>
                {/* Direct lines — Tanji + Dheeraj */}
                <ul className="mt-5 space-y-2.5">
                  {[
                    {
                      label: { EN: "Tanji (Director)", JP: "丹治（ディレクター）" } as Bilingual,
                      value: "+91-9910360648",
                    },
                    {
                      label: { EN: "Dheeraj (Community Manager)", JP: "ディラジ（コミュニティマネージャー）" } as Bilingual,
                      value: "+91-98498 11543",
                    },
                  ].map((sl, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-slate-50 px-3.5 py-2.5 shadow-sm"
                    >
                      <span className="font-inter text-[12px] font-semibold text-slate-700">{tx(sl.label)}</span>
                      <a
                        href={`tel:${sl.value.replace(/[^0-9+]/g, "")}`}
                        className="font-mono text-[12px] font-bold text-crimson hover:underline"
                      >
                        {sl.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — Direct Inquiry Form
          Name/Email/Subject/Message + Language preference toggle.
          Success state on submit.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-6 text-center">
                <Eyebrow>{tx({ EN: "Direct Inquiry", JP: "直接お問い合わせ" })}</Eyebrow>
                <h2
                  className="mt-3 font-serif-jp font-bold leading-[1.2] text-ink"
                  style={{ fontSize: "clamp(1.625rem,3vw,2.25rem)" }}
                >
                  {tx({ EN: "Send Us a Message", JP: "メッセージをお送りください" })}
                </h2>
                <p className="mt-2 font-inter text-[13px] text-slate">
                  {tx({
                    EN: "We respond to every inquiry within 24 hours — in Japanese.",
                    JP: "すべてのお問い合わせに24時間以内に日本語でご返信します。",
                  })}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="luxury-glass-card card-sheen gold-hairline relative overflow-hidden rounded-3xl border border-white/15 bg-midnight/90 p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
                {sent ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                      <CheckCircle2 className="h-9 w-9" strokeWidth={1.5} />
                    </span>
                    <p className="mt-4 max-w-xs font-inter text-[14px] leading-relaxed text-white">
                      {t("contact.form.success")}
                    </p>
                    <button
                      onClick={reset}
                      className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 font-inter text-[13px] font-semibold text-white transition-all hover:bg-white/10"
                    >
                      {tx({ EN: "Send another", JP: "もう一度送信" })}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="c-name" className={labelClass}>
                          {t("contact.form.name")} <span className="text-crimson">*</span>
                        </label>
                        <input
                          id="c-name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder={tx({ EN: "Your full name", JP: "お名前" })}
                          className={cn(
                            inputClass,
                            errors.name ? "border-crimson" : "border-white/12"
                          )}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="mt-1 font-inter text-[11px] text-crimson">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="c-email" className={labelClass}>
                          {t("contact.form.email")} <span className="text-crimson">*</span>
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@company.co.jp"
                          className={cn(
                            inputClass,
                            errors.email ? "border-crimson" : "border-white/12"
                          )}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="mt-1 font-inter text-[11px] text-crimson">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-subject" className={labelClass}>
                        {t("contact.form.subject")}
                      </label>
                      <input
                        id="c-subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder={tx({
                          EN: "e.g. Membership / satellite plan inquiry",
                          JP: "例：メンバーシップ・サテライトプランのお問い合わせ",
                        })}
                        className={cn(inputClass, "border-white/12")}
                      />
                    </div>

                    <div>
                      <label htmlFor="c-message" className={labelClass}>
                        {t("contact.form.message")} <span className="text-crimson">*</span>
                      </label>
                      <textarea
                        id="c-message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={tx({
                          EN: "Tell us about your India expansion goals, your team, or which services you're considering...",
                          JP: "インド進出の目標、チーム、または検討中のサービスについてお聞かせください...",
                        })}
                        className={cn(
                          inputClass,
                          "resize-none",
                          errors.message ? "border-crimson" : "border-white/12"
                        )}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="mt-1 font-inter text-[11px] text-crimson">{errors.message}</p>
                      )}
                    </div>

                    {/* Language preference toggle */}
                    <div>
                      <label className={cn(labelClass, "flex items-center gap-1.5")}>
                        <Languages className="h-3.5 w-3.5 text-saffron" />
                        {tx({ EN: "Language preference", JP: "ご返信言語" })}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, lang: "EN" })}
                          aria-pressed={form.lang === "EN"}
                          className={cn(
                            "flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 font-inter text-[13px] font-semibold transition-all",
                            form.lang === "EN"
                              ? "border-saffron bg-saffron/15 text-saffron"
                              : "border-white/12 text-mist hover:border-white/25 hover:text-white"
                          )}
                        >
                          <Globe2 className="h-3.5 w-3.5" />
                          {tx({ EN: "Reply in English", JP: "英語で返信" })}
                        </button>
                        <button
                          type="button"
                          onClick={() => setForm({ ...form, lang: "JP" })}
                          aria-pressed={form.lang === "JP"}
                          className={cn(
                            "flex items-center justify-center gap-2 rounded-md border px-4 py-2.5 font-sans-jp text-[13px] font-semibold transition-all",
                            form.lang === "JP"
                              ? "border-saffron bg-saffron/15 text-saffron"
                              : "border-white/12 text-mist hover:border-white/25 hover:text-white"
                          )}
                        >
                          <span className="font-serif-jp">日</span>
                          {tx({ EN: "Reply in 日本語", JP: "日本語で返信" })}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-shine flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3.5 font-inter text-sm font-semibold text-white shadow-crimp transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          {tx({ EN: "Sending...", JP: "送信中..." })}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {t("contact.form.submit")}
                        </>
                      )}
                    </button>

                    <p className="flex items-center justify-center gap-1.5 pt-1 text-center font-inter text-[11px] text-mist/70">
                      <Clock className="h-3 w-3" />
                      {tx({
                        EN: "Bilingual support · 24-hour response · Mon-Fri JST",
                        JP: "バイリンガルサポート · 24時間以内返信 · 月-金 JST",
                      })}
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </>
  );
}
