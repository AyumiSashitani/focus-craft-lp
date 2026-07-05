import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Script from "next/script";
import RevealManager from "@/components/RevealManager";
import { hreflangAlternates } from "@/i18n/config";
import "./globals.css";

// 丸み・親しみのある日本語対応フォント（cozy 育成のトーンに合わせる）。
// CJK のグリフが大きいため preload はオフにして初回ビルド/転送を軽くする。
const rounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

// Cloudflare Web Analytics のビーコントークン。
// このトークンは公開情報（クライアントのHTMLに出る）なので既定値として埋め込む。
// 別環境などで差し替えたい場合は NEXT_PUBLIC_CF_BEACON_TOKEN で上書きできる。
const cfBeaconToken =
  process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ?? "befc30d228904b329e9ca51da8c05b8f";

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
  title: "Focus Craft — 集中が積み上がる。",
  description:
    "数字に追い立てられない、心地よいポモドーロタイマー。集中するほど、相棒とあなたの作業部屋が育っていきます。",
  // ルート（/）は日本語。各言語版への hreflang を明示する。
  alternates: { canonical: "/", languages: hreflangAlternates() },
  openGraph: {
    title: "Focus Craft — 集中が積み上がる。",
    description:
      "数字に追い立てられない、心地よいポモドーロタイマー。集中するほど、相棒とあなたの作業部屋が育っていきます。",
    url: siteUrl,
    siteName: "Focus Craft",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Craft — 集中が積み上がる。",
    description: "相棒と育てる、心地よいポモドーロタイマー。",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${rounded.variable} h-full`}>
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
