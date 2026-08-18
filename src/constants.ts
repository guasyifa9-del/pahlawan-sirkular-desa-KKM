/**
 * constants.ts
 *
 * Konstanta global aplikasi "Pahlawan Sirkular Desa".
 * File ini menghilangkan magic number dan hardcoded value
 * yang sebelumnya tersebar di berbagai komponen.
 */

// ─── Konfigurasi Tim ───────────────────────────────────────
/** Jumlah minimum tim yang diperbolehkan dalam satu sesi permainan */
export const MIN_TEAMS = 3;

/** Jumlah maksimum tim yang diperbolehkan dalam satu sesi permainan */
export const MAX_TEAMS = 5;

// ─── Konfigurasi Skor ──────────────────────────────────────
/** Poin yang ditambahkan saat tim menjawab benar */
export const SCORE_INCREMENT = 10;

/** Poin yang dikurangi saat penalti */
export const SCORE_DECREMENT = -5;

/** Poin bonus kecil (+1) */
export const SCORE_BONUS_SMALL = 1;

// ─── Konfigurasi Level ─────────────────────────────────────
/**
 * ID khusus untuk mode marathon (semua soal dari semua level).
 * Bukan level_id dari data, melainkan flag internal untuk menggabungkan semua soal.
 */
export const MARATHON_LEVEL_ID = 99;

// ─── Style Opsi Jawaban ────────────────────────────────────
/**
 * Style untuk setiap opsi jawaban (A, B, C, D) di layar gameplay.
 * Urutan: Biru, Oranye, Pink, Hijau.
 */
export const OPTION_STYLES = [
  {
    bg: 'bg-white',
    border: 'border-[#2196F3]',
    text: 'text-slate-900',
    shadow: 'shadow-[4px_4px_0px_#1976D2]',
    badge: 'bg-[#2196F3] text-white',
  },
  {
    bg: 'bg-white',
    border: 'border-[#FF9800]',
    text: 'text-slate-900',
    shadow: 'shadow-[4px_4px_0px_#E65100]',
    badge: 'bg-[#FF9800] text-white',
  },
  {
    bg: 'bg-white',
    border: 'border-[#E91E63]',
    text: 'text-slate-900',
    shadow: 'shadow-[4px_4px_0px_#C2185B]',
    badge: 'bg-[#E91E63] text-white',
  },
  {
    bg: 'bg-white',
    border: 'border-[#4CAF50]',
    text: 'text-slate-900',
    shadow: 'shadow-[4px_4px_0px_#2E7D32]',
    badge: 'bg-[#4CAF50] text-white',
  },
] as const;

// ─── Gelar Juara Victory Screen ────────────────────────────
/**
 * Gelar kehormatan berdasarkan peringkat akhir di victory screen.
 * Index 0 = juara 1, index 1 = juara 2, dst.
 */
export const VICTORY_TITLES = [
  'Pahlawan Utama Desa 🌟',
  'Pahlawan Bintang Tiga ⭐',
  'Pejuang Lingkungan 🌿',
  'Tim Cerdas Ceria 💡',
  'Tim Semangat Tinggi 🔥',
] as const;

// ─── Mapping Karakter Edukasi ──────────────────────────────
/**
 * Mapping question ID → tipe karakter edukasi.
 * Menentukan ilustrasi karakter mana yang tampil saat pesan edukasi dibuka.
 */
export const VEGGIE_QUESTION_IDS = [1, 2, 7, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
export const TRASH_BIN_QUESTION_IDS = [3, 4, 8];
export const RECYCLING_QUESTION_IDS = [5, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
