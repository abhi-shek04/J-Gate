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
  "nav.about": { EN: "About", JP: "私たちについて" },
  "nav.why": { EN: "Why J-Gate", JP: "J-Gateの強み" },
  "nav.services": { EN: "Services", JP: "サービス" },
  "nav.team": { EN: "Team", JP: "チーム" },
  "nav.blogs": { EN: "Blogs & Culture", JP: "ブログ&カルチャー" },
  "nav.contact": { EN: "Contact", JP: "お問い合わせ" },
  "nav.brochure": { EN: "Download Brochure", JP: "パンフレットダウンロード" },

  // Hero
  "hero.eyebrow": { EN: "Japan × India Talent & Business Bridge", JP: "日本×インド 人材・ビジネスの架け橋" },
  "hero.title1": { EN: "Where Japan Meets", JP: "日本とインドが出会う場所" },
  "hero.title2": { EN: "Global Opportunity.", JP: "グローバルな機会へ。" },
  "hero.subtitle": {
    EN: "J-Gate bridges global and Indian talent with enterprise opportunities in Japan — through recruitment, language training, and bilateral business consulting.",
    JP: "J-Gateは、グローバルおよびインドの人材と日本の企業機会を、採用・語学研修・両国間ビジネスコンサルティングで繋ぎます。",
  },
  "hero.jptag": { EN: "日本企業向け専用ワーキングスペース & 人材橋渡し", JP: "日本企業向け専用ワーキングスペース & 人材橋渡し" },
  "hero.entag": { EN: "A New Horizon for India-Japan Business Collaboration", JP: "A New Horizon for India-Japan Business Collaboration" },
  "hero.cta1": { EN: "Download Brochure", JP: "パンフレットをダウンロード" },
  "hero.cta2": { EN: "Explore Services", JP: "サービスを見る" },
  "hero.badge1": { EN: "100+ Partner Companies", JP: "100以上のパートナー企業" },
  "hero.badge2": { EN: "Bilingual Tech Talent Pool", JP: "バイリンガル技術人材プール" },
  "hero.badge3": { EN: "JLPT / NAT Mastery Track", JP: "JLPT・NATマスタリートラック" },
  "hero.scroll": { EN: "Discover J-Gate", JP: "J-Gateを知る" },

  // About — pure corporate identity
  "about.eyebrow": { EN: "About J-Gate", JP: "J-Gateについて" },
  "about.title": { EN: "The Indo-Japanese Talent Bridge", JP: "日印人材の架け橋" },
  "about.story.title": { EN: "Our Story", JP: "私たちのストーリー" },
  "about.story.body": {
    EN: "J-Gate was founded to bridge two of the world's most complementary technology ecosystems — India's deep engineering talent pool and Japan's enterprise precision. We exist to make that bridge operational, placing top-tier engineers and professionals into Japanese enterprises where they thrive.",
    JP: "J-Gateは、インドの深いエンジニアリング人材プールと日本の企業精度という、世界で最も補完的な技術生態系の二つを橋渡しするために設立されました。私たちはその橋を実現し、トップクラスのエンジニアとプロフェッショナルを日本企業に配置し、活躍させます。",
  },
  "about.mission.title": { EN: "Our Mission", JP: "ミッション" },
  "about.mission.body": {
    EN: "Empowering top-tier engineers and professionals with seamless career integration into Japan's leading enterprises — through recruitment, language mastery, and cultural fluency.",
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
  "why.title": { EN: "Four Pillars of the J-Gate Advantage", JP: "J-Gateアドバンテージの4つの柱" },
  "why.subtitle": {
    EN: "What makes J-Gate the trusted bridge between Indian technical talent and Japanese enterprises.",
    JP: "J-Gateがインドの技術人材と日本企業の信頼される架け橋である理由。",
  },
  "why.p1.title": { EN: "Bilingual & Bicultural Fluency", JP: "バイリンガル&バイカルチュラル流暢さ" },
  "why.p1.desc": {
    EN: "Native business Japanese mastery combined with deep technical acumen. Our team navigates both languages and both corporate cultures — so your placements land ready to contribute from Day 1.",
    JP: "ネイティブなビジネス日本語の習得と深い技術的洞察力の融合。私たちのチームは両方の言語と企業文化を航海し、紹介した人材が1日目から貢献できるようにします。",
  },
  "why.p2.title": { EN: "End-to-End Onboarding", JP: "エンドツーエンドオンボーディング" },
  "why.p2.desc": {
    EN: "Pre-departure training, visa facilitation, cultural orientation, and corporate settling — we handle the entire journey so candidates and companies focus only on the work.",
    JP: "出発前研修、ビザ支援、文化オリエンテーション、企業定着 — 全行程を担当し、候補者と企業は仕事に集中できます。",
  },
  "why.p3.title": { EN: "Vetted Technical Talent", JP: "審査済み技術人材" },
  "why.p3.desc": {
    EN: "Rigorous screening across CS, AI/ML, and core engineering tracks. Only the top percentile clears our evaluation — Japanese enterprises receive pre-qualified, production-ready engineers.",
    JP: "CS、AI/ML、コアエンジニアリング分野での厳格なスクリーニング。トップパーセンタイルのみが評価を通過 — 日本企業は事前認定された即戦力のエンジニアを受け取ります。",
  },
  "why.p4.title": { EN: "Direct Enterprise Network", JP: "直接企業ネットワーク" },
  "why.p4.desc": {
    EN: "Strong relationships with Fortune 500 Japanese firms and fast-scaling tech giants. Direct introductions, not job-board applications — your candidates meet decision-makers.",
    JP: "Fortune 500日本企業と急成長テック giantsとの強固な関係。求人掲示板ではなく直接紹介 — 候補者が意思決定者に会います。",
  },

  // Services — 4 verticals
  "services.eyebrow": { EN: "Our Services", JP: "サービス" },
  "services.title": { EN: "Four Pathways to Japan-India Success", JP: "日印成功への4つの道" },
  "services.subtitle": {
    EN: "End-to-end solutions spanning recruitment, consulting, training, and relocation — each designed for the Japan-India corridor.",
    JP: "採用・コンサルティング・研修・再配置を網羅するエンドツーエンドソリューション — それぞれが日印回廊のために設計。",
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
  "services.s3.short": { EN: "Intensive JLPT/NAT coaching for engineers.", JP: "エンジニア向け集中的JLPT/NATコーチング。" },
  "services.s3.desc": {
    EN: "Intensive JLPT/NAT language coaching tailored specifically for engineers. Corporate group training, individual coaching, business Japanese modules, and cultural etiquette — with measurable pass rates and on-the-job readiness.",
    JP: "エンジニア専用に設計された集中的JLPT/NAT語学コーチング。企業向け団体研修、個人コーチング、ビジネス日本語モジュール、文化エチケット — 測定可能な合格率と実務即戦力付き。",
  },
  "services.s4.title": { EN: "Post-Offer & Relocation Support", JP: "オファー後&再配置サポート" },
  "services.s4.short": { EN: "Visa, relocation, and housing transition.", JP: "ビザ・再配置・住居移行。" },
  "services.s4.desc": {
    EN: "Visa processing, relocation guidance, housing transition, and settling-in support. From offer acceptance to first day at the Tokyo office — we handle every logistical detail so your new hire arrives ready.",
    JP: "ビザ処理、再配置ガイダンス、住居移行、定着サポート。オファー承諾から東京オフィスでの初日まで — あらゆる物流的詳細を担当し、新入社員が準備を整えて到着します。",
  },

  // Team
  "team.eyebrow": { EN: "Leadership & Team", JP: "リーダーシップ&チーム" },
  "team.title": { EN: "The Minds Behind the Bridge", JP: "架け橋を作る人々" },
  "team.subtitle": {
    EN: "Executives, technical advisors, and cultural mentors bridging Indo-Japanese business relations.",
    JP: "日印ビジネス関係を橋渡しする経営陣、技術アドバイザー、文化メンター。",
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
  "team.t5.bio": { EN: "JLPT-certified instructor with 15+ years teaching engineers.", JP: "JLPT認定講師、エンジニア指導15年以上。" },
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
  "blogs.b2.tag": { EN: "JLPT Prep", JP: "JLPT対策" },
  "blogs.b2.title": { EN: "JLPT N2 in 18 Months: A Realistic Roadmap", JP: "18ヶ月でJLPT N2：現実的なロードマップ" },
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
  "proof.stats2": { EN: "JLPT Pass Rate", JP: "JLPT合格率" },
  "proof.stats3": { EN: "Corporate Partners", JP: "企業パートナー" },
  "proof.stats4": { EN: "Retention", JP: "定着率" },

  // Contact — Tokyo + India offices + form
  "contact.eyebrow": { EN: "Contact Us", JP: "お問い合わせ" },
  "contact.title": { EN: "Connect With J-Gate", JP: "J-Gateに繋がる" },
  "contact.subtitle": {
    EN: "Offices in Tokyo and Hyderabad. Reach out to start your Japan-India journey.",
    JP: "東京とハイデラバードにオフィス。日印の旅を始めましょう。",
  },
  "contact.tokyo": { EN: "Tokyo Office", JP: "東京オフィス" },
  "contact.india": { EN: "Hyderabad Office", JP: "ハイデラバードオフィス" },
  "contact.form.title": { EN: "Send a Message", JP: "メッセージを送る" },
  "contact.form.name": { EN: "Full Name", JP: "お名前" },
  "contact.form.email": { EN: "Email", JP: "メール" },
  "contact.form.subject": { EN: "Subject", JP: "件名" },
  "contact.form.message": { EN: "Message", JP: "メッセージ" },
  "contact.form.submit": { EN: "Send Message", JP: "送信" },
  "contact.form.success": { EN: "Thank you! We'll respond within 24 hours.", JP: "ありがとうございます！24時間以内にご返信します。" },

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
  "footer.crafted": { EN: "Crafted with purpose in Hyderabad", JP: "ハイデラバードで制作" },
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
