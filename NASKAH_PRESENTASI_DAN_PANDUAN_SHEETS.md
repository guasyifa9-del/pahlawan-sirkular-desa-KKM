# 📜 NASKAH PRESENTASI SOSIALISASI & PANDUAN GOOGLE SHEETS
**Aplikasi Game Kuis: Pahlawan Sirkular Desa (Team Battle Edition)**

Dokumen ini berisi:
1. **Naskah Bicara (*Speaking Script*)** lengkap untuk presentasi di hadapan **Guru** dan **Siswa SD**.
2. **Panduan Pengisian Google Sheets** agar Guru dapat mengganti/menambah soal sendiri tanpa takut error.
3. **Penjelasan Konten Materi vs Soal Kuis**.

---

## 🎤 BAGIAN 1: NASKAH BICARA PRESENTASI (GURU & SISWA)

### 📌 A. Naskah Bicara ke BAPAK/IBU GURU (Durasi ~5 - 7 Menit)
*Disampaikan dengan nada sopan, profesional, dan fokus pada solusi pembelajaran.*

> **[PEMBUKAAN]**
> *"Assalamu’alaikum Warahmatullahi Wabarakatuh. Selamat pagi Bapak/Ibu Guru yang kami hormati.*
> 
> *Kami dari Tim KKM Desa Teja ingin menyerahkan media pembelajaran interaktif berbasis web bernama **Pahlawan Sirkular Desa**.*
> 
> *Aplikasi ini kami kembangkan khusus untuk membantu Bapak/Ibu Guru menghadirkan suasana belajar kelompok yang seru, aktif, dan menyenangkan di dalam kelas."*
> 
> ---
> 
> **[MANFAAT DAN KEUNGGULAN UTAMA]**
> *"Bapak/Ibu Guru tidak perlu khawatir soal penggunaan teknologi di kelas, karena aplikasi ini punya 4 keunggulan utama:*
> 
> 1. **Tanpa Membutuhkan HP Siswa**: Cukup menggunakan **1 Laptop & Proyektor Guru** di depan kelas. Siswa berdiskusi secara fisik di meja kelompok masing-masing.
> 2. **Rekap Nilai Otomatis**: Di akhir permainan, Bapak/Ibu tinggal klik **Unduh Rekap Nilai (.CSV)** untuk langsung menyimpan daftar nilai kelompok murid ke laptop format Excel.
> 3. **Fitur Suara Robot (Speech)**: Pembahasan edukasi di setiap akhir soal dibacakan otomatis oleh suara robot, sehingga siswa lebih menyimak.
> 4. **Bisa Diganti Soalnya Tanpa Koding**: Bapak/Ibu Guru bisa memasukkan soal pelajaran lain (seperti IPA, Matematika, Agama) hanya dengan mengetik di **Google Sheets**."*
> 
> ---
> 
> **[PENUTUPAN & DEMO]**
> *"Aplikasi ini sepenuhnya menjadi hak milik sekolah. Mari Bapak/Ibu, kita langsung coba simulasikan permainan cepat selama 3 menit bersama murid-murid!"*

---

### 🎈 B. Naskah Bicara ke SISWA SD (Durasi ~5 - 10 Menit)
*Disampaikan dengan nada ceria, penuh semangat, dan antusias seperti pembawa acara (MC) game show.*

> **[PEMBUKAAN & PERKENALAN MASKOT]**
> *"Halo Adik-Adik semuanya! Selamat pagi!*
> *(Tunggu jawaban siswa: Selamat Pagi!)*
> 
> *Siapa di sini yang mau jadi **Pahlawan Desa** hari ini?*
> *(Siswa angkat tangan)*
> 
> *Kakak-Kakak KKM membawa Game Kuis Battle Kelompok! Di layar proyektor ini, ada 3 Teman Maskot Lucu:*
> - 🗑️ **Kompi**: Maskot Bak Sampah Pintar
> - 🎨 **Kreati**: Maskot Daur Ulang Kreatif
> - 🥬 **Gizi**: Maskot Sayuran Segar & Sehat"*
> 
> ---
> 
> **[PEMBENTUKAN TIM]**
> *"Sekarang kelas ini Kakak bagi menjadi 3 Kelompok Battle ya:*
> - *Sebelah kiri: **Tim Elang** 🦅*
> - *Tengah: **Tim Harimau** 🐯*
> - *Sebelah kanan: **Tim Melati** 🌸"*
> 
> ---
> 
> **[ATURAN PERMAINAN]**
> *"Aturan mainnya gampang banget:*
> 1. *Soal akan muncul di layar dengan hitung mundur **30 Detik**.*
> 2. *Setiap tim harus berdiskusi menentukan jawaban A, B, atau C.*
> 3. *Kalau jawabannya **BENAR**, dapat poin **+10** dan disemangati Suara Robot!*
> 4. *Kelompok mana yang skornya paling tinggi akan naik ke Podium Juara 1!"*
> 
> ---
> 
> **[SELEBRASI JUARA]**
> *"Selamat untuk **Tim Harimau** yang menjadi Juara Utama Pahlawan Desa hari ini! Mari kita beri tepuk tangan yang meriah untuk semua tim!"*

