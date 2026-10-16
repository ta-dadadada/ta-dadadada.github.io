# ADR-0001: Astroで静的サイトを生成する

## Status
Accepted

## Context
日本語中心の小規模なポートフォリオをGitHub Pagesで公開する。ブラウザーでの動的処理は不要で、保守負担を小さくしたい。

## Decision
AstroとTypeScript、通常のCSSを採用し、静的HTMLを生成する。UIフレームワークは追加しない。
Phase 1では少数の紹介を型付きデータで管理する。MarkdownやContent Collectionsの採否はコンテンツの増加時に判断する。

## Alternatives
- HTMLを直接書く：依存関係を減らせるが、レイアウトの再利用やビルド時の型検証を別途整える必要がある。
- React等のアプリ構成：今回必要のない状態管理やクライアント実行の選択肢を増やす。

## Consequences
クライアントJavaScriptなしで公開でき、レイアウトと紹介データを分離できる。
一方、Node.jsとAstroの依存関係は維持する必要がある。Markdown管理は未採用で、必要になれば改めて判断する。
