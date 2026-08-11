"use client";

import { useState } from "react";
import { ArrowRight, Clock, Camera, Bookmark, TrendingUp, Plane, FileText, Sparkles } from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { Photo, useLightbox, type PhotoItem } from "@/components/jgate/photo";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ============================================================
   /blogs — Blogs & Life at J-Gate
   Dual-tabbed view:
     • Industry Insights  — 6 article cards (2×3 grid)
     • Life & Culture     — 8-photo masonry with lightbox
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type Article = {
  key: string;
  tagKey?: string;            // if present, use t() dictionary lookup for tag
  tagInline?: Bilingual;       // otherwise use inline bilingual tag
  tagColor: string;            // tailwind classes for tag pill
  tagIcon: typeof Bookmark;
  readTime: Bilingual;
  titleKey?: string;
  titleInline?: Bilingual;
  excerptKey?: string;
  excerptInline?: Bilingual;
  gradient: string;
};

const ARTICLES: Article[] = [
  {
    key: "b1",
    tagKey: "blogs.b1.tag",
    tagColor: "bg-crimson/15 text-crimson",
    tagIcon: Bookmark,
    readTime: { EN: "5 min read", JP: "5分で読了" },
    titleKey: "blogs.b1.title",
    excerptKey: "blogs.b1.excerpt",
    gradient: "from-crimson to-midnight",
  },
  {
    key: "b2",
    tagKey: "blogs.b2.tag",
    tagColor: "bg-saffron/15 text-[#a06d00]",
    tagIcon: FileText,
    readTime: { EN: "7 min read", JP: "7分で読了" },
    titleKey: "blogs.b2.title",
    excerptKey: "blogs.b2.excerpt",
    gradient: "from-saffron to-crimson",
  },
  {
    key: "b3",
    tagKey: "blogs.b3.tag",
    tagColor: "bg-success/15 text-success",
    tagIcon: TrendingUp,
    readTime: { EN: "6 min read", JP: "6分で読了" },
    titleKey: "blogs.b3.title",
    excerptKey: "blogs.b3.excerpt",
    gradient: "from-navy to-success",
  },
  {
    key: "b4",
    tagInline: { EN: "Visa Updates", JP: "ビザ最新情報" },
    tagColor: "bg-crimson/15 text-crimson",
    tagIcon: Plane,
    readTime: { EN: "8 min read", JP: "8分で読了" },
    titleInline: {
      EN: "Visa Updates 2026: The Engineer Visa Guide",
      JP: "2026年ビザ最新情報：技術・人文知識・国際業務ビザ完全ガイド",
    },
    excerptInline: {
      EN: "The 2026 revision to Japan's Engineer/Specialist in Humanities/International Services visa — what changed, what Indian engineers need to prepare, and how J-Gate handles COE filing end-to-end.",
      JP: "2026年に改正された日本の「技術・人文知識・国際業務」ビザ — 何が変わり、インド人エンジニアは何を準備すべきか、そしてJ-Gateが在留資格認定書（COE）申請をどのようにエンドツーエンドで処理するか。",
    },
    gradient: "from-navy to-crimson",
  },
  {
    key: "b5",
    tagInline: { EN: "Business Culture", JP: "ビジネス文化" },
    tagColor: "bg-saffron/15 text-[#a06d00]",
    tagIcon: Sparkles,
    readTime: { EN: "6 min read", JP: "6分で読了" },
    titleInline: {
      EN: "Business Japanese: 報連相 (Hōrensō) for Engineers",
      JP: "ビジネス日本語：エンジニアのための報連相（ほうれんそう）",
    },
    excerptInline: {
      EN: "Hōkoku (report), Renraku (communicate), Sōdan (consult) — the three-pillar rhythm of Japanese corporate life. Why mastering it determines whether an engineer thrives or merely survives.",
      JP: "報告・連絡・相談 — 日本の企業生活を支える三本柱。なぜこれを習得できるかが、エンジニアが活躍するか単に生き残るかを決めるのか。",
    },
    gradient: "from-saffron to-navy",
  },
  {
    key: "b6",
    tagInline: { EN: "Engineering", JP: "エンジニアリング" },
    tagColor: "bg-success/15 text-success",
    tagIcon: TrendingUp,
    readTime: { EN: "7 min read", JP: "7分で読了" },
    titleInline: {
      EN: "From Hyderabad to Tokyo: A Success Story",
      JP: "ハイデラバードから東京へ：ある成功ストーリー",
    },
    excerptInline: {
      EN: "How a 26-year-old ML engineer from Hitech City moved through J-Gate's screening, JLPT N2 bootcamp, and visa pipeline to land — and thrive — at a Tokyo enterprise in fourteen months.",
      JP: "ハイテクシティの26歳のMLエンジニアが、J-Gateのスクリーニング、JLPT N2ブートキャンプ、ビザパイプラインを経て、14ヶ月で東京企業に着任し活躍するに至った軌跡。",
    },
    gradient: "from-crimson-deep to-saffron",
  },
];

