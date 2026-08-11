"use client";

import { useState } from "react";
import { MapPin, Mail, Globe, Clock, Send, CheckCircle2, Navigation } from "lucide-react";
import { Reveal } from "./shared";
import { JapanFlag, IndiaFlag, LinkedInIcon, XIcon, InstagramIcon } from "./icons";
import { cn } from "@/lib/utils";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState<"EN" | "JP">("EN");
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    country: "JP", inquiry: "Membership Enquiry", stage: "Exploring India", message: "",
  });

  const update = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full rounded-lg border border-white/12 bg-white/[0.05] px-4 py-3 font-inter text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-saffron focus:bg-white/[0.08]";
  const labelClass = "mb-1.5 block font-inter text-[11px] font-semibold uppercase text-mist";
  const selectClass = cn(inputClass, "appearance-none");

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div className="container-jg relative">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT — Form */}
          <Reveal variant="left">
            <div className="glass-dark rounded-lg p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <JapanFlag className="h-5 w-8" />
                <h3 className="font-serif-jp text-2xl font-bold text-white">Get in Touch</h3>
              </div>
              <p className="mb-6 font-inter text-[14px] text-mist">
                We reply within 24 hours — in English or Japanese.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-success" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif-jp text-2xl font-bold text-white">ありがとうございます！</h3>
                  <p className="mt-2 font-inter text-sm text-mist">
                    Thank you{form.name ? `, ${form.name}` : ""}! Your enquiry has been received. Our team will respond within 24 hours{lang === "JP" ? " in Japanese" : ""}.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", country: "JP", inquiry: "Membership Enquiry", stage: "Exploring India", message: "" }); }}
                    className="mt-6 rounded-md border border-white/30 px-5 py-2 font-inter text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input id="name" required value={form.name} onChange={update("name")} placeholder="Your full name / お名前" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelClass}>Company Name</label>
                    <input id="company" value={form.company} onChange={update("company")} placeholder="Your company" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="you@company.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone Number</label>
                    <input id="phone" value={form.phone} onChange={update("phone")} placeholder="+81 / +91 ..." className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="country" className={labelClass}>Country</label>
                    <select id="country" value={form.country} onChange={update("country")} className={selectClass}>
                      <option value="JP" className="bg-navy">🇯🇵 Japan</option>
                      <option value="IN" className="bg-navy">🇮🇳 India</option>
                      <option value="Other" className="bg-navy">🌍 Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="inquiry" className={labelClass}>Inquiry Type</label>
                    <select id="inquiry" value={form.inquiry} onChange={update("inquiry")} className={selectClass}>
                      <option className="bg-navy">Membership Enquiry</option>
                      <option className="bg-navy">Book a Tour</option>
                      <option className="bg-navy">Partnership</option>
                      <option className="bg-navy">Talent &amp; HR</option>
                      <option className="bg-navy">General</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="stage" className={labelClass}>Business Stage</label>
                    <select id="stage" value={form.stage} onChange={update("stage")} className={selectClass}>
                      <option className="bg-navy">Exploring India</option>
                      <option className="bg-navy">Planning Entry</option>
                      <option className="bg-navy">Already Established</option>
                      <option className="bg-navy">Scaling</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea id="message" required rows={4} value={form.message} onChange={update("message")} placeholder="Tell us about your plans for India..." className={cn(inputClass, "resize-none")} />
                  </div>
                  <div className="sm:col-span-2">
                    <span className={labelClass}>Reply language</span>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setLang("EN")} className={cn("flex-1 rounded-md border px-4 py-2.5 font-inter text-sm font-medium transition-all", lang === "EN" ? "border-crimson bg-crimson text-white" : "border-white/15 text-mist hover:text-white")}>
                        English
                      </button>
                      <button type="button" onClick={() => setLang("JP")} className={cn("flex-1 rounded-md border px-4 py-2.5 font-sans-jp text-sm font-medium transition-all", lang === "JP" ? "border-saffron bg-saffron text-ink" : "border-white/15 text-mist hover:text-white")}>
                        日本語で返信
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-shine flex w-full items-center justify-center gap-2 rounded-md bg-crimson px-6 py-3.5 font-inter text-[16px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep">
                      <Send className="h-4 w-4" />
                      Send Your Enquiry →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* RIGHT — Details + map + social */}
          <Reveal variant="right" delay={120}>
            <div className="flex h-full flex-col gap-4">
              {/* Details list */}
              <div className="space-y-4">
                {[
                  { icon: MapPin, jp: "Cyber Gateway, Hyderabad, Telangana, India", label: "Address" },
                  { icon: Mail, jp: "info@jgate.in", label: "Email" },
                  { icon: Globe, jp: "www.jgate.in", label: "Website" },
                ].map((d) => (
                  <div key={d.label} className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-saffron text-white">
                      <d.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.1em" }}>{d.label}</div>
                      <div className="mt-1 font-inter text-sm text-white">{d.jp}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bilingual welcome */}
              <div className="relative overflow-hidden rounded-lg border border-saffron/30 bg-gradient-to-br from-crimson/15 to-saffron/10 p-5">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(232,160,26,0.2) 1.5px, transparent 2px)", backgroundSize: "24px 24px" }} />
                <div className="relative flex items-start gap-3">
                  <JapanFlag className="h-5 w-8 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-serif-jp text-[15px] font-bold text-white">日本語でのお問い合わせ歓迎</div>
                    <div className="font-inter text-[13px] text-mist">Japanese enquiries warmly welcomed</div>
                  </div>
                </div>
                <div className="relative mt-3 flex items-center gap-3 border-t border-white/10 pt-3">
                  <Clock className="h-4 w-4 text-saffron" />
                  <div>
                    <div className="font-inter text-[13px] text-white">Response within 24 hours</div>
                    <div className="font-sans-jp text-[12px] text-mist">24時間以内にご返信いたします</div>
                  </div>
                </div>
              </div>

              {/* CSS Map placeholder — Cyber Gateway area */}
              <div className="relative h-40 overflow-hidden rounded-lg border border-white/10">
                <div className="grad-map absolute inset-0" />
                {/* Map grid lines */}
                <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
                  <defs>
                    <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                      <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(232,160,26,0.4)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  {/* Roads */}
                  <line x1="0" y1="60%" x2="100%" y2="55%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <line x1="30%" y1="0" x2="40%" y2="100%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <line x1="70%" y1="0" x2="65%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                </svg>
                {/* Pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="flex h-8 w-8 animate-pulse-soft items-center justify-center rounded-full bg-crimson text-white shadow-hover">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="mt-1 whitespace-nowrap rounded bg-midnight/80 px-2 py-0.5 font-inter text-[11px] font-semibold text-white">
                    Cyber Gateway
                  </span>
                </div>
                <span className="absolute bottom-2 right-3 flex items-center gap-1 font-inter text-[10px] text-white/40">
                  <Navigation className="h-3 w-3" /> Hyderabad, India
                </span>
              </div>

              {/* Social row */}
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <span className="font-inter text-[11px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.1em" }}>
                  Follow J-Gate
                </span>
                <div className="flex gap-2.5">
                  {[
                    { Icon: LinkedInIcon, label: "LinkedIn" },
                    { Icon: InstagramIcon, label: "Instagram" },
                    { Icon: XIcon, label: "X (Twitter)" },
                  ].map(({ Icon, label }) => (
                    <a key={label} href="#" onClick={(e) => e.preventDefault()} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-md bg-white/8 text-white/70 transition-all hover:-translate-y-0.5 hover:bg-crimson hover:text-white">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
