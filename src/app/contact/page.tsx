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
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { JapanFlag, IndiaFlag } from "@/components/jgate/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ============================================================
   /contact — Contact Us
   Layout: PageHero → Two-column (Offices + Form | Map)
         → Response-time guarantee strip
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type Office = {
  flag: React.ReactNode;
  nameKey: string;
  city: Bilingual;
  address: string;
  email: string;
  phone: string;
  hours: Bilingual;
  accent: "crimson" | "saffron";
};

const OFFICES: Office[] = [
  {
    flag: <JapanFlag className="h-6 w-9" />,
    nameKey: "contact.tokyo",
    city: { EN: "Tokyo, Japan", JP: "東京・日本" },
    address: "1-2-3 Marunouchi, Chiyoda City, Tokyo 100-0005, Japan",
    email: "tokyo@j-gate.com",
    phone: "+81 3-1234-5678",
    hours: {
      EN: "Mon–Fri · 09:00–18:00 JST",
      JP: "月〜金 · 9:00〜18:00（日本時間）",
    },
    accent: "crimson",
  },
  {
    flag: <IndiaFlag className="h-6 w-9" />,
    nameKey: "contact.india",
    city: { EN: "Hyderabad, India", JP: "ハイデラバード・インド" },
    address: "Cyber Gateway, Hitech City, Hyderabad, Telangana 500081, India",
    email: "hyderabad@j-gate.com",
    phone: "+91 40-1234-5678",
    hours: {
      EN: "Mon–Sat · 09:30–18:30 IST",
      JP: "月〜土 · 9:30〜18:30（インド時間）",
    },
    accent: "saffron",
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
        subtitleKey="contact.subtitle"
      />

      {/* ───────────────────────────────────────────────────────────
          Two-column: Offices + Form | Map
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-navy">
        <div className="pattern-asanoha-navy absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container-jg relative">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT — Office cards + Contact form */}
            <Reveal variant="left">
              <div className="space-y-5">
                {/* Office cards */}
                {OFFICES.map((o) => {
                  const accentRing =
                    o.accent === "crimson"
                      ? "border-crimson/20 hover:border-crimson/40"
                      : "border-saffron/20 hover:border-saffron/40";
                  const accentBadge =
                    o.accent === "crimson"
                      ? "bg-crimson/15 text-saffron"
                      : "bg-saffron/15 text-saffron";
                  const accentIcon =
                    o.accent === "crimson" ? "text-crimson" : "text-saffron";
                  return (
                    <article
                      key={o.nameKey}
                      className={cn(
                        "glass-dark lift-card rounded-lg border p-6",
                        accentRing
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="overflow-hidden rounded shadow-card">
                            {o.flag}
                          </span>
                          <div>
                            <h3 className="font-serif-jp text-base font-bold text-white">
                              {t(o.nameKey)}
                            </h3>
                            <p className="font-inter text-[12px] text-mist">
                              {tx(o.city)}
                            </p>
                          </div>
                        </div>
                        <span
                          className={cn(
                            "rounded px-2 py-0.5 font-inter text-[10px] font-bold uppercase",
                            accentBadge
                          )}
                          style={{ letterSpacing: "0.1em" }}
                        >
                          HQ
                        </span>
                      </div>

                      <div className="mt-4 space-y-2.5 font-inter text-[13px] text-mist">
                        <p className="flex items-start gap-2.5">
                          <MapPin className={cn("mt-0.5 h-4 w-4 shrink-0", accentIcon)} />
                          <span>{o.address}</span>
                        </p>
                        <p className="flex items-center gap-2.5">
                          <Mail className={cn("h-4 w-4 shrink-0", accentIcon)} />
                          <a
                            href={`mailto:${o.email}`}
                            className="transition-colors hover:text-saffron"
                          >
                            {o.email}
                          </a>
                        </p>
                        <p className="flex items-center gap-2.5">
                          <Phone className={cn("h-4 w-4 shrink-0", accentIcon)} />
                          <a
                            href={`tel:${o.phone.replace(/\s/g, "")}`}
                            className="transition-colors hover:text-saffron"
                          >
                            {o.phone}
                          </a>
                        </p>
                        <p className="flex items-center gap-2.5">
                          <Clock className={cn("h-4 w-4 shrink-0", accentIcon)} />
                          <span>{tx(o.hours)}</span>
                        </p>
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
                          EN: "We respond to every inquiry within 24 hours.",
                          JP: "すべてのお問い合わせに24時間以内にご返信します。",
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
                            placeholder="you@company.com"
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
                            EN: "e.g. Engineering recruitment inquiry",
                            JP: "例：エンジニア採用のお問い合わせ",
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
                            EN: "Tell us about your goals, your team, or the role you're hiring for...",
                            JP: "目標、チーム、または採用したい役職についてお聞かせください...",
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

            {/* RIGHT — CSS map placeholder */}
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

                {/* Connecting arc — Japan to India corridor */}
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

                {/* Tokyo pin — crimson, top-left */}
                <div className="absolute left-[28%] top-[26%] flex flex-col items-center">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-60" />
                    <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-crimson shadow-[0_0_0_4px_rgba(188,26,44,0.25)]">
                      <Building2 className="h-2 w-2 text-white" />
                    </span>
                  </span>
                  <span className="mt-2 whitespace-nowrap rounded-md bg-midnight/85 px-2.5 py-1 font-inter text-[11px] font-semibold text-white backdrop-blur-sm">
                    {tx({ EN: "Tokyo Office", JP: "東京オフィス" })}
                  </span>
                  <span className="mt-1 font-inter text-[10px] text-mist">🇯🇵 +81 3-1234-5678</span>
                </div>

                {/* Hyderabad pin — saffron, bottom-right */}
                <div className="absolute right-[26%] bottom-[26%] flex flex-col items-center">
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-60" />
                    <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-saffron shadow-[0_0_0_4px_rgba(232,160,26,0.25)]">
                      <Building2 className="h-2 w-2 text-ink" />
                    </span>
                  </span>
                  <span className="mt-2 whitespace-nowrap rounded-md bg-midnight/85 px-2.5 py-1 font-inter text-[11px] font-semibold text-white backdrop-blur-sm">
                    {tx({ EN: "Hyderabad Office", JP: "ハイデラバードオフィス" })}
                  </span>
                  <span className="mt-1 font-inter text-[10px] text-mist">🇮🇳 +91 40-1234-5678</span>
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
                    📍 {tx({ EN: "Tokyo & Hyderabad", JP: "東京・ハイデラバード" })}
                  </p>
                  <p className="font-inter text-[10px] text-mist">
                    {tx({ EN: "Two offices, one corridor", JP: "二つのオフィス、一つの回廊" })}
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
          Response-time guarantee strip
         ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory-warm py-14 md:py-20">
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
                  stat: "2",
                  label: {
                    EN: "Offices across the corridor",
                    JP: "回廊をまたぐオフィス",
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
      <section className="section-pad bg-ivory">
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
                  EN: "Download our brochure for a complete overview of services, track record, and partnership models.",
                  JP: "サービス、実績、パートナーシップモデルの完全な概要をまとめたパンフレットをダウンロードしてください。",
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
                  href="/services"
                  className="rounded-md border border-crimson/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-crimson transition-all hover:-translate-y-0.5 hover:bg-crimson/5"
                >
                  {tx({ EN: "Explore Services", JP: "サービスを見る" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
