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
  ExternalLink,
  Copy,
  Check,
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
     • Reliable multi-device download:
       - Direct streaming download (/api/brochure/download)
       - Preview in browser (/J-Gate-Brochure.pdf)
       - Copy download link
       - Immediate access bypass
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
  const [downloadUrl, setDownloadUrl] = useState<string>("/J-Gate-Brochure.pdf");

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

      // Auto-trigger direct native download
      try {
        const link = document.createElement("a");
        link.href = url;
        link.download = "J-Gate-Brochure.pdf";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          if (document.body.contains(link)) document.body.removeChild(link);
        }, 1500);
      } catch {
        window.open(url, "_blank");
      }
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
    "w-full rounded-xl border bg-white/[0.05] px-3.5 py-2.5 sm:px-4 sm:py-3 font-inter text-base sm:text-sm text-white placeholder-white/35 outline-none transition-all duration-200 focus:border-crimson focus:bg-white/[0.08]";
  const labelClass =
    "mb-1 sm:mb-1.5 block font-inter text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-wider text-mist";

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

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-3.5 py-10 sm:px-6 sm:py-16">
        {/* Back link */}
        <div className="mb-4 sm:mb-6 w-full max-w-lg">
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
          className="relative w-full max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-navy shadow-2xl"
          style={{ animation: "jg-modal-in 0.4s cubic-bezier(0.4,0,0.2,1)" }}
        >
          <style>{`@keyframes jg-modal-in { from { opacity:0; transform: translateY(24px) scale(0.97) } to { opacity:1; transform: translateY(0) scale(1) } }`}</style>

          {/* Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-crimson/20 via-navy to-navy p-5 sm:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-saffron/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-crimson/15 blur-3xl" aria-hidden="true" />
            <div className="relative">
              {/* Logo */}
              <div className="flex items-center justify-between">
                <JGateLogo variant="light" />
              </div>

              <h1 className="mt-4 sm:mt-5 font-serif-jp text-xl sm:text-2xl font-bold leading-snug text-white">
                {status === "success"
                  ? tx({ EN: "Your Download Has Started", JP: "ダウンロードを開始しました" })
                  : tx({ EN: "Download Official Brochure", JP: "公式パンフレットのダウンロード" })}
              </h1>
              <p className="mt-1.5 sm:mt-2 font-inter text-[12.5px] sm:text-[13px] leading-relaxed text-mist">
                {status === "success"
                  ? tx({
                      EN: "Thank you for your interest. If the download did not start automatically, please use the direct download or browser preview options below.",
                      JP: "ご登録ありがとうございます。ダウンロードが自動的に始まらない場合は、下のボタンから直接ダウンロードまたはブラウザで閲覧いただけます。",
                    })
                  : tx({
                      EN: "Please provide your details below to download the comprehensive J-Gate India Expansion brochure.",
                      JP: "下記の必要事項をご入力いただくと、J-Gateインド進出支援パンフレット（PDF）をダウンロードいただけます。",
                    })}
              </p>

              {/* Trust row */}
              {status !== "success" && (
                <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-inter text-[10.5px] sm:text-[11px] text-mist/80">
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
                    {tx({ EN: "Official PDF (55MB)", JP: "公式PDF（55MB）" })}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 pt-4 sm:pt-6">
            {status === "success" ? (
              <SuccessState
                downloadUrl={downloadUrl}
                onReset={reset}
                t={t}
                tx={tx}
              />
            ) : (
              /* Streamlined 4-Field Form: Name, Organization, E-Mail, Questions */
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4" noValidate>
                {errors.form && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 rounded-xl border border-crimson/40 bg-crimson/10 px-3 py-2.5 font-inter text-[12px] text-crimson"
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
                    {tx({ EN: "Questions / Requests", JP: "ご質問・ご要望（任意）" })}
                  </label>
                  <textarea
                    id="br-questions"
                    rows={2}
                    value={form.questions}
                    onChange={(e) => setForm({ ...form, questions: e.target.value })}
                    placeholder={tx({
                      EN: "Tell us about your team size, expansion timeline, or questions...",
                      JP: "進出時期、希望席数、法人設立やIT人材採用のご質問など...",
                    })}
                    className={cn(inputClass, "resize-none border-white/12")}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-shine mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3 sm:py-3.5 font-inter text-sm font-semibold text-white shadow-xl shadow-crimson/30 hover:shadow-crimson/50 transition-all hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{tx({ EN: "Processing...", JP: "処理中..." })}</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      <span>{tx({ EN: "Download Official Brochure", JP: "公式パンフレットをダウンロード" })}</span>
                    </>
                  )}
                </button>

                {/* Direct Access Bypass */}
                <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-mist/70">
                  <span>{tx({ EN: "Already submitted or need direct access?", JP: "即時閲覧または再ダウンロード希望の方：" })}</span>
                  <div className="flex items-center gap-2 font-medium">
                    <a
                      href="/J-Gate-Brochure.pdf"
                      download="J-Gate-Brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-saffron hover:underline inline-flex items-center gap-1"
                    >
                      <Download className="h-3 w-3" />
                      {tx({ EN: "Direct Download", JP: "直接DL" })}
                    </a>
                    <span>·</span>
                    <a href="/J-Gate-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="text-mist hover:text-white inline-flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      {tx({ EN: "Preview Online", JP: "ブラウザで開く" })}
                    </a>
                  </div>
                </div>

                <p className="pt-1 text-center font-inter text-[11px] text-mist/60">
                  {tx({
                    EN: "Your data is encrypted and handled in strict confidentiality.",
                    JP: "お客様のデータは暗号化され、厳格に秘密保持されます。",
                  })}
                </p>
              </form>
            )}
          </div>

          {/* Footer bar */}
          {status !== "success" && (
            <div className="border-t border-white/8 bg-midnight/60 px-5 py-3.5 sm:px-8">
              <p className="text-center font-inter text-[11px] text-mist/70">
                {tx({
                  EN: "Prefer a direct briefing? Connect directly with our resident directors at",
                  JP: "直接の個別相談をご希望ですか？日本人ディレクター直通：",
                })}{" "}
                <Link
                  href="/contact"
                  className="font-medium text-white underline underline-offset-2 hover:text-saffron"
                >
                  {tx({ EN: "Executive Japan Desk", JP: "公式窓口・現地デスク" })}
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
   Success State — centered checkmark + download + preview + copy
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
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      const fullUrl = `${window.location.origin}/J-Gate-Brochure.pdf`;
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex flex-col items-center py-2 text-center">
      <div className="relative">
        <div
          className="absolute inset-0 -m-4 rounded-full bg-emerald-500/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-400/30 shadow-xl shadow-emerald-500/15">
          <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.5} />
        </div>
      </div>

      <h2 className="mt-4 sm:mt-5 font-serif-jp text-lg sm:text-xl font-bold text-white">
        {tx({
          EN: "Thank you! Your download has started.",
          JP: "ありがとうございます！ダウンロードを開始しました。",
        })}
      </h2>
      <p className="mt-1.5 max-w-xs font-inter text-[12.5px] sm:text-[13px] leading-relaxed text-mist">
        {tx({
          EN: "If your browser did not automatically save the file, please use the direct download or browser preview options below.",
          JP: "自動的に保存されない場合は、下のボタンから直接ダウンロードまたはプレビューをご利用ください。",
        })}
      </p>

      {/* Action Buttons */}
      <div className="mt-5 sm:mt-6 flex w-full flex-col gap-2.5">
        {/* Primary Download Button */}
        <a
          href="/J-Gate-Brochure.pdf"
          download="J-Gate-Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3.5 font-inter text-[13.5px] sm:text-sm font-semibold text-white shadow-xl shadow-crimson/30 hover:shadow-crimson/50 transition-all hover:-translate-y-0.5"
        >
          <Download className="h-4.5 w-4.5" />
          {tx({ EN: "Save / Download PDF Brochure (55MB)", JP: "公式PDF資料をダウンロード (55MB)" })}
        </a>

        {/* Secondary Options: Preview & Copy Link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <a
            href="/J-Gate-Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-4 py-2.5 font-inter text-[12px] font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5 text-saffron" />
            {tx({ EN: "Preview in Browser", JP: "ブラウザで開く（プレビュー）" })}
          </a>
          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-4 py-2.5 font-inter text-[12px] font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-slate-300" />}
            {copied ? tx({ EN: "Link Copied!", JP: "リンクをコピーしました" }) : tx({ EN: "Copy Download Link", JP: "ダウンロードURLをコピー" })}
          </button>
        </div>

        {/* Navigation row */}
        <div className="flex flex-col gap-2 sm:flex-row pt-2">
          <button
            onClick={onReset}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 px-4 py-2.5 font-inter text-[12px] font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {tx({ EN: "Submit another inquiry", JP: "別の内容で登録" })}
          </button>
          <Link
            href="/"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 px-4 py-2.5 font-inter text-[12px] font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
          >
            {tx({ EN: "Back to Home", JP: "ホームに戻る" })}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
