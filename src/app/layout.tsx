import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://focuscraft.app"),
  title: "Focus Craft — 集中が、積み上がる。",
  description:
    "ポモドーロ × cozy 育成。セッションをこなすほど相棒と作業部屋が育つ、新しい集中体験アプリ。",
  openGraph: {
    title: "Focus Craft — 集中が、積み上がる。",
    description:
      "ポモドーロ × cozy 育成。セッションをこなすほど相棒と作業部屋が育つ、新しい集中体験アプリ。",
    url: "https://focuscraft.app",
    siteName: "Focus Craft",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Craft — 集中が、積み上がる。",
    description: "ポモドーロ × cozy 育成アプリ。近日公開。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
