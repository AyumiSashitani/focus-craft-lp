/* ============================================================
   Focus Craft — cozy 育成 LP（twilight / 実アプリと地続き）
   実画面は store_assets/raw から public/screens/ に配置。
   装飾は「夜と灯り」の言語に統一：星・火の粉・キャンドルの炎。
   グラデ文字・浮遊モックアップ・ピルバッジ等のテンプレ語彙は使わない。

   多言語対応：表示テキストは src/i18n の辞書（dict）から流し込む。
   画像（実画面・背景）は言語共通で、キャプションのみ翻訳する。
   ============================================================ */
import Link from "next/link";
import { isCjk, htmlLang, type Locale } from "@/i18n/config";
import type { Dict, Seg } from "@/i18n/types";
import LangSwitcher from "@/components/LangSwitcher";

/* ---------------- リッチテキスト（ハニー強調・レスポンシブ改行） ---------------- */
// CJK（ja/zh）はテキスト片を inline-block チャンクにして語の途中改行を防ぐ。
// 空白で区切る言語（en/ko）は素のテキストとして自然に流す。
function RichText({ segs, cjk }: { segs: Seg[]; cjk: boolean }) {
  return (
    <>
      {segs.map((s, i) => {
        if (typeof s === "string") {
          return cjk ? (
            <span key={i} className="inline-block">
              {s}
            </span>
          ) : (
            <span key={i}>{s}</span>
          );
        }
        if ("honey" in s) {
          return (
            <span
              key={i}
              className={cjk ? "text-honey inline-block" : "text-honey"}
            >
              {s.honey}
            </span>
          );
        }
        return (
          <br
            key={i}
            className={s.br === "mobile" ? "md:hidden" : "hidden md:block"}
          />
        );
      })}
    </>
  );
}

/* ---------------- ブランドマーク（実アプリのアイコン＝キャンドル） ---------------- */
function AppIcon({
  size = 40,
  className = "",
  alt = "Focus Craft",
}: {
  size?: number;
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/icon.png"
      alt={alt}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, borderRadius: size * 0.24, display: "block" }}
    />
  );
}

/* ---------------- 灯り（キャンドルの炎）— ページ共通のマーカー ---------------- */
function Flame({ accent, small = false }: { accent: string; small?: boolean }) {
  return (
    <span
      aria-hidden
      className={small ? "flame flame-xs" : "flame"}
      style={{ ["--accent" as string]: accent }}
    />
  );
}

/* ---------------- セクションの道しるべ（小さな見出しラベル） ---------------- */
function Eyebrow({
  children,
  color = "#F2B24C",
  trail = false,
}: {
  children: React.ReactNode;
  color?: string;
  trail?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] mb-4"
      style={{ color }}
    >
      <span
        className="w-4 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
      />
      {children}
      {trail && (
        <span
          className="w-4 h-px"
          style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        />
      )}
    </span>
  );
}

/* ---------------- 立ちのぼる火の粉 ---------------- */
type EmberSpec = { left: string; dur: string; delay: string; drift: string };

