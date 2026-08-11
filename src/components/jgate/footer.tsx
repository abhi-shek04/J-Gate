"use client";

import { ToriiGate, LinkedInIcon, XIcon, InstagramIcon, JapanFlag, IndiaFlag } from "./icons";

const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact" },
];

const PARTNER_LINKS = [
  "Genesys Info X",
  "JETRO",
  "T-Hub",
  "Woxsen University",
];

const SOCIALS = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: XIcon, label: "X (Twitter)", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
];

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative mt-auto overflow-hidden bg-jgate-navy text-white">
      <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
      {/* top gradient hairline */}
      <div className="relative h-1 w-full bg-gradient-to-r from-jgate-red via-jgate-gold to-jgate-green" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-jgate-red text-white">
                <ToriiGate className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif-jp text-xl font-bold">J-Gate</span>
                <span className="font-sans-jp text-[10px] text-white/50">
                  Jゲート
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Hyderabad&apos;s premier working hub for Japan-India business
              collaboration. Where Japan meets India. Where vision meets
              opportunity.
            </p>
            {/* Socials */}
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => e.preventDefault()}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/8 text-white/70 transition-all hover:-translate-y-0.5 hover:bg-jgate-red hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
              <JapanFlag className="h-3.5 w-5" />
              <span>×</span>
              <IndiaFlag className="h-3.5 w-5" />
              <span>India × Japan</span>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="font-serif-jp text-sm font-bold uppercase tracking-wider text-jgate-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="text-sm text-white/70 transition-colors hover:text-jgate-red hover:underline"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Partners */}
          <div>
            <h3 className="font-serif-jp text-sm font-bold uppercase tracking-wider text-jgate-gold">
              Partners
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PARTNER_LINKS.map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-white/70 transition-colors hover:text-jgate-red hover:underline"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="font-serif-jp text-sm font-bold uppercase tracking-wider text-jgate-gold">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <span aria-hidden>📍</span>
                <span>Cyber Gateway, Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden>📧</span>
                <a
                  href="mailto:info@indobox.in"
                  className="transition-colors hover:text-jgate-red"
                >
                  info@indobox.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span aria-hidden>📞</span>
                <span>+91 XXXXX XXXXX</span>
              </li>
            </ul>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs leading-relaxed text-white/60">
                Powered by{" "}
                <span className="font-semibold text-white">
                  Indobox India Pvt. Ltd.
                </span>
              </p>
              <p className="font-sans-jp mt-1 text-[11px] text-white/40">
                インドボックス・インディア・プライベート・リミテッド
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/55">
            © 2026 J-Gate | Indobox India Pvt. Ltd. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/55">
            Crafted with
            <JapanFlag className="h-3 w-4" />
            <span className="text-jgate-red">❤</span>
            <IndiaFlag className="h-3 w-4" />
            in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
