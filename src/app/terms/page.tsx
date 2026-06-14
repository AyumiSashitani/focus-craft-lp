import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | Focus Craft",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-2xl mx-auto" style={{ color: "white" }}>
      <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70" style={{ color: "#9B8FFF" }}>
        ← Focus Craft
      </Link>
      <h1 className="text-3xl font-bold mb-2">利用規約</h1>
      <p className="text-sm mb-10" style={{ color: "#8B8BA7" }}>最終更新日：2026年6月14日</p>
      <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: "#c8c8d8" }}>
        <Section title="1. 同意">
          本アプリ「Focus Craft」をダウンロード・使用することで、本利用規約に同意したものとみなします。同意いただけない場合は、本アプリの使用をお控えください。
        </Section>
        <Section title="2. 利用許諾">
          開発者は、本規約の条件に従い、本アプリを個人・非商用目的で使用する非独占的・譲渡不可のライセンスを付与します。
        </Section>
        <Section title="3. 禁止事項">
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2">
            <li>本アプリのリバースエンジニアリング、改変、複製</li>
            <li>本アプリを商用目的で再配布すること</li>
            <li>本アプリを違法または不正な目的で使用すること</li>
            <li>本アプリの運営を妨害する行為</li>
          </ul>
        </Section>
        <Section title="4. 知的財産">
          本アプリおよびそのコンテンツに関するすべての知的財産権は、開発者または正当な権利者に帰属します。
        </Section>
        <Section title="5. サービスの変更・終了">
          開発者は、予告なく本アプリの機能変更・アップデート・サービス終了を行う権利を留保します。
        </Section>
        <Section title="6. 免責事項">
          本アプリは「現状のまま」提供されます。本アプリの使用により生じたいかなる損害についても、開発者は責任を負いません。
        </Section>
        <Section title="7. 課金・サブスクリプション（将来対応予定）">
          将来的に有料機能を提供する場合、課金条件・返金ポリシーについてはアプリ内および本規約の更新版にて明示します。
        </Section>
        <Section title="8. 準拠法">
          本規約は日本法を準拠法とし、紛争が生じた場合は東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </Section>
        <Section title="9. 規約の変更">
          本規約は予告なく変更される場合があります。変更後に本アプリを使用し続けた場合、変更後の規約に同意したものとみなします。
        </Section>
        <Section title="10. お問い合わせ">
          <a href="mailto:sashiiii.dev@gmail.com" className="underline" style={{ color: "#9B8FFF" }}>sashiiii.dev@gmail.com</a>
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
