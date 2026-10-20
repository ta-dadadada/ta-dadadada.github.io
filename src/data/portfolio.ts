import type { Locale } from '../lib/i18n';

// 紹介文は仮。公開URLや活動状況は確認後に更新する。
export const profile = {
  name: 'ta-dadadada',
  github: 'https://github.com/ta-dadadada',
  speakerdeck: 'https://speakerdeck.com/tadadadada',
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
  {
    name: 'trrbot-ts-bolt',
    category: 'SLACK / BOT',
    problem: 'Slack上で、サイコロや選択肢のランダム抽選を使えるようにする。',
    approach: 'TypeScriptとSlack Boltで実装したSlackボット。',
    status: 'GitHubでソースコードを公開しています。',
    url: 'https://github.com/ta-dadadada/trrbot-ts-bolt',
  },
  {
    name: 'skills',
    category: 'DEVELOPER TOOLS / AI',
    problem: 'AIエージェントとの開発手順を、再利用できる形にまとめる。',
    approach: '開発作業の手順をSKILL.mdとして管理・配布する、Agent Skills形式のスキル集。',
    status: 'GitHubでソースコードを公開しています。',
    url: 'https://github.com/ta-dadadada/skills',
  },
];


export const portfolio: Record<Locale, { about: string; projects: Project[] }> = {
  ja: {
    about: 'AIエージェントとソフトウェア開発の関わりを中心に、個人開発や技術的な探究をまとめていく場所です。',
    projects: jaProjects,
  },
  en: {
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
      {
        name: 'trrbot-ts-bolt',
        category: 'SLACK / BOT',
        problem: 'Roll dice and randomly pick from a set of options in Slack.',
        approach: 'A Slack bot built with TypeScript and Slack Bolt.',
        status: 'Source code is available on GitHub.',
        url: 'https://github.com/ta-dadadada/trrbot-ts-bolt',
      },
      {
        name: 'skills',
        category: 'DEVELOPER TOOLS / AI',
        problem: 'Make development workflows with AI agents reusable.',
        approach: 'A collection in the Agent Skills format, distributing development workflows as SKILL.md files.',
        status: 'Source code is available on GitHub.',
        url: 'https://github.com/ta-dadadada/skills',
      },
    ],
  },
};


// ユーザー提供のSpeaker Deck公開一覧で2026-10-21に確認。資料本文は日本語。
export const talks = [
  {
    title: {
      ja: '【NRUG : New Relic User Group@20210915】Prometheus を捨てない NewRelic の活用方法',
      en: 'NRUG: Using New Relic without giving up Prometheus',
    },
    url: 'https://speakerdeck.com/tadadadada/nrug-lt-20210915',
  },
  {
    title: {
      ja: '【春のAWS コンテナ祭り】コンテナうまみつらみ〜Kubernetes初心者がEKSと格闘した1年を振り返る',
      en: 'AWS Container Festival: Lessons from a first year with Kubernetes and EKS',
    },
    url: 'https://speakerdeck.com/tadadadada/aws-container-matsuri-20200320',
  },
  {
    title: {
      ja: 'コンテナうまみつらみ〜Kubernetes初心者がEKSと格闘した1年を振り返る',
      en: 'The ups and downs of containers: A first year with Kubernetes and EKS',
    },
    url: 'https://speakerdeck.com/tadadadada/container-umami-tsurami',
  },
];
