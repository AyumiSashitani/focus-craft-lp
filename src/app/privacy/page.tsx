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
      <p className="text-sm mb-10" style={{ color: "#8B8BA7" }}>最終更新日：2026年7月21日</p>

      <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: "#c8c8d8" }}>
        <Section title="1. はじめに">
          Focus Craft（以下「本アプリ」）は、Ayumi Sashitani（以下「開発者」）が提供する
          ポモドーロタイマーアプリです。本ポリシーは、本アプリおよび本ウェブサイトにおける
          データの取り扱いについて説明します。
        </Section>

        <Section title="2. 収集する情報">
          <p className="mb-3">本アプリは以下の情報を収集することがあります。</p>
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2">
            <li>
              <strong className="text-white">利用統計情報</strong>
              （Firebase Analytics）：セッションの開始・完了・中断などのイベント、
              画面遷移など。個人を特定しない匿名データです。
            </li>
            <li>
              <strong className="text-white">クラッシュレポート</strong>
              （Firebase Crashlytics）：アプリ異常終了時の情報。デバッグ目的のみに使用します。
            </li>
            <li>
              <strong className="text-white">パフォーマンスデータ</strong>
              （Firebase Performance）：起動時間など。
            </li>
            <li>
              <strong className="text-white">端末識別子・通知トークン</strong>
              （Firebase Cloud Messaging）：リマインダー通知の送信に使用します。
            </li>
            <li>
              <strong className="text-white">メールアドレス（任意）</strong>
              ：Google でサインインした場合に取得し、アカウントの識別・管理に使用します。
              Apple でのサインインではユーザー識別子のみを取得し、
              <strong className="text-white">お名前・メールアドレスは取得しません</strong>。
            </li>
            <li>
              <strong className="text-white">AI相棒とのチャット内容</strong>
              ：アプリ内の「相棒とおしゃべり」機能をご利用の場合、会話内容は応答を
              生成するために外部の生成AIサービス（OpenRouter）へ送信されます。
              会話の一部は相棒の「記憶」として要約され、アカウントに紐づけて
              Firebase Firestore に保存されます。
            </li>
          </ul>
        </Section>

        <Section title="3. クラウドへの保存とバックアップ">
          セッション履歴・進捗・ゲーム状態は、お使いの端末に保存されるほか、
          Firebase Firestore にも保存されます。これはアカウントの識別子に紐づき、
          機種変更や再インストール時にデータを復元するために使用します。
          Apple または Google でサインインすると、複数の端末間で同じデータを引き継げます。
        </Section>

        <Section title="4. 情報の利用目的">
          収集した情報は以下の目的にのみ使用します。
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2 mt-3">
            <li>アプリの機能提供（進捗の保存・復元）</li>
            <li>アプリの品質改善およびバグ修正</li>
            <li>機能の使われ方の把握（UX 改善）</li>
          </ul>
          収集した情報を第三者に販売することはありません。また、広告や行動トラッキングの
          目的には使用しません。
        </Section>

        <Section title="5. 広告・トラッキングについて">
          本アプリは広告を表示せず、広告 ID（Advertising ID）も使用しません。
          ユーザーを追跡したり、データを広告目的に利用したりすることはありません。
        </Section>

        <Section title="6. 第三者サービス">
          本アプリは以下の第三者サービスを使用しています。
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2 mt-3">
            <li>
              <strong className="text-white">Firebase（Google LLC）</strong>
              ：Analytics・Crashlytics・Performance・Firestore・Authentication・
              Cloud Messaging。データは Google のプライバシーポリシーおよび
              データ処理契約（DPA）に基づき処理されます。
              <a href="https://policies.google.com/privacy"
                className="ml-1 underline" style={{ color: "#9B8FFF" }}
                target="_blank" rel="noopener noreferrer">
                Google のプライバシーポリシー
              </a>
            </li>
            <li>
              <strong className="text-white">OpenRouter</strong>
              ：AI相棒とのチャット機能で、応答を生成するために会話内容を送信します。
              データは OpenRouter のプライバシーポリシーに基づき処理されます。
              <a href="https://openrouter.ai/privacy"
                className="ml-1 underline" style={{ color: "#9B8FFF" }}
                target="_blank" rel="noopener noreferrer">
                OpenRouter のプライバシーポリシー
              </a>
            </li>
          </ul>
        </Section>

        <Section title="7. データの削除とユーザーの権利">
          <p className="mb-3">
            ユーザーは、自身のデータへのアクセス・訂正・削除をリクエストできます。
          </p>
          <ul className="list-disc list-inside flex flex-col gap-2 ml-2">
            <li>
              <strong className="text-white">削除</strong>
              ：アプリ内の「設定 → アカウント → アカウントを削除」から、
              またはアプリ削除後は下記メールアドレスからリクエストできます。
              手順の詳細は
              <Link href="/delete-account" className="ml-1 underline" style={{ color: "#9B8FFF" }}>
                アカウントとデータの削除
              </Link>
              をご覧ください。
            </li>
          </ul>
          <p className="mt-4">
            EU / EEA・英国のユーザーは、GDPR に基づく権利（アクセス・訂正・削除・
            処理の制限・データポータビリティ等）を有します。処理の法的根拠は、
            アプリ機能を提供するための契約の履行、および品質改善に関する開発者の
            正当な利益です。行使をご希望の場合は下記までご連絡ください。
          </p>
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
          プライバシーに関するご質問・権利行使のリクエストは下記までご連絡ください。
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
