import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/lib/i18n";
import { BrochureProvider } from "@/lib/brochure-context";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "J-Gate | Bridging Japan & India — Talent, Training, Business",
  description:
    "J-Gate bridges global and Indian talent with Japan's enterprise opportunities through recruitment, language training, and bilateral business consulting. Operated by Indobox India Pvt. Ltd.",
  keywords: [
    "J-Gate",
    "Jゲート",
    "Japan India talent",
    "Japan India recruitment",
    "JLPT training",
    "NAT preparation",
    "Japan India business",
    "Indobox India",
    "Cyber Gateway Hyderabad",
  ],
  authors: [{ name: "Indobox India Private Limited" }],
  openGraph: {
    title: "J-Gate | Bridging Japan & India",
    description: "Talent, training, and bilateral business consulting for the Japan-India corridor.",
    siteName: "J-Gate",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <I18nProvider>
          <BrochureProvider>
            {children}
          </BrochureProvider>
        </I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}
