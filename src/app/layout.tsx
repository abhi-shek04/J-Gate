import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "J-Gate | Where Japan Meets India — Hyderabad's Premier Japan-India Working Hub",
  description:
    "J-Gate is Hyderabad's dedicated working hub for Japanese businesses entering India. Powered by Indobox India Pvt. Ltd. at Cyber Gateway. Where Japan Meets India. Where Vision Meets Opportunity.",
  keywords: [
    "J-Gate",
    "Jゲート",
    "Japan India business",
    "Hyderabad co-working",
    "Cyber Gateway",
    "Indobox India",
    "JETRO",
    "T-Hub",
    "Japan India collaboration",
    "Omotenashi",
  ],
  authors: [{ name: "Indobox India Private Limited" }],
  openGraph: {
    title: "J-Gate | Where Japan Meets India",
    description:
      "Hyderabad's premier working hub for Japan-India business collaboration. Powered by Indobox India Pvt. Ltd.",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
