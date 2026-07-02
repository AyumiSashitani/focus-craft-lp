/* ============================================================
   Focus Craft — cozy 育成 LP（twilight / 実アプリと地続き）
   実画面は store_assets/raw から public/screens/ に配置。
   装飾は「夜と灯り」の言語に統一：星・火の粉・キャンドルの炎。
   グラデ文字・浮遊モックアップ・ピルバッジ等のテンプレ語彙は使わない。
   ============================================================ */

/* ---------------- ブランドマーク（実アプリのアイコン＝キャンドル） ---------------- */
function AppIcon({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/icon.png" alt="Focus Craft" width={size} height={size}
      className={className}
      style={{ width: size, height: size, borderRadius: size * 0.24, display: "block" }} />
  );
}

/* ---------------- 灯り（キャンドルの炎）— ページ共通のマーカー ---------------- */
function Flame({ accent, small = false }: { accent: string; small?: boolean }) {
  return (
    <span aria-hidden className={small ? "flame flame-xs" : "flame"}
      style={{ ["--accent" as string]: accent }} />
  );
}

/* ---------------- セクションの道しるべ（小さな見出しラベル） ---------------- */
function Eyebrow({ children, color = "#F2B24C", trail = false }: {
  children: React.ReactNode; color?: string; trail?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] mb-4"
      style={{ color }}>
      <span className="w-4 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color})` }} />
      {children}
      {trail && (
        <span className="w-4 h-px" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
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
        <span key={i} className="ember"
          style={{ left: e.left, ["--dur" as string]: e.dur, ["--delay" as string]: e.delay, ["--drift" as string]: e.drift }} />
      ))}
    </div>
  );
}

