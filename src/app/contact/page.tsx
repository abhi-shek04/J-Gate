"use client";

import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  Clock,
  ArrowRight,
  Globe2,
  Plane,
  MessageCircle,
  User,
  Sparkles,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { JapanFlag, IndiaFlag } from "@/components/jgate/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ============================================================
   /contact — REAL PDF content (Slide 13)
   Layout: PageHero → Header Message band → Two-column (Contact cards + Form | Map)
         → Response-time guarantee strip → Closing CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type ContactCard = {
  icon: typeof Mail;
  accent: "crimson" | "saffron";
  label: Bilingual;
  primary: string;
  primaryHref: string;
  hrefType: "mailto" | "tel";
  note?: Bilingual;
  subLines?: { label: Bilingual; value: string; tel?: boolean }[];
};

const CONTACT_CARDS: ContactCard[] = [
  {
    icon: Mail,
    accent: "crimson",
    label: { EN: "Email", JP: "メール" },
    primary: "contact@indobox.co.jp",
    primaryHref: "mailto:contact@indobox.co.jp",
    hrefType: "mailto",
    note: {
      EN: "Feel free to consult about anything — support is provided in Japanese.",
      JP: "何でもご相談ください — 日本語でサポートいたします。",
    },
  },
  {
    icon: Phone,
    accent: "saffron",
    label: { EN: "Phone", JP: "電話" },
    primary: "+91-9910360648",
    primaryHref: "tel:+919910360648",
    hrefType: "tel",
    subLines: [
      {
        label: { EN: "Tanji (Director)", JP: "丹治（ディレクター）" },
        value: "+91-9910360648",
        tel: true,
      },
      {
        label: { EN: "Dheeraj (Community Manager)", JP: "ディラジ（コミュニティマネージャー）" },
        value: "+91-98498 11543",
        tel: true,
      },
    ],
  },
];

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
    // Simulate brief network round-trip for premium UX feel
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
          Bilingual executive tagline strip.
         ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy py-12 md:py-16">
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
          Section 2 — Two-column: Contact cards + Form | Map
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container-jg relative">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT — Contact cards + Contact form */}
            <Reveal variant="left">
              <div className="space-y-5">
                {/* Contact info cards */}
                {CONTACT_CARDS.map((c) => {
                  const accentRing =
                    c.accent === "crimson"
                      ? "border-crimson/25 hover:border-crimson/45"
                      : "border-saffron/25 hover:border-saffron/45";
                  const accentBadge =
                    c.accent === "crimson"
                      ? "bg-crimson/15 text-saffron"
                      : "bg-saffron/15 text-saffron";
                  const accentIcon =
                    c.accent === "crimson" ? "text-crimson" : "text-saffron";
                  const accentIconBg =
                    c.accent === "crimson"
                      ? "bg-gradient-to-br from-crimson to-crimson-deep"
                      : "bg-gradient-to-br from-saffron to-[#c9881a]";
                  return (
                    <article
                      key={c.label.EN}
                      className={cn(
                        "glass-dark lift-card rounded-lg border p-6",
                        accentRing
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={cn(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-white shadow-card",
                            accentIconBg
                          )}
                        >
                          <c.icon className="h-6 w-6" strokeWidth={1.5} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "rounded px-2 py-0.5 font-inter text-[10px] font-bold uppercase",
                                accentBadge
                              )}
                              style={{ letterSpacing: "0.1em" }}
                            >
                              {tx(c.label)}
                            </span>
                          </div>
                          <a
                            href={c.primaryHref}
                            className="mt-2 block break-all font-serif-jp text-lg font-bold text-white transition-colors hover:text-saffron"
                          >
                            {c.primary}
                          </a>
                          {c.note && (
                            <p className="mt-2 font-inter text-[12.5px] leading-relaxed text-mist">
                              <MessageCircle className="mr-1.5 inline h-3.5 w-3.5" style={{ verticalAlign: "-2px" }} />
                              {tx(c.note)}
                            </p>
                          )}
                          {c.subLines && (
                            <ul className="mt-3 space-y-2 border-t border-white/10 pt-3">
                              {c.subLines.map((sl, i) => (
                                <li key={i} className="flex items-center justify-between gap-2">
                                  <span className="font-inter text-[12px] text-mist">
                                    {tx(sl.label)}
                                  </span>
                                  <a
                                    href={sl.tel ? `tel:${sl.value.replace(/\s/g, "")}` : "#"}
                                    className={cn(
                                      "font-inter text-[13px] font-semibold transition-colors hover:text-saffron",
                                      sl.tel ? "cursor-pointer text-white" : "cursor-default text-mist"
                                    )}
                                  >
                                    {sl.value}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}

                {/* Contact form card */}
                <div className="glass-dark rounded-lg p-6 sm:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-crimson/15 text-crimson">
                      <Send className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-serif-jp text-lg font-bold text-white">
                        {t("contact.form.title")}
                      </h3>
                      <p className="font-inter text-[12px] text-mist">
                        {tx({
                          EN: "We respond to every inquiry within 24 hours — in Japanese.",
                          JP: "すべてのお問い合わせに24時間以内に日本語でご返信します。",
                        })}
                      </p>
                    </div>
                  </div>

                  {sent ? (
                    <div className="flex flex-col items-center py-8 text-center">
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
              </div>
            </Reveal>

            {/* RIGHT — CSS map placeholder (Hyderabad focus) */}
            <Reveal variant="right" delay={120}>
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-lg border border-white/10 lg:min-h-[700px]">
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
                  <line
                    x1="0"
                    y1="35%"
                    x2="100%"
                    y2="32%"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="2"
                  />
                  <line
                    x1="0"
                    y1="68%"
                    x2="100%"
                    y2="72%"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="32%"
                    y1="0"
                    x2="36%"
                    y2="100%"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2"
                  />
                  <line
                    x1="70%"
                    y1="0"
                    x2="65%"
                    y2="100%"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1.5"
                  />
                </svg>

                {/* Connecting arc — Tokyo (top-left) to Hyderabad (bottom-right) */}
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

                {/* Tokyo pin — crimson, top-left (smaller — secondary base) */}
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

                {/* Hyderabad pin — saffron, bottom-right (PRIMARY base — large pulsing) */}
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

                {/* Corridor label — centered */}
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
                  <p className="font-inter text-[11px] font-semibold text-white">
                    📍 {tx({ EN: "Hyderabad — Primary Base", JP: "ハイデラバード — 主拠点" })}
                  </p>
                  <p className="font-inter text-[10px] text-mist">
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
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 3 — Operations Team strip (Slide 13 mini-summary)
          4-card horizontal strip linking to /team
         ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory-warm py-14 md:py-20">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <Eyebrow>
                {tx({ EN: "Who Will Respond", JP: "ご対応するチーム" })}
              </Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold leading-[1.2] text-ink"
                style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
              >
                {tx({
                  EN: "The J-Gate Operations Team — Reachable Directly",
                  JP: "J-Gate運営チーム — 直接お繋ぎします",
                })}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Daisuke TANJI",
                role: { EN: "Director", JP: "ディレクター" } as Bilingual,
                jpName: "丹治 大佑",
                phone: "+91-9910360648",
                flag: "🇯🇵",
              },
              {
                name: "Mariko HANAOKA",
                role: { EN: "Director", JP: "ディレクター" } as Bilingual,
                jpName: "花岡 真理子",
                flag: "🇯🇵",
              },
              {
                name: "Dheeraj YANNETI",
                role: { EN: "Community Manager", JP: "コミュニティマネージャー" } as Bilingual,
                jpName: "ディラジ・ヤンネティ",
                phone: "+91-98498 11543",
                flag: "🇮🇳",
              },
              {
                name: "Abhishek BUDURU",
                role: { EN: "Intern / Tech", JP: "インターン・技術" } as Bilingual,
                jpName: "アブシェーク・ブドゥル",
                flag: "🇮🇳",
              },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="lift-card flex h-full flex-col items-start rounded-lg border border-crimson/12 bg-pearl p-5 shadow-card">
                  <div className="flex w-full items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                      <User className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span className="text-xl" aria-hidden="true">{m.flag}</span>
                  </div>
                  <h3 className="mt-3 font-serif-jp text-[15px] font-bold leading-tight text-ink">
                    {m.name}
                  </h3>
                  <p className="font-sans-jp text-[11px] text-mist">{m.jpName}</p>
                  <p
                    className="mt-2 font-inter text-[10px] font-semibold uppercase text-crimson"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {tx(m.role)}
                  </p>
                  {m.phone && (
                    <a
                      href={`tel:${m.phone.replace(/\s/g, "")}`}
                      className="mt-3 flex items-center gap-1.5 font-inter text-[12px] font-medium text-slate transition-colors hover:text-saffron"
                    >
                      <Phone className="h-3 w-3 text-saffron" />
                      {m.phone}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 text-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all hover:gap-2.5"
              >
                {tx({ EN: "Meet the full team →", JP: "チーム全員を見る →" })}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Section 4 — Response-time guarantee strip
         ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory py-14 md:py-20">
        <div className="container-jg">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: Clock,
                  stat: "24h",
                  label: {
                    EN: "Average response time",
                    JP: "平均応答時間",
                  },
                },
                {
                  icon: Globe2,
                  stat: "JP",
                  label: {
                    EN: "All responses in Japanese",
                    JP: "すべて日本語で対応",
                  },
                },
                {
                  icon: Send,
                  stat: "100%",
                  label: {
                    EN: "Inquiries answered by a human",
                    JP: "すべての問い合わせを人が対応",
                  },
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-crimson/10 bg-pearl p-5 shadow-card"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-crimson/10 text-crimson">
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="font-serif-jp text-2xl font-bold text-ink">{s.stat}</div>
                    <div className="font-inter text-[12px] text-slate">
                      {tx(s.label)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className="font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Prefer to Read First?",
                  JP: "まずは資料をお読みになりたいですか？",
                })}
              </h2>
              <p
                className="mx-auto mt-4 font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.0625rem)" }}
              >
                {tx({
                  EN: "Download our brochure for a complete overview of services, membership plans, and partnership models.",
                  JP: "サービス、メンバーシッププラン、パートナーシップモデルの完全な概要をまとめたパンフレットをダウンロードしてください。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
