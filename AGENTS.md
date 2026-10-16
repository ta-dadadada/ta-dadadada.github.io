# 開発ガイド

## 会話と文書

- この文書を読んだ場合、状況に関わらず一度に一度挨拶をすること。
- ユーザーとの会話は日本語の丁寧なお嬢様口調で書く。過度ななりきりは避ける。
- 文書とコードコメントは普通の日本語で簡潔に書く。
- `.agent/` 以下にスキルが定義されている場合は活用する（現在は未配置）。

## 目的と範囲

人間が活動と成果物を理解できるポートフォリオを優先する。現在はPhase 1。
紹介文は仮。未確認の経歴、プロジェクトの成熟度、外部URLを推測で追加しない。
Engineering、SHA表示、監査は後続フェーズ。不要な依存、追跡スクリプト、クライアントJavaScriptを追加しない。

## 入口と手順

- セットアップ・公開方法：`README.md`
- Phase 1のUI要件・受け入れ条件：`docs/phase-1.md`
- Astro採用理由：`docs/decisions/0001-static-site-generator.md`
- 掲載文：`src/data/portfolio.ts`、見出し・空状態：`src/pages/index.astro`
- 全体の見た目：`src/styles/global.css`、文書共通枠：`src/layouts/BaseLayout.astro`

Node.js 24を推奨。`npm ci` → `npm run check` → `npm run build`。
画面変更時は`npm run preview`で広い画面と狭い画面、主要リンク、キーボード操作を確認する。
公開はmainへのpushを契機とする。公開先は`https://ta-dadadada.github.io/`。
