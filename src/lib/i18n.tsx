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
  "nav.about": { EN: "About Us", JP: "私たちについて" },
  "nav.why": { EN: "Why J-Gate", JP: "J-Gateの強み" },
  "nav.services": { EN: "Services", JP: "サービス" },
  "nav.blogs": { EN: "Blogs & Insights", JP: "ブログ" },
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
  "hero.badge1": { EN: "Top Tier Placements", JP: "トップクラスの紹介実績" },
  "hero.badge2": { EN: "JLPT / NAT Track Record", JP: "JLPT・NAT合格実績" },
  "hero.badge3": { EN: "Corporate Network", JP: "企業ネットワーク" },
  "hero.scroll": { EN: "Discover J-Gate", JP: "J-Gateを知る" },

  // About
  "about.eyebrow": { EN: "About J-Gate", JP: "J-Gateについて" },
  "about.title": { EN: "A Bilateral Bridge Between Two Economies", JP: "二つの経済をつなぐ架け橋" },
  "about.body1": {
    EN: "J-Gate was founded on a singular conviction: that the partnership between Japan and India represents one of the most powerful and underserved opportunities in global business today. We exist to make that partnership operational.",
    JP: "J-Gateは、日本とインドの連携が今日のグローバルビジネスにおいて最も力強く、まだ十分に开拓されていない機会であるという確信のもとに設立されました。私たちはその連携を実現します。",
  },
  "about.body2": {
    EN: "Operated by Indobox India Private Limited, J-Gate connects Japanese enterprises with Indian talent, and Indian professionals with Japanese opportunities — through recruitment, language training, cultural bridging, and market-entry consulting.",
    JP: "Indobox India Private Limitedが運営するJ-Gateは、日本企業とインド人材、インドのプロフェッショナルと日本の機会を、採用・語学研修・文化的橋渡し・市場参入コンサルティングを通じて繋ぎます。",
  },
  "about.mission": { EN: "Our Mission", JP: "ミッション" },
  "about.missionText": {
    EN: "To build the most trusted bilateral corridor between Japan and India — where talent, culture, and enterprise meet with precision and respect.",
    JP: "日本とインド間の最も信頼される両国回廊を構築し、人材・文化・企業が精度と敬意をもって出会う場を作る。",
  },
  "about.vision": { EN: "Our Vision", JP: "ビジョン" },
  "about.visionText": {
    EN: "A world where Japanese companies grow with Indian talent, and Indian professionals thrive in Japanese enterprises — bridged by J-Gate.",
    JP: "日本企業がインドの人材と共に成長し、インドのプロフェッショナルが日本企業で活躍する世界 — J-Gateが架ける橋。",
  },

  // Why J-Gate
  "why.eyebrow": { EN: "Why J-Gate", JP: "J-Gateの強み" },
  "why.title": { EN: "The Bridge That Delivers Results", JP: "結果を出す架け橋" },
  "why.subtitle": {
    EN: "Four pillars that make J-Gate the trusted choice for Japan-India bilateral talent and business expansion.",
    JP: "J-Gateが日印両国の人材・ビジネス展開で信頼される選択肢となる、4つの柱。",
  },
  "why.p1.title": { EN: "Speed Without Compromise", JP: "妥協のないスピード" },
  "why.p1.desc": {
    EN: "From first inquiry to placed candidate or launched operation — our average turnaround is measured in weeks, not months, without sacrificing quality.",
    JP: "初次のお問い合わせから候補者の紹介や事業立ち上げまで、平均ターンアラウンドは月単位ではなく週単位。品質を犠牲にしません。",
  },
  "why.p2.title": { EN: "Deep Bilingual Expertise", JP: "深いバイリンガル専門性" },
  "why.p2.desc": {
    EN: "Our team speaks both languages — not just Japanese and English, but the language of Indian business and the precision of Japanese corporate culture.",
    JP: "私たちのチームは両方の言語を話します — 日本語と英語だけでなく、インドのビジネス言語と日本の企業文化の精度も。",
  },
  "why.p3.title": { EN: "Verified Corporate Network", JP: "検証済みの企業ネットワーク" },
  "why.p3.desc": {
    EN: "Direct relationships with Japanese enterprises, JETRO, T-Hub, and Hyderabad's innovation ecosystem give members access that would take years to build.",
    JP: "日本企業、JETRO、T-Hub、ハイデラバードのイノベーション生態系との直接的な関係により、独自に構築すれば何年もかかるアクセスを提供。",
  },
  "why.p4.title": { EN: "Quality You Can Measure", JP: "測定可能な品質" },
  "why.p4.desc": {
    EN: "JLPT/NAT track record, top-tier placement retention, and client satisfaction metrics — we quantify success so you can trust the outcome.",
    JP: "JLPT・NAT合格実績、トップクラスの定着率、顧客満足度指標 — 成功を定量化し、結果を信頼できるようにします。",
  },

  // Services
  "services.eyebrow": { EN: "Our Services", JP: "サービス" },
  "services.title": { EN: "Four Pathways to Japan-India Success", JP: "日印成功への4つの道" },
  "services.subtitle": {
    EN: "End-to-end solutions for talent, training, bridging, and consulting — each designed around how Japanese and Indian businesses actually operate.",
    JP: "人材・研修・橋渡し・コンサルティングのエンドツーエンドソリューション — それぞれが日印のビジネスの実際に基づいて設計。",
  },
  "services.s1.title": { EN: "Recruitment & Placement", JP: "採用・紹介" },
  "services.s1.short": { EN: "Top-tier Indian talent placed into Japanese enterprises.", JP: "インドのトップ人材を日本企業へ。" },
  "services.s1.desc": {
    EN: "Curated, bilingual, culturally-aligned candidates — from engineering to executive. We handle sourcing, screening, cultural-fit assessment, and placement with Japanese corporate precision.",
    JP: "厳選されたバイリンガルで文化的に適合する候補者 — エンジニアから経営層まで。ソーシング、スクリーニング、文化適合性評価、紹介を日本の企業精度で担当。",
  },
  "services.s2.title": { EN: "Bilateral Business Bridging", JP: "両国間ビジネス橋渡し" },
  "services.s2.short": { EN: "Connect Japanese enterprises with Indian partners.", JP: "日本企業とインドのパートナーを繋ぐ。" },
  "services.s2.desc": {
    EN: "From partner introductions to MoU facilitation — we connect Japanese companies with vetted Indian legal, HR, financial, and technology partners. Your bridge to Hyderabad's ecosystem.",
    JP: "パートナー紹介からMoU調整まで — 日本企業を検証済みのインドの法務・人事・財務・技術パートナーと繋ぎます。ハイデラバードの生態系への架け橋。",
  },
  "services.s3.title": { EN: "Japanese Language Training", JP: "日本語語学研修" },
  "services.s3.short": { EN: "JLPT/NAT preparation with proven results.", JP: "JLPT・NAT対策の実績ある研修。" },
  "services.s3.desc": {
    EN: "Structured JLPT N5–N1 and NAT-TEST preparation programs led by certified instructors. Corporate group training, individual coaching, and cultural etiquette modules — with measurable pass rates.",
    JP: "認定講師による体系化されたJLPT N5〜N1・NAT-TEST対策プログラム。企業向け団体研修、個人コーチング、文化エチケットモジュール — 測定可能な合格率付き。",
  },
  "services.s4.title": { EN: "Market Entry Consulting", JP: "市場参入コンサルティング" },
  "services.s4.short": { EN: "End-to-end India entry for Japanese firms.", JP: "日本企業のインド参入を全程支援。" },
  "services.s4.desc": {
    EN: "Company registration, GST, banking, compliance, office setup at Cyber Gateway, and first-client acquisition — Indobox India handles every step of your India entry with bilingual concierge support.",
    JP: "会社登記、GST、銀行、コンプライアンス、Cyber Gatewayでのオフィス設立、最初の顧客獲得 — Indobox Indiaがバイリンガルコンシェルジュサポートでインド参入の全ステップを担当。",
  },

  // Blogs
  "blogs.eyebrow": { EN: "Insights", JP: "インサイト" },
  "blogs.title": { EN: "Latest from J-Gate", JP: "J-Gateの最新情報" },
  "blogs.subtitle": {
    EN: "Insights, research, and stories from the Japan-India bilateral corridor.",
    JP: "日印両国回廊からのインサイト、研究、ストーリー。",
  },
  "blogs.readmore": { EN: "Read More", JP: "続きを読む" },
  "blogs.b1.tag": { EN: "Recruitment", JP: "採用" },
  "blogs.b1.title": { EN: "Why Indian Engineers Thrive in Japanese Enterprises", JP: "インド人エンジニアが日本企業で活躍する理由" },
  "blogs.b1.excerpt": {
    EN: "Cultural alignment, technical depth, and the bridge that makes the difference. A data-backed look at placement retention.",
    JP: "文化的適合、技術の深さ、そして違いを生む架け橋。定着率をデータで検証。",
  },
  "blogs.b2.tag": { EN: "Language", JP: "語学" },
  "blogs.b2.title": { EN: "JLPT N2 in 18 Months: A Realistic Roadmap", JP: "18ヶ月でJLPT N2：現実的なロードマップ" },
  "blogs.b2.excerpt": {
    EN: "Our certified instructors break down the study path that actually works — from N5 foundations to N2 fluency.",
    JP: "認定講師が実際に機能する学習パスを解説 — N5の基礎からN2の流暢さまで。",
  },
  "blogs.b3.tag": { EN: "Business", JP: "ビジネス" },
  "blogs.b3.title": { EN: "Entering India: A Japanese Company's First 90 Days", JP: "インド参入：日本企業の最初の90日" },
  "blogs.b3.excerpt": {
    EN: "Registration, banking, hiring, and first client — the critical first quarter, mapped step by step.",
    JP: "登記、銀行、採用、最初の顧客 — 重要な最初の四半期をステップバイステップで。",
  },

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

  return (
    <I18nContext.Provider value={{ lang, setLang, toggle, t }}>
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
    };
  }
  return ctx;
}
