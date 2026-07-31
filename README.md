# 🌱 Pahlawan Sirkular Desa - Team Battle Edition

**Aplikasi Game Kuis Interaktif Klasikal Edukasi Sampah, UMKM, dan Ketahanan Pangan untuk SD.**
Aplikasi ini dikembangkan sebagai luaran Program Kuliah Kerja Mahasiswa (KKM) dan dirancang secara khusus untuk digunakan oleh guru Sekolah Dasar (SD) dalam pembelajaran di kelas.

---

## 🎯 1. Deskripsi Aplikasi
"Pahlawan Sirkular Desa" adalah aplikasi game kuis interaktif yang menggabungkan elemen kompetisi tim, gamifikasi, dan edukasi lingkungan. Aplikasi ini difokuskan pada tiga pilar utama:
1. **Pengelolaan & Pemisahan Sampah**
2. **Ekonomi Sirkular & UMKM Desa**
3. **Ketahanan Pangan Desa**

## 💡 2. Tujuan Aplikasi
- Memudahkan guru dalam memberikan materi edukasi lingkungan secara menyenangkan.
- Melatih kerja sama tim dan diskusi fisik antar siswa di dalam kelas (tanpa membutuhkan smartphone di tangan siswa).
- Meningkatkan kesadaran siswa SD terhadap isu sampah, ekonomi desa, dan pangan lokal sejak dini.

## 🛠️ 3. Teknologi yang Digunakan
- **Framework Utama:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS / Vanilla CSS (dengan desain Glassmorphism & Modern UI)
- **Animasi:** Motion (Framer Motion)
- **Ikon:** Lucide React
- **Fitur Khusus:** Web Speech API (Text-to-Speech), Web Audio API, Canvas Confetti

## 📦 4. Cara Instalasi
Aplikasi ini berjalan di lingkungan Node.js. Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1. Ekstrak atau clone folder project ini.
2. Buka Terminal (Command Prompt / PowerShell) dan arahkan ke folder project ini.
3. Jalankan perintah instalasi dependency:
   ```bash
   npm install
   ```

## 🚀 5. Cara Menjalankan Project (Development)
Untuk menjalankan aplikasi secara lokal (mode pengembangan):
```bash
npm run dev
```
Setelah proses selesai, buka browser (disarankan Google Chrome) dan akses URL yang muncul di terminal (biasanya `http://localhost:5173`).

## 🏗️ 6. Cara Build Project (Production)
Untuk menghasilkan versi final yang dioptimasi dan siap didistribusikan:
```bash
npm run build
```
Hasil build akan berada di dalam folder `dist/`. Folder ini berisi file statis HTML, CSS, dan JS yang siap dijalankan di server apa pun tanpa Node.js.

## 📁 7. Struktur Folder
```
📦 Pahlawan-Sirkular-Desa
├── 📂 public/           # File aset publik statis (favicon, logo)
├── 📂 src/
│   ├── 📂 assets/       # Gambar, ilustrasi, efek suara (mp3/wav)
│   ├── 📂 components/   # Komponen UI React (Gameplay, Timer, Modal, dll)
│   ├── 📂 data/         # Data konten statis
│   │   ├── materials.ts # Data materi bacaan edukasi
│   │   └── questions.json # Data soal-soal kuis dan jawaban
│   ├── 📂 utils/        # Fungsi helper dan logic (Audio, Storage, dll)
│   ├── App.tsx          # Komponen Utama / Router Aplikasi
│   ├── constants.ts     # Konfigurasi konstanta global & pengaturan game
│   ├── types.ts         # Definisi tipe data TypeScript
│   └── main.tsx         # Titik masuk utama aplikasi (Entry Point)
├── index.html           # Template HTML utama
├── package.json         # Konfigurasi dependensi project
├── tailwind.config.js   # Konfigurasi Tailwind CSS
└── vite.config.ts       # Konfigurasi Vite Bundler
```

## 🔍 8. Penjelasan Fungsi Setiap Folder
- **`components/`**: Berisi seluruh elemen antarmuka pengguna (UI) yang dipecah agar mudah dikelola. (Misalnya: `TimerBar.tsx` untuk waktu, `VictoryScreen.tsx` untuk layar juara).
- **`data/`**: Pusat konten edukasi. Jika Anda ingin mengganti isi game, Anda hanya perlu mengedit file di folder ini tanpa menyentuh kode pemrograman.
- **`utils/`**: Kumpulan alat bantu sistem, seperti pengatur suara (`audio.ts`), penyimpan data ke memori lokal browser (`storage.ts`), dan pembaca teks jadi suara otomatis (`speech.ts`).

