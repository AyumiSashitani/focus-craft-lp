// 対応ロケールの一元定義。ルート（/）は日本語で、en/zh/ko はサブパス（/en 等）。
export const locales = ["ja", "en", "zh", "ko"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

// generateStaticParams 用。/ は root の page.tsx が受け持つので [lang] は非デフォルトのみ。
export const nonDefaultLocales = locales.filter((l) => l !== defaultLocale);

// 言語スイッチャーの表示名（コンパクトに）。
export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "EN",
  zh: "中文",
  ko: "한국어",
};

// <html lang> / hreflang 用の言語コード。
export const htmlLang: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  zh: "zh-Hans",
  ko: "ko",
};

// スペースで単語を区切らない言語（true のとき見出しを inline-block チャンクで組む）。
export const isCjk: Record<Locale, boolean> = {
  ja: true,
  en: false,
  zh: true,
  ko: false,
};

// ロケール → URL。ja はルート。
export function localeHref(loc: Locale): string {
  return loc === defaultLocale ? "/" : `/${loc}`;
}

// メタデータの alternates.languages（hreflang）。x-default はルート（日本語）。
export function hreflangAlternates(): Record<string, string> {
  const langs: Record<string, string> = {};
  for (const l of locales) langs[htmlLang[l]] = localeHref(l);
  langs["x-default"] = localeHref(defaultLocale);
  return langs;
}
