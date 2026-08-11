"use client";

import { Reveal, Eyebrow } from "./shared";
import { Photo } from "./photo";
import { LinkedInIcon, JapanFlag, IndiaFlag } from "./icons";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const FOUNDERS = [
  {
    id: "photo-founder-tanji",
    name: "Mr. Daisuke Tanji",
    badge: "🇯🇵 Founder & Visionary",
    title: "Founder & CEO, Indobox India Pvt. Ltd.",
    arrival: "In India since August 2013",
    fallback: "grad-founder-tanji",
    initials: "DT",
    flag: "jp" as const,
    bio: "A Japanese entrepreneur with over a decade immersed in both Japanese corporate culture and the Indian business ecosystem. Founded Indobox India to bridge the gap — J-Gate is its physical expression. When JETRO's Senior Director keynoted the inauguration, it was the market's verdict: Tanji-san had built something real.",
    quote: "Japan and India are natural allies. J-Gate is where that alliance becomes operational.",
  },
  {
    id: "photo-founder-sarikonda",
    name: "Mr. Viinay Sarikonda",
    badge: "🇮🇳 Strategic Partner & Co-Inaugurator",
    title: "CEO, Genesys Info X · MoU Partner",
    fallback: "grad-founder-sarikonda",
    initials: "VS",
    flag: "in" as const,
    bio: "The local intelligence behind J-Gate's operations. As CEO of Genesys Info X and architect of the MoU powering J-Gate, he brings a deep, established network across Hyderabad's business, technology, and government ecosystems. His co-inauguration alongside Mr. Tanji was a declaration — not ceremonial.",
    quote: "When Daisuke brought this idea to me, I knew immediately: this is what Hyderabad has been waiting for.",
  },
];

const TEAM = [
  { id: "photo-team-1", name: "Community Manager", role: "Daily Operations", bio: "Your first point of contact — making every member feel at home.", langs: "JP · EN · TE", initials: "CM" },
  { id: "photo-team-2", name: "Business Development", role: "Partner Network", bio: "Connecting members to the right people across Hyderabad.", langs: "EN · HI · JP", initials: "BD" },
  { id: "photo-team-3", name: "Operations Lead", role: "Facilities & Experience", bio: "Ensuring every detail of the workspace runs flawlessly.", langs: "EN · TE · JP", initials: "OP" },
  { id: "photo-team-4", name: "Japan Liaison", role: "Cultural Bridging", bio: "Bridging cultural nuances for Japanese members in India.", langs: "JP · EN", initials: "JL" },
];

const ADVISORS = [
  {
    id: "photo-advisory-jagirdar",
    name: "Mr. Sujit Jagirdar",
    badge: "Former CIO · T-Hub",
    title: "Advisory Council Member — J-Gate",
    fallback: "grad-advisory-j",
    initials: "SJ",
    bio: "Oversaw digital infrastructure at T-Hub — India's largest startup hub — enabling thousands of startups to scale. Brings strategic insights that would take a new entrant years to access.",
    quote: "Japanese companies bring discipline and innovation that India needs. J-Gate makes that partnership real at scale.",
  },
  {
    id: "photo-advisory-mahankali",
    name: "Mr. Srinivas Rao Mahankali",
    badge: "Former CEO · T-Hub",
    title: "Advisory Council Member — J-Gate",
    fallback: "grad-advisory-s",
    initials: "SRM",
    bio: "Led T-Hub through its most critical growth phase. Networks span government, enterprise, academia, and the startup ecosystem across India. Brings full institutional weight to J-Gate members.",
    quote: "What Daisuke has built here is what Hyderabad was waiting for — a real, trusted bridge.",
  },
];

