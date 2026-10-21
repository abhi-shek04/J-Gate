"use client";

import Link from "next/link";
import { MapPin, Mail, Download, ArrowUpRight } from "lucide-react";
import { JGateLogo, LinkedInIcon, InstagramIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const ECOSYSTEM = [
  { name: "DMI", href: "https://www.datamintelligence.com/" },
  { name: "Kodryx.ai", href: "https://kodryx.ai/" },
  { name: "YANC", href: "https://yanc.in/" },
  { name: "Daakia", href: "https://www.daakia.co.in/" },
  { name: "Fingerprint Films", href: "https://fingerprintfilms.tv/" },
  { name: "MXC", href: "https://mxcignite.com/" },
  { name: "Hyderabad Anime Club", href: "https://www.instagram.com/hyderabadanimeclub" },
] as const;

export function Footer() {
  const { tx, lang } = useI18n();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-slate-200/80 dark:border-white/10 bg-white dark:bg-black text-ink dark:text-white transition-colors duration-300">
      <div className="container-jg relative py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 sm:gap-8 lg:gap-6 xl:gap-8">
          {/* Col 1 (3 cols) — Brand, Tagline, Socials & Brochure CTA */}
          <div className="lg:col-span-3 space-y-4 pb-6 border-b border-slate-200/70 dark:border-white/10 sm:border-b-0 sm:pb-0">
            <Link href="/" className="inline-block" aria-label="J-Gate Home">
              <JGateLogo size="md" />
            </Link>
            <p className="font-inter text-[12.5px] sm:text-[13px] font-medium leading-relaxed text-slate-700 dark:text-slate-300 max-w-sm">
              {tx({
                EN: "J-Gate | Connecting Japan and India — Talent, Training, Business",
                JP: "J-Gate | 日本とインドを繋ぐ — 人材・育成・ビジネス",
              })}
            </p>

            {/* Social Channels Row */}
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href="https://www.linkedin.com/company/indobox-inc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/90 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-2xs transition-all hover:border-crimson hover:text-crimson dark:hover:bg-white/10 hover:shadow-xs"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/indobox.inc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/90 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-2xs transition-all hover:border-crimson hover:text-crimson dark:hover:bg-white/10 hover:shadow-xs"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@indobox.co.jp"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/90 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-2xs transition-all hover:border-crimson hover:text-crimson dark:hover:bg-white/10 hover:shadow-xs"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Direct Brochure Download CTA */}
            <div className="pt-1">
              <Link
                href="/auth/brochure"
                prefetch={true}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-crimson/25 dark:border-rose-400/25 bg-crimson/[0.04] dark:bg-rose-950/20 px-3.5 py-2.5 font-inter text-[12px] font-semibold text-crimson dark:text-rose-300 hover:bg-crimson hover:text-white dark:hover:bg-crimson dark:hover:text-white transition-all shadow-2xs text-center group"
              >
                <Download className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5" />
                <span>{tx({ EN: "Download Official Brochure", JP: "公式パンフレット資料請求" })}</span>
              </Link>
            </div>
          </div>

          {/* Col 2 (2 cols) — Ecosystem Partners (Mobile: 2-col compact grid, Desktop: vertical list) */}
          <div className="lg:col-span-2 space-y-3 pb-6 border-b border-slate-200/70 dark:border-white/10 sm:border-b-0 sm:pb-0">
            <div className="flex items-center justify-between">
              <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
                {tx({ EN: "OUR PARTNERS", JP: "エコシステムパートナー" })}
              </h3>
              <span className="sm:hidden font-mono text-[9.5px] font-medium text-slate-400 dark:text-slate-500">
                Ecosystem
              </span>
            </div>

            {/* Responsive Partners Layout: 2-column tactile pills on mobile, clean list on sm+ */}
            <div className="grid grid-cols-2 gap-2 sm:block sm:space-y-1.5">
              {ECOSYSTEM.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-1.5 rounded-lg border border-slate-200/70 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] px-2.5 py-2 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 font-inter text-[11.5px] sm:text-[12.5px] text-slate-700 dark:text-slate-300 sm:text-slate-600 dark:sm:text-slate-400 hover:text-crimson dark:hover:text-crimson transition-all"
                >
                  <span className="truncate">{partner.name}</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-crimson dark:group-hover:text-crimson group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 (4 cols) — Bilateral Initiative & Management Pod */}
          <div className="lg:col-span-4 space-y-3 pb-6 border-b border-slate-200/70 dark:border-white/10 sm:border-b-0 sm:pb-0">
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
              {tx({ EN: "COMPANY & OPERATIONS", JP: "運営・体制" })}
            </h3>

            {/* Framed Bilateral Alliance Institutional Pod */}
            <div className="rounded-xl border border-slate-200/90 dark:border-white/15 bg-slate-50/80 dark:bg-[#0b0b0e] p-3 sm:p-3.5 space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson shrink-0" />
                  {tx({ EN: "AN INITIATIVE OF", JP: "共同事業・提携母体" })}
                </span>
                <span className="font-mono text-[9.5px] sm:text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Bilateral Alliance
                </span>
              </div>

              {/* Side-by-side entities row with guaranteed centering and no awkward wraps */}
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5 sm:gap-2.5 rounded-lg border border-slate-200/70 dark:border-white/10 bg-white dark:bg-black/50 px-2.5 py-2 sm:px-3 sm:py-2.5 shadow-2xs">
                {/* Indobox India */}
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md bg-white dark:bg-[#121215] p-0.5 border border-slate-200/80 dark:border-white/20 shadow-2xs shrink-0">
                    <img
                      src="/logos/indobox-india-icon.png"
                      alt="Indobox India"
                      className="h-full w-full object-contain shrink-0"
                    />
                  </div>
                  <div className="min-w-0 leading-tight">
                    <p className="font-inter text-[11.5px] sm:text-[12.5px] font-bold text-ink dark:text-white truncate">
                      Indobox India
                    </p>
                    <p className="font-inter text-[9px] sm:text-[9.5px] text-slate-500 dark:text-slate-400 truncate">
                      Operations
                    </p>
                  </div>
                </div>

                {/* Sleek Bilateral Cross Connector */}
                <div className="flex items-center justify-center shrink-0 px-0.5 sm:px-1" aria-hidden>
                  <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-crimson/10 dark:bg-crimson/25 text-crimson dark:text-rose-300 font-mono font-bold text-[10.5px] sm:text-[11px] ring-1 ring-crimson/25 dark:ring-crimson/50 shadow-2xs">
                    ×
                  </span>
                </div>

                {/* Genesys Info X */}
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md bg-white dark:bg-[#121215] p-0.5 border border-slate-200/80 dark:border-white/20 shadow-2xs shrink-0">
                    <img
                      src="/logos/genesys-info-x.png"
                      alt="Genesys Info X"
                      className="h-full w-full object-contain shrink-0"
                    />
                  </div>
                  <div className="min-w-0 leading-tight">
                    <p className="font-inter text-[11.5px] sm:text-[12.5px] font-bold text-ink dark:text-white truncate">
                      Genesys Info X
                    </p>
                    <p className="font-inter text-[9px] sm:text-[9.5px] text-slate-500 dark:text-slate-400 truncate">
                      Facility Partner
                    </p>
                  </div>
                </div>
              </div>

              {/* Legal operating entity note */}
              <p className="font-inter text-[11.5px] sm:text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed pt-0.5">
                {lang === "EN"
                  ? "Operated by Indobox India Private Limited"
                  : "Indobox India Private Limited が運営"}
              </p>
            </div>
          </div>

          {/* Col 4 (3 cols) — Office Location & Direct Channel */}
          <div className="lg:col-span-3 lg:pl-2 xl:pl-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
                {tx({ EN: "OFFICE LOCATION", JP: "所在地・窓口" })}
              </h3>
              <span className="sm:hidden font-mono text-[9.5px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Cyber Gateway
              </span>
            </div>

            {/* Mobile framed card, seamless text on desktop */}
            <div className="rounded-xl border border-slate-200/90 dark:border-white/15 bg-slate-50/80 dark:bg-[#0b0b0e] p-3 sm:p-0 sm:border-0 sm:bg-transparent space-y-3 shadow-2xs sm:shadow-none">
              <div className="flex items-start gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-crimson/10 dark:bg-crimson/20 text-crimson shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div className="font-inter text-[12px] sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-400 min-w-0">
                  <p className="font-bold text-ink dark:text-white">Hyderabad Office</p>
                  <p>2nd Floor, Genesys Info X, Block B, Wing 1</p>
                  <p>Cyber Gateway, Madhapur, Hyderabad</p>
                  <p>Telangana 500081, India</p>
                </div>
              </div>

              {/* Direct Email Channel */}
              <a
                href="mailto:contact@indobox.co.jp"
                className="flex items-center justify-between gap-2 rounded-lg border border-slate-200/80 dark:border-white/10 bg-white dark:bg-black/50 px-3 py-2 text-[12px] sm:text-[12.5px] font-medium text-slate-700 dark:text-slate-300 hover:text-crimson hover:border-crimson/30 dark:hover:text-rose-400 transition-all sm:border-0 sm:bg-transparent sm:p-0 sm:justify-start sm:gap-2.5 group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="h-3.5 w-3.5 text-crimson shrink-0" />
                  <span className="truncate">contact@indobox.co.jp</span>
                </div>
                <span className="sm:hidden font-inter text-[10.5px] text-crimson dark:text-rose-400 font-semibold shrink-0">
                  {tx({ EN: "Direct Mail", JP: "窓口へ" })}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 dark:border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-slate-500 dark:text-slate-400 font-inter text-[11px] sm:text-[12px]">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-[10px] font-medium text-slate-600 dark:text-slate-300">
              🇯🇵 Tokyo ⇄ 🇮🇳 Hyderabad
            </span>
            <span>
              © 2026 J-Gate · Indobox India Private Limited. {tx({ EN: "All Rights Reserved.", JP: "無断転載を禁じます。" })}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11.5px] sm:text-[12px] text-slate-500 dark:text-slate-400">
            <Link href="#" className="py-1 px-1.5 transition-colors hover:text-crimson dark:hover:text-crimson">
              {tx({ EN: "Privacy Policy", JP: "プライバシーポリシー" })}
            </Link>
            <span aria-hidden>·</span>
            <Link href="#" className="py-1 px-1.5 transition-colors hover:text-crimson dark:hover:text-crimson">
              {tx({ EN: "Terms & Conditions", JP: "利用規約" })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
