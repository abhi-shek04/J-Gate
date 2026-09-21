"use client";

import {
  createContext,
  useCallback,
  useContext,
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
  "hero.eyebrow": { EN: "Japan × India Talent & Business Bridge", JP: "日本×インド 人材・ビジネスの架け橋" },
  "hero.title1": { EN: "Birth of a Dedicated", JP: "Birth of a Dedicated" },
  "hero.title2": { EN: "Working Hub for Japanese Companies", JP: "Working Hub for Japanese Companies" },
  "hero.subtitle": {
    EN: "A dedicated co-working space at Cyber Gateway, Hyderabad for Japanese businesses. Dedicated desks, private cabins, resident Japan Desk support, and full office infrastructure to start operations smoothly in India.",
    JP: "ハイデラバード・サイバーゲートウェイにある日本企業向けのコワーキングスペース。専用デスク、個室キャビン、日本人常駐サポート、オフィス設備を備え、インドでの事業開始を支援します。",
  },
  "hero.jptag": { EN: "「日本企業専用のワーキングハブ誕生」", JP: "「日本企業専用のワーキングハブ誕生」" },
  "hero.entag": { EN: "Birth of a Dedicated Working Hub for Japanese Companies in Hyderabad", JP: "Birth of a Dedicated Working Hub for Japanese Companies in Hyderabad" },
  "hero.cta1": { EN: "Download Brochure", JP: "パンフレットをダウンロード" },
  "hero.cta2": { EN: "Explore Services", JP: "サービスを見る" },
  "hero.badge1": { EN: "Dedicated Japan Desk", JP: "専任ジャパンデスク" },
  "hero.badge2": { EN: "Strategic Hyderabad Base", JP: "戦略的ハイデラバード拠点" },
  "hero.badge3": { EN: "End-to-End India Setup", JP: "エンドツーエンド進出支援" },
  "hero.scroll": { EN: "Discover J-Gate", JP: "J-Gateを知る" },
  "hero.founded": { EN: "Est. June 2026", JP: "2026年6月開設" },
  "hero.location": { EN: "Cyber Gateway, Hyderabad", JP: "Cyber Gateway、ハイデラバード" },
  "hero.operator": { EN: "Operated by Indobox India Pvt. Ltd.", JP: "Indobox India Pvt. Ltd. が運営" },

  // Home page sections
  "home.logos.eyebrow": { EN: "Bilateral Ecosystem", JP: "提携エコシステム" },
  "home.logos.title": { EN: "Our Innovation & Ecosystem Network", JP: "日印イノベーション＆提携エコシステム" },
  "home.logos.subtitle": { EN: "Partner institutions, universities, and enterprise enablers collaborating across the Japan–India corridor.", JP: "日印ビジネス回廊を支える提携インキュベーション施設、大学、パートナー企業。" },
  "home.overview.eyebrow": { EN: "Executive Overview", JP: "エグゼクティブ概要" },
  "home.overview.title": { EN: "Explore the J-Gate Ecosystem", JP: "J-Gateエコシステムを探る" },
  "home.overview.subtitle": { EN: "Each dimension of J-Gate is a dedicated experience. Dive deeper into what matters to you.", JP: "J-Gateの各側面は専用の体験です。あなたにとって重要なものを深く掘り下げてください。" },
  "home.cta.title": { EN: "Experience J-Gate's Premium Workspace", JP: "J-Gateのプレミアムワークスペースを体験する" },
  "home.cta.subtitle": { EN: "Book a tour of our Cyber Gateway facility. See your dedicated desk, meeting rooms, and the Japan Desk in person.", JP: "Cyber Gateway施設のツアーを予約。専用デスク、会議室、ジャパンデスクを実際にご覧ください。" },

  // About — pure corporate identity
  "about.eyebrow": { EN: "About J-Gate", JP: "J-Gateについて" },
  "about.title": { EN: "Operated by Indobox India — a dedicated working hub for Japanese enterprises in Hyderabad.", JP: "Indobox Indiaが運営する、ハイデラバードの日本企業専用ワーキングハブ。" },

  // About — Core Purpose & Vision (Slide 2)
  "about.purpose.eyebrow": { EN: "Core Purpose & Vision", JP: "目的とビジョン" },
  "about.purpose.title": { EN: "From creating opportunities for Indian expansion to developing personnel in charge of India", JP: "インド展開のきっかけ作りから、インド担当者の育成まで" },
  "about.purpose.subtitle": {
    EN: "Three pillars define why J-Gate exists — each a deliberate step toward making the Indo-Japanese corridor operational, end to end.",
    JP: "J-Gateの存在意義を定義する3つの柱 — それぞれが日印回廊をエンドツーエンドで機能させるための意図的な一歩です。",
  },
  "about.pillar1.tag": { EN: "Pillar 01", JP: "柱 01" },
  "about.pillar1.title": { EN: "Opportunity Creation", JP: "きっかけ作り" },
  "about.pillar1.jp": { EN: "きっかけ作り", JP: "きっかけ作り" },
  "about.pillar1.desc": {
    EN: "Providing an environment where local activities can start quickly with minimal assets — so Japanese enterprises can begin their India journey without heavy upfront investment.",
    JP: "最小限の資産で現地活動を迅速に開始できる環境を提供 — 日本企業が大きな初期投資なしにインドへの第一歩を踏み出せるよう支援。",
  },
  "about.pillar2.tag": { EN: "Pillar 02", JP: "柱 02" },
  "about.pillar2.title": { EN: "Talent Development", JP: "人材育成" },
  "about.pillar2.jp": { EN: "人材育成", JP: "人材育成" },
  "about.pillar2.desc": {
    EN: "Nurturing India representatives capable of competing locally through Indobox Academy — equipping your team with the language, business, and cultural fluency needed to win in the Indian market.",
    JP: "Indobox Academyを通じ、現地で競争できるインド担当者を育成 — インド市場で勝つために必要な語学・ビジネス・文化の流暢さをチームに装備。",
  },
  "about.pillar3.tag": { EN: "Pillar 03", JP: "柱 03" },
  "about.pillar3.title": { EN: "Business Collaboration", JP: "ビジネス連携" },
  "about.pillar3.jp": { EN: "ビジネス連携", JP: "ビジネス連携" },
  "about.pillar3.desc": {
    EN: "A dedicated space that accelerates exchange between Japanese and Indian companies — where partnerships, MoUs, and joint ventures are conceived, not just discussed.",
    JP: "日印両国の企業間交流を加速する専用空間 — パートナーシップ、MoU、合弁が議論されるだけでなく生まれる場所。",
  },

  // About — Strategic Location (Slide 3)
  "about.locations.eyebrow": { EN: "Strategic Location", JP: "戦略的ロケーション" },
  "about.locations.title": { EN: "Strategic Location: Hyderabad", JP: "戦略的ロケーション：ハイデラバード" },
  "about.locations.subtitle": {
    EN: "One city, one mission — our main base in India's rising tech capital, where every major Japanese business touchpoint in the corridor comes together.",
    JP: "一つの都市、一つのミッション — 台頭するインドのテック首都にある主拠点。回廊の日本ビジネスの主要接点がすべて集まる場所。",
  },
  "about.hyderabad.tag": { EN: "Main Base", JP: "主拠点" },
  "about.hyderabad.title": { EN: "Hyderabad", JP: "ハイデラバード" },
  "about.hyderabad.status": { EN: "Launched June 2026", JP: "2026年6月開設" },
  "about.hyderabad.nick": { EN: "The 'Next Bangalore'", JP: "「ネクスト・バンガロール」" },
  "about.hyderabad.desc": {
    EN: "Known as the 'Next Bangalore,' with heavy concentration of IT, pharmaceutical, and biotechnology industries. Advanced infrastructure, numerous R&D hubs of global enterprises. The optimal business ecosystem for fostering innovation.",
    JP: "「ネクスト・バンガロール」として知られ、IT・製薬・バイオテクノロジー産業が集積。先進的なインフラと、グローバル企業のR&D拠点が多数立地。イノベーションを育む最適なビジネス生態系。",
  },
  "about.hyderabad.f1": { EN: "IT / Pharma / Biotech cluster", JP: "IT・製薬・バイオテク集積" },
  "about.hyderabad.f2": { EN: "Global R&D hub density", JP: "グローバルR&D拠点密度" },
  "about.hyderabad.f3": { EN: "Advanced urban infrastructure", JP: "先進的都市インフラ" },

  // About — story / mission / vision / values (existing, retained)
  "about.story.title": { EN: "Our Story", JP: "私たちのストーリー" },
  "about.story.body": {
    EN: "J-Gate was founded to bridge two of the world's most complementary technology ecosystems — India's deep engineering talent and Japan's enterprise precision. We exist to make that bridge operational, placing top-tier engineers and professionals into Japanese enterprises where they thrive.",
    JP: "J-Gateは、インドの深いエンジニアリング人材プールと日本の企業精度という、世界で最も補完的な技術生態系の二つを橋渡しするために設立されました。私たちはその橋を実現し、トップクラスのエンジニアとプロフェッショナルを日本企業に配置し、活躍させます。",
  },
  "about.mission.title": { EN: "Our Mission", JP: "ミッション" },
  "about.mission.body": {
    EN: "Providing Japanese companies with a dedicated working hub, Japan Desk consultation, and end-to-end business support — from first curiosity to corporate entity establishment.",
    JP: "トップクラスのエンジニアとプロフェッショナルに、採用・語学習得・文化の流暢さを通じて、日本の代表的企業へのシームレスなキャリア統合を支援する。",
  },
  "about.vision.title": { EN: "Our Vision", JP: "ビジョン" },
  "about.vision.body": {
    EN: "To become the definitive Indo-Japanese talent pipeline and strategic bridge — the first name Japanese enterprises call when they need world-class technical talent.",
    JP: "決定的な日印人材パイプラインと戦略的架け橋になること — 日本企業が世界クラスの技術人材を必要とする時に最初に思い浮かべる名前になる。",
  },
  "about.values.title": { EN: "Our Core Values", JP: "コアバリュー" },
  "about.values.subtitle": { EN: "The principles that guide every placement, every training, every partnership.", JP: "すべての紹介、研修、パートナーシップを導く原則。" },
  "about.v1": { EN: "Integrity", JP: "誠実さ" },
  "about.v1.desc": { EN: "Transparent, honest, long-term relationships — never transactional.", JP: "透明で誠実な長期的関係 — 決して取引的ではない。" },
  "about.v2": { EN: "Cultural Fluency", JP: "文化的流暢さ" },
  "about.v2.desc": { EN: "Deep mastery of both Japanese and Indian business cultures.", JP: "日本とインドの両ビジネス文化の深い理解。" },
  "about.v3": { EN: "Technical Excellence", JP: "技術的卓越" },
  "about.v3.desc": { EN: "Rigorous screening — only the top percentile of technical talent.", JP: "厳格なスクリーニング — トップパーセンタイルの技術人材のみ。" },
  "about.v4": { EN: "Long-Term Partnership", JP: "長期パートナーシップ" },
  "about.v4.desc": { EN: "We succeed only when our placements and partners succeed.", JP: "紹介とパートナーが成功して初めて私たちも成功する。" },

  // Why J-Gate — 4 differentiators
  "why.eyebrow": { EN: "Why J-Gate", JP: "J-Gateの強み" },
  "why.title": { EN: "The Strategic Investment Advantage", JP: "戦略的投資としての優位性" },
  "why.subtitle": {
    EN: "What makes J-Gate the trusted bridge between Indian technical talent and Japanese enterprises.",
    JP: "J-Gateがインドの技術人材と日本企業の信頼される架け橋である理由。",
  },

  // Why — Competitive Comparison Table (Slide 10)
  "why.compare.eyebrow": { EN: "Side-by-Side Comparison", JP: "比較一覧表" },
  "why.compare.title": { EN: "J-Gate vs The Alternatives", JP: "J-Gateと他の選択肢の比較" },
  "why.compare.subtitle": {
    EN: "A direct comparison across the four representative paths Japanese enterprises consider when entering India — cost, support, network, and overall value.",
    JP: "日本企業がインド進出で検討する4つの代表選択肢を、コスト・サポート・ネットワーク・総合価値で直接比較。",
  },
  "why.compare.col.cap": { EN: "Comparison Item", JP: "比較項目" },
  "why.compare.col.jgate": { EN: "J-Gate", JP: "J-Gate" },
  "why.compare.col.consult": { EN: "Major Japanese Consulting Firms", JP: "日本大手コンサル" },
  "why.compare.col.cowork": { EN: "Local Coworking", JP: "現地コワーキング" },
  "why.compare.col.public": { EN: "Public Support Orgs", JP: "公的支援機関" },
  "why.compare.note": {
    EN: "J-Gate is the only option that combines a physical base, resident Japanese expertise, hands-on operational support, and direct hiring — at a cost-justifiable investment level.",
    JP: "J-Gateは、物理拠点・常駐日本語専門家・実務サポート・直接採用支援をすべて兼ね備え、かつ投資対効果が妥当な唯一の選択肢です。",
  },
  "why.row1.label": { EN: "Target Audience", JP: "対象顧客" },
  "why.row1.jgate": { EN: "Mid-size, SMEs, Municipalities, Startups, Regional Banks", JP: "中堅・中小・自治体・スタートアップ・地方銀" },
  "why.row1.consult": { EN: "Large Enterprises", JP: "大企業" },
  "why.row1.cowork": { EN: "Local Companies, Freelancers", JP: "現地企業・フリーランス" },
  "why.row1.public": { EN: "General / All", JP: "一般・全対象" },
  "why.row2.label": { EN: "Monthly Cost", JP: "月額費用" },
  "why.row2.jgate": { EN: "From 50,000 INR", JP: "50,000 INR〜" },
  "why.row2.consult": { EN: "¥500,000 – ¥1,000,000", JP: "50万〜100万円" },
  "why.row2.cowork": { EN: "10,000 – 60,000 INR", JP: "10,000〜60,000 INR" },
  "why.row2.public": { EN: "Free – Low Cost", JP: "無料〜低額" },
  "why.row3.label": { EN: "Physical Base", JP: "物理拠点" },
  "why.row3.jgate": { EN: "Yes", JP: "あり" },
  "why.row3.consult": { EN: "None (Separate contract needed)", JP: "なし（別契約必要）" },
  "why.row3.cowork": { EN: "Yes", JP: "あり" },
  "why.row3.public": { EN: "None (Temporary usage only)", JP: "なし（一時利用のみ）" },
  "why.row4.label": { EN: "Resident Japanese Expert", JP: "常駐日本語専門家" },
  "why.row4.jgate": { EN: "Yes (Japan Desk)", JP: "あり（ジャパンデスク）" },
  "why.row4.consult": { EN: "None (Dispatched per occasion)", JP: "なし（都度派遣）" },
  "why.row4.cowork": { EN: "None", JP: "なし" },
  "why.row4.public": { EN: "None (Local staff only)", JP: "なし（現地スタッフのみ）" },
  "why.row5.label": { EN: "Hands-on Support", JP: "実務サポート" },
  "why.row5.jgate": { EN: "Yes (Covers actual operations)", JP: "あり（実務まで対応）" },
  "why.row5.consult": { EN: "Yes (Mainly advisory)", JP: "あり（主に助言）" },
  "why.row5.cowork": { EN: "None", JP: "なし" },
  "why.row5.public": { EN: "Yes (Information/advice only)", JP: "あり（情報・助言のみ）" },
  "why.row6.label": { EN: "Japanese Language Support", JP: "日本語サポート" },
  "why.row6.jgate": { EN: "Fully Supported", JP: "完全対応" },
  "why.row6.consult": { EN: "Supported (High cost)", JP: "対応（高コスト）" },
  "why.row6.cowork": { EN: "None", JP: "なし" },
  "why.row6.public": { EN: "Supported (Limited)", JP: "対応（限定）" },
  "why.row7.label": { EN: "Hiring Support", JP: "採用支援" },
  "why.row7.jgate": { EN: "Yes (IndiGate Partnership)", JP: "あり（IndiGate連携）" },
  "why.row7.consult": { EN: "Yes (Referral only, expensive)", JP: "あり（紹介のみ・高額）" },
  "why.row7.cowork": { EN: "None", JP: "なし" },
  "why.row7.public": { EN: "None", JP: "なし" },
  "why.row8.label": { EN: "Network", JP: "ネットワーク" },
  "why.row8.jgate": { EN: "Close ties with T-Hub and local ecosystem", JP: "T-Hub・現地エコシステムと緊密" },
  "why.row8.consult": { EN: "Government agencies, large firms", JP: "政府機関・大企業" },
  "why.row8.cowork": { EN: "General users only", JP: "一般利用者のみ" },
  "why.row8.public": { EN: "Government agencies, large firms", JP: "政府機関・大企業" },
  "why.row9.label": { EN: "Cost Assessment", JP: "費用評価" },
  "why.row9.jgate": { EN: "◎ Optimal as a strategic investment", JP: "◎ 戦略投資として最適" },
  "why.row9.consult": { EN: "△ Very expensive", JP: "△ 非常に高額" },
  "why.row9.cowork": { EN: "Cheap, but no business support", JP: "安いがビジネス支援なし" },
  "why.row9.public": { EN: "◎ Extremely inexpensive", JP: "◎ 極めて低額" },

  // Why — 7 Core Value Pillars (Slide 11)
  "why.pillars.eyebrow": { EN: "7 Core Value Pillars", JP: "7つのコアバリュー柱" },
  "why.pillars.title": { EN: "Value Proposition of J-Gate", JP: "J-Gateメンバーシップの提供価値" },
  "why.pillars.subtitle": {
    EN: "7 Pillars Accelerating Japanese Business in India — the complete membership value that turns a workspace into a strategic launchpad.",
    JP: "日本企業のインドビジネスを加速する7つの柱 — ワークスペースを戦略的拠点へと変える完全なメンバーシップ価値。",
  },
  "why.p1.title": { EN: "Workspace Access", JP: "ワークスペースアクセス" },
  "why.p1.desc": { EN: "Dedicated desk space for 2-4 persons per company — your personal workspace in a shared professional environment.", JP: "1社あたり2〜4名の専用デスクスペース — 共有プロフェッショナル環境におけるあなただけのワークスペース。" },
  "why.p2.title": { EN: "Infrastructure", JP: "インフラ" },
  "why.p2.desc": { EN: "Cabinets, high-speed Wi-Fi, meeting rooms, and cafeteria spaces — all standard, all included.", JP: "キャビネット・高速Wi-Fi・会議室・カフェテリア空間 — すべて標準、すべて含まれる。" },
  "why.p3.title": { EN: "Japan Desk", JP: "ジャパンデスク" },
  "why.p3.desc": { EN: "A Japanese-speaking expert available daily at the workspace — legal, HR, cultural, and operational questions answered in Japanese.", JP: "ワークスペースに毎日常駐する日本語対応の専門家 — 法務・人事・文化・運営の質問を日本語で回答。" },
  "why.p4.title": { EN: "Company Setup", JP: "設立支援" },
  "why.p4.desc": { EN: "Complete step-by-step guidance from workspace registration to full corporate entity establishment.", JP: "ワークスペース登録から完全な法人設立までのステップバイステップガイダンス。" },
  "why.p5.title": { EN: "Networking Events", JP: "ネットワーキング" },
  "why.p5.desc": { EN: "Direct participation in workspace networking events with business authorities and local ecosystem experts.", JP: "ビジネス当局者や現地エコシステム専門家とのワークスペースネットワーキングイベントに直接参加。" },
  "why.p6.title": { EN: "India Study Sessions", JP: "インド勉強会" },
  "why.p6.desc": { EN: "Ongoing India market seminars held at the workspace — not one-off, but continuous learning.", JP: "ワークスペースで開催される継続的なインド市場セミナー — 単発ではなく継続的学習。" },
  "why.p7.title": { EN: "Local Services", JP: "現地サービス" },
  "why.p7.desc": { EN: "Payroll, outsourcing, interpretation, and meal delivery (Italian, Chinese, Japanese-style) — arranged through the workspace.", JP: "給与計算・アウトソーシング・通訳・食事手配（イタリアン・中華・和食） — ワークスペース経由で手配。" },

  // Services — REAL PDF content (Slide 4: Indobox Comprehensive Expansion Support & Talent Development)
  "services.eyebrow": { EN: "Services", JP: "サービス" },
  "services.title": {
    EN: "Indobox's Unique Comprehensive Market Entry Support & Talent Development — Hyderabad's dedicated end-to-end platform for Japanese enterprises.",
    JP: "Indoboxならではの包括的進出支援・人材育成 — 日本企業のためのハイデラバード dedicated エンドツーエンドプラットフォーム。",
  },
  "services.subtitle": {
    EN: "From corporate establishment to practical daily operations — a single, integrated operating system for Japan-India market entry.",
    JP: "法人設立から日常実務まで — 日印市場進出のための単一の統合オペレーティングシステム。",
  },
  "services.s1.title": { EN: "Executive & Engineering Recruitment", JP: "エグゼクティブ&エンジニアリング採用" },
  "services.s1.short": { EN: "Direct hiring for Japanese tech enterprises.", JP: "日本のテック企業向け直接採用。" },
  "services.s1.desc": {
    EN: "Direct hiring channels into Japanese tech enterprises — from software engineers to C-suite executives. Rigorous technical screening, cultural-fit assessment, and bilingual interview facilitation. We place talent that stays.",
    JP: "日本のテック企業への直接採用チャネル — ソフトウェアエンジニアからC-suiteまで。厳格な技術スクリーニング、文化適合性評価、バイリンガル面接支援。定着する人材を紹介します。",
  },
  "services.s2.title": { EN: "Corporate Bridging & Consulting", JP: "企業橋渡し&コンサルティング" },
  "services.s2.short": { EN: "Cross-border business & project management.", JP: "越境ビジネス&プロジェクト管理。" },
  "services.s2.desc": {
    EN: "Cross-border business communication and technical project management. We bridge Japanese enterprises with Indian technology partners — handling MoU facilitation, partner vetting, and ongoing liaison.",
    JP: "越境ビジネスコミュニケーションと技術プロジェクト管理。日本企業とインドの技術パートナーを橋渡し — MoU調整、パートナー審査、継続的な連絡を担当。",
  },
  "services.s3.title": { EN: "Specialized Language & Business Training", JP: "専門語学&ビジネス研修" },
  "services.s3.short": { EN: "Interpretation and back-office support by Japanese-speaking staff.", JP: "日本語スタッフによる通訳・バックオフィス支援。" },
  "services.s3.desc": {
    EN: "Bookkeeping, accounting, vendor coordination, and interpretation support by Japanese-speaking staff — no language friction in your daily operations.",
    JP: "記帳、会計、ベンダー調整、通訳支援を日本語スタッフが担当 — 日常業務に言語の壁はありません。",
  },
  "services.s4.title": { EN: "Post-Offer & Relocation Support", JP: "オファー後&再配置サポート" },
  "services.s4.short": { EN: "End-to-end support from setup to daily operations.", JP: "設立から日常運営までの総合サポート。" },
  "services.s4.desc": {
    EN: "Consistent support from corporate establishment through daily operations. One accountable partner. Zero hand-off gaps.",
    JP: "法人設立から日常運営まで一貫したサポート。一人の責任あるパートナー。受け渡しの隙間なし。",
  },

  // Team — REAL PDF content (Slide 12: Board of Advisory & Ecosystem Partners + Slide 13: Operations Team)
  "team.eyebrow": { EN: "Team", JP: "チーム" },
  "team.title": { EN: "The Minds Behind J-Gate", JP: "J-Gateを支える人々" },
  "team.subtitle": {
    EN: "Unlocking new possibilities for your business through collaboration with India.",
    JP: "インドとの連携で、貴社のビジネスに新たな可能性を。",
  },
  "team.cat1": { EN: "Executive Leadership", JP: "経営陣" },
  "team.cat2": { EN: "Technical Advisors", JP: "技術アドバイザー" },
  "team.cat3": { EN: "Language & Cultural Mentors", JP: "語学&文化メンター" },
  "team.t1.name": { EN: "Mr. Daisuke Tanji", JP: "ダンジ・ダイスケ" },
  "team.t1.role": { EN: "Founder & CEO, Indobox India", JP: "創業者兼CEO、Indobox India" },
  "team.t1.bio": { EN: "A decade bridging Japan and India — founded J-Gate to make the corridor operational.", JP: "日印を橋渡しする10年 — 回廊を実現するためJ-Gateを創業。" },
  "team.t2.name": { EN: "Mr. Viinay Sarikonda", JP: "ヴィイナイ・サリコンダ" },
  "team.t2.role": { EN: "CEO, Genesys Info X · MoU Partner", JP: "CEO、Genesys Info X・MoUパートナー" },
  "team.t2.bio": { EN: "Hyderabad business ecosystem veteran — co-inaugurator of J-Gate.", JP: "ハイデラバードビジネス生態系のベテラン — J-Gate共同開設者。" },
  "team.t3.name": { EN: "Mr. Sujit Jagirdar", JP: "スジット・ジャギルダール" },
  "team.t3.role": { EN: "Technical Advisor · Former CIO, T-Hub", JP: "技術アドバイザー・元CIO、T-Hub" },
  "team.t3.bio": { EN: "Oversaw digital infrastructure at India's largest startup hub.", JP: "インド最大のスタートアップハブでデジタルインフラを統括。" },
  "team.t4.name": { EN: "Mr. Srinivas Rao Mahankali", JP: "スリニヴァス・ラオ・マハンカリ" },
  "team.t4.role": { EN: "Technical Advisor · Former CEO, T-Hub", JP: "技術アドバイザー・元CEO、T-Hub" },
  "team.t4.bio": { EN: "Led T-Hub through its most critical growth phase.", JP: "T-Hubの最も重要な成長期を主導。" },
  "team.t5.name": { EN: "Sensei Yuki Tanaka", JP: "田中ゆき先生" },
  "team.t5.role": { EN: "Lead Japanese Language Sensei", JP: "主任日本語講師" },
  "team.t5.bio": { EN: "Indobox Academy lecturer with decades of India business experience.", JP: "インドビジネスの豊富な経験を持つIndobox Academy講師。" },
  "team.t6.name": { EN: "Sensei Ravi Kumar", JP: "ラビ・クマール先生" },
  "team.t6.role": { EN: "Cultural Transition Consultant", JP: "文化移行コンサルタント" },
  "team.t6.bio": { EN: "Bridges Indian engineers into Japanese corporate culture.", JP: "インド人エンジニアを日本の企業文化へ橋渡し。" },

  // Blogs & Culture — tabbed
  "blogs.eyebrow": { EN: "Blogs & Culture", JP: "ブログ&カルチャー" },
  "blogs.title": { EN: "Insights & Life at J-Gate", JP: "インサイト&J-Gateの日常" },
  "blogs.subtitle": {
    EN: "Industry insights, career guides, and a glimpse into life inside our workspace.",
    JP: "業界インサイト、キャリアガイド、ワークスペースの日常を垣間見る。",
  },
  "blogs.tab1": { EN: "Industry Insights", JP: "業界インサイト" },
  "blogs.tab2": { EN: "Life & Culture", JP: "ライフ&カルチャー" },
  "blogs.readmore": { EN: "Read More", JP: "続きを読む" },
  "blogs.b1.tag": { EN: "Career Guide", JP: "キャリアガイド" },
  "blogs.b1.title": { EN: "Why Indian Engineers Thrive in Japanese Enterprises", JP: "インド人エンジニアが日本企業で活躍する理由" },
  "blogs.b1.excerpt": {
    EN: "Cultural alignment, technical depth, and the bridge that makes the difference. A data-backed look at placement retention.",
    JP: "文化的適合、技術の深さ、そして違いを生む架け橋。定着率をデータで検証。",
  },
  "blogs.b2.tag": { EN: "Business Culture", JP: "ビジネス文化" },
  "blogs.b2.title": { EN: "Understanding Indian Business Customs: A Guide", JP: "インドビジネス習慣の理解：ガイド" },
  "blogs.b2.excerpt": {
    EN: "Our certified instructors break down the study path that actually works — from N5 foundations to N2 fluency.",
    JP: "認定講師が実際に機能する学習パスを解説 — N5の基礎からN2の流暢さまで。",
  },
  "blogs.b3.tag": { EN: "Tech in Tokyo", JP: "東京のテック" },
  "blogs.b3.title": { EN: "Tech in Tokyo: What Indian Engineers Need to Know", JP: "東京のテック：インド人エンジニアが知るべきこと" },
  "blogs.b3.excerpt": {
    EN: "From work culture to tech stacks — a practical guide for Indian engineers preparing for Tokyo placements.",
    JP: "仕事の文化から技術スタックまで — 東京配置に向けるインド人エンジニアのための実践ガイド。",
  },
  "blogs.gallery.title": { EN: "Inside the J-Gate Workspace", JP: "J-Gateワークスペースの内側" },
  "blogs.gallery.subtitle": { EN: "Office, canteen, team celebrations, and candidate workshops — Hyderabad.", JP: "オフィス、食堂、チームイベント、候補者ワークショップ — ハイデラバード。" },
  "blogs.g1": { EN: "Main Workspace", JP: "メインワークスペース" },
  "blogs.g2": { EN: "Dedicated Desks", JP: "専用デスク" },
  "blogs.g3": { EN: "Canteen & Lounge", JP: "食堂&ラウンジ" },
  "blogs.g4": { EN: "Conference Room", JP: "会議室" },
  "blogs.g5": { EN: "Team Celebrations", JP: "チームイベント" },
  "blogs.g6": { EN: "Candidate Workshops", JP: "候補者ワークショップ" },
  "blogs.g7": { EN: "Japanese Tea Lounge", JP: "日本茶ラウンジ" },
  "blogs.g8": { EN: "Cultural Events", JP: "文化イベント" },

  // Social Proof
  "proof.eyebrow": { EN: "Social Proof", JP: "ソーシャルプルーフ" },
  "proof.title": { EN: "Trusted Across the Corridor", JP: "回廊全体で信頼される" },
  "proof.subtitle": {
    EN: "Corporate partners, candidate outcomes, and the numbers that define our track record.",
    JP: "企業パートナー、候補者の成果、実績を定義する数字。",
  },
  "proof.stats1": { EN: "Placements", JP: "紹介実績" },
  "proof.stats2": { EN: "Member Satisfaction", JP: "会員満足度" },
  "proof.stats3": { EN: "Corporate Partners", JP: "企業パートナー" },
  "proof.stats4": { EN: "Retention", JP: "定着率" },

  // Contact — REAL PDF content (Slide 13: Contact Information)
  "contact.eyebrow": { EN: "Contact", JP: "お問い合わせ" },
  "contact.title": { EN: "Connect With J-Gate", JP: "J-Gateに繋がる" },
  "contact.subtitle": {
    EN: "Unlocking new possibilities for your business through collaboration with India — talk to the J-Gate operations team.",
    JP: "インドとの連携で、貴社のビジネスに新たな可能性を — J-Gate運営チームにご相談ください。",
  },
  "contact.tokyo": { EN: "Tokyo Office", JP: "東京オフィス" },
  "contact.india": { EN: "Hyderabad Office", JP: "ハイデラバードオフィス" },
  "contact.form.title": { EN: "Direct Inquiry", JP: "直接お問い合わせ" },
  "contact.form.name": { EN: "Full Name", JP: "お名前" },
  "contact.form.email": { EN: "Email", JP: "メール" },
  "contact.form.subject": { EN: "Subject", JP: "件名" },
  "contact.form.message": { EN: "Message", JP: "メッセージ" },
  "contact.form.submit": { EN: "Send Message", JP: "送信" },
  "contact.form.success": { EN: "Thank you! We'll respond within 24 hours — in Japanese.", JP: "ありがとうございます！24時間以内に日本語でご返信します。" },

  // Pricing — NEW (Slide 9: Membership Fee Plans — Hyderabad)
  "pricing.eyebrow": { EN: "Membership", JP: "メンバーシップ" },
  "pricing.title": {
    EN: "Membership Fee Plans — Hyderabad",
    JP: "「[ハイデラバード] メンバーシップ料金プラン」",
  },
  "pricing.subtitle": {
    EN: "Designed as a high cost-performance strategic investment — replacing typical India expansion costs of ¥15M–¥20M annually per expat.",
    JP: "高い費用対効果の戦略的投資として設計 — 年間¥15M〜¥20Mかかる典型的な駐在員コストを代替。",
  },

  // Brochure Modal
  "brochure.title": { EN: "Download the J-Gate Brochure", JP: "J-Gateパンフレットをダウンロード" },
  "brochure.subtitle": {
    EN: "Get the full overview of our services, track record, and partnership model. Register below to download instantly.",
    JP: "サービス、実績、パートナーシップモデルの完全な概要をご覧ください。下記登録で即時ダウンロード。",
  },
  "brochure.google": { EN: "Continue with Google", JP: "Googleで続行" },
  "brochure.divider": { EN: "Or register details manually", JP: "または手動で登録" },
  "brochure.name": { EN: "Full Name", JP: "お名前" },
  "brochure.namePh": { EN: "Your full name", JP: "お名前" },
  "brochure.org": { EN: "Organization / University", JP: "組織・大学名" },
  "brochure.orgPh": { EN: "Company or university name", JP: "企業名または大学名" },
  "brochure.email": { EN: "Corporate / Work Email", JP: "法人・勤務先メール" },
  "brochure.emailPh": { EN: "you@company.com", JP: "you@company.com" },
  "brochure.phone": { EN: "Contact / Phone Number", JP: "電話番号" },
  "brochure.phonePh": { EN: "+81 / +91 ...", JP: "+81 / +91 ..." },
  "brochure.questions": { EN: "Questions / Requirements (Optional)", JP: "ご質問・ご要望（任意）" },
  "brochure.questionsPh": { EN: "Tell us about your goals...", JP: "目標について教えてください..." },
  "brochure.consent": {
    EN: "I agree to the Privacy Policy and Terms, and to be contacted by J-Gate.",
    JP: "プライバシーポリシーと利用規約に同意し、J-Gateからの連絡を受け取ります。",
  },
  "brochure.submit": { EN: "Download Brochure", JP: "パンフレットをダウンロード" },
  "brochure.submitting": { EN: "Processing...", JP: "処理中..." },
  "brochure.success.title": { EN: "Thank you! Download starting...", JP: "ありがとうございます！ダウンロードを開始します..." },
  "brochure.success.body": {
    EN: "Your brochure download has started. A copy has also been sent to your email.",
    JP: "パンフレットのダウンロードが開始されました。メールにもコピーが送信されました。",
  },
  "brochure.success.downloadAgain": { EN: "Download again", JP: "再度ダウンロード" },
  "brochure.success.close": { EN: "Close", JP: "閉じる" },
  "brochure.error": { EN: "Something went wrong. Please try again.", JP: "エラーが発生しました。再度お試しください。" },
  "brochure.errName": { EN: "Name is required", JP: "お名前は必須です" },
  "brochure.errOrg": { EN: "Organization is required", JP: "組織名は必須です" },
  "brochure.errEmail": { EN: "Valid email is required", JP: "有効なメールアドレスが必要です" },
  "brochure.errPhone": { EN: "Phone number is required", JP: "電話番号は必須です" },
  "brochure.errConsent": { EN: "Please accept the terms to continue", JP: "続行には規約への同意が必要です" },

  // Footer
  "footer.tagline": {
    EN: "Bridging global and Indian talent with Japan's enterprise opportunities.",
    JP: "グローバルおよびインドの人材と日本の企業機会を繋ぐ。",
  },
  "footer.navigate": { EN: "Navigate", JP: "ナビゲート" },
  "footer.network": { EN: "Our Network", JP: "ネットワーク" },
  "footer.contact": { EN: "Contact", JP: "お問い合わせ" },
  "footer.rights": { EN: "All rights reserved.", JP: "All rights reserved." },
  "footer.crafted": { EN: "Japan–India Bilateral Business Corridor", JP: "日印ビジネス・イノベーション連携推進拠点" },
  "footer.privacy": { EN: "Privacy Policy", JP: "プライバシーポリシー" },
  "footer.terms": { EN: "Terms", JP: "利用規約" },
  "footer.bookTour": { EN: "Download Brochure", JP: "パンフレットダウンロード" },

  // Common
  "common.send": { EN: "Send", JP: "送信" },
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
