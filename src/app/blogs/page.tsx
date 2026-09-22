"use client";

import { useState, useEffect } from "react";
import {
  Building2,
  MapPin,
  Flag,
  Users,
  Eye,
  UtensilsCrossed,
  Trees,
  Maximize2,
  Coffee,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  LayoutGrid,
  Layers,
  Sparkle,
  Wifi,
  Lock,
  Compass,
} from "lucide-react";
import { Reveal, Eyebrow } from "@/components/jgate/shared";
import { PageHero } from "@/components/jgate/page-hero";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ============================================================
   J-Gate Official Office & Facilities Gallery
   Location: Cyber Gateway, Phase 2, Hitech City, Hyderabad
   Understated, minimalist architectural portfolio layout.
   ============================================================ */

type Bilingual = { EN: string; JP: string };

type RealPhotoItem = {
  id: string;
  src: string;
  zone: "building" | "reception" | "workspace" | "meetings" | "dining";
  zoneNumber: string;
  alt: string;
  title: Bilingual;
  subtitle: Bilingual;
  badge: Bilingual;
  location: Bilingual;
  specs: { label: Bilingual; val: Bilingual }[];
};

const ALL_REAL_PHOTOS: RealPhotoItem[] = [
  // ZONE 1: BUILDING & COURTYARD
  {
    id: "cg-facade",
    src: "/gallery/cyber-gateway-facade.jpg",
    zone: "building",
    zoneNumber: "01",
    alt: "Cyber Gateway building exterior in Hitech City, Hyderabad",
    title: { EN: "Cyber Gateway Building Exterior", JP: "サイバーゲートウェイ 外観" },
    subtitle: {
      EN: "Commercial office building located in Phase 2 of Hitech City, Hyderabad.",
      JP: "ハイデラバード・ハイテックシティ第2フェーズに位置するオフィスビル。",
    },
    badge: { EN: "Cyber Gateway Phase 2", JP: "Phase 2" },
    location: { EN: "Phase 2, Hitech City, Hyderabad", JP: "ハイデラバード・ハイテックシティ" },
    specs: [
      { label: { EN: "Location", JP: "所在地" }, val: { EN: "Hitech City, Hyderabad", JP: "ハイデラバード" } },
      { label: { EN: "Transit", JP: "交通" }, val: { EN: "2 min to Metro Station", JP: "メトロ駅徒歩2分" } },
      { label: { EN: "Power Backup", JP: "電源" }, val: { EN: "100% Dual DG Backup", JP: "発電機バックアップ" } },
      { label: { EN: "Security", JP: "警備" }, val: { EN: "24/7 Security", JP: "24時間警備" } },
    ],
  },
  {
    id: "courtyard-fountain",
    src: "/gallery/cyber-gateway-exterior.jpg",
    zone: "building",
    zoneNumber: "01",
    alt: "Cyber Gateway central palm courtyard with water fountain",
    title: { EN: "Central Courtyard & Fountain", JP: "中央中庭・噴水" },
    subtitle: {
      EN: "Landscaped open-air courtyard with fountain and palm trees within the building complex.",
      JP: "敷地中央に位置する椰子の木と噴水のある共用中庭スペース。",
    },
    badge: { EN: "Central Courtyard", JP: "共用中庭" },
    location: { EN: "Cyber Gateway Central Courtyard", JP: "サイバーゲートウェイ中央部" },
    specs: [
      { label: { EN: "Type", JP: "種別" }, val: { EN: "Open-Air Courtyard", JP: "屋外中庭" } },
      { label: { EN: "Feature", JP: "設備" }, val: { EN: "Water Fountain & Greenery", JP: "噴水・植栽" } },
      { label: { EN: "Usage", JP: "用途" }, val: { EN: "Outdoor Break Area", JP: "休憩・散策" } },
      { label: { EN: "Access", JP: "利用" }, val: { EN: "All Building Occupants", JP: "ビル入居者共用" } },
    ],
  },

  // ZONE 2: ENTRANCE & RECEPTION
  {
    id: "reception-desk",
    src: "/gallery/reception.jpg",
    zone: "reception",
    zoneNumber: "02",
    alt: "J-Gate reception desk with world timezone clocks and flags",
    title: { EN: "Front Reception Desk", JP: "受付フロント" },
    subtitle: {
      EN: "Reception desk equipped with international timezone clocks (Tokyo, London, New York, Delhi).",
      JP: "東京・ロンドン・ニューヨーク・デリーの世界時計を設置した受付カウンター。",
    },
    badge: { EN: "Reception", JP: "受付" },
    location: { EN: "J-Gate Entry Foyer, 2nd Floor", JP: "2階 エントランス" },
    specs: [
      { label: { EN: "Staff", JP: "スタッフ" }, val: { EN: "Japanese & English Support", JP: "日・英バイリンガル" } },
      { label: { EN: "Timezones", JP: "世界時計" }, val: { EN: "Tokyo, London, NYC, Delhi", JP: "東京・ロンドン・NY・デリー" } },
      { label: { EN: "Services", JP: "業務" }, val: { EN: "Visitor Reception & Mail", JP: "来客対応・郵便管理" } },
      { label: { EN: "Access", JP: "入退館" }, val: { EN: "Smart Card Reader", JP: "ICカードリーダー" } },
    ],
  },
  {
    id: "acrylic-signage",
    src: "/gallery/signage.jpg",
    zone: "reception",
    zoneNumber: "02",
    alt: "J-Gate official acrylic company signboard at the office door",
    title: { EN: "J-Gate Office Signboard", JP: "J-Gate オフィスサイン" },
    subtitle: {
      EN: "Acrylic brand plaque mounted at the office entrance doorway.",
      JP: "オフィス入口壁面に設置されたJ-Gateアクリルサインプレート。",
    },
    badge: { EN: "Official Signage", JP: "公式サイン" },
    location: { EN: "Office Entrance Wall", JP: "オフィス入口壁面" },
    specs: [
      { label: { EN: "Type", JP: "仕様" }, val: { EN: "Acrylic Plaque", JP: "アクリルプレート" } },
      { label: { EN: "Registration", JP: "登記" }, val: { EN: "Registered Office Address", JP: "法人登記可能住所" } },
      { label: { EN: "Floor", JP: "階数" }, val: { EN: "2nd Floor, Wing-1", JP: "2階 Wing-1" } },
      { label: { EN: "Door", JP: "施錠" }, val: { EN: "Electronic Access Lock", JP: "電子カード施錠" } },
    ],
  },
  {
    id: "wing1-entry",
    src: "/gallery/entrance.jpg",
    zone: "reception",
    zoneNumber: "02",
    alt: "Cyber Gateway Wing-1 office entrance glass door",
    title: { EN: "Wing-1 Entrance Door", JP: "Wing-1 エントランスドア" },
    subtitle: {
      EN: "Secured glass entrance door at Wing-1 with partner and STPI affiliations.",
      JP: "J-Gate、Indobox India、STPIの提携ロゴが掲示されたWing-1入口ドア。",
    },
    badge: { EN: "Wing-1 Entrance", JP: "Wing-1 入口" },
    location: { EN: "Block B, Wing-1, 2nd Floor", JP: "Block B 2階 Wing-1" },
    specs: [
      { label: { EN: "Affiliation", JP: "提携" }, val: { EN: "STPI & Indobox Hub", JP: "STPI・Indobox" } },
      { label: { EN: "Security", JP: "認証" }, val: { EN: "RFID Card Access", JP: "RFIDスマートカード" } },
      { label: { EN: "Building", JP: "棟" }, val: { EN: "Block B, Phase 2", JP: "Block B" } },
      { label: { EN: "Floor", JP: "階" }, val: { EN: "2nd Floor", JP: "2階" } },
    ],
  },

  // ZONE 3: DEDICATED WORKSTATIONS
  {
    id: "workspace-hall",
    src: "/gallery/workspace-wide.jpg",
    zone: "workspace",
    zoneNumber: "03",
    alt: "J-Gate open workspace floor with 40+ dedicated workstations",
    title: { EN: "Dedicated Workstation Floor", JP: "固定専用デスク 執務エリア" },
    subtitle: {
      EN: "Air-conditioned open floor equipped with 40+ dedicated desks and ergonomic high-back mesh chairs.",
      JP: "40席以上の固定専用デスクと人間工学メッシュチェアを備えた冷暖房完備の執務エリア。",
    },
    badge: { EN: "40+ Dedicated Desks", JP: "40席以上 固定席" },
    location: { EN: "Main Floor Workstation Area", JP: "メイン執務フロア" },
    specs: [
      { label: { EN: "Desks", JP: "席数" }, val: { EN: "40+ Assigned Desks", JP: "40席以上の固定席" } },
      { label: { EN: "Seating", JP: "チェア" }, val: { EN: "High-Back Mesh Chairs", JP: "ハイバックメッシュ" } },
      { label: { EN: "Internet", JP: "回線" }, val: { EN: "1 Gbps Dedicated Fiber", JP: "専用1Gbps光回線" } },
      { label: { EN: "Climate", JP: "空調" }, val: { EN: "Central Air Conditioning", JP: "全館集中空調" } },
    ],
  },
  {
    id: "desk-bilateral",
    src: "/gallery/desk-flags.jpg",
    zone: "workspace",
    zoneNumber: "03",
    alt: "Dedicated desk with Japan and India flags, lockable drawer unit",
    title: { EN: "Dedicated Desk Setup", JP: "専用デスク・個別仕様" },
    subtitle: {
      EN: "Workstation equipped with personal lockable 3-tier drawer pedestal, power sockets, and partition board.",
      JP: "個人用施錠3段キャビネット、電源タップ、パーティションパネルを備えた専用デスク。",
    },
    badge: { EN: "Lockable Pedestal", JP: "施錠ロッカー付" },
    location: { EN: "Dedicated Desk Bays", JP: "専用デスク列" },
    specs: [
      { label: { EN: "Storage", JP: "収納" }, val: { EN: "3-Drawer Lockable Unit", JP: "鍵付き3段ワゴン" } },
      { label: { EN: "Power", JP: "電源" }, val: { EN: "Multi-Pin Sockets", JP: "各席電源タップ" } },
      { label: { EN: "Partition", JP: "パネル" }, val: { EN: "Acoustic Partition", JP: "吸音パネル" } },
      { label: { EN: "Size", JP: "寸法" }, val: { EN: "1200 mm × 600 mm", JP: "1200×600mm" } },
    ],
  },
  {
    id: "workspace-clusters",
    src: "/gallery/workspace-close.jpg",
    zone: "workspace",
    zoneNumber: "03",
    alt: "Workstation clusters with presentation dais",
    title: { EN: "Workstation Rows & Dais", JP: "デスク列＆プレゼンステージ" },
    subtitle: {
      EN: "Structured workstation rows with adjacent presentation dais and backdrop.",
      JP: "整然と並ぶワークステーション列とプレゼンテーション用ステージ。",
    },
    badge: { EN: "Workstation Rows", JP: "デスク列" },
    location: { EN: "Central Workstation Bay", JP: "中央ワークステーション" },
    specs: [
      { label: { EN: "Layout", JP: "配置" }, val: { EN: "Linear Desk Pods", JP: "並列型配置" } },
      { label: { EN: "Stage", JP: "ステージ" }, val: { EN: "Presentation Dais", JP: "プレゼンスペース" } },
      { label: { EN: "Lighting", JP: "照明" }, val: { EN: "Diffused LED Panels", JP: "LED照明" } },
      { label: { EN: "Cleaning", JP: "清掃" }, val: { EN: "Daily Housekeeping", JP: "日次清掃管理" } },
    ],
  },

  // ZONE 4: MEETING ROOMS & BOARDROOM
  {
    id: "executive-boardroom",
    src: "/gallery/boardroom.jpg",
    zone: "meetings",
    zoneNumber: "04",
    alt: "16-seat International Executive Boardroom with multinational flags",
    title: { EN: "16-Seat Boardroom", JP: "16名用 国際会議室" },
    subtitle: {
      EN: "Conference room with 16-seat table, executive leather chairs, 4K screen, and 8 international flags.",
      JP: "16席のテーブル、レザーチェア、4Kモニター、国際旗を備えた大会議室。",
    },
    badge: { EN: "16-Seat Boardroom", JP: "16名会議室" },
    location: { EN: "Conference Wing, 2nd Floor", JP: "2階 会議室エリア" },
    specs: [
      { label: { EN: "Capacity", JP: "定員" }, val: { EN: "16 Executive Seats", JP: "16席" } },
      { label: { EN: "Display", JP: "映像" }, val: { EN: "4K Screen & Video Cam", JP: "4K大型モニター・カメラ" } },
      { label: { EN: "Flags", JP: "国旗" }, val: { EN: "8 Multinational Flags", JP: "8カ国旗常設" } },
      { label: { EN: "Walls", JP: "遮音" }, val: { EN: "Sound-Dampened Walls", JP: "遮音壁構造" } },
    ],
  },
  {
    id: "huddle-suite",
    src: "/gallery/huddle-room.jpg",
    zone: "meetings",
    zoneNumber: "04",
    alt: "4-person discussion meeting room with round white table and whiteboard",
    title: { EN: "4-Seat Discussion Room", JP: "4名用 面談・討議室" },
    subtitle: {
      EN: "Private meeting room with round table, 4 mesh chairs, wall whiteboard, and power outlets.",
      JP: "円形テーブル、メッシュチェア4脚、壁掛けホワイトボードを備えた個室面談室。",
    },
    badge: { EN: "4-Seat Discussion Room", JP: "4名面談室" },
    location: { EN: "Meeting Room B", JP: "会議室B" },
    specs: [
      { label: { EN: "Capacity", JP: "定員" }, val: { EN: "4 Seats (Round Table)", JP: "4席（円形）" } },
      { label: { EN: "Whiteboard", JP: "ボード" }, val: { EN: "Wall-Mounted Board", JP: "壁掛けホワイトボード" } },
      { label: { EN: "Power", JP: "接続" }, val: { EN: "Center Power Hub", JP: "中央電源タップ" } },
      { label: { EN: "Booking", JP: "利用" }, val: { EN: "Member Reservation", JP: "会員予約制" } },
    ],
  },

  // ZONE 5: CAFETERIA & DINING
  {
    id: "tasty-food-junction",
    src: "/gallery/cafeteria-bustle.jpg",
    zone: "dining",
    zoneNumber: "05",
    alt: "Tasty Food Junction dining hall in building",
    title: { EN: "Tasty Food Junction Dining Hall", JP: "Tasty Food Junction 食堂" },
    subtitle: {
      EN: "In-building cafeteria and dining hall serving hot meals daily for building occupants.",
      JP: "サイバーゲートウェイ館内の食堂。日替わりの温かい食事を提供。",
    },
    badge: { EN: "In-Building Cafeteria", JP: "館内食堂" },
    location: { EN: "Ground Floor Dining Hall", JP: "1階 食堂フロア" },
    specs: [
      { label: { EN: "Cuisine", JP: "料理" }, val: { EN: "Indian & Continental", JP: "インド料理・洋食" } },
      { label: { EN: "Capacity", JP: "席数" }, val: { EN: "150+ Seats", JP: "150席以上" } },
      { label: { EN: "Hygiene", JP: "衛生" }, val: { EN: "Daily Standard Audits", JP: "衛生管理基準" } },
      { label: { EN: "Meals", JP: "提供" }, val: { EN: "Breakfast & Lunch", JP: "朝食・昼食" } },
    ],
  },
  {
    id: "tfj-entrance",
    src: "/gallery/tasty-food-junction-entry.jpg",
    zone: "dining",
    zoneNumber: "05",
    alt: "Tasty Food Junction entrance signboard",
    title: { EN: "Tasty Food Junction Entrance", JP: "食堂エントランス" },
    subtitle: {
      EN: "Entrance to the building cafeteria with daily meal and beverage menu board.",
      JP: "日替わりメニュー案内板を設置した食堂入口。",
    },
    badge: { EN: "Cafeteria Entry", JP: "食堂入口" },
    location: { EN: "Dining Hall Entrance", JP: "食堂入口" },
    specs: [
      { label: { EN: "Options", JP: "メニュー" }, val: { EN: "Daily Meals & Tea", JP: "日替わり定食・お茶" } },
      { label: { EN: "Payment", JP: "決済" }, val: { EN: "Digital / Cash", JP: "電子決済・現金" } },
      { label: { EN: "Beverages", JP: "飲料" }, val: { EN: "Chai & Refreshments", JP: "チャイ・飲料" } },
      { label: { EN: "Access", JP: "対象" }, val: { EN: "Building Occupants", JP: "ビル利用者共用" } },
    ],
  },
  {
    id: "inhouse-cafe",
    src: "/gallery/cafeteria.jpg",
    zone: "dining",
    zoneNumber: "05",
    alt: "In-office cafe and coffee pantry area",
    title: { EN: "In-Office Coffee Pantry", JP: "所内コーヒーパントリー" },
    subtitle: {
      EN: "Pantry area within the office equipped with coffee machine, microwave, and seating.",
      JP: "オフィス内に併設されたコーヒーマシン、電子レンジ、休憩テーブルのあるパントリー。",
    },
    badge: { EN: "Office Pantry", JP: "所内パントリー" },
    location: { EN: "J-Gate Office Wing, 2nd Floor", JP: "2階 J-Gate所内" },
    specs: [
      { label: { EN: "Beverages", JP: "ドリンク" }, val: { EN: "Coffee & Green Tea", JP: "コーヒー・日本茶" } },
      { label: { EN: "Appliances", JP: "家電" }, val: { EN: "Microwaves & Fridge", JP: "電子レンジ・冷蔵庫" } },
      { label: { EN: "Seating", JP: "座席" }, val: { EN: "Casual Seating", JP: "休憩テーブル" } },
      { label: { EN: "Floor", JP: "床材" }, val: { EN: "Wood Vinyl Planks", JP: "木目調フローリング" } },
    ],
  },
  {
    id: "ro-water-lounge",
    src: "/gallery/cafeteria-lounge.jpg",
    zone: "dining",
    zoneNumber: "05",
    alt: "Office refreshment lounge with RO drinking water dispenser",
    title: { EN: "RO Purified Water Station & Lounge", JP: "RO浄水ステーション＆ラウンジ" },
    subtitle: {
      EN: "Break area equipped with multi-stage RO purified drinking water dispenser (hot and cold).",
      JP: "冷水・温水が利用できる多段RO逆浸透膜浄水器を備えた休憩ラウンジ。",
    },
    badge: { EN: "RO Drinking Water", JP: "RO浄水設備" },
    location: { EN: "Pantry Lounge Area", JP: "パントリーラウンジ" },
    specs: [
      { label: { EN: "Water", JP: "飲用水" }, val: { EN: "Multi-Stage RO Filtered", JP: "多段RO逆浸透膜浄水" } },
      { label: { EN: "Dispenser", JP: "給水" }, val: { EN: "Cold & Hot Water Ready", JP: "冷水・温水完備" } },
      { label: { EN: "Lighting", JP: "照明" }, val: { EN: "Ambient LED", JP: "LED照明" } },
      { label: { EN: "Hygiene", JP: "清掃" }, val: { EN: "Daily Sanitized", JP: "日次除菌管理" } },
    ],
  },
];

