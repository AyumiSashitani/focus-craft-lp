/* ---------------- Icons (line SVG) ---------------- */
function TimerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 2.5h6" />
      <path d="M12 6v0" opacity="0" />
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 13.5V9.5" />
      <path d="M18.8 7.2l1.3-1.3" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M3 20.5h18" />
      <rect x="4" y="12" width="3.5" height="6.5" rx="1" />
      <rect x="10.25" y="7" width="3.5" height="11.5" rx="1" />
      <rect x="16.5" y="3.5" width="3.5" height="15" rx="1" />
    </svg>
  );
}
function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M4 9v6h3.5L13 19.5V4.5L7.5 9H4z" />
      <path d="M16.5 9a4 4 0 0 1 0 6" />
      <path d="M19.5 6.5a8 8 0 0 1 0 11" />
    </svg>
  );
}

const features = [
  {
    icon: <TimerIcon />,
    title: "壊れないタイマー",
    body: "バックグラウンドでも正確。wall-clock 方式で復帰時に自動補正。着信や通知に邪魔されない集中を守ります。",
  },
  {
    icon: <ChartIcon />,
    title: "積み上げが見える",
    body: "ヒートマップとストリークで集中の記録が可視化。「続けたい」という気持ちが自然に湧いてきます。",
  },
  {
    icon: <SoundIcon />,
    title: "心地よい環境音",
    body: "雨音、焚き火、カフェ……。集中を高める ambient サウンドで、自分だけの作業空間を作れます。",
  },
];

const steps = [
  { num: "01", title: "時間を選ぶ", body: "15・25・45・90 分のプリセットから選ぶだけ。" },
  { num: "02", title: "集中する", body: "環境音を流して、タイマーをスタート。" },
  { num: "03", title: "積み上げる", body: "完了ごとに記録が残り、相棒が育っていく。" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden" style={{ backgroundColor: "#1C1B2E" }}>
      {/* Ambient background glows */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
        <div className="glow-pulse absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(155,143,255,0.30), transparent 65%)" }} />
        <div className="glow-pulse absolute top-[35%] -left-40 w-[34rem] h-[34rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(124,110,224,0.22), transparent 65%)", animationDelay: "3s" }} />
        <div className="glow-pulse absolute bottom-0 right-[-10rem] w-[32rem] h-[32rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(155,143,255,0.18), transparent 65%)", animationDelay: "5s" }} />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass"
        style={{ background: "rgba(28,27,46,0.55)", borderBottom: "1px solid rgba(255,255,255,0.06)", borderLeft: "none", borderRight: "none", borderTop: "none" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg"
            style={{ background: "linear-gradient(135deg,#9B8FFF,#7C6EE0)" }}>
            <TimerIcon />
          </div>
          <span className="font-semibold tracking-wide text-[15px]" style={{ color: "#E6E2FF" }}>
            Focus Craft
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "#9B8FFF1f", color: "#C2B8FF", border: "1px solid #9B8FFF40" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#9B8FFF" }} />
          近日公開
        </span>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-44 pb-32">
        <div data-reveal className="float w-28 h-28 rounded-[1.75rem] mb-9 flex items-center justify-center text-white relative"
          style={{ background: "linear-gradient(135deg,#9B8FFF,#7C6EE0)", boxShadow: "0 20px 60px -12px rgba(155,143,255,0.6)" }}>
          <span className="scale-[2.2]"><TimerIcon /></span>
        </div>

        <span data-reveal className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full mb-7"
          style={{ backgroundColor: "#9B8FFF1f", color: "#C2B8FF", border: "1px solid #9B8FFF40" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#9B8FFF" }} />
          App Store / Google Play 近日公開
        </span>

        <h1 data-reveal className="text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
          集中が、
          <br className="md:hidden" />
          <span className="text-gradient">積み上がる。</span>
        </h1>
        <p data-reveal className="text-base md:text-lg max-w-md leading-relaxed mb-11" style={{ color: "#A8A6C4" }}>
          ポモドーロ × cozy 育成。セッションをこなすほど
          <br className="hidden md:block" />
          相棒と作業部屋が育つ、新しい集中体験。
        </p>

        <div data-reveal className="flex gap-3 flex-wrap justify-center">
          {[
            { name: "App Store", glyph: "" },
            { name: "Google Play", glyph: "▶" },
          ].map((s) => (
            <div key={s.name}
              className="glass flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-medium opacity-70 cursor-not-allowed">
              <span className="text-base">{s.glyph}</span>
              <span style={{ color: "#D8D5EC" }}>{s.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: "#9B8FFF22", color: "#C2B8FF" }}>近日</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative px-6 pb-28 max-w-5xl mx-auto w-full">
        <h2 data-reveal className="text-center text-3xl md:text-4xl font-bold mb-14 tracking-tight">
          集中体験を、<span className="text-gradient">もっと心地よく。</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={f.title} data-reveal
              className="glass rounded-3xl p-7 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                style={{ background: "linear-gradient(135deg,#9B8FFF,#7C6EE0)", boxShadow: "0 10px 30px -8px rgba(155,143,255,0.55)" }}>
                {f.icon}
              </div>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#A8A6C4" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative px-6 pb-28 max-w-2xl mx-auto w-full">
        <h2 data-reveal className="text-center text-3xl md:text-4xl font-bold mb-14 tracking-tight">
          使い方は、<span className="text-gradient">シンプル。</span>
        </h2>
        <div className="relative flex flex-col gap-3">
          {/* vertical line */}
          <div aria-hidden className="absolute left-[1.30rem] top-3 bottom-3 w-px"
            style={{ background: "linear-gradient(to bottom, #9B8FFF66, #9B8FFF11)" }} />
          {steps.map((s, i) => (
            <div key={s.num} data-reveal className="relative flex gap-5 items-start py-3"
              style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg,#9B8FFF,#7C6EE0)", boxShadow: "0 8px 24px -8px rgba(155,143,255,0.6)" }}>
                {s.num}
              </div>
              <div className="pt-1.5">
                <p className="font-semibold mb-1 text-[15px]">{s.title}</p>
                <p className="text-sm" style={{ color: "#A8A6C4" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon CTA */}
      <section className="relative px-6 pb-32 max-w-lg mx-auto w-full text-center">
        <div data-reveal className="glass rounded-[2rem] p-11 relative overflow-hidden">
          <div aria-hidden className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(155,143,255,0.35), transparent 70%)" }} />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              リリースまで<span className="text-gradient">もう少し。</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#A8A6C4" }}>
              App Store / Google Play での配信に向けて準備中です。
              <br className="hidden sm:block" />
              公開までもう少しお待ちください。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-auto px-6 py-8 text-center text-xs border-t"
        style={{ color: "#8B8BA7", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="flex items-center justify-center gap-6 mb-3 flex-wrap">
          <a href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
          <a href="/terms" className="hover:text-white transition-colors">利用規約</a>
          <a href="mailto:sashiiii.dev@gmail.com" className="hover:text-white transition-colors">お問い合わせ</a>
        </div>
        <p>© 2026 Focus Craft. All rights reserved.</p>
      </footer>
    </div>
  );
}
