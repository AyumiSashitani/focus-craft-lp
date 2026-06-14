"use client";

import { useEffect } from "react";

/**
 * [data-reveal] を持つ要素を監視し、ビューポートに入ったら .is-visible を付与する。
 * JS が有効なときだけ html に .js を付け、初期状態を非表示にする（no-JS でも内容は残る）。
 */
export default function RevealManager() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
