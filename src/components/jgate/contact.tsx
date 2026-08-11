"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2, Globe2 } from "lucide-react";
import { Reveal } from "./shared";
import { JapanFlag, IndiaFlag, AsanohaSeal } from "./icons";
import { cn } from "@/lib/utils";

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    value: "Cyber Gateway, Hyderabad, Telangana, India",
  },
  { icon: Mail, label: "Email", value: "info@indobox.in" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "JP",
    inquiry: "Membership",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-jgate-gold focus:bg-white/10";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/60";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-jgate-navy py-20 sm:py-28"
    >
      <div className="pattern-asanoha-dark absolute inset-0 opacity-80" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(200,16,46,0.18), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(244,163,0,0.12), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA headline */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <AsanohaSeal className="mx-auto mb-5 h-10 w-10 text-jgate-gold/60" />
            <h2 className="font-serif-jp text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
              Ready to Grow Your Business in{" "}
              <span className="text-gradient-gold">India?</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Join J-Gate — Hyderabad&apos;s gateway for Japanese businesses.
              Schedule a free consultation or book your workspace tour today.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() =>
                  document.getElementById("inquiry-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                className="btn-shine rounded-full bg-jgate-red px-6 py-3 text-sm font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-[#a80c26]"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() =>
                  document.getElementById("inquiry-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/15"
              >
                Book a Tour
              </button>
            </div>
          </div>
        </Reveal>

        {/* Form + details */}
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <JapanFlag className="h-5 w-8" />
                <span className="text-sm font-semibold text-white">
                  Send us an inquiry
                </span>
                <span className="text-white/30">·</span>
                <span className="font-sans-jp text-xs text-white/60">
                  お問い合わせ
                </span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-jgate-green" />
                  <h3 className="mt-4 font-serif-jp text-2xl font-bold text-white">
                    ありがとうございます！
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Thank you, {form.name || "friend"}! Your inquiry has been
                    received. Our team will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        country: "JP",
                        inquiry: "Membership",
                        message: "",
                      });
                    }}
                    className="mt-6 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form
                  id="inquiry-form"
                  onSubmit={handleSubmit}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name <span className="text-jgate-red">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company Name
                    </label>
                    <input
                      id="company"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Your company"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-jgate-red">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+81 / +91 ..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className={labelClass}>
                      Country
                    </label>
                    <select
                      id="country"
                      value={form.country}
                      onChange={update("country")}
                      className={cn(inputClass, "appearance-none")}
                    >
                      <option value="JP" className="bg-jgate-navy">
                        🇯🇵 Japan
                      </option>
                      <option value="IN" className="bg-jgate-navy">
                        🇮🇳 India
                      </option>
                      <option value="Other" className="bg-jgate-navy">
                        🌍 Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="inquiry" className={labelClass}>
                      Inquiry Type
                    </label>
                    <select
                      id="inquiry"
                      value={form.inquiry}
                      onChange={update("inquiry")}
                      className={cn(inputClass, "appearance-none")}
                    >
                      <option className="bg-jgate-navy">Membership</option>
                      <option className="bg-jgate-navy">Partnership</option>
                      <option className="bg-jgate-navy">General</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      Message <span className="text-jgate-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your plans for India..."
                      className={cn(inputClass, "resize-none")}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="btn-shine flex w-full items-center justify-center gap-2 rounded-full bg-jgate-red px-6 py-3.5 text-sm font-semibold text-white shadow-soft-lg transition-all hover:-translate-y-0.5 hover:bg-[#a80c26]"
                    >
                      <Send className="h-4 w-4" />
                      Send Inquiry
                    </button>
                    <p className="mt-3 text-center text-xs text-white/50">
                      We respond to all inquiries within 24 hours. 🇯🇵 Japanese
                      inquiries welcome.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact details */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {CONTACT_DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md transition-colors hover:border-jgate-gold/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-jgate-red to-jgate-gold text-white">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-jgate-gold">
                      {d.label}
                    </div>
                    <div className="mt-1 text-sm text-white">{d.value}</div>
                  </div>
                </div>
              ))}

              {/* Bilingual welcome card */}
              <div className="relative mt-auto overflow-hidden rounded-2xl border border-jgate-gold/30 bg-gradient-to-br from-jgate-red/20 to-jgate-gold/10 p-6">
                <div className="pattern-rangoli absolute inset-0 opacity-40" />
                <div className="relative flex items-center gap-3">
                  <Globe2 className="h-8 w-8 text-jgate-gold" />
                  <div>
                    <div className="font-serif-jp text-lg font-bold text-white">
                      Japanese inquiries welcome
                    </div>
                    <div className="font-sans-jp text-sm text-white/70">
                      日本語のお問い合わせも歓迎します
                    </div>
                  </div>
                </div>
                <div className="relative mt-4 flex items-center gap-2">
                  <JapanFlag className="h-4 w-6" />
                  <IndiaFlag className="h-4 w-6" />
                  <span className="text-xs text-white/60">
                    Bilingual concierge (EN/JP)
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
