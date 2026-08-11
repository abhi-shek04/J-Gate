"use client";

import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { Photo } from "@/components/jgate/photo";
import { LinkedInIcon } from "@/components/jgate/icons";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

/* ============================================================
   Team — Executive credibility, advisory board, mentorship
   Sections: PageHero → Executive Leadership → Technical Advisory Board → Language Sensei & Cultural Mentors → CTA
   ============================================================ */

type Bilingual = { EN: string; JP: string };

const EXECUTIVES = [
  {
    photoId: "photo-team-tanji-page",
    fallback: "grad-founder-tanji",
    initials: "DT",
    flag: "🇯🇵",
    name: { EN: "Mr. Daisuke Tanji", JP: "ダンジ・ダイスケ" } as Bilingual,
    role: {
      EN: "Founder & CEO, Indobox India",
      JP: "創業者兼CEO、Indobox India",
    } as Bilingual,
    bio1: {
      EN: "Daisuke Tanji first arrived in India in August 2013 — a decision that would define the next decade of his career and eventually crystallise into J-Gate. Over ten years, he built deep relationships across Hyderabad's engineering ecosystem and Japan's enterprise landscape, identifying the precise gaps that prevent most Indo-Japanese placements from enduring.",
      JP: "ダンジ・ダイスケが初めてインドに到着したのは2013年8月 — その後の10年のキャリアを定義し、最終的にJ-Gateとして結晶化することになる決断でした。10年間で、彼はハイデラバードのエンジニアリング生態系と日本の企業景観全体に深い関係性を構築し、ほとんどの日印紹介が定着しない正確なギャップを特定しました。",
    } as Bilingual,
    bio2: {
      EN: "As Founder & CEO of Indobox India, he leads J-Gate's bilateral mission — operating as the human bridge between Japanese enterprise expectations and Indian engineering talent, every single day.",
      JP: "Indobox Indiaの創業者兼CEOとして、彼はJ-Gateの両国間ミッションを主導 — 日本企業の期待とインドのエンジニアリング人材の間の人的架け橋として、毎日機能しています。",
    } as Bilingual,
    pullQuote: {
      EN: "“The bridge is not built in a day — it is built one placement, one training, one trust at a time.”",
      JP: "「架け橋は一日で築かれない — 一つの紹介、一つの研修、一つの信頼で築かれる。」",
    } as Bilingual,
  },
  {
    photoId: "photo-team-sarikonda-page",
    fallback: "grad-founder-sarikonda",
    initials: "VS",
    flag: "🇮🇳",
    name: { EN: "Mr. Viinay Sarikonda", JP: "ヴィイナイ・サリコンダ" } as Bilingual,
    role: {
      EN: "CEO, Genesys Info X · MoU Partner",
      JP: "CEO、Genesys Info X・MoUパートナー",
    } as Bilingual,
    bio1: {
      EN: "Viinay Sarikonda is a Hyderabad business ecosystem veteran and the CEO of Genesys Info X — J-Gate's founding MoU partner. His operational expertise anchors the technical delivery backbone of J-Gate's recruitment and consulting verticals, ensuring every placement meets a measurable quality bar.",
      JP: "ヴィイナイ・サリコンダはハイデラバードのビジネス生態系のベテランであり、J-Gateの創設MoUパートナーであるGenesys Info XのCEOです。彼の運営専門知識が、J-Gateの採用・コンサルティング部門の技術的提供基盤を固定し、すべての紹介が測定可能な品質基準を満たすことを確保します。",
    } as Bilingual,
    bio2: {
      EN: "He co-inaugurated J-Gate at Cyber Gateway in 2026 and continues to serve as the operational anchor of the bilateral partnership — bridging corporate execution on the Indian side with Japanese enterprise expectations.",
      JP: "彼は2026年にサイバー・ゲートウェイでJ-Gateを共同開設し、両国間パートナーシップの運営基盤として継続 — インド側の企業実行を日本企業の期待と橋渡ししています。",
    } as Bilingual,
    pullQuote: {
      EN: "“Operational rigour is what turns a bridge into a pipeline — and a pipeline into a track record.”",
      JP: "「運営の厳格さこそが架け橋をパイプラインに変え、パイプラインを実績に変える。」",
    } as Bilingual,
  },
] as const;

