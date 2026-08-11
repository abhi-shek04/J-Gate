"use client";

import { Reveal, Eyebrow } from "./shared";
import { Photo } from "./photo";
import { LinkedInIcon, JapanFlag, IndiaFlag } from "./icons";
import { Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const FOUNDERS = [
  {
    id: "photo-founder-tanji",
    name: "Mr. Daisuke Tanji",
    badge: "🇯🇵 Founder & Visionary",
    title: "Founder & CEO, Indobox India Private Limited · Creator of J-Gate",
    arrival: "First arrived in India: August 2013",
    fallback: "grad-founder-tanji",
    initials: "DT",
    flag: "jp" as const,
    photoLeft: true,
    bio: [
      "Mr. Daisuke Tanji is not just a businessman — he is a bridge. In August 2013, he arrived in New Delhi as a young Japanese professional with a conviction that India and Japan, when properly connected, could create something extraordinary.",
      "Over the next decade, he immersed himself in both worlds — learning the rhythms of Indian business, building relationships across industries, and maintaining his deeply Japanese approach to precision, discipline, and quality. That decade of immersion is what makes him unlike any other business bridge between the two nations.",
      "In 2026, he founded Indobox India Private Limited and launched J-Gate — a physical manifestation of everything he had learned, built, and believed. When JETRO's Senior Director chose to keynote J-Gate's inauguration, it was the market's verdict: Tanji-san had built something real.",
    ],
    quote: "Japan and India are not just business partners. They are natural allies. J-Gate is where that alliance becomes operational.",
    quoteAttr: "Mr. Daisuke Tanji",
  },
  {
    id: "photo-founder-sarikonda",
    name: "Mr. Viinay Sarikonda",
    badge: "🇮🇳 Strategic Partner & Co-Inaugurator",
    title: "CEO, Genesys Info X · MoU Partner, J-Gate",
    fallback: "grad-founder-sarikonda",
    initials: "VS",
    flag: "in" as const,
    photoLeft: false,
    bio: [
      "Mr. Viinay Sarikonda is the local intelligence behind J-Gate's operations. As CEO of Genesys Info X and the architect of the MoU that powers J-Gate, he brings a deep, established network across Hyderabad's business, technology, and government ecosystems.",
      "His co-inauguration of J-Gate alongside Mr. Tanji was not ceremonial — it was a declaration that J-Gate's Japan-side expertise and India-side reach are permanently joined. For every Japanese company that walks into J-Gate, Mr. Sarikonda's network walks in with them.",
    ],
    quote: "When Daisuke brought this idea to me, I knew immediately: this is what Hyderabad has been waiting for. A real bridge, not just another coworking space.",
    quoteAttr: "Mr. Viinay Sarikonda",
  },
];

const TEAM = [
  { id: "photo-team-1", name: "Community Manager", role: "The face of J-Gate daily operations", bio: "Your first point of contact — making every member feel at home.", langs: "Japanese · English · Telugu", initials: "CM" },
  { id: "photo-team-2", name: "Business Development", role: "Partner network and introductions", bio: "Connecting members to the right people across Hyderabad.", langs: "English · Hindi · Japanese", initials: "BD" },
  { id: "photo-team-3", name: "Operations Lead", role: "Facilities and member experience", bio: "Ensuring every detail of the workspace runs flawlessly.", langs: "English · Telugu · Japanese", initials: "OP" },
  { id: "photo-team-4", name: "Japan Liaison", role: "Bilingual support and cultural bridging", bio: "Bridging cultural nuances for Japanese members in India.", langs: "Japanese · English", initials: "JL" },
];

const ADVISORS = [
  {
    id: "photo-advisory-jagirdar",
    name: "Mr. Sujit Jagirdar",
    badge: "Former CIO · T-Hub",
    title: "Advisory Council Member — J-Gate",
    fallback: "grad-advisory-j",
    initials: "SJ",
    bio: "During his tenure as Chief Information Officer at T-Hub — India's largest startup innovation hub — Mr. Jagirdar oversaw the digital infrastructure that enabled thousands of startups to reach global scale. His decision to join J-Gate's Advisory Council reflects his conviction that the India-Japan corridor is the business partnership of this generation. He brings strategic insights that would take a new entrant years to access independently.",
    quote: "Japanese companies bring a quality of discipline and innovation that India needs. J-Gate makes that partnership real at scale.",
  },
  {
    id: "photo-advisory-mahankali",
    name: "Mr. Srinivas Rao Mahankali",
    badge: "Former CEO · T-Hub",
    title: "Advisory Council Member — J-Gate",
    fallback: "grad-advisory-s",
    initials: "SRM",
    bio: "As former Chief Executive Officer of T-Hub, Mr. Mahankali led one of India's most consequential innovation institutions through its most critical growth phase. His networks span government, enterprise, academia, and the startup ecosystem across India. At J-Gate, he brings that full institutional weight — ensuring every member company benefits from introductions and credibility that would otherwise take years to build.",
    quote: "What Daisuke has built here is what Hyderabad was waiting for — a real, trusted bridge for Japanese companies that respects both cultures.",
  },
];

function FounderCard({ f }: { f: (typeof FOUNDERS)[number] }) {
  return (
    <article className="lift-card overflow-hidden rounded-lg bg-pearl shadow-card">
      <div className={cn("grid md:grid-cols-5", !f.photoLeft && "md:[&>*:first-child]:order-2")}>
        {/* Photo — 40% (2 of 5 cols) */}
        <div className="md:col-span-2">
          <Photo
            id={f.id}
            alt={`${f.name}, ${f.title}`}
            fallback={f.fallback}
            initials={f.initials}
            rounded="rounded-none"
            className="h-72 w-full md:h-full"
          />
        </div>
        {/* Content — 60% (3 of 5 cols) */}
        <div className="md:col-span-3 p-8 sm:p-10">
          <span className="inline-flex items-center gap-1.5 rounded bg-ivory px-3 py-1.5 font-inter text-[12px] font-medium text-slate">
            {f.flag === "jp" ? <JapanFlag className="h-3.5 w-5" /> : <IndiaFlag className="h-3.5 w-5" />}
            {f.badge}
          </span>
          <h3 className="mt-4 font-serif-jp text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-ink">
            {f.name}
          </h3>
          <p className="mt-1.5 font-inter text-[15px] font-semibold text-crimson">{f.title}</p>
          {f.arrival && (
            <p className="mt-3 flex items-center gap-2 font-inter text-[13px] text-slate">
              <MapPin className="h-3.5 w-3.5 text-saffron" />
              {f.arrival}
            </p>
          )}
          <div className="mt-4 space-y-3">
            {f.bio.map((p, i) => (
              <p key={i} className="font-inter text-[15px] leading-relaxed text-slate">{p}</p>
            ))}
          </div>
          <blockquote className="mt-5 border-l-2 border-crimson pl-4">
            <p className="font-serif-jp text-[15px] italic leading-relaxed text-ink">“{f.quote}”</p>
            <footer className="mt-2 font-inter text-[13px] text-mist">— {f.quoteAttr}</footer>
          </blockquote>
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 rounded-md border border-crimson px-4 py-2 font-inter text-[13px] font-semibold text-crimson transition-all hover:bg-crimson hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" /> Connect
            </button>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label={`${f.name} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Team() {
  return (
    <section id="team" className="section-pad bg-ivory">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The People Behind J-Gate</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}
            >
              Meet the Minds Building India&apos;s{" "}
              <span className="text-crimson">Japan Gateway</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.125rem)" }}>
              J-Gate is not run by a corporation — it is built by people who have
              dedicated their careers to connecting Japan and India. Meet the
              humans behind the hub.
            </p>
          </div>
        </Reveal>

        {/* Founder cards */}
        <div className="mt-14 space-y-6">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.id} delay={i * 100}>
              <FounderCard f={f} />
            </Reveal>
          ))}
        </div>

        {/* Supporting team grid */}
        <Reveal>
          <div className="mt-16 text-center">
            <h3 className="font-serif-jp text-[clamp(1.5rem,3vw,1.75rem)] font-bold text-ink">
              The J-Gate Team
            </h3>
            <p className="mt-2 font-inter text-[15px] text-mist">
              The daily faces of J-Gate — here to make your India journey seamless.
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <article className="lift-card flex h-full flex-col items-center rounded-lg bg-pearl p-6 text-center shadow-card">
                <div className="w-36">
                  <Photo
                    id={t.id}
                    alt={`${t.name}, ${t.role} at J-Gate`}
                    fallback="grad-team"
                    initials={t.initials}
                    rounded="rounded-full"
                    className="h-36 w-36"
                  />
                </div>
                <h4 className="mt-4 font-inter text-[16px] font-semibold text-ink">{t.name}</h4>
                <p className="mt-0.5 font-inter text-[13px] font-medium text-crimson">{t.role}</p>
                <p className="mt-2 font-inter text-[13px] leading-snug text-slate">{t.bio}</p>
                <p className="mt-3 flex items-center justify-center gap-1.5 font-inter text-[12px] text-mist">
                  🇯🇵 🇮🇳 {t.langs}
                </p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`${t.name} on LinkedIn`}
                  className="mt-4 flex h-8 w-8 items-center justify-center rounded-md bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Advisory Council */}
        <div id="advisory" className="scroll-mt-24">
          <Reveal>
            <div className="mt-16 text-center">
              <h3 className="font-serif-jp text-[clamp(1.75rem,3.5vw,2rem)] font-bold text-ink">
                Advisory Council
              </h3>
            </div>
          </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {ADVISORS.map((a, i) => (
            <Reveal key={a.id} delay={i * 120}>
              <article className="border-top-saffron lift-card h-full rounded-lg bg-pearl p-8 shadow-card">
                <div className="flex flex-col items-center text-center">
                  <div className="w-28">
                    <Photo
                      id={a.id}
                      alt={`${a.name}, Advisory Council J-Gate`}
                      fallback={a.fallback}
                      initials={a.initials}
                      rounded="rounded-full"
                      className="h-28 w-28"
                    />
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded bg-saffron/15 px-3 py-1 font-inter text-[11px] font-bold uppercase text-saffron" style={{ letterSpacing: "0.08em" }}>
                    ★ {a.badge}
                  </span>
                  <h4 className="mt-3 font-serif-jp text-xl font-bold text-ink">{a.name}</h4>
                  <p className="mt-1 font-inter text-[13px] text-crimson">{a.title}</p>
                </div>
                <p className="mt-4 font-inter text-[14px] leading-relaxed text-slate">{a.bio}</p>
                <blockquote className="mt-4 border-l-2 border-saffron/50 pl-4">
                  <p className="font-serif-jp text-[14px] italic leading-relaxed text-ink">“{a.quote}”</p>
                </blockquote>
              </article>
            </Reveal>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
