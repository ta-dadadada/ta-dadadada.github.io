import { execFileSync } from 'node:child_process';

export const repository = 'https://github.com/ta-dadadada/ta-dadadada.github.io';

export function resolveRevision(sha: string, dirty: boolean, publicBuild: boolean): string | null {
  if (!publicBuild) return null;
  if (!/^[a-f0-9]{40}$/.test(sha)) throw new Error('公開ビルドのコミットSHAが不正です。');
  if (dirty) throw new Error('公開ビルドには未コミット変更を含められません。');
  return sha;
}

export const revision = resolveRevision(
  execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
  execFileSync('git', ['status', '--porcelain', '--untracked-files=normal'], { encoding: 'utf8' }).trim().length > 0,
  process.env.GITHUB_ACTIONS === 'true',
);

export function sourceUrl(path: string): string | null {
  return revision ? `${repository}/blob/${revision}/${path}` : null;
}

export const commitUrl = revision ? `${repository}/commit/${revision}` : null;
export const repositoryUrl = revision ? `${repository}/tree/${revision}` : repository;

export const sectionSources = {
  hero: [{ label: 'source', path: 'src/components/PortfolioPage.astro' }, { label: 'copy', path: 'src/data/translations.ts' }],
  about: [{ label: 'source', path: 'src/components/PortfolioPage.astro' }, { label: 'copy', path: 'src/data/translations.ts' }, { label: 'data', path: 'src/data/portfolio.ts' }],
  projects: [{ label: 'source', path: 'src/components/PortfolioPage.astro' }, { label: 'copy', path: 'src/data/translations.ts' }, { label: 'data', path: 'src/data/portfolio.ts' }],
  writing: [{ label: 'source', path: 'src/components/PortfolioPage.astro' }, { label: 'copy', path: 'src/data/translations.ts' }],
  talks: [{ label: 'source', path: 'src/components/PortfolioPage.astro' }, { label: 'copy', path: 'src/data/translations.ts' }, { label: 'data', path: 'src/data/portfolio.ts' }],
  links: [{ label: 'source', path: 'src/components/PortfolioPage.astro' }, { label: 'copy', path: 'src/data/translations.ts' }, { label: 'data', path: 'src/data/portfolio.ts' }],
};

export const decisions = [
  { title: { ja: 'ADR-0001: Astroで静的サイトを生成する', en: 'ADR-0001: Generate a static site with Astro' }, path: 'docs/decisions/0001-static-site-generator.md' },
  { title: { ja: 'ADR-0002: 小規模な紹介データをTypeScriptで管理する', en: 'ADR-0002: Manage small-scale content in TypeScript' }, path: 'docs/decisions/0002-content-management.md' },
  { title: { ja: 'ADR-0003: 公開コミットをソース参照の基準にする', en: 'ADR-0003: Use the published commit as the source reference' }, path: 'docs/decisions/0003-source-transparency.md' },
  { title: { ja: 'ADR-0004: 公開コンテンツを外部サービスに依存させない', en: 'ADR-0004: Keep published content independent of external services' }, path: 'docs/decisions/0004-external-dependencies.md' },
  { title: { ja: 'ADR-0005: URLで言語を分けて静的生成する', en: 'ADR-0005: Generate language-specific static URLs' }, path: 'docs/decisions/0005-localization.md' },
];
