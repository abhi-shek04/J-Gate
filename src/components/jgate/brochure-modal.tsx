"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Download, AlertCircle, Loader2, ExternalLink } from "lucide-react";
import { useBrochure } from "@/lib/brochure-context";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   BrochureModal — Streamlined Lead Capture
   Fields: Name, Organization, E-Mail, Questions
   - On submit → /api/brochure/submit → DB + admin email
   - Reliable streaming download via /api/brochure/download
   - Preview in browser fallback
   - Seamless mobile & PC layout
   ============================================================ */

type FormState = {
  fullName: string;
  organization: string;
  email: string;
  questions: string;
};

type Errors = Partial<Record<keyof FormState | "form", string>>;

export function BrochureModal() {
  const { isOpen, close } = useBrochure();
  const { tx } = useI18n();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    organization: "",
    email: "",
    questions: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [downloadUrl, setDownloadUrl] = useState<string>("/J-Gate-Brochure.pdf");

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && status !== "submitting") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, status]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.fullName.trim()) {
      e.fullName = tx({ EN: "Name is required", JP: "氏名を入力してください" });
    }
    if (!form.organization.trim()) {
      e.organization = tx({ EN: "Organization is required", JP: "会社名・組織名を入力してください" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = tx({ EN: "Valid email is required", JP: "有効なメールアドレスを入力してください" });
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
    setForm({ fullName: "", organization: "", email: "", questions: "" });
    setErrors({});
    setStatus("idle");
  };

  const inputClass =
    "w-full rounded-xl border bg-white/[0.05] px-3.5 py-2.5 sm:px-4 sm:py-3 font-inter text-base sm:text-sm text-white placeholder-white/35 outline-none transition-all duration-200 focus:border-crimson focus:bg-white/[0.08]";
  const labelClass = "mb-1 sm:mb-1.5 block font-inter text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-wider text-mist";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-midnight/80 p-3.5 sm:p-4 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget && status !== "submitting") close();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Download Brochure"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-navy shadow-2xl my-auto"
        style={{ animation: "jg-modal-in 0.3s cubic-bezier(0.4,0,0.2,1)" }}
      >
        <style>{`@keyframes jg-modal-in { from { opacity:0; transform: translateY(20px) scale(0.96) } to { opacity:1; transform: translateY(0) scale(1) } }`}</style>

        {/* Close Button */}
        <button
          onClick={close}
          disabled={status === "submitting"}
          className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white disabled:opacity-40 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-crimson/25 via-navy to-navy p-4.5 sm:p-6 pb-3 sm:pb-4 border-b border-white/10">
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-saffron/10 blur-2xl" aria-hidden="true" />
          <h2 className="font-serif-jp text-lg sm:text-xl font-bold text-white pr-8">
            {status === "success"
              ? tx({ EN: "Your Download Has Started", JP: "ダウンロードを開始しました" })
              : tx({ EN: "Download Official Brochure", JP: "公式パンフレットのダウンロード" })}
          </h2>
          <p className="mt-1 text-[12px] sm:text-[12.5px] leading-relaxed text-mist">
            {status === "success"
              ? tx({
                  EN: "If the download didn't start automatically, use the direct download or browser preview options below.",
                  JP: "自動的に始まらない場合は、下のボタンから直接ダウンロードまたはブラウザで閲覧いただけます。",
                })
              : tx({
                  EN: "Please provide your details below to download the comprehensive J-Gate India Expansion brochure (PDF, 55MB).",
                  JP: "下記の必要事項をご入力いただくと、J-Gateインド進出支援パンフレット（公式PDF・55MB）をダウンロードいただけます。",
                })}
          </p>
        </div>

        {/* Body */}
        <div className="p-4.5 sm:p-6 pt-3.5 sm:pt-4">
          {status === "success" ? (
            /* Success screen */
            <div className="flex flex-col items-center py-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-400/30 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="h-9 w-9" strokeWidth={1.5} />
              </div>
              <p className="mt-4 max-w-xs font-inter text-[13px] sm:text-[13.5px] leading-relaxed text-mist">
                {tx({
                  EN: "Your download has been triggered. Our bilingual directors are also available for private consultation.",
                  JP: "資料のダウンロードを開始しました。現地進出やオフィス見学のご相談はいつでもお気軽にお問い合わせください。",
                })}
              </p>
              <div className="mt-5 flex w-full flex-col gap-2">
                <a
                  href="/J-Gate-Brochure.pdf"
                  download="J-Gate-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3 font-inter text-sm font-semibold text-white transition-all hover:-translate-y-0.5 shadow-lg shadow-crimson/30"
                >
                  <Download className="h-4 w-4" />
                  {tx({ EN: "Save / Download PDF (55MB)", JP: "PDF資料をダウンロード (55MB)" })}
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="/J-Gate-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/[0.06] px-3 py-2.5 font-inter text-[12px] font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-saffron" />
                    {tx({ EN: "Preview Online", JP: "ブラウザで開く" })}
                  </a>
                  <button
                    onClick={() => {
                      reset();
                      close();
                    }}
                    className="rounded-xl border border-white/20 px-3 py-2.5 font-inter text-[12px] font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
                  >
                    {tx({ EN: "Close", JP: "閉じる" })}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Streamlined 4-Field Form: Name, Organization, E-Mail, Questions */
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              {errors.form && (
                <div className="flex items-center gap-2 rounded-xl border border-crimson/30 bg-crimson/10 px-3 py-2 font-inter text-[12px] text-crimson">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errors.form}
                </div>
              )}

              {/* 1. Name */}
              <div>
                <label htmlFor="br-modal-name" className={labelClass}>
                  {tx({ EN: "Name", JP: "氏名" })} <span className="text-crimson">*</span>
                </label>
                <input
                  id="br-modal-name"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder={tx({ EN: "Your full name", JP: "山田 太郎" })}
                  className={cn(inputClass, errors.fullName ? "border-crimson" : "border-white/12")}
                />
                {errors.fullName && <p className="mt-1 font-inter text-[11px] text-crimson">{errors.fullName}</p>}
              </div>

              {/* 2. Organization */}
              <div>
                <label htmlFor="br-modal-org" className={labelClass}>
                  {tx({ EN: "Organization", JP: "会社名・組織名" })} <span className="text-crimson">*</span>
                </label>
                <input
                  id="br-modal-org"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  placeholder={tx({ EN: "Company or organization", JP: "株式会社インフォボックス" })}
                  className={cn(inputClass, errors.organization ? "border-crimson" : "border-white/12")}
                />
                {errors.organization && <p className="mt-1 font-inter text-[11px] text-crimson">{errors.organization}</p>}
              </div>

              {/* 3. E-Mail */}
              <div>
                <label htmlFor="br-modal-email" className={labelClass}>
                  {tx({ EN: "E-Mail", JP: "メールアドレス" })} <span className="text-crimson">*</span>
                </label>
                <input
                  id="br-modal-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={tx({ EN: "name@company.com", JP: "yamada@company.co.jp" })}
                  className={cn(inputClass, errors.email ? "border-crimson" : "border-white/12")}
                />
                {errors.email && <p className="mt-1 font-inter text-[11px] text-crimson">{errors.email}</p>}
              </div>

              {/* 4. Questions */}
              <div>
                <label htmlFor="br-modal-questions" className={labelClass}>
                  {tx({ EN: "Questions / Requirements", JP: "ご質問・ご要望（任意）" })}
                </label>
                <textarea
                  id="br-modal-questions"
                  rows={2}
                  value={form.questions}
                  onChange={(e) => setForm({ ...form, questions: e.target.value })}
                  placeholder={tx({
                    EN: "Any specific questions or inquiries (optional)...",
                    JP: "進出時期、関心のある支援内容など（任意）...",
                  })}
                  className={cn(inputClass, "resize-none border-white/12")}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-shine mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-crimson to-crimson-deep px-5 py-3 sm:py-3.5 font-inter text-sm font-semibold text-white shadow-xl shadow-crimson/30 hover:shadow-crimson/50 transition-all hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{tx({ EN: "Submitting...", JP: "送信中..." })}</span>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    <span>{tx({ EN: "Download Official Brochure", JP: "公式パンフレットをダウンロード" })}</span>
                  </>
                )}
              </button>

              {/* Direct access bypass */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-mist/70">
                <span>{tx({ EN: "Direct access:", JP: "直接アクセス：" })}</span>
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
                    {tx({ EN: "Preview", JP: "プレビュー" })}
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
