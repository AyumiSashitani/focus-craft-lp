# Rive ヒーローシーンへの差し替え手順

現在のヒーローの相棒は、実アプリのスプライトシート
（`public/sprites/dog-sleep.png`・1.1KB）を CSS `steps()` で再生している。
ランタイム不要・追加 JS ゼロで動くので、**Rive はこれを上回るシーンが
作れたときだけ**導入する（例: マウス追従で相棒が起きる、火の粉と連動、
スクロールで部屋が明るくなる等 — State Machine が要る演出）。

## 素材づくり（Rive エディタ・人間の作業）

1. https://rive.app/ でファイル新規作成（アートボード 400×300 目安）
2. ドット絵を使う場合は PNG を import → **Nearest Neighbor** を指定
   （デフォルトのバイリニアだとドットがにじむ。ここが世界観の生命線）
3. State Machine `Hero` を作成。最低構成:
   - `idle`（眠りループ）
   - input `hover` (Boolean) → 顔を上げるトランジション
4. Export → `hero.riv` を `public/hero.riv` に置く

## コード側（.riv が出来たら Claude に依頼で OK）

```bash
npm i @rive-app/react-canvas
```

`src/components/HeroCompanion.tsx` を以下の形に差し替える
（外側のレイアウト / globals.css の `.hero-companion` は触らない）:

```tsx
"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export default function HeroCompanion() {
  const { rive, RiveComponent } = useRive({
    src: "/hero.riv",
    stateMachines: "Hero",
    autoplay: true,
  });
  const hover = useStateMachineInput(rive, "Hero", "hover");
  return (
    <div
      aria-hidden
      className="hero-companion"
      onPointerEnter={() => hover && (hover.value = true)}
      onPointerLeave={() => hover && (hover.value = false)}
    >
      <RiveComponent />
    </div>
  );
}
```

注意:
- `"use client"` が必須（Rive は canvas/WASM。SSG では描画されないが
  静的書き出しでも hydration 後に動く）
- `prefers-reduced-motion` は Rive 側では拾えないので、
  `matchMedia` で `autoplay: false` に落とすこと
- WASM ~100KB が増える。ヒーローは LCP に効く場所なので、
  `next/dynamic` で遅延ロード + 現在のスプライトをフォールバックに残すのが安全
