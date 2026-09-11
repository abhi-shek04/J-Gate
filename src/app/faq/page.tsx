"use client";

import { useState, useMemo } from "react";
import {
  ChevronDown,
  HelpCircle,
  Building2,
  ShieldCheck,
  Users,
  Landmark,
  Globe2,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { PageHero } from "@/components/jgate/page-hero";
import { Reveal } from "@/components/jgate/shared";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   /faq — Dedicated J-Gate Executive FAQ & Knowledge Base
   ============================================================ */

type CategoryKey = "all" | "workspace" | "japandesk" | "incorporation" | "talent" | "ecosystem";

interface FAQItem {
  id: string;
  category: "workspace" | "japandesk" | "incorporation" | "talent" | "ecosystem";
  categoryLabel: { EN: string; JP: string };
  q: { EN: string; JP: string };
  a: { EN: string; JP: string };
  highlights?: { EN: string; JP: string }[];
}

const CATEGORIES: { id: CategoryKey; label: { EN: string; JP: string }; icon: any }[] = [
  { id: "all", label: { EN: "All Questions", JP: "すべて" }, icon: HelpCircle },
  { id: "workspace", label: { EN: "Facility & Workspace", JP: "施設・ワークスペース" }, icon: Building2 },
  { id: "japandesk", label: { EN: "Japan Desk & Expat", JP: "ジャパンデスク・生活支援" }, icon: ShieldCheck },
  { id: "incorporation", label: { EN: "Incorporation & Tax", JP: "法人設立・法務税務" }, icon: Landmark },
  { id: "talent", label: { EN: "Talent & Staffing", JP: "IT人材採用・研修" }, icon: Users },
  { id: "ecosystem", label: { EN: "T-Hub & Ecosystem Ties", JP: "T-Hub・エコシステム提携" }, icon: Globe2 },
];

const FAQ_LIST: FAQItem[] = [
  /* ── 1. WORKSPACE & FACILITY ── */
  {
    id: "ws-movein",
    category: "workspace",
    categoryLabel: { EN: "Facility & Workspace", JP: "施設・ワークスペース" },
    q: {
      EN: "Can we move in immediately, and what is the minimum lease commitment?",
      JP: "即日入居は可能ですか？また最短契約期間はどれくらいですか？",
    },
    a: {
      EN: "Yes, J-Gate provides 100% turnkey, plug-and-play spaces at Cyber Gateway, Hitech City, Hyderabad. Once your enterprise membership agreement is signed, your team can begin operating immediately with smart RFID keycards. We offer flexible arrangements ranging from month-to-month exploratory satellite memberships to multi-year dedicated private suite leases.",
      JP: "はい、ハイデラバード・ハイテックシティのCyber Gatewayにて即日稼働可能な完全家具・IT設備付きワークスペースをご用意しています。契約締結後、スマートキーカードですぐにご利用いただけます。1ヶ月単位の柔軟なサテライト契約から、複数年の専用プライベートオフィスまで柔軟に対応可能です。",
    },
    highlights: [
      { EN: "Plug-and-Play ready from Day 1", JP: "1日目から即日稼働可能" },
      { EN: "Flexible terms from 1 month to multi-year", JP: "1ヶ月の短期から複数年契約まで対応" },
      { EN: "Biometric & RFID smart keycard access", JP: "生体認証＆ICカードによる入退室" },
    ],
  },
  {
    id: "ws-types",
    category: "workspace",
    categoryLabel: { EN: "Facility & Workspace", JP: "施設・ワークスペース" },
    q: {
      EN: "What workspace configurations are available at J-Gate Hyderabad?",
      JP: "J-Gateで利用可能なワークスペースの種類と構成を教えてください。",
    },
    a: {
      EN: "We offer three primary configurations designed to match every stage of Indian market entry: (1) Private Enterprise Suites: Fully enclosed, soundproof suites for teams of 4 to 30+ members with dedicated corporate LAN; (2) Dedicated Resident Desks: Reserved ergonomic workstations in our quiet professional wing with personal lockable storage; and (3) Flexible Satellite / Hot Desks: Perfect for exploratory executives, visiting directors, and hybrid bilateral teams.",
      JP: "進出フェーズに合わせて3つの構成をご用意しています：(1) 専用プライベートスイート（4名〜30名以上の完全個室・専用LAN回線完備）、(2) 専用固定デスク（静粛なプロフェッショナルエリアに施錠可能キャビネット付き）、(3) サテライト／ホットデスク（出張役員、市場調査チーム、ハイブリッド利用に最適）。",
    },
    highlights: [
      { EN: "Private Suites: 4 to 30+ seats with custom LAN", JP: "専用個室：4〜30名超、専用ネットワーク対応" },
      { EN: "Dedicated Desks: Ergonomic seating & quiet wing", JP: "固定デスク：人間工学オフィス家具完備" },
      { EN: "Satellite Desks: Flexible cross-border access", JP: "サテライト：日印出張者向け柔軟プラン" },
    ],
  },
  {
    id: "ws-infra",
    category: "workspace",
    categoryLabel: { EN: "Facility & Workspace", JP: "施設・ワークスペース" },
    q: {
      EN: "What network security, connectivity, and power backup are guaranteed?",
      JP: "セキュリティ体制、通信回線、停電対策はどのようになっていますか？",
    },
    a: {
      EN: "J-Gate is engineered to strict Japanese enterprise compliance specifications: dual redundant 1Gbps enterprise fiber links with automatic failover, custom VLAN/firewall configurations upon request, 100% power backup via industrial diesel generators combined with true online UPS (zero cut-over delay), and 24/7 on-ground security guards with CCTV logging.",
      JP: "日本企業の高いコンプライアンス基準に準拠しています：二重化された専用1Gbps光ファイバー（自動フェイルオーバー）、個別VLAN/ファイアウォール構築対応、瞬低ゼロのオンラインUPS＋産業用ディーゼル発電機による100%無停電環境、24時間常駐警備員および防犯カメラ監視を完備しています。",
    },
    highlights: [
      { EN: "Dual redundant 1Gbps enterprise fiber", JP: "二重化専用1Gbps企業用光ファイバー" },
      { EN: "100% power backup with zero-delay online UPS", JP: "瞬低ゼロのオンラインUPS＋非常用発電機" },
      { EN: "24/7 security personnel and CCTV audit trails", JP: "24時間警備体制と防犯カメラログ管理" },
    ],
  },
  {
    id: "ws-meeting",
    category: "workspace",
    categoryLabel: { EN: "Facility & Workspace", JP: "施設・ワークスペース" },
    q: {
      EN: "Are meeting rooms and conference facilities included in the membership?",
      JP: "会議室やテレビ会議設備の利用は含まれていますか？",
    },
    a: {
      EN: "Yes. All membership tiers include monthly credits for fully acoustic-isolated conference rooms and boardrooms. Facilities feature 4K interactive presentation screens, enterprise video-conferencing systems (Zoom, Teams, Google Meet), polycom conference speakerphones, and Japanese-standard video adapters.",
      JP: "はい。すべてのプランに防音仕様の会議室・役員用ボードルームの無料利用クレジットが含まれています。4K大型ディスプレイ、高品質Web会議システム（Zoom/Teams等）、Polycom集音マイク、各種変換アダプターを完備し、日本本社とのオンライン重役会議もストレスなく実施可能です。",
    },
  },

  /* ── 2. JAPAN DESK & EXPAT SUPPORT ── */
  {
    id: "jd-support",
    category: "japandesk",
    categoryLabel: { EN: "Japan Desk & Expat", JP: "ジャパンデスク・生活支援" },
    q: {
      EN: "What specific services does the resident Japan Desk provide daily?",
      JP: "常駐ジャパンデスクでは具体的にどのような日常サポートを受けられますか？",
    },
    a: {
      EN: "Our on-ground Japan Desk is staffed by resident Japanese directors and bilingual professionals fluent in Japanese business practices (Horenso, Nemawashi). We provide: (1) Daily 'Yorozu' (よろず相談) business consultations; (2) Local market intelligence and regulatory advisory; (3) Vetted partner introductions (tier-1 legal, accounting, audit, recruitment); and (4) High-stakes meeting interpretation and cultural alignment.",
      JP: "日本人常駐ディレクターおよび日印ビジネスに精通したバイリンガル担当者がサポートします：(1) 日々の「よろず相談」（商習慣、契約、労務、事業展開）、(2) 現地市場調査・法規制アドバイザリー、(3) 信頼できる現地提携先（大手監査法人・法律事務所・採用機関）の紹介、(4) 重要商談の同席・通訳および文化的すり合わせを行います。",
    },
    highlights: [
      { EN: "Native Japanese directors permanently on-ground", JP: "日本人ディレクターが現地常駐" },
      { EN: "Daily 'Yorozu' (よろず) business advisory sessions", JP: "日々の「よろず経営相談」に無料対応" },
      { EN: "Bilingual negotiation & meeting support", JP: "商談通訳・文化差の架け橋サポート" },
    ],
  },
  {
    id: "jd-relocation",
    category: "japandesk",
    categoryLabel: { EN: "Japan Desk & Expat", JP: "ジャパンデスク・生活支援" },
    q: {
      EN: "Do you assist Japanese expatriates with relocation and living in Hyderabad?",
      JP: "日本人駐在員の赴任支援やハイデラバードでの生活立ち上げも相談できますか？",
    },
    a: {
      EN: "Yes. Through our strategic partnership with Genesys Info X and certified expatriate service providers, we offer end-to-end relocation support: safe residential leasing in expat-preferred areas (Gachibowli, Financial District, Jubilee Hills), Foreigners Regional Registration Office (e-FRRO) registration, emergency 24/7 Japanese-friendly medical network liaison, and dedicated chauffeured vehicle arrangements.",
      JP: "はい。Genesys Info Xとの提携体制を通じて、包括的な生活立ち上げを支援します：日本人駐在員に人気の安全な高級住宅（Gachibowli、Financial District、Jubilee Hills）の賃貸仲介、外国人登録（e-FRRO）手続き、日本語対応可能な提携総合病院ネットワークの紹介、専属ドライバー付き専用車の手配など、安心して赴任できる環境を整えます。",
    },
    highlights: [
      { EN: "Expat residential leasing in premium gated communities", JP: "駐在員向けゲーテッドコミュニティ住宅斡旋" },
      { EN: "e-FRRO foreign registration statutory handling", JP: "e-FRRO外国人登録の申請代行支援" },
      { EN: "24/7 emergency medical hospital network coordination", JP: "24時間救急医療機関ネットワーク連携" },
    ],
  },

  /* ── 3. INCORPORATION & TAX COMPLIANCE ── */
  {
    id: "inc-address",
    category: "incorporation",
    categoryLabel: { EN: "Incorporation & Tax", JP: "法人設立・法務税務" },
    q: {
      EN: "Can J-Gate serve as our official registered office address for Indian incorporation?",
      JP: "J-Gateをインド現地法人の正式な登記住所として使用できますか？",
    },
    a: {
      EN: "Yes, absolutely. J-Gate at Cyber Gateway, Hitech City is fully certified and legally compliant as a registered corporate office under the Ministry of Corporate Affairs (MCA). We provide verified No Objection Certificates (NOC), utility bills, and commercial lease deeds required for Certificate of Incorporation (CoI), GST registration, and PAN/TAN allotment.",
      JP: "はい、もちろん可能です。ハイデラバード・ハイテックシティのCyber Gatewayに位置するJ-Gateは、インド企業省（MCA）の公認登記住所として利用可能です。法人設立証明書（CoI）、GST（物品サービス税）登録、PAN/TAN（税金番号）取得に必要な家主承諾書（NOC）や公共料金領収書、正式な商業賃貸契約書を迅速に発行します。",
    },
    highlights: [
      { EN: "MCA-compliant commercial address at Cyber Gateway", JP: "MCA認可のCyber Gateway商業登記住所" },
      { EN: "NOC and utility bills provided for GST registration", JP: "GST登録用のNOC承諾書・公共料金証明書を発行" },
      { EN: "Official mail handling & courier forwarding", JP: "郵便物受取・保管・日本への転送サービス" },
    ],
  },
  {
    id: "inc-nominee",
    category: "incorporation",
    categoryLabel: { EN: "Incorporation & Tax", JP: "法人設立・法務税務" },
    q: {
      EN: "Can J-Gate arrange Resident Director or Nominee Director services?",
      JP: "居住取締役（Resident Director / 常駐役員）の手配は可能ですか？",
    },
    a: {
      EN: "Yes. Under Section 149(3) of the Indian Companies Act 2013, every Indian entity must have at least one director resident in India. Through our accredited corporate legal and advisory partners, we can coordinate vetted professional Resident / Nominee Directors to fulfill statutory compliance while your organization prepares permanent resident personnel.",
      JP: "はい。インド会社法（2013年法第149条3項）に基づき、インド現地法人は最低1名のインド居住取締役（直前1年間に182日以上インドに滞在した者）の選任が義務付けられています。J-Gate提携の認定法務・会計事務所を通じ、適格なプロフェッショナル居住取締役・名義取締役の手配を安全にサポートします。",
    },
  },
  {
    id: "inc-bank",
    category: "incorporation",
    categoryLabel: { EN: "Incorporation & Tax", JP: "法人設立・法務税務" },
    q: {
      EN: "How do you assist with Indian corporate bank account opening?",
      JP: "法人口座の開設手続きはどのように支援してもらえますか？",
    },
    a: {
      EN: "Opening a corporate bank account in India involves extensive RBI and FEMA compliance documentation. J-Gate coordinates directly with major multinational banks (including Japanese corporate desks at MUFG, SMBC, and Mizuho) as well as tier-1 Indian banks (HDFC, ICICI, Axis). We assist with board resolution documentation, signatory verification, and fast-tracked on-site KYC visits.",
      JP: "インドでの法人口座開設には厳密なRBI（インド準備銀行）およびFEMA（外為法）コンプライアンスが求められます。J-Gateは日系大手銀行（三菱UFJ・三井住友・みずほ各行のインド法人デスク）および現地大手行（HDFC・ICICI等）と直接連携し、取締役会決議書の作成支援、本人確認（KYC）手続き、訪問面談の調整を円滑に進めます。",
    },
  },

  /* ── 4. TALENT ACQUISITION & STAFFING ── */
  {
    id: "tal-hire",
    category: "talent",
    categoryLabel: { EN: "Talent & Staffing", JP: "IT人材採用・研修" },
    q: {
      EN: "How does J-Gate assist Japanese companies in sourcing skilled IT engineering talent?",
      JP: "インドの優秀なITエンジニアの採用はどのようにサポートされますか？",
    },
    a: {
      EN: "Hyderabad produces over 100,000 engineering and tech graduates each year. J-Gate, through our operator Indobox and ties with premier institutions (IIT Hyderabad, IIIT Hyderabad, Indobox Academy), provides direct talent recruitment: pre-screening candidates in Full-Stack, AI/ML, Cloud/DevOps, and Embedded Systems, alongside cross-cultural orientation in Japanese working expectations.",
      JP: "ハイデラバードは年間10万人超の工学系卒業生を輩出するインド屈指のIT人材供給地です。J-Gateは運営母体Indoboxおよび名門工科大学（IITハイデラバード、IIITハイデラバード）、Indobox Academyとのパイプを活かし、AI/ML・クラウド・Web開発・組込み分野のトップエンジニアを厳選採用。日本の品質意識や報連相プロトコルの事前研修も実施可能です。",
    },
    highlights: [
      { EN: "Direct sourcing from IIT Hyderabad & IIIT Hyderabad", JP: "IIT/IIITハイデラバード等の名門工科大学と直結" },
      { EN: "Japanese work standards & Horenso pre-training", JP: "日本の品質基準・報連相の事前オリエンテーション" },
      { EN: "Rigorous technical vetting by experienced architects", JP: "シニアアーキテクトによる厳格な技術スクリーニング" },
    ],
  },
  {
    id: "tal-eor",
    category: "talent",
    categoryLabel: { EN: "Talent & Staffing", JP: "IT人材採用・研修" },
    q: {
      EN: "What is the Employer of Record (EOR) service, and how can we use it before incorporation?",
      JP: "法人設立前に人材を雇用できる「EOR（雇用代行）」サービスとは何ですか？",
    },
    a: {
      EN: "Our Employer of Record (EOR) service allows Japanese companies to hire and deploy Indian engineers immediately without waiting 3–6 months for company incorporation. Indobox legally employs the engineers on our local compliant entity, managing payroll, statutory PF/ESI, income tax withholdings, and medical insurance, while the engineers work 100% dedicated to your project.",
      JP: "法人設立の完了（通常2〜4ヶ月）を待たずに、今すぐインド人エンジニアを採用・稼働させることができるサービスです。Indoboxの現地法人が法的な雇用主となり、給与計算、社会保険（PF/ESI）、源泉徴収（TDS）、労災・医療保険を一括管理。貴社は自社専属メンバーとしてプロジェクトの開発業務に専念させることができます。",
    },
    highlights: [
      { EN: "Hire talent within days — no incorporation required", JP: "法人設立不要で最短数日でエンジニアを稼働" },
      { EN: "Complete statutory payroll & tax compliance handled", JP: "給与計算・法定年金・税務申告を完全代行" },
      { EN: "Seamless transition to your Indian entity later", JP: "将来自社法人を設立した際はスムーズに従業員を移籍可能" },
    ],
  },

  /* ── 5. BILATERAL ECOSYSTEM & TIES ── */
  {
    id: "eco-thub",
    category: "ecosystem",
    categoryLabel: { EN: "T-Hub & Ecosystem Ties", JP: "T-Hub・エコシステム提携" },
    q: {
      EN: "How does J-Gate connect Japanese companies with T-Hub and the Telangana Government?",
      JP: "T-Hubやテランガナ州政府などの有力イノベーション機関とはどのように連携できますか？",
    },
    a: {
      EN: "J-Gate holds institutional relationships across the Hyderabad innovation corridor: (1) Facilitating direct introductions to the Telangana State IT & Industries Department; (2) Arranging startup scouting, corporate pilot partnerships, and deep-tech demo days at T-Hub (the world's largest startup incubator); and (3) Coordinating with academic centers like IIT Hyderabad and Woxsen University for collaborative R&D and executive networking.",
      JP: "J-Gateはハイデラバードの有力エコシステムと連携しています：(1) テランガナ州政府IT・商工省との対話窓口、(2) 世界最大規模のスタートアップ支援施設「T-Hub」でのスタートアップ発掘・PoC（実証実験）コーディネート、(3) IITハイデラバードやWoxsen大学との産学共同研究・技術連携の機会を提供します。",
    },
    highlights: [
      { EN: "Access to world's largest incubator T-Hub", JP: "世界最大級のインキュベーターT-Hubとの連携" },
      { EN: "Telangana State IT Department liaison", JP: "テランガナ州政府IT局との円滑な対話窓口" },
      { EN: "IIT Hyderabad & academic R&D networks", JP: "IITハイデラバード等の産学連携ネットワーク" },
    ],
  },
  {
    id: "eco-tour",
    category: "ecosystem",
    categoryLabel: { EN: "T-Hub & Ecosystem Ties", JP: "T-Hub・エコシステム提携" },
    q: {
      EN: "Can we schedule an on-site or virtual tour of J-Gate before making a commitment?",
      JP: "契約前に現地オフィスの見学やオンラインでの事前相談は可能ですか？",
    },
    a: {
      EN: "Yes, we encourage prospective enterprises to tour our facilities. We offer in-person guided tours at Cyber Gateway, Hitech City, Hyderabad, as well as 30-minute interactive live video walkthroughs with our resident Japanese directors for decision-makers currently in Tokyo or elsewhere in Japan.",
      JP: "はい、大歓迎です。ハイデラバード出張時のCyber Gateway現地見学ツアーはもちろん、日本国内（東京・大阪等）にいらっしゃる企業様向けに、日本人ディレクターによるオンライン個別相談およびリアルタイム施設動画案内（30分）を随時承っております。",
    },
  },
];

export default function FAQPage() {
  const { tx } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "ws-movein": true,
    "jd-support": true,
  });

  // Toggle single accordion
  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand all / Collapse all
  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_LIST.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenIds(allOpen);
  };

  const collapseAll = () => {
    setOpenIds({});
  };

  // Filter items based on category
  const filteredList = useMemo(() => {
    return FAQ_LIST.filter((item) => {
      return selectedCategory === "all" || item.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <>
      {/* 1. HERO BANNER */}
      <PageHero
        eyebrowKey="faq.eyebrow"
        titleNode={
          <span>
            {tx({
              EN: "Frequently Asked Questions",
              JP: "よくあるご質問",
            })}
          </span>
        }
        subtitleKey="faq.subtitle"
      />

      {/* 2. REASSURANCE PODS (4 PILLARS) */}
      <section className="border-b border-slate-200/80 bg-white py-8">
        <div className="container-jg">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: tx({ EN: "Resident Japan Desk", JP: "常駐ジャパンデスク" }),
                desc: tx({ EN: "Native Japanese directors on-ground daily", JP: "日本人ディレクターが現地常駐" }),
              },
              {
                icon: Building2,
                title: tx({ EN: "Cyber Gateway Hub", JP: "Cyber Gateway拠点" }),
                desc: tx({ EN: "Plug-and-play ready enterprise facilities", JP: "即日稼働可能な完全インフラ" }),
              },
              {
                icon: Landmark,
                title: tx({ EN: "MCA Statutory Legal", JP: "100% 法令順守" }),
                desc: tx({ EN: "Certified registered office & GST setup", JP: "公認商業登記住所・GST対応" }),
              },
              {
                icon: MessageSquare,
                title: tx({ EN: "Free Yorozu Advisory", JP: "無料よろず相談" }),
                desc: tx({ EN: "Custom roadmaps for entering India", JP: "進出検討企業への個別助言" }),
              },
            ].map((pod, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-ivory/50 p-4 transition-all hover:border-crimson/30 hover:bg-ivory hover:shadow-sm">
                  <div className="icon-pod h-9 w-9 shrink-0 mt-0.5">
                    <pod.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-jp text-[13.5px] font-bold text-ink">{pod.title}</h3>
                    <p className="mt-0.5 font-inter text-[12px] text-slate-600 leading-snug">{pod.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAIN FAQ SEARCH & ACCORDION SYSTEM */}
      <section className="py-8 sm:py-12 lg:py-16 bg-ivory">
        <div className="container-jg max-w-5xl">
          {/* Category Filter Pills */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? FAQ_LIST.length
                    : FAQ_LIST.filter((i) => i.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "group inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1.5 sm:px-3.5 sm:py-2 font-inter text-[11px] sm:text-[12px] font-semibold transition-all duration-200",
                      isSelected
                        ? "bg-crimson text-white shadow-md shadow-crimson/25 ring-2 ring-crimson/20"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-crimson/40 hover:bg-slate-50"
                    )}
                  >
                    <Icon className={cn("h-3 w-3 sm:h-3.5 sm:w-3.5", isSelected ? "text-white" : "text-slate-500 group-hover:text-crimson")} />
                    <span>{tx(cat.label)}</span>
                    <span
                      className={cn(
                        "rounded-full px-1.5 py-0.2 text-[10px] sm:text-[10.5px] font-bold",
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Results Summary Bar + Expand/Collapse Buttons */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-200 pb-2 sm:pb-2.5 font-inter text-[11px] sm:text-[12px] text-slate-600">
            <div>
              {tx({
                EN: `Showing ${filteredList.length} of ${FAQ_LIST.length} questions`,
                JP: `${FAQ_LIST.length}件中 ${filteredList.length}件の質問を表示`,
              })}
            </div>
            <div className="flex items-center gap-3 font-medium">
              <button
                onClick={expandAll}
                className="text-slate-600 hover:text-crimson transition-colors"
              >
                {tx({ EN: "Expand All", JP: "すべて開く" })}
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={collapseAll}
                className="text-slate-600 hover:text-crimson transition-colors"
              >
                {tx({ EN: "Collapse All", JP: "すべて閉じる" })}
              </button>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="mt-3.5 sm:mt-5 space-y-2 sm:space-y-3">
            {filteredList.length === 0 ? (
              <div className="rounded-2xl sm:rounded-3xl border border-dashed border-slate-300 bg-white py-10 sm:py-14 text-center">
                <HelpCircle className="mx-auto h-9 w-9 sm:h-11 sm:w-11 text-slate-300" />
                <h3 className="mt-3 font-serif-jp text-base sm:text-lg font-bold text-ink">
                  {tx({ EN: "No matching questions found", JP: "該当する質問が見つかりませんでした" })}
                </h3>
                <p className="mx-auto mt-2 max-w-md font-inter text-[12px] sm:text-[13px] text-slate-600 px-4">
                  {tx({
                    EN: "Try using different keywords, or reach out to our resident Japan Desk for immediate personal consultation.",
                    JP: "キーワードを変更して再検索いただくか、常駐ジャパンデスクまで直接お問い合わせください。",
                  })}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 font-inter text-[12px] font-semibold text-slate-800 hover:bg-slate-200 transition-colors"
                >
                  {tx({ EN: "View All Questions", JP: "すべての質問を表示" })}
                </button>
              </div>
            ) : (
              filteredList.map((item, idx) => {
                const isOpen = !!openIds[item.id];
                return (
                  <Reveal key={item.id} delay={idx * 30}>
                    <div
                      className={cn(
                        "group overflow-hidden rounded-xl sm:rounded-2xl border bg-white transition-all duration-300 shadow-xs",
                        isOpen
                          ? "border-crimson/50 shadow-md ring-1 ring-crimson/15"
                          : "border-slate-200/90 hover:border-slate-300 hover:shadow-xs"
                      )}
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="flex w-full items-start justify-between gap-3 sm:gap-4 p-3.5 sm:p-4.5 text-left transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div className="flex-1 space-y-1">
                          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 font-inter text-[10px] sm:text-[10.5px] font-bold text-slate-600 uppercase tracking-wide">
                            {tx(item.categoryLabel)}
                          </span>
                          <h3
                            className={cn(
                              "font-serif-jp font-bold leading-snug transition-colors",
                              isOpen ? "text-crimson" : "text-ink group-hover:text-crimson"
                            )}
                            style={{ fontSize: "clamp(0.92rem, 1.25vw, 1.1rem)" }}
                          >
                            {tx(item.q)}
                          </h3>
                        </div>

                        <div
                          className={cn(
                            "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300",
                            isOpen
                              ? "bg-crimson text-white rotate-180 shadow-xs shadow-crimson/30"
                              : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                          )}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-slate-100 bg-gradient-to-b from-slate-50/40 to-white px-3.5 pb-3.5 pt-2.5 sm:px-5 sm:pb-5 sm:pt-3 animate-in fade-in-50 duration-200">
                          <p className="font-inter text-[12px] sm:text-[13.5px] leading-relaxed text-slate-700">
                            {tx(item.a)}
                          </p>

                          {/* Optional highlight checkpoints */}
                          {item.highlights && item.highlights.length > 0 && (
                            <div className="mt-3 sm:mt-4 grid gap-1.5 sm:gap-2 sm:grid-cols-3 pt-2.5 sm:pt-3 border-t border-slate-100">
                              {item.highlights.map((h, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-center gap-2 rounded-lg bg-ivory/80 px-2.5 py-1.5 sm:px-3 sm:py-2 border border-slate-200/60"
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-crimson" />
                                  <span className="font-inter text-[11px] sm:text-[11.5px] font-medium text-slate-700 leading-tight">
                                    {tx(h)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
