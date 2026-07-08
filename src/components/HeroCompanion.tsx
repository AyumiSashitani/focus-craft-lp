/**
 * The companion asleep by the hearth — the app's actual 64×64 sprite sheet
 * (assets/sprites/dogs/golden/sleep.png, 8 frames) played with a CSS steps()
 * animation. No runtime, no JS: 1.1 KB of PNG doing the work of a video.
 *
 * Purely decorative (aria-hidden); prefers-reduced-motion freezes it on the
 * first frame via the CSS in globals.css.
 *
 * 将来 Rive のヒーローシーン（.riv）を作ったらここを差し替える。手順は
 * docs/rive-hero.md を参照 — このコンポーネントの外側は触らなくていい。
 */
export default function HeroCompanion() {
  return (
    <div aria-hidden className="hero-companion">
      <div className="hero-companion-sprite" />
    </div>
  );
}
