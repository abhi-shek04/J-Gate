"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2, Building2 } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { JapanFlag, IndiaFlag } from "./icons";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const offices = [
    {
      flag: <JapanFlag className="h-5 w-8" />,
      title: t("contact.tokyo"),
      address: "1-2-3 Marunouchi, Chiyoda City, Tokyo 100-0005, Japan",
      email: "tokyo@j-gate.com",
      phone: "+81 3-1234-5678",
    },
    {
      flag: <IndiaFlag className="h-5 w-8" />,
      title: t("contact.india"),
      address: "Cyber Gateway, Hitech City, Hyderabad, Telangana 500081, India",
      email: "hyderabad@j-gate.com",
      phone: "+91 40-1234-5678",
    },
  ];

  const inputClass =
    "w-full rounded-md border border-white/12 bg-white/[0.05] px-4 py-3 font-inter text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-saffron";
  const labelClass = "mb-1.5 block font-inter text-[11px] font-semibold uppercase text-mist";

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>{t("contact.eyebrow")}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {t("contact.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              {t("contact.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left — Office cards + form */}
          <Reveal variant="left">
            <div className="space-y-4">
              {/* Office cards */}
              {offices.map((o) => (
                <div key={o.title} className="glass-dark rounded-lg p-5">
                  <div className="flex items-center gap-2.5">
                    {o.flag}
                    <h3 className="font-serif-jp text-base font-bold text-white">{o.title}</h3>
                  </div>
                  <div className="mt-3 space-y-2 font-inter text-[13px] text-mist">
                    <p className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 text-saffron mt-0.5" />{o.address}</p>
                    <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-saffron" />{o.email}</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-saffron" />{o.phone}</p>
                  </div>
                </div>
              ))}

              {/* Contact form */}
              <div className="glass-dark rounded-lg p-6">
                <h3 className="mb-4 font-serif-jp text-lg font-bold text-white">{t("contact.form.title")}</h3>
                {sent ? (
                  <div className="flex flex-col items-center py-6 text-center">
                    <CheckCircle2 className="h-12 w-12 text-success" strokeWidth={1.5} />
                    <p className="mt-3 font-inter text-[14px] text-mist">{t("contact.form.success")}</p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-4 rounded-md border border-white/20 px-4 py-2 font-inter text-[12px] text-white hover:bg-white/10"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="c-name" className={labelClass}>{t("contact.form.name")} *</label>
                      <input id="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="c-email" className={labelClass}>{t("contact.form.email")} *</label>
                      <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="c-subject" className={labelClass}>{t("contact.form.subject")}</label>
                      <input id="c-subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="c-message" className={labelClass}>{t("contact.form.message")} *</label>
                      <textarea id="c-message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message..." className={`${inputClass} resize-none`} />
                    </div>
                    <button type="submit" className="btn-shine flex w-full items-center justify-center gap-2 rounded-md bg-crimson px-5 py-3 font-inter text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep">
                      <Send className="h-4 w-4" /> {t("contact.form.submit")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>

          {/* Right — Map placeholder */}
          <Reveal variant="right" delay={120}>
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg border border-white/10">
              <div className="grad-map absolute inset-0" />
              <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
                <defs>
                  <pattern id="contact-map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(232,160,26,0.4)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contact-map-grid)" />
                {/* Roads */}
                <line x1="0" y1="40%" x2="100%" y2="35%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="0" y1="65%" x2="100%" y2="70%" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                <line x1="35%" y1="0" x2="40%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
              </svg>
              {/* Two pins — Tokyo + Hyderabad */}
              <div className="absolute left-[30%] top-[30%] flex flex-col items-center">
                <span className="flex h-9 w-9 animate-pulse-soft items-center justify-center rounded-full bg-crimson text-white shadow-hover">
                  <Building2 className="h-4 w-4" />
                </span>
                <span className="mt-1 whitespace-nowrap rounded bg-midnight/80 px-2 py-0.5 font-inter text-[11px] font-semibold text-white">Tokyo Office</span>
              </div>
              <div className="absolute right-[25%] bottom-[28%] flex flex-col items-center">
                <span className="flex h-9 w-9 animate-pulse-soft items-center justify-center rounded-full bg-saffron text-ink shadow-hover">
                  <Building2 className="h-4 w-4" />
                </span>
                <span className="mt-1 whitespace-nowrap rounded bg-midnight/80 px-2 py-0.5 font-inter text-[11px] font-semibold text-white">Hyderabad Office</span>
              </div>
              <div className="absolute bottom-4 left-4 rounded-md bg-midnight/70 px-3 py-2 backdrop-blur">
                <p className="font-inter text-[11px] text-white/80">📍 Tokyo &amp; Hyderabad</p>
                <p className="font-inter text-[10px] text-mist">Japan-India corridor</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
