import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | Focus Craft",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-2xl mx-auto" style={{ color: "white" }}>
      <Link href="/"
        className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
        style={{ color: "#9B8FFF" }}>
        ← Focus Craft
      </Link>

      <h1 className="text-3xl font-bold mb-2">利用規約</h1>
      <p className="text-sm mb-10" style={{ color: "#8B8BA7" }}>最終更新日：2026年6月13日</p>

      <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: "#c8c8d8" }}>
        <Section title="1. はじめに">
          本利用規約（以下「本規約」）は、Ayumi Sashitani（以下「開発者」）が提供する
          アプリケーション「Focus Craft」（以下「本アプリ」）および本ウェブサイト
          （以下あわせて「本サービス」）の利用条件を定めるものです。
          本サービスをご利用いただく場合、本規約に同意したものとみなします。
        </Section>

        <Section title="2. 本サービスの内容">
          本サービスは、ポモドーロタイマーを中心とした集中支援機能、集中記録の可視化、
          環境音の再生などを提供します。開発者は、本サービスの内容を予告なく変更・追加・
          停止することがあります。なお、本アプリは現在開発中であり、本ウェブサイトでは
          公開に関するお知らせを希望される方のメールアドレスの事前登録を受け付けています。
        </Section>

        <Section title="3. 事前登録について">
          本ウェブサイトの登録フォームからメールアドレスを送信された場合、
          本アプリの公開やアップデートに関するお知らせを送信することがあります。
          登録は任意であり、各メール内のリンクまたはお問い合わせ先へのご連絡により、
          いつでも配信を停止できます。個人情報の取り扱いについては
          <Link href="/privacy" className="underline mx-1" style={{ color: "#9B8FFF" }}>
            プライバシーポリシー
          </Link>
          をご確認ください。
        </Section>

        <Section title="4. 禁止事項">
          利用者は、本サービスの利用にあたり以下の行為を行ってはなりません。
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2 mt-3">
            <li>法令または公序良俗に反する行為</li>
            <li>本サービスの運営を妨害する行為、または不正アクセスを試みる行為</li>
            <li>本サービスをリバースエンジニアリング・改変・再配布する行為</li>
            <li>開発者または第三者の権利を侵害する行為</li>
            <li>虚偽の情報（他人のメールアドレス等）を登録する行為</li>
          </ul>
        </Section>

        <Section title="5. 知的財産権">
          本サービスおよびこれに付随するコンテンツ（テキスト、画像、ロゴ、デザイン、
          ソフトウェア等）に関する著作権その他の知的財産権は、開発者または正当な権利者に
          帰属します。利用者は、私的利用の範囲を超えてこれらを利用することはできません。
        </Section>

        <Section title="6. 免責事項">
          本サービスは現状有姿で提供され、開発者は本サービスの完全性・正確性・有用性・
          特定目的への適合性を保証しません。本サービスの利用または利用不能により利用者に
          生じた損害について、開発者は法令で認められる範囲で責任を負いません。
          集中記録などのアプリデータは原則として端末内に保存されるため、
          端末の故障・紛失・アプリの削除によりデータが失われる可能性があります。
        </Section>

        <Section title="7. サービスの中断・終了">
          開発者は、システムの保守、障害、その他やむを得ない事由により、
          事前の通知なく本サービスの全部または一部の提供を中断・終了できるものとします。
          これにより利用者に生じた損害について、開発者は責任を負いません。
        </Section>

        <Section title="8. 規約の変更">
          開発者は、必要に応じて本規約を変更することがあります。
          変更後の規約は本ページに掲載した時点から効力を生じ、
          変更後に本サービスを利用された場合、変更後の規約に同意したものとみなします。
        </Section>

        <Section title="9. 準拠法・管轄">
          本規約の解釈および適用は日本法に準拠します。
          本サービスに関して紛争が生じた場合、開発者の所在地を管轄する裁判所を
          第一審の専属的合意管轄裁判所とします。
        </Section>

        <Section title="10. お問い合わせ">
          本規約に関するご質問は下記までご連絡ください。
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