const ADVISORS = [
  {
    photoId: "photo-team-jagirdar-page",
    fallback: "grad-advisory-j",
    initials: "SJ",
    name: { EN: "Mr. Sujit Jagirdar", JP: "スジット・ジャギルダール" } as Bilingual,
    role: {
      EN: "Technical Advisor · Former CIO, T-Hub",
      JP: "技術アドバイザー・元CIO、T-Hub",
    } as Bilingual,
    bio: {
      EN: "As former CIO of T-Hub — India's largest startup hub — Sujit Jagirdar oversaw the digital infrastructure that scaled one of the country's most influential innovation ecosystems. He brings that operational scale perspective to J-Gate's technical screening methodology, ensuring our evaluation rubric matches the rigour of India's most demanding tech institutions.",
      JP: "インド最大のスタートアップハブであるT-Hubの元CIOとして、スジット・ジャギルダールは国内で最も影響力のあるイノベーション生態系の一つをスケールさせたデジタルインフラを統括しました。その運営スケールの視点をJ-Gateの技術スクリーニング手法にもたらし、私たちの評価基準がインドの最も要求の厳しい技術機関の厳格さに匹敵することを確保します。",
    } as Bilingual,
    pullQuote: {
      EN: "“Talent screening without rigour is just sourcing. Rigour is what makes it selection.”",
      JP: "「厳格さのない人材スクリーニングは単なるソーシングに過ぎない。厳格さがあってこそ選考になる。」",
    } as Bilingual,
  },
  {
    photoId: "photo-team-mahankali-page",
    fallback: "grad-advisory-s",
    initials: "SRM",
    name: { EN: "Mr. Srinivas Rao Mahankali", JP: "スリニヴァス・ラオ・マハンカリ" } as Bilingual,
    role: {
      EN: "Technical Advisor · Former CEO, T-Hub",
      JP: "技術アドバイザー・元CEO、T-Hub",
    } as Bilingual,
    bio: {
      EN: "Srinivas Rao Mahankali led T-Hub through its most critical growth phase as CEO — building the institutional partnerships, government relationships, and corporate network that defined its national footprint. He chairs J-Gate's Technical Advisory Council, bringing a leader's perspective on what 'enterprise-ready' truly means at scale.",
      JP: "スリニヴァス・ラオ・マハンカリはCEOとしてT-Hubの最も重要な成長期を主導 — 国民的フットプリントを定義づけた機関的パートナーシップ、政府関係、企業ネットワークを構築しました。彼はJ-Gateの技術諮問評議会の議長を務め、「企業対応」がスケールにおいて真に何を意味するかについてのリーダーの視点をもたらします。",
    } as Bilingual,
    pullQuote: {
      EN: "“Enterprise-ready is not a checkbox — it is a standard that holds at scale.”",
      JP: "「企業対応はチェックボックスではない — スケールで維持される基準である。」",
    } as Bilingual,
  },
] as const;

const MENTORS = [
  {
    photoId: "photo-team-yuki-page",
    fallback: "grad-team",
    initials: "YT",
    name: { EN: "Sensei Yuki Tanaka", JP: "田中ゆき先生" } as Bilingual,
    role: {
      EN: "Lead Japanese Language Sensei",
      JP: "主任日本語講師",
    } as Bilingual,
    bio: {
      EN: "Sensei Yuki Tanaka is a JLPT-certified Japanese language instructor with over fifteen years of experience teaching engineers — not general learners, but engineers preparing for placements in Japanese enterprises. Her curriculum covers JLPT/NAT milestones alongside the business Japanese, keigo, and meeting etiquette that determine whether an engineer integrates or merely survives.",
      JP: "田中ゆき先生はJLPT認定の日本語講師で、15年以上にわたりエンジニア — 一般学習者ではなく、日本企業での配置に向けて準備するエンジニア — を指導してきました。彼女のカリキュラムはJLPT・NATのマイルストーンと並行して、エンジニアが統合するか単に生き残るかを決定するビジネス日本語、敬語、会議エチケットを網羅します。",
    } as Bilingual,
    pullQuote: {
      EN: "“Grammar passes the test. Etiquette passes the room.”",
      JP: "「文法は試験を合格させる。エチケットは会議室を合格させる。」",
    } as Bilingual,
  },
  {
    photoId: "photo-team-ravi-page",
    fallback: "grad-team",
    initials: "RK",
    name: { EN: "Sensei Ravi Kumar", JP: "ラビ・クマール先生" } as Bilingual,
    role: {
      EN: "Cultural Transition Consultant",
      JP: "文化移行コンサルタント",
    } as Bilingual,
    bio: {
      EN: "Sensei Ravi Kumar bridges Indian engineers into Japanese corporate culture — the unwritten expectations, the rhythms of nemawashi and ho-ren-so, the implicit signals that define whether a placement thrives. Having lived and worked in both ecosystems for over a decade, he designs the cultural orientation modules that prepare every J-Gate candidate for the realities of Japanese enterprise life.",
      JP: "ラビ・クマール先生はインド人エンジニアを日本の企業文化 — 暗黙の期待、根回しと報連相のリズム、紹介が成功するかを定義する暗黙のシグナル — へと橋渡しします。10年以上にわたり両方の生態系で生活し働いた経験を持ち、J-Gateのすべての候補者を日本企業生活の現実に向けて準備する文化オリエンテーションモジュールを設計しています。",
    } as Bilingual,
    pullQuote: {
      EN: "“Language gets you heard. Culture gets you understood.”",
      JP: "「言葉は聞いてもらうためにある。文化は理解してもらうためにある。」",
    } as Bilingual,
  },
] as const;