function Embers({ list }: { list: EmberSpec[] }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {list.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: e.left,
            ["--dur" as string]: e.dur,
            ["--delay" as string]: e.delay,
            ["--drift" as string]: e.drift,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------- 実画面ショーケース（実スクショ主役） ---------------- */
function Showcase({
  img,
  alt,
  kicker,
  accent,
  title,
  body,
  points,
  cjk,
  flip = false,
}: {
  img: string;
  alt: string;
  kicker: string;
  accent: string;
  title: Seg[];
  body: string;
  points: string[];
  cjk: boolean;
  flip?: boolean;
}) {
  return (
    <div data-reveal className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div className={flip ? "md:order-2" : ""}>
        <div className="device mx-auto" style={{ maxWidth: 288 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={alt} width={1179} height={2556} loading="lazy" decoding="async" />
        </div>
      </div>
      <div className={`text-center md:text-left ${flip ? "md:order-1" : ""}`}>
        <Eyebrow color={accent} trail>
          {kicker}
        </Eyebrow>
        <h3
          className="text-2xl md:text-[28px] font-extrabold leading-snug tracking-tight mb-4"
          style={{ color: "#F1ECFB" }}
        >
          <RichText segs={title} cjk={cjk} />
        </h3>
        <p className="text-sm md:text-[15px] leading-loose mb-6" style={{ color: "#A79FC0" }}>
          {body}
        </p>
        <ul className="flex flex-col gap-2.5">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start justify-center md:justify-start gap-3 text-sm text-left"
              style={{ color: "#CFC7E4" }}
            >
              <Flame accent={accent} small />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- 言語共通の装飾・配色設定（テキストは辞書から） ---------------- */

// こだわり4点の灯りの色（寒色→暖色へ）。テキストは dict.perks.items と index で対応。
const perkAccents = ["#B9A9E8", "#8FB08A", "#F2B24C", "#DE7356"];

// 使い方3ステップの灯りの色（進むほどあたたかく）。dict.steps.items と対応。
const stepAccents = ["#B9A9E8", "#8FB08A", "#F2B24C"];

// 実画面ショーケース（実スクショ・配色・反転）。dict.showcaseSection.items と対応。
const showcaseConfig = [
  { img: "/screens/world.png", accent: "#B9A9E8", flip: false },
  { img: "/screens/stats.png", accent: "#F2B24C", flip: true },
];

// 背景（外の世界）バリエーション。dict.env.labels と index で対応。
const environments = [
  { img: "sunset", accent: "#F2A65E" },
  { img: "nature", accent: "#8FB08A" },
  { img: "ocean", accent: "#4FA3C7" },
  { img: "aurora", accent: "#6FD3B0" },
  { img: "space", accent: "#8B7FD4" },
  { img: "cyberpunk", accent: "#E06AC2" },
  { img: "cozy", accent: "#F2B24C" },
];

// 火の粉の配置（位置・速度をずらして自然に）
const heroEmbers: EmberSpec[] = [
  { left: "-5%", dur: "8s", delay: "0.5s", drift: "-10px" },
  { left: "10%", dur: "7s", delay: "2.8s", drift: "8px" },
  { left: "88%", dur: "9s", delay: "1.2s", drift: "10px" },
  { left: "103%", dur: "7.5s", delay: "4s", drift: "-8px" },
];
const panelEmbers: EmberSpec[] = [
  { left: "18%", dur: "7.5s", delay: "0s", drift: "10px" },
  { left: "34%", dur: "9s", delay: "1.6s", drift: "-8px" },
  { left: "52%", dur: "6.5s", delay: "3.2s", drift: "6px" },
  { left: "71%", dur: "8.5s", delay: "0.8s", drift: "-12px" },
  { left: "86%", dur: "7s", delay: "2.4s", drift: "9px" },
];
const ctaEmbers: EmberSpec[] = [
  { left: "16%", dur: "8s", delay: "0.8s", drift: "8px" },
  { left: "50%", dur: "9.5s", delay: "3s", drift: "-10px" },
  { left: "82%", dur: "7.5s", delay: "1.8s", drift: "10px" },
];

export default function Landing({ dict, locale }: { dict: Dict; locale: Locale }) {
  const cjk = isCjk[locale];

  return (
    <div
      className="relative flex flex-col min-h-screen overflow-x-hidden grain"
      style={{ backgroundColor: "#14111F" }}
    >
      {/* 非日本語ページでは <html lang> を実ロケールに補正（root layout は既定 ja）。 */}
      {locale !== "ja" && (
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=${JSON.stringify(htmlLang[locale])}`,
          }}
        />
      )}

      {/* 夜空（星）と地平の灯り — ページ全体をひとつの夜に */}
      <div aria-hidden className="night-sky" />

      {/* Nav */}
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3.5 md:px-12"
        style={{
          background: "rgba(20,17,31,0.72)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(185,169,232,0.10)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <AppIcon size={32} alt={dict.iconAlt} />
          <span className="font-extrabold tracking-tight text-[16px]" style={{ color: "#F1ECFB" }}>
            Focus Craft
          </span>
        </div>
        <LangSwitcher current={locale} />
      </nav>

      {/* Hero — 夜の手元。実機は浮かせず、足元に灯りだまり */}
      <section className="relative flex flex-col items-center text-center px-6 pt-32 md:pt-40 pb-20">
        <h1
          data-reveal
          className="text-[2.9rem] md:text-7xl font-extrabold leading-[1.14] tracking-tight mb-5"
          style={{ color: "#F1ECFB" }}
        >
          <RichText segs={dict.hero.title} cjk={cjk} />
        </h1>
        <p
          data-reveal
          className="text-[15px] md:text-lg max-w-md md:max-w-xl leading-loose mb-9"
          style={{ color: "#A79FC0" }}
        >
          <RichText segs={dict.hero.subtitle} cjk={cjk} />
        </p>

        <div data-reveal className="relative mb-12">
          <div aria-hidden className="hearth-glow" />
          <Embers list={heroEmbers} />
          <div className="device relative mx-auto" style={{ maxWidth: 268 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screens/timer.png"
              alt={dict.hero.timerAlt}
              width={1179}
              height={2556}
              decoding="async"
            />
          </div>
        </div>

        <div data-reveal className="flex gap-3 flex-wrap justify-center">
          {/* 文字グリフ（環境依存で豆腐になる）を避け、インライン SVG で描く */}
          <div className="paper flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold opacity-90 cursor-not-allowed">
            <svg viewBox="0 0 24 24" aria-hidden className="w-4 h-4" fill="#F1ECFB">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
            </svg>
            <span style={{ color: "#F1ECFB" }}>App Store</span>
          </div>
          <div className="paper flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold opacity-90 cursor-not-allowed">
            <svg viewBox="0 0 24 24" aria-hidden className="w-4 h-4" fill="#F1ECFB">
              <path d="M3.6 2.4c-.36.19-.6.57-.6 1.05v17.1c0 .48.24.86.6 1.05l9.9-9.6-9.9-9.6Zm11.1 8.44L5.85 2.26l11.03 6.35-2.18 2.23Zm3.94-.9 2.6 1.5c.5.29.5.83 0 1.12l-2.6 1.5-2.42-2.06 2.42-2.06Zm-1.76 5.4L5.85 21.74l8.85-8.58 2.18 2.18Z" />
            </svg>
            <span style={{ color: "#F1ECFB" }}>Google Play</span>
          </div>
        </div>
      </section>

      {/* Showcase — 実画面で世界観を見せる */}
      <section className="relative px-6 pb-8 max-w-5xl mx-auto w-full">
        <div data-reveal className="mb-14 md:mb-16 text-center md:text-left">
          <Eyebrow trail>{dict.showcaseSection.eyebrow}</Eyebrow>
          <h2
            className="text-2xl md:text-[32px] font-extrabold tracking-tight"
            style={{ color: "#F1ECFB" }}
          >
            <RichText segs={dict.showcaseSection.title} cjk={cjk} />
          </h2>
        </div>
        <div className="flex flex-col gap-24 md:gap-28">
          {dict.showcaseSection.items.map((item, i) => (
            <Showcase
              key={i}
              img={showcaseConfig[i].img}
              accent={showcaseConfig[i].accent}
              flip={showcaseConfig[i].flip}
              alt={item.alt}
              kicker={item.kicker}
              title={item.title}
              body={item.body}
              points={item.points}
              cjk={cjk}
            />
          ))}
        </div>
      </section>

      {/* Environments — 背景バリエーション（模様替え）*/}
      <section className="relative px-6 pt-24 pb-8 max-w-5xl mx-auto w-full">
        <div data-reveal className="mb-14 text-center">
          <Eyebrow trail>{dict.env.eyebrow}</Eyebrow>
          <h2
            className="text-2xl md:text-[32px] font-extrabold tracking-tight mb-5"
            style={{ color: "#F1ECFB" }}
          >
            <RichText segs={dict.env.title} cjk={cjk} />
          </h2>
          <p
            className="text-sm md:text-[15px] leading-loose max-w-xl mx-auto"
            style={{ color: "#A79FC0" }}
          >
            <RichText segs={dict.env.desc} cjk={cjk} />
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 justify-items-center">
          {environments.map((e, i) => {
            const label = dict.env.labels[i];
            return (
              <div
                key={e.img}
                data-reveal
                className="flex flex-col items-center gap-3 w-full"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="device w-full" style={{ maxWidth: 176 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/screens/envs/${e.img}.jpg`}
                    alt={dict.env.altTemplate.replace("{label}", label)}
                    width={540}
                    height={1170}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span
                  className="flex items-center gap-1.5 text-xs font-bold"
                  style={{ color: e.accent }}
                >
                  <Flame accent={e.accent} small />
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Perks — こだわり4点（夜の窓：一枚のシーンに灯りを灯す） */}
      <section className="relative px-6 pt-24 pb-28 max-w-5xl mx-auto w-full">
        <div data-reveal className="night-panel p-8 md:p-14">
          <Embers list={panelEmbers} />

          {/* 見出し（左寄せでシーンに内包） */}
          <div className="relative max-w-md mb-10 md:mb-12">
            <Eyebrow>{dict.perks.eyebrow}</Eyebrow>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug"
              style={{ color: "#F1ECFB" }}
            >
              <RichText segs={dict.perks.title} cjk={cjk} />
            </h2>
            <p className="text-sm md:text-[15px] leading-loose mt-4" style={{ color: "#B3A9C8" }}>
              <RichText segs={dict.perks.desc} cjk={cjk} />
            </p>
          </div>

          {/* こだわり4件（枠なしの灯り／寒色→暖色へ） */}
          <div className="relative grid md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
            {dict.perks.items.map((p, i) => (
              <div
                key={p.title}
                className="perk-line flex items-start gap-4"
                style={{ ["--accent" as string]: perkAccents[i] }}
              >
                <Flame accent={perkAccents[i]} />
                <div className="pt-0.5">
                  <h3 className="font-extrabold text-[17px] mb-1.5" style={{ color: "#F5F1FC" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-loose" style={{ color: "#A79FC0" }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — 3ステップも灯りの言語で */}
      <section className="relative px-6 pb-24 max-w-2xl mx-auto w-full">
        <div data-reveal className="mb-10 text-center md:text-left">
          <Eyebrow trail>{dict.steps.eyebrow}</Eyebrow>
          <h2
            className="text-2xl md:text-[32px] font-extrabold tracking-tight"
            style={{ color: "#F1ECFB" }}
          >
            <RichText segs={dict.steps.title} cjk={cjk} />
          </h2>
        </div>
        <div className="flex flex-col gap-7">
          {dict.steps.items.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              className="perk-line flex gap-4 items-start"
              style={{ ["--accent" as string]: stepAccents[i], transitionDelay: `${i * 90}ms` }}
            >
              <Flame accent={stepAccents[i]} />
              <div>
                <p className="font-extrabold mb-1 text-[15px]" style={{ color: "#F1ECFB" }}>
                  {s.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#A79FC0" }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon CTA — 夜の窓の中で待つ */}
      <section className="relative px-6 pb-28 max-w-lg mx-auto w-full text-center">
        <div data-reveal className="night-panel p-10 md:p-11">
          <Embers list={ctaEmbers} />
          <div className="relative flex flex-col items-center">
            <div className="mb-5">
              <AppIcon size={72} alt={dict.iconAlt} />
            </div>
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight"
              style={{ color: "#F1ECFB" }}
            >
              <RichText segs={dict.cta.title} cjk={cjk} />
            </h2>
            <p className="text-sm leading-loose" style={{ color: "#A79FC0" }}>
              <RichText segs={dict.cta.body} cjk={cjk} />
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative mt-auto px-6 py-8 text-center text-xs"
        style={{ color: "#8A82A0", borderTop: "1px solid rgba(185,169,232,0.12)" }}
      >
        <div className="flex items-center justify-center gap-6 mb-3 flex-wrap font-semibold">
          <Link href="/privacy" className="hover:text-[#C9BCF2] transition-colors">
            {dict.footer.privacy}
          </Link>
          <Link href="/terms" className="hover:text-[#C9BCF2] transition-colors">
            {dict.footer.terms}
          </Link>
          <a
            href="mailto:focuscraft.app@gmail.com"
            className="hover:text-[#C9BCF2] transition-colors"
          >
            {dict.footer.contact}
          </a>
        </div>
        <p>© 2026 Focus Craft. All rights reserved.</p>
      </footer>
    </div>
  );
}
