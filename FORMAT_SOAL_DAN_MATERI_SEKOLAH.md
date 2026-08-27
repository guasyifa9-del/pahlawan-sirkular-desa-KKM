# 📝 PANDUAN PRAKTIS GURU: MEMBUAT SOAL & MATERI UNTUK BANYAK KELAS
**Aplikasi Game Kuis Interaktif: Pahlawan Sirkular Desa (Team Battle Edition)**

Panduan sederhana ini dibuat khusus untuk Bapak & Ibu Guru agar mudah membuat soal berbagai mata pelajaran (IPA, Matematika, Bahasa Indonesia, PKn, Agama) dalam **1 file Google Sheets saja**, tanpa perlu pusing buat banyak link!

---

## 💡 GAMBARAN SINGKAT (BIAR TIDAK BINGUNG)

Bapak/Ibu Guru **tidak perlu membuat banyak file**. Cukup **1 file Google Sheets saja** untuk 1 sekolah!

* **Apakah aman jika digunakan bersamaan?**
  SANGAT AMAN! Jika Ibu Guru Matematika mengajar di Kelas 4A dan Pak Guru IPA mengajar di Kelas 4B di jam yang persis sama:
  * Ibu Guru tinggal memilih **Misi Matematika** di laptopnya.
  * Pak Guru tinggal memilih **Misi IPA** di laptopnya.
  * Nilai kelompok murid di Kelas 4A dan Kelas 4B **TIDAK AKAN TERCAMPUR** karena tersimpan di laptop masing-masing.

---

## 📝 LANGKAH 1: CARA MENGISI TABEL SOAL DI GOOGLE SHEETS

Buka Google Sheets di HP/Laptop Bapak/Ibu Guru. Di baris paling atas (baris ke-1), tuliskan judul kolom berikut ini (gunakan huruf kecil semua):

### 📋 Contoh Tabel Soal Siap Pakai:

| level_id | id | theme_name | mascot | question | option_a | option_b | option_c | correct_answer | education_message |
| :---: | :---: | :--- | :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| **1** | 1 | IPAS - Wujud Benda | Kompi | Es batu yang mencair termasuk perubahan wujud... | A. Fisika | B. Kimia | C. Biologi | A | Mencair adalah perubahan wujud fisika karena dapat kembali membeku. |
| **1** | 2 | IPAS - Wujud Benda | Kompi | Air mendidih yang berubah menjadi uap disebut... | A. Membeku | B. Menguap | C. Menyublim | B | Menguap adalah perubahan wujud dari zat cair menjadi gas. |
| **2** | 1 | Matematika - Bangun Datar | Kreati | Bangun datar yang memiliki 4 sisi sama panjang adalah... | A. Segitiga | B. Persegi | C. Lingkaran | B | Persegi memiliki 4 sisi yang sama panjang dan 4 sudut siku-siku. |
| **2** | 2 | Matematika - Bangun Datar | Kreati | Jumlah sudut pada bangun segitiga adalah... | A. 3 | B. 4 | C. 5 | A | Segitiga memiliki tepat 3 sudut. |
| **3** | 1 | B. Indonesia - Kata Dasar | Kreati | Kata dasar dari kata "menanam" adalah... | A. Nanam | B. Tanam | C. Atam | B | Kata dasar tanam diberi awalan me- menjadi menanam. |
| **4** | 1 | PKn - Simbol Pancasila | Gizi | Gambar Pohon Beringin merupakan simbol Pancasila sila ke... | A. Sila ke-2 | B. Sila ke-3 | C. Sila ke-4 | B | Pohon beringin melambangkan Persatuan Indonesia pada Sila ke-3. |

### 📌 Penjelasan Singkat Kolom (Sangat Mudah!):
1. `level_id`: Angka kode pemisah pelajaran (`1` untuk IPA, `2` untuk Matematika, `3` untuk B. Indonesia, `4` untuk PKn, dst).
2. `id`: Nomor urut soal (`1`, `2`, `3`, dst).
3. `theme_name`: Nama Pelajaran & Bab yang ingin muncul di layar game.
4. `question`: Pertanyaan kuis yang akan dibaca murid di proyektor.
5. `option_a`, `option_b`, `option_c`: Pilihan jawaban A, B, dan C.
6. `correct_answer`: Kunci jawaban benar (**Wajib Huruf Besar**: `A`, `B`, atau `C`).
7. `education_message`: Penjelasan singkat yang akan **dibacakan oleh Suara Robot** setelah soal dijawab!
8. `mascot` *(Opsional)*: Pilihan nama karakter maskot pendamping (`Kompi`, `Kreati`, atau `Gizi`).

---

## 🤖 CARA MENYESUAIKAN MASKOT (KARAKTER GAME)

Aplikasi memiliki 3 Karakter Maskot Edukasi:
- 🟢 **Kompi**: Kapten Pemilahan Sampah & Lingkungan *(Tema Warna Hijau)*
- 🔵 **Kreati**: Pahlawan Kreasi Daur Ulang & UMKM *(Tema Warna Biru)*
- 🟧 **Gizi**: Ksatria Nutrisi & Ketahanan Pangan *(Tema Warna Oranye)*

### 💡 Penyesuaian Maskot:
1. **Otomatis (Default)**: Jika kolom `mascot` tidak diisi, sistem akan otomatis menentukan maskot berdasarkan `level_id`:
   * `level_id: 1` ➡️ **Kompi** 🟢
   * `level_id: 2` ➡️ **Kreati** 🔵
   * `level_id: 3` ➡️ **Gizi** 🟧
   * `level_id: 4` ➡️ Kembali ke **Kompi** 🟢, dst.
