export interface Question {
  id: number;
  question: string;
  options: string[];
  correct_answer: string;
  correct_index: number;
  education_message: string;
}

export interface Level {
  level_id: number;
  theme_name: string;
  mascot: 'Kompi' | 'Kreati' | 'Gizi';
  theme_color: string;
  questions: Question[];
}

export interface QuizData {
  game_title: string;
  version: string;
  levels: Level[];
}

export interface Team {
  id: string;
  name: string;
  avatar: string;
  score: number;
  color: string;
}

export type GamePhase = 'menu' | 'setup' | 'material' | 'level_select' | 'gameplay' | 'victory';

export type MascotEmotion = 'idle' | 'thinking' | 'nervous' | 'happy' | 'sad' | 'celebrate';

export interface ScoreLogEntry {
  questionId: number;
  questionText: string;
  timestamp: string;
  teamScores: Record<string, number>; // teamId -> score at that moment
  action: string;
}

export interface GameSettings {
  timerDuration: number; // default 30s
  bgmVolume: number;
  sfxVolume: number;
  soundEnabled: boolean;
  googleSheetsWebhookUrl: string;
  googleSheetsQuestionsUrl: string;
  autoPlayBGM: boolean;
  questionLimit: number; // 0 = semua, 3, 5, 10
  shuffleQuestions: boolean; // default true
}
