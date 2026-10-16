# ADR-0002: 小規模な紹介データをTypeScriptで管理する

## Status
Accepted

## Context
Phase 1では2件のプロジェクトとプロフィールを型付きデータで管理している。
Phase 2の時点でも長文の記事本文やサイト内の記事一覧はなく、紹介内容は今後ブラッシュアップする予定。
方針書ではMarkdownを第一候補としていたため、現時点の規模に必要な管理方法を判断する。

## Decision
当面は`src/data/portfolio.ts`の型付きデータを継続する。
画面文言の配置は[ADR-0005](0005-localization.md)で更新し、日英文言を`src/data/translations.ts`で管理する。
長文コンテンツや複数の記事ページが必要になった時点でMarkdown / Astro Content Collectionsを再検討する。

## Alternatives
- Markdown / Content Collections：長文や多数の記事を管理しやすいが、現在の少数の紹介にはコレクションの定義・取得処理を追加することになる。
- ページへすべて直書き：ファイル数を減らせるが、紹介内容とマークアップの変更を分けにくい。

## Consequences
紹介データの型を確認でき、現在のファイル構成を維持できる。
文章だけを更新する人にもTypeScriptの編集が必要になる。Markdown管理は採用済みと説明しない。
