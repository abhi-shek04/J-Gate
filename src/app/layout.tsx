import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/lib/i18n";
import { BrochureProvider } from "@/lib/brochure-context";
import { LightboxProvider } from "@/components/jgate/photo";
import { Navbar } from "@/components/jgate/navbar";
import { Footer } from "@/components/jgate/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifJP = {
  variable: "--font-noto-serif-jp",
};

const notoSansJP = {
  variable: "--font-noto-sans-jp",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080f1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.j-gate.work"),
  applicationName: "J-Gate",
  title: {
    default: "J-Gate (J Gate) | Dedicated Working Hub for Japanese Companies in India",
    template: "%s | J-Gate",
  },
  description:
    "J-Gate (J Gate) is India's first dedicated working hub for Japanese enterprises in Hyderabad. Dedicated desks, private cabins, resident bilingual Japan Desk support, company incorporation, and bilateral IT talent bridge. Operated by Indobox India Private Limited.",
  keywords: [
    "J-Gate",
    "J Gate",
    "jgate",
    "j-gate",
    "J-Gate India",
    "J Gate India",
    "J-Gate Hyderabad",
    "J Gate Hyderabad",
    "j-gate.work",
    "Jゲート",
    "Jゲート インド",
    "Indobox India",
    "Indobox India Private Limited",
    "Japanese Working Hub India",
    "Working Hub for Japanese Companies",
    "Japan Desk Hyderabad",
    "Japan India Coworking",
    "Dedicated Desks Hyderabad",
    "Private Cabins Cyber Gateway",
    "Company Setup in India for Japanese Companies",
    "IT talent India Japan",
    "インド進出",
    "ハイデラバード",
    "日本企業専用ワーキングハブ",
    "インド初の日本企業専用ワーキングハブ",
    "日印ビジネスハブ",
    "Cyber Gateway Madhapur",
  ],
  authors: [{ name: "Indobox India Private Limited", url: "https://www.j-gate.work" }],
  creator: "Indobox India Private Limited",
  publisher: "Indobox India Private Limited",
  alternates: {
    canonical: "https://www.j-gate.work",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "J-Gate (J Gate) | Dedicated Working Hub for Japanese Companies in India",
    description:
      "India's first dedicated working hub in Hyderabad with resident Japan Desk, private cabins, and bilateral business bridge. Operated by Indobox India.",
    url: "https://www.j-gate.work",
    siteName: "J-Gate",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/jgate-logo-official.png",
        width: 1200,
        height: 630,
        alt: "J-Gate Working Hub for Japanese Companies in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J-Gate (J Gate) | Dedicated Working Hub for Japanese Companies in India",
    description:
      "India's first dedicated working hub in Hyderabad for Japanese enterprises.",
    images: ["/jgate-logo-official.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "14bc0jEXdo7iuqbedcUel5C5a_kzO-_uhVZcemNjmuk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.j-gate.work/#website",
      url: "https://www.j-gate.work",
      name: "J-Gate",
      alternateName: [
        "J Gate",
        "JGate",
        "j-gate",
        "J-Gate India",
        "J Gate India",
        "J-Gate Hyderabad",
        "J Gate Hyderabad",
        "Jゲート",
      ],
      description:
        "Official website of J-Gate: India's first dedicated working hub for Japanese enterprises in Hyderabad.",
      publisher: {
        "@id": "https://www.j-gate.work/#organization",
      },
      inLanguage: ["ja", "en"],
    },
    {
      "@type": "Organization",
      "@id": "https://www.j-gate.work/#organization",
      name: "J-Gate",
      alternateName: [
        "J Gate",
        "JGate",
        "j-gate",
        "J-Gate India",
        "J Gate India",
        "J-Gate Hyderabad",
        "Jゲート",
      ],
      legalName: "Indobox India Private Limited",
      url: "https://www.j-gate.work",
      logo: "https://www.j-gate.work/jgate-logo-official.png",
      sameAs: [
        "https://www.linkedin.com/company/indobox-inc",
        "https://www.instagram.com/indobox.inc",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@indobox.co.jp",
        contactType: "customer support",
        availableLanguage: ["English", "Japanese", "Hindi"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.j-gate.work/#localbusiness",
      name: "J-Gate Working Hub",
      alternateName: ["J-Gate", "J Gate", "JGate", "J-Gate Hyderabad"],
      image: "https://www.j-gate.work/jgate-logo-official.png",
      url: "https://www.j-gate.work",
      email: "contact@indobox.co.jp",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "2nd Floor, Genesys Info X, Block B, Wing 1, Cyber Gateway, Madhapur",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500081",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.4485,
        longitude: 78.3752,
      },
      description:
        "India's first dedicated working hub for Japanese enterprises in Hyderabad. Dedicated desks, private cabins, resident bilingual Japan Desk support, and full office infrastructure.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="14bc0jEXdo7iuqbedcUel5C5a_kzO-_uhVZcemNjmuk"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <I18nProvider>
            <BrochureProvider>
              <LightboxProvider>
                <div className="flex min-h-screen flex-col bg-ivory dark:bg-black transition-colors duration-300">
                  <Navbar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </LightboxProvider>
            </BrochureProvider>
          </I18nProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
