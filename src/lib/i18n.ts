export const locales = ['ja', 'en'] as const;
export type Locale = typeof locales[number];
export type Page = 'portfolio' | 'engineering';

export function pagePath(lang: Locale, page: Page): string {
  const prefix = lang === 'ja' ? '/' : '/en/';
  return page === 'portfolio' ? prefix : `${prefix}engineering/`;
}
