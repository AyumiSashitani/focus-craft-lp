const features = [
  {
    icon: "⏱",
    title: "壊れないタイマー",
    body: "バックグラウンドでも正確。wall-clock 方式で復帰時に自動補正。着信や通知に邪魔されない集中を守ります。",
  },
  {
    icon: "📊",
    title: "積み上げが見える",
    body: "ヒートマップとストリークで集中の記録が可視化。「続けたい」という気持ちが自然に湧いてきます。",
  },
  {
    icon: "🎵",
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
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#1C1B2E" }}>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{ background: "linear-gradient(to bottom, #1C1B2Eee, transparent)" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#9B8FFF22" }}>
            <span className="text-sm">⏱</span>
          </div>
          <span className="font-semibold tracking-wide" style={{ color: "#9B8FFF" }}>
            Focus Craft
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
          style={{ backgroundColor: "#9B8FFF22", color: "#9B8FFF", border: "1px solid #9B8FFF44" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#9B8FFF" }} />
          近日公開
        </span>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-28">
        {/* App icon */}
        <div className="w-24 h-24 rounded-3xl mb-8 flex items-center justify-center shadow-2xl"
          style={{ backgroundColor: "#2A2940", border: "1px solid #9B8FFF33" }}>
          <span className="text-4xl">⏱</span>
        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "#9B8FFF22", color: "#9B8FFF", border: "1px solid #9B8FFF44" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#9B8FFF" }} />
          近日公開
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-5">
          集中が、<span style={{ color: "#9B8FFF" }}>積み上がる。</span>
        </h1>
        <p className="text-base md:text-lg max-w-md leading-relaxed mb-10"
          style={{ color: "#8B8BA7" }}>
          ポモドーロ × cozy 育成。セッションをこなすほど
          <br className="hidden md:block" />
          相棒と作業部屋が育つ、新しい集中体験。
        </p>

        {/* Store badges placeholder */}
        <div className="flex gap-3 mb-4 flex-wrap justify-center">
          {["App Store", "Google Play"].map((s) => (
            <div key={s}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium opacity-50 cursor-not-allowed"
              style={{ backgroundColor: "#2A2940", border: "1px solid #ffffff22", color: "#8B8BA7" }}>
              {s === "App Store" ? "🍎" : "▶"} {s}
              <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: "#9B8FFF22", color: "#9B8FFF" }}>
                近日
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 max-w-4xl mx-auto w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          集中体験を、<span style={{ color: "#9B8FFF" }}>もっと心地よく。</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ backgroundColor: "#2A2940", border: "1px solid #ffffff0d" }}>
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8B8BA7" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-24 max-w-2xl mx-auto w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          使い方は、<span style={{ color: "#9B8FFF" }}>シンプル。</span>
        </h2>
        <div className="flex flex-col gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: "#9B8FFF22", color: "#9B8FFF" }}>
                {s.num}
              </div>
              <div>
                <p className="font-semibold mb-1">{s.title}</p>
                <p className="text-sm" style={{ color: "#8B8BA7" }}>{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Coming soon CTA */}
      <section className="px-6 pb-32 max-w-lg mx-auto w-full text-center">
        <div className="rounded-3xl p-10"
          style={{ backgroundColor: "#2A2940", border: "1px solid #9B8FFF33" }}>
          <h2 className="text-2xl font-bold mb-3">
            リリースまで<span style={{ color: "#9B8FFF" }}>もう少し。</span>
          </h2>
          <p className="text-sm" style={{ color: "#8B8BA7" }}>
            App Store / Google Play での配信に向けて準備中です。
            <br className="hidden sm:block" />
            公開までお待ちください。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto px-6 py-8 text-center text-xs border-t"
        style={{ color: "#8B8BA7", borderColor: "#ffffff0d" }}>
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