/* Reusable large card with portrait photo slot */
function LargeCard({
  photoId,
  fallback,
  initials,
  flag,
  name,
  role,
  bio1,
  bio2,
  bio,
  pullQuote,
  index,
}: {
  photoId: string;
  fallback: string;
  initials: string;
  flag?: string;
  name: Bilingual;
  role: Bilingual;
  bio1?: Bilingual;
  bio2?: Bilingual;
  bio?: Bilingual;
  pullQuote: Bilingual;
  index: number;
}) {
  const { tx } = useI18n();
  const isReverse = index % 2 === 1;
  return (
    <Reveal delay={index * 100} variant={isReverse ? "right" : "left"}>
      <article className="lift-card relative flex h-full flex-col overflow-hidden rounded-lg border border-crimson/10 bg-pearl p-7 shadow-card sm:p-8 md:flex-row md:items-start md:gap-7">
        {/* Portrait */}
        <div className="mx-auto flex shrink-0 flex-col items-center md:mx-0">
          <Photo
            id={photoId}
            alt={`${tx(name)}, ${tx(role)}`}
            fallback={fallback}
            initials={initials}
            rounded="rounded-full"
            className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40"
          />
          {flag && (
            <span className="mt-3 text-2xl" aria-hidden="true">
              {flag}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="mt-6 flex-1 text-center md:mt-0 md:text-left">
          <h3 className="font-serif-jp text-xl font-bold text-ink sm:text-2xl">{tx(name)}</h3>
          <p className="mt-1 font-inter text-[13px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.08em" }}>
            {tx(role)}
          </p>

          {bio1 && (
            <p className="mt-4 font-inter text-[14px] leading-relaxed text-slate">{tx(bio1)}</p>
          )}
          {bio2 && (
            <p className="mt-3 font-inter text-[14px] leading-relaxed text-slate">{tx(bio2)}</p>
          )}
          {bio && (
            <p className="mt-4 font-inter text-[14px] leading-relaxed text-slate">{tx(bio)}</p>
          )}

          {/* Pull quote */}
          <blockquote className="mt-5 border-l-2 border-crimson/40 pl-4">
            <p className="font-serif-jp text-[14px] italic leading-snug text-ink sm:text-[15px]">
              {tx(pullQuote)}
            </p>
          </blockquote>

          {/* LinkedIn */}
          <div className="mt-5 flex justify-center md:justify-start">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label={`${tx(name)} on LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* Smaller advisor / mentor card */
function CompactCard({
  photoId,
  fallback,
  initials,
  name,
  role,
  bio,
  pullQuote,
  index,
}: {
  photoId: string;
  fallback: string;
  initials: string;
  name: Bilingual;
  role: Bilingual;
  bio: Bilingual;
  pullQuote: Bilingual;
  index: number;
}) {
  const { tx } = useI18n();
  return (
    <Reveal delay={index * 100} variant={index % 2 === 1 ? "right" : "left"}>
      <article className="lift-card relative flex h-full flex-col items-center overflow-hidden rounded-lg border border-saffron/15 bg-pearl p-7 text-center shadow-card sm:p-8">
        {/* Gold top border accent */}
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron to-[#c9881a]" />

        <Photo
          id={photoId}
          alt={`${tx(name)}, ${tx(role)}`}
          fallback={fallback}
          initials={initials}
          rounded="rounded-full"
          className="h-28 w-28 sm:h-32 sm:w-32"
        />

        <h3 className="mt-4 font-serif-jp text-lg font-bold text-ink sm:text-xl">{tx(name)}</h3>
        <p className="mt-1 font-inter text-[12px] font-semibold uppercase text-crimson" style={{ letterSpacing: "0.08em" }}>
          {tx(role)}
        </p>

        <p className="mt-4 font-inter text-[13px] leading-relaxed text-slate">{tx(bio)}</p>

        <blockquote className="mt-5 border-l-2 border-saffron/40 pl-4 text-left">
          <p className="font-serif-jp text-[13px] italic leading-snug text-ink">
            {tx(pullQuote)}
          </p>
        </blockquote>

        <div className="mt-5">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            aria-label={`${tx(name)} on LinkedIn`}
            className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0A66C2]/10 text-[#0A66C2] transition-all hover:bg-[#0A66C2] hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export default function TeamPage() {
  const { tx } = useI18n();

  return (
    <>
      <PageHero
        eyebrowKey="team.eyebrow"
        titleNode={
          <>
            {tx({ EN: "The Minds Behind", JP: "架け橋を" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "the Bridge", JP: "作る人々" })}
            </span>
          </>
        }
        subtitleKey="team.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Executive Leadership
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Executive Leadership", JP: "経営陣" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "The Founders Who Built the Bridge", JP: "架け橋を築いた創業者たち" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "A decade of Japan-India bridging, crystallised into one institution — led by the two who built it.",
                  JP: "10年の日印架け橋の仕事が、一つの機関として結晶化 — それを築いた二人が主導。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {EXECUTIVES.map((m, i) => (
              <LargeCard key={i} index={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Technical Advisory Board
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Technical Advisory Board", JP: "技術諮問委員会" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "The Standards That Define a J-Gate Placement", JP: "J-Gateの紹介を定義する基準" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Our Advisory Council reviews and updates the evaluation rubric every quarter — ensuring J-Gate's screening matches the rigour of India's most demanding tech institutions.",
                  JP: "諮問評議会は四半期ごとに評価基準をレビュー・更新 — J-Gateのスクリーニングがインドの最も要求の厳しい技術機関の厳格さに匹敵することを確保。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ADVISORS.map((m, i) => (
              <CompactCard key={i} index={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Language Sensei & Cultural Mentors
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>{tx({ EN: "Language Sensei & Cultural Mentors", JP: "語学講師＆文化メンター" })}</Eyebrow>
              <h2
                className="mt-4 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.875rem,4vw,2.5rem)" }}
              >
                {tx({ EN: "The Teachers Who Make Placements Endure", JP: "紹介を定着させる教師たち" })}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-inter leading-relaxed text-slate" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "Language and culture are what separate a placement that signs from a placement that stays. Our sensei and mentors own that difference.",
                  JP: "言葉と文化こそが、契約を交わす紹介と定着する紹介を分けるもの。私たちの講師とメンターがその違いを担います。",
                })}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {MENTORS.map((m, i) => (
              <CompactCard key={i} index={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-midnight">
        <div className="pattern-asanoha-dark absolute inset-0 opacity-60" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(188,26,44,0.10), transparent 60%)" }}
        />
        <div className="container-jg relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                <Sparkles className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-white"
                style={{ fontSize: "clamp(1.75rem,3.5vw,2.25rem)" }}
              >
                {tx({
                  EN: "Meet the Team That Builds the Bridge",
                  JP: "架け橋を築くチームに会う",
                })}
              </h2>
              <p className="mx-auto mt-4 font-inter leading-relaxed text-mist" style={{ fontSize: "clamp(0.95rem,1.6vw,1.0625rem)" }}>
                {tx({
                  EN: "These are the people who will own your placement end-to-end. Begin the conversation today.",
                  JP: "あなたの紹介をエンドツーエンドで担当する人々です。今日から会話を始めましょう。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Contact Us", JP: "お問い合わせ" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="rounded-md border border-white/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {tx({ EN: "Explore Services", JP: "サービスを見る" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
