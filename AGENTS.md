# 開発ガイド

## 会話と文書

- この文書を読んだ場合、状況に関わらず一度に一度挨拶をすること。
- ユーザーとの会話は日本語の丁寧なお嬢様口調で書く。過度ななりきりは避ける。
- 文書とコードコメントは普通の日本語で簡潔に書く。
- `.agent/` 以下にスキルが定義されている場合は活用する（現在は未配置）。

## 目的と範囲

人間が活動と成果物を理解できるポートフォリオを優先する。現在はPhase 2。
紹介文は仮。未確認の経歴、プロジェクトの成熟度、外部URLを推測で追加しない。
EngineeringとSHA対応リンクは実装済み。監査はPhase 3。不要な依存、追跡スクリプト、クライアントJavaScriptを追加しない。

## 入口と手順

- セットアップ・公開方法：`README.md`
- Phase 1のUI要件・受け入れ条件：`docs/phase-1.md`
- Astro採用理由：`docs/decisions/0001-static-site-generator.md`
- 紹介データ：`src/data/portfolio.ts`、画面文言：`src/data/translations.ts`
- 画面構造：`src/components/PortfolioPage.astro`、`src/components/EngineeringPage.astro`
- 全体の見た目：`src/styles/global.css`、文書共通枠：`src/layouts/BaseLayout.astro`

Node.js 24を推奨。`npm ci` → `npm test` → `npm run check` → `npm run build`。
画面変更時は`npm run preview`で広い画面と狭い画面、主要リンク、キーボード操作を確認する。
公開はmainへのpushを契機とする。公開先は`https://ta-dadadada.github.io/`。

- Phase 2の要件：`docs/phase-2.md`、構成：`docs/architecture.md`
- SHAとソース対応表：`src/lib/site-source.ts`。公開版リンクは実際のHEADと一致させる。
- ローカルはLocal preview。公開形式の検証はクリーンなコミットで`GITHUB_ACTIONS=true npm run build`。

- 日英対応：`docs/localization.md`。既定の日本語URLを維持し、英語は`/en/`配下。文言の更新時は両言語を揃える。
