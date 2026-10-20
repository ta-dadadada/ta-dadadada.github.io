# Architecture

## 公開までの流れ

紹介データ・Astroページ・CSS → Astroの静的ビルド → dist/ → GitHub Actions → GitHub Pages。
閲覧時にAPIやデータベースを呼び出さない。HTMLとCSS、faviconだけで主要内容を閲覧できる。

## 責務

| 場所 | 責務 |
|---|---|
| src/pages/ | 日英それぞれのURLと共通画面への言語指定 |
| src/components/PortfolioPage.astro | 共通のPortfolio構造 |
| src/components/EngineeringPage.astro | 共通のEngineering構造 |
| src/data/translations.ts | 型付きの日英画面文言 |
| src/lib/i18n.ts | 言語とURL対応 |
| src/data/portfolio.ts | プロフィール・プロジェクト紹介データ |
| src/layouts/BaseLayout.astro | 文書言語、メタ情報、CSS、本文スキップリンク |
| src/components/Footer.astro | Engineering導線と公開版SHAの共通表示 |
| src/components/SourceLinks.astro | 各セクションの対応ソースリンク |
| src/lib/site-source.ts | 公開元SHAの確定、リポジトリURL、対応ファイル・ADR一覧 |
| src/styles/global.css | 両ページの見た目とレスポンシブ対応 |
| docs/decisions/ | 設計判断と理由 |
| scripts/ | 参照版の規則と生成物の整合性検査 |
| .github/workflows/ | CIと公開処理 |

## 公開版との対応

GitHub Actionsで実際にチェックアウトしたHEADの完全なSHAを読み取り、クリーンな作業ツリーであることを確認してビルドする。
同じSHAからコミット、リポジトリのツリー、各実装・文書ファイルへのリンクを生成する。
ファイルの移動時は`src/lib/site-source.ts`の対応表を更新する。ビルド後の検査は対応ファイルの実在とHTMLのリンク先を確認する。
ローカルの開発・プレビューは公開版と区別し、SHAと対応ソースリンクを表示しない。

GitHub上のソース・文書の閲覧にはGitHubが必要だが、公開済みPortfolioの主要内容には外部データ取得が不要。
ソース対応リンクはファイル単位であり、特定の行や1対1のUI要素まで保証するものではない。
公開済みの過去版におけるリンクは、その版のSHAを参照し続ける。

## 検証

`npm test`で公開・ローカルの区別と不正な公開状態の拒否を確認する。
`npm run check`で型を確認し、`npm run build`で静的生成とリンクの整合性を検証する。
CIとデプロイの両方で同じ検証を行う。ブラウザーでの確認範囲は各フェーズの記録に分ける。
監査はPhase 3で実施予定であり、これらの確認はAI-Readyの品質保証を意味しない。

日英の4ページを静的生成する。言語切替とメタ情報は`docs/localization.md`、選定理由はADR-0005を参照する。

Portfolioの現在の表示構成と操作要件は`docs/design.md`に記載する。プロフィールと活動を分けるサイドバー構成を採用している。