---

## 📊 BAGIAN 2: PANDUAN CARA MENGISI GOOGLE SHEETS UNTUK GURU

Agar soal dari Google Sheets **pasti masuk ke game** dan tidak error, Bapak/Ibu Guru cukup mengisi **8 Kolom Wajib** di baris pertama tabel (huruf kecil semua, tanpa spasi):

### 📋 8 Judul Kolom Wajib (Baris Ke-1 Google Sheets):

| Kolom A | Kolom B | Kolom C | Kolom D | Kolom E | Kolom F | Kolom G | Kolom H |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `level_id` | `id` | `question` | `option_a` | `option_b` | `option_c` | `correct_answer` | `education_message` |

---

### 💡 Penjelasan Fungsi Masing-Masing Kolom:

1. **`level_id`** *(Wajib)*: Kategori Misi/Mata Pelajaran.
   - Isi `1` = Masuk ke **Misi 1 (Lingkungan / Sampah)**
   - Isi `2` = Masuk ke **Misi 2 (UMKM / Ekonomi)**
   - Isi `3` = Masuk ke **Misi 3 (Kebun Gizi / Kesehatan)**
2. **`id`** *(Wajib)*: Angka nomor urut soal (misal: `1`, `2`, `3`, `4`, dst).
3. **`question`** *(Wajib)*: Kalimat pertanyaan/soal kuis.
4. **`option_a`** *(Wajib)*: Teks pilihan jawaban A.
5. **`option_b`** *(Wajib)*: Teks pilihan jawaban B.
6. **`option_c`** *(Wajib)*: Teks pilihan jawaban C.
7. **`correct_answer`** *(Wajib)*: Kunci jawaban yang benar. Cukup ketik huruf **`A`**, **`B`**, atau **`C`**.
8. **`education_message`** *(Wajib)*: Penjelasan singkat yang akan dibacakan oleh **Suara Robot** setelah soal dijawab.

---

### ✍️ Contoh Tabel Siap Pakai di Google Sheets:

Bapak/Ibu Guru dapat langsung meniru format berikut di Google Sheets:

| level_id | id | question | option_a | option_b | option_c | correct_answer | education_message |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| 1 | 1 | Tempat sampah warna kuning untuk jenis sampah apa? | A. Organik | B. Anorganik | C. Berbahaya | B | Tong kuning khusus untuk sampah plastik, botol, dan kaleng yang tidak membusuk. |
| 1 | 2 | Apa manfaat memilah sampah di rumah? | A. Rumah jadi kotor | B. Memudahkan daur ulang | C. Membuat bau | B | Memilah sampah dari rumah memudahkan proses daur ulang dan menjaga kebersihan desa. |
| 2 | 1 | Apa kepanjangan dari UMKM? | A. Usaha Maju | B. Usaha Mikro Kecil Menengah | C. Usaha Makan | B | UMKM adalah Usaha Mikro Kecil dan Menengah yang menggerakkan ekonomi warga desa. |
| 3 | 1 | Mengapa kita harus rajin makan sayuran hijau? | A. Banyak vitamin | B. Rasanya pahit | C. Bikin ngantuk | A | Sayuran hijau kaya akan vitamin dan serat yang membuat tubuh sehat dan pintar. |

---

### 🌐 Cara Mendapatkan Link CSV dari Google Sheets (5 Langkah Mudah):

1. Di Google Sheets yang sudah dibuat, klik menu **File** (di pojok kiri atas).
2. Pilih **Bagikan (Share)** ➡️ **Publikasikan di Web (Publish to web)**.
3. Pada pilihan kotak, ubah dari *Halaman Web* menjadi **Nilai yang dipisahkan koma (.csv)**.
4. Klik tombol hijau **Publikasikan (Publish)** ➡️ klik **OK**.
5. **Salin (Copy) Link URL** yang muncul. 
6. Tempelkan link tersebut ke dalam aplikasi kuis di **Pengaturan (Gerigi) ➡️ URL Google Sheets Soal Kuis (Format CSV)** ➡️ Klik **Simpan Pengaturan**.

> 🔒 **Sistem Keamanan Anti-Error**:
> Jika guru salah memasukkan link atau salah format, aplikasi **TIDAK AKAN BLANK/CRASH**, melainkan secara otomatis kembali menggunakan **40 Soal Bawaan Aplikasi** yang sudah aman!

---

## ❓ PERTANYAAN UMUM (FAQ)

### Q: Apakah Materi Bacaan Edukasi juga perlu dimasukkan ke Google Sheets?
**Jawab: TIDAK PERLU.** 
Materi bacaan lengkap (Kebersihan, UMKM, dan Gizi Seimbang) **sudah tertanam permanen di dalam menu "Materi Edukasi"** di aplikasi.
- Guru/Siswa bisa membaca materi kapan saja di layar.
- Guru dapat mencetak rangkuman materi menjadi lembar kertas PDF fisik cukup dengan mengklik tombol **🖨️ Cetak Materi**.
- Google Sheets **hanya digunakan untuk soal kuis saja** agar fleksibel diganti-ganti.
