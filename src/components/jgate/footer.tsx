"use client";

import Link from "next/link";
import { MapPin, Navigation, Clock, ShieldCheck, Building2, Globe2 } from "lucide-react";
import { JGateLogo, LinkedInIcon, XIcon, InstagramIcon, IndiaFlag } from "./icons";
import { useI18n } from "@/lib/i18n";

const WORKSPACE_LINKS = [
  { href: "/pricing", label: { EN: "Dedicated Fixed Desks", JP: "固定専用デスク" } },
  { href: "/pricing", label: { EN: "Private Executive Cabins", JP: "個室プライベートキャビン" } },
  { href: "/services", label: { EN: "Resident Japan Desk", JP: "常駐ジャパンデスク" } },
  { href: "/services", label: { EN: "Company Setup & MCA Support", JP: "法人設立・登記支援" } },
  { href: "/why-jgate", label: { EN: "Strategic Advantage", JP: "J-Gateの強み・立地" } },
];

const COMPANY_LINKS = [
  { href: "/about", label: { EN: "About J-Gate", JP: "J-Gateについて" } },
  { href: "/team", label: { EN: "Leadership & Advisors", JP: "役員・アドバイザー" } },
  { href: "/pricing", label: { EN: "Membership Plans", JP: "料金プラン" } },
  { href: "/blogs", label: { EN: "Office Gallery & Photos", JP: "施設写真・ギャラリー" } },
  { href: "/faq", label: { EN: "Frequently Asked Questions", JP: "よくあるご質問" } },
  { href: "/contact", label: { EN: "Inquire & Schedule Tour", JP: "見学・お問い合わせ" } },
];

const PARTNERS = ["T-Hub", "Woxsen University", "Genesys Info X", "STPI Hyderabad", "MXC"];

const SOCIALS = [
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: XIcon, label: "X (Twitter)" },
  { Icon: InstagramIcon, label: "Instagram" },
];

export function Footer() {
  const { t, tx, lang } = useI18n();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-[#04080f] text-white">
      {/* Top subtle gradient hairline */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-crimson/50 to-transparent" />

      <div className="container-jg relative py-10 sm:py-14 md:py-16">
        {/* Main Grid: Location Pod + Navigation Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column (5 Cols) — Brand & Location Showcase */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <JGateLogo size="sm" />
              <p className="mt-3 font-inter text-[13px] sm:text-[13.5px] leading-relaxed text-mist max-w-md">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Unique Location & Facility Card */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-sm space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-inter text-[11px] font-bold text-saffron uppercase tracking-wider">
                  <MapPin className="h-3.5 w-3.5 text-saffron" />
                  {tx({ EN: "Facility Location", JP: "拠点所在地" })}
                </span>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-mono text-mist/70">
                  <IndiaFlag className="h-3 w-4 rounded-[2px]" />
                  17.4474° N, 78.3762° E
                </span>
              </div>

              <div className="space-y-1 text-[12.5px] sm:text-[13px] font-inter text-white/90 leading-relaxed">
                <p className="font-semibold text-white">Cyber Gateway, Phase 2</p>
                <p className="text-mist">Hitech City, Madhapur, Hyderabad</p>
                <p className="text-mist">Telangana 500081, India</p>
              </div>

              {/* Transit & Access Strip */}
              <div className="pt-2.5 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-inter text-mist">
                <div className="flex items-center gap-1.5">
                  <Navigation className="h-3 w-3 text-crimson shrink-0" />
                  <span>{tx({ EN: "Metro: 2 Min Walk", JP: "メトロ駅 徒歩2分" })}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-saffron shrink-0" />
                  <span>{tx({ EN: "Airport: 35 Min Drive", JP: "空港 車で35分" })}</span>
                </div>
              </div>
            </div>

            {/* Operator info & Socials */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <p className="font-inter text-[11.5px] sm:text-[12px] text-mist">
                {lang === "EN" ? "Operated by " : "運営："}
                <span className="font-semibold text-white">Indobox India Pvt. Ltd.</span>
              </p>

              <div className="flex gap-2">
                {SOCIALS.map(({ Icon, label }) => (
                  <span
                    key={label}
                    role="button"
                    aria-disabled="true"
                    aria-label={`${label} — coming soon`}
                    className="group relative flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-lg bg-white/[0.05] border border-white/10 text-mist opacity-60 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 font-inter text-[10px] text-mist opacity-0 transition-opacity group-hover:opacity-100">
                      {lang === "EN" ? "Coming soon" : "近日公開"}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) — Structured 2-Column Navigation + Partners */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2 lg:pt-0">
            {/* Col 1: Workspaces & Solutions */}
            <div>
              <h3 className="font-inter text-[11px] font-bold uppercase text-saffron tracking-wider flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                {tx({ EN: "Workspaces & Solutions", JP: "ワークスペース・支援機能" })}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {WORKSPACE_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="font-inter text-[13px] text-mist transition-colors hover:text-white hover:translate-x-0.5 inline-block"
                    >
                      {tx(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Company & Portals */}
            <div>
              <h3 className="font-inter text-[11px] font-bold uppercase text-saffron tracking-wider flex items-center gap-1.5">
                <Globe2 className="h-3.5 w-3.5" />
                {tx({ EN: "Company & Resources", JP: "企業情報・リソース" })}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {COMPANY_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="font-inter text-[13px] text-mist transition-colors hover:text-white hover:translate-x-0.5 inline-block"
                    >
                      {tx(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institutional Ecosystem strip (Spans 2 columns on desktop) */}
            <div className="sm:col-span-2 pt-4 border-t border-white/10">
              <span className="font-inter text-[10.5px] font-bold uppercase tracking-wider text-mist/80 block mb-2.5">
                {tx({ EN: "Institutional Network", JP: "提携パートナー機関" })}
              </span>
              <div className="flex flex-wrap gap-2">
                {PARTNERS.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-inter text-[11.5px] text-mist"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-center md:flex-row md:text-left">
          <p className="font-inter text-[11px] sm:text-[12px] text-mist/70">
            © 2026 J-Gate · Indobox India Private Limited. {t("footer.rights")}
          </p>
          <div className="flex gap-4 text-[11.5px] sm:text-[12px] text-mist/70">
            <Link href="#" className="transition-colors hover:text-white">{t("footer.privacy")}</Link>
            <span>·</span>
            <Link href="#" className="transition-colors hover:text-white">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
