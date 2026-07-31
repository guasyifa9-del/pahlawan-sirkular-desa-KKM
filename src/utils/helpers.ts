/**
 * helpers.ts
 *
 * Fungsi pembantu (helper) yang digunakan oleh beberapa komponen.
 * Fungsi di sini bersifat murni (pure function) — tidak mengandung side effect.
 */

import { Level, Question, Team, GamePhase } from '../types';
import { SavedGameState } from './storage';
import { CharacterType } from '../components/EducationalCharacter';
import {
  MARATHON_LEVEL_ID,
  VEGGIE_QUESTION_IDS,
  TRASH_BIN_QUESTION_IDS,
  RECYCLING_QUESTION_IDS,
} from '../constants';

/**
 * Mengambil daftar soal berdasarkan level ID.
 * Jika levelId === MARATHON_LEVEL_ID (99), menggabungkan semua soal dari semua level.
 * Digunakan oleh App.tsx saat memulai atau melanjutkan permainan.
 */
export function getQuestionsForLevel(levels: Level[], levelId: number): Question[] {
  if (levelId === MARATHON_LEVEL_ID) {
    return levels.flatMap((level) => level.questions);
  }

  const foundLevel = levels.find((level) => level.level_id === levelId);
  return foundLevel ? foundLevel.questions : levels[0].questions;
}

/**
 * Membuat payload state permainan untuk disimpan ke localStorage.
 * Mengkonsolidasikan pembuatan objek SavedGameState yang sebelumnya
 * duplikat di beberapa tempat di App.tsx.
 */
export function createGameStatePayload(
  levelId: number,
  questionIndex: number,
  teams: Team[],
): SavedGameState {
  return {
    phase: 'gameplay' as GamePhase,
    levelId,
    questionIndex,
    teams,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Menentukan tipe karakter edukasi berdasarkan ID soal.
 * Karakter ini tampil di education message box saat jawaban di-reveal.
 *
 * Mapping:
 * - Soal tentang sayuran/pangan → 'veggie'
 * - Soal tentang pemilahan sampah → 'trash_bin'
 * - Soal tentang daur ulang/kreativitas → 'recycling'
 * - Soal lainnya → 'student'
 */
export function getCharacterType(questionId: number): CharacterType {
  if (VEGGIE_QUESTION_IDS.includes(questionId)) return 'veggie';
  if (TRASH_BIN_QUESTION_IDS.includes(questionId)) return 'trash_bin';
  if (RECYCLING_QUESTION_IDS.includes(questionId)) return 'recycling';
  return 'student';
}

/**
 * Menentukan nama karakter edukasi berdasarkan ID soal.
 * Nama ini ditampilkan sebagai label di bawah ilustrasi karakter.
 */
export function getCharacterName(questionId: number, defaultMascot: string): string {
  if (VEGGIE_QUESTION_IDS.includes(questionId)) return 'Sayuran Ceria 🥬';
  if (TRASH_BIN_QUESTION_IDS.includes(questionId)) return 'Kompi Bak Sampah 🗑️';
  if (RECYCLING_QUESTION_IDS.includes(questionId)) return 'Kreati Daur Ulang 🎨';
  return `${defaultMascot} & Pahlawan SD 👦`;
}
