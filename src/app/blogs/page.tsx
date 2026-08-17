"use client";

import { useState } from "react";
import {
  ArrowRight,
  Clock,
  Camera,
  Bookmark,
  TrendingUp,
  Plane,
  FileText,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { Photo, useLightbox, type PhotoItem } from "@/components/jgate/photo";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ============================================================
   /blogs — Insights & Life at J-Gate
   Dual-tabbed editorial magazine view:
     • Industry Insights  — 6 article cards (large cover images + tag pill
                              + number + read time + title + excerpt + Read More)
     • Life & Culture     — 8-photo masonry grid with lightbox (hover label
                              overlay + camera icon hint)
   REAL content from spec. Premium editorial standard.
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type Article = {
  key: string;
  photoId: string;
  fallback: string;
  initials: string;
  tag: Bilingual;
  tagColor: string; // tailwind classes for tag pill
  tagIcon: typeof Bookmark;
  readTime: Bilingual;
  title: Bilingual;
  excerpt: Bilingual;
  accent: "crimson" | "saffron" | "success";
};

const ARTICLES: Article[] = [
  {
    key: "b1",
    photoId: "photo-blog-1",
    fallback: "grad-office-main",
    initials: "JG",
    tag: { EN: "Career Guide", JP: "キャリアガイド" },
    tagColor: "bg-crimson/15 text-crimson",
    tagIcon: Bookmark,
    readTime: { EN: "5 min read", JP: "5分で読了" },
    title: {
      EN: "Why Indian Engineers Thrive in Japanese Enterprises",
      JP: "インド人エンジニアが日本企業で活躍する理由",
    },
    excerpt: {
      EN: "Cultural alignment, technical depth, and the bridge that makes the difference. A data-backed look at placement retention.",
      JP: "文化的適合、技術の深さ、そして違いを生む架け橋。定着率をデータで検証。",
    },
    accent: "crimson",
  },
  {
    key: "b2",
    photoId: "photo-blog-2",
    fallback: "grad-office-desks",
    initials: "JL",
    tag: { EN: "Business Culture", JP: "ビジネス文化" },
    tagColor: "bg-saffron/15 text-[#a06d00]",
    tagIcon: FileText,
    readTime: { EN: "7 min read", JP: "7分で読了" },
    title: {
      EN: "Understanding Indian Business Customs: A Guide",
      JP: "インドビジネス習慣の理解：ガイド",
    },
    excerpt: {
      EN: "Our certified instructors break down the study path that actually works — from N5 foundations to N2 fluency.",
      JP: "認定講師が実際に機能する学習パスを解説 — N5の基礎からN2の流暢さまで。",
    },
    accent: "saffron",
  },
  {
    key: "b3",
    photoId: "photo-blog-3",
    fallback: "grad-office-meeting",
    initials: "TT",
    tag: { EN: "Tech in Tokyo", JP: "東京のテック" },
    tagColor: "bg-success/15 text-success",
    tagIcon: TrendingUp,
    readTime: { EN: "6 min read", JP: "6分で読了" },
    title: {
      EN: "Tech in Tokyo: What Indian Engineers Need to Know",
      JP: "東京のテック：インド人エンジニアが知るべきこと",
    },
    excerpt: {
      EN: "From work culture to tech stacks — a practical guide for Indian engineers preparing for Tokyo placements.",
      JP: "仕事の文化から技術スタックまで — 東京配置に向けるインド人エンジニアのための実践ガイド。",
    },
    accent: "success",
  },
  {
    key: "b4",
    photoId: "photo-blog-4",
    fallback: "grad-office-cabin",
    initials: "VU",
    tag: { EN: "Visa Updates", JP: "ビザ最新情報" },
    tagColor: "bg-crimson/15 text-crimson",
    tagIcon: Plane,
    readTime: { EN: "8 min read", JP: "8分で読了" },
    title: {
      EN: "Visa Updates 2026: The Engineer Visa Guide",
      JP: "2026年ビザ最新情報：技術ビザ完全ガイド",
    },
    excerpt: {
      EN: "Step-by-step roadmap for establishing your India operations at Cyber Gateway — from company registration to banking and GST.",
      JP: "2026年に改正された日本の技術ビザ — 何が変わり、インド人エンジニアは何を準備すべきか、J-GateのCOE申請対応。",
    },
    accent: "crimson",
  },
  {
    key: "b5",
    photoId: "photo-blog-5",
    fallback: "grad-inauguration",
    initials: "BC",
    tag: { EN: "Business Culture", JP: "ビジネス文化" },
    tagColor: "bg-saffron/15 text-[#a06d00]",
    tagIcon: Sparkles,
    readTime: { EN: "6 min read", JP: "6分で読了" },
    title: {
      EN: "Business Japanese: 報連相 (Hōrensō) for Engineers",
      JP: "ビジネス日本語：エンジニアのための報連相（ほうれんそう）",
    },
    excerpt: {
      EN: "Hōkoku · Renraku · Sōdan — the three-pillar rhythm of Japanese corporate life that determines whether an engineer thrives.",
      JP: "報告・連絡・相談 — 日本の企業生活を支える三本柱。エンジニアが活躍できるかを決めるリズム。",
    },
    accent: "saffron",
  },
  {
    key: "b6",
    photoId: "photo-blog-6",
    fallback: "grad-event",
    initials: "ST",
    tag: { EN: "Engineering", JP: "エンジニアリング" },
    tagColor: "bg-success/15 text-success",
    tagIcon: TrendingUp,
    readTime: { EN: "7 min read", JP: "7分で読了" },
    title: {
      EN: "From Hyderabad to Tokyo: A Success Story",
      JP: "ハイデラバードから東京へ：ある成功ストーリー",
    },
    excerpt: {
      EN: "How a 26-year-old ML engineer from Hitech City moved through J-Gate's pipeline to thrive at a Tokyo enterprise in 14 months.",
      JP: "ハイテクシティの26歳MLエンジニアが、J-Gateのパイプラインを経て、14ヶ月で東京企業に着任し活躍するまでの軌跡。",
    },
    accent: "success",
  },
];

const GALLERY: (PhotoItem & { gKey: string })[] = [
  { id: "photo-blog-1", alt: "Main workspace at J-Gate Hyderabad",         label: "Main Workspace",        fallback: "grad-office-main",        initials: "JG", gKey: "blogs.g1" },
  { id: "photo-blog-2", alt: "Dedicated desks at J-Gate",                  label: "Dedicated Desks",       fallback: "grad-office-desks",       initials: "DG", gKey: "blogs.g2" },
  { id: "photo-blog-3", alt: "Canteen and lounge at J-Gate",               label: "Canteen & Lounge",     fallback: "grad-canteen-main",       initials: "CN", gKey: "blogs.g3" },
  { id: "photo-blog-4", alt: "Conference room at J-Gate",                  label: "Conference Room",       fallback: "grad-office-meeting",     initials: "CR", gKey: "blogs.g4" },
  { id: "photo-blog-5", alt: "Team celebrations at J-Gate",                 label: "Team Celebrations",     fallback: "grad-inauguration",       initials: "TC", gKey: "blogs.g5" },
  { id: "photo-blog-6", alt: "Candidate workshops at J-Gate",              label: "Candidate Workshops",   fallback: "grad-event",              initials: "WS", gKey: "blogs.g6" },
  { id: "photo-blog-7", alt: "Japanese tea lounge at J-Gate",             label: "Japanese Tea Lounge",   fallback: "grad-canteen-japanese",   initials: "🍵", gKey: "blogs.g7" },
  { id: "photo-blog-8", alt: "Cultural events at J-Gate",                  label: "Cultural Events",       fallback: "grad-event",              initials: "CE", gKey: "blogs.g8" },
];

const accentBarMap = {
  crimson: "from-crimson to-crimson-deep",
  saffron: "from-saffron to-[#c9881a]",
  success: "from-success to-[#0f5c46]",
} as const;

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
        subtitleKey="blogs.subtitle"
      />

      {/* ───────────────────────────────────────────────────────────
          Tab Switcher — pill toggle (Industry Insights | Life & Culture)
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
          Tab 1 — Industry Insights (6 article cards, editorial magazine style)
          Large cover image slot + tag pill + number + read time + title +
          excerpt + Read More → link.
         ─────────────────────────────────────────────────────────── */}
      {tab === "insights" && (
        <section className="section-pad bg-ivory-warm">
          <div className="container-jg">
            <Reveal>
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <Eyebrow>{tx({ EN: "Field Notes", JP: "フィールドノート" })}</Eyebrow>
                <h2
                  className="mt-3 font-serif-jp font-bold leading-[1.18] text-ink"
                  style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
                >
                  {tx({
                    EN: "Career Guides, Visa Briefings & Engineering Insights",
                    JP: "キャリアガイド・ビザ解説・エンジニアリングインサイト",
                  })}
                </h2>
                <p
                  className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-slate"
                  style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
                >
                  {tx({
                    EN: "Practical, deep-read articles written by our placement team, language sensei, and advisory council — distilled from real candidate journeys through the Japan-India corridor.",
                    JP: "紹介チーム、語学講師、諮問評議会のメンバーが、日印回廊を通過する実際の候補者の軌跡から抽出した実践的な記事。",
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
                      {/* Large cover image slot */}
                      <div className="relative h-56 w-full overflow-hidden">
                        <Photo
                          id={a.photoId}
                          alt={tx(a.title)}
                          fallback={a.fallback}
                          initials={a.initials}
                          rounded="rounded-none"
                          className="h-56 w-full"
                        />
                        {/* Top accent bar */}
                        <span
                          className={cn(
                            "absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r",
                            accentBarMap[a.accent]
                          )}
                        />
                        {/* Tag pill — top-left */}
                        <span
                          className={cn(
                            "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-pearl px-2.5 py-1 font-inter text-[10px] font-bold uppercase shadow-card",
                            a.tagColor
                          )}
                          style={{ letterSpacing: "0.1em" }}
                        >
                          <TagIcon className="h-3 w-3" />
                          {tx(a.tag)}
                        </span>
                        {/* Large faded article number — top-right */}
                        <span
                          className="absolute right-3 top-3 font-serif-jp text-[2.75rem] font-bold leading-none text-white/30 drop-shadow-sm"
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, "0")}
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
                          <span className="text-mist/40">·</span>
                          <span className="flex items-center gap-1.5 font-medium uppercase text-mist" style={{ letterSpacing: "0.08em" }}>
                            {tx(a.tag)}
                          </span>
                        </div>
                        <h3
                          className="mt-3 font-serif-jp font-bold leading-snug text-ink transition-colors group-hover:text-crimson"
                          style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
                        >
                          {tx(a.title)}
                        </h3>
                        <p className="mt-2.5 flex-1 font-inter text-[13px] leading-relaxed text-slate">
                          {tx(a.excerpt)}
                        </p>
                        <button
                          className="mt-5 inline-flex items-center gap-1.5 font-inter text-[13px] font-semibold text-crimson transition-all hover:gap-2.5"
                          aria-label={`${tx({ EN: "Read more about", JP: "続きを読む：" })} ${tx(a.title)}`}
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
                  {tx({ EN: "Subscribe", JP: "登録する" })}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────────────────
          Tab 2 — Life & Culture Gallery (8 photos, masonry, lightbox)
          Hover: label overlay + camera icon hint.
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
                  style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
                >
                  {t("blogs.gallery.title")}
                </h2>
                <p
                  className="mx-auto mt-3 max-w-2xl font-inter leading-relaxed text-mist"
                  style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
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
                    <figure className="group relative cursor-pointer">
                      <Photo
                        id={g.id}
                        alt={g.alt}
                        fallback={g.fallback}
                        initials={g.initials}
                        rounded="rounded-lg"
                        className={cn("w-full shadow-card", heights[i % heights.length])}
                        onClick={() => openGallery(i)}
                      />
                      {/* Hover label overlay — bottom gradient with label */}
                      <figcaption
                        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between rounded-b-lg p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(8,15,26,0.92) 0%, rgba(8,15,26,0.55) 50%, transparent 100%)",
                        }}
                      >
                        <span className="font-inter text-[12px] font-semibold text-white">
                          {t(g.gKey)}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-saffron" />
                      </figcaption>
                      {/* Camera icon hint — top-right */}
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
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.5rem)" }}
              >
                {tx({
                  EN: "Ready to Begin Your Own Japan-India Story?",
                  JP: "あなた自身の日印ストーリーを始めませんか？",
                })}
              </h2>
              <p
                className="mx-auto mt-4 font-inter leading-relaxed text-slate"
                style={{ fontSize: "clamp(0.875rem,1.4vw,1rem)" }}
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
