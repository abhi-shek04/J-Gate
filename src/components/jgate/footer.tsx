"use client";

import { JGateLogo, JGateMark, LinkedInIcon, XIcon, InstagramIcon, JapanFlag, IndiaFlag, AsanohaSeal } from "./icons";
import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { id: "office-tour", label: "Workspace" },
  { id: "amenities", label: "Amenities" },
  { id: "membership", label: "Membership" },
  { id: "partners", label: "Partners" },
  { id: "team", label: "Founding Team" },
  { id: "advisory", label: "Advisory" },
  { id: "events", label: "Events" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const PARTNER_LINKS = ["JETRO", "T-Hub", "Woxsen University", "Genesys Info X", "MXC", "DMI", "Kodryx AI", "Hyderabad Anime Club"];

const SOCIALS = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: XIcon, label: "X (Twitter)", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
];

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative mt-auto overflow-hidden bg-[#04080f] text-white">
      {/* J-Gate mark watermark faint */}
      <div className="pointer-events-none absolute -right-16 top-8 opacity-[0.04]">
        <JGateMark className="h-56 w-56" />
      </div>

      {/* top hairline */}
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />

      <div className="container-jg relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div>
            <JGateLogo variant="light" />
            <p className="mt-4 font-inter text-sm leading-relaxed text-mist">
              Hyderabad&apos;s premier working hub connecting Japan and India —
              a sovereign platform for Japanese businesses to land, grow, and
              lead in India.
            </p>
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
            <div className="mt-5 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <img
                src="/logos/indobox.jpg"
                alt="Indobox India Private Limited logo"
                className="h-10 w-auto rounded object-contain"
              />
              <div>
                <p className="font-inter text-[12px] text-white/80">
                  Operated by{" "}
                  <span className="font-semibold text-white">Indobox India Pvt. Ltd.</span>
                </p>
                <p className="font-sans-jp text-[11px] text-mist/70">
                  インドボックス・インディア・プライベート・リミテッド
                </p>
              </div>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
              Navigate
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="font-inter text-[14px] text-mist transition-colors hover:text-crimson"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Partners */}
          <div>
            <h3 className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
              Our Network
            </h3>
            <ul className="mt-5 space-y-2.5">
              {PARTNER_LINKS.map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="font-inter text-[14px] text-mist transition-colors hover:text-crimson"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + CTA */}
          <div>
            <h3 className="font-inter text-[11px] font-semibold uppercase text-saffron" style={{ letterSpacing: "0.15em" }}>
              Contact
            </h3>
            <ul className="mt-5 space-y-3 font-inter text-[13px] text-mist">
              <li className="flex items-start gap-2">
                <span aria-hidden>📍</span>
                <span>Cyber Gateway, Hyderabad</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden>📧</span>
                <a href="mailto:info@jgate.in" className="transition-colors hover:text-crimson">info@jgate.in</a>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden>🌐</span>
                <span>www.jgate.in</span>
              </li>
            </ul>
            <button
              onClick={() => go("contact")}
              className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-crimson px-4 py-2.5 font-inter text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-deep"
            >
              Book a Tour
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <div className="mt-5 flex items-center gap-2">
              <AsanohaSeal className="h-6 w-6 text-saffron/40" />
              <span className="font-inter text-[11px] text-mist/60">Est. June 22, 2026</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-center md:flex-row md:text-left">
          <p className="font-inter text-[12px] text-mist/70">
            © 2026 J-Gate | Indobox India Private Limited. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-inter text-[12px] text-mist/70">
            <JapanFlag className="h-3 w-4" />
            <span className="text-crimson">❤</span>
            <IndiaFlag className="h-3 w-4" />
            Crafted in Hyderabad
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms", "Sitemap"].map((t) => (
              <a
                key={t}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="font-inter text-[12px] text-mist/70 transition-colors hover:text-crimson"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
