import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的サイトとして書き出す（out/ に HTML/CSS/JS を生成）。
  // Cloudflare Pages はこの out/ をそのまま配信する。
  output: "export",
};

export default nextConfig;
