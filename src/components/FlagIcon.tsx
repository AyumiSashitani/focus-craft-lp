import type { Locale } from "@/i18n/config";

// 国旗はインライン SVG で描く（絵文字は Windows 等で豆腐になるため。
// ストアボタンのロゴと同じ方針）。viewBox は全旗 30x20（3:2）で統一。
// ※ コンポーネント化せず素の描画関数として持ち、FlagIcon から呼び出す
//    （react-hooks/static-components を避けるため）。

// 5点星（半径1・上向き）。translate/rotate/scale で再利用する。
const STAR =
  "M0,-1 L0.2245,-0.309 L0.951,-0.309 L0.363,0.1181 L0.5878,0.809 L0,0.382 L-0.5878,0.809 L-0.363,0.1181 L-0.951,-0.309 L-0.2245,-0.309 Z";

function star(cx: number, cy: number, r: number, rot: number) {
  return (
    <path
      key={`${cx}-${cy}`}
      d={STAR}
      transform={`translate(${cx} ${cy}) rotate(${rot}) scale(${r})`}
      fill="#FFDE00"
    />
  );
}

// 卦（簡略：3本の黒帯クラスタ）。中心方向へ傾ける。
function trigram(x: number, y: number, rot: number) {
  return (
    <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${rot})`} fill="#111">
      <rect x="-2.2" y="-1.7" width="4.4" height="0.8" />
      <rect x="-2.2" y="-0.4" width="4.4" height="0.8" />
      <rect x="-2.2" y="0.9" width="4.4" height="0.8" />
    </g>
  );
}

function jp() {
  return (
    <>
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="5.2" fill="#BC002D" />
    </>
  );
}

function us() {
  const h = 20 / 13; // 13本のストライプ
  const stripes = [];
  for (let i = 0; i < 13; i += 2) {
    stripes.push(<rect key={i} y={i * h} width="30" height={h} fill="#B22234" />);
  }
  const cantonH = h * 7;
  const cantonW = 12;
  const stars = [];
  let k = 0;
  for (let r = 0; r < 5; r++) {
    const stagger = r % 2 === 1;
    for (let c = 0; c < 6; c++) {
      const x = 1.3 + c * 2 + (stagger ? 1 : 0);
      const y = 1.3 + r * 2;
      if (x < cantonW - 0.6 && y < cantonH - 0.6) {
        stars.push(<circle key={k++} cx={x} cy={y} r="0.42" fill="#fff" />);
      }
    }
  }
  return (
    <>
      <rect width="30" height="20" fill="#fff" />
      {stripes}
      <rect width={cantonW} height={cantonH} fill="#3C3B6E" />
      {stars}
    </>
  );
}

function cn() {
  return (
    <>
      <rect width="30" height="20" fill="#DE2910" />
      {star(5, 5, 3, 0)}
      {star(10, 1.8, 1, 25)}
      {star(12.5, 4, 1, 46)}
      {star(12.5, 7, 1, -46)}
      {star(10, 9.2, 1, -25)}
    </>
  );
}

function kr() {
  return (
    <>
      <rect width="30" height="20" fill="#fff" />
      {/* 太極（赤上・青下）を少し傾ける */}
      <g transform="rotate(-33 15 10)">
        <circle cx="15" cy="10" r="5" fill="#003478" />
        <path d="M10,10 A5,5 0 0,1 20,10 Z" fill="#CD2E3A" />
        <circle cx="17.5" cy="10" r="2.5" fill="#CD2E3A" />
        <circle cx="12.5" cy="10" r="2.5" fill="#003478" />
      </g>
      {/* 四隅の卦 */}
      {trigram(6, 4.5, -56)}
      {trigram(24, 4.5, 56)}
      {trigram(6, 15.5, -124)}
      {trigram(24, 15.5, 124)}
    </>
  );
}

const FLAGS: Record<Locale, () => React.ReactNode> = {
  ja: jp,
  en: us,
  zh: cn,
  ko: kr,
};

export default function FlagIcon({ code }: { code: Locale }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: 18,
        height: 12,
        borderRadius: 2.5,
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
      }}
    >
      <svg viewBox="0 0 30 20" width="18" height="12" style={{ display: "block" }}>
        {FLAGS[code]()}
      </svg>
    </span>
  );
}
