# 📖 PANDUAN LENGKAP SOSIALISASI & PENGGUNAAN GURU
**Aplikasi Game Kuis Interaktif: Pahlawan Sirkular Desa (Team Battle Edition)**

Dokumen ini adalah **panduan utama 3-in-1** yang berisi:
1. ⏱️ **Rundown Skenario Sosialisasi (15 - 20 Menit)**
2. 🎤 **Naskah Bicara (*Speaking Script*) untuk Guru & Siswa SD**
3. 📊 **Panduan Pengisian Google Sheets untuk Guru (8 Kolom Wajib)**

---

## ⏱️ BAGIAN 1: RUNDOWN SKENARIO SOSIALISASI (15 - 20 MENIT)

| Waktu | Tahapan | Aktivitas Utama | Target / Tujuan |
| :--- | :--- | :--- | :--- |
| **00:00 - 03:00** | **1. Pembukaan** | Salam hangat, pengenalan tim KKM, dan tujuan aplikasi pembelajaran di kelas. | Guru memahami tujuan program KKM. |
| **03:00 - 06:00** | **2. Pengenalan Maskot** | Tunjukkan halaman utama & perkenalkan 3 Maskot Desa (*Kompi, Kreati, Gizi*). | Menarik perhatian guru & murid dengan UI ceria. |
| **06:00 - 12:00** | **3. Demo Gameplay Interaktif** | Bagi kelas jadi 3 Tim (Elang 🦅, Harimau 🐯, Melati 🌸) & mainkan **🚀 3 Soal Demo Cepat**. | Suasana kelas hidup, antusias menjawab & mendengarkan suara robot. |
| **12:00 - 14:00** | **4. Rekap Nilai CSV** | Tampilkan Layar Juara (Konfeti) dan klik tombol **📥 UNDUH REKAP NILAI (.CSV)**. | Guru melihat betapa mudahnya mengambil nilai harian. |
| **14:00 - 18:00** | **5. Penjelasan Google Sheets** | Tunjukkan betapa mudahnya guru mengedit/menambah soal sendiri di Google Sheets HP/Laptop. | Guru tidak merasa terbebani karena tanpa koding. |
| **18:00 - 20:00** | **6. Penutupan** | Penyerahan link aplikasi Vercel/GitHub & sesi foto bersama. | Penyerahan resmi ke sekolah. |

---

## 🎤 BAGIAN 2: NASKAH BICARA PRESENTASI (GURU & SISWA)

### 📌 A. Naskah Bicara ke BAPAK/IBU GURU
> *"Assalamu’alaikum Warahmatullahi Wabarakatuh. Selamat pagi Bapak/Ibu Guru yang kami hormati.*
> 
> *Kami dari Tim KKM Desa Teja ingin menyerahkan media pembelajaran interaktif berbasis web bernama **Pahlawan Sirkular Desa**.*
> 
> *Aplikasi ini kami kembangkan khusus untuk membantu Bapak/Ibu Guru menghadirkan suasana belajar kelompok yang seru, aktif, dan menyenangkan di dalam kelas.*
> 
> *Keunggulan utamanya:*
> 1. **Tanpa Membutuhkan HP Siswa**: Cukup menggunakan **1 Laptop & Proyektor Guru** di depan kelas. Siswa berdiskusi secara fisik di meja kelompok masing-masing.
> 2. **Rekap Nilai Otomatis**: Di akhir permainan, Bapak/Ibu tinggal klik **Unduh Rekap Nilai (.CSV)** untuk langsung menyimpan daftar nilai kelompok murid ke laptop format Excel.
> 3. **Fitur Suara Robot**: Pembahasan edukasi di setiap akhir soal dibacakan otomatis oleh suara robot.
> 4. **Bisa Diganti Soalnya Tanpa Koding**: Bapak/Ibu Guru bisa memasukkan soal pelajaran lain (seperti IPA, Matematika, Agama) hanya dengan mengetik di **Google Sheets**."*

---

