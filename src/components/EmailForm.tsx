"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center gap-2 py-2">
        <span className="text-2xl">🎉</span>
        <p className="font-semibold">登録しました！</p>
        <p className="text-sm" style={{ color: "#8B8BA7" }}>
          リリース時にお知らせします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{
          backgroundColor: "#1C1B2E",
          border: "1px solid #ffffff22",
          color: "white",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#9B8FFF")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#ffffff22")}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80 disabled:opacity-50"
        style={{ backgroundColor: "#9B8FFF", color: "white" }}
      >
        {status === "loading" ? "送信中…" : "登録する"}
      </button>
      {status === "error" && (
        <p className="text-xs mt-1 text-red-400 text-center sm:text-left">
          エラーが発生しました。もう一度お試しください。
        </p>
      )}
    </form>
  );
}
