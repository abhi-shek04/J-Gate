"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Download, AlertCircle, Loader2 } from "lucide-react";
import { useBrochure } from "@/lib/brochure-context";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   BrochureModal — Streamlined Lead Capture
   Fields: Name, Organization, E-Mail, Questions
   - On submit → /api/brochure/submit → DB + admin email
   - Auto-triggers brochure download
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
  const [downloadUrl, setDownloadUrl] = useState("");

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "submitting") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, status, close]);

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

      // Auto-trigger download
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
    setForm({ fullName: "", organization: "", email: "", questions: "" });
    setErrors({});
    setStatus("idle");
  };

  const inputClass =
    "w-full rounded-md border bg-white/[0.05] px-3.5 py-2.5 sm:px-4 sm:py-3 font-inter text-base sm:text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-crimson";
  const labelClass = "mb-1 sm:mb-1.5 block font-inter text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-wider text-mist";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-midnight/80 p-3 sm:p-4 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget && status !== "submitting") close();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Download Brochure"
    >
      <div
        className="relative my-4 sm:my-8 w-full max-w-lg overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-navy shadow-2xl"
        style={{ animation: "jg-modal-in 0.3s cubic-bezier(0.4,0,0.2,1)" }}
      >
        <style>{`@keyframes jg-modal-in { from { opacity:0; transform: translateY(20px) scale(0.97) } to { opacity:1; transform: translateY(0) scale(1) } }`}</style>

        {/* Close button */}
        <button
          onClick={() => status !== "submitting" && close()}
          disabled={status === "submitting"}
          aria-label="Close"
          className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/8 text-white/70 transition-colors hover:bg-white/15 hover:text-white disabled:opacity-40"
        >
          <X className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
        </button>

        {/* Header (Clean, no yellow badge) */}
        <div className="relative overflow-hidden bg-gradient-to-br from-crimson/20 via-navy to-navy p-4 sm:p-7 pb-3.5 sm:pb-6">
          <h2 className="font-serif-jp text-lg sm:text-2xl font-bold text-white">
            {status === "success"
              ? tx({ EN: "Your Download Has Started", JP: "ダウンロードを開始しました" })
              : tx({ EN: "Download Official Brochure", JP: "公式パンフレットのダウンロード" })}
          </h2>
          <p className="mt-1 sm:mt-1.5 font-inter text-[12px] sm:text-[13px] leading-relaxed text-mist">
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
        </div>

        {/* Body */}
        <div className="p-4 sm:p-7 pt-3 sm:pt-4">
          {status === "success" ? (
            /* Success screen */
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <CheckCircle2 className="h-12 w-12" strokeWidth={1.5} />
              </div>
              <p className="mt-5 max-w-xs font-inter text-[14px] leading-relaxed text-mist">
                {tx({
                  EN: "Your download has started. Our bilingual directors are also available for private consultation.",
                  JP: "資料のダウンロードを開始しました。ご不明点や現地進出のご相談はいつでもお気軽にお問い合わせください。",
                })}
              </p>
              <div className="mt-6 flex w-full flex-col gap-2.5 sm:flex-row">
                <a
                  href={downloadUrl || "/J-Gate-Brochure.pdf"}
                  download="J-Gate-Brochure.pdf"
                  className="btn-shine flex flex-1 items-center justify-center gap-2 rounded-md bg-crimson px-5 py-3 font-inter text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep"
                >
                  <Download className="h-4 w-4" />
                  {tx({ EN: "Download Again", JP: "再ダウンロード" })}
                </a>
                <button
                  onClick={() => {
                    reset();
                    close();
                  }}
                  className="flex-1 rounded-md border border-white/20 px-5 py-3 font-inter text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {tx({ EN: "Close", JP: "閉じる" })}
                </button>
              </div>
            </div>
          ) : (
            /* Streamlined 4-Field Form: Name, Organization, E-Mail, Questions */
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {errors.form && (
                <div className="flex items-center gap-2 rounded-md border border-crimson/30 bg-crimson/10 px-3 py-2 font-inter text-[12px] text-crimson">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errors.form}
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
                  className={cn(inputClass, errors.fullName ? "border-crimson" : "border-white/12")}
                />
                {errors.fullName && <p className="mt-1 font-inter text-[11px] text-crimson">{errors.fullName}</p>}
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
                  className={cn(inputClass, errors.organization ? "border-crimson" : "border-white/12")}
                />
                {errors.organization && <p className="mt-1 font-inter text-[11px] text-crimson">{errors.organization}</p>}
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
                  className={cn(inputClass, errors.email ? "border-crimson" : "border-white/12")}
                />
                {errors.email && <p className="mt-1 font-inter text-[11px] text-crimson">{errors.email}</p>}
              </div>

              {/* 4. Questions */}
              <div>
                <label htmlFor="br-questions" className={labelClass}>
                  {tx({ EN: "Questions", JP: "ご質問・ご要望" })}
                </label>
                <textarea
                  id="br-questions"
                  rows={2}
                  value={form.questions}
                  onChange={(e) => setForm({ ...form, questions: e.target.value })}
                  placeholder={tx({
                    EN: "Any specific questions or inquiries (optional)...",
                    JP: "進出時期、関心のある支援内容など（任意）...",
                  })}
                  className={cn(inputClass, "resize-none")}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-shine mt-1 sm:mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-crimson hover:bg-crimson-deep px-5 py-3 sm:py-3.5 font-inter text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