export function Team() {
  return (
    <section id="team" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The People Behind J-Gate</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem, 4vw, 2.5rem)" }}
            >
              Meet the Minds Building India&apos;s{" "}
              <span className="text-crimson">Japan Gateway</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.9rem,1.5vw,1.0625rem)" }}>
              Built by people who have dedicated their careers to connecting
              Japan and India. Meet the humans behind the hub.
            </p>
          </div>
        </Reveal>

        {/* Founders — compact 2-column cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.id} delay={i * 100}>
              <article className="lift-card flex h-full gap-5 rounded-lg bg-pearl p-6 shadow-card">
                {/* Photo — compact portrait */}
                <div className="w-28 shrink-0 sm:w-32">
                  <Photo
                    id={f.id}
                    alt={`${f.name}, ${f.title}`}
                    fallback={f.fallback}
                    initials={f.initials}
                    rounded="rounded-lg"
                    className="h-36 w-full sm:h-44"
                  />
                </div>
                {/* Content */}
                <div className="min-w-0 flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded bg-ivory px-2.5 py-1 font-inter text-[11px] font-medium text-slate">
                    {f.flag === "jp" ? <JapanFlag className="h-3 w-4" /> : <IndiaFlag className="h-3 w-4" />}
                    {f.badge.replace(/^[^\s]+\s/, "")}
                  </span>
                  <h3 className="mt-2.5 font-serif-jp text-xl font-bold text-ink">{f.name}</h3>
                  <p className="mt-0.5 font-inter text-[13px] font-semibold text-crimson">{f.title}</p>
                  {f.arrival && (
                    <p className="mt-1.5 flex items-center gap-1.5 font-inter text-[12px] text-mist">
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
                      {f.arrival}
                    </p>
                  )}
                  <p className="mt-2.5 font-inter text-[13px] leading-relaxed text-slate">{f.bio}</p>
                  <blockquote className="mt-3 border-l-2 border-crimson pl-3">
                    <p className="font-serif-jp text-[13px] italic leading-snug text-ink">“{f.quote}”</p>
                  </blockquote>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      className="inline-flex items-center gap-1 rounded-md border border-crimson px-3 py-1.5 font-inter text-[12px] font-semibold text-crimson transition-all hover:bg-crimson hover:text-white"
                    >
                      <Mail className="h-3 w-3" /> Connect
                    </button>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      aria-label={`${f.name} on LinkedIn`}
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
                    >
                      <LinkedInIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Supporting team — neat 4-column grid */}
        <Reveal>
          <h3 className="mt-12 text-center font-serif-jp text-[clamp(1.25rem,2.5vw,1.5rem)] font-bold text-ink">
            The J-Gate Team
          </h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((t, i) => (
            <Reveal key={t.id} delay={i * 70}>
              <article className="lift-card flex h-full flex-col items-center rounded-lg bg-pearl p-5 text-center shadow-card">
                <div className="w-24">
                  <Photo
                    id={t.id}
                    alt={`${t.name}, ${t.role} at J-Gate`}
                    fallback="grad-team"
                    initials={t.initials}
                    rounded="rounded-full"
                    className="h-24 w-24"
                  />
                </div>
                <h4 className="mt-3 font-inter text-[15px] font-semibold text-ink">{t.name}</h4>
                <p className="font-inter text-[12px] font-medium text-crimson">{t.role}</p>
                <p className="mt-1.5 font-inter text-[12px] leading-snug text-slate">{t.bio}</p>
                <p className="mt-2 flex items-center gap-1 font-inter text-[11px] text-mist">
                  🇯🇵 🇮🇳 {t.langs}
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`${t.name} on LinkedIn`}
                  className="mt-3 flex h-7 w-7 items-center justify-center rounded-md bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Advisory Council — neat 2-column */}
        <div id="advisory" className="scroll-mt-24">
          <Reveal>
            <h3 className="mt-12 text-center font-serif-jp text-[clamp(1.25rem,2.5vw,1.5rem)] font-bold text-ink">
              Advisory Council
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {ADVISORS.map((a, i) => (
              <Reveal key={a.id} delay={i * 100}>
                <article className="border-top-saffron lift-card flex h-full gap-5 rounded-lg bg-pearl p-6 shadow-card">
                  <div className="w-24 shrink-0">
                    <Photo
                      id={a.id}
                      alt={`${a.name}, Advisory Council J-Gate`}
                      fallback={a.fallback}
                      initials={a.initials}
                      rounded="rounded-full"
                      className="h-24 w-24"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="inline-flex items-center gap-1 rounded bg-saffron/15 px-2 py-0.5 font-inter text-[10px] font-bold uppercase text-saffron" style={{ letterSpacing: "0.06em" }}>
                      ★ {a.badge}
                    </span>
                    <h4 className="mt-2 font-serif-jp text-lg font-bold text-ink">{a.name}</h4>
                    <p className="font-inter text-[12px] text-crimson">{a.title}</p>
                    <p className="mt-2 font-inter text-[13px] leading-relaxed text-slate">{a.bio}</p>
                    <blockquote className="mt-2.5 border-l-2 border-saffron/50 pl-3">
                      <p className="font-serif-jp text-[13px] italic leading-snug text-ink">“{a.quote}”</p>
                    </blockquote>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