### 🎈 B. Naskah Bicara ke SISWA SD (Gaya MC Game Show)
> *"Halo Adik-Adik semuanya! Selamat pagi!*
> *(Tunggu jawaban siswa: Selamat Pagi!)*
> 
> *Siapa di sini yang mau jadi **Pahlawan Desa** hari ini?*
> 
> *Kakak-Kakak KKM membawa Game Kuis Battle Kelompok! Di layar proyektor ini, ada 3 Teman Maskot Lucu:*
> - 🗑️ **Kompi**: Maskot Bak Sampah Pintar
> - 🎨 **Kreati**: Maskot Daur Ulang Kreatif
> - 🥬 **Gizi**: Maskot Sayuran Segar & Sehat
> 
> *Sekarang kelas ini Kakak bagi menjadi 3 Kelompok Battle ya:*
> - *Sebelah kiri: **Tim Elang** 🦅*
> - *Tengah: **Tim Harimau** 🐯*
> - *Sebelah kanan: **Tim Melati** 🌸*
> 
> *Aturan mainnya gampang banget:*
> 1. *Soal akan muncul di layar dengan hitung mundur **30 Detik**.*
> 2. *Setiap tim harus berdiskusi menentukan jawaban A, B, atau C.*
> 3. *Kalau jawabannya **BENAR**, dapat poin **+10** dan disemangati Suara Robot!*
> 4. *Kelompok mana yang skornya paling tinggi akan naik ke Podium Juara 1!"*

---

## 📊 BAGIAN 3: PANDUAN PENGISIAN GOOGLE SHEETS UNTUK GURU

Agar soal dari Google Sheets **pasti masuk ke game** dan tidak error, Bapak/Ibu Guru cukup mengisi **8 Kolom Wajib** di baris pertama tabel (huruf kecil semua, tanpa spasi):

### 📋 8 Judul Kolom Wajib (Baris Ke-1 Google Sheets):

| Kolom A | Kolom B | Kolom C | Kolom D | Kolom E | Kolom F | Kolom G | Kolom H |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `level_id` | `id` | `question` | `option_a` | `option_b` | `option_c` | `correct_answer` | `education_message` |

---

### ✍️ Contoh Tabel Siap Pakai di Google Sheets:

| level_id | id | question | option_a | option_b | option_c | correct_answer | education_message |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| 1 | 1 | Sampah daun kering termasuk sampah jenis apa? | A. Organik | B. Anorganik | C. Berbahaya | A | Daun kering adalah sampah organik yang bisa diolah menjadi pupuk kompos alami. |
| 1 | 2 | Botol plastik bekas dibuang di tong sampah warna apa? | A. Hijau | B. Kuning | C. Merah | B | Tong sampah kuning khusus untuk anorganik seperti plastik dan botol. |
| 2 | 1 | Apa contoh usaha kreatif warga di desa? | A. Warung Keripik & Kerajinan | B. Pabrik Pesawat | C. Toko Impor | A | Usaha kecil warga desa adalah UMKM yang menggerakkan ekonomi lokal. |
| 3 | 1 | Mengapa kita harus rajin makan sayuran hijau? | A. Mengandung Vitamin | B. Bikin Ngantuk | C. Rasanya Pahit | A | Sayuran hijau kaya akan vitamin agar tubuh sehat dan otak fokus belajar. |

---

### 🌐 Cara Publikasi Link CSV dari Google Sheets (5 Langkah Mudah):

1. Di Google Sheets, klik menu **File** (di pojok kiri atas).
2. Pilih **Bagikan (Share)** ➡️ **Publikasikan di Web (Publish to web)**.
3. Pada pilihan format, ubah menjadi **Nilai yang dipisahkan koma (.csv)**.
4. Klik tombol hijau **Publikasikan (Publish)** ➡️ klik **OK**.
5. **Salin (Copy) Link URL** panjang tersebut ➡️ **Tempel (Paste)** di menu **Pengaturan Aplikasi (Gerigi) ➡️ URL Google Sheets Soal Kuis (Format CSV)** ➡️ Klik **Simpan Pengaturan**.

> 🔒 **Sistem Keamanan Anti-Error**:
> Jika link Google Sheets salah atau mati, aplikasi **TIDAK AKAN CRASH/BLANK**, melainkan otomatis menggunakan **40 Soal Bawaan Aplikasi** yang sudah siap pakai!
