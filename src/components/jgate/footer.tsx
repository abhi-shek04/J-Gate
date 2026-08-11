"use client";

import { ToriiGate, LinkedInIcon, XIcon, InstagramIcon, JapanFlag, IndiaFlag } from "./icons";
import { useI18n } from "@/lib/i18n";
import { useBrochure } from "@/lib/brochure-context";
import { Download } from "lucide-react";

const NAV_LINKS = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "why", key: "nav.why" },
  { id: "services", key: "nav.services" },
  { id: "pricing", key: "nav.pricing" },
  { id: "blogs", key: "nav.blogs" },
  { id: "contact", key: "nav.contact" },
] as const;

const PARTNER_LINKS = ["JETRO", "T-Hub", "Woxsen University", "Genesys Info X", "DMI", "Kodryx AI"];

const SOCIALS = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: XIcon, label: "X (Twitter)", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
];

export function Footer() {
  const { t, lang } = useI18n();
  const { open: openBrochure } = useBrochure();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#04080f] text-white">
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
      <div className="container-jg relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-crimson">
                <ToriiGate className="h-8 w-8" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif-jp text-xl font-bold text-white">J-Gate</span>
                <span className="font-sans-jp text-[10px] text-mist">Jゲート</span>
              </span>
            </div>
            <p className="mt-4 font-inter text-sm leading-relaxed text-mist">{t("footer.tagline")}</p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => e.preventDefault()}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/[0.06] text-mist transition-all hover:-translate-y-0.5 hover:bg-crimson hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
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
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="font-inter text-[14px] text-mist transition-colors hover:text-crimson"
                  >
                    {t(l.key)}
                  </button>
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
                  <a href="#" onClick={(e) => e.preventDefault()} className="font-inter text-[14px] text-mist transition-colors hover:text-crimson">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + CTA */}
          <div>
            <h3 className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
              {t("footer.contact")}
            </h3>
            <ul className="mt-5 space-y-3 font-inter text-[13px] text-mist">
              <li className="flex items-start gap-2"><span>📍</span><span>Cyber Gateway, Hitech City, Hyderabad</span></li>
              <li className="flex items-start gap-2"><span>📧</span><a href="mailto:contact@indobox.co.jp" className="hover:text-crimson">contact@indobox.co.jp</a></li>
              <li className="flex items-start gap-2"><span>📞</span><span>+91-9910360648 (Tanji)</span></li>
            </ul>
            <button
              onClick={openBrochure}
              className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-crimson px-4 py-2.5 font-inter text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep"
            >
              <Download className="h-3.5 w-3.5" />
              {t("footer.bookTour")}
            </button>
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
            <a href="#" onClick={(e) => e.preventDefault()} className="font-inter text-[12px] text-mist/70 hover:text-crimson">{t("footer.privacy")}</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="font-inter text-[12px] text-mist/70 hover:text-crimson">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
