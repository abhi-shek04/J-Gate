import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080f1a",
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
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <I18nProvider>
            <BrochureProvider>
              <LightboxProvider>
                <div className="flex min-h-screen flex-col bg-ivory dark:bg-[#080f1a] transition-colors duration-300">
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
