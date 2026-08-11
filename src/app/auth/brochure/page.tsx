"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Download,
  Shield,
  AlertCircle,
  Loader2,
  ArrowRight,
  ArrowLeft,
  Lock,
  FileText,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ToriiWatermark, JGateLogo } from "@/components/jgate/icons";
import Link from "next/link";

/* ============================================================
   /auth/brochure — Full-page gated brochure download
   Premium dark layout with:
     • Google OAuth UI (simulated)
     • Manual lead capture form with bilingual validation
     • Submit → POST /api/brochure/submit → DB + admin email
     • Success state with auto-download PDF
     • Error banner on API failure
   ============================================================ */

type FormState = {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  questions: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState | "form", string>>;

const COUNTRY_CODES = [
  { code: "+81", label: "🇯🇵 JP +81" },
  { code: "+91", label: "🇮🇳 IN +91" },
  { code: "+1",  label: "🇺🇸 US +1" },
  { code: "+44", label: "🇬🇧 UK +44" },
  { code: "+65", label: "🇸🇬 SG +65" },
  { code: "+61", label: "🇦🇺 AU +61" },
  { code: "+49", label: "🇩🇪 DE +49" },
  { code: "+33", label: "🇫🇷 FR +33" },
];

export default function BrochureAuthPage() {
  const { t, tx } = useI18n();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    questions: "",
    consent: false,
  });
  const [countryCode, setCountryCode] = useState("+81");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "google-loading" | "submitting" | "success" | "error">("idle");
  const [downloadUrl, setDownloadUrl] = useState("");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.fullName.trim()) e.fullName = t("brochure.errName");
    if (!form.organization.trim()) e.organization = t("brochure.errOrg");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("brochure.errEmail");
    if (!form.phone.trim()) e.phone = t("brochure.errPhone");
    if (!form.consent) e.consent = t("brochure.errConsent");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleGoogle = () => {
    // Simulated OAuth — in production, this triggers real OAuth flow
    // requiring GOOGLE_CLIENT_ID. Here we prefill the form so the user
    // can complete registration manually.
    setStatus("google-loading");
    setErrors({});
    setTimeout(() => {
      setForm((f) => ({
        ...f,
        fullName: f.fullName || "Google User",
        email: f.email || "user@gmail.com",
        consent: true,
      }));
      setStatus("idle");
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setErrors({});
    try {
      const res = await fetch("/api/brochure/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: `${countryCode} ${form.phone}`,
          authMethod: "manual",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ form: t("brochure.error") });
        }
        setStatus("error");
        return;
      }
      setDownloadUrl(data.downloadUrl || "/J-Gate-Brochure.pdf");
      setStatus("success");
      // Trigger auto-download
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = data.downloadUrl || "/J-Gate-Brochure.pdf";
        a.download = "J-Gate-Brochure.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 500);
    } catch {
      setErrors({ form: t("brochure.error") });
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      questions: "",
      consent: false,
    });
    setErrors({});
    setStatus("idle");
  };

  const inputClass =
    "w-full rounded-md border bg-white/[0.05] px-4 py-3 font-inter text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-saffron";
  const labelClass = "mb-1.5 block font-inter text-[11px] font-semibold uppercase text-mist";

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-midnight">
      {/* Asanoha pattern overlay */}
      <div className="pattern-asanoha-dark absolute inset-0 opacity-60" aria-hidden="true" />

      {/* Radial gradient ambient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(188,26,44,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(232,160,26,0.08) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Torii watermark — decorative only */}
      <ToriiWatermark
        className="torii-watermark"
        style={{ width: "60vw", maxWidth: "700px", left: "50%", top: "10%", transform: "translateX(-50%)" }}
      />

      {/* ── Top bar — back to home ── */}
      <div className="container-jg relative z-10 pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-inter text-[13px] font-medium text-mist transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {tx({ EN: "Back to Home", JP: "ホームに戻る" })}
        </Link>
      </div>

      {/* ── Centered card ── */}
      <div className="container-jg relative z-10 flex flex-1 items-center justify-center py-12">
        <div
          className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-2xl"
          style={{ animation: "jg-modal-in 0.4s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <style>{`@keyframes jg-modal-in { from { opacity:0; transform: translateY(24px) scale(0.97) } to { opacity:1; transform: translateY(0) scale(1) } }`}</style>

          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-crimson/20 via-navy to-navy p-7 sm:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-saffron/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-crimson/15 blur-3xl" aria-hidden="true" />
            <div className="relative">
              {/* Logo + tag */}
              <div className="flex items-center justify-between">
                <JGateLogo variant="light" />
                <span
                  className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-3 py-1 font-inter text-[10px] font-bold uppercase text-saffron"
                  style={{ letterSpacing: "0.1em" }}
                >
                  <Download className="h-3 w-3" />
                  {tx({ EN: "Brochure", JP: "パンフレット" })}
                </span>
              </div>

              <h1
                className="mt-6 font-serif-jp text-2xl font-bold leading-snug text-white sm:text-[1.75rem]"
              >
                {status === "success"
                  ? t("brochure.success.title")
                  : t("brochure.title")}
              </h1>
              <p className="mt-2 font-inter text-[13px] leading-relaxed text-mist">
                {status === "success"
                  ? t("brochure.success.body")
                  : t("brochure.subtitle")}
              </p>

              {/* trust row */}
              {status !== "success" && (
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-inter text-[11px] text-mist/80">
                  <span className="flex items-center gap-1.5">
                    <Lock className="h-3 w-3 text-saffron" />
                    {tx({ EN: "Encrypted", JP: "暗号化済み" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-3 w-3 text-saffron" />
                    {tx({ EN: "Never shared", JP: "外部共有なし" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-3 w-3 text-saffron" />
                    {tx({ EN: "PDF · 12 pages", JP: "PDF · 12ページ" })}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="max-h-[70vh] overflow-y-auto p-7 sm:p-8">
            {status === "success" ? (
              <SuccessState
                downloadUrl={downloadUrl}
                onReset={reset}
                t={t}
                tx={tx}
              />
            ) : (
              <>
                {/* Google OAuth button */}
                <button
                  onClick={handleGoogle}
                  disabled={status === "google-loading" || status === "submitting"}
                  className="flex w-full items-center justify-center gap-3 rounded-md border border-white/15 bg-white px-5 py-3.5 font-inter text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-pearl disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "google-loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin text-crimson" />
                      <span>{tx({ EN: "Connecting to Google...", JP: "Googleに接続中..." })}</span>
                    </>
                  ) : (
                    <>
                      <GoogleIcon className="h-5 w-5" />
                      <span>{t("brochure.google")}</span>
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="my-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/10" />
                  <span
                    className="font-inter text-[11px] uppercase text-mist"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {t("brochure.divider")}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                {/* Manual form */}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {errors.form && (
                    <div
                      role="alert"
                      className="flex items-start gap-2 rounded-md border border-crimson/40 bg-crimson/10 px-3 py-2.5 font-inter text-[12px] text-crimson"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="br-name" className={labelClass}>
                      {t("brochure.name")} <span className="text-crimson">*</span>
                    </label>
                    <input
                      id="br-name"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder={t("brochure.namePh")}
                      className={cn(
                        inputClass,
                        errors.fullName ? "border-crimson" : "border-white/12"
                      )}
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && (
                      <p className="mt-1 font-inter text-[11px] text-crimson">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <label htmlFor="br-org" className={labelClass}>
                      {t("brochure.org")} <span className="text-crimson">*</span>
                    </label>
                    <input
                      id="br-org"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      placeholder={t("brochure.orgPh")}
                      className={cn(
                        inputClass,
                        errors.organization ? "border-crimson" : "border-white/12"
                      )}
                      aria-invalid={!!errors.organization}
                    />
                    {errors.organization && (
                      <p className="mt-1 font-inter text-[11px] text-crimson">{errors.organization}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="br-email" className={labelClass}>
                      {t("brochure.email")} <span className="text-crimson">*</span>
                    </label>
                    <input
                      id="br-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t("brochure.emailPh")}
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

                  {/* Phone with country code selector */}
                  <div>
                    <label htmlFor="br-phone" className={labelClass}>
                      {t("brochure.phone")} <span className="text-crimson">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className={cn(
                          inputClass,
                          "w-36 shrink-0 appearance-none border-white/12",
                          "bg-[length:16px] bg-[right_0.6rem_center] bg-no-repeat pr-8"
                        )}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%238892a4' stroke-width='1.5'><path d='M4 6l4 4 4-4'/></svg>\")",
                        }}
                        aria-label={tx({ EN: "Country code", JP: "国番号" })}
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-navy text-white">
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <input
                        id="br-phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder={t("brochure.phonePh")}
                        className={cn(
                          inputClass,
                          "flex-1",
                          errors.phone ? "border-crimson" : "border-white/12"
                        )}
                        aria-invalid={!!errors.phone}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 font-inter text-[11px] text-crimson">{errors.phone}</p>
                    )}
                  </div>

                  {/* Questions (optional) */}
                  <div>
                    <label htmlFor="br-questions" className={labelClass}>
                      {t("brochure.questions")}
                    </label>
                    <textarea
                      id="br-questions"
                      rows={3}
                      value={form.questions}
                      onChange={(e) => setForm({ ...form, questions: e.target.value })}
                      placeholder={tx({
                        EN: "If you have any specific questions, let us know...",
                        JP: "ご質問やご要望があればお気軽にどうぞ...",
                      })}
                      className={cn(inputClass, "resize-none border-white/12")}
                    />
                  </div>

                  {/* Consent checkbox */}
                  <label className="flex cursor-pointer items-start gap-2.5">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-crimson"
                      aria-invalid={!!errors.consent}
                    />
                    <span className="font-inter text-[12px] leading-relaxed text-mist">
                      {t("brochure.consent")}
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="-mt-2 font-inter text-[11px] text-crimson">{errors.consent}</p>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-shine flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3.5 font-inter text-sm font-semibold text-white shadow-crimp transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {t("brochure.submitting")}
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        {t("brochure.submit")}
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 pt-1 text-center font-inter text-[11px] text-mist/60">
                    <Shield className="h-3 w-3" />
                    {tx({
                      EN: "Your data is encrypted and never shared with third parties.",
                      JP: "お客様のデータは暗号化され、第三者に共有されることはありません。",
                    })}
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Footer bar */}
          {status !== "success" && (
            <div className="border-t border-white/8 bg-midnight/60 px-7 py-4 sm:px-8">
              <p className="text-center font-inter text-[11px] text-mist/70">
                {tx({
                  EN: "By registering, you'll receive the J-Gate brochure PDF and occasional updates. Unsubscribe anytime.",
                  JP: "ご登録いただくと、J-GateパンフレットPDFと随時更新情報をお送りします。いつでも配信停止可能です。",
                })}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom helper text ── */}
      <div className="container-jg relative z-10 pb-12 text-center">
        <p className="font-inter text-[12px] text-mist/70">
          {tx({
            EN: "Operated by Indobox India Pvt. Ltd. · © 2026 J-Gate",
            JP: "運営：Indobox India Pvt. Ltd. · © 2026 J-Gate",
          })}
        </p>
        <p className="mt-1 font-inter text-[11px] text-mist/50">
          {tx({
            EN: "Need help? Email",
            JP: "お困りですか？メールにて",
          })}{" "}
          <a
            href="mailto:tokyo@j-gate.com"
            className="font-medium text-saffron underline-offset-2 hover:underline"
          >
            tokyo@j-gate.com
          </a>
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   Success State — centered checkmark + download + nav links
   ============================================================ */
function SuccessState({
  downloadUrl,
  onReset,
  t,
  tx,
}: {
  downloadUrl: string;
  onReset: () => void;
  t: (k: string) => string;
  tx: (e: { EN: string; JP: string }) => string;
}) {
  return (
    <div className="flex flex-col items-center py-4 text-center">
      <div className="relative">
        {/* Glow ring */}
        <div
          className="absolute inset-0 -m-4 rounded-full bg-success/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-12 w-12" strokeWidth={1.5} />
        </div>
      </div>

      <h2 className="mt-6 font-serif-jp text-xl font-bold text-white">
        {tx({
          EN: "Thank you! Your download is starting...",
          JP: "ありがとうございます！ダウンロードを開始します...",
        })}
      </h2>
      <p className="mt-2 max-w-xs font-inter text-[13px] leading-relaxed text-mist">
        {t("brochure.success.body")}
      </p>

      <div className="mt-6 flex w-full flex-col gap-2.5">
        <a
          href={downloadUrl}
          download="J-Gate-Brochure.pdf"
          className="btn-shine flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3 font-inter text-sm font-semibold text-white shadow-crimp transition-all hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4" />
          {t("brochure.success.downloadAgain")}
        </a>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={onReset}
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-inter text-[13px] font-semibold text-white transition-all hover:bg-white/10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {tx({ EN: "Register another", JP: "別途登録する" })}
          </button>
          <Link
            href="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-inter text-[13px] font-semibold text-white transition-all hover:bg-white/10"
          >
            {tx({ EN: "Back to Home", JP: "ホームに戻る" })}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="mt-6 w-full rounded-md border border-saffron/20 bg-saffron/5 p-4">
        <p className="font-inter text-[12px] leading-relaxed text-mist">
          <span className="font-semibold text-saffron">
            {tx({ EN: "Next step:", JP: "次のステップ：" })}
          </span>{" "}
          {tx({
            EN: "Reply to the confirmation email to schedule a free 30-minute consultation with our placement team.",
            JP: "確認メールに返信いただくと、紹介チームとの無料30分相談をご予約いただけます。",
          })}
        </p>
      </div>
    </div>
  );
}

/* Google "G" logo SVG — multicolor paths */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}
