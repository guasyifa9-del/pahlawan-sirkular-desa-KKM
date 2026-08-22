import { Team, GamePhase, GameSettings, ScoreLogEntry } from '../types';

const TEAMS_KEY = 'pahlawan_sirkular_teams';
const SCORES_KEY = 'pahlawan_sirkular_scores';
const SETTINGS_KEY = 'pahlawan_sirkular_settings';
const LOGS_KEY = 'pahlawan_sirkular_score_logs';
export const GAME_STATE_KEY = 'pahlawan_sirkular_game_state';

export const defaultSettings: GameSettings = {
  timerDuration: 30,
  bgmVolume: 0.3,
  sfxVolume: 0.8,
  soundEnabled: true,
  googleSheetsWebhookUrl: '',
  googleSheetsQuestionsUrl: '',
  autoPlayBGM: true,
  questionLimit: 0,
  shuffleQuestions: true,
};

export const defaultTeams: Team[] = [
  { id: '1', name: 'Tim Elang', avatar: '🦅', score: 0, color: 'bg-emerald-500' },
  { id: '2', name: 'Tim Harimau', avatar: '🐯', score: 0, color: 'bg-amber-500' },
  { id: '3', name: 'Tim Melati', avatar: '🌸', score: 0, color: 'bg-sky-500' },
  { id: '4', name: 'Tim Garuda', avatar: '🦅', score: 0, color: 'bg-indigo-500' },
];

export function loadTeams(): Team[] {
  try {
    const data = localStorage.getItem(TEAMS_KEY);
    return data ? JSON.parse(data) : defaultTeams;
  } catch {
    return defaultTeams;
  }
}

export function saveTeams(teams: Team[]): void {
  try {
    localStorage.setItem(TEAMS_KEY, JSON.stringify(teams));
  } catch (e) {
    console.error('Failed to save teams', e);
  }
}

export function loadSettings(): GameSettings {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    return data ? { ...defaultSettings, ...JSON.parse(data) } : defaultSettings;
  } catch {
    return defaultSettings;
  }
}

export function saveSettings(settings: GameSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings', e);
  }
}

export function loadScoreLogs(): ScoreLogEntry[] {
  try {
    const data = localStorage.getItem(LOGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addScoreLog(entry: ScoreLogEntry): void {
  try {
    const logs = loadScoreLogs();
    logs.push(entry);
    localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error('Failed to add score log', e);
  }
}

export function clearScoreLogs(): void {
  try {
    localStorage.removeItem(LOGS_KEY);
  } catch (e) {
    console.error('Failed to clear logs', e);
  }
}

export interface SavedGameState {
  phase: GamePhase;
  levelId: number;
  questionIndex: number;
  teams: Team[];
  timestamp: string;
}

export function saveGameState(state: SavedGameState): void {
  try {
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save game state', e);
  }
}

export function loadSavedGameState(): SavedGameState | null {
  try {
    const data = localStorage.getItem(GAME_STATE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function clearSavedGameState(): void {
  try {
    localStorage.removeItem(GAME_STATE_KEY);
  } catch (e) {
    console.error('Failed to clear state', e);
  }
}
