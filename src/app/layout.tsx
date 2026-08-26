import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/lib/i18n";
import { BrochureProvider } from "@/lib/brochure-context";
import { LightboxProvider } from "@/components/jgate/photo";
import { Navbar } from "@/components/jgate/navbar";
import { Footer } from "@/components/jgate/footer";

// Use Inter from Google (it loads fine), fallback for JP fonts with system fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Fallback: use system serif/sans fonts instead of Google-hosted Noto JP
// which times out in this environment. CSS variables still defined for compatibility.
const notoSerifJP = {
  variable: "--font-noto-serif-jp",
};
const notoSansJP = {
  variable: "--font-noto-sans-jp",
};

export const metadata: Metadata = {
  title: "J-Gate | Bridging Japan & India — Talent, Training, Business",
  description:
    "J-Gate bridges global and Indian talent with Japan's enterprise opportunities through dedicated workspaces, Japan Desk support, and bilateral business consulting. Operated by Indobox India Pvt. Ltd.",
  keywords: [
    "J-Gate",
    "Jゲート",
    "Japan India talent",
    "Japan India coworking",
    
    
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
            <LightboxProvider>
              <div className="flex min-h-screen flex-col bg-ivory">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </LightboxProvider>
          </BrochureProvider>
        </I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}