const GALLERY: (PhotoItem & { gKey: string })[] = [
  { id: "photo-blog-1", alt: "Main workspace at J-Gate Hyderabad", label: "Main Workspace", fallback: "grad-office-main",     initials: "JG", gKey: "blogs.g1" },
  { id: "photo-blog-2", alt: "Dedicated desks at J-Gate",          label: "Dedicated Desks", fallback: "grad-office-desks",    initials: "DG", gKey: "blogs.g2" },
  { id: "photo-blog-3", alt: "Canteen and lounge at J-Gate",       label: "Canteen & Lounge", fallback: "grad-canteen-main",   initials: "CN", gKey: "blogs.g3" },
  { id: "photo-blog-4", alt: "Conference room at J-Gate",          label: "Conference Room", fallback: "grad-office-meeting",  initials: "CR", gKey: "blogs.g4" },
  { id: "photo-blog-5", alt: "Team celebrations at J-Gate",        label: "Team Celebrations", fallback: "grad-inauguration",  initials: "TC", gKey: "blogs.g5" },
  { id: "photo-blog-6", alt: "Candidate workshops at J-Gate",      label: "Candidate Workshops", fallback: "grad-event",       initials: "WS", gKey: "blogs.g6" },
  { id: "photo-blog-7", alt: "Japanese tea lounge at J-Gate",      label: "Japanese Tea Lounge", fallback: "grad-canteen-japanese", initials: "🍵", gKey: "blogs.g7" },
  { id: "photo-blog-8", alt: "Cultural events at J-Gate",          label: "Cultural Events", fallback: "grad-event",           initials: "CE", gKey: "blogs.g8" },
];

