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
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   /contact — Executive Japan Desk & Bilateral Consultation Console
   Ultra-premium, unified 2-column executive console on PC
   and structured luxury mobile layout.
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type ContactForm = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  lang: "EN" | "JP";
};

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const TOPIC_CHIPS = [
  {
    id: "workspace",
    icon: Building2,
    label: { EN: "Workspace & Dedicated Desks", JP: "オフィス・専用デスク" },
    subject: { EN: "Workspace & Satellite Desk Inquiry", JP: "オフィス・サテライトデスクについてのお問い合わせ" },
  },
  {
    id: "incorporation",
    icon: FileText,
    label: { EN: "Entity Incorporation & Banking", JP: "法人設立・口座開設" },
    subject: { EN: "India Legal Entity Incorporation & Banking", JP: "インド法人設立・口座開設のご相談" },
  },
  {
    id: "talent",
    icon: Users,
    label: { EN: "Tech Talent & Bilingual Staffing", JP: "ITエンジニア・人材採用" },
    subject: { EN: "IT Talent & Bilingual Team Staffing", JP: "ITエンジニア・バイリンガル人材採用について" },
  },
  {
    id: "tour",
    icon: Handshake,
    label: { EN: "Delegation & Private Facility Tour", JP: "現地視察・施設見学" },
    subject: { EN: "Hyderabad Delegation Visit & Private Tour", JP: "ハイデラバード現地視察・オフィス見学のお申し込み" },
  },
];