/* ── 5 Office Zones Definition ── */
type ZoneDef = {
  id: "building" | "reception" | "workspace" | "meetings" | "dining";
  num: string;
  tag: Bilingual;
  title: Bilingual;
  lead: Bilingual;
  icon: typeof Building2;
  highlights: Bilingual[];
  photoIds: string[];
};

const ZONES: ZoneDef[] = [
  {
    id: "building",
    num: "01",
    tag: { EN: "Building & Exterior", JP: "ビル外観・共用部" },
    title: { EN: "Cyber Gateway Building & Courtyard", JP: "サイバーゲートウェイ ビル外観・中庭" },
    lead: {
      EN: "Located in Phase 2 of Hitech City, Hyderabad, Cyber Gateway is an established office building with 24/7 security, 100% generator backup, and a central courtyard garden.",
      JP: "ハイデラバード・ハイテックシティ第2フェーズに位置するサイバーゲートウェイ。24時間警備、100%発電機バックアップ、中央共用中庭を備えたオフィスビル。",
    },
    icon: Building2,
    highlights: [
      { EN: "Located in Hitech City Phase 2, 2 min to Metro", JP: "ハイテックシティ第2フェーズ、メトロ駅徒歩2分" },
      { EN: "100% generator power backup for uninterrupted power", JP: "100%発電機バックアップ電源完備" },
      { EN: "Central open-air courtyard with fountain and palm trees", JP: "椰子の木と噴水がある中央共用中庭" },
    ],
    photoIds: ["cg-facade", "courtyard-fountain"],
  },
  {
    id: "reception",
    num: "02",
    tag: { EN: "Entrance & Reception", JP: "オフィス入口・受付" },
    title: { EN: "Reception & Wing-1 Entrance", JP: "受付＆Wing-1入口" },
    lead: {
      EN: "Secured Wing-1 entrance on the 2nd floor with smart card access, leading to the front reception desk with world timezone clocks and official J-Gate office signage.",
      JP: "2階 Wing-1のスマートカード式入口から入館。世界主要都市の時計を備えた受付と公式オフィス看板を設置。",
    },
    icon: Users,
    highlights: [
      { EN: "World timezone clocks (Tokyo, London, NYC, Delhi)", JP: "東京・ロンドン・NY・デリーの世界時計" },
      { EN: "Acrylic J-Gate signage for official office address", JP: "公式オフィス看板（法人登記可能）" },
      { EN: "RFID smart keycard entry system for secure access", JP: "RFIDスマートカードによる入退館管理" },
    ],
    photoIds: ["reception-desk", "acrylic-signage", "wing1-entry"],
  },
  {
    id: "workspace",
    num: "03",
    tag: { EN: "Dedicated Workstations", JP: "固定執務エリア" },
    title: { EN: "40+ Dedicated Workstations Floor", JP: "40席規模 固定専用デスクフロア" },
    lead: {
      EN: "Air-conditioned open floor office configured with 40+ dedicated desks. Each desk is assigned with ergonomic mesh chairs, personal lockable drawer units, and 1 Gbps fiber internet.",
      JP: "40席以上の固定専用デスクを備えた冷暖房完備の執務フロア。各席に人間工学メッシュチェア、鍵付き3段キャビネット、専用1Gbps光回線を配備。",
    },
    icon: Building2,
    highlights: [
      { EN: "40+ Dedicated desks with ergonomic high-back mesh chairs", JP: "40席以上の固定専用席・メッシュチェア完備" },
      { EN: "Dedicated 1 Gbps fiber internet with LAN ports and WiFi", JP: "有線LANポートおよびWi-Fi対応の1Gbps専用回線" },
      { EN: "Individual key-locked 3-drawer pedestal unit per desk", JP: "全席に個人用鍵付き3段キャビネット配備" },
    ],
    photoIds: ["workspace-hall", "desk-bilateral", "workspace-clusters"],
  },
  {
    id: "meetings",
    num: "04",
    tag: { EN: "Meeting Rooms", JP: "会議室・面談室" },
    title: { EN: "16-Seat Boardroom & 4-Seat Discussion Room", JP: "16名用 国際会議室＆4名用面談室" },
    lead: {
      EN: "Meeting rooms designed for executive meetings, video conferences, and private interviews. Fitted with national flags, 4K displays, and whiteboards.",
      JP: "役員会議、オンライン会議、採用面接に対応する会議室。多国籍旗、4Kモニター、ホワイトボードを完備。",
    },
    icon: Flag,
    highlights: [
      { EN: "16-Seat Boardroom with 8 international flags and 4K screen", JP: "8カ国旗と4K画面を備えた16名用大会議室" },
      { EN: "4-Seat discussion room with round table and whiteboard", JP: "少人数の面談や討議に適した4名用円卓個室" },
      { EN: "Reservation coordination via member desk", JP: "事前・即時予約対応" },
    ],
    photoIds: ["executive-boardroom", "huddle-suite"],
  },
  {
    id: "dining",
    num: "05",
    tag: { EN: "Cafeteria & Lounge", JP: "食堂・パントリー" },
    title: { EN: "Tasty Food Junction, Coffee Pantry & RO Lounge", JP: "食堂・所内パントリー＆ROラウンジ" },
    lead: {
      EN: "Dining and refreshment facilities within the building. Includes the Tasty Food Junction cafeteria, in-office coffee pantry, and a break lounge with certified RO drinking water.",
      JP: "館内食堂「Tasty Food Junction」、所内コーヒーパントリー、多段RO浄水器を備えた休憩ラウンジ。",
    },
    icon: UtensilsCrossed,
    highlights: [
      { EN: "In-building Tasty Food Junction cafeteria serving hot meals", JP: "温かい食事を提供する館内併設食堂" },
      { EN: "In-office pantry with fresh coffee machine and microwave", JP: "コーヒーマシンや電子レンジを備えた所内パントリー" },
      { EN: "Certified multi-stage RO purified hot & cold drinking water", JP: "冷水・温水が利用可能な多段RO逆浸透膜浄水器" },
    ],
    photoIds: ["tasty-food-junction", "inhouse-cafe", "ro-water-lounge", "tfj-entrance"],
  },
];

