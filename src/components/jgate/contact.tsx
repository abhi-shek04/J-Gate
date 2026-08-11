"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { useBrochure } from "@/lib/brochure-context";
import { Download, MapPin, Mail, Globe } from "lucide-react";

export function Contact() {
  const { t, lang } = useI18n();
  const { open: openBrochure } = useBrochure();
  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-navy">
      <div className="pattern-asanoha-navy absolute inset-0 opacity-60" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(188,26,44,0.10), transparent 60%)" }}
      />
      <div className="container-jg relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow light>Contact</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-white"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {t("nav.contact")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              {lang === "EN"
                ? "Connect with J-Gate to start your Japan-India journey."
                : "J-Gateと繋がり、日印の旅を始めましょう。"}
            </p>
            <button
              onClick={openBrochure}
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(188,26,44,0.45)] transition-all hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              {t("nav.brochure")}
            </button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { icon: MapPin, label: "Address", value: "Cyber Gateway, Hyderabad, India" },
              { icon: Mail, label: "Email", value: "info@j-gate.com" },
              { icon: Globe, label: "Website", value: "www.j-gate.com" },
            ].map((c) => (
              <div key={c.label} className="glass-dark flex flex-col items-center gap-2 rounded-lg p-5 text-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-crimson to-saffron text-white">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.1em" }}>
                  {c.label}
                </div>
                <div className="font-inter text-[13px] text-white">{c.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
