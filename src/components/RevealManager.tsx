"use client";

import { useEffect } from "react";

/**
 * [data-reveal] を持つ要素を、ビューポートに入ったら .is-visible を付与して表示する。
 * JS が有効なときだけ html に .js を付け、初期状態を非表示にする（no-JS でも内容は残る）。
 *
 * IntersectionObserver は環境によって発火しないことがあり、セクションが表示されない
 * 事故につながる。ここでは「画面内は即時表示 ＋ スクロール判定」の堅牢な方式にして、
 * どんな環境でも要素が隠れたままにならないことを保証する。
 */
export default function RevealManager() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // モーション控えめ設定なら、アニメーションせず即表示
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    let ticking = false;
    const reveal = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (const el of els) {
        if (el.classList.contains("is-visible")) continue;
        const r = el.getBoundingClientRect();
        // 要素の上端が画面下から少し入った時点で表示
        if (r.top < vh * 0.88 && r.bottom > 0) el.classList.add("is-visible");
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(reveal);
      }
    };

    reveal(); // 初期表示（すでに画面内のものは即時）
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // フェイルセーフ: 想定外でも一定時間後に必ず全表示
    const failSafe = window.setTimeout(
      () => els.forEach((el) => el.classList.add("is-visible")),
      2500
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(failSafe);
    };
  }, []);

  return null;
}
