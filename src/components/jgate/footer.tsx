"use client";

import Link from "next/link";
import { JGateLogo, LinkedInIcon, XIcon, InstagramIcon, JapanFlag, IndiaFlag } from "./icons";
import { useI18n } from "@/lib/i18n";

const NAV_LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/why-jgate", key: "nav.why" },
  { href: "/services", key: "nav.services" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/blogs", key: "nav.blogs" },
  { href: "/contact", key: "nav.contact" },
] as const;

const PARTNER_LINKS = ["JETRO", "T-Hub", "Woxsen University", "Genesys Info X", "DMI", "Kodryx AI"];

const SOCIALS = [
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: XIcon, label: "X (Twitter)" },
  { Icon: InstagramIcon, label: "Instagram" },
];

export function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#04080f] text-white">
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
      <div className="container-jg relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div>
            <JGateLogo size="sm" />
            <p className="mt-4 font-inter text-sm leading-relaxed text-mist">{t("footer.tagline")}</p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(({ Icon, label }) => (
                <span
                  key={label}
                  role="button"
                  aria-label={`${label} — coming soon`}
                  className="group relative flex h-9 w-9 cursor-default items-center justify-center rounded-md bg-white/[0.06] text-mist transition-all hover:-translate-y-0.5 hover:bg-crimson hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 font-inter text-[10px] text-mist opacity-0 transition-opacity group-hover:opacity-100">
                    {lang === "EN" ? "Coming soon" : "近日公開"}
                  </span>
                </span>
              ))}
            </div>
            <p className="mt-5 font-inter text-[12px] text-mist">
              {lang === "EN" ? "Operated by " : "運営："}
              <span className="font-semibold text-white/80">Indobox India Pvt. Ltd.</span>
            </p>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <h3 className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
              {t("footer.navigate")}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-inter text-[14px] text-mist transition-colors hover:text-crimson">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Network */}
          <div>
            <h3 className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
              {t("footer.network")}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {PARTNER_LINKS.map((p) => (
                <li key={p}>
                  <span className="font-inter text-[14px] text-mist">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
              {t("footer.contact")}
            </h3>
            <ul className="mt-5 space-y-3 font-inter text-[13px] text-mist">
              <li className="flex items-start gap-2"><span>📍</span><span>Cyber Gateway, Hitech City, Hyderabad, Telangana</span></li>
              <li className="flex items-start gap-2"><span>📧</span><a href="mailto:contact@indobox.co.jp" className="hover:text-crimson">contact@indobox.co.jp</a></li>
              <li className="flex items-start gap-2"><span>📞</span><span>+91-9910360648 (Tanji, Director)</span></li>
              <li className="flex items-start gap-2"><span>📞</span><span>+91-98498 11543 (Dheeraj, Community Manager)</span></li>
              <li className="flex items-start gap-2"><span>🇯🇵</span><span>Support provided in Japanese</span></li>
            </ul>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-crimson px-4 py-2.5 font-inter text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep">
              {t("nav.contact")}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-center md:flex-row md:text-left">
          <p className="font-inter text-[12px] text-mist/70">
            © 2026 J-Gate | Indobox India Private Limited. {t("footer.rights")}
          </p>
          <p className="flex items-center gap-1.5 font-inter text-[12px] text-mist/70">
            <JapanFlag className="h-3 w-4" />
            <span className="text-crimson">❤</span>
            <IndiaFlag className="h-3 w-4" />
            {t("footer.crafted")}
          </p>
          <div className="flex gap-4">
            <span className="font-inter text-[12px] text-mist/70">{t("footer.privacy")}</span>
            <span className="font-inter text-[12px] text-mist/70">{t("footer.terms")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
