"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ============================================================
   J-Gate i18n — JP/EN bilingual system
   Real working translation toggle (not "coming soon")
   ============================================================ */

export type Lang = "EN" | "JP";

type Dictionary = Record<string, { EN: string; JP: string }>;

/* Comprehensive translations dictionary for all visible content */
export const translations: Dictionary = {
  // Nav
  "nav.home": { EN: "Home", JP: "ホーム" },
  "nav.about": { EN: "About", JP: "概要" },
  "nav.why": { EN: "Why J-Gate", JP: "特長" },
  "nav.services": { EN: "Services", JP: "サービス" },
  "nav.team": { EN: "Team", JP: "チーム" },
  "nav.pricing": { EN: "Pricing", JP: "料金" },
  "nav.faq": { EN: "FAQ", JP: "FAQ" },
  "nav.blogs": { EN: "Office", JP: "オフィス" },
  "nav.contact": { EN: "Contact", JP: "お問合せ" },
  "nav.brochure": { EN: "Brochure", JP: "資料請求" },

  // FAQ Page
  "faq.eyebrow": { EN: "Knowledge Base & FAQs", JP: "ナレッジベース・よくある質問" },
  "faq.title": { EN: "Frequently Asked Questions", JP: "よくあるご質問" },
  "faq.subtitle": {
    EN: "Clear, authoritative answers regarding workspace options, resident Japan Desk operations, Indian incorporation, talent acquisition, and bilateral growth.",
    JP: "オフィス施設、常駐ジャパンデスク、現地法人設立、IT人材採用、日印ビジネス連携に関するよくあるご質問と回答を掲載しています。",
  },

  // Hero — REAL PDF content (Slide 1: Cover Page)
  "hero.eyebrow": { EN: "Japan–India Business & Talent Hub", JP: "日印ビジネス＆高度人材ハブ" },
  "hero.title1": { EN: "A Dedicated Workspace for", JP: "日本企業のインド進出を支える" },
  "hero.title2": { EN: "Japanese Companies in India", JP: "ハイデラバード専用ビジネス拠点" },
  "hero.subtitle": {
    EN: "A dedicated co-working space in Hyderabad for Japanese businesses. Dedicated desks, private offices, resident Japan Desk support, and full office infrastructure to start operations smoothly in India.",
    JP: "インド・ハイデラバードにおける日本企業専用のワーキングハブ。専用デスク、個室オフィス、日本人常駐サポート、充実したオフィスインフラを備え、スムーズな現地事業立ち上げを強力に支援します。",
  },
  "hero.jptag": { EN: "「日本企業専用のワーキングハブ誕生」", JP: "「日本企業専用のワーキングハブ誕生」" },
  "hero.entag": { EN: "A Dedicated Workspace for Japanese Companies in India in Hyderabad", JP: "A Dedicated Workspace for Japanese Companies in India in Hyderabad" },
  "hero.cta1": { EN: "Download Brochure", JP: "パンフレットをダウンロード" },
  "hero.cta2": { EN: "Explore Services", JP: "サービスを見る" },
  "hero.badge1": { EN: "Dedicated Japan Desk", JP: "専任ジャパンデスク" },
  "hero.badge2": { EN: "Hyderabad Office Base", JP: "戦略的ハイデラバード拠点" },
  "hero.badge3": { EN: "Complete India Setup Support", JP: "エンドツーエンド進出支援" },
  "hero.scroll": { EN: "Discover J-Gate", JP: "J-Gateを知る" },
  "hero.founded": { EN: "Est. June 2026", JP: "2026年6月開設" },
  "hero.location": { EN: "Hyderabad", JP: "インド・ハイデラバード" },
  "hero.operator": { EN: "Operated by Indobox India Private Limited.", JP: "Indobox India Private Limited 運営" },

  // Home page sections
  "home.logos.eyebrow": { EN: "Partner Network", JP: "提携エコシステム" },
  "home.logos.title": { EN: "Our Innovation & Ecosystem Network", JP: "日印イノベーション＆提携エコシステム" },
  "home.logos.subtitle": { EN: "Partner institutions, universities, and enterprise enablers collaborating across the Japan–India corridor.", JP: "日印ビジネス回廊を支える提携インキュベーション施設、大学、パートナー企業。" },
  "home.overview.eyebrow": { EN: "Executive Overview", JP: "エグゼクティブ概要" },
  "home.overview.title": { EN: "Explore the J-Gate Ecosystem", JP: "J-Gateエコシステムを探る" },
  "home.overview.subtitle": { EN: "Each dimension of J-Gate is a dedicated experience. Dive deeper into what matters to you.", JP: "J-Gateの多様なソリューションを詳しくご紹介します。" },
  "home.cta.title": { EN: "Experience J-Gate's Premium Workspace", JP: "J-Gateのプレミアムワークスペースを体験する" },
  "home.cta.subtitle": { EN: "Book a tour of our Hyderabad facility. See your dedicated desk, meeting rooms, and the Japan Desk in person.", JP: "ハイデラバード施設のツアーをご案内いたします。専用デスク、会議室、ジャパンデスクの実際の環境をご確認いただけます。" },

  // About — pure corporate identity
  "about.eyebrow": { EN: "About J-Gate", JP: "J-Gateについて" },
  "about.title": { EN: "Operated by Indobox India — a dedicated working hub for Japanese enterprises in Hyderabad.", JP: "Indobox Indiaが運営する、ハイデラバードの日本企業専用ワーキングハブ。" },

  // About — Core Purpose & Vision (Slide 2)
  "about.purpose.eyebrow": { EN: "Core Purpose & Vision", JP: "目的とビジョン" },
  "about.purpose.title": { EN: "From creating opportunities for Indian expansion to developing personnel in charge of India", JP: "インド展開のきっかけ作りから、現地推進を担う人材の育成まで" },
  "about.purpose.subtitle": {
    EN: "Three pillars define why J-Gate exists — each a deliberate step toward making the Indo-Japanese corridor operational, end to end.",
    JP: "J-Gateの存在意義を定義する3つの柱 — 日印ビジネス回廊をエンドツーエンドで実体化・加速させます。",
  },
  "about.pillar1.tag": { EN: "Pillar 01", JP: "第1の柱" },
  "about.pillar1.title": { EN: "Market Entry & Exploration", JP: "きっかけ作り" },
  "about.pillar1.jp": { EN: "きっかけ作り", JP: "きっかけ作り" },
  "about.pillar1.desc": {
    EN: "Providing an environment where local activities can start quickly with low overhead — so Japanese enterprises can begin their India expansion without heavy upfront investment.",
    JP: "最小限の初期コストで現地活動を即座に開始できる環境を提供。初期投資リスクを抑え、スムーズなインド市場参入を実現します。",
  },
  "about.pillar2.tag": { EN: "Pillar 02", JP: "第2の柱" },
  "about.pillar2.title": { EN: "Talent Development", JP: "人材育成" },
  "about.pillar2.jp": { EN: "人材育成", JP: "人材育成" },
  "about.pillar2.desc": {
    EN: "Nurturing India representatives capable of competing locally through Indobox Business & Talent Orientation — equipping your team with the language, business, and cultural understanding needed to succeed in the Indian market.",
    JP: "Indoboxビジネスオリエンテーションを通じ、現地で成果を上げるインド事業担当者を育成。インド市場での成功に必要な言語・ビジネス実務・異文化理解力を習得させます。",
  },
  "about.pillar3.tag": { EN: "Pillar 03", JP: "第3の柱" },
  "about.pillar3.title": { EN: "Business Collaboration", JP: "ビジネス連携" },
  "about.pillar3.jp": { EN: "ビジネス連携", JP: "ビジネス連携" },
  "about.pillar3.desc": {
    EN: "A dedicated space that fosters collaboration between Japanese and Indian companies — where partnerships, MoUs, and joint ventures are formed and developed.",
    JP: "日印企業間のコラボレーションを加速する専用空間。アライアンス、MoU（覚書）、合弁事業が具体的に創出される場所です。",
  },

  // About — Strategic Location (Slide 3)
  "about.locations.eyebrow": { EN: "Strategic Location", JP: "戦略的ロケーション" },
  "about.locations.title": { EN: "Strategic Location: Hyderabad", JP: "戦略的ロケーション：ハイデラバード" },
  "about.locations.subtitle": {
    EN: "One city, one mission — our main base in India's rising tech capital, where every major Japanese business touchpoint in the corridor comes together.",
    JP: "急成長を遂げるインドのIT・テクノロジー首都。日印ビジネスの主要な接点が集結する中心拠点です。",
  },
  "about.hyderabad.tag": { EN: "Main Base", JP: "主拠点" },
  "about.hyderabad.title": { EN: "Hyderabad", JP: "ハイデラバード" },
  "about.hyderabad.status": { EN: "Launched June 2026", JP: "2026年6月開設" },
  "about.hyderabad.nick": { EN: "The 'Next Bangalore'", JP: "「ネクスト・バンガロール」" },
  "about.hyderabad.desc": {
    EN: "Known as the 'Next Bangalore,' with heavy concentration of IT, pharmaceutical, and biotechnology industries. Advanced infrastructure, numerous R&D hubs of global enterprises. The optimal business ecosystem for fostering innovation.",
    JP: "「ネクスト・バンガロール」として注目を集め、IT・製薬・バイオテクノロジー産業が集積。先進的な都市インフラと、グローバル企業のR&D拠点が多数立地するイノベーション創出に最適なビジネスエコシステム。",
  },
  "about.hyderabad.f1": { EN: "IT / Pharma / Biotech cluster", JP: "IT・製薬・バイオテク集積" },
  "about.hyderabad.f2": { EN: "Global R&D hub density", JP: "グローバルR&D拠点密度" },
  "about.hyderabad.f3": { EN: "Advanced urban infrastructure", JP: "先進的都市インフラ" },

  // About — story / mission / vision / values (existing, retained)
  "about.story.title": { EN: "Our Story", JP: "私たちのストーリー" },
  "about.story.body": {
    EN: "J-Gate was founded to bridge two of the world's most complementary technology ecosystems — India's deep engineering talent and Japan's enterprise precision. We exist to make that bridge operational, placing top-tier engineers and professionals into Japanese enterprises where they thrive.",
    JP: "J-Gateは、インドの豊富なエンジニアリング人材と、日本の高い品質意識・企業精度という、双方の強みを融合させるべく設立されました。私たちは確かな連携の架け橋となり、トップクラスの技術人材・プロフェッショナルの日本企業での活躍を一貫して支援します。",
  },
  "about.mission.title": { EN: "Our Mission", JP: "ミッション" },
  "about.mission.body": {
    EN: "Providing Japanese companies with a dedicated working hub, Japan Desk consultation, and end-to-end business support — from first curiosity to corporate entity establishment.",
    JP: "日本企業向けに専用ワーキングハブ、ジャパンデスクによる相談窓口、および法人設立から事業運用に至るエンドツーエンドの包括的進出支援を提供します。",
  },
  "about.vision.title": { EN: "Our Vision", JP: "ビジョン" },
  "about.vision.body": {
    EN: "To become the definitive Indo-Japanese talent pipeline and strategic bridge — the first name Japanese enterprises call when they need world-class technical talent.",
    JP: "日印間における最高峰のビジネス＆人材架け橋となること。日本企業がインド市場への進出や高度技術人材の活用を検討する際、最も頼れるファーストパートナーを目指します。",
  },
  "about.values.title": { EN: "Our Core Values", JP: "コアバリュー" },
  "about.values.subtitle": { EN: "The principles that guide every placement, every training, every partnership.", JP: "すべての支援、研修、パートナーシップにおいて妥協なく追求する絶対的規範。" },
  "about.v1": { EN: "Integrity", JP: "誠実さ" },
  "about.v1.desc": { EN: "Transparent, honest, long-term relationships — never transactional.", JP: "透明性と誠実さを重視した長期的な信頼関係の構築。" },
  "about.v2": { EN: "Cultural Fluency", JP: "異文化理解力" },
  "about.v2.desc": { EN: "Deep mastery of both Japanese and Indian business cultures.", JP: "日印双方の商習慣とビジネス文化に対する深い洞察。" },
  "about.v3": { EN: "Technical Excellence", JP: "技術的卓越性" },
  "about.v3.desc": { EN: "Rigorous screening — only the top percentile of technical talent.", JP: "厳格な審査を通過した最高水準の高度IT人材。" },
  "about.v4": { EN: "Long-Term Partnership", JP: "長期パートナーシップ" },
  "about.v4.desc": { EN: "We succeed only when our placements and partners succeed.", JP: "パートナー企業の事業成功こそが私たちの唯一の成功指標。" },

  // Why J-Gate — 4 differentiators
  "why.eyebrow": { EN: "Why J-Gate", JP: "J-Gateの強み" },
  "why.title": { EN: "The Advantages of Choosing J-Gate", JP: "戦略的投資としての優位性" },
  "why.subtitle": {
    EN: "What makes J-Gate the trusted partner between Indian technical talent and Japanese enterprises.",
    JP: "J-Gateが日印ビジネス連携および高度人材活用において選ばれ続ける理由。",
  },

  // Why — Competitive Comparison Table (Slide 10)
  "why.compare.eyebrow": { EN: "Side-by-Side Comparison", JP: "比較一覧表" },
  "why.compare.title": { EN: "J-Gate vs The Alternatives", JP: "J-Gateと他の選択肢の比較" },
  "why.compare.subtitle": {
    EN: "A direct comparison across the four representative paths Japanese enterprises consider when entering India — cost, support, network, and overall value.",
    JP: "日本企業がインド進出で検討する4つの代表的選択肢を、コスト・サポート体制・ネットワーク・総合的メリットで比較。",
  },
  "why.compare.col.cap": { EN: "Comparison Item", JP: "比較項目" },
  "why.compare.col.jgate": { EN: "J-Gate", JP: "J-Gate" },
  "why.compare.col.consult": { EN: "Major Japanese Consulting Firms", JP: "大手コンサルティングファーム" },
  "why.compare.col.cowork": { EN: "Local Coworking", JP: "現地一般的なコワーキング" },
  "why.compare.col.public": { EN: "Public Support Orgs", JP: "公的進出支援機関" },
  "why.compare.note": {
    EN: "J-Gate is the only option that combines a physical base, resident Japanese expertise, hands-on operational support, and direct hiring — at a predictable, affordable cost.",
    JP: "J-Gateは、専用拠点・日本人専門家常駐・実務伴走支援・直接採用サポートを兼ね備え、優れた費用対効果を提供する唯一のプラットフォームです。",
  },
  "why.row1.label": { EN: "Target Audience", JP: "対象顧客" },
  "why.row1.jgate": { EN: "Mid-size, SMEs, Municipalities, Startups, Regional Banks", JP: "中堅・中小企業・自治体・スタートアップ・地方銀行" },
  "why.row1.consult": { EN: "Large Enterprises", JP: "一部の大企業" },
  "why.row1.cowork": { EN: "Local Companies, Freelancers", JP: "現地企業・フリーランス" },
  "why.row1.public": { EN: "General / All", JP: "全企業対象（一般論中心）" },
  "why.row2.label": { EN: "Monthly Cost", JP: "月額費用" },
  "why.row2.jgate": { EN: "From 15,000 INR (~¥27,000)", JP: "15,000 INR〜（約2.7万円〜）" },
  "why.row2.consult": { EN: "¥500,000 – ¥1,000,000", JP: "月額 50万〜100万円以上" },
  "why.row2.cowork": { EN: "10,000 – 60,000 INR", JP: "月額 10,000〜60,000 INR" },
  "why.row2.public": { EN: "Free – Low Cost", JP: "無料〜低価格" },
  "why.row3.label": { EN: "Dedicated Office Space", JP: "専用拠点・オフィス" },
  "why.row3.jgate": { EN: "Yes", JP: "あり（日系専用フロア）" },
  "why.row3.consult": { EN: "None (Separate contract needed)", JP: "なし（別途契約が必要）" },
  "why.row3.cowork": { EN: "Yes", JP: "あり（一般現地共有）" },
  "why.row3.public": { EN: "None (Temporary usage only)", JP: "なし（一時利用のみ）" },
  "why.row4.label": { EN: "On-Site Japanese Support", JP: "日本人専門家常駐" },
  "why.row4.jgate": { EN: "Yes (Japan Desk)", JP: "あり（常駐ジャパンデスク）" },
  "why.row4.consult": { EN: "None (Available on request)", JP: "なし（都度出張・高額オプション）" },
  "why.row4.cowork": { EN: "None", JP: "なし" },
  "why.row4.public": { EN: "None (Local staff only)", JP: "なし（現地スタッフのみ）" },
  "why.row5.label": { EN: "Hands-on Support", JP: "現地実務伴走サポート" },
  "why.row5.jgate": { EN: "Yes (Covers day-to-day business operations)", JP: "あり（日常実務まで伴走支援）" },
  "why.row5.consult": { EN: "Yes (Mainly advisory)", JP: "あり（主に助言・資料作成のみ）" },
  "why.row5.cowork": { EN: "None", JP: "なし" },
  "why.row5.public": { EN: "Yes (Information/advice only)", JP: "あり（一般的な情報提供のみ）" },
  "why.row6.label": { EN: "Japanese Language Support", JP: "日本語コミュニケーション" },
  "why.row6.jgate": { EN: "Fully Supported", JP: "完全対応（相談から契約まで）" },
  "why.row6.consult": { EN: "Supported (High cost)", JP: "対応（高コスト）" },
  "why.row6.cowork": { EN: "None", JP: "不可（英語のみ）" },
  "why.row6.public": { EN: "Supported (Limited)", JP: "一部対応（窓口限定）" },
  "why.row7.label": { EN: "Hiring Support", JP: "現地IT人材採用支援" },
  "why.row7.jgate": { EN: "Yes (Indobox Partnership)", JP: "あり（Indobox直結パートナーシップ）" },
  "why.row7.consult": { EN: "Yes (Referral only, expensive)", JP: "あり（提携先紹介のみ・非常に高額）" },
  "why.row7.cowork": { EN: "None", JP: "なし" },
  "why.row7.public": { EN: "None", JP: "なし" },
  "why.row8.label": { EN: "Network", JP: "現地ネットワーク" },
  "why.row8.jgate": { EN: "Close ties with T-Hub and local ecosystem", JP: "T-Hub・州政府・地元エコシステムと直結" },
  "why.row8.consult": { EN: "Government agencies, large firms", JP: "大手企業・一部の政府機関" },
  "why.row8.cowork": { EN: "Local coworkers and freelancers only", JP: "個別利用者のみ" },
  "why.row8.public": { EN: "Government agencies, large firms", JP: "行政機関中心" },
  "why.row9.label": { EN: "Cost Assessment", JP: "費用対効果評価" },
  "why.row9.jgate": { EN: "◎ Optimal as a strategic investment", JP: "◎ 戦略投資として極めて高い費用対効果" },
  "why.row9.consult": { EN: "△ Very expensive", JP: "△ 初期費用・ランニングコスト共に高額" },
  "why.row9.cowork": { EN: "Cheap, but no business support", JP: "低コストだがビジネス支援機能なし" },
  "why.row9.public": { EN: "◎ Extremely inexpensive", JP: "◎ 低額だが実務伴走が不可" },

  // Why — 7 Core Value Pillars (Slide 11)
  "why.pillars.eyebrow": { EN: "7 Core Value Pillars", JP: "7つの提供価値" },
  "why.pillars.title": { EN: "What J-Gate Offers Your Business", JP: "J-Gateメンバーシップの提供価値" },
  "why.pillars.subtitle": {
    EN: "7 Pillars Accelerating Japanese Business in India — the complete membership value that turns a workspace into a strategic launchpad.",
    JP: "日本企業のインドビジネスを加速する7つの柱 — ワークスペースを戦略的拠点へと変える価値ソリューション。",
  },
  "why.p1.title": { EN: "Workspace Access", JP: "オフィス執務空間" },
  "why.p1.desc": { EN: "Dedicated desk space for 2-4 people per company — your personal workspace in a shared professional environment.", JP: "1社あたり専用デスクスペースを完備。快適かつセキュアな執務環境を提供します。" },
  "why.p2.title": { EN: "Infrastructure", JP: "施設インフラ" },
  "why.p2.desc": { EN: "Cabinets, high-speed Wi-Fi, meeting rooms, and cafeteria spaces — all standard, all included.", JP: "鍵付きキャビネット、高速光回線、会議室、カフェテリア利用がすべて料金に含まれます。" },
  "why.p3.title": { EN: "Japan Desk", JP: "ジャパンデスク" },
  "why.p3.desc": { EN: "A Japanese-speaking expert available daily at the workspace — legal, HR, cultural, and operational questions answered in Japanese.", JP: "現地常駐の日本人専門家が日々の法務・人事・実務上の課題を日本語で即時にサポートします。" },
  "why.p4.title": { EN: "Company Setup", JP: "法人設立支援" },
  "why.p4.desc": { EN: "Complete step-by-step guidance from workspace registration to legal incorporation.", JP: "オフィス登記から現地法人設立（Pvt Ltd）まで、スムーズな手続きを伴走支援します。" },
  "why.p5.title": { EN: "Networking Events", JP: "ネットワーキング" },
  "why.p5.desc": { EN: "Direct participation in workspace networking events with business authorities and local ecosystem experts.", JP: "現地政府高官、T-Hub関係者、地元企業経営者との交流イベントを定例開催します。" },
  "why.p6.title": { EN: "India Market Briefings & Seminars", JP: "インド市場セミナー" },
  "why.p6.desc": { EN: "Ongoing India market seminars held at the workspace — not one-off, but continuous learning.", JP: "最新の規制動向、税務、ITトレンドに関する実践的な講習会・勉強会を定期提供します。" },
  "why.p7.title": { EN: "Local Services", JP: "現地生活・実務手配" },
  "why.p7.desc": { EN: "Payroll, outsourcing, interpretation, and meal delivery (Italian, Chinese, Japanese-style) — arranged through the workspace.", JP: "給与計算、通訳手配、出張手配、日本食等の食事手配までワンストップで対応します。" },

  // Services — REAL PDF content (Slide 4: Indobox Comprehensive Expansion Support & Talent Development)
  "services.eyebrow": { EN: "Services", JP: "サービス" },
  "services.title": {
    EN: "Indobox's Unique Comprehensive Market Entry Support & Talent Development — Hyderabad's dedicated end-to-end platform for Japanese enterprises.",
    JP: "Indoboxならではの包括的進出支援・人材育成 — 日本企業のためのハイデラバード専任エンドツーエンドプラットフォーム。",
  },
  "services.subtitle": {
    EN: "From corporate establishment to practical daily operations — a single, integrated operating system for Japan-India market entry.",
    JP: "法人設立から日常実務まで — 日印市場進出のための単一の統合オペレーティングシステム。",
  },
  "services.s1.title": { EN: "Executive & Engineering Recruitment", JP: "エグゼクティブ＆エンジニアリング採用支援" },
  "services.s1.short": { EN: "Direct hiring for Japanese tech enterprises.", JP: "日本企業向けの高度IT人材直接採用。" },
  "services.s1.desc": {
    EN: "Direct hiring channels into Japanese tech enterprises — from software engineers to C-suite executives. Rigorous technical screening, cultural-fit assessment, and bilingual interview facilitation. We place talent that stays.",
    JP: "最高峰のソフトウェアエンジニアから現地幹部候補まで直接採用。厳格な技術スクリーニング、日系企業の文化適合性評価、バイリンガル面接支援により、定着率の高い人材をご紹介します。",
  },
  "services.s2.title": { EN: "Corporate Bridging & Consulting", JP: "企業間アライアンス＆コンサルティング" },
  "services.s2.short": { EN: "Cross-border business & project management.", JP: "越境ビジネス構築＆プロジェクトマネジメント。" },
  "services.s2.desc": {
    EN: "Cross-border business communication and technical project management. We bridge Japanese enterprises with Indian technology partners — handling MoU facilitation, partner vetting, and ongoing liaison.",
    JP: "越境ビジネスコミュニケーションと技術プロジェクト管理。日本企業とインドのITパートナーを強固に橋渡し — MoU（覚書）締結、パートナー審査、継続的な交渉窓口を担当します。",
  },
  "services.s3.title": { EN: "Specialized Language & Business Training", JP: "実務語学＆異文化ビジネス研修" },
  "services.s3.short": { EN: "Interpretation and back-office support by Japanese-speaking staff.", JP: "日本語スタッフによる通訳・バックオフィス実務支援。" },
  "services.s3.desc": {
    EN: "Bookkeeping, accounting, vendor coordination, and interpretation support by Japanese-speaking staff — no language friction in your daily operations.",
    JP: "現地での会計・記帳、ベンダー調整、契約書チェック、会議通訳を常駐の日本語スタッフが担当。日常の業務遂行における言語・習慣の摩擦を取り除きます。",
  },
  "services.s4.title": { EN: "Post-Offer & Relocation Support", JP: "拠点立ち上げ＆事業伴走サポート" },
  "services.s4.short": { EN: "End-to-end support from setup to daily operations.", JP: "拠点設立から日常運営までの総合伴走支援。" },
  "services.s4.desc": {
    EN: "Consistent support from corporate establishment through daily operations. One accountable partner. Zero hand-off gaps.",
    JP: "法人設立から日常運営まで単一の責任主体によるシームレスな伴走体制。外部委託による引き継ぎロスゼロを実現します。",
  },

  // Team — REAL PDF content (Slide 12: Board of Advisory & Ecosystem Partners + Slide 13: Operations Team)
  "team.eyebrow": { EN: "Team", JP: "チーム" },
  "team.title": { EN: "The Minds Behind J-Gate", JP: "J-Gateを支えるプロフェッショナル" },
  "team.subtitle": {
    EN: "Experienced leaders and on-site specialists dedicated to supporting your business in India.",
    JP: "日印ビジネスの第一線で実績を重ねたリーダーと現地専門チームが、貴社のインド展開を全力でサポートします。",
  },
  "team.cat1": { EN: "Executive Leadership", JP: "経営陣" },
  "team.cat2": { EN: "Technical Advisors", JP: "技術・戦略アドバイザー" },
  "team.cat3": { EN: "Language & Cultural Mentors", JP: "語学・異文化適応メンター" },
  "team.t1.name": { EN: "Mr. Daisuke Tanji", JP: "丹治 大介" },
  "team.t1.role": { EN: "Founder & CEO, Indobox India", JP: "創業者兼CEO、Indobox India" },
  "team.t1.bio": { EN: "A decade bridging Japan and India — founded J-Gate to make the corridor operational.", JP: "10年にわたり日印の架け橋として活動。日印ビジネス回廊を実体化すべくJ-Gateを設立。" },
  "team.t2.name": { EN: "Mr. Viinay Sarikonda", JP: "ヴィイナイ・サリコンダ" },
  "team.t2.role": { EN: "CEO, Genesys Info X · MoU Partner", JP: "CEO、Genesys Info X・MoUパートナー" },
  "team.t2.bio": { EN: "Hyderabad business ecosystem veteran — co-inaugurator of J-Gate.", JP: "ハイデラバードのビジネスエコシステムに精通した実務家 — J-Gate共同開設者。" },
  "team.t3.name": { EN: "Mr. Sujit Jagirdar", JP: "スジット・ジャギルダール" },
  "team.t3.role": { EN: "Technical Advisor · Former CIO, T-Hub", JP: "技術アドバイザー・元CIO、T-Hub" },
  "team.t3.bio": { EN: "Oversaw digital infrastructure at India's largest startup hub.", JP: "インド最大のイノベーション拠点T-Hubにてデジタルインフラ全体を統括。" },
  "team.t4.name": { EN: "Mr. Srinivas Rao Mahankali", JP: "スリニヴァス・ラオ・マハンカリ" },
  "team.t4.role": { EN: "Technical Advisor · Former CEO, T-Hub", JP: "技術アドバイザー・元CEO、T-Hub" },
  "team.t4.bio": { EN: "Led T-Hub through its most critical growth phase.", JP: "T-Hubの最高経営責任者としてスタートアップエコシステムの発展を牽引。" },
  "team.t5.name": { EN: "Sensei Yuki Tanaka", JP: "田中 ゆき" },
  "team.t5.role": { EN: "Lead Japanese Language Sensei", JP: "主任日本語研修講師" },
  "team.t5.bio": { EN: "Indobox orientation & language instructor with decades of India business experience.", JP: "豊富な現地指導経験を持ち、日系企業向け人材の語学・ビジネス習慣研修を担当。" },
  "team.t6.name": { EN: "Sensei Ravi Kumar", JP: "ラビ・クマール" },
  "team.t6.role": { EN: "Cultural Transition Consultant", JP: "異文化適応コンサルタント" },
  "team.t6.bio": { EN: "Bridges Indian engineers into Japanese corporate culture.", JP: "インド人技術者が日本の企業文化へ円滑に適応できるよう個別指導を実施。" },

  // Blogs & Culture — tabbed
  "blogs.eyebrow": { EN: "Blogs & Culture", JP: "ブログ＆カルチャー" },
  "blogs.title": { EN: "Insights & Life at J-Gate", JP: "インサイト＆拠点最新情報" },
  "blogs.subtitle": {
    EN: "Industry insights, career guides, and a glimpse into life inside our workspace.",
    JP: "インドビジネスの最新動向、現地調査レポート、拠点での日常をお届けします。",
  },
  "blogs.tab1": { EN: "Industry Insights", JP: "業界インサイト" },
  "blogs.tab2": { EN: "Life & Culture", JP: "現地カルチャー" },
  "blogs.readmore": { EN: "Read More", JP: "続きを読む" },
  "blogs.b1.tag": { EN: "Career Guide", JP: "採用・定着" },
  "blogs.b1.title": { EN: "Why Indian Engineers Thrive in Japanese Enterprises", JP: "インド人エンジニアが日本企業で活躍し続ける理由" },
  "blogs.b1.excerpt": {
    EN: "Cultural alignment, technical depth, and the bridge that makes the difference. A data-backed look at placement retention.",
    JP: "技術的専門性、相補的な企業風土、そして定着を促す伴走体制。データで見る日印人材連携の実情。",
  },
  "blogs.b2.tag": { EN: "Business Culture", JP: "商習慣・カルチャー" },
  "blogs.b2.title": { EN: "Understanding Indian Business Customs: A Guide", JP: "インドビジネスの商習慣とコミュニケーションの実践ガイド" },
  "blogs.b2.excerpt": {
    EN: "Our certified instructors break down the study path that actually works — from N5 foundations to N2 fluency.",
    JP: "現地での意思決定プロセス、交渉のポイント、すれ違いを防ぐ信頼関係構築ノウハウを徹底解説。",
  },
  "blogs.b3.tag": { EN: "Tech in Tokyo", JP: "東京・IT市場" },
  "blogs.b3.title": { EN: "Tech in Tokyo: What Indian Engineers Need to Know", JP: "日本市場への挑戦：グローバルエンジニアが知るべき日本の職場環境" },
  "blogs.b3.excerpt": {
    EN: "From work culture to tech stacks — a practical guide for Indian engineers preparing for Tokyo placements.",
    JP: "求める技術スタックから働き方の特徴まで、日本企業での活躍を目指す技術者向けの実践的アドバイス。",
  },
  "blogs.gallery.title": { EN: "Inside the J-Gate Workspace", JP: "J-Gate施設のご紹介" },
  "blogs.gallery.subtitle": { EN: "Office, canteen, team celebrations, and candidate workshops — Hyderabad.", JP: "執務室、会議スペース、カフェテリア、交流イベントの模様 — ハイデラバード拠点。" },
  "blogs.g1": { EN: "Main Workspace", JP: "メイン執務スペース" },
  "blogs.g2": { EN: "Dedicated Desks", JP: "専用デスクエリア" },
  "blogs.g3": { EN: "Cafeteria & Lounge", JP: "カフェテリア＆ラウンジ" },
  "blogs.g4": { EN: "Conference Room", JP: "カンファレンスルーム" },
  "blogs.g5": { EN: "Team Celebrations", JP: "コミュニティイベント" },
  "blogs.g6": { EN: "Candidate Workshops", JP: "人材ワークショップ" },
  "blogs.g7": { EN: "Japanese Tea Lounge", JP: "和風ティーラウンジ" },
  "blogs.g8": { EN: "Cultural Events", JP: "文化交流イベント" },

  // Client Success Stories
  "proof.eyebrow": { EN: "Client Success Stories", JP: "実績と信頼" },
  "proof.title": { EN: "Trusted by Companies Across Japan and India", JP: "日印双方の企業から寄せられる確かな信頼" },
  "proof.subtitle": {
    EN: "Corporate partners, candidate outcomes, and performance by the numbers.",
    JP: "確固たるパートナーシップと数値で証明される高い成果。",
  },
  "proof.stats1": { EN: "Placements", JP: "人材紹介実績" },
  "proof.stats2": { EN: "Member Satisfaction", JP: "会員満足度" },
  "proof.stats3": { EN: "Corporate Partners", JP: "提携企業・機関" },
  "proof.stats4": { EN: "Retention", JP: "人材定着率" },

  // Contact — REAL PDF content (Slide 13: Contact Information)
  "contact.eyebrow": { EN: "Contact", JP: "お問い合わせ" },
  "contact.title": { EN: "Connect With J-Gate", JP: "お問い合わせ・個別ご相談" },
  "contact.subtitle": {
    EN: "Contact our on-site team to discuss workspace options, company setup, or business partnerships in India — talk to the J-Gate operations team.",
    JP: "オフィス利用、法人設立、現地IT人材の採用など、インド進出に関するご質問は常駐チームへお気軽にご連絡ください。",
  },
  "contact.tokyo": { EN: "Resident Japan Desk", JP: "現地常駐ジャパンデスク" },
  "contact.india": { EN: "Hyderabad Office", JP: "ハイデラバード拠点" },
  "contact.form.title": { EN: "Direct Inquiry", JP: "お問い合わせフォーム" },
  "contact.form.name": { EN: "Full Name", JP: "お名前" },
  "contact.form.email": { EN: "Email", JP: "メールアドレス" },
  "contact.form.subject": { EN: "Subject", JP: "ご相談件名" },
  "contact.form.message": { EN: "Message", JP: "お問い合わせ内容" },
  "contact.form.submit": { EN: "Send Message", JP: "送信する" },
  "contact.form.success": { EN: "Thank you! We'll respond within 24 hours — in Japanese.", JP: "お問い合わせありがとうございます。24時間以内に日本語担当者よりご返信いたします。" },

  // Pricing — NEW (Slide 9: Membership Fee Plans — Hyderabad)
  "pricing.eyebrow": { EN: "Membership", JP: "メンバーシップ" },
  "pricing.title": {
    EN: "Membership Fee Plans — Hyderabad",
    JP: "ハイデラバード拠点 メンバーシップ料金プラン",
  },
  "pricing.subtitle": {
    EN: "Designed as a cost-effective solution — providing Japanese enterprises with a dedicated workspace and resident advisory in Hyderabad.",
    JP: "日系企業に最適化された戦略的拠点モデル — ハイデラバードでの専用執務環境と日本人常駐サポートを提供。",
  },

  // Brochure Modal
  "brochure.title": { EN: "Download the J-Gate Brochure", JP: "J-Gate公式資料請求・パンフレットダウンロード" },
  "brochure.subtitle": {
    EN: "Get the full overview of our services, track record, and partnership model. Register below to download instantly.",
    JP: "進出支援サービス、施設詳細、費用プラン、実績の最新資料をダウンロードいただけます。",
  },
  "brochure.google": { EN: "Continue with Google", JP: "Googleアカウントで登録" },
  "brochure.divider": { EN: "Or register details manually", JP: "またはフォームから入力" },
  "brochure.name": { EN: "Full Name", JP: "お名前" },
  "brochure.namePh": { EN: "Your full name", JP: "山田 太郎" },
  "brochure.org": { EN: "Organization / University", JP: "貴社名・組織名" },
  "brochure.orgPh": { EN: "Company or university name", JP: "株式会社インフォボックス" },
  "brochure.email": { EN: "Corporate / Work Email", JP: "勤務先メールアドレス" },
  "brochure.emailPh": { EN: "you@company.com", JP: "yamada@company.co.jp" },
  "brochure.phone": { EN: "Contact / Phone Number", JP: "お電話番号" },
  "brochure.phonePh": { EN: "+81 / +91 ...", JP: "03-1234-5678 / +81-..." },
  "brochure.questions": { EN: "Questions / Requirements (Optional)", JP: "ご質問・ご要望（任意）" },
  "brochure.questionsPh": { EN: "Tell us about your goals...", JP: "進出検討時期やご関心のあるサービスをご記入ください" },
  "brochure.consent": {
    EN: "I agree to the Privacy Policy and Terms, and to be contacted by J-Gate.",
    JP: "プライバシーポリシーおよび利用規約に同意します。",
  },
  "brochure.submit": { EN: "Download Brochure", JP: "資料をダウンロードする" },
  "brochure.submitting": { EN: "Processing...", JP: "処理中..." },
  "brochure.success.title": { EN: "Thank you! Download starting...", JP: "ご登録ありがとうございます。ダウンロードを開始します..." },
  "brochure.success.body": {
    EN: "Your brochure download has started. A copy has also been sent to your email.",
    JP: "資料のダウンロードが開始されました。ご入力いただいたメールアドレスにも案内をお送りしました。",
  },
  "brochure.success.downloadAgain": { EN: "Download again", JP: "再度ダウンロード" },
  "brochure.success.close": { EN: "Close", JP: "閉じる" },
  "brochure.error": { EN: "Something went wrong. Please try again.", JP: "送信エラーが発生しました。お手数ですが再度お試しください。" },
  "brochure.errName": { EN: "Name is required", JP: "お名前を入力してください" },
  "brochure.errOrg": { EN: "Organization is required", JP: "会社名・組織名を入力してください" },
  "brochure.errEmail": { EN: "Valid email is required", JP: "有効なメールアドレスを入力してください" },
  "brochure.errPhone": { EN: "Phone number is required", JP: "電話番号を入力してください" },
  "brochure.errConsent": { EN: "Please accept the terms to continue", JP: "規約への同意が必要です" },

  // Footer
  "footer.tagline": {
    EN: "Connecting Japan and India — Talent, Training, Business",
    JP: "日印を繋ぐ共創プラットフォーム — 拠点・高度人材・現地伴走支援",
  },
  "footer.navigate": { EN: "Navigate", JP: "サイトマップ" },
  "footer.network": { EN: "Our Network", JP: "ネットワーク" },
  "footer.contact": { EN: "Contact", JP: "お問い合わせ" },
  "footer.rights": { EN: "All rights reserved.", JP: "All rights reserved." },
  "footer.crafted": { EN: "Japan–India Bilateral Business Corridor", JP: "日印ビジネス・イノベーション連携推進拠点" },
  "footer.privacy": { EN: "Privacy Policy", JP: "プライバシーポリシー" },
  "footer.terms": { EN: "Terms", JP: "利用規約" },
  "footer.bookTour": { EN: "Download Brochure", JP: "資料請求・パンフレット" },

  // Common
  "common.send": { EN: "Send", JP: "送信する" },
  "common.learnMore": { EN: "Learn More", JP: "詳しく見る" },
};

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
  /** Inline bilingual helper — for page-specific content */
  tx: (entry: { EN: string; JP: string }) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "JP" ? "ja" : "en";
    }
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === "EN" ? "JP" : "EN"));
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang]
  );

  const tx = useCallback(
    (entry: { EN: string; JP: string }) => entry[lang],
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t, tx }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      lang: "EN" as Lang,
      setLang: () => {},
      toggle: () => {},
      t: (key: string) => translations[key]?.EN ?? key,
      tx: (entry: { EN: string; JP: string }) => entry.EN,
    };
  }
  return ctx;
}
