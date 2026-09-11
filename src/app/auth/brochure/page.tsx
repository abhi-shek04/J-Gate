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
   Streamlined layout with:
     • 4 fields: Name, Organization, E-Mail, Questions
     • Submit → POST /api/brochure/submit → DB + admin email
     • Success state with auto-download PDF
   ============================================================ */

type FormState = {
  fullName: string;
  organization: string;
  email: string;
  questions: string;
};

type Errors = Partial<Record<keyof FormState | "form", string>>;

export default function BrochureAuthPage() {
  const { t, tx } = useI18n();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    organization: "",
    email: "",
    questions: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [downloadUrl, setDownloadUrl] = useState("");

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.fullName.trim()) {
      e.fullName = tx({ EN: "Name is required", JP: "氏名を入力してください" });
    }
    if (!form.organization.trim()) {
      e.organization = tx({ EN: "Organization is required", JP: "会社名・組織名を入力してください" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = tx({ EN: "Valid business email is required", JP: "有効なメールアドレスを入力してください" });
    }
    setErrors(e);
    return Object.keys(e).length === 0;
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
          fullName: form.fullName.trim(),
          organization: form.organization.trim(),
          email: form.email.trim(),
          questions: form.questions.trim(),
          authMethod: "manual",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ form: tx({ EN: "Submission failed. Please try again.", JP: "送信に失敗しました。もう一度お試しください。" }) });
        }
        setStatus("error");
        return;
      }
      const url = data.downloadUrl || "/J-Gate-Brochure.pdf";
      setDownloadUrl(url);
      setStatus("success");

      // Trigger auto-download
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = url;
        a.download = "J-Gate-Brochure.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 400);
    } catch {
      setErrors({ form: tx({ EN: "Network error. Please try again.", JP: "通信エラーが発生しました。もう一度お試しください。" }) });
      setStatus("error");
    }
  };

  const reset = () => {
    setForm({
      fullName: "",
      organization: "",
      email: "",
      questions: "",
    });
    setErrors({});
    setStatus("idle");
  };

  const inputClass =
    "w-full rounded-md border bg-white/[0.04] px-4 py-3 font-inter text-base sm:text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-crimson";
  const labelClass =
    "mb-1.5 block font-inter text-[11.5px] font-semibold uppercase tracking-wider text-mist";

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(188,26,44,0.18) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(232,160,26,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Japanese Torii watermark */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-[0.04]">
        <ToriiWatermark className="h-[600px] w-[600px] text-white" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-16">
        {/* Back link */}
        <div className="mb-6 w-full max-w-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-inter text-[12px] font-medium text-mist transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{tx({ EN: "Back to Home", JP: "ホームに戻る" })}</span>
          </Link>
        </div>

        {/* Auth card */}
        <div
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-navy shadow-2xl"
          style={{ animation: "jg-modal-in 0.4s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <style>{`@keyframes jg-modal-in { from { opacity:0; transform: translateY(24px) scale(0.97) } to { opacity:1; transform: translateY(0) scale(1) } }`}</style>

          {/* Header (Clean, no yellow badge) */}
          <div className="relative overflow-hidden bg-gradient-to-br from-crimson/20 via-navy to-navy p-7 sm:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-saffron/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-crimson/15 blur-3xl" aria-hidden="true" />
            <div className="relative">
              {/* Logo */}
              <div className="flex items-center justify-between">
                <JGateLogo variant="light" />
              </div>

              <h1 className="mt-5 font-serif-jp text-2xl font-bold leading-snug text-white sm:text-[1.75rem]">
                {status === "success"
                  ? tx({ EN: "Your Download Has Started", JP: "ダウンロードを開始しました" })
                  : tx({ EN: "Download Official Brochure", JP: "公式パンフレットのダウンロード" })}
              </h1>
              <p className="mt-2 font-inter text-[13px] leading-relaxed text-mist">
                {status === "success"
                  ? tx({
                      EN: "Thank you for your interest. If the download did not start automatically, please use the button below.",
                      JP: "ご登録ありがとうございます。ダウンロードが自動的に始まらない場合は、下のボタンを押してください。",
                    })
                  : tx({
                      EN: "Please provide your details below to download the comprehensive J-Gate India Expansion brochure.",
                      JP: "下記の必要事項をご入力いただくと、J-Gateインド進出支援パンフレット（PDF）をダウンロードいただけます。",
                    })}
              </p>

              {/* Trust row */}
              {status !== "success" && (
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-inter text-[11px] text-mist/80">
                  <span className="flex items-center gap-1.5">
                    <Lock className="h-3 w-3 text-crimson" />
                    {tx({ EN: "Encrypted", JP: "暗号化済み" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-3 w-3 text-crimson" />
                    {tx({ EN: "Never shared", JP: "外部共有なし" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FileText className="h-3 w-3 text-crimson" />
                    {tx({ EN: "Official PDF", JP: "公式PDF資料" })}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="p-7 sm:p-8">
            {status === "success" ? (
              <SuccessState
                downloadUrl={downloadUrl}
                onReset={reset}
                t={t}
                tx={tx}
              />
            ) : (
              /* Streamlined 4-Field Form: Name, Organization, E-Mail, Questions */
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

                {/* 1. Name */}
                <div>
                  <label htmlFor="br-name" className={labelClass}>
                    {tx({ EN: "Name", JP: "氏名" })} <span className="text-crimson">*</span>
                  </label>
                  <input
                    id="br-name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder={tx({ EN: "Your full name", JP: "山田 太郎" })}
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

                {/* 2. Organization */}
                <div>
                  <label htmlFor="br-org" className={labelClass}>
                    {tx({ EN: "Organization", JP: "会社名・組織名" })} <span className="text-crimson">*</span>
                  </label>
                  <input
                    id="br-org"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    placeholder={tx({ EN: "Company or organization name", JP: "株式会社インフォボックス" })}
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

                {/* 3. E-Mail */}
                <div>
                  <label htmlFor="br-email" className={labelClass}>
                    {tx({ EN: "E-Mail", JP: "メールアドレス" })} <span className="text-crimson">*</span>
                  </label>
                  <input
                    id="br-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={tx({ EN: "name@company.com", JP: "yamada@company.co.jp" })}
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

                {/* 4. Questions */}
                <div>
                  <label htmlFor="br-questions" className={labelClass}>
                    {tx({ EN: "Questions", JP: "ご質問・ご要望" })}
                  </label>
                  <textarea
                    id="br-questions"
                    rows={3}
                    value={form.questions}
                    onChange={(e) => setForm({ ...form, questions: e.target.value })}
                    placeholder={tx({
                      EN: "Any specific questions or inquiries (optional)...",
                      JP: "進出時期、関心のある支援内容など（任意）...",
                    })}
                    className={cn(inputClass, "resize-none border-white/12")}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-shine mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3.5 font-inter text-sm font-semibold text-white shadow-crimp transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{tx({ EN: "Submitting...", JP: "送信中..." })}</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      <span>{tx({ EN: "Download Brochure", JP: "パンフレットをダウンロード" })}</span>
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
            )}
          </div>

          {/* Footer bar */}
          {status !== "success" && (
            <div className="border-t border-white/8 bg-midnight/60 px-7 py-4 sm:px-8">
              <p className="text-center font-inter text-[11px] text-mist/70">
                {tx({
                  EN: "Prefer a direct briefing? Contact our directors directly at",
                  JP: "直接の個別相談をご希望ですか？日本人ディレクター直通：",
                })}{" "}
                <Link
                  href="/contact"
                  className="font-medium text-white underline underline-offset-2 hover:text-saffron"
                >
                  {tx({ EN: "Contact Page", JP: "お問い合わせ窓口" })}
                </Link>
              </p>
            </div>
          )}
        </div>
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
        <div
          className="absolute inset-0 -m-4 rounded-full bg-emerald-500/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <CheckCircle2 className="h-12 w-12" strokeWidth={1.5} />
        </div>
      </div>

      <h2 className="mt-6 font-serif-jp text-xl font-bold text-white">
        {tx({
          EN: "Thank you! Your download has started.",
          JP: "ありがとうございます！ダウンロードを開始しました。",
        })}
      </h2>
      <p className="mt-2 max-w-xs font-inter text-[13px] leading-relaxed text-mist">
        {tx({
          EN: "If your download did not start automatically, please click the button below.",
          JP: "ダウンロードが自動で開始されない場合は、下のボタンを押してください。",
        })}
      </p>

      <div className="mt-6 flex w-full flex-col gap-2.5">
        <a
          href={downloadUrl || "/J-Gate-Brochure.pdf"}
          download="J-Gate-Brochure.pdf"
          className="btn-shine flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3 font-inter text-sm font-semibold text-white shadow-crimp transition-all hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4" />
          {tx({ EN: "Download Again", JP: "再ダウンロード" })}
        </a>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={onReset}
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 font-inter text-[13px] font-semibold text-white transition-all hover:bg-white/10 cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {tx({ EN: "Register another", JP: "別の内容で登録" })}
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
    </div>
  );
}