2. **Kustom (Sesuai Keinginan Guru)**: Jika Bapak/Ibu Guru ingin menentukan sendiri maskotnya, cukup tambahkan kolom `mascot` di Google Sheets dan isi dengan nama `Kompi`, `Kreati`, atau `Gizi`.

---

## 📚 LANGKAH 1B: CARA MENGISI TABEL MATERI EDUKASI (JIKA PERLU)

Selain soal kuis, aplikasi juga memiliki **Modul Materi Edukasi Interaktif** (lengkap dengan fitur cetak PDF/kertas, kartu istilah, dan fakta menarik). 

Jika Bapak/Ibu Guru ingin menyusun rangkuman materi pembelajaran per pelajaran dalam format tabel Google Sheets, berikut adalah contoh struktur kolomnya:

### 📋 Contoh Tabel Materi Pembelajaran Siap Pakai:

| pilar_id | judul_materi | sub_judul | ikon | nama_bab | poin_penjelasan | istilah_penting | fakta_menarik |
| :---: | :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **1** | Pengelolaan & Pemisahan Sampah | Belajar memilah sampah untuk bumi yang lebih bersih! | ♻️ | 3 Jenis Sampah | • **Organik**: sisa apel, daun kering<br>• **Anorganik**: botol plastik, kaleng<br>• **B3**: baterai bekas, obat kadaluarsa | **Organik**: Sampah alami dari makhluk hidup yang bisa membusuk. | 🐢 Penyu laut sering mengira kantong plastik sebagai ubur-ubur! |
| **1** | Pengelolaan & Pemisahan Sampah | Belajar memilah sampah untuk bumi yang lebih bersih! | ♻️ | Jurus 3R | • **Reduce**: kurangi kantong plastik<br>• **Reuse**: pakai ulang botol selai<br>• **Recycle**: daur ulang kertas bekas | **3R**: Reduce (Kurangi), Reuse (Pakai Ulang), Recycle (Daur Ulang). | ⏳ Kaleng aluminium bisa didaur ulang tanpa batas! |
| **2** | Ekonomi Sirkular & UMKM Desa | Kreatif mengolah limbah jadi cuan! | 💡 | Upcycling Limbah | • Kain perca -> tas & keset cantik<br>• Botol bekas -> pot bunga gantung<br>• Minyak jelantah -> sabun cuci | **Upcycling**: Mengubah barang bekas jadi barang baru bernilai lebih tinggi. | 🫧 1 liter jelantah bisa mencemari 1 juta liter air bersih jika dibuang ke selokan. |
| **3** | Ketahanan Pangan & Gizi Desa | Menanam, memelihara & menjaga gizi desa! | 🌾 | Isi Piringku & MBG | • 1/2 piring: Sayur & Buah-buahan<br>• 1/2 piring: Karbohidrat & Lauk-pauk<br>• Biasakan air putih & sarapan | **Gizi Seimbang**: Susunan makanan harian sesuai kebutuhan tubuh. | 🍳 Sarapan pagi terbukti meningkatkan fokus belajar hingga 20%! |

---

## 🌐 LANGKAH 2: CARA MENGAMBIL LINK GOOGLE SHEETS (CUKUP 1 KALI)

Setelah soal selesai diketik di Google Sheets:
1. Klik menu **File** (di pojok kiri atas Google Sheets).
2. Klik **Bagikan (Share)** ➡️ Pilih **Publikasikan di Web**.
3. Ubah kotak pilihan dari *Halaman Web* menjadi **Nilai yang dipisahkan koma (.csv)**.
4. Klik tombol hijau **Publikasikan** ➡️ Klik **OK**.
5. **Salin/Copy Link Panjang** yang muncul. Kirimkan link ini ke grup WhatsApp guru-guru sekolah agar semua guru bisa pakai link yang sama.

---

## 🎮 LANGKAH 3: CARA GURU MENGGUNAKANNYA DI KELAS

Saat masuk kelas dan menyambungkan laptop ke Proyektor:
1. Buka website game kuis di laptop Guru.
2. Klik tombol **Pengaturan (Icon Gerigi di pojok kanan atas)** ➡️ Tempelkan (Paste) Link Google Sheets tadi ➡️ Klik **Simpan Pengaturan**.
3. Di layar pilihan game, akan langsung muncul tombol-tombol pelajaran:
   * 🟢 **Misi #1**: IPAS - Wujud Benda
   * 🔵 **Misi #2**: Matematika - Bangun Datar
   * 🟧 **Misi #3**: B. Indonesia - Kata Dasar
   * 🟣 **Misi #4**: PKn - Simbol Pancasila
4. **Bapak/Ibu Guru Tinggal Klik Pelajaran yang Mau Diajarkan Hari Itu!**
   * Pak Guru IPA di Kelas 4A klik **Misi #1**.
   * Ibu Guru Matematika di Kelas 4B (di jam yang sama) klik **Misi #2**.
5. Sebelum kuis dimulai, siswa dapat diajak membaca **Materi Edukasi Interaktif** terlebih dahulu, atau Guru dapat mengklik tombol **🖨️ Cetak Materi** untuk mencetak rangkuman materi dalam format PDF / Kertas!
6. Setelah kuis selesai, klik tombol **Unduh Rekap Nilai (.CSV)**. File nilai kelompok murid kelas masing-masing akan otomatis terunduh ke laptop guru dalam bentuk file Excel!

---
*Dokumen ini disusun dengan bahasa yang ringkas dan praktis agar dapat langsung dipahami oleh Bapak/Ibu Guru di sekolah.*
