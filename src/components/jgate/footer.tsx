"use client";

import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { JGateLogo, LinkedInIcon, InstagramIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const NAV_LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/why-jgate", key: "nav.why" },
  { href: "/services", key: "nav.services" },
  { href: "/team", key: "nav.team" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/faq", key: "nav.faq" },
  { href: "/blogs", key: "nav.blogs" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function Footer() {
  const { t, tx, lang } = useI18n();

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
          </div>

          {/* Col 2 (2 cols) — Previous Site Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
              {t("footer.navigate")}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-1 sm:space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-inter text-[13px] text-slate-600 dark:text-slate-400 transition-colors hover:text-crimson dark:hover:text-rose-400"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (4 cols) — Company & Operations */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
                {tx({ EN: "COMPANY & OPERATIONS", JP: "運営・体制" })}
              </h3>
              <p className="mt-4 font-inter text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                {lang === "EN"
                  ? "Operated by Indobox India Private Limited"
                  : "Indobox India Private Limited が運営"}
              </p>
            </div>

            <div className="pt-1">
              <span className="font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2.5">
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

          {/* Col 4 (3 cols) — Main Facility Location */}
          <div className="lg:col-span-3">
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
              {tx({ EN: "LOCATION", JP: "所在地" })}
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-crimson shrink-0 mt-0.5" />
                <div className="font-inter text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                  <p className="font-semibold text-ink dark:text-white">Cyber Gateway, Phase 2</p>
                  <p>2nd Floor, Genesys Info X, Block B, Wing 1</p>
                  <p>HITEC City, Madhapur, Hyderabad</p>
                  <p>Telangana 500081, India</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-0.5">
                <Mail className="h-4 w-4 text-crimson shrink-0" />
                <a
                  href="mailto:contact@indobox.co.jp"
                  className="font-inter text-[13px] font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-crimson dark:hover:text-crimson"
                >
                  contact@indobox.co.jp
                </a>
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
            <Link href="#" className="transition-colors hover:text-crimson dark:hover:text-crimson">
              {tx({ EN: "Privacy Policy", JP: "プライバシーポリシー" })}
            </Link>
            <span>·</span>
            <Link href="#" className="transition-colors hover:text-crimson dark:hover:text-crimson">
              {tx({ EN: "Terms & Conditions", JP: "利用規約" })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
