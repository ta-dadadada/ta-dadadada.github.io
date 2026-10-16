// 紹介文は仮。公開URLや活動状況は確認後に更新する。
export const profile = {
  name: 'ta-dadadada',
  github: 'https://github.com/ta-dadadada',
  introduction: 'ソフトウェアをつくり、そのつくり方を考える。',
  about: 'AIエージェントとソフトウェア開発の関わりを中心に、個人開発や技術的な探究をまとめていく場所です。',
};

interface Project {
  name: string;
  category: string;
  problem: string;
  approach: string;
  status: string;
  url?: string;
}

export const projects: Project[] = [
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