type GalleryViewMode = "zones" | "mosaic";
type ZoneFilter = "all" | "building" | "reception" | "workspace" | "meetings" | "dining";

export default function OfficeGalleryPage() {
  const { tx } = useI18n();
  const [viewMode, setViewMode] = useState<GalleryViewMode>("zones");
  const [selectedZone, setSelectedZone] = useState<ZoneFilter>("all");

  // Custom Fullscreen Lightbox State for All Real Photos
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeLightboxPhoto = lightboxIndex !== null ? ALL_REAL_PHOTOS[lightboxIndex] : null;

  // Keybindings for modal
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % ALL_REAL_PHOTOS.length : 0));
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + ALL_REAL_PHOTOS.length) % ALL_REAL_PHOTOS.length : 0
        );
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const openPhotoModal = (photoId: string) => {
    const idx = ALL_REAL_PHOTOS.findIndex((p) => p.id === photoId);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const MOSAIC_FILTERS: { id: ZoneFilter; label: Bilingual; count: number }[] = [
    { id: "all", label: { EN: "All Photos (14)", JP: "全写真 (14枚)" }, count: ALL_REAL_PHOTOS.length },
    {
      id: "building",
      label: { EN: "Building & Courtyard", JP: "外観・中庭" },
      count: ALL_REAL_PHOTOS.filter((p) => p.zone === "building").length,
    },
    {
      id: "reception",
      label: { EN: "Reception & Entry", JP: "受付・入口" },
      count: ALL_REAL_PHOTOS.filter((p) => p.zone === "reception").length,
    },
    {
      id: "workspace",
      label: { EN: "Workstations", JP: "固定執務席" },
      count: ALL_REAL_PHOTOS.filter((p) => p.zone === "workspace").length,
    },
    {
      id: "meetings",
      label: { EN: "Meeting Rooms", JP: "会議室" },
      count: ALL_REAL_PHOTOS.filter((p) => p.zone === "meetings").length,
    },
    {
      id: "dining",
      label: { EN: "Cafeteria & Lounge", JP: "食堂・パントリー" },
      count: ALL_REAL_PHOTOS.filter((p) => p.zone === "dining").length,
    },
  ];

  const mosaicPhotos = ALL_REAL_PHOTOS.filter(
    (p) => selectedZone === "all" || p.zone === selectedZone
  );

  return (
    <>
      <PageHero
        eyebrowKey="nav.blogs"
        titleNode={
          <>
            {tx({ EN: "Office & Facilities", JP: "オフィス写真・" })}
            <br />
            <span className="text-gradient-saffron">
              {tx({ EN: "Cyber Gateway, Hyderabad", JP: "施設ギャラリー" })}
            </span>
          </>
        }
        subtitleKey="hero.subtitle"
      />

      {/* ───────────────────────────────────────────────────────────
          Main Office Gallery Section
         ─────────────────────────────────────────────────────────── */}
      <section className="section-pad bg-ivory-warm dark:bg-[#080d17]">
        <div className="container-jg">
          {/* Header with View Mode Switcher */}
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-crimson/25 dark:border-crimson/40 bg-crimson/10 dark:bg-crimson/20 px-3.5 py-1 font-inter text-[11px] font-bold uppercase tracking-wider text-crimson dark:text-rose-400">
                  <Building2 className="h-3.5 w-3.5" />
                  {tx({ EN: "Office Photography", JP: "オフィス施設写真" })}
                </div>
                <h2
                  className="mt-2 font-serif-jp font-bold text-ink dark:text-white leading-tight"
                  style={{ fontSize: "clamp(1.75rem,3.2vw,2.3rem)" }}
                >
                  {tx({
                    EN: "J-Gate Office Facilities",
                    JP: "オフィス設備と環境のご案内",
                  })}
                </h2>
                <p className="mt-1 font-inter text-[13.5px] text-slate dark:text-slate-300 max-w-2xl">
                  {tx({
                    EN: "Official photography of J-Gate workspaces, meeting rooms, and amenities at Cyber Gateway Phase 2, Hitech City, Hyderabad.",
                    JP: "ハイデラバード・ハイテックシティ Phase 2のCyber Gateway内にあるオフィスの写真と設備仕様。",
                  })}
                </p>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1.5 rounded-2xl bg-white dark:bg-[#101a2c] border border-slate-200 dark:border-white/10 p-1.5 shadow-sm shrink-0">
                <button
                  onClick={() => setViewMode("zones")}
                  className={cn(
                    "flex items-center gap-1.5 rounded-xl px-4 py-2 font-inter text-[12.5px] font-semibold transition-all duration-300",
                    viewMode === "zones"
                      ? "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-md shadow-crimson/30"
                      : "text-slate dark:text-slate-300 hover:text-ink dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  )}
                >
                  <Layers className="h-4 w-4 text-saffron" />
                  {tx({ EN: "By Area", JP: "エリア別" })}
                </button>
                <button
                  onClick={() => setViewMode("mosaic")}
                  className={cn(
                    "flex items-center gap-1.5 rounded-xl px-4 py-2 font-inter text-[12.5px] font-semibold transition-all duration-300",
                    viewMode === "mosaic"
                      ? "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-md shadow-crimson/30"
                      : "text-slate dark:text-slate-300 hover:text-ink dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5"
                  )}
                >
                  <LayoutGrid className="h-4 w-4 text-saffron" />
                  {tx({ EN: "Grid View (14)", JP: "写真一覧 (14枚)" })}
                </button>
              </div>
            </div>
          </Reveal>

          {/* Clean Metrics Summary */}
          <Reveal delay={40}>
            <div className="my-5 sm:my-8 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl mx-auto">
              <div className="luxury-light-card card-sheen gold-hairline rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-3 sm:p-5 text-center shadow-md hover:shadow-xl transition-all">
                <span className="block font-serif-jp text-2xl sm:text-3xl font-bold text-crimson dark:text-rose-400">40+</span>
                <span className="mt-0.5 sm:mt-1 block font-inter text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                  {tx({ EN: "Dedicated Desks", JP: "固定専用デスク" })}
                </span>
              </div>
              <div className="luxury-light-card card-sheen gold-hairline rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-3 sm:p-5 text-center shadow-md hover:shadow-xl transition-all">
                <span className="block font-serif-jp text-2xl sm:text-3xl font-bold text-saffron-dark dark:text-amber-300">16 & 4-Pax</span>
                <span className="mt-0.5 sm:mt-1 block font-inter text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                  {tx({ EN: "Boardroom & Meeting", JP: "国際会議室＆面談室" })}
                </span>
              </div>
              <div className="luxury-light-card card-sheen gold-hairline rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-3 sm:p-5 text-center shadow-md hover:shadow-xl transition-all">
                <span className="block font-serif-jp text-2xl sm:text-3xl font-bold text-crimson dark:text-rose-400">1 Gbps</span>
                <span className="mt-0.5 sm:mt-1 block font-inter text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                  {tx({ EN: "Dedicated Fiber Line", JP: "専用光回線" })}
                </span>
              </div>
              <div className="luxury-light-card card-sheen gold-hairline rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-3 sm:p-5 text-center shadow-md hover:shadow-xl transition-all">
                <span className="block font-serif-jp text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">24/7</span>
                <span className="mt-0.5 sm:mt-1 block font-inter text-[11px] sm:text-[12px] font-semibold text-slate-700 dark:text-slate-300">
                  {tx({ EN: "Keycard Access", JP: "入退館管理・警備" })}
                </span>
              </div>
            </div>
          </Reveal>

          {/* ══════════════════════════════════════════════════════════
              MODE A: ZONE-BY-ZONE WALKTHROUGH (5 ZONES)
             ══════════════════════════════════════════════════════════ */}
          {viewMode === "zones" && (
            <div className="space-y-6 sm:space-y-12 mt-6 sm:mt-10">
              {ZONES.map((zone, zIdx) => {
                const ZoneIcon = zone.icon;
                const zonePhotos = ALL_REAL_PHOTOS.filter((p) => p.zone === zone.id);

                return (
                  <Reveal key={zone.id} delay={zIdx * 50}>
                    <div className="luxury-light-card card-sheen rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#101a2c] p-4 sm:p-7 lg:p-9 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                      {/* Zone Header Strip */}
                      <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 items-start pb-4 sm:pb-6 border-b border-slate-100 dark:border-white/10">
                        <div className="lg:col-span-8">
                          <div className="flex items-center gap-2.5 sm:gap-3">
                            <span className="font-serif-jp text-xl sm:text-3xl font-bold text-crimson dark:text-rose-400">
                              {zone.num}
                            </span>
                            <div className="h-4 sm:h-5 w-px bg-slate-200 dark:bg-white/10" />
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-white/5 px-2 sm:px-2.5 py-0.5 sm:py-1 font-inter text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10">
                              <ZoneIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-crimson dark:text-rose-400" />
                              {tx(zone.tag)}
                            </span>
                          </div>
                          <h3 className="mt-2 sm:mt-2.5 font-serif-jp text-lg sm:text-2xl font-bold text-ink dark:text-white leading-snug">
                            {tx(zone.title)}
                          </h3>
                          <p className="mt-1.5 sm:mt-2 font-inter text-[12px] sm:text-[13px] leading-relaxed text-slate dark:text-slate-300 max-w-3xl">
                            {tx(zone.lead)}
                          </p>
                        </div>

                        {/* Key Highlights */}
                        <div className="lg:col-span-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                          <h4 className="font-inter text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 sm:mb-1.5">
                            {tx({ EN: "Facilities & Specs", JP: "主な設備" })}
                          </h4>
                          {zone.highlights.map((h, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-1.5 sm:gap-2 text-[11.5px] sm:text-[12px] font-inter text-slate-700 dark:text-slate-300 leading-snug"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success dark:text-emerald-400 mt-0.5" />
                              <span>{tx(h)}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Zone Photos Grid */}
                      <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {zonePhotos.map((photo) => (
                          <div
                            key={photo.id}
                            onClick={() => openPhotoModal(photo.id)}
                            className="lift-card card-sheen group cursor-pointer rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#142036] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                          >
                            {/* Photo Canvas */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                              <img
                                src={photo.src}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                loading="lazy"
                              />
                              <div
                                className="absolute inset-0 z-10 opacity-30 group-hover:opacity-10 transition-opacity duration-300"
                                style={{
                                  background:
                                    "linear-gradient(to top, rgba(8,15,26,0.95) 0%, transparent 60%)",
                                }}
                              />

                              {/* Top Floating Badge */}
                              <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 rounded-lg bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[10.5px] font-semibold text-saffron border border-white/10">
                                {tx(photo.badge)}
                              </span>

                              {/* Click to Expand Icon */}
                              <span className="absolute bottom-3 right-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-crimson/90 text-white shadow-md group-hover:scale-110 transition-transform duration-200">
                                <Maximize2 className="h-3.5 w-3.5" />
                              </span>
                            </div>

                            {/* Photo Metadata Card */}
                            <div className="p-4 bg-white dark:bg-[#142036] flex-1 flex flex-col justify-between border-t border-slate-100 dark:border-white/10">
                              <div>
                                <h4 className="font-serif-jp text-[14.5px] font-bold text-ink dark:text-white group-hover:text-crimson dark:group-hover:text-rose-400 transition-colors leading-snug">
                                  {tx(photo.title)}
                                </h4>
                                <p className="mt-1 font-inter text-[12px] text-slate dark:text-slate-300 line-clamp-2 leading-relaxed">
                                  {tx(photo.subtitle)}
                                </p>
                              </div>

                              {/* Specs */}
                              <div className="mt-3 grid grid-cols-2 gap-1.5 pt-2.5 border-t border-slate-100 dark:border-white/10">
                                {photo.specs.slice(0, 2).map((sp, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="bg-slate-50 dark:bg-white/5 rounded-lg p-2 text-[11px] font-inter"
                                  >
                                    <span className="block text-slate-400 font-medium uppercase text-[9.5px]">
                                      {tx(sp.label)}
                                    </span>
                                    <span className="block font-bold text-ink dark:text-white truncate mt-0.5">
                                      {tx(sp.val)}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              MODE B: FULL 14 PHOTOS GRID WITH FILTERS
             ══════════════════════════════════════════════════════════ */}
          {viewMode === "mosaic" && (
            <div className="mt-8">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
                {MOSAIC_FILTERS.map((cat) => {
                  const isSelected = selectedZone === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedZone(cat.id)}
                      className={cn(
                        "flex items-center gap-2 rounded-xl px-4 py-2 font-inter text-[12.5px] font-semibold transition-all duration-200 shadow-sm",
                        isSelected
                          ? "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-md shadow-crimson/25 scale-105"
                          : "bg-white dark:bg-[#101a2c] text-slate dark:text-slate-300 hover:bg-white/90 dark:hover:bg-white/10 hover:text-ink dark:hover:text-white border border-slate-200 dark:border-white/10"
                      )}
                    >
                      <span>{tx(cat.label)}</span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10.5px] font-bold font-mono",
                          isSelected ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                        )}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Grid 3-Column */}
              <div className="grid gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {mosaicPhotos.map((photo, i) => (
                  <Reveal key={photo.id} delay={(i % 3) * 40}>
                    <div
                      onClick={() => openPhotoModal(photo.id)}
                      className="lift-card card-sheen group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/10 bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500 h-64 sm:h-80"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark Gradient Overlay */}
                      <div
                        className="absolute inset-0 z-10 transition-opacity duration-300"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(8,15,26,0.94) 0%, rgba(8,15,26,0.35) 45%, transparent 75%)",
                        }}
                      />

                      {/* Top Badge */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 z-20 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg bg-white/95 dark:bg-[#101a2c]/95 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 font-inter text-[9.5px] sm:text-[10.5px] font-bold uppercase text-ink dark:text-white shadow-sm border border-white/60 dark:border-white/10">
                          <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                          {tx(photo.badge)}
                        </span>
                        <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </span>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 inset-x-0 z-20 p-3.5 sm:p-5">
                        <span className="text-[9.5px] sm:text-[10px] font-inter uppercase font-bold text-saffron tracking-wider">
                          Zone {photo.zoneNumber} · {tx(photo.location)}
                        </span>
                        <h3 className="mt-0.5 sm:mt-1 font-serif-jp text-sm sm:text-base font-bold text-white group-hover:text-saffron transition-colors leading-snug">
                          {tx(photo.title)}
                        </h3>
                        <p className="mt-0.5 sm:mt-1 font-inter text-[11px] sm:text-[11.5px] text-mist/90 line-clamp-2 leading-relaxed">
                          {tx(photo.subtitle)}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Subtle Location Footer */}
          <Reveal delay={60}>
            <div className="mt-8 sm:mt-12 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#101a2c] p-3.5 sm:p-5 text-center shadow-sm max-w-3xl mx-auto flex items-center justify-center gap-2.5 sm:gap-3">
              <MapPin className="h-4 w-4 text-crimson shrink-0" />
              <p className="font-inter text-[12px] sm:text-[13px] text-slate dark:text-slate-300">
                <strong className="text-ink dark:text-white">J-Gate Office:</strong> 2nd Floor, Block B, Wing-1, Cyber Gateway, Phase 2, Hitech City, Hyderabad, Telangana 500081
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FULLSCREEN LIGHTBOX MODAL (CLEAN & NON-SALESY)
         ═══════════════════════════════════════════════════════════════ */}
      {activeLightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container */}
          <div
            className="relative flex flex-col lg:flex-row max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white hover:bg-crimson hover:scale-110 transition-all"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Main Image View */}
            <div className="relative lg:w-7/12 flex items-center justify-center bg-black/80 overflow-hidden">
              <img
                src={activeLightboxPhoto.src}
                alt={activeLightboxPhoto.alt}
                className="max-h-[55vh] lg:max-h-[80vh] w-full object-contain"
              />

              {/* Prev / Next Nav Buttons */}
              <button
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex! - 1 + ALL_REAL_PHOTOS.length) % ALL_REAL_PHOTOS.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-crimson hover:scale-110 transition-all"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  setLightboxIndex((lightboxIndex! + 1) % ALL_REAL_PHOTOS.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-crimson hover:scale-110 transition-all"
                aria-label="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Photo Counter Overlay */}
              <span className="absolute bottom-3 left-3 rounded-md bg-black/70 px-2.5 py-1 font-mono text-[11px] font-bold text-white border border-white/10">
                {lightboxIndex! + 1} / {ALL_REAL_PHOTOS.length}
              </span>
            </div>

            {/* Sidebar Details */}
            <div className="lg:w-5/12 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto bg-slate-900 border-t lg:border-t-0 lg:border-l border-white/10 text-white">
              <div>
                {/* Zone & Category Badge */}
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-crimson px-3 py-0.5 font-inter text-[10.5px] font-bold uppercase tracking-wider text-white">
                    Zone {activeLightboxPhoto.zoneNumber}
                  </span>
                  <span className="inline-block rounded-full bg-white/10 px-3 py-0.5 font-inter text-[10.5px] font-medium text-saffron">
                    {tx(activeLightboxPhoto.badge)}
                  </span>
                </div>

                {/* Title & Location */}
                <h3 className="mt-3.5 font-serif-jp text-lg sm:text-xl font-bold text-white leading-snug">
                  {tx(activeLightboxPhoto.title)}
                </h3>
                <p className="mt-1 font-inter text-[11.5px] text-slate-400">
                  📍 {tx(activeLightboxPhoto.location)}
                </p>

                {/* Factual Description */}
                <p className="mt-3 font-inter text-[12.5px] leading-relaxed text-slate-300">
                  {tx(activeLightboxPhoto.subtitle)}
                </p>

                {/* Technical Specs 2x2 Grid */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <h4 className="font-inter text-[10.5px] font-bold uppercase tracking-wider text-saffron mb-2.5">
                    {tx({ EN: "Specifications", JP: "仕様" })}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {activeLightboxPhoto.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-white/[0.05] border border-white/10 p-2"
                      >
                        <span className="block font-inter text-[9.5px] font-medium text-slate-400 uppercase">
                          {tx(spec.label)}
                        </span>
                        <span className="block font-inter text-[12px] font-semibold text-white mt-0.5 truncate">
                          {tx(spec.val)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Hint */}
              <div className="mt-5 pt-4 border-t border-white/10 text-center">
                <span className="font-inter text-[11px] text-slate-400">
                  {tx({ EN: "Use ← / → keys to navigate · ESC to close", JP: "左右キーで移動 · ESCで閉じる" })}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
