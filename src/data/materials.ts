export interface MaterialSection {
  title: string;
  icon: string;
  points: string[];
}

export interface FunFact {
  icon: string;
  text: string;
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface PillarMaterial {
  pillarId: number;
  title: string;
  subtitle: string;
  icon: string;
  mascot: 'Kompi' | 'Kreati' | 'Gizi';
  themeColor: string;
  themeDark: string;
  themeBg: string;
  sections: MaterialSection[];
  funFacts: FunFact[];
  keyTerms: KeyTerm[];
}

export const materialsData: PillarMaterial[] = [
  // ============================================
  // PILAR 1: PENGELOLAAN & PEMISAHAN SAMPAH
  // ============================================
  {
    pillarId: 1,
    title: 'Pengelolaan & Pemisahan Sampah',
    subtitle: 'Belajar memilah sampah untuk bumi yang lebih bersih!',
    icon: '♻️',
    mascot: 'Kompi',
    themeColor: '#4CAF50',
    themeDark: '#1B5E20',
    themeBg: '#E8F5E9',
    sections: [
      {
        title: '3 Jenis Sampah yang Harus Kamu Tahu',
        icon: '🗑️',
        points: [
          '🟢 **Sampah Organik** — berasal dari makhluk hidup dan bisa membusuk secara alami. Contoh: sisa apel, kulit pisang, daun kering, sisa nasi, sayuran busuk.',
          '🟡 **Sampah Anorganik** — barang-barang yang tidak mudah busuk dan bertahan sangat lama di alam. Contoh: botol plastik, kaleng minuman, kaca, kardus, kertas.',
          '🔴 **Sampah B3 (Bahan Berbahaya & Beracun)** — mengandung zat kimia yang bisa meracuni tanah, air, dan makhluk hidup. Contoh: baterai bekas, obat kedaluwarsa, lampu neon pecah, pestisida.',
        ],
      },
      {
        title: 'Sistem Tong Sampah Berwarna',
        icon: '🎨',
        points: [
          '🟢 **Tong Hijau** — untuk sampah organik (sisa makanan, daun, ranting). Sampah di tong ini bisa diolah jadi kompos!',
          '🟡 **Tong Kuning** — untuk sampah anorganik (plastik, kaleng, kaca, kertas). Bisa didaur ulang atau dijual ke bank sampah!',
          '🔴 **Tong Merah** — untuk sampah B3 (baterai, obat, bahan kimia). Harus dikumpulkan khusus dan diolah oleh ahlinya!',
          'Dengan memilah ke tong yang benar, kita sudah menjadi pahlawan lingkungan! 🦸',
        ],
      },
      {
        title: 'Prinsip 3R: Jurus Rahasia Penakluk Sampah',
        icon: '💪',
        points: [
          '1️⃣ **Reduce (Kurangi)** — Mengurangi penggunaan barang sekali pakai. Contoh: bawa tas kain saat belanja, bawa botol minum sendiri, tolak sedotan plastik.',
          '2️⃣ **Reuse (Pakai Ulang)** — Menggunakan kembali barang yang masih bisa dipakai. Contoh: botol selai jadi tempat bumbu, koran bekas jadi pembungkus.',
          '3️⃣ **Recycle (Daur Ulang)** — Mengolah barang bekas menjadi barang baru. Contoh: plastik diolah jadi biji plastik, kertas bekas jadi kertas daur ulang.',
        ],
      },
      {
        title: 'Kompos: Vitamin Alami untuk Tanaman',
        icon: '🌱',
        points: [
          'Kompos dibuat dari sampah organik (sisa makanan, daun kering) yang dibiarkan membusuk secara terkontrol.',
          'Proses pembuatan kompos memakan waktu sekitar 2-3 bulan hingga siap digunakan.',
          'Kompos menyuburkan tanah secara alami tanpa bahan kimia — tanaman jadi sehat dan berbuah lebat!',
          'Dengan membuat kompos, kita mengubah "sampah" menjadi "emas cokelat" yang sangat berharga bagi pertanian. 🌾',
        ],
      },
      {
        title: 'Bank Sampah: Menabung dari Barang Bekas',
        icon: '🏦',
        points: [
          'Bank Sampah adalah tempat di mana warga bisa menyetorkan sampah yang sudah dipilah dan mendapat imbalan berupa uang atau barang.',
          'Sampah yang diterima: botol plastik, kardus, kaleng aluminium, kertas, kaca — semua harus dalam keadaan bersih dan kering.',
          'Cara kerjanya mirip menabung di bank: sampah ditimbang, dicatat di buku tabungan, lalu bisa ditarik dalam bentuk uang atau emas! 💰',
          'Bank Sampah juga mengajarkan kita disiplin memilah sampah sejak dini.',
        ],
      },
      {
        title: 'Maggot BSF: Si Kecil Pemakan Sampah',
        icon: '🐛',
        points: [
          'Maggot adalah larva dari lalat Black Soldier Fly (BSF) yang sangat ramah lingkungan.',
          'Maggot memakan sampah organik (sisa makanan, buah busuk) dengan sangat cepat — 1 kg maggot bisa memakan 2 kg sampah per hari!',
          'Setelah besar, maggot bisa dijadikan pakan ikan, pakan ayam, atau diolah jadi pupuk organik.',
          'Budidaya maggot adalah cara cerdas mengubah sampah menjadi sumber penghasilan. 🎯',
        ],
      },
      {
        title: 'Bahaya Membuang Sampah ke Sungai',
        icon: '🚫',
        points: [
          'Sampah yang dibuang ke sungai menyumbat aliran air dan menyebabkan banjir saat musim hujan. 🌊',
          'Plastik di sungai terurai menjadi mikroplastik yang dimakan ikan — ikan ini kemudian dimakan manusia!',
          'Air sungai yang tercemar tidak bisa digunakan untuk mandi, mencuci, atau menyiram tanaman.',
          'Sungai bersih = desa sehat. Menjaga sungai bersih berarti melindungi seluruh warga desa dari penyakit dan bencana.',
        ],
      },
      {
        title: 'Dampak Plastik terhadap Lingkungan',
        icon: '⏰',
        points: [
          'Botol plastik butuh waktu **450-1000 tahun** untuk terurai di tanah! Itu artinya plastik yang kamu buang hari ini masih ada saat cicit-cicitmu lahir.',
          'Kantong plastik butuh **10-20 tahun** untuk terurai. Sedangkan daun pisang hanya butuh 2-3 bulan!',
          'Setiap tahun, jutaan ton plastik masuk ke laut dan membunuh hewan-hewan laut seperti penyu dan lumba-lumba. 🐢',
          'Langkah terbaik: kurangi plastik sekali pakai, bawa tas belanja sendiri, dan pilih kemasan ramah lingkungan!',
        ],
      },
    ],
    funFacts: [
      { icon: '🌍', text: 'Indonesia menghasilkan 67,8 juta ton sampah per tahun! Bayangkan setumpuk gunung sampah setinggi Monas!' },
      { icon: '🐢', text: 'Penyu laut sering mengira kantong plastik sebagai ubur-ubur dan memakannya — ini bisa membunuh mereka!' },
      { icon: '⏳', text: 'Kaleng aluminium bisa didaur ulang tanpa batas! Kaleng yang kamu daur ulang hari ini bisa jadi kaleng baru dalam 60 hari.' },
      { icon: '🌿', text: 'Satu pohon bisa menyerap sekitar 22 kg CO2 per tahun. Dengan mengurangi sampah, kita juga mengurangi pemanasan global!' },
    ],
    keyTerms: [
      { term: 'Organik', definition: 'Sampah dari makhluk hidup yang bisa membusuk alami' },
      { term: 'Anorganik', definition: 'Sampah bukan dari makhluk hidup, sulit terurai' },
      { term: 'B3', definition: 'Bahan Berbahaya dan Beracun' },
      { term: '3R', definition: 'Reduce (Kurangi), Reuse (Pakai Ulang), Recycle (Daur Ulang)' },
      { term: 'Kompos', definition: 'Pupuk alami dari sampah organik yang membusuk' },
      { term: 'Bank Sampah', definition: 'Tempat menabung dengan menyetorkan sampah terpilah' },
      { term: 'Maggot BSF', definition: 'Larva lalat Black Soldier Fly pemakan sampah organik' },
    ],
  },

  // ============================================
  // PILAR 2: EKONOMI SIRKULAR & UMKM
  // ============================================
  {
    pillarId: 2,
    title: 'Ekonomi Sirkular & UMKM Desa',
    subtitle: 'Kreatif mengolah limbah jadi cuan untuk kemajuan desa!',
    icon: '💡',
    mascot: 'Kreati',
    themeColor: '#2196F3',
    themeDark: '#0D47A1',
    themeBg: '#E3F2FD',
    sections: [
      {
        title: 'Apa Itu UMKM?',
        icon: '🏪',
        points: [
          '**UMKM** = Usaha Mikro, Kecil, dan Menengah. Ini adalah usaha-usaha kreatif milik warga biasa!',
          '**Usaha Mikro** — modal di bawah Rp1 miliar, contoh: jualan gorengan, warung kelontong.',
          '**Usaha Kecil** — modal Rp1-5 miliar, contoh: toko kerajinan, konveksi kecil.',
          '**Usaha Menengah** — modal Rp5-10 miliar, contoh: pabrik kue skala desa, pengolahan kopi.',
          'UMKM adalah tulang punggung ekonomi Indonesia — lebih dari 60% PDB Indonesia berasal dari UMKM! 💪',
        ],
      },
      {
        title: 'Ekonomi Sirkular: Sampah = Sumber Daya',
        icon: '🔄',
        points: [
          '**Ekonomi Sirkular** adalah sistem di mana barang yang sudah dipakai tidak langsung dibuang, tapi diolah kembali menjadi barang baru yang bernilai.',
          'Berbeda dengan ekonomi biasa (buat → pakai → buang), ekonomi sirkular berputar: buat → pakai → olah → pakai lagi! ♻️',
          'Contoh di desa: botol plastik bekas → dicuci → dipotong → dijahit menjadi tas rajut → dijual ke pasar!',
          'Manfaat ganda: lingkungan bersih dari sampah + warga mendapat penghasilan tambahan. 🎉',
        ],
      },
      {
        title: 'Upcycling: Sulap Limbah Jadi Barang Mahal',
        icon: '✨',
        points: [
          '**Upcycling** berbeda dari daur ulang biasa — upcycling mengubah barang bekas menjadi barang BARU yang nilainya LEBIH TINGGI!',
          '🧵 **Kain perca** (sisa jahitan) → dijahit jadi tas cantik, keset warna-warni, sarung bantal motif, dompet unik.',
          '🫙 **Botol plastik bekas** → dipotong dan dilukis → jadi pot bunga gantung yang indah dan bernilai jual.',
          '📦 **Kardus bekas** → dipotong dan dilem → jadi mainan anak-anak yang kreatif dan ramah lingkungan.',
          '🧴 **Minyak jelantah** (minyak goreng bekas) → diolah dengan NaOH → jadi sabun cuci batang atau lilin aromaterapi yang harum!',
        ],
      },
      {
        title: 'Kemasan (Packaging) Produk Desa',
        icon: '🎁',
        points: [
          'Produk desa yang enak belum tentu laku kalau kemasannya tidak menarik! Kemasan = kesan pertama pembeli.',
          'Tips kemasan yang baik: bersih, rapi, ada label nama produk, tanggal kadaluarsa, dan gambar yang menarik.',
          'Gunakan warna-warna cerah dan desain yang menunjukkan ciri khas desa untuk membuat produk terlihat "premium".',
          'Contoh: keripik singkong dalam bungkus kresek hitam → KURANG LAKU. Keripik singkong dalam kemasan standing pouch bergambar → LARIS MANIS! 🛒',
        ],
      },
      {
        title: 'Bungkus Ramah Lingkungan Pengganti Styrofoam',
        icon: '🍃',
        points: [
          'Styrofoam sangat berbahaya! Mengandung zat kimia styrene yang bisa mencemari makanan dan sulit terurai di alam (butuh 500+ tahun).',
          '🌿 **Daun Pisang** — pembungkus alami yang mudah terurai, membuat makanan lebih harum, dan 100% gratis dari kebun!',
          '🍂 **Daun Jati** — kuat dan tahan air, cocok untuk membungkus nasi dan lauk pauk tradisional.',
          '🌾 **Anyaman Bambu** — bisa jadi wadah cantik untuk oleh-oleh khas desa.',
          'Menggunakan bungkus alami = mendukung kearifan lokal + melindungi kesehatan + menjaga lingkungan! 🏆',
        ],
      },
      {
        title: 'Membeli Produk Lokal = Memajukan Desa',
        icon: '🤝',
        points: [
          'Saat kita membeli keripik, kerajinan, atau camilan buatan tetangga, uang kita berputar di dalam desa sendiri.',
          'Uang yang berputar di desa menciptakan lapangan kerja baru, meningkatkan kesejahteraan warga, dan memajukan ekonomi desa secara keseluruhan.',
          'Ini disebut **multiplier effect** — satu pembelian bisa menggerakkan banyak sektor ekonomi desa!',
          'Bangga memakai produk lokal bukan berarti ketinggalan zaman — justru ini tanda anak pintar yang peduli masa depan desanya! 🇮🇩',
        ],
      },
    ],
    funFacts: [
      { icon: '💰', text: 'UMKM menyumbang lebih dari 60% PDB Indonesia dan menyerap 97% tenaga kerja. UMKM itu hebat!' },
      { icon: '🧵', text: 'Industri fashion menghasilkan 92 juta ton limbah tekstil per tahun. Dengan menjahit kain perca, kita membantu menguranginya!' },
      { icon: '🫧', text: '1 liter minyak jelantah bisa mencemari 1 juta liter air bersih jika dibuang ke selokan. Olah jadi sabun, jangan dibuang!' },
      { icon: '📦', text: 'Kardus bisa didaur ulang hingga 7 kali sebelum seratnya terlalu pendek. Manfaatkan kardus bekas untuk kerajinan!' },
    ],
    keyTerms: [
      { term: 'UMKM', definition: 'Usaha Mikro, Kecil, dan Menengah' },
      { term: 'Ekonomi Sirkular', definition: 'Sistem ekonomi di mana barang bekas diolah kembali jadi barang baru' },
      { term: 'Upcycling', definition: 'Mengubah barang bekas menjadi barang baru bernilai lebih tinggi' },
      { term: 'Packaging', definition: 'Kemasan produk yang menarik untuk meningkatkan nilai jual' },
      { term: 'Jelantah', definition: 'Minyak goreng bekas pakai yang bisa diolah jadi sabun' },
      { term: 'Multiplier Effect', definition: 'Efek berganda dari pembelian produk lokal terhadap ekonomi desa' },
    ],
  },

  // ============================================
  // PILAR 3: KETAHANAN PANGAN & GIZI
  // ============================================
  {
    pillarId: 3,
    title: 'Ketahanan Pangan & Gizi Desa',
    subtitle: 'Menanam, memelihara, menjaga gizi, dan ketersediaan pangan desa!',
    icon: '🌾',
    mascot: 'Gizi',
    themeColor: '#FF9800',
    themeDark: '#E65100',
    themeBg: '#FFF3E0',
    sections: [
      {
        title: 'Gizi Seimbang & Prinsip Isi Piringku',
        icon: '🥗',
        points: [
          '**Gizi Seimbang** adalah susunan makanan sehari-hari yang mengandung zat gizi dalam jenis dan jumlah yang sesuai kebutuhan tubuh kita.',
          '🥗 **1/2 bagian piring: Sayuran & Buah-buahan** — sayuran sebaiknya lebih banyak daripada buah. Kaya akan vitamin, mineral, dan serat untuk kesehatan.',
          '🍚 **1/2 bagian piring: Makanan Pokok & Lauk-pauk** — makanan pokok sebaiknya lebih banyak daripada lauk. Sebagai sumber energi dan zat pembangun tubuh.',
          'Makan beragam makanan memastikan semua zat gizi terpenuhi, karena tidak ada satu makanan pun yang mengandung zat gizi lengkap! 🏆',
        ],
      },
      {
        title: 'Pentingnya Sarapan & Jajanan Sehat',
        icon: '🍳',
        points: [
          '🍳 **Sarapan pagi** membekali tubuh dan otak dengan energi sebelum belajar di kelas. Sarapan bikin konsentrasi, cerdas, dan tidak mudah lemas!',
          '🥪 **Pilih jajanan sehat** yang bersih, tertutup rapat, dan tidak berbau aneh di sekolah. Hindari jajanan terbuka yang dihinggapi lalat.',
          '⚠️ Batasi jajanan yang mengandung terlalu banyak gula, garam, dan lemak (seperti gorengan berlebih atau minuman manis berwarna-warni).',
          '🥤 Biasakan selalu memilih **air putih** sebagai minuman utama saat haus demi menjaga ginjal tetap sehat.',
        ],
      },
      {
        title: 'Program Makan Bergizi Gratis (MBG) di Sekolah',
        icon: '🍱',
        points: [
          '**Program Makan Bergizi Gratis (MBG)** membantu anak sekolah mendapatkan asupan gizi yang lengkap, higienis, dan seimbang secara gratis!',
          'Sikap tertib siswa sangat penting: **cuci tangan sebelum makan, berdoa dengan tenang, duduk rapi, dan tidak membuang-buang makanan.**',
          'Menghargai makanan gratis ini dengan memakannya sampai habis adalah tanda kepedulian terhadap lingkungan dan jerih payah para petani. 💚',
          'Terapkan gerakan sederhana di sekolah: **AMBIL secukupnya, MAKAN dengan tertib, HABISKAN tanpa sisa, dan BERSIHKAN tempat makanmu!**',
        ],
      },
      {
        title: 'Sumber Karbohidrat Lokal yang Bergizi',
        icon: '🍠',
        points: [
          'Indonesia kaya akan sumber karbohidrat selain beras! Nenek moyang kita sudah makan ini sejak ribuan tahun.',
          '🍠 **Singkong (Ubi Kayu)** — bisa dibuat menjadi tape, keripik, tiwul, getuk, dan aneka camilan lezat.',
          '🍊 **Ubi Jalar** — kaya vitamin A, bisa dipanggang, direbus, atau dibuat kolak. Warnanya yang oranye menandakan banyak nutrisi!',
          '🌽 **Jagung** — bisa dimakan langsung, dibuat nasi jagung, popcorn, atau tortilla. Sangat kaya serat!',
          '🥔 **Talas** — umbi yang lembut dan mengenyangkan, bisa dibuat keripik atau kolak.',
          'Diversifikasi pangan (makan beragam, tidak hanya nasi) membuat tubuh lebih sehat dan desa tidak bergantung pada satu jenis makanan saja. 💪',
        ],
      },
      {
        title: 'Kebun Gizi: Panen Gratis dari Halaman Rumah',
        icon: '🏡',
        points: [
          '**Kebun Gizi** = memanfaatkan halaman kosong di sekitar rumah untuk menanam sayuran, buah, dan rempah.',
          'Tidak perlu lahan luas! Pot, polybag, botol bekas, bahkan pipa paralon bisa jadi media tanam.',
          'Tanaman yang mudah ditanam di pekarangan: kangkung (panen 3-4 minggu!), bayam, cabai, tomat, kemangi, dan seledri.',
          'Manfaat Kebun Gizi: hemat belanja sayur, sayuran lebih segar dan bebas pestisida, serta keluarga jadi lebih sehat. 🥗',
          'Tips: siram tanaman pagi dan sore hari, gunakan pupuk kompos dari sampah dapur, dan berikan sinar matahari yang cukup.',
        ],
      },
      {
        title: 'Budikdamber: Panen Ikan & Sayur dari 1 Ember!',
        icon: '🐟',
        points: [
          '**Budikdamber** = Budidaya Ikan dalam Ember. Ini adalah cara jenius memelihara ikan DAN menanam sayuran sekaligus dalam satu wadah!',
          'Cara kerjanya: ikan (seperti lele) dipelihara di dalam ember. Di atas ember, ditanam sayuran (kangkung) menggunakan gelas plastik yang dilubangi.',
          'Air kolam ikan yang kaya nutrisi (dari kotoran ikan) menjadi pupuk alami untuk sayuran di atasnya! 🔄',
          'Hasil panen: ikan lele segar untuk lauk + kangkung segar untuk sayur. Dua manfaat dari satu ember!',
          'Budikdamber cocok untuk halaman sempit, bahkan bisa dilakukan di teras atau balkon rumah.',
        ],
      },
      {
        title: 'Pupuk Organik: Menyuburkan Tanah Tanpa Kimia',
        icon: '🧪',
        points: [
          '**Pupuk Organik Cair (POC)** dibuat dari rendaman kompos sisa makanan yang difermentasi selama 2-3 minggu.',
          'Bahan POC: sisa sayuran, kulit buah, nasi basi, dan air cucian beras — semua dari dapur! Gratis dan ramah lingkungan.',
          'Berbeda dari pupuk kimia, pupuk organik tidak merusak struktur tanah dan aman bagi cacing tanah yang membantu menggemburkan tanah.',
          'Tanaman yang disiram pupuk organik menghasilkan buah dan sayuran yang lebih sehat dan aman dikonsumsi. 🌿',
          '⚠️ JANGAN menyiram tanaman dengan air sabun atau air panas — ini akan membunuh tanaman dan merusak tanah!',
        ],
      },
      {
        title: 'Food Waste: Jangan Buang Makanan!',
        icon: '🍽️',
        points: [
          '**Food waste** (sampah makanan) adalah makanan yang terbuang percuma padahal masih bisa dimakan.',
          'Di Indonesia, sekitar 23-48 juta ton makanan terbuang setiap tahun! Padahal masih banyak yang kelaparan. 😢',
          'Sampah makanan yang menumpuk di tempat pembuangan menghasilkan gas metana — gas rumah kaca penyebab pemanasan global!',
          'Cara mengurangi food waste: ambil makanan secukupnya, habiskan makanan di piring, simpan sisa makanan di kulkas, dan olah makanan sisa jadi menu baru.',
          'Menghabiskan makanan = menghargai jerih payah petani + menyelamatkan bumi dari pemanasan global. 🌍',
        ],
      },
      {
        title: 'Protein Ikan untuk Otak Cerdas',
        icon: '🧠',
        points: [
          'Ikan lele, nila, dan gurame dari kolam desa mengandung **protein tinggi** yang sangat penting untuk pertumbuhan dan kecerdasan anak.',
          'Protein ikan membantu membangun otot, memperbaiki sel tubuh, dan meningkatkan konsentrasi belajar di sekolah.',
          'Ikan juga mengandung **omega-3** yang baik untuk perkembangan otak — itulah sebabnya anak yang rajin makan ikan biasanya lebih pintar!',
          'Ikan budidaya desa lebih segar, lebih murah, dan lebih aman dari pencemaran dibandingkan ikan dari laut yang jauh.',
          'Rajin makan ikan = tubuh kuat + otak cerdas + mendukung peternak ikan di desa kita! 💪🧠',
        ],
      },
      {
        title: 'Tabungan Pangan & Menyimpan Benih',
        icon: '🌰',
        points: [
          '**Tabungan pangan** = menyimpan cadangan bahan makanan dan benih untuk menghadapi musim paceklik (kemarau panjang atau bencana).',
          'Cara menyimpan benih: pilih buah/sayuran tua yang sudah matang → keluarkan bijinya → keringkan di bawah sinar matahari → simpan di wadah kedap udara.',
          'Benih yang disimpan dengan baik bisa bertahan berbulan-bulan dan siap ditanam kapan saja tanpa harus membeli bibit baru.',
          'Tradisi menyimpan benih sudah dilakukan nenek moyang kita sejak dulu — ini adalah kearifan lokal yang sangat berharga! 🏆',
        ],
      },
      {
        title: 'Kemandirian Pangan Desa',
        icon: '🏘️',
        points: [
          '**Mandiri Pangan** = desa mampu menghasilkan sendiri kebutuhan pangan utama (beras/umbi, sayur, protein) tanpa terlalu bergantung pada pasokan dari luar.',
          'Desa mandiri pangan tidak mudah terpengaruh saat harga makanan di pasar naik atau saat terjadi krisis ekonomi.',
          'Langkah menuju mandiri pangan: tanam padi/umbi di sawah, tanam sayur di pekarangan, pelihara ayam/bebek untuk telur dan daging, budidaya ikan di kolam.',
          'Memelihara ayam di belakang rumah bisa menghasilkan telur segar setiap hari dan daging ayam bergizi untuk keluarga — hemat biaya belanja! 🐔🥚',
          'Desa mandiri pangan = desa kuat, sehat, dan sejahtera. Itulah cita-cita ketahanan pangan Indonesia! 🇮🇩',
        ],
      },
    ],
    funFacts: [
      { icon: '🍳', text: 'Sarapan pagi terbukti meningkatkan kemampuan matematika dan membaca anak sekolah hingga 20%! Jangan lewatkan sarapan ya!' },
      { icon: '🍱', text: 'Dengan menghabiskan makanan gratis di sekolah, kita membantu mencegah penumpukan sampah sisa makanan yang merusak bumi!' },
      { icon: '🐟', text: 'Ikan lele bisa dipanen hanya dalam 2-3 bulan! Sangat cepat untuk memenuhi kebutuhan protein keluarga.' },
      { icon: '🥬', text: 'Kangkung adalah sayuran tercepat tumbuh — hanya 3-4 minggu dari tanam sampai panen! Kamu bisa panen sendiri di rumah.' },
      { icon: '🥚', text: 'Satu ekor ayam kampung bisa menghasilkan 150-200 butir telur per tahun. Bayangkan kalau punya 5 ekor!' },
      { icon: '🌽', text: 'Indonesia memiliki lebih dari 77 jenis sumber karbohidrat lokal selain beras. Ayo coba semua!' },
    ],
    keyTerms: [
      { term: 'Gizi Seimbang', definition: 'Susunan makanan sehari-hari yang mengandung zat gizi dalam jenis dan jumlah yang sesuai kebutuhan tubuh' },
      { term: 'Isi Piringku', definition: 'Panduan porsi makan sehat: 1/2 sayur & buah, 1/2 karbohidrat & lauk' },
      { term: 'Makan Bergizi Gratis', definition: 'Program penyediaan makanan sehat secara gratis untuk mendukung gizi siswa' },
      { term: 'Ketahanan Pangan', definition: 'Kemampuan desa untuk menyediakan makanan yang cukup dan bergizi bagi seluruh warga' },
      { term: 'Kebun Gizi', definition: 'Pekarangan rumah yang dimanfaatkan untuk menanam sayuran dan buah' },
      { term: 'Budikdamber', definition: 'Budidaya Ikan dalam Ember — sistem gabungan ternak ikan dan tanam sayur' },
      { term: 'Food Waste', definition: 'Sampah makanan yang terbuang percuma' },
      { term: 'POC', definition: 'Pupuk Organik Cair — pupuk alami dari fermentasi sisa makanan' },
      { term: 'Mandiri Pangan', definition: 'Kemampuan desa menghasilkan sendiri kebutuhan pangan utama' },
      { term: 'Diversifikasi Pangan', definition: 'Mengonsumsi beragam jenis makanan, tidak hanya satu jenis' },
    ],
  },
];
