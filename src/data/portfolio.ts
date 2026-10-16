import type { Locale } from '../lib/i18n';

// 紹介文は仮。公開URLや活動状況は確認後に更新する。
export const profile = {
  name: 'ta-dadadada',
  github: 'https://github.com/ta-dadadada',
};

interface Project {
  name: string;
  category: string;
  problem: string;
  approach: string;
  status: string;
  url?: string;
}

const jaProjects: Project[] = [
  {
    name: 'AI-ready Repository Audit',
    category: 'REPOSITORY / AI',
    problem: 'AIエージェントに開発を任せるとき、リポジトリはどこまで準備できているか。',
    approach: '開発タスクに照らしてリポジトリを評価し、根拠と改善の余地を整理するプロジェクト。',
    status: '紹介文は仮です。ソースコードの公開リンクは準備中です。',
  },
  {
    name: 'tenko',
    category: 'DEVELOPER TOOLS / AI',
    problem: 'AIコーディングエージェントとの開発を、セッションの記録から振り返る。',
    approach: 'AIコーディングエージェントのセッションログを収集・分析するツール。',
    status: '紹介文は仮です。公開リンク・活動状況は確認後に掲載します。',
  },
];


export const portfolio: Record<Locale, { introduction: string; about: string; projects: Project[] }> = {
  ja: {
    introduction: 'ソフトウェアをつくり、そのつくり方を考える。',
    about: 'AIエージェントとソフトウェア開発の関わりを中心に、個人開発や技術的な探究をまとめていく場所です。',
    projects: jaProjects,
  },
  en: {
    introduction: 'Building software and thinking about how it is built.',
    about: 'A place for personal projects and technical exploration, with a focus on AI agents and software development.',
    projects: [
      {
        name: 'AI-ready Repository Audit',
        category: 'REPOSITORY / AI',
        problem: 'How prepared is a repository for delegating development work to an AI agent?',
        approach: 'A project that evaluates repositories against development tasks, documenting evidence and opportunities for improvement.',
        status: 'Draft introduction. A public source link is not yet available.',
      },
      {
        name: 'tenko',
        category: 'DEVELOPER TOOLS / AI',
        problem: 'Reflecting on development with AI coding agents through session logs.',
        approach: 'A tool for collecting and analyzing session logs from AI coding agents.',
        status: 'Draft introduction. A public link and project status will be added after confirmation.',
      },
    ],
  },
};