/* ---------------- 実画面ショーケース（実スクショ主役） ---------------- */
function Showcase({
  img, alt, kicker, accent, title, body, points, flip = false,
}: {
  img: string; alt: string; kicker: string; accent: string;
  title: React.ReactNode; body: string; points: string[]; flip?: boolean;
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
        <Eyebrow color={accent} trail>{kicker}</Eyebrow>
        <h3 className="text-2xl md:text-[28px] font-extrabold leading-snug tracking-tight mb-4"
          style={{ color: "#F1ECFB" }}>
          {title}
        </h3>
        <p className="text-sm md:text-[15px] leading-loose mb-6" style={{ color: "#A79FC0" }}>
          {body}
        </p>
        <ul className="flex flex-col gap-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start justify-center md:justify-start gap-3 text-sm text-left"
              style={{ color: "#CFC7E4" }}>
              <Flame accent={accent} small />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const perks = [
  { accent: "#B9A9E8", title: "時刻ベースで、ズレない", body: "バックグラウンドに回しても、戻った瞬間に正確。OS と戦わない設計。" },
  { accent: "#8FB08A", title: "環境音で深く集中", body: "雨・カフェ・焚き火・Lo-Fi。お好みの音で、すっと集中に入る。" },
  { accent: "#F2B24C", title: "そっと寄り添う通知", body: "時間帯のあいさつ、おかえり。せかさない、責めない。" },
  { accent: "#DE7356", title: "ごほうびは、居心地のいい部屋", body: "無機質な数字じゃなく、少しずつ育つ自分だけの作業部屋。" },
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

// 使い方3ステップ（灯りの色は寒色→暖色へ。進むほどあたたかく）
const steps = [
  { accent: "#B9A9E8", title: "時間を選ぶ", body: "15・25・45・90 分のプリセットから、ひとつ選ぶだけ。" },
  { accent: "#8FB08A", title: "集中する", body: "環境音を流して、タイマーをそっとスタート。" },
  { accent: "#F2B24C", title: "育てる", body: "完了するたび記録が残り、相棒と部屋が育っていく。" },
];

// 背景（外の世界）バリエーション。実アプリの環境テーマを撮影したもの。
const environments = [
  { img: "sunset", label: "夕焼け", accent: "#F2A65E" },
  { img: "nature", label: "森の昼", accent: "#8FB08A" },
  { img: "ocean", label: "海の底", accent: "#4FA3C7" },
  { img: "aurora", label: "オーロラ", accent: "#6FD3B0" },
  { img: "space", label: "星空", accent: "#8B7FD4" },
  { img: "cyberpunk", label: "ネオン", accent: "#E06AC2" },
  { img: "cozy", label: "ぬくもり", accent: "#F2B24C" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden grain"
      style={{ backgroundColor: "#14111F" }}>
      {/* 夜空（星）と地平の灯り — ページ全体をひとつの夜に */}
      <div aria-hidden className="night-sky" />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3.5 md:px-12"
        style={{ background: "rgba(20,17,31,0.72)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid rgba(185,169,232,0.10)" }}>
        <div className="flex items-center gap-2.5">
          <AppIcon size={32} />
          <span className="font-extrabold tracking-tight text-[16px]" style={{ color: "#F1ECFB" }}>
            Focus Craft
          </span>
        </div>
      </nav>

      {/* Hero — 夜の手元。実機は浮かせず、足元に灯りだまり */}
      <section className="relative flex flex-col items-center text-center px-6 pt-32 md:pt-40 pb-20">
        <h1 data-reveal className="text-[2.9rem] md:text-7xl font-extrabold leading-[1.14] tracking-tight mb-5"
          style={{ color: "#F1ECFB" }}>
          <span className="text-honey">集中</span>が
          <br className="md:hidden" />
          積み上がる。
        </h1>
        <p data-reveal className="text-[15px] md:text-lg max-w-md md:max-w-xl leading-loose mb-9" style={{ color: "#A79FC0" }}>
          <span className="inline-block">数字に追い立てられない、</span>
          <span className="inline-block">心地よいポモドーロ。</span>
          <br className="hidden md:block" />
          <span className="inline-block">集中するほど、</span>
          <span className="inline-block">相棒とあなたの作業部屋が育っていく。</span>
        </p>

        <div data-reveal className="relative mb-12">
          <div aria-hidden className="hearth-glow" />
          <Embers list={heroEmbers} />
          <div className="device relative mx-auto" style={{ maxWidth: 268 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screens/timer.png" alt="Focus Craft のタイマー画面。夜の作業部屋と相棒、25分のタイマー"
              width={1179} height={2556} decoding="async" />
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
          <Eyebrow trail>アプリのなか</Eyebrow>
          <h2 className="text-2xl md:text-[32px] font-extrabold tracking-tight" style={{ color: "#F1ECFB" }}>
            <span className="inline-block">こなすほど、</span><span className="text-honey inline-block">育っていく。</span>
          </h2>
        </div>
        <div className="flex flex-col gap-24 md:gap-28">
          <Showcase
            img="/screens/world.png"
            alt="そだてる画面。レベル・相棒・デイリークエスト"
            kicker="相棒と工房が育つ"
            accent="#B9A9E8"
            title={<><span className="inline-block">集中するほど、</span><span className="inline-block">相棒と工房が育つ。</span></>}
            body="こなしたセッションが XP とコインになり、相棒とあなたの作業部屋が少しずつ豊かになっていく。ごほうびは、無機質な数字じゃない。"
            points={["相棒は5段階、作業部屋は8段階で成長", "はじまりは「謎の存在」— 正体はアプリで", "デイリークエストで今日の一歩をそっと後押し"]}
          />
          <Showcase
            img="/screens/stats.png"
            alt="統計画面。カレンダー・ヒートマップ・連続記録"
            kicker="がんばりが、残る"
            accent="#F2B24C"
            title={<><span className="inline-block">続けた日々が、</span><span className="text-honey inline-block">ちゃんと残る。</span></>}
            body="カレンダー・ヒートマップ・ストリークで、積み上げた集中が色づいていく。追い立てるためじゃなく、自分をやさしく振り返るために。"
            points={["日ごとの集中がヒートマップで一目に", "連続記録（ストリーク）で「明日も」が続く", "累計セッション・時間もまるごと記録"]}
            flip
          />
        </div>
      </section>

      {/* Environments — 背景バリエーション（模様替え）*/}
      <section className="relative px-6 pt-24 pb-8 max-w-5xl mx-auto w-full">
        <div data-reveal className="mb-14 text-center">
          <Eyebrow trail>模様替え</Eyebrow>
          <h2 className="text-2xl md:text-[32px] font-extrabold tracking-tight mb-5" style={{ color: "#F1ECFB" }}>
            <span className="inline-block">その日の気分で、</span><span className="text-honey inline-block">世界を変える。</span>
          </h2>
          <p className="text-sm md:text-[15px] leading-loose max-w-xl mx-auto" style={{ color: "#A79FC0" }}>
            <span className="inline-block">集中する部屋の&ldquo;外の世界&rdquo;は、夕焼け・海・オーロラ・星空…から自由に。</span>
            <span className="inline-block">天気（晴れ・雨・雪）や壁の色も、集中とともに少しずつ増えていく。</span>
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 justify-items-center">
          {environments.map((e, i) => (
            <div key={e.img} data-reveal className="flex flex-col items-center gap-3 w-full"
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="device w-full" style={{ maxWidth: 176 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/screens/envs/${e.img}.jpg`} alt={`${e.label}の背景で集中する作業部屋`}
                  width={540} height={1170} loading="lazy" decoding="async" />
              </div>
              <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: e.accent }}>
                <Flame accent={e.accent} small />
                {e.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Perks — こだわり4点（夜の窓：一枚のシーンに灯りを灯す） */}
      <section className="relative px-6 pt-24 pb-28 max-w-5xl mx-auto w-full">
        <div data-reveal className="night-panel p-8 md:p-14">
          <Embers list={panelEmbers} />

          {/* 見出し（左寄せでシーンに内包） */}
          <div className="relative max-w-md mb-10 md:mb-12">
            <Eyebrow>四つのこだわり</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug" style={{ color: "#F1ECFB" }}>
              <span className="inline-block">集中の時間を、</span><span className="text-honey inline-block">もっとあたたかく。</span>
            </h2>
            <p className="text-sm md:text-[15px] leading-loose mt-4" style={{ color: "#B3A9C8" }}>
              <span className="inline-block">機能の多さより、</span>
              <span className="inline-block">毎日ひらいて心地いいかどうか。</span>
              <span className="inline-block">基準はそれだけです。</span>
            </p>
          </div>

          {/* こだわり4件（枠なしの灯り／寒色→暖色へ） */}
          <div className="relative grid md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
            {perks.map((p) => (
              <div key={p.title} className="perk-line flex items-start gap-4"
                style={{ ["--accent" as string]: p.accent }}>
                <Flame accent={p.accent} />
                <div className="pt-0.5">
                  <h3 className="font-extrabold text-[17px] mb-1.5" style={{ color: "#F5F1FC" }}>{p.title}</h3>
                  <p className="text-sm leading-loose" style={{ color: "#A79FC0" }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — 3ステップも灯りの言語で */}
      <section className="relative px-6 pb-24 max-w-2xl mx-auto w-full">
        <div data-reveal className="mb-10 text-center md:text-left">
          <Eyebrow trail>はじめかた</Eyebrow>
          <h2 className="text-2xl md:text-[32px] font-extrabold tracking-tight" style={{ color: "#F1ECFB" }}>
            <span className="inline-block">使い方は、</span><span className="text-honey inline-block">かんたん。</span>
          </h2>
        </div>
        <div className="flex flex-col gap-7">
          {steps.map((s, i) => (
            <div key={s.title} data-reveal className="perk-line flex gap-4 items-start"
              style={{ ["--accent" as string]: s.accent, transitionDelay: `${i * 90}ms` }}>
              <Flame accent={s.accent} />
              <div>
                <p className="font-extrabold mb-1 text-[15px]" style={{ color: "#F1ECFB" }}>{s.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#A79FC0" }}>{s.body}</p>
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
            <div className="mb-5"><AppIcon size={72} /></div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight" style={{ color: "#F1ECFB" }}>
              <span className="inline-block">リリースまで</span><span className="text-honey inline-block">もう少し。</span>
            </h2>
            <p className="text-sm leading-loose" style={{ color: "#A79FC0" }}>
              App Store / Google Play での配信に向けて、
              <br className="hidden sm:block" />
              相棒と一緒に準備中です。もう少しだけお待ちください。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-auto px-6 py-8 text-center text-xs"
        style={{ color: "#8A82A0", borderTop: "1px solid rgba(185,169,232,0.12)" }}>
        <div className="flex items-center justify-center gap-6 mb-3 flex-wrap font-semibold">
          <a href="/privacy" className="hover:text-[#C9BCF2] transition-colors">プライバシーポリシー</a>
          <a href="/terms" className="hover:text-[#C9BCF2] transition-colors">利用規約</a>
          <a href="mailto:focuscraft.app@gmail.com" className="hover:text-[#C9BCF2] transition-colors">お問い合わせ</a>
        </div>
        <p>© 2026 Focus Craft. All rights reserved.</p>
      </footer>
    </div>
  );
}
