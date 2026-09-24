"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, ShieldCheck, Download, ArrowUpRight } from "lucide-react";
import { JGateLogo, LinkedInIcon, InstagramIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const FOOTER_SOLUTIONS = [
  {
    href: "/services",
    label: { EN: "Private Cabins & Desks", JP: "専用個室・執務デスク" },
  },
  {
    href: "/services",
    label: { EN: "MCA Incorporation & Banking", JP: "法人設立・登記・口座開設" },
  },
  {
    href: "/team",
    label: { EN: "Resident Japan Desk Advisory", JP: "日本人役員常駐支援" },
  },
  {
    href: "/services",
    label: { EN: "Tech Talent & EOR Staffing", JP: "高度IT人材採用・雇用代行" },
  },
  {
    href: "/auth/brochure",
    label: { EN: "Official Brochure", JP: "公式パンフレット（PDF）" },
    isDownload: true,
  },
] as const;

export function Footer() {
  const { tx, lang } = useI18n();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#070c16] text-ink dark:text-white transition-colors duration-300">
      <div className="container-jg relative py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          {/* Col 1 (3 cols) — Brand, Tagline & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block" aria-label="J-Gate Home">
              <JGateLogo size="md" />
            </Link>
            <p className="font-inter text-[12.5px] sm:text-[13px] font-medium leading-relaxed text-slate-700 dark:text-slate-300">
              {tx({
                EN: "J-Gate | Bridging Japan & India — Talent, Training, Business",
                JP: "J-Gate | 日本とインドを繋ぐ — 人材・育成・ビジネス",
              })}
            </p>
            {/* Outlined square social buttons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-xs transition-all hover:border-crimson hover:text-crimson dark:hover:bg-white/10 hover:shadow-sm"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-xs transition-all hover:border-crimson hover:text-crimson dark:hover:bg-white/10 hover:shadow-sm"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@indobox.co.jp"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-xs transition-all hover:border-crimson hover:text-crimson dark:hover:bg-white/10 hover:shadow-sm"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Quick SLA Assurance Badge */}
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-700/40 px-2.5 py-1.5 text-[11px] font-inter text-emerald-800 dark:text-emerald-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{tx({ EN: "Guaranteed < 24h Response SLA", JP: "24時間以内返信保証（平日）" })}</span>
            </div>
          </div>

          {/* Col 2 (3 cols) — Core Solutions & Capabilities */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
              {tx({ EN: "SERVICES & SOLUTIONS", JP: "主要ソリューション" })}
            </h3>
            <ul className="space-y-2.5 pt-1">
              {FOOTER_SOLUTIONS.map((sol, idx) => (
                <li key={idx}>
                  <Link
                    href={sol.href}
                    className="group flex items-center justify-between text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 hover:text-crimson dark:hover:text-rose-400 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-white/20 group-hover:bg-crimson group-hover:scale-125 transition-all" />
                      <span className="font-medium">{tx(sol.label)}</span>
                    </span>
                    {sol.isDownload ? (
                      <span className="flex items-center gap-1 rounded bg-crimson/10 dark:bg-crimson/20 border border-crimson/20 px-1.5 py-0.5 text-[10px] font-semibold text-crimson dark:text-rose-300">
                        <Download className="h-2.5 w-2.5" /> PDF
                      </span>
                    ) : (
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-crimson" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (3 cols) — Company & Bilateral Operations */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
                {tx({ EN: "COMPANY & OPERATIONS", JP: "運営・体制" })}
              </h3>
              <p className="mt-3.5 font-inter text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {lang === "EN"
                  ? "Operated by Indobox India Private Limited"
                  : "Indobox India Private Limited が運営"}
              </p>
            </div>

            <div className="pt-1">
              <span className="font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                {tx({ EN: "AN INITIATIVE OF", JP: "共同事業・提携母体" })}
              </span>
              <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-xl border border-slate-200/90 dark:border-white/12 bg-slate-50/80 dark:bg-white/[0.04] px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-2xs backdrop-blur-sm whitespace-nowrap">
                {/* Indobox Inc. */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <img
                    src="/logos/indobox-icon.png"
                    alt="Indobox Inc."
                    className="h-5 w-5 sm:h-5.5 sm:w-5.5 object-contain shrink-0"
                  />
                  <span className="font-inter text-[12.5px] sm:text-[13px] font-bold text-ink dark:text-white whitespace-nowrap">
                    Indobox Inc.
                  </span>
                </div>

                {/* Sleek Designer Bilateral Cross Connector */}
                <div className="flex items-center gap-1 shrink-0" aria-hidden>
                  <span className="h-3 w-px bg-slate-300 dark:bg-white/20" />
                  <span className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-crimson/10 dark:bg-crimson/25 text-crimson dark:text-rose-300 font-mono font-bold text-[10px] sm:text-[11px] ring-1 ring-crimson/25 dark:ring-crimson/50 shadow-2xs">
                    ×
                  </span>
                  <span className="h-3 w-px bg-slate-300 dark:bg-white/20" />
                </div>

                {/* Genesys Info X */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <img
                    src="/logos/genesys-info-x.png"
                    alt="Genesys Info X"
                    className="h-6 w-6 sm:h-7 sm:w-7 object-contain shrink-0 dark:brightness-125"
                  />
                  <span className="font-inter text-[12.5px] sm:text-[13px] font-bold text-ink dark:text-white whitespace-nowrap">
                    Genesys Info X
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 (3 cols) — Main Facility Location & Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
              {tx({ EN: "LOCATION & DESK", JP: "所在地・直通連絡" })}
            </h3>
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-crimson shrink-0 mt-0.5" />
                <div className="font-inter text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                  <p className="font-semibold text-ink dark:text-white">Cyber Gateway, Phase 2</p>
                  <p>2nd Floor, Genesys Info X, Block B, Wing 1</p>
                  <p>HITEC City, Madhapur, Hyderabad</p>
                  <p>Telangana 500081, India</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-crimson shrink-0" />
                  <a
                    href="mailto:contact@indobox.co.jp"
                    className="font-inter text-[12.5px] sm:text-[13px] font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-crimson dark:hover:text-crimson"
                  >
                    contact@indobox.co.jp
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-crimson shrink-0" />
                  <a
                    href="tel:+919910360648"
                    className="font-inter text-[12.5px] sm:text-[13px] font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-crimson dark:hover:text-crimson"
                  >
                    +91-9910360648 (JP Desk)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 dark:border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-inter text-[11.5px] sm:text-[12px] text-slate-500 dark:text-slate-400">
            © 2026 J-Gate · Indobox India Private Limited. {tx({ EN: "All Rights Reserved.", JP: "無断転載を禁じます。" })}
          </p>
          <div className="flex gap-4 text-[11.5px] sm:text-[12px] text-slate-500 dark:text-slate-400">
            <Link href="/services" className="transition-colors hover:text-crimson dark:hover:text-crimson">
              {tx({ EN: "Services", JP: "サービス一覧" })}
            </Link>
            <span>·</span>
            <Link href="/auth/brochure" className="transition-colors hover:text-crimson dark:hover:text-crimson">
              {tx({ EN: "Brochure", JP: "パンフレット" })}
            </Link>
            <span>·</span>
            <Link href="/contact" className="transition-colors hover:text-crimson dark:hover:text-crimson">
              {tx({ EN: "Contact", JP: "お問い合わせ" })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
