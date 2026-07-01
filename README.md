# Focus Craft — LP

ポモドーロ × cozy 育成アプリ「Focus Craft」のランディングページ。

🔗 **公開URL: https://lp.focuscraft.workers.dev**

## 構成

- [Next.js 16](https://nextjs.org)（App Router / 静的エクスポート `output: "export"`）
- Tailwind CSS v4
- TypeScript

ページ:

- `/` — トップ（ヒーロー・機能・使い方）
- `/privacy` — プライバシーポリシー
- `/terms` — 利用規約

## 開発

```bash
npm run dev      # 開発サーバー（http://localhost:3000）
npm run build    # 静的ビルド（out/ を生成）
npm run lint
```

## デプロイ

Cloudflare Workers（Static Assets）でホスティング。`main` への push で自動ビルド＆デプロイ（CI/CD）。

```bash
npm run deploy   # next build → out/ を生成し wrangler deploy で配信
```

- ビルド: `npm run build` → `out/` を生成
- 配信: `npm run deploy`（`next build && wrangler deploy`。`wrangler.jsonc` の `assets` で `out/` を配信）
- アクセス解析: Cloudflare Web Analytics（Cookieless）

### 環境変数（任意）

| 変数 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | OGP の絶対URLの基準（独自ドメイン確定後に設定。未設定時は `CF_PAGES_URL` → 既定値の順で解決） |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics のトークン上書き（既定値をコードに同梱済み） |
