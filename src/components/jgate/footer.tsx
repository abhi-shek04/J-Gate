"use client";

import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { JGateLogo, LinkedInIcon, InstagramIcon } from "./icons";
import { useI18n } from "@/lib/i18n";

const WORKSPACE_PROGRAMS = [
  { href: "/pricing", label: { EN: "Dedicated Fixed Desks", JP: "固定専用デスク" } },
  { href: "/pricing", label: { EN: "Private Executive Cabins", JP: "個室プライベートキャビン" } },
  { href: "/services", label: { EN: "Resident Japan Desk", JP: "常駐ジャパンデスク" } },
  { href: "/services", label: { EN: "Corporate Setup & MCA Support", JP: "法人設立・登記支援" } },
  { href: "/why-jgate", label: { EN: "Meeting & Conference Rooms", JP: "会議室・カンファレンス設備" } },
];

export function Footer() {
  const { tx, lang } = useI18n();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-slate-200/80 bg-white text-ink">
      <div className="container-jg relative py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          {/* Col 1 — Brand, Description & Socials */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="J-Gate Home">
              <JGateLogo size="md" />
            </Link>
            <p className="font-inter text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600">
              {tx({
                EN: "Hyderabad's dedicated working hub for Japanese enterprises at Cyber Gateway. Dedicated workspaces, resident Japan Desk, and bilateral business acceleration.",
                JP: "ハイデラバード・サイバーゲートウェイにある日本企業専用のワーキングハブ＆進出支援拠点。専用デスク、常駐ジャパンデスク、日印ビジネス伴走支援を提供。",
              })}
            </p>
            {/* Outlined square social buttons matching reference */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-xs transition-all hover:border-crimson hover:text-crimson hover:shadow-sm"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-xs transition-all hover:border-crimson hover:text-crimson hover:shadow-sm"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@indobox.co.jp"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-xs transition-all hover:border-crimson hover:text-crimson hover:shadow-sm"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2 — Workspace Programs / Solutions */}
          <div>
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink">
              {tx({ EN: "WORKSPACE SOLUTIONS", JP: "ワークスペース・支援機能" })}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {WORKSPACE_PROGRAMS.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="font-inter text-[13px] text-slate-600 transition-colors hover:text-crimson"
                  >
                    {tx(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company & Operations */}
          <div className="space-y-4">
            <div>
              <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink">
                {tx({ EN: "COMPANY & OPERATIONS", JP: "運営・体制" })}
              </h3>
              <p className="mt-4 font-inter text-[13px] text-slate-600 leading-relaxed">
                {lang === "EN"
                  ? "Operated by Indobox India Private Limited"
                  : "Indobox India Private Limited が運営"}
              </p>
            </div>

            <div className="pt-2">
              <span className="font-inter text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                {tx({ EN: "AN INITIATIVE OF", JP: "共同事業・提携母体" })}
              </span>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src="/logos/indobox-icon.png"
                    alt="Indobox"
                    className="h-5 w-5 object-contain"
                  />
                  <span className="font-inter text-[13px] font-bold text-ink">
                    Indobox India
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/logos/genesys-info-x.png"
                    alt="Genesys Info X"
                    className="h-5 w-auto object-contain max-w-[90px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 — Address for Consultation */}
          <div>
            <h3 className="font-inter text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-ink">
              {tx({ EN: "ADDRESS FOR CONSULTATION", JP: "拠点所在地・ご相談窓口" })}
            </h3>
            <div className="mt-4 space-y-3.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                <p className="font-inter text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600">
                  2nd Floor, Genesys Info X, Block B, CYBER GATEWAY, Wing 1, Phase 2, HITEC City, Hyderabad, Telangana 500081
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-crimson shrink-0" />
                <a
                  href="mailto:contact@indobox.co.jp"
                  className="font-inter text-[13px] text-slate-600 transition-colors hover:text-crimson"
                >
                  contact@indobox.co.jp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200/80 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-inter text-[11.5px] sm:text-[12px] text-slate-500">
            © 2026 J-Gate · Indobox India Private Limited. {tx({ EN: "All Rights Reserved.", JP: "無断転載を禁じます。" })}
          </p>
          <div className="flex gap-4 text-[11.5px] sm:text-[12px] text-slate-500">
            <Link href="#" className="transition-colors hover:text-crimson">
              {tx({ EN: "Privacy Policy", JP: "プライバシーポリシー" })}
            </Link>
            <span>·</span>
            <Link href="#" className="transition-colors hover:text-crimson">
              {tx({ EN: "Terms & Conditions", JP: "利用規約" })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
