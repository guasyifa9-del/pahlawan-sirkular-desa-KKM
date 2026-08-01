# Panduan Membuat & Mengubah Soal Kuis Dinamis

Dokumen ini berisi panduan bagi Bapak/Ibu Guru untuk membuat, mengubah, atau menambahkan soal kuis baru menggunakan **Google Sheets**, tanpa perlu mengotak-atik kode aplikasi.

---

## Tahap 1: Membuat Format Tabel di Google Sheets

1. Buka [Google Sheets](https://docs.google.com/spreadsheets/).
2. Buat lembar kerja (Spreadsheet) baru.
3. Pada **Baris Pertama (Baris 1)**, ketikkan judul kolom persis seperti di bawah ini (harus huruf kecil semua, tanpa spasi):

| Kolom A | Kolom B | Kolom C | Kolom D | Kolom E | Kolom F | Kolom G | Kolom H |
|---|---|---|---|---|---|---|---|
| `level_id` | `id` | `question` | `option_a` | `option_b` | `option_c` | `correct_answer` | `education_message` |

---

## Tahap 2: Cara Mengisi Kolom Soal

Silakan isi baris kedua dan seterusnya dengan soal-soal Bapak/Ibu. Berikut adalah penjelasan untuk tiap-tiap kolom:

*   **`level_id`** : Isi dengan angka `1`, `2`, atau `3`.
    *   `1` = Misi 1 (Tema Lingkungan / Sampah)
    *   `2` = Misi 2 (Tema UMKM / Ekonomi Kreatif)
    *   `3` = Misi 3 (Tema Kebun Gizi / Kesehatan)
*   **`id`** : Isi dengan angka urut soal (contoh: 1, 2, 3, dst). Angka ini hanya untuk penanda saja.
*   **`question`** : Teks pertanyaan atau soal yang ingin ditanyakan.
*   **`option_a`** : Teks untuk pilihan jawaban A.
*   **`option_b`** : Teks untuk pilihan jawaban B.
*   **`option_c`** : Teks untuk pilihan jawaban C.
*   **`correct_answer`** : Kunci jawaban yang benar. Cukup isi dengan huruf **A**, **B**, atau **C**.
*   **`education_message`** : Penjelasan edukatif atau fakta pendukung yang akan muncul dan dibacakan (Suara Robot) saat soal berhasil dijawab.

### Contoh Pengisian di Google Sheets:

| level_id | id | question | option_a | option_b | option_c | correct_answer | education_message |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 1 | Apa warna daun yang segar sehat? | A. Hitam | B. Hijau | C. Merah Muda | B | Karena daun mengandung klorofil atau zat hijau daun. |
| 2 | 2 | Apa kepanjangan dari UMKM? | A. Usaha Maju | B. Usaha Mikro Kecil dan Menengah | C. Usaha Menengah | B | UMKM adalah tulang punggung ekonomi kerakyatan di desa. |

---

## Tahap 3: Mempublikasikan Google Sheets Menjadi Link CSV

Agar aplikasi kuis dapat "membaca" data dari Google Sheets ini secara otomatis, tabelnya harus dipublikasikan ke publik dengan format CSV.

1. Di Google Sheets, klik menu **File** (berada di kiri atas).
2. Pilih **Bagikan** (Share) -> **Publikasikan di Web** (Publish to web).
3. Akan muncul sebuah kotak pop-up.
4. Pada bagian "Seluruh dokumen" atau "Web page", klik panah bawah dan ganti menjadi **Nilai yang dipisahkan koma (.csv)** atau **Comma-separated values (.csv)**.
5. Klik tombol hijau **Publikasikan** (Publish) lalu klik **OK**.
6. Akan muncul sebuah **Link URL yang panjang**.
7. **Salin (Copy)** link URL panjang tersebut.

---

## Tahap 4: Memasukkan Link ke Aplikasi Kuis

1. Buka aplikasi Kuis / Game.
2. Klik tombol berlogo **Gerigi (Settings/Pengaturan)** di pojok kanan atas layar beranda (layar saat memilih tim).
3. Cari kolom input bernama **"URL Google Sheets Soal Kuis (Format CSV)"**.
4. **Tempel (Paste)** link URL yang tadi sudah disalin dari Google Sheets ke dalam kotak tersebut.
5. Klik tombol **Simpan Pengaturan**.

**Selesai! 🎉**
Mulai permainannya, dan soal-soal yang muncul di aplikasi akan secara otomatis mengambil dari tabel Google Sheets yang sudah Bapak/Ibu buat!
