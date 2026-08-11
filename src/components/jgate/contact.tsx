"use client";

import { useState } from "react";
import { MapPin, Mail, Globe, Clock, Send, CheckCircle2 } from "lucide-react";
import { Reveal, Eyebrow } from "./shared";
import { JapanFlag, IndiaFlag, GlobeIcon, LinkedInIcon } from "./icons";
import { cn } from "@/lib/utils";

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Address", value: "J-Gate at Cyber Gateway, Hyderabad, Telangana, India" },
  { icon: Mail, label: "Email", value: "info@jgate.in" },
  { icon: Globe, label: "Website", value: "www.jgate.in" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState<"EN" | "JP">("EN");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "JP",
    inquiry: "Membership Enquiry",
    stage: "Exploring India",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-md border border-white/12 bg-white/[0.04] px-4 py-3 font-inter text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-saffron focus:bg-white/[0.07]";
  const labelClass =
    "mb-1.5 block font-inter text-[11px] font-semibold uppercase text-mist";
  const selectClass = cn(inputClass, "appearance-none");

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(188,26,44,0.10), transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(232,160,26,0.08), transparent 55%)",
        }}
      />

      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>Get in Touch</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Let&apos;s Start the <span className="text-gradient-saffron">Conversation</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter font-light leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              Send us an enquiry or book a private tour. Our team responds
              within 24 hours — in English or Japanese.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form — left, 3/5 */}
          <Reveal variant="left" className="lg:col-span-3">
            <div className="glass-dark rounded-lg p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <JapanFlag className="h-5 w-8" />
                <span className="font-inter text-sm font-semibold text-white">Send Your Enquiry</span>
                <span className="text-white/30">·</span>
                <span className="font-sans-jp text-xs text-mist">お問い合わせ</span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-success" strokeWidth={1.5} />
                  <h3 className="mt-4 font-serif-jp text-2xl font-bold text-white">
                    ありがとうございます！
                  </h3>
                  <p className="mt-2 font-inter text-sm text-mist">
                    Thank you{form.name ? `, ${form.name}` : ""}! Your enquiry has
                    been received. Our team will respond within 24 hours
                    {lang === "JP" ? " in Japanese" : ""}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", company: "", email: "", phone: "", country: "JP", inquiry: "Membership Enquiry", stage: "Exploring India", message: "" });
                    }}
                    className="mt-6 rounded-md border border-white/30 px-5 py-2 font-inter text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input id="name" required value={form.name} onChange={update("name")} placeholder="Your name" className={inputClass} />
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
                    <label htmlFor="country" className={labelClass}>Country of Origin</label>
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
                      <option className="bg-navy">Talent/HR Services</option>
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

                  {/* Language preference toggle */}
                  <div className="sm:col-span-2">
                    <span className={labelClass}>Reply in</span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setLang("EN")}
                        className={cn(
                          "flex-1 rounded-md border px-4 py-2.5 font-inter text-sm font-medium transition-all",
                          lang === "EN" ? "border-crimson bg-crimson text-white" : "border-white/15 text-mist hover:text-white"
                        )}
                      >
                        Reply in English
                      </button>
                      <button
                        type="button"
                        onClick={() => setLang("JP")}
                        className={cn(
                          "flex-1 rounded-md border px-4 py-2.5 font-sans-jp text-sm font-medium transition-all",
                          lang === "JP" ? "border-saffron bg-saffron text-ink" : "border-white/15 text-mist hover:text-white"
                        )}
                      >
                        日本語で返信
                      </button>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="btn-shine flex w-full items-center justify-center gap-2 rounded-md bg-crimson px-6 py-3.5 font-inter text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep"
                    >
                      <Send className="h-4 w-4" />
                      Send Your Enquiry →
                    </button>
                    <p className="mt-3 text-center font-inter text-[12px] text-mist">
                      ⏰ Response within 24 hours ·{" "}
                      <span className="font-sans-jp">24時間以内にご返信いたします</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact details — right, 2/5 */}
          <Reveal variant="right" delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {CONTACT_DETAILS.map((d) => (
                <div key={d.label} className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors hover:border-saffron/30">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-saffron text-white">
                    <d.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.1em" }}>
                      {d.label}
                    </div>
                    <div className="mt-1 font-inter text-sm text-white">{d.value}</div>
                  </div>
                </div>
              ))}

              {/* Japanese enquiries welcome */}
              <div className="relative overflow-hidden rounded-lg border border-saffron/30 bg-gradient-to-br from-crimson/15 to-saffron/10 p-6">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 50%, rgba(232,160,26,0.2) 1.5px, transparent 2px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative flex items-center gap-3">
                  <GlobeIcon className="h-8 w-8 text-saffron" strokeWidth={1.2} />
                  <div>
                    <div className="font-serif-jp text-base font-bold text-white">
                      Japanese Enquiries Welcome
                    </div>
                    <div className="font-sans-jp text-sm text-mist">日本語でのお問い合わせ歓迎</div>
                  </div>
                </div>
                <div className="relative mt-4 flex items-center gap-2">
                  <JapanFlag className="h-4 w-6" />
                  <IndiaFlag className="h-4 w-6" />
                  <span className="font-inter text-[12px] text-mist">Bilingual support (EN/JP)</span>
                </div>
              </div>

              {/* Social */}
              <div className="mt-auto flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <span className="font-inter text-[11px] font-semibold uppercase text-mist" style={{ letterSpacing: "0.1em" }}>
                  Follow J-Gate
                </span>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="J-Gate on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/8 text-white/70 transition-all hover:bg-[#0A66C2] hover:text-white"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
