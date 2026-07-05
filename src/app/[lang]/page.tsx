import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Landing from "@/components/Landing";
import { dictionaries } from "@/i18n/dictionaries";
import {
  nonDefaultLocales,
  localeHref,
  hreflangAlternates,
  type Locale,
} from "@/i18n/config";

// /en, /zh, /ko を静的生成（/ は root の page.tsx が担当）。
export function generateStaticParams() {
  return nonDefaultLocales.map((lang) => ({ lang }));
}

function resolveLocale(lang: string): Locale | null {
  return (nonDefaultLocales as string[]).includes(lang) ? (lang as Locale) : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  if (!locale) return {};
  const d = dictionaries[locale];
  const url = localeHref(locale);

  return {
    title: d.meta.title,
    description: d.meta.description,
    alternates: { canonical: url, languages: hreflangAlternates() },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url,
      siteName: "Focus Craft",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
      locale: d.meta.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.twDescription,
      images: ["/og.png"],
    },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  if (!locale) notFound();
  return <Landing dict={dictionaries[locale]} locale={locale} />;
}
