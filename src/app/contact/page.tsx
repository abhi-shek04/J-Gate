"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Copy,
  Check,
  MapPin,
  Building2,
  FileText,
  Users,
  Handshake,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Briefcase,
  Lock,
  BadgeCheck,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   /contact — Executive Japan Desk & Bilateral Consultation Console
   Industrial-Grade, Institutional Layout with Unified Light/Dark
   Executive Theme & Direct Resident Corridors
   ============================================================ */

type ContactForm = {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const CONSULTATION_TRACKS = [
  {
    id: "workspace",
    icon: Building2,
    badge: { EN: "Turnkey Space", JP: "即時入居可" },
    label: { EN: "Workspace & Suites", JP: "オフィス・専用個室" },
    desc: {
      EN: "Dedicated desks, 4–20 pax suites & satellite hubs",
      JP: "専用デスク・4〜20席個室・サテライト拠点",
    },
    subject: {
      EN: "Inquiry: Workspace & Private Office Suites",
      JP: "オフィス・専用個室についてのお問い合わせ",
    },
  },
  {
    id: "incorporation",
    icon: FileText,
    badge: { EN: "Legal & RBI", JP: "会社設立・法務" },
    label: { EN: "Legal Entity & Banking", JP: "法人設立・銀行口座" },
    desc: {
      EN: "India Pvt Ltd incorporation, GST & ICICI/HDFC accounts",
      JP: "インド法人設立・各種許認可・銀行口座開設",
    },
    subject: {
      EN: "Inquiry: India Entity Incorporation & Banking",
      JP: "インド法人設立・口座開設のご相談",
    },
  },
  {
    id: "talent",
    icon: Users,
    badge: { EN: "Tech Staffing", JP: "IT人材採用" },
    label: { EN: "Bilingual IT Talent", JP: "ITエンジニア・採用" },
    desc: {
      EN: "Senior developers, AI engineers & bilingual PMs",
      JP: "シニアエンジニア・AI技術者・バイリンガルPM",
    },
    subject: {
      EN: "Inquiry: IT Talent & Bilingual Team Staffing",
      JP: "ITエンジニア・バイリンガル人材採用について",
    },
  },
  {
    id: "tour",
    icon: Handshake,
    badge: { EN: "VIP Inspection", JP: "現地視察" },
    label: { EN: "Delegation & Site Tour", JP: "現地視察・オフィス見学" },
    desc: {
      EN: "Private Hyderabad campus tour & bilateral briefing",
      JP: "ハイデラバード現地視察・施設案内・個別ブリーフィング",
    },
    subject: {
      EN: "Inquiry: Hyderabad Delegation Visit & Facility Tour",
      JP: "ハイデラバード現地視察・オフィス見学のお申し込み",
    },
  },
];

export default function ContactPage() {
  const { t, tx, lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [inquiryId, setInquiryId] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@indobox.co.jp");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleTrackSelect = (track: (typeof CONSULTATION_TRACKS)[0]) => {
    setActiveTrack(track.id);
    setForm((prev) => ({
      ...prev,
      subject: tx(track.subject),
    }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) {
      e.name = tx({ EN: "Please enter your full name & title", JP: "お名前・役職を入力してください" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = tx({ EN: "Please enter a valid corporate email", JP: "有効な貴社メールアドレスを入力してください" });
    }
    if (!form.message.trim()) {
      e.message = tx({ EN: "Please describe your consultation requirements", JP: "お問い合わせ内容をご記入ください" });
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const metadataLines: string[] = [];
    if (form.company.trim()) metadataLines.push(`[Company / Organization: ${form.company.trim()}]`);
    if (form.phone.trim()) metadataLines.push(`[Direct Phone / WhatsApp: ${form.phone.trim()}]`);

    const payloadMessage = metadataLines.length > 0
      ? `${metadataLines.join("\n")}\n\n${form.message.trim()}`
      : form.message.trim();

    try {
      const res = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || tx({ EN: "General Executive Consultation", JP: "お問い合わせ・個別相談" }),
          message: payloadMessage,
          lang: lang === "JP" ? "JP" : "EN",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrors({
          message: tx({
            EN: "Failed to dispatch inquiry. Please reach us via direct phone or WhatsApp.",
            JP: "送信に失敗しました。直接お電話またはWhatsAppでお問い合わせください。",
          }),
        });
        setSubmitting(false);
        return;
      }
      setInquiryId(data.inquiryId || `JG-${Date.now().toString().slice(-6)}`);
      setSubmitting(false);
      setSent(true);
    } catch {
      setErrors({
        message: tx({
          EN: "Network error occurred. Please try again or contact us directly.",
          JP: "通信エラーが発生しました。もう一度お試しいただくか直接ご連絡ください。",
        }),
      });
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", company: "", phone: "", subject: "", message: "" });
    setErrors({});
    setActiveTrack(null);
    setInquiryId("");
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 dark:border-white/12 bg-slate-50 dark:bg-white/[0.05] px-3.5 py-3 font-inter text-base sm:text-sm text-ink dark:text-white placeholder-slate-400 dark:placeholder-white/35 outline-none transition-all duration-200 focus:border-crimson dark:focus:border-saffron focus:bg-white dark:focus:bg-white/[0.08] focus:ring-2 focus:ring-crimson/15 dark:focus:ring-saffron/20";
  const labelClass =
    "mb-1.5 flex items-center justify-between font-inter text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300";

  return (
    <>
      <PageHero
        eyebrowKey="contact.eyebrow"
        titleNode={
          <>
            {tx({ EN: "Connect With", JP: "J-Gateに" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Executive Japan Desk", JP: "繋がる・現地相談" })}
            </span>
          </>
        }
        subtitleKey="contact.subtitle"
      />

      {/* ───────────────────────────────────────────────────────────
          MAIN SECTION — Unified Ultra-Premium Executive Console
          Left (5 cols): Resident Leadership + Headquarters + SLA
          Right (7 cols): Luxury Inquiry Console + Quick Topic Chips
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-ivory dark:bg-[#080d17]">
        {/* Subtle decorative background gradient */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-saffron/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-crimson/5 blur-3xl" />

        <div className="container-jg relative z-10">
          {/* Section Header */}
          <Reveal>
            <div className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Direct Bilateral Channels", JP: "公式窓口・現地デスク" })}</Eyebrow>
              <h2
                className="mt-3 font-serif-jp font-bold text-ink dark:text-white leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.6rem)" }}
              >
                {tx({
                  EN: "Direct Communication with Resident Leadership",
                  JP: "常駐日本人スタッフへの直接相談窓口",
                })}
              </h2>
              <p className="mt-2.5 font-inter text-[13px] sm:text-[14.5px] leading-relaxed text-slate dark:text-slate-300 max-w-2xl mx-auto">
                {tx({
                  EN: "Connect directly with our resident directors in Hyderabad. Whether you require private office space, entity setup, or a confidential feasibility consultation, our team provides comprehensive Japanese and English support.",
                  JP: "ハイデラバード現地常駐スタッフに直接ご相談いただけます。オフィス見学、法人設立、IT人材採用など、すべて日本語で丁寧に対応いたします。",
                })}
              </p>

              {/* Institutional Live Status Strip */}
              <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-5 rounded-full bg-white dark:bg-[#101a2c] border border-slate-200/90 dark:border-white/10 px-4 sm:px-6 py-2 shadow-sm text-[11px] sm:text-[12px] font-inter">
                <span className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  {tx({ EN: "Hyderabad Japan Desk: Active", JP: "ハイデラバード常駐デスク：受付中" })}
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-white/20">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-crimson dark:text-rose-400" />
                  {tx({ EN: "Average SLA: < 24 Hours", JP: "平均回答時間：24時間以内" })}
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-white/20">|</span>
                <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  {tx({ EN: "NDA Confidentiality Guaranteed", JP: "秘密保持（NDA）厳守" })}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Unified Executive Grid */}
          <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* ════════════════════════════════════════════════════════
                COL 1 (5 Cols): Direct Contacts, Resident Leadership, HQ
               ════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              {/* Card 1: Official Corporate Email & Quick Copy */}
              <Reveal variant="left">
                <div className="luxury-light-card card-sheen gold-hairline relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4.5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="icon-pod h-11 w-11 shrink-0 !bg-crimson/10 dark:!bg-rose-950/50 !border-crimson/30 dark:!border-rose-400/30 !text-crimson dark:!text-rose-400">
                        <Mail className="h-5 w-5" strokeWidth={1.8} />
                      </div>
                      <div>
                        <span className="font-inter text-[10.5px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                          {tx({ EN: "Official Bilateral Inbox", JP: "公式メール窓口" })}
                        </span>
                        <a
                          href="mailto:contact@indobox.co.jp"
                          className="block font-serif-jp text-[15px] sm:text-[16.5px] font-bold text-ink dark:text-white hover:text-crimson dark:hover:text-rose-400 transition-colors"
                        >
                          contact@indobox.co.jp
                        </a>
                      </div>
                    </div>
                    {/* Copy button */}
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      aria-label="Copy email address"
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 shrink-0",
                        copiedEmail
                          ? "border-success bg-success/15 text-success scale-105"
                          : "border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:border-crimson/40 hover:text-crimson hover:bg-white dark:hover:bg-white/10"
                      )}
                    >
                      {copiedEmail ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between rounded-xl bg-crimson/[0.04] dark:bg-rose-950/30 border border-crimson/15 dark:border-rose-400/20 px-3 py-2 text-[11.5px] font-inter text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-crimson dark:text-rose-400 shrink-0" />
                      {tx({ EN: "Guaranteed 24-hour SLA response", JP: "24時間以内返信保証（平日）" })}
                    </span>
                    <span className="font-bold text-crimson dark:text-rose-400 text-[10px] uppercase tracking-wider">
                      {tx({ EN: "BILINGUAL", JP: "日本語対応" })}
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Card 2: Resident Leadership Direct Lines with 1-Click WhatsApp & Phone */}
              <Reveal variant="left" delay={70}>
                <div className="luxury-light-card card-sheen gold-hairline relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4.5 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3 sm:pb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="icon-pod h-9 w-9 shrink-0 !bg-saffron/15 dark:!bg-amber-950/50 !border-saffron/30 dark:!border-amber-700/40 !text-saffron-dark dark:!text-amber-300">
                        <Phone className="h-4.5 w-4.5" strokeWidth={1.8} />
                      </div>
                      <div>
                        <span className="font-inter text-[10.5px] font-bold uppercase tracking-wider text-saffron-dark dark:text-amber-300">
                          {tx({ EN: "Resident Executive Lines", JP: "常駐担当者 直通連絡先" })}
                        </span>
                        <h4 className="font-serif-jp text-[14.5px] font-bold text-ink dark:text-white leading-tight">
                          {tx({ EN: "Direct Phone & WhatsApp", JP: "お電話・WhatsApp直通" })}
                        </h4>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-700/60 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {tx({ EN: "Online", JP: "受付中" })}
                    </span>
                  </div>

                  {/* Leader 1: Tanji (Resident Director) */}
                  <div className="mt-3.5 space-y-3">
                    <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] p-3 sm:p-3.5 transition-all hover:bg-slate-50 dark:hover:bg-white/[0.06] hover:border-saffron/40">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif-jp text-[13.5px] sm:text-[14px] font-bold text-ink dark:text-white">
                              {tx({ EN: "Daisuke Tanji", JP: "丹治 大介（ディレクター）" })}
                            </span>
                            <span className="rounded bg-saffron/20 dark:bg-amber-950/50 px-1.5 py-0.5 text-[9.5px] font-bold text-saffron-dark dark:text-amber-300 uppercase">
                              {tx({ EN: "Director", JP: "常駐" })}
                            </span>
                          </div>
                          <p className="mt-0.5 font-inter text-[11px] text-slate-500 dark:text-slate-400">
                            {tx({ EN: "India-Japan Corridor Director", JP: "日本語対応・現地代表" })}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons for Tanji */}
                      <div className="mt-2.5 grid grid-cols-2 gap-2">
                        <a
                          href="tel:+817040321282"
                          className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#142036] px-2.5 py-2 font-mono text-[11.5px] font-bold text-ink dark:text-white hover:text-crimson hover:border-crimson/40 transition-colors shadow-xs"
                        >
                          <Phone className="h-3 w-3 text-crimson dark:text-rose-400" />
                          +81 70-4032-1282
                        </a>
                        <a
                          href="https://wa.me/817040321282?text=Hello%20Tanji-san%2C%20I%20would%20like%20to%20inquire%20about%20J-Gate."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 rounded-lg border border-emerald-300/80 dark:border-emerald-600/40 bg-emerald-500/10 dark:bg-emerald-950/40 px-2.5 py-2 font-inter text-[11.5px] font-bold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors shadow-xs"
                        >
                          <MessageCircle className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                          {tx({ EN: "WhatsApp Chat", JP: "WhatsAppで相談" })}
                        </a>
                      </div>
                    </div>

                    {/* Leader 2: Dheeraj (Community Manager) */}
                    <div className="rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] p-3 sm:p-3.5 transition-all hover:bg-slate-50 dark:hover:bg-white/[0.06] hover:border-crimson/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif-jp text-[13.5px] sm:text-[14px] font-bold text-ink dark:text-white">
                              {tx({ EN: "Dheeraj Yanneti", JP: "ディラジ・ヤネティ" })}
                            </span>
                            <span className="rounded bg-slate-200/80 dark:bg-white/10 px-1.5 py-0.5 text-[9.5px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                              {tx({ EN: "Community", JP: "運営" })}
                            </span>
                          </div>
                          <p className="mt-0.5 font-inter text-[11px] text-slate-500 dark:text-slate-400">
                            {tx({ EN: "Community & Facility Manager", JP: "施設運営・コミュニティ担当" })}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons for Dheeraj */}
                      <div className="mt-2.5 grid grid-cols-2 gap-2">
                        <a
                          href="tel:+919849811543"
                          className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#142036] px-2.5 py-2 font-mono text-[11.5px] font-bold text-ink dark:text-white hover:text-crimson hover:border-crimson/40 transition-colors shadow-xs"
                        >
                          <Phone className="h-3 w-3 text-crimson dark:text-rose-400" />
                          +91-98498 11543
                        </a>
                        <a
                          href="https://wa.me/919849811543?text=Hello%20Dheeraj%2C%20I%20would%20like%20to%20inquire%20about%20J-Gate."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 rounded-lg border border-emerald-300/80 dark:border-emerald-600/40 bg-emerald-500/10 dark:bg-emerald-950/40 px-2.5 py-2 font-inter text-[11.5px] font-bold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors shadow-xs"
                        >
                          <MessageCircle className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                          {tx({ EN: "WhatsApp Chat", JP: "WhatsAppで相談" })}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Card 3: Flagship Headquarters Location & Google Maps */}
              <Reveal variant="left" delay={130}>
                <div className="luxury-light-card card-sheen relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4.5 sm:p-6 shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="icon-pod h-10 w-10 shrink-0 !bg-slate-100 dark:!bg-white/5 !border-slate-200 dark:!border-white/10 !text-slate-700 dark:!text-slate-300">
                      <MapPin className="h-5 w-5 text-crimson dark:text-rose-400" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                        {tx({ EN: "Hyderabad Flagship Facility", JP: "インド・旗艦拠点" })}
                      </span>
                      <h4 className="font-serif-jp text-[14px] sm:text-[15px] font-bold text-ink dark:text-white leading-snug mt-0.5">
                        Cyber Gateway, Block D, Phase 2
                      </h4>
                      <p className="mt-1 font-inter text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        HITEC City, Madhapur, Hyderabad, Telangana 500081, India
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <a
                          href="https://maps.google.com/?q=Cyber+Gateway+Hitec+City+Hyderabad"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 px-2.5 py-1.5 font-inter text-[11px] font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {tx({ EN: "Open in Google Maps", JP: "Googleマップで確認" })}
                        </a>
                        <span className="rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 px-2 py-1 font-inter text-[10.5px] text-slate-500 dark:text-slate-400">
                          {tx({ EN: "2 Min Walk from Metro", JP: "最寄りメトロ駅 徒歩2分" })}
                        </span>
                        <span className="rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 px-2 py-1 font-inter text-[10.5px] text-slate-500 dark:text-slate-400">
                          {tx({ EN: "Level 4 Dedicated Japanese Corridor", JP: "4階 日系企業専用フロア" })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust & Security Reassurance Note */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/10 flex items-center gap-2 text-[11px] font-inter text-slate-500 dark:text-slate-400">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      {tx({
                        EN: "NDA & Enterprise confidentiality strictly guaranteed.",
                        JP: "秘密保持契約（NDA）締結可能。厳格な情報管理を徹底。",
                      })}
                    </span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* ════════════════════════════════════════════════════════
                COL 2 (7 Cols): Ultra-Premium Executive Consultation Terminal
               ════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7">
              <Reveal variant="right" delay={90}>
                <div className="card-sheen relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0c1424] p-5 sm:p-7 lg:p-9 shadow-xl dark:shadow-2xl transition-all duration-300">
                  
                  {/* Subtle corner glows */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-saffron/10 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-crimson/10 blur-2xl" />

                  {/* Terminal Header */}
                  <div className="relative z-10 border-b border-slate-200/80 dark:border-white/10 pb-4 sm:pb-5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-crimson/10 dark:bg-rose-950/50 border border-crimson/25 dark:border-rose-400/30 px-3 py-1 font-inter text-[10.5px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                        <Sparkles className="h-3 w-3" />
                        {tx({ EN: "Executive Consultation Console", JP: "エグゼクティブ相談コンソール" })}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {tx({ EN: "SLA: < 24 Hours", JP: "24時間以内返信" })}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white leading-tight">
                      {tx({ EN: "Schedule a Confidential Consultation", JP: "個別相談・お問い合わせメッセージ" })}
                    </h3>
                    <p className="mt-1.5 font-inter text-[12.5px] sm:text-[13.5px] text-slate-600 dark:text-slate-300">
                      {tx({
                        EN: "Select a consultation corridor below to auto-fill topic scope, or submit your specific enterprise objectives directly.",
                        JP: "ご関心のある分野を選択するか、直接お問い合わせ内容をご入力ください。",
                      })}
                    </p>

                    {/* Structured 4 Consultation Tracks */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {CONSULTATION_TRACKS.map((track) => {
                        const isSelected = activeTrack === track.id;
                        const TrackIcon = track.icon;
                        return (
                          <button
                            key={track.id}
                            type="button"
                            onClick={() => handleTrackSelect(track)}
                            className={cn(
                              "group flex items-start gap-2.5 rounded-xl border p-2.5 sm:p-3 text-left transition-all duration-200",
                              isSelected
                                ? "border-crimson dark:border-saffron bg-crimson/[0.04] dark:bg-saffron/10 shadow-sm ring-1 ring-crimson/30 dark:ring-saffron/40"
                                : "border-slate-200/90 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] hover:bg-slate-100/80 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/20"
                            )}
                          >
                            <div
                              className={cn(
                                "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg border transition-colors mt-0.5",
                                isSelected
                                  ? "bg-crimson text-white border-crimson dark:bg-saffron dark:text-slate-950 dark:border-saffron"
                                  : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 group-hover:text-crimson dark:group-hover:text-saffron"
                              )}
                            >
                              <TrackIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <span className={cn(
                                  "font-serif-jp text-[12.5px] sm:text-[13px] font-bold leading-snug truncate",
                                  isSelected ? "text-crimson dark:text-saffron" : "text-ink dark:text-white"
                                )}>
                                  {tx(track.label)}
                                </span>
                                <span className="rounded bg-slate-200/60 dark:bg-white/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 shrink-0">
                                  {tx(track.badge)}
                                </span>
                              </div>
                              <p className="mt-0.5 font-inter text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                {tx(track.desc)}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive Form or Success State */}
                  <div className="relative z-10 pt-5 sm:pt-6">
                    {sent ? (
                      <div className="flex flex-col items-center py-10 sm:py-14 text-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success/15 text-success border border-success/35 shadow-xl shadow-success/10">
                          <CheckCircle2 className="h-9 w-9" strokeWidth={1.75} />
                        </span>
                        <h4 className="mt-4 font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white">
                          {tx({ EN: "Consultation Request Dispatched", JP: "お問い合わせを受け付けました" })}
                        </h4>
                        <p className="mt-2 max-w-md font-inter text-[13px] sm:text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
                          {tx({
                            EN: "Thank you. Your consultation request has been forwarded directly to Resident Director Daisuke Tanji at Cyber Gateway, Hyderabad. We will respond within 24 business hours.",
                            JP: "常駐ディレクター丹治および現地J-Gateデスクに送信されました。24時間以内に日本語でご連絡を差し上げます。",
                          })}
                        </p>

                        {inquiryId && (
                          <div className="mt-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 font-mono text-[12px] text-slate-600 dark:text-slate-300">
                            Reference ID: <span className="font-bold text-crimson dark:text-rose-400">{inquiryId}</span>
                          </div>
                        )}

                        <button
                          onClick={reset}
                          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/10 px-5 py-2.5 font-inter text-[13px] font-semibold text-slate-700 dark:text-white transition-all hover:bg-slate-200 dark:hover:bg-white/20"
                        >
                          {tx({ EN: "Submit Another Inquiry", JP: "別の内容で問い合わせる" })}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        
                        {/* Row 1: Name + Corporate Email (2 cols on tablet/desktop) */}
                        <div className="grid gap-3.5 sm:grid-cols-2">
                          <div>
                            <label htmlFor="c-name" className={labelClass}>
                              <span>
                                {tx({ EN: "Full Name & Title", JP: "ご氏名・お役職" })}
                              </span>
                              <span className="text-crimson font-bold text-xs">*</span>
                            </label>
                            <input
                              id="c-name"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder={tx({ EN: "e.g. Kenji Sato / 佐藤 健司 (Director)", JP: "例：佐藤 健司（代表取締役）" })}
                              className={cn(
                                inputClass,
                                errors.name && "border-crimson ring-1 ring-crimson"
                              )}
                              aria-invalid={!!errors.name}
                            />
                            {errors.name && (
                              <p className="mt-1 font-inter text-[11px] font-medium text-crimson">{errors.name}</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="c-email" className={labelClass}>
                              <span>
                                {tx({ EN: "Corporate Business Email", JP: "貴社メールアドレス" })}
                              </span>
                              <span className="text-crimson font-bold text-xs">*</span>
                            </label>
                            <input
                              id="c-email"
                              type="email"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="name@company.co.jp"
                              className={cn(
                                inputClass,
                                errors.email && "border-crimson ring-1 ring-crimson"
                              )}
                              aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                              <p className="mt-1 font-inter text-[11px] font-medium text-crimson">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Row 2: Company + Phone / WhatsApp (2 cols on tablet/desktop) */}
                        <div className="grid gap-3.5 sm:grid-cols-2">
                          <div>
                            <label htmlFor="c-company" className={labelClass}>
                              <span>{tx({ EN: "Company / Organization", JP: "貴社名・ご所属" })}</span>
                              <span className="text-[10px] text-slate-400 font-normal lowercase">{tx({ EN: "optional", JP: "任意" })}</span>
                            </label>
                            <input
                              id="c-company"
                              value={form.company}
                              onChange={(e) => setForm({ ...form, company: e.target.value })}
                              placeholder={tx({
                                EN: "e.g. Nihon Global Systems Inc.",
                                JP: "例：株式会社日本グローバルソリューションズ",
                              })}
                              className={inputClass}
                            />
                          </div>

                          <div>
                            <label htmlFor="c-phone" className={labelClass}>
                              <span>{tx({ EN: "Direct Phone / WhatsApp", JP: "直通電話番号 / WhatsApp" })}</span>
                              <span className="text-[10px] text-slate-400 font-normal lowercase">{tx({ EN: "optional", JP: "任意" })}</span>
                            </label>
                            <input
                              id="c-phone"
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder={tx({
                                EN: "e.g. +81 90-1234-5678",
                                JP: "例：090-1234-5678（国番号可）",
                              })}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Row 3: Subject */}
                        <div>
                          <label htmlFor="c-subject" className={labelClass}>
                            <span>{tx({ EN: "Inquiry Subject / Topic", JP: "ご相談件名" })}</span>
                          </label>
                          <input
                            id="c-subject"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            placeholder={tx({
                              EN: "e.g. Dedicated 6-Pax Suite & Legal Entity Incorporation",
                              JP: "例：専用オフィス入居と法人設立のご相談",
                            })}
                            className={inputClass}
                          />
                        </div>

                        {/* Row 4: Message */}
                        <div>
                          <label htmlFor="c-message" className={labelClass}>
                            <span>{tx({ EN: "Requirements & Timeline Details", JP: "ご相談詳細・ご要望" })}</span>
                            <span className="text-crimson font-bold text-xs">*</span>
                          </label>
                          <textarea
                            id="c-message"
                            rows={4}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder={tx({
                              EN: "Tell us about your target launch timeline, planned team headcount, entity setup scope, or specific questions for Resident Director Tanji...",
                              JP: "進出時期、希望席数、法人設立やITエンジニア採用のご要望など、お気軽にご記入ください...",
                            })}
                            className={cn(
                              inputClass,
                              "resize-none",
                              errors.message && "border-crimson ring-1 ring-crimson"
                            )}
                            aria-invalid={!!errors.message}
                          />
                          {errors.message && (
                            <p className="mt-1 font-inter text-[11px] font-medium text-crimson">{errors.message}</p>
                          )}
                        </div>

                        {/* Institutional Trust & Guarantee Badges Strip */}
                        <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 p-2.5 text-center">
                          <div className="flex flex-col items-center justify-center gap-1">
                            <Clock className="h-4 w-4 text-crimson dark:text-rose-400" />
                            <span className="font-inter text-[10px] sm:text-[10.5px] font-bold text-slate-700 dark:text-slate-300">
                              {tx({ EN: "24-Hour SLA", JP: "24時間以内返信" })}
                            </span>
                          </div>
                          <div className="flex flex-col items-center justify-center gap-1 border-x border-slate-200/80 dark:border-white/10">
                            <Lock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                            <span className="font-inter text-[10px] sm:text-[10.5px] font-bold text-slate-700 dark:text-slate-300">
                              {tx({ EN: "Mutual NDA Protected", JP: "NDA秘密保持厳守" })}
                            </span>
                          </div>
                          <div className="flex flex-col items-center justify-center gap-1">
                            <BadgeCheck className="h-4 w-4 text-saffron-dark dark:text-saffron" />
                            <span className="font-inter text-[10px] sm:text-[10.5px] font-bold text-slate-700 dark:text-slate-300">
                              {tx({ EN: "Director Reviewed", JP: "常駐代表が直接確認" })}
                            </span>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3.5 font-inter text-sm sm:text-base font-semibold text-white shadow-xl shadow-crimson/25 hover:shadow-crimson/40 transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 mt-1 cursor-pointer"
                        >
                          {submitting ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                              {tx({ EN: "Dispatching to Japan Desk...", JP: "送信中..." })}
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              {tx({ EN: "Dispatch Executive Consultation Request", JP: "コンサルテーションを申し込む" })}
                            </>
                          )}
                        </button>

                        <p className="text-center font-inter text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                          {tx({
                            EN: "Bilingual support in Japanese & English · Official Bilateral Corridor · Cyber Gateway",
                            JP: "日本語・英語対応 · 日印二国間公式デスク · Cyber Gateway",
                          })}
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
