"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { JGateLogo, LinkedInIcon, InstagramIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const ECOSYSTEM = [
  "Data Intelligence",
  "Kodryx.ai",
  "YANC",
  "Daakia",
  "Fingerprint Films",
  "MXC",
  "Hyderabad Anime Club",
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
          </div>

          {/* Col 2 (3 cols) — Ecosystem Partners */}
          <div className="lg:col-span-3">
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
              {tx({ EN: "ECOSYSTEM PARTNERS", JP: "エコシステムパートナー" })}
            </h3>
            <ul className="mt-4 space-y-2">
              {ECOSYSTEM.map((name) => (
                <li key={name}>
                  <span className="font-inter text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-400">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (3 cols) — Company & Operations */}
          <div className="lg:col-span-3 space-y-4">
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
              <span className="font-inter text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                {tx({ EN: "AN INITIATIVE OF", JP: "共同事業・提携母体" })}
              </span>
              <div className="flex flex-col gap-2 max-w-fit">
                {/* Indobox Inc. */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-200/90 dark:border-white/12 bg-slate-50/80 dark:bg-white/[0.04] px-2.5 py-1.5 shadow-2xs">
                  <img
                    src="/logos/indobox-icon.png"
                    alt="Indobox Inc."
                    className="h-4.5 w-4.5 object-contain shrink-0"
                  />
                  <span className="font-inter text-[12px] sm:text-[12.5px] font-bold text-ink dark:text-white">
                    Indobox Inc.
                  </span>
                </div>
                {/* Genesys Info X */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-200/90 dark:border-white/12 bg-slate-50/80 dark:bg-white/[0.04] px-2.5 py-1.5 shadow-2xs">
                  <img
                    src="/logos/genesys-info-x.png"
                    alt="Genesys Info X"
                    className="h-5 w-5 object-contain shrink-0 dark:brightness-125"
                  />
                  <span className="font-inter text-[12px] sm:text-[12.5px] font-bold text-ink dark:text-white">
                    Genesys Info X
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 (3 cols) — Main Facility Location */}
          <div className="lg:col-span-3">
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink dark:text-white">
              {tx({ EN: "LOCATION & DESK", JP: "所在地・窓口" })}
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

              <div className="space-y-1.5 pt-0.5">
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-crimson shrink-0" />
                  <a
                    href="mailto:contact@indobox.co.jp"
                    className="font-inter text-[12.5px] sm:text-[13px] font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-crimson dark:hover:text-crimson"
                  >
                    contact@indobox.co.jp
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-crimson shrink-0" />
                  <a
                    href="tel:+817040321282"
                    className="font-inter text-[12.5px] sm:text-[13px] font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-crimson dark:hover:text-crimson"
                  >
                    +81 70-4032-1282 (Tanji)
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
