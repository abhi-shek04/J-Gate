"use client";

import { Reveal, Eyebrow } from "./shared";
import { useI18n } from "@/lib/i18n";
import { Photo } from "./photo";
import { LinkedInIcon } from "./icons";
import { cn } from "@/lib/utils";

const EXECUTIVES = [
  { id: "photo-team-tanji", key: "team.t1", fallback: "grad-founder-tanji", initials: "DT" },
  { id: "photo-team-sarikonda", key: "team.t2", fallback: "grad-founder-sarikonda", initials: "VS" },
];
const ADVISORS = [
  { id: "photo-team-jagirdar", key: "team.t3", fallback: "grad-advisory-j", initials: "SJ" },
  { id: "photo-team-mahankali", key: "team.t4", fallback: "grad-advisory-s", initials: "SRM" },
];
const MENTORS = [
  { id: "photo-team-yuki", key: "team.t5", fallback: "grad-team", initials: "YT" },
  { id: "photo-team-ravi", key: "team.t6", fallback: "grad-team", initials: "RK" },
];

function TeamCard({ id, key: tKey, fallback, initials }: { id: string; key: string; fallback: string; initials: string }) {
  const { t } = useI18n();
  return (
    <article className="lift-card flex h-full flex-col items-center rounded-lg bg-pearl p-6 text-center shadow-card">
      <div className="w-28">
        <Photo
          id={id}
          alt={`${t(`${tKey}.name`)}, ${t(`${tKey}.role`)}`}
          fallback={fallback}
          initials={initials}
          rounded="rounded-full"
          className="h-28 w-28"
        />
      </div>
      <h4 className="mt-4 font-serif-jp text-[16px] font-bold text-ink">{t(`${tKey}.name`)}</h4>
      <p className="mt-0.5 font-inter text-[12px] font-medium text-crimson">{t(`${tKey}.role`)}</p>
      <p className="mt-2 font-inter text-[13px] leading-snug text-slate">{t(`${tKey}.bio`)}</p>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        aria-label={`${t(`${tKey}.name`)} on LinkedIn`}
        className="mt-4 flex h-8 w-8 items-center justify-center rounded-md bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
      >
        <LinkedInIcon className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}

function CategoryBlock({ title, members }: { title: string; members: typeof EXECUTIVES }) {
  return (
    <div>
      <Reveal>
        <h3 className="mb-5 text-center font-serif-jp text-[clamp(1.15rem,2vw,1.35rem)] font-bold text-ink">
          {title}
        </h3>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {members.map((m, i) => (
          <Reveal key={m.id} delay={i * 80}>
            <TeamCard {...m} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Team() {
  const { t } = useI18n();
  return (
    <section id="team" className="section-pad bg-ivory-warm">
      <div className="container-jg">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("team.eyebrow")}</Eyebrow>
            <h2
              className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
              style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
            >
              {t("team.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
              {t("team.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-12">
          <CategoryBlock title={t("team.cat1")} members={EXECUTIVES} />
          <CategoryBlock title={t("team.cat2")} members={ADVISORS} />
          <CategoryBlock title={t("team.cat3")} members={MENTORS} />
        </div>
      </div>
    </section>
  );
}
