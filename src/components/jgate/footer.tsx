"use client";

import Link from "next/link";
import { JGateLogo, LinkedInIcon, XIcon, InstagramIcon, JapanFlag, IndiaFlag } from "./icons";
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

const PARTNER_LINKS = ["T-Hub", "Woxsen University", "Genesys Info X", "Kodryx AI", "MXC"];

const SOCIALS = [
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: XIcon, label: "X (Twitter)" },
  { Icon: InstagramIcon, label: "Instagram" },
];

export function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-[#04080f] text-white">
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
      <div className="container-jg relative py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7 sm:gap-8 lg:gap-10">
          {/* Col 1 — Brand */}
          <div className="col-span-2 lg:col-span-1">
            <JGateLogo size="sm" />
            <p className="mt-3 font-inter text-[13px] sm:text-sm leading-relaxed text-mist">{t("footer.tagline")}</p>
            <div className="mt-4 flex gap-2">
              {SOCIALS.map(({ Icon, label }) => (
                <span
                  key={label}
                  role="button"
                  aria-disabled="true"
                  aria-label={`${label} — coming soon`}
                  className="group relative flex h-8 w-8 sm:h-9 sm:w-9 cursor-not-allowed items-center justify-center rounded-md bg-white/[0.06] text-mist opacity-50 transition-all hover:bg-white/10"
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 font-inter text-[10px] text-mist opacity-0 transition-opacity group-hover:opacity-100">
                    {lang === "EN" ? "Coming soon" : "近日公開"}
                  </span>
                </span>
              ))}
            </div>
            <p className="mt-4 font-inter text-[11.5px] sm:text-[12px] text-mist">
              {lang === "EN" ? "Operated by " : "運営："}
              <span className="font-semibold text-white/80">Indobox India Pvt. Ltd.</span>
            </p>
          </div>

          {/* Col 2 — Navigate */}
          <div className="col-span-1">
            <h3 className="font-inter text-[10.5px] sm:text-[11px] font-semibold uppercase text-saffron tracking-wider">
              {t("footer.navigate")}
            </h3>
            <ul className="mt-3.5 sm:mt-5 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-inter text-[13px] sm:text-[14px] text-mist transition-colors hover:text-crimson">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Network */}
          <div className="col-span-1">
            <h3 className="font-inter text-[10.5px] sm:text-[11px] font-semibold uppercase text-saffron tracking-wider">
              {t("footer.network")}
            </h3>
            <ul className="mt-3.5 sm:mt-5 space-y-2">
              {PARTNER_LINKS.map((p) => (
                <li key={p}>
                  <span className="font-inter text-[13px] sm:text-[14px] text-mist">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="col-span-2 lg:col-span-1 pt-2 sm:pt-0 border-t border-white/[0.06] lg:border-t-0">
            <h3 className="font-inter text-[10.5px] sm:text-[11px] font-semibold uppercase text-saffron tracking-wider">
              {t("footer.contact")}
            </h3>
            <ul className="mt-3.5 sm:mt-5 space-y-2.5 font-inter text-[12.5px] sm:text-[13px] text-mist">
              <li className="flex items-start gap-2"><span>📍</span><span>Cyber Gateway, Hitech City, Hyderabad, Telangana</span></li>
              <li className="flex items-start gap-2"><span>📧</span><a href="mailto:contact@indobox.co.jp" className="hover:text-crimson transition-colors">contact@indobox.co.jp</a></li>
              <li className="flex items-start gap-2"><span>📞</span><a href="tel:+919910360648" className="hover:text-white transition-colors">+91-9910360648 (Tanji)</a></li>
              <li className="flex items-start gap-2"><span>📞</span><a href="tel:+919849811543" className="hover:text-white transition-colors">+91-98498 11543 (Dheeraj)</a></li>
              <li className="flex items-start gap-2"><span>🇯🇵</span><span className="text-white/80">Support provided in Japanese</span></li>
            </ul>
            <Link href="/contact" className="btn-shine mt-4 inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-crimson to-crimson-deep px-4 py-2 font-inter text-[12.5px] sm:text-[13px] font-semibold text-white shadow-[0_0_16px_rgba(188,26,44,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(188,26,44,0.6)]">
              {t("nav.contact")}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-5 text-center md:flex-row md:text-left">
          <p className="font-inter text-[11px] sm:text-[12px] text-mist/70">
            © 2026 J-Gate | Indobox India Private Limited. {t("footer.rights")}
          </p>
          <p className="flex items-center gap-1.5 font-inter text-[11px] sm:text-[12px] text-mist/70">
            <JapanFlag className="h-3 w-4" />
            <span className="text-crimson">❤</span>
            <IndiaFlag className="h-3 w-4" />
            {t("footer.crafted")}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="font-inter text-[12px] text-mist/70 transition-colors hover:text-mist">{t("footer.privacy")}</Link>
            <Link href="#" className="font-inter text-[12px] text-mist/70 transition-colors hover:text-mist">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
