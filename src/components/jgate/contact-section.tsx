"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   /contact — Simple Contact Page
   ============================================================ */

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactForm, string>>;

export function ContactSection({ id }: { id?: string }) {
  const { tx } = useI18n();
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
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
      e.message = tx({ EN: "Please enter your message", JP: "メッセージを入力してください" });
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: "General Inquiry",
          message: form.message.trim(),
          lang: "EN",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrors({
          message: tx({
            EN: "Failed to send. Please email us directly at contact@indobox.co.jp",
            JP: "送信に失敗しました。contact@indobox.co.jp に直接ご連絡ください。",
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
          EN: "Network error. Please try again or email us directly.",
          JP: "通信エラーが発生しました。もう一度お試しください。",
        }),
      });
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 dark:border-white/12 bg-slate-50 dark:bg-white/[0.05] px-3.5 py-3 font-inter text-base sm:text-sm text-ink dark:text-white placeholder-slate-400 dark:placeholder-white/35 outline-none transition-all duration-200 focus:border-crimson dark:focus:border-saffron focus:bg-white dark:focus:bg-white/[0.08] focus:ring-2 focus:ring-crimson/15 dark:focus:ring-saffron/20";

  return (
    <div id={id} className="scroll-mt-20">
      <PageHero
        eyebrowKey="contact.eyebrow"
        layout="center"
        titleNode={tx({ EN: "Get in Touch with Our Team", JP: "現地運営チームへのご相談・お問い合わせ" })}
        subtitleNode={tx({
          EN: "Unlocking new possibilities for your business through collaboration with India — talk to the J-Gate operations team.",
          JP: "インド事業の立ち上げ、現地視察、料金プランのご相談など、日本人常駐チームがお答えします。",
        })}
        tags={[
          { EN: "Fast 24-Hour Inquiry Response", JP: "原則24時間以内回答" },
          { EN: "Japanese Language Support", JP: "日本語完全対応" },
          { EN: "On-Site Tour Available", JP: "現地視察予約受付中" },
        ]}
      />

      <section className="section-pad bg-ivory dark:bg-[#080d17]">
        <div className="container-jg">
          <div className="mx-auto max-w-4xl grid md:grid-cols-5 gap-10 md:gap-14 items-start">

            {/* Left — Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <Reveal>
                <h2 className="font-serif-jp text-xl sm:text-2xl font-bold text-ink dark:text-white">
                  {tx({ EN: "Reach Out to Us", JP: "お気軽にご連絡ください" })}
                </h2>
                <p className="mt-2 font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tx({
                    EN: "Have a question or want to learn more about J-Gate? Send us a message and we'll get back to you promptly.",
                    JP: "J-Gateについてのご質問やお問い合わせは、お気軽にメッセージをお送りください。",
                  })}
                </p>
              </Reveal>

              <Reveal delay={50}>
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:contact@indobox.co.jp"
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-crimson/10 dark:bg-rose-950/50 text-crimson dark:text-rose-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-inter text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {tx({ EN: "Email", JP: "メール" })}
                      </p>
                      <p className="font-inter text-sm font-medium text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors">
                        contact@indobox.co.jp
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-inter text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {tx({ EN: "Office", JP: "オフィス" })}
                      </p>
                      <p className="font-inter text-sm text-ink dark:text-white leading-relaxed">
                        Cyber Gateway, HITEC City
                        <br />
                        Hyderabad, Telangana 500081
                      </p>
                      <a
                        href="https://maps.google.com/?q=Cyber+Gateway+Hitec+City+Hyderabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 font-inter text-xs font-medium text-crimson dark:text-rose-400 hover:underline"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {tx({ EN: "View on Google Maps", JP: "Googleマップで確認" })}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — Simple Form */}
            <div className="md:col-span-3">
              <Reveal variant="right" delay={70}>
                <div className="rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0c1424] p-5 sm:p-7 shadow-lg">
                  {sent ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="h-8 w-8" strokeWidth={1.75} />
                      </span>
                      <h4 className="mt-4 font-serif-jp text-lg sm:text-xl font-bold text-ink dark:text-white">
                        {tx({ EN: "Message Sent!", JP: "送信完了！" })}
                      </h4>
                      <p className="mt-2 max-w-sm font-inter text-sm text-slate-600 dark:text-slate-300">
                        {tx({
                          EN: "Thank you for reaching out. We'll get back to you within 24 hours.",
                          JP: "お問い合わせありがとうございます。24時間以内にご連絡いたします。",
                        })}
                      </p>
                      <button
                        onClick={reset}
                        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-white/15 px-4 py-2 font-inter text-sm font-medium text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
                      >
                        {tx({ EN: "Send Another Message", JP: "別のメッセージを送る" })}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <h3 className="font-serif-jp text-lg font-bold text-ink dark:text-white">
                        {tx({ EN: "Send Us a Message", JP: "メッセージを送る" })}
                      </h3>

                      {/* Name */}
                      <div>
                        <label htmlFor="c-name" className="mb-1.5 block font-inter text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {tx({ EN: "Name", JP: "お名前" })} <span className="text-crimson">*</span>
                        </label>
                        <input
                          id="c-name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder={tx({ EN: "Your name", JP: "お名前" })}
                          className={cn(inputClass, errors.name && "border-crimson ring-1 ring-crimson")}
                        />
                        {errors.name && (
                          <p className="mt-1 font-inter text-xs text-crimson">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="c-email" className="mb-1.5 block font-inter text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {tx({ EN: "Email", JP: "メールアドレス" })} <span className="text-crimson">*</span>
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className={cn(inputClass, errors.email && "border-crimson ring-1 ring-crimson")}
                        />
                        {errors.email && (
                          <p className="mt-1 font-inter text-xs text-crimson">{errors.email}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="c-message" className="mb-1.5 block font-inter text-xs font-semibold text-slate-600 dark:text-slate-300">
                          {tx({ EN: "Message", JP: "メッセージ" })} <span className="text-crimson">*</span>
                        </label>
                        <textarea
                          id="c-message"
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder={tx({
                            EN: "How can we help you?",
                            JP: "お問い合わせ内容をご記入ください",
                          })}
                          className={cn(inputClass, "resize-none", errors.message && "border-crimson ring-1 ring-crimson")}
                        />
                        {errors.message && (
                          <p className="mt-1 font-inter text-xs text-crimson">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-crimson hover:bg-crimson-deep px-5 py-3 font-inter text-sm font-semibold text-white shadow-md transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                      >
                        {submitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            {tx({ EN: "Sending...", JP: "送信中..." })}
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            {tx({ EN: "Send Message", JP: "送信する" })}
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
