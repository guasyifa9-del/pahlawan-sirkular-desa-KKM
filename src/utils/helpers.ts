/**
 * helpers.ts
 *
 * Fungsi pembantu (helper) yang digunakan oleh beberapa komponen.
 * Fungsi di sini bersifat murni (pure function) — tidak mengandung side effect.
 */

import { Level, Question, Team, GamePhase, QuizData } from '../types';
import { SavedGameState } from './storage';
import { CharacterType } from '../components/EducationalCharacter';
import { PillarMaterial } from '../data/materials';
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
export function getCharacterType(_questionId: number, mascotName?: string): CharacterType {
  const name = (mascotName || '').toLowerCase();
  if (name.includes('siti') || name.includes('siswi') || name.includes('kreati')) {
    return 'student_girl';
  }
  return 'student';
}

/**
 * Menentukan nama karakter edukasi berdasarkan ID soal.
 * Nama ini ditampilkan sebagai label di bawah ilustrasi karakter.
 */
export function getCharacterName(_questionId: number, defaultMascot: string): string {
  const mascot = (defaultMascot || '').toLowerCase();
  if (mascot.includes('siti') || mascot.includes('siswi') || mascot.includes('kreati')) {
    return 'Siti (Siswi SD) 👧';
  }
  if (mascot.includes('budi') || mascot.includes('siswa') || mascot.includes('kompi')) {
    return 'Budi (Siswa SD) 👦';
  }
  return `${defaultMascot || 'Siswa SD'} 👦`;
}

export interface SubjectMeta {
  icon: string;
  badge: string;
  color: string;
  darkColor: string;
  bgColor: string;
}

/**
 * Mendeteksi ikon, badge, dan warna tema berdasarkan nama mata pelajaran/misi.
 */
export function getSubjectMeta(themeName: string, levelId: number): SubjectMeta {
  const name = (themeName || '').toLowerCase();
  if (name.includes('ipa') || name.includes('ipas') || name.includes('sains') || name.includes('wujud') || name.includes('alam')) {
    return { icon: '🧪', badge: 'IPAS / SAINS', color: '#4CAF50', darkColor: '#1B5E20', bgColor: '#E8F5E9' };
  }
  if (name.includes('matematika') || name.includes('mtk') || name.includes('hitung') || name.includes('bangun')) {
    return { icon: '📐', badge: 'MATEMATIKA', color: '#2196F3', darkColor: '#0D47A1', bgColor: '#E3F2FD' };
  }
  if (name.includes('indonesia') || name.includes('bahasa') || name.includes('b.indo') || name.includes('kata')) {
    return { icon: '📚', badge: 'B. INDONESIA', color: '#FF9800', darkColor: '#E65100', bgColor: '#FFF3E0' };
  }
  if (name.includes('pkn') || name.includes('pancasila') || name.includes('kewarganegaraan') || name.includes('ppkn')) {
    return { icon: '🇮🇩', badge: 'PKN / PANCASILA', color: '#E91E63', darkColor: '#880E4F', bgColor: '#FCE4EC' };
  }
  if (name.includes('agama') || name.includes('pai') || name.includes('isla') || name.includes('moral')) {
    return { icon: '🌙', badge: 'AGAMA / MORAL', color: '#9C27B0', darkColor: '#4A148C', bgColor: '#F3E5F5' };
  }
  if (name.includes('sampah') || name.includes('sirkular') || name.includes('lingkungan') || name.includes('daur ulang')) {
    return { icon: '♻️', badge: 'SIRKULAR & LINGKUNGAN', color: '#00BCD4', darkColor: '#006064', bgColor: '#E0F7FA' };
  }

  const defaults: SubjectMeta[] = [
    { icon: '🧪', badge: `MISI #${levelId}`, color: '#4CAF50', darkColor: '#1B5E20', bgColor: '#E8F5E9' },
    { icon: '📐', badge: `MISI #${levelId}`, color: '#2196F3', darkColor: '#0D47A1', bgColor: '#E3F2FD' },
    { icon: '📚', badge: `MISI #${levelId}`, color: '#FF9800', darkColor: '#E65100', bgColor: '#FFF3E0' },
    { icon: '🇮🇩', badge: `MISI #${levelId}`, color: '#E91E63', darkColor: '#880E4F', bgColor: '#FCE4EC' },
  ];
  return defaults[(levelId - 1) % defaults.length];
}

/**
 * Membuat data materi secara otomatis dari data soal & pesan edukasi jika URL materi khusus tidak diset.
 */
export function buildMaterialsFromQuizData(quizData: QuizData): PillarMaterial[] {
  const colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#E91E63', '#00BCD4'];
  const darkColors = ['#1B5E20', '#0D47A1', '#E65100', '#4A148C', '#880E4F', '#006064'];
  const bgColors = ['#E8F5E9', '#E3F2FD', '#FFF3E0', '#F3E5F5', '#FCE4EC', '#E0F7FA'];

  return quizData.levels.map((level, idx) => {
    const meta = getSubjectMeta(level.theme_name, level.level_id);
    const colorIdx = idx % colors.length;

    const sections = level.questions.map((q, qIdx) => ({
      title: `Topik Pembelajaran #${qIdx + 1}: ${q.question.slice(0, 45)}...`,
      icon: meta.icon,
      points: [
        `❓ **Pertanyaan**: ${q.question}`,
        `💡 **Penjelasan & Kunci**: ${q.education_message || `Jawaban yang tepat adalah pilihan ${q.correct_answer}.`}`
      ]
    }));

    const keyTerms = level.questions.map((q, qIdx) => ({
      term: `Konsep #${qIdx + 1}`,
      definition: q.education_message || q.question
    }));

    return {
      pillarId: level.level_id,
      title: level.theme_name,
      subtitle: `Rangkuman materi pembelajaran untuk ${level.theme_name}`,
      icon: meta.icon,
      mascot: level.mascot,
      themeColor: meta.color || colors[colorIdx],
      themeDark: meta.darkColor || darkColors[colorIdx],
      themeBg: meta.bgColor || bgColors[colorIdx],
      sections,
      funFacts: [
        { icon: '🎯', text: `Terdapat ${level.questions.length} soal latihan interaktif pada mata pelajaran ini.` },
        { icon: '📖', text: 'Pahami setiap pesan edukasi untuk mendapatkan poin maksimal saat bertanding!' }
      ],
      keyTerms
    };
  });
}

