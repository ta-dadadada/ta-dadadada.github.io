# ta-dadadada — Portfolio

個人開発と技術的な関心を紹介する、日本語中心の静的ポートフォリオ。
公開先：<https://ta-dadadada.github.io/>

現在はPhase 2の実装。Hero / About / Projects / Writing / Linksを単一ページにまとめています。
紹介文は仮です。各プロジェクトの公開URLと技術記事は未掲載で、確認後に追加します。

## 開発

Node.js 24を推奨します。

```sh
npm ci
npm run dev
```

```sh
npm test
npm run check
npm run build
npm run preview
```

`test`は公開版の参照規則の検証、`check`はAstroとTypeScriptの検証、`build`は`dist/`への静的生成と生成物のリンク整合性検査、`preview`は生成物のローカル確認です。
掲載文は`src/data/portfolio.ts`、ページ構成と固定文は`src/pages/index.astro`、見た目は`src/styles/global.css`を編集します。
外部フォントやトラッキングは使用しません。公開用ビルドにクライアントJavaScriptは不要です。

## 公開

GitHubの Settings → Pages → Build and deployment → Source を **GitHub Actions** に設定してください。
mainへのpushでテスト・型チェック・ビルド後にGitHub Pagesへデプロイします。Actionsから手動実行もできます。
PRではCIがテスト・型チェックとビルドを行い、デプロイしません。
ユーザーサイト用リポジトリ`ta-dadadada.github.io`を使うため、サブパスの設定はありません。
初回公開後は公開URLで表示とリンクを確認してください。設定ファイルの追加だけでは公開完了にはなりません。

## 設計と確認

- [Phase 1の設計・受け入れ条件](docs/phase-1.md)
- [Phase 2の設計・受け入れ条件](docs/phase-2.md)
- [アーキテクチャ](docs/architecture.md)
- [Astroの採用理由](docs/decisions/0001-static-site-generator.md)
- [エージェント向け開発ガイド](AGENTS.md)

[Engineering](https://ta-dadadada.github.io/engineering/)で構成・ADR・公開版のSHAを案内します。
各セクションのsource / dataリンクは公開版と同じコミットのファイルを参照します。
ローカルはLocal previewと表示し、公開版のSHA・対応リンクを出しません。公開形式を検証する場合は、クリーンなコミットで`GITHUB_ACTIONS=true npm run build`を実行します。
参照先を移動したら`src/lib/site-source.ts`を更新してください。
AI-Ready監査と実作業での評価はPhase 3で扱います。
コード・コンテンツのライセンスは未決定です。
