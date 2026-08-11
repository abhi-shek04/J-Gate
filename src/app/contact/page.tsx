"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  ArrowRight,
  Globe2,
  Plane,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ============================================================
   /contact — REAL PDF content (Slide 13)
   CLEAN focused layout:
     1. PageHero
     2. Header Message — bilingual executive tagline
     3. Two-column: Contact cards (Email + Phone) + Direct Inquiry Form
     4. Map (CSS placeholder with Tokyo + Hyderabad pins)
     5. Closing CTA
   ZERO context mixing per card.
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
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
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  const inputClass =
    "w-full rounded-md border bg-white/[0.05] px-4 py-3 font-inter text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-saffron";
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
        subtitleKey="contact.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Section 1 — Header Message (Slide 13)
          Bilingual executive tagline band. SINGLE focused block.
         ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-14">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(232,160,26,0.10), transparent 65%)",
          }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Sparkles className="mx-auto h-7 w-7 text-saffron" strokeWidth={1.5} />
              <p
                className="mt-4 font-serif-jp font-bold leading-[1.3] text-white"
                style={{ fontSize: "clamp(1.5rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Unlocking new possibilities for your business through collaboration with India.",
                  JP: "インドとの連携で、貴社のビジネスに新たな可能性を。",
                })}
              </p>
              <p
                className="mx-auto mt-3 font-sans-jp font-medium leading-relaxed text-saffron-light"
                style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}
              >
                {tx({
                  EN: "— From the J-Gate Operations Team, Hyderabad",
                  JP: "— J-Gate運営チーム（ハイデラバード）より",
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 2 — Contact cards (Email + Phone)
          CLEAN 2-card grid. ZERO mixing with form/map.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>
                {tx({ EN: "Direct Channels", JP: "直接連絡先" })}
              </Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({ EN: "Reach Us Directly", JP: "直接お問い合わせください" })}
              </h2>
              <p
                className="mx-auto mt-3 max-w-2xl font-inter text-[14px] leading-relaxed text-slate"
              >
                {tx({
                  EN: "Pick the channel that fits — email for written inquiries, phone for direct conversation. All support is provided in Japanese.",
                  JP: "用途に合わせてお選びください — 書面はメール、直接のお話は電話。すべて日本語でサポートいたします。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {/* Email card */}
            <Reveal variant="left">
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-crimson/20 bg-pearl p-6 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-crimson to-crimson-deep" />
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-crimson-deep text-white shadow-card">
                    <Mail className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span
                      className="font-inter text-[10px] font-semibold uppercase text-crimson"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      {tx({ EN: "Email", JP: "メール" })}
                    </span>
                    <a
                      href="mailto:contact@indobox.co.jp"
                      className="mt-1 block break-all font-serif-jp text-[16px] font-bold text-ink transition-colors hover:text-crimson"
                    >
                      contact@indobox.co.jp
                    </a>
                  </div>
                </div>
                {/* Japanese support note */}
                <p className="mt-5 flex items-start gap-2 rounded-md border border-crimson/12 bg-crimson/[0.03] p-3 font-inter text-[12.5px] leading-relaxed text-slate">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
                  {tx({
                    EN: "Feel free to consult about anything; support is provided in Japanese.",
                    JP: "何でもご相談ください — 日本語でサポートいたします。",
                  })}
                </p>
              </article>
            </Reveal>

            {/* Phone card */}
            <Reveal variant="right" delay={80}>
              <article className="lift-card relative h-full overflow-hidden rounded-lg border border-saffron/20 bg-pearl p-6 shadow-card">
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-saffron to-[#c9881a] text-white shadow-card">
                    <Phone className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span
                      className="font-inter text-[10px] font-semibold uppercase text-saffron"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      {tx({ EN: "Phone", JP: "電話" })}
                    </span>
                    <a
                      href="tel:+919910360648"
                      className="mt-1 block font-serif-jp text-[16px] font-bold text-ink transition-colors hover:text-saffron"
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
                      className="flex items-center justify-between gap-2 rounded-md border border-saffron/12 bg-saffron/[0.03] px-3 py-2.5"
                    >
                      <span className="font-inter text-[12px] text-slate">
                        {tx(sl.label)}
                      </span>
                      <a
                        href={`tel:${sl.value.replace(/\s/g, "")}`}
                        className="font-inter text-[13px] font-semibold text-ink transition-colors hover:text-saffron"
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
          Section 3 — Direct Inquiry Form
          CLEAN form card (Name/Email/Subject/Message/Submit) with success state.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-6 text-center">
                <Eyebrow>
                  {tx({ EN: "Direct Inquiry", JP: "直接お問い合わせ" })}
                </Eyebrow>
                <h2
                  className="mt-3 font-serif-jp font-bold leading-[1.2] text-ink"
                  style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
                >
                  {tx({
                    EN: "Send Us a Message",
                    JP: "メッセージをお送りください",
                  })}
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
              <div className="glass-dark relative overflow-hidden rounded-lg border border-white/10 p-6 sm:p-7">
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
                          <p className="mt-1 font-inter text-[11px] text-crimson">
                            {errors.name}
                          </p>
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
                          <p className="mt-1 font-inter text-[11px] text-crimson">
                            {errors.email}
                          </p>
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
                        <p className="mt-1 font-inter text-[11px] text-crimson">
                          {errors.message}
                        </p>
                      )}
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
                      <Globe2 className="h-3 w-3" />
                      {tx({
                        EN: "Bilingual support available in English & 日本語",
                        JP: "英語・日本語のバイリンガルサポート対応",
                      })}
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 4 — Map placeholder (Tokyo + Hyderabad pins)
          Keep the existing CSS map. NO mixing with other content.
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto mb-6 max-w-3xl text-center">
              <Eyebrow light>
                {tx({ EN: "Two Cities, One Corridor", JP: "二つの都市、ひとつの回廊" })}
              </Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.2] text-white"
                style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
              >
                {tx({ EN: "Tokyo ↔ Hyderabad", JP: "東京 ↔ ハイデラバード" })}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-lg border border-white/10 sm:min-h-[480px]">
              <div className="grad-map absolute inset-0" aria-hidden="true" />

              {/* Grid pattern */}
              <svg
                className="absolute inset-0 h-full w-full opacity-30"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="contact-page-map-grid"
                    width="32"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 32 0 L 0 0 0 32"
                      fill="none"
                      stroke="rgba(232,160,26,0.4)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contact-page-map-grid)" />
                {/* Roads */}
                <line x1="0" y1="35%" x2="100%" y2="32%" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
                <line x1="0" y1="68%" x2="100%" y2="72%" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
                <line x1="32%" y1="0" x2="36%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="70%" y1="0" x2="65%" y2="100%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              </svg>

              {/* Connecting arc — Tokyo → Hyderabad */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 32 28 Q 50 50 70 70"
                  fill="none"
                  stroke="rgba(232,160,26,0.4)"
                  strokeWidth="0.4"
                  strokeDasharray="1.5 1"
                />
                <path
                  d="M 32 28 Q 50 50 70 70"
                  fill="none"
                  stroke="rgba(188,26,44,0.5)"
                  strokeWidth="0.25"
                />
              </svg>

              {/* Tokyo pin — smaller, crimson, secondary base */}
              <div className="absolute left-[28%] top-[26%] flex flex-col items-center">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-50" />
                  <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-crimson shadow-[0_0_0_4px_rgba(188,26,44,0.25)]">
                    <Building2 className="h-2 w-2 text-white" />
                  </span>
                </span>
                <span className="mt-2 whitespace-nowrap rounded-md bg-midnight/85 px-2.5 py-1 font-inter text-[11px] font-semibold text-white backdrop-blur-sm">
                  {tx({ EN: "Tokyo (Indobox HQ)", JP: "東京（Indobox本社）" })}
                </span>
                <span className="mt-1 font-inter text-[10px] text-mist">🇯🇵 Japan</span>
              </div>

              {/* Hyderabad pin — larger, saffron, PRIMARY base */}
              <div className="absolute right-[22%] bottom-[22%] flex flex-col items-center">
                <span className="relative flex h-6 w-6">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-70" />
                  <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-saffron shadow-[0_0_0_6px_rgba(232,160,26,0.30)]">
                    <Building2 className="h-3 w-3 text-ink" />
                  </span>
                </span>
                <span className="mt-2 whitespace-nowrap rounded-md bg-midnight/85 px-3 py-1.5 font-inter text-[12px] font-bold text-saffron backdrop-blur-sm">
                  {tx({ EN: "Hyderabad · J-Gate Base", JP: "ハイデラバード · J-Gate拠点" })}
                </span>
                <span className="mt-1 font-inter text-[10px] text-mist">🇮🇳 Cyber Gateway, Hitech City</span>
              </div>

              {/* Centered corridor label */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center gap-1 rounded-lg bg-midnight/70 px-4 py-2.5 backdrop-blur-sm">
                  <Plane className="h-4 w-4 text-saffron" />
                  <p className="font-serif-jp text-[12px] font-bold text-white">
                    {tx({ EN: "Japan–India Corridor", JP: "日印回廊" })}
                  </p>
                  <p className="font-inter text-[10px] text-mist">
                    {tx({ EN: "~7,500 km · 3.5 hour time difference", JP: "約7,500km · 時差3.5時間" })}
                  </p>
                </div>
              </div>

              {/* Bottom-left info chip */}
              <div className="absolute bottom-4 left-4 rounded-md bg-midnight/80 px-3 py-2 backdrop-blur">
                <p className="flex items-center gap-1.5 font-inter text-[11px] font-semibold text-white">
                  <MapPin className="h-3.5 w-3.5 text-saffron" />
                  {tx({ EN: "Hyderabad — Primary Base", JP: "ハイデラバード — 主拠点" })}
                </p>
                <p className="mt-0.5 font-inter text-[10px] text-mist">
                  {tx({ EN: "Launched June 2026 · Cyber Gateway", JP: "2026年6月開設 · サイバーゲートウェイ" })}
                </p>
              </div>

              {/* Top-right compass */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-midnight/60 backdrop-blur">
                <span className="font-serif-jp text-[14px] font-bold text-saffron">N</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className="font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Prefer to Read First?",
                  JP: "まずは資料をお読みになりたいですか？",
                })}
              </h2>
              <p
                className="mx-auto mt-3 font-inter text-[14px] leading-relaxed text-slate"
              >
                {tx({
                  EN: "Download our brochure for a complete overview of services, membership plans, and partnership models.",
                  JP: "サービス、メンバーシッププラン、パートナーシップモデルの完全な概要をまとめたパンフレットをダウンロードしてください。",
                })}
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/auth/brochure"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Download Brochure", JP: "パンフレットをダウンロード" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-md border border-crimson/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-crimson transition-all hover:-translate-y-0.5 hover:bg-crimson/5"
                >
                  {tx({ EN: "View Pricing Plans", JP: "料金プランを見る" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
