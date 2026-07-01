/* ============================================================
   Focus Craft — cozy 育成 LP（twilight / 実アプリと地続き）
   実画面は store_assets/raw から public/screens/ に配置。
   相棒とアイコンは手描き SVG（外部アセット不要）。
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

/* ---------------- 小さなアイコン ---------------- */
function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3 2" />
    </svg>
  );
}
function IconSound() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 9v6h4l5 4V5L8 9H4Z" />
      <path d="M17 8a5 5 0 0 1 0 8" />
    </svg>
  );
}
function IconBell() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  );
}
function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v10h12V10" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M5 19c0-8 6-13 14-14 1 9-4 15-14 14Z" />
      <path d="M5 19c4-5 7-7 11-9" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
      strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 20S4 14.5 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5.5-8 11-8 11Z" />
    </svg>
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
      <div className={flip ? "md:order-1" : ""}>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
          style={{ backgroundColor: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
          {kicker}
        </span>
        <h3 className="text-2xl md:text-[28px] font-extrabold leading-snug tracking-tight mb-4"
          style={{ color: "#F1ECFB" }}>
          {title}
        </h3>
        <p className="text-sm md:text-[15px] leading-loose mb-6" style={{ color: "#A79FC0" }}>
          {body}
        </p>
        <ul className="flex flex-col gap-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm" style={{ color: "#CFC7E4" }}>
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${accent}33`, color: accent }}>
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor"
                  strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 6" />
                </svg>
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const perks = [
  { icon: <IconClock />, accent: "#B9A9E8", title: "時刻ベースで、ズレない", body: "バックグラウンドに回しても、戻った瞬間に正確。OS と戦わない設計。" },
  { icon: <IconSound />, accent: "#8FB08A", title: "環境音で深く集中", body: "雨・カフェ・焚き火・Lo-Fi。お好みの音で、すっと集中に入る。" },
  { icon: <IconBell />, accent: "#F2B24C", title: "そっと寄り添う通知", body: "時間帯のあいさつ、おかえり。せかさない、責めない。" },
  { icon: <IconHome />, accent: "#DE7356", title: "ごほうびは、居心地のいい部屋", body: "無機質な数字じゃなく、少しずつ育つ自分だけの作業部屋。" },
];

const steps = [
  { icon: <IconClock />, title: "時間を選ぶ", body: "15・25・45・90 分のプリセットから、ひとつ選ぶだけ。" },
  { icon: <IconLeaf />, title: "集中する", body: "環境音を流して、タイマーをそっとスタート。" },
  { icon: <IconHeart />, title: "育てる", body: "完了するたび記録が残り、相棒と部屋が育っていく。" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden grain"
      style={{ backgroundColor: "#14111F" }}>
      {/* 夜のやわらかい光（窓辺の灯り＋ラベンダー） */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,127,212,0.30), transparent 65%)" }} />
        <div className="absolute top-[38%] -left-40 w-[34rem] h-[34rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(242,178,76,0.14), transparent 65%)" }} />
        <div className="absolute bottom-0 right-[-10rem] w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(185,169,232,0.18), transparent 65%)" }} />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3.5 md:px-12"
        style={{ background: "rgba(20,17,31,0.72)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid rgba(185,169,232,0.10)" }}>
        <div className="flex items-center gap-2.5">
          <AppIcon size={32} />
          <span className="font-extrabold tracking-tight text-[16px]" style={{ color: "#F1ECFB" }}>
            Focus Craft
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "#B9A9E81E", color: "#C9BCF2", border: "1px solid #B9A9E844" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#B9A9E8" }} />
          近日公開
        </span>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-6 pt-32 md:pt-40 pb-20">
        <h1 data-reveal className="text-[2.9rem] md:text-7xl font-extrabold leading-[1.14] tracking-tight mb-5"
          style={{ color: "#F1ECFB" }}>
          集中が、
          <br className="md:hidden" />
          <span className="text-gradient">積み上がる。</span>
        </h1>
        <p data-reveal className="text-[15px] md:text-lg max-w-md leading-loose mb-9" style={{ color: "#A79FC0" }}>
          数字に追い立てられない、心地よいポモドーロ。
          <br className="hidden md:block" />
          集中するほど、相棒とあなたの作業部屋が育っていく。
        </p>

        <div data-reveal className="mb-12">
          <div className="device float mx-auto" style={{ maxWidth: 268 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screens/timer.png" alt="Focus Craft のタイマー画面。夜の作業部屋と相棒、25分のタイマー"
              width={1179} height={2556} decoding="async" />
          </div>
        </div>

        <div data-reveal className="flex gap-3 flex-wrap justify-center">
          {[
            { name: "App Store", glyph: "" },
            { name: "Google Play", glyph: "▶" },
          ].map((s) => (
            <div key={s.name}
              className="paper flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold opacity-90 cursor-not-allowed">
              <span className="text-base" style={{ color: "#F1ECFB" }}>{s.glyph}</span>
              <span style={{ color: "#F1ECFB" }}>{s.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold"
                style={{ backgroundColor: "#B9A9E824", color: "#C9BCF2" }}>近日</span>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase — 実画面で世界観を見せる */}
      <section className="relative px-6 pb-8 max-w-5xl mx-auto w-full">
        <h2 data-reveal className="text-center text-3xl md:text-4xl font-extrabold mb-16 tracking-tight"
          style={{ color: "#F1ECFB" }}>
          こなすほど、<span className="text-gradient">育っていく。</span>
        </h2>
        <div className="flex flex-col gap-24 md:gap-28">
          <Showcase
            img="/screens/world.png"
            alt="そだてる画面。レベル・相棒・デイリークエスト"
            kicker="相棒と工房が育つ"
            accent="#B9A9E8"
            title={<>集中するほど、<span className="text-gradient">相棒と工房が育つ。</span></>}
            body="こなしたセッションが XP とコインになり、相棒とあなたの作業部屋が少しずつ豊かになっていく。ごほうびは、無機質な数字じゃない。"
            points={["相棒は5段階、作業部屋は8段階で成長", "はじまりは「謎の存在」— 正体はアプリで", "デイリークエストで今日の一歩をそっと後押し"]}
          />
          <Showcase
            img="/screens/stats.png"
            alt="統計画面。カレンダー・ヒートマップ・連続記録"
            kicker="がんばりが、残る"
            accent="#F2B24C"
            title={<>続けた日々が、<span className="text-honey">ちゃんと残る。</span></>}
            body="カレンダー・ヒートマップ・ストリークで、積み上げた集中が色づいていく。追い立てるためじゃなく、自分をやさしく振り返るために。"
            points={["日ごとの集中がヒートマップで一目に", "連続記録（ストリーク）で「明日も」が続く", "累計セッション・時間もまるごと記録"]}
            flip
          />
        </div>
      </section>

      {/* Perks — こだわり4点 */}
      <section className="relative px-6 pt-24 pb-24 max-w-5xl mx-auto w-full">
        <h2 data-reveal className="text-center text-3xl md:text-4xl font-extrabold mb-14 tracking-tight"
          style={{ color: "#F1ECFB" }}>
          集中の時間を、<span className="text-gradient">もっとあたたかく。</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {perks.map((p, i) => (
            <div key={p.title} data-reveal
              className="paper rounded-[1.75rem] p-7 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${p.accent}22`, color: p.accent, border: `1px solid ${p.accent}33` }}>
                {p.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-[17px] mb-1.5" style={{ color: "#F1ECFB" }}>{p.title}</h3>
                <p className="text-sm leading-loose" style={{ color: "#A79FC0" }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-6 pb-24 max-w-2xl mx-auto w-full">
        <h2 data-reveal className="text-center text-3xl md:text-4xl font-extrabold mb-14 tracking-tight"
          style={{ color: "#F1ECFB" }}>
          使い方は、<span className="text-honey">かんたん。</span>
        </h2>
        <div className="relative flex flex-col gap-2">
          <div aria-hidden className="absolute left-[1.45rem] top-4 bottom-4 w-0.5 rounded-full"
            style={{ background: "repeating-linear-gradient(to bottom, #B9A9E866 0 6px, transparent 6px 12px)" }} />
          {steps.map((s, i) => (
            <div key={s.title} data-reveal className="relative flex gap-5 items-start py-3"
              style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg,#B9A9E8,#8B7FD4)", boxShadow: "0 8px 20px -8px rgba(139,127,212,0.7)" }}>
                {s.icon}
              </div>
              <div className="pt-1.5">
                <p className="font-extrabold mb-1 text-[15px]" style={{ color: "#F1ECFB" }}>{s.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#A79FC0" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon CTA */}
      <section className="relative px-6 pb-28 max-w-lg mx-auto w-full text-center">
        <div data-reveal className="paper rounded-[2rem] p-11 relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(185,169,232,0.35), transparent 70%)" }} />
          <div className="relative flex flex-col items-center">
            <div className="float mb-5"><AppIcon size={76} /></div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight" style={{ color: "#F1ECFB" }}>
              リリースまで<span className="text-gradient">もう少し。</span>
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
