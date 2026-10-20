# ta-dadadada — Portfolio

個人開発と技術的な関心を紹介する、日本語・英語に対応した静的ポートフォリオ。
公開先：<https://ta-dadadada.github.io/>

現在はPhase 2の実装。プロフィールとリンクをサイドバーに、Projects / Talks / Writingを活動列にまとめています。
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
掲載文は`src/data/portfolio.ts`、画面文言は`src/data/translations.ts`、ページ構成は`src/components/PortfolioPage.astro`と`src/components/EngineeringPage.astro`、見た目は`src/styles/global.css`を編集します。
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
各セクションのsource / copy / dataリンクは公開版と同じコミットのファイルを参照します。
ローカルはLocal previewと表示し、公開版のSHA・対応リンクを出しません。公開形式を検証する場合は、クリーンなコミットで`GITHUB_ACTIONS=true npm run build`を実行します。
参照先を移動したら`src/lib/site-source.ts`を更新してください。
AI-Ready監査と実作業での評価はPhase 3で扱います。
コード・コンテンツのライセンスは未決定です。


## 言語

日本語は`/`と`/engineering/`、英語は`/en/`と`/en/engineering/`です。
ヘッダーの日本語 / Englishで同じ種類のページを切り替えます。既定は日本語で、自動転送や選択の保存はありません。
画面文言と紹介データを更新するときは両言語を揃えてください。GitHub上の構成文書とADRは日本語です。
URL・言語メタ情報・参照リンクはビルド時に4ページ分を検査します。
詳細は[日英対応](docs/localization.md)と[ADR-0005](docs/decisions/0005-localization.md)を参照してください。

登壇資料はTalksに技術記事と分けて掲載し、[Speaker Deck](https://speakerdeck.com/tadadadada)の公開資料3件と一覧へリンクします。
資料の原題・URLと英語の紹介用タイトルは`src/data/portfolio.ts`で管理します。英語ページにも、資料自体は日本語であることを明記しています。
公開一覧は2026-10-21に確認しました。外部資料の埋め込みや自動取得は行いません。

現在の表示構成は[サイドバー付きの活動一覧](docs/design.md)を参照してください。ユーザーが比較案Bを選択し、PCは2列、スマートフォンは1列で表示します。