export default function BlogsPage() {
  const { t, tx } = useI18n();
  const { open } = useLightbox();
  const [tab, setTab] = useState<"insights" | "culture">("insights");

  const openGallery = (i: number) => {
    open(
      GALLERY.map((g) => ({
        id: g.id,
        alt: g.alt,
        label: t(g.gKey),
        fallback: g.fallback,
        initials: g.initials,
      })),
      i
    );
  };

  const getArticleTitle = (a: Article): string =>
    a.titleKey ? t(a.titleKey) : tx(a.titleInline!);
  const getArticleExcerpt = (a: Article): string =>
    a.excerptKey ? t(a.excerptKey) : tx(a.excerptInline!);
  const getArticleTag = (a: Article): string =>
    a.tagKey ? t(a.tagKey) : tx(a.tagInline!);

  return (
    <>
      <PageHero
        eyebrowKey="blogs.eyebrow"
        titleNode={
          <>
            {tx({ EN: "Insights & Life", JP: "インサイト&" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "at J-Gate", JP: "J-Gateの日常" })}
            </span>
          </>
        }
        subtitleKey="blogs.title"
      />

      {/* ───────────────────────────────────────────────────────────
          Tab Switcher — pill toggle
         ─────────────────────────────────────────────────────────── */}
      <section className="bg-ivory-warm pt-12 pb-2 md:pt-16">
        <div className="container-jg">
          <Reveal>
            <div className="flex justify-center">
              <div
                role="tablist"
                aria-label={tx({ EN: "Blogs sections", JP: "ブログのセクション" })}
                className="inline-flex items-center rounded-full border border-crimson/15 bg-pearl p-1 shadow-card"
              >
                <button
                  role="tab"
                  aria-selected={tab === "insights"}
                  onClick={() => setTab("insights")}
                  className={cn(
                    "rounded-full px-6 py-2.5 font-inter text-[13px] font-semibold transition-all sm:text-sm",
                    tab === "insights"
                      ? "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-crimp"
                      : "text-slate hover:text-crimson"
                  )}
                >
                  {t("blogs.tab1")}
                </button>
                <button
                  role="tab"
                  aria-selected={tab === "culture"}
                  onClick={() => setTab("culture")}
                  className={cn(
                    "rounded-full px-6 py-2.5 font-inter text-[13px] font-semibold transition-all sm:text-sm",
                    tab === "culture"
                      ? "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-crimp"
                      : "text-slate hover:text-crimson"
                  )}
                >
                  {t("blogs.tab2")}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          Tab 1 — Industry Insights (6 article cards)
         ─────────────────────────────────────────────────────────── */}
      {tab === "insights" && (
        <section className="section-pad bg-ivory-warm">
          <div className="container-jg">
            <Reveal>
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <Eyebrow>{tx({ EN: "Field Notes", JP: "フィールドノート" })}</Eyebrow>
                <h2
                  className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink"
                  style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.375rem)" }}
                >
                  {tx({
                    EN: "Career Guides, Visa Briefings & Engineering Insights",
                    JP: "キャリアガイド・ビザ解説・エンジニアリングインサイト",
                  })}
                </h2>
                <p
                  className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
                  style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.0625rem)" }}
                >
                  {tx({
                    EN: "Practical, deep-read articles written by our placement team, language sensei, and advisory council — distilled from real candidate journeys through the Japan-India corridor.",
                    JP: "紹介チーム、語学講師、諮問評議会のメンバーが、日印回廊を通過する実際の候補者の軌跡から抽出した実践的で深い読み応えのある記事。",
                  })}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((a, i) => {
                const TagIcon = a.tagIcon;
                return (
                  <Reveal key={a.key} delay={i * 90}>
                    <article className="lift-card group flex h-full flex-col overflow-hidden rounded-lg border border-crimson/10 bg-pearl shadow-card">
                      {/* Gradient header */}
                      <div
                        className={cn(
                          "relative flex h-36 items-center justify-center bg-gradient-to-br",
                          a.gradient
                        )}
                      >
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1.5px)",
                            backgroundSize: "20px 20px",
                          }}
                          aria-hidden="true"
                        />
                        <span className="relative font-serif-jp text-[2.75rem] font-bold text-white/30">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {/* Category tag pill */}
                        <span
                          className={cn(
                            "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-pearl px-2.5 py-1 font-inter text-[10px] font-bold uppercase shadow-card",
                            a.tagColor
                          )}
                          style={{ letterSpacing: "0.1em" }}
                        >
                          <TagIcon className="h-3 w-3" />
                          {getArticleTag(a)}
                        </span>
                        {/* Hover sheen */}
                        <div
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
                          }}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Card body */}
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex items-center gap-3 font-inter text-[12px] text-mist">
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-saffron" />
                            {tx(a.readTime)}
                          </span>
                        </div>
                        <h3
                          className="mt-3 font-serif-jp text-lg font-bold leading-snug text-ink transition-colors group-hover:text-crimson"
                          style={{ fontSize: "clamp(1.0625rem, 1.8vw, 1.1875rem)" }}
                        >
                          {getArticleTitle(a)}
                        </h3>
                        <p className="mt-2.5 flex-1 font-inter text-[13px] leading-relaxed text-slate">
                          {getArticleExcerpt(a)}
                        </p>
                        <button
                          className="mt-5 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all hover:gap-2.5"
                          aria-label={`${tx({ EN: "Read more about", JP: "続きを読む：" })} ${getArticleTitle(a)}`}
                        >
                          {t("blogs.readmore")}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* Newsletter CTA strip */}
            <Reveal delay={120}>
              <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-lg border border-crimson/10 bg-pearl p-6 shadow-card sm:flex-row sm:p-8">
                <div>
                  <h3 className="font-serif-jp text-lg font-bold text-ink">
                    {tx({ EN: "Get new articles in your inbox", JP: "新着記事をメールでお届け" })}
                  </h3>
                  <p className="mt-1 font-inter text-[13px] text-slate">
                    {tx({
                      EN: "Bi-weekly insights on Japan-India careers, language, and business culture.",
                      JP: "隔週で日印のキャリア・語学・ビジネス文化のインサイトをお届けします。",
                    })}
                  </p>
                </div>
                <Link
                  href="/auth/brochure"
                  className="btn-shine flex shrink-0 items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-6 py-3 font-inter text-[13px] font-semibold text-white shadow-crimp transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Subscribe via Brochure", JP: "パンフレット経由で登録" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────────────────
          Tab 2 — Life & Culture Gallery (8 photos, masonry, lightbox)
         ─────────────────────────────────────────────────────────── */}
      {tab === "culture" && (
        <section className="section-pad relative overflow-hidden bg-midnight">
          <div className="pattern-asanoha-dark absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(188,26,44,0.10), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="container-jg relative">
            <Reveal>
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <Eyebrow light>{tx({ EN: "Inside J-Gate", JP: "J-Gateの内側" })}</Eyebrow>
                <h2
                  className="mt-3 font-serif-jp font-bold leading-[1.18] text-white"
                  style={{ fontSize: "clamp(1.75rem, 3.6vw, 2.375rem)" }}
                >
                  {t("blogs.gallery.title")}
                </h2>
                <p
                  className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-mist"
                  style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.0625rem)" }}
                >
                  {t("blogs.gallery.subtitle")}
                </p>
              </div>
            </Reveal>

            {/* Masonry grid — alternating tall/short for organic flow */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY.map((g, i) => {
                // Masonry-style alternating heights
                const heights = ["h-72", "h-48", "h-56", "h-72", "h-48", "h-72", "h-56", "h-48"];
                return (
                  <Reveal key={g.id} delay={(i % 4) * 80}>
                    <figure className="group relative">
                      <Photo
                        id={g.id}
                        alt={g.alt}
                        fallback={g.fallback}
                        initials={g.initials}
                        rounded="rounded-lg"
                        className={cn("w-full cursor-pointer shadow-card", heights[i % heights.length])}
                        onClick={() => openGallery(i)}
                      />
                      {/* Hover label overlay */}
                      <figcaption
                        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end rounded-b-lg p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(8,15,26,0.92) 0%, rgba(8,15,26,0.55) 50%, transparent 100%)",
                        }}
                      >
                        <span className="font-inter text-[12px] font-semibold text-white">
                          {t(g.gKey)}
                        </span>
                      </figcaption>
                      {/* Camera icon hint */}
                      <span
                        className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        <Camera className="h-4 w-4" />
                      </span>
                    </figure>
                  </Reveal>
                );
              })}
            </div>

            {/* Hint footer */}
            <Reveal delay={120}>
              <p className="mt-8 text-center font-inter text-[12px] text-mist">
                {tx({
                  EN: "Click any photo to view the full gallery · Use ← → to navigate · ESC to close",
                  JP: "写真をクリックするとギャラリーが開きます · ← → で移動 · ESC で閉じる",
                })}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────────────────
          Closing CTA
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory">
        <div className="container-jg">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                <Sparkles className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h2
                className="mt-6 font-serif-jp font-bold leading-[1.18] text-ink"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)" }}
              >
                {tx({
                  EN: "Ready to Begin Your Own Japan-India Story?",
                  JP: "あなた自身の日印ストーリーを始めませんか？",
                })}
              </h2>
              <p
                className="mx-auto mt-4 font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.0625rem)" }}
              >
                {tx({
                  EN: "The candidates in our success stories all started with one step — a conversation. Begin yours today.",
                  JP: "成功ストーリーの候補者たちは皆、最初の会話から歩みを始めました。今日、あなたも最初の一歩を。",
                })}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/auth/brochure"
                  className="btn-shine flex items-center gap-2 rounded-md bg-gradient-to-r from-crimson to-crimson-deep px-7 py-3.5 font-inter text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(188,26,44,0.35)] transition-all hover:-translate-y-0.5"
                >
                  {tx({ EN: "Download Brochure", JP: "パンフレットをダウンロード" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-crimson/30 px-7 py-3.5 font-inter text-[14px] font-semibold text-crimson transition-all hover:-translate-y-0.5 hover:bg-crimson/5"
                >
                  {tx({ EN: "Talk to Our Team", JP: "チームに相談する" })}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