export default function ContactPage() {
  const { t, tx } = useI18n();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    lang: "JP",
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

  const handleChipSelect = (chip: (typeof TOPIC_CHIPS)[0]) => {
    setActiveChip(chip.id);
    setForm((prev) => ({
      ...prev,
      subject: tx(chip.subject),
    }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) {
      e.name = tx({ EN: "Please enter your name", JP: "お名前を入力してください" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = tx({ EN: "Please enter a valid business email", JP: "有効なメールアドレスを入力してください" });
    }
    if (!form.message.trim()) {
      e.message = tx({ EN: "Please enter your inquiry details", JP: "お問い合わせ内容を入力してください" });
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const payloadMessage = form.company.trim()
      ? `[Company / Organization: ${form.company.trim()}]\n\n${form.message.trim()}`
      : form.message.trim();

    try {
      const res = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || tx({ EN: "General Consultation", JP: "お問い合わせ・個別相談" }),
          message: payloadMessage,
          lang: form.lang,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrors({
          message: tx({
            EN: "Failed to send message. Please try again or reach us via phone/email.",
            JP: "送信に失敗しました。直接お電話またはメールでお問い合わせください。",
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
          EN: "Network error. Please try again or contact us directly.",
          JP: "通信エラーが発生しました。もう一度お試しいただくか直接ご連絡ください。",
        }),
      });
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", company: "", subject: "", message: "", lang: "JP" });
    setErrors({});
    setActiveChip(null);
  };

  const inputClass =
    "w-full rounded-xl border bg-white/[0.06] px-3.5 py-3 font-inter text-base sm:text-sm text-white placeholder-white/35 outline-none transition-all duration-200 focus:border-saffron focus:bg-white/[0.09] focus:ring-1 focus:ring-saffron/40";
  const labelClass = "mb-1.5 block font-inter text-[11px] font-semibold uppercase tracking-wider text-slate-300";

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
                style={{ fontSize: "clamp(1.65rem, 3.2vw, 2.5rem)" }}
              >
                {tx({
                  EN: "Direct Communication with Resident Leadership",
                  JP: "常駐日本人スタッフへの直接相談窓口",
                })}
              </h2>
              <p className="mt-2.5 font-inter text-[13px] sm:text-[14.5px] leading-relaxed text-slate dark:text-slate-300 max-w-2xl mx-auto">
                {tx({
                  EN: "Connect directly with our resident directors in Hyderabad. Whether you require private office space, entity setup, or a confidential feasibility consultation, we support you in Japanese and English.",
                  JP: "ハイデラバード現地常駐スタッフに直接ご相談いただけます。オフィス見学、法人設立、IT人材採用など、すべて日本語で丁寧に対応いたします。",
                })}
              </p>
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
                COL 2 (7 Cols): Ultra-Luxury Interactive Inquiry Console
               ════════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7">
              <Reveal variant="right" delay={90}>
                <div className="luxury-glass-card card-sheen gold-hairline relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-[#080F1A] p-5 sm:p-7 lg:p-9 shadow-2xl text-white backdrop-blur-2xl">
                  
                  {/* Sheen accent in background */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-saffron/10 blur-2xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-crimson/10 blur-2xl" />

                  {/* Console Header */}
                  <div className="relative z-10 border-b border-white/10 pb-4 sm:pb-5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 border border-saffron/30 px-3 py-0.5 font-inter text-[10.5px] font-bold uppercase tracking-wider text-saffron">
                        <Sparkles className="h-3 w-3" />
                        {tx({ EN: "Direct Executive Console", JP: "オンライン相談フォーム" })}
                      </span>
                      <span className="font-mono text-[11px] text-mist/60">
                        {tx({ EN: "SLA: < 24h", JP: "24時間以内返信" })}
                      </span>
                    </div>
                    <h3 className="mt-2.5 font-serif-jp text-lg sm:text-2xl font-bold text-white leading-tight">
                      {tx({ EN: "Send Us a Confidential Inquiry", JP: "個別相談・お問い合わせメッセージ" })}
                    </h3>
                    <p className="mt-1 font-inter text-[12px] sm:text-[13px] text-mist">
                      {tx({
                        EN: "Select a topic below to quick-fill or describe your enterprise objectives directly.",
                        JP: "ご興味のある項目を選択するか、直接お問い合わせ内容をご入力ください。",
                      })}
                    </p>

                    {/* Quick Topic Chips */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
                      {TOPIC_CHIPS.map((chip) => {
                        const isSelected = activeChip === chip.id;
                        const ChipIcon = chip.icon;
                        return (
                          <button
                            key={chip.id}
                            type="button"
                            onClick={() => handleChipSelect(chip)}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-inter text-[11px] sm:text-[12px] font-medium transition-all duration-200 border",
                              isSelected
                                ? "bg-saffron text-slate-950 font-bold border-saffron shadow-md shadow-saffron/20 scale-[1.02]"
                                : "bg-white/[0.05] border-white/12 text-slate-300 hover:bg-white/[0.1] hover:text-white hover:border-white/25"
                            )}
                          >
                            <ChipIcon className="h-3.5 w-3.5 shrink-0" />
                            <span>{tx(chip.label)}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive Form or Success State */}
                  <div className="relative z-10 pt-5 sm:pt-6">
                    {sent ? (
                      <div className="flex flex-col items-center py-10 sm:py-14 text-center">
                        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success/20 text-success border border-success/40 shadow-xl shadow-success/15">
                          <CheckCircle2 className="h-9 w-9" strokeWidth={1.75} />
                        </span>
                        <h4 className="mt-4 font-serif-jp text-xl sm:text-2xl font-bold text-white">
                          {tx({ EN: "Inquiry Successfully Dispatched", JP: "お問い合わせを受け付けました" })}
                        </h4>
                        <p className="mt-2 max-w-md font-inter text-[13px] sm:text-[14px] leading-relaxed text-mist">
                          {tx({
                            EN: "Thank you. Your request has been dispatched to Resident Director Daisuke Tanji and the Japan desk at Cyber Gateway. We will respond within 24 hours.",
                            JP: "常駐ディレクター丹治および現地J-Gateデスクに送信されました。24時間以内に日本語でご連絡を差し上げます。",
                          })}
                        </p>
                        <button
                          onClick={reset}
                          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 font-inter text-[13px] font-semibold text-white transition-all hover:bg-white/20 hover:border-white/40"
                        >
                          {tx({ EN: "Send Another Inquiry", JP: "別の内容で問い合わせる" })}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
                        
                        {/* Row 1: Name + Email (2 cols on tablet/desktop) */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="c-name" className={labelClass}>
                              {t("contact.form.name")} <span className="text-crimson">*</span>
                            </label>
                            <input
                              id="c-name"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder={tx({ EN: "e.g. Kenji Sato / 佐藤 健司", JP: "例：佐藤 健司" })}
                              className={cn(
                                inputClass,
                                errors.name ? "border-crimson ring-1 ring-crimson" : "border-white/15"
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
                              placeholder="name@company.co.jp"
                              className={cn(
                                inputClass,
                                errors.email ? "border-crimson ring-1 ring-crimson" : "border-white/15"
                              )}
                              aria-invalid={!!errors.email}
                            />
                            {errors.email && (
                              <p className="mt-1 font-inter text-[11px] text-crimson">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Row 2: Company / Organization */}
                        <div>
                          <label htmlFor="c-company" className={labelClass}>
                            {tx({ EN: "Company / Organization Name", JP: "貴社名・ご所属" })}
                          </label>
                          <input
                            id="c-company"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder={tx({
                              EN: "e.g. Enterprise Global Corp. / 日本法人名",
                              JP: "例：株式会社日本グローバルソリューションズ",
                            })}
                            className={cn(inputClass, "border-white/15")}
                          />
                        </div>

                        {/* Row 3: Subject */}
                        <div>
                          <label htmlFor="c-subject" className={labelClass}>
                            {t("contact.form.subject")}
                          </label>
                          <input
                            id="c-subject"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            placeholder={tx({
                              EN: "e.g. Dedicated 6-Pax Suite & Legal Incorporation",
                              JP: "例：専用オフィス入居と法人設立のご相談",
                            })}
                            className={cn(inputClass, "border-white/15")}
                          />
                        </div>

                        {/* Row 4: Message */}
                        <div>
                          <label htmlFor="c-message" className={labelClass}>
                            {t("contact.form.message")} <span className="text-crimson">*</span>
                          </label>
                          <textarea
                            id="c-message"
                            rows={4}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder={tx({
                              EN: "Tell us about your target launch timeline, team size, or specific requirements in Hyderabad...",
                              JP: "進出時期、希望席数、法人設立やITエンジニア採用のご要望など、お気軽にご記入ください...",
                            })}
                            className={cn(
                              inputClass,
                              "resize-none",
                              errors.message ? "border-crimson ring-1 ring-crimson" : "border-white/15"
                            )}
                            aria-invalid={!!errors.message}
                          />
                          {errors.message && (
                            <p className="mt-1 font-inter text-[11px] text-crimson">{errors.message}</p>
                          )}
                        </div>

                        {/* Language Preference Toggle */}
                        <div>
                          <label className={cn(labelClass, "flex items-center gap-1.5")}>
                            <Languages className="h-3.5 w-3.5 text-saffron" />
                            {tx({ EN: "Preferred Response Language", JP: "ご返信希望言語" })}
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setForm({ ...form, lang: "JP" })}
                              aria-pressed={form.lang === "JP"}
                              className={cn(
                                "flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 font-sans-jp text-[12.5px] font-semibold transition-all",
                                form.lang === "JP"
                                  ? "border-saffron bg-saffron/20 text-saffron shadow-sm"
                                  : "border-white/12 text-mist hover:border-white/25 hover:text-white"
                              )}
                            >
                              <span className="font-serif-jp text-sm font-bold">日</span>
                              {tx({ EN: "Reply in 日本語 (Japanese)", JP: "日本語で返信" })}
                            </button>
                            <button
                              type="button"
                              onClick={() => setForm({ ...form, lang: "EN" })}
                              aria-pressed={form.lang === "EN"}
                              className={cn(
                                "flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 font-inter text-[12.5px] font-semibold transition-all",
                                form.lang === "EN"
                                  ? "border-saffron bg-saffron/20 text-saffron shadow-sm"
                                  : "border-white/12 text-mist hover:border-white/25 hover:text-white"
                              )}
                            >
                              <Globe2 className="h-3.5 w-3.5" />
                              {tx({ EN: "Reply in English", JP: "英語で返信" })}
                            </button>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-shine flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3.5 font-inter text-sm sm:text-base font-semibold text-white shadow-xl shadow-crimson/30 hover:shadow-crimson/50 transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 mt-2"
                        >
                          {submitting ? (
                            <>
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                              {tx({ EN: "Dispatching to Japan Desk...", JP: "送信中..." })}
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              {tx({ EN: "Send Confidential Inquiry", JP: "お問い合わせを送信する" })}
                            </>
                          )}
                        </button>

                        <p className="flex items-center justify-center gap-1.5 pt-1 text-center font-inter text-[11px] text-mist/70">
                          <Clock className="h-3 w-3" />
                          {tx({
                            EN: "Bilingual support · 24-hour response guarantee · Mon-Fri JST / IST",
                            JP: "バイリンガル対応 · 24時間以内返信保証 · 月〜金 JST/IST",
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