## 📝 9. Cara Mengganti Soal
Seluruh soal kuis disimpan di dalam file `src/data/questions.json`.
1. Buka file `src/data/questions.json` menggunakan text editor (Notepad, VS Code).
2. Cari level atau misi yang ingin diubah.
3. Edit pada bagian `"question"` untuk mengubah soal, dan pada `"options"` untuk mengubah pilihan jawaban.
4. Pastikan `"correct_index"` menunjuk pada jawaban yang benar (0 untuk A, 1 untuk B, 2 untuk C).
5. Simpan file. Perubahan akan langsung terlihat di aplikasi.

## 📚 10. Cara Mengganti Materi
Materi bacaan disimpan di `src/data/materials.ts`.
1. Buka file `src/data/materials.ts`.
2. Cari pilar materi yang ingin diubah (misalnya Pilar 1 tentang Sampah).
3. Anda dapat mengedit teks pada bagian `title`, `subtitle`, `points`, atau `funFacts`.
4. Simpan file untuk menerapkan perubahan.

## 🖼️ 11. Cara Mengganti Gambar
1. Siapkan gambar pengganti (direkomendasikan berformat PNG transparan atau SVG).
2. Masukkan gambar ke dalam folder `src/assets/`.
3. Buka komponen yang memanggil gambar tersebut (misalnya `QuestionIllustration.tsx`) dan ubah nama file pada bagian `import` sesuai dengan gambar baru Anda.

## 🎵 12. Cara Mengganti Audio
Aplikasi memiliki efek suara seperti benar, salah, dan musik latar (BGM).
1. Siapkan file audio dalam format MP3.
2. Timpa file audio yang ada di folder `src/assets/` dengan nama yang persis sama.
   - BGM: `src/assets/bgm.mp3`
   - Suara benar: `src/assets/correct.mp3`
   - Suara salah: `src/assets/wrong.mp3`
3. Jika nama file berbeda, ubah path pemanggilan audio di file `src/utils/audio.ts`.

## 🌐 13. Cara Deployment (Hosting)
Karena ini adalah aplikasi web statis modern (React/Vite), deployment sangat mudah dan gratis:
1. Jalankan `npm run build`.
2. Upload seluruh isi dari folder `dist/` ke layanan hosting statis seperti:
   - **Vercel** (Rekomendasi)
   - **Netlify**
   - **GitHub Pages**
   - CPanel (Taruh di dalam `public_html`)

## 🔌 14. Cara Menjalankan Secara Offline
Aplikasi ini dapat dijalankan sepenuhnya tanpa koneksi internet di sekolah pelosok!
1. Lakukan build di komputer yang memiliki internet dengan `npm run build`.
2. Instal ekstensi server statis seperti `serve`: `npm install -g serve`.
3. Jalankan aplikasi dari folder hasil build: `serve -s dist`.
4. Buka di browser `http://localhost:3000`.
*(Alternatif sederhana: Anda dapat menggunakan XAMPP/Laragon dan meletakkan isi folder `dist` ke dalam folder `htdocs` / `www` lalu mengaksesnya melalui `http://localhost/Pahlawan-Sirkular-Desa`).*

## ⚠️ 15. Troubleshooting (Pemecahan Masalah)
- **Error saat instalasi (npm install):** Pastikan versi Node.js yang Anda gunakan adalah versi LTS terbaru (Minimal v18+).
- **Suara tidak keluar:** Pastikan browser mengizinkan pemutaran audio (autoplay policy). Klik di mana saja di layar game, atau cek pengaturan volume di navbar aplikasi (Ikon Speaker).
- **Suara pembaca teks (TTS) terdengar seperti robot berbahasa Inggris:** Fitur TTS sangat bergantung pada sistem operasi Windows/Android. Pastikan bahasa Indonesia sudah terinstal di sistem *Speech Recognition* / *Text-to-Speech* perangkat PC yang digunakan.
- **Tampilan berantakan:** Tekan `Ctrl + F5` untuk melakukan Hard Refresh browser agar memuat pembaruan CSS terbaru.

---
*Dibuat dengan ❤️ untuk anak-anak Indonesia yang cerdas dan peduli lingkungan.*
