import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Focus Craft",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-2xl mx-auto" style={{ color: "white" }}>
      <Link href="/"
        className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
        style={{ color: "#9B8FFF" }}>
        ← Focus Craft
      </Link>

      <h1 className="text-3xl font-bold mb-2">プライバシーポリシー</h1>
      <p className="text-sm mb-10" style={{ color: "#8B8BA7" }}>最終更新日：2026年6月13日</p>

      <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: "#c8c8d8" }}>
        <Section title="1. はじめに">
          Focus Craft（以下「本アプリ」）は、Ayumi Sashitani（以下「開発者」）が提供する
          ポモドーロタイマーアプリです。本ポリシーは、本アプリおよび本ウェブサイトにおける
          個人情報の取り扱いについて説明します。
        </Section>

        <Section title="2. 収集する情報">
          <p className="mb-3">本アプリは以下の情報を収集することがあります。</p>
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2">
            <li>
              <strong className="text-white">利用統計情報</strong>
              （Firebase Analytics）：セッション開始・完了・中断の回数、画面遷移など。
              個人を特定しない匿名データです。
            </li>
            <li>
              <strong className="text-white">クラッシュレポート</strong>
              （Firebase Crashlytics）：アプリ異常終了時のスタックトレース。
              デバッグ目的のみに使用します。
            </li>
            <li>
              <strong className="text-white">端末情報</strong>
              ：OS バージョン、端末モデルなど。統計情報に含まれます。
            </li>
          </ul>
        </Section>

        <Section title="3. 情報の利用目的">
          収集した情報は以下の目的にのみ使用します。
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2 mt-3">
            <li>アプリの品質改善およびバグ修正</li>
            <li>機能の使われ方の把握（UX 改善）</li>
            <li>クラッシュの検出と修正</li>
          </ul>
          収集した情報を第三者に販売することはありません。
        </Section>

        <Section title="4. 広告について">
          本アプリは現在、広告を表示しません。将来的に広告を導入する場合は、
          本ポリシーを更新してお知らせします。
        </Section>

        <Section title="5. データの保管">
          タイマー設定・集中記録などのアプリデータは、お使いの端末内にのみ保存されます。
          現時点でクラウドへのアップロードは行いません。
        </Section>

        <Section title="6. トラッキングについて（iOS）">
          iOS では App Tracking Transparency（ATT）の許可を求める場合があります。
          拒否した場合でも、本アプリのすべての機能をご利用いただけます。
          トラッキングデータは広告目的には使用しません。
        </Section>

        <Section title="7. 第三者サービス">
          本アプリは以下の第三者サービスを使用しています。
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2 mt-3">
            <li>
              <strong className="text-white">Firebase（Google LLC）</strong>
              ：Analytics・Crashlytics・Remote Config。
              <a href="https://policies.google.com/privacy"
                className="ml-1 underline" style={{ color: "#9B8FFF" }}
                target="_blank" rel="noopener noreferrer">
                Google のプライバシーポリシー
              </a>
            </li>
          </ul>
        </Section>

        <Section title="8. お子様のプライバシー">
          本アプリは 13 歳未満のお子様を対象としていません。
          意図せず 13 歳未満の方の情報を収集した場合は、速やかに削除します。
        </Section>

        <Section title="9. ポリシーの変更">
          本ポリシーは予告なく変更される場合があります。変更後はこのページに掲載します。
          重要な変更がある場合はアプリ内でもお知らせします。
        </Section>

        <Section title="10. お問い合わせ">
          プライバシーに関するご質問は下記までご連絡ください。
          <br />
          <a href="mailto:sashiiii.dev@gmail.com" className="underline mt-1 inline-block"
            style={{ color: "#9B8FFF" }}>
            sashiiii.dev@gmail.com
          </a>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-bold text-white mb-3">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
