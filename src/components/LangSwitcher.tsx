"use client";

import { locales, localeNames, localeHref, type Locale } from "@/i18n/config";
import FlagIcon from "@/components/FlagIcon";

// 手動の言語スイッチャー。選択を Cookie に記憶し、次回のルート（/）訪問で尊重する。
// 各ロケールは独立した静的HTMLなので通常の <a> でフルナビゲーションする。
export default function LangSwitcher({ current }: { current: Locale }) {
  function remember(loc: Locale) {
    // 1年間保持。SameSite=Lax で通常遷移に付与。
    // 全体状態ではなくブラウザの Cookie への副作用（クリック時のみ）なので immutability 対象外。
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `fc_lang=${loc};path=/;max-age=31536000;samesite=lax`;
  }

  return (
    <nav aria-label="Language" className="flex items-center gap-0.5">
      {locales.map((loc) => {
        const active = loc === current;
        return (
          <a
            key={loc}
            href={localeHref(loc)}
            hrefLang={loc}
            onClick={() => remember(loc)}
            aria-current={active ? "true" : undefined}
            className="flex items-center gap-1.5 px-1.5 py-1 rounded-md text-[12px] font-bold transition-colors"
            style={{ color: active ? "#F2B24C" : "#8A82A0", opacity: active ? 1 : 0.85 }}
          >
            <FlagIcon code={loc} />
            <span className="hidden min-[420px]:inline">{localeNames[loc]}</span>
          </a>
        );
      })}
    </nav>
  );
}
