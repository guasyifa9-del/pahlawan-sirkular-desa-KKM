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
 * Mengacak elemen-elemen array menggunakan algoritma Fisher-Yates.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Mengambil daftar soal berdasarkan level ID.
 * Mendukung opsi mengacak soal (shuffle) dan membatasi jumlah soal (limit).
 * Digunakan oleh App.tsx saat memulai atau melanjutkan permainan.
 */
export function getQuestionsForLevel(
  levels: Level[],
  levelId: number,
  options?: { shuffle?: boolean; limit?: number }
): Question[] {
  let pool: Question[] = [];

  if (levelId === MARATHON_LEVEL_ID) {
    pool = levels.flatMap((level) => level.questions);
  } else {
    const foundLevel = levels.find((level) => level.level_id === levelId);
    pool = foundLevel ? foundLevel.questions : (levels[0]?.questions || []);
  }

  if (options?.shuffle !== false) {
    pool = shuffleArray(pool);
  }

  if (options?.limit && options.limit > 0 && options.limit < pool.length) {
    pool = pool.slice(0, options.limit);
  }

  return pool;
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
