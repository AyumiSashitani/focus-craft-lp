import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import RevealManager from "@/components/RevealManager";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Cloudflare Web Analytics のビーコントークン。
// Cloudflare ダッシュボードで発行し、ビルド環境変数 NEXT_PUBLIC_CF_BEACON_TOKEN に設定する。
// 未設定ならスクリプトは読み込まれない（ローカル開発時など）。
const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

// OGP などの絶対URLの基準。優先順位:
// 1. NEXT_PUBLIC_SITE_URL（独自ドメイン確定後に Pages の環境変数で設定）
// 2. CF_PAGES_URL（Cloudflare Pages がビルド時に渡す .pages.dev の正規URL）
// 3. 既定（ローカルビルド用フォールバック）
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.CF_PAGES_URL ??
  "https://focuscraft.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Focus Craft — 集中が、積み上がる。",
  description:
    "ポモドーロ × cozy 育成。セッションをこなすほど相棒と作業部屋が育つ、新しい集中体験アプリ。",
  openGraph: {
    title: "Focus Craft — 集中が、積み上がる。",
    description:
      "ポモドーロ × cozy 育成。セッションをこなすほど相棒と作業部屋が育つ、新しい集中体験アプリ。",
    url: siteUrl,
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
      <body className="min-h-full flex flex-col">
        {children}
        <RevealManager />
        {cfBeaconToken && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
          />
        )}
      </body>
    </html>
  );
}
