import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アカウントとデータの削除 | Focus Craft",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-2xl mx-auto" style={{ color: "white" }}>
      <Link href="/"
        className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
        style={{ color: "#9B8FFF" }}>
        ← Focus Craft
      </Link>

      <h1 className="text-3xl font-bold mb-2">アカウントとデータの削除</h1>
      <p className="text-sm mb-10" style={{ color: "#8B8BA7" }}>
        Focus Craft（開発者：Ayumi Sashitani）
      </p>

      <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: "#c8c8d8" }}>
        <Section title="削除をリクエストする方法">
          <p className="mb-3">
            Focus Craft のアカウントと、それに紐づくデータの削除はいつでもリクエストできます。
          </p>
          <ul className="list-disc list-inside flex flex-col gap-3 ml-2">
            <li>
              <strong className="text-white">アプリ内から</strong>
              ：<span className="text-white">設定 → アカウント →「アカウントを削除」</span>{" "}
              をタップすると、アカウントとクラウド上のデータが削除されます。
            </li>
            <li>
              <strong className="text-white">アプリを削除済みの場合</strong>
              ：下記メールアドレスへ「アカウント削除希望」とご連絡ください。
              本人確認のうえ、7 日以内に削除します。
              <br />
              <a href="mailto:focuscraft.app@gmail.com?subject=Focus%20Craft%20アカウント削除希望"
                className="underline mt-1 inline-block" style={{ color: "#9B8FFF" }}>
                focuscraft.app@gmail.com
              </a>
            </li>
          </ul>
        </Section>

        <Section title="削除されるデータ">
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2">
            <li>アカウント情報（サインインに使用したメールアドレス等の認証情報）</li>
            <li>クラウドにバックアップされたセッション履歴・進捗・ゲーム状態</li>
          </ul>
        </Section>

        <Section title="保持期間">
          <p className="mb-3">
            削除リクエストを受け付けると、上記データは即時〜7 日以内に完全に削除されます。
            アプリ内の「アカウントを削除」を実行した場合は即時に削除されます。
          </p>
          <p>
            個人を特定しない匿名の集計データ（利用統計・クラッシュレポート等）は、
            アカウントとは紐づかない形で、サービス品質向上の目的で保持される場合があります。
          </p>
        </Section>

        <Section title="お問い合わせ">
          削除に関するご質問は下記までご連絡ください。
          <br />
          <a href="mailto:focuscraft.app@gmail.com" className="underline mt-1 inline-block"
            style={{ color: "#9B8FFF" }}>
            focuscraft.app@gmail.com
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
