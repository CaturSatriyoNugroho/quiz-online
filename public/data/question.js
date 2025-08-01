const questions = {
  matematika: [
    {
      question: "Jika f(x) = 2x² - 3x + 1, maka f(3) = ...",
      options: ["10", "16", "12", "13"],
      answer: "10"
    },
    {
      question: "Limit dari (x² - 1)/(x - 1) saat x mendekati 1 adalah...",
      options: ["1", "2", "∞", "2"],
      answer: "2"
    },
    {
      question: "Jika log₅x = 3, maka x = ...",
      options: ["15", "125", "25", "5"],
      answer: "125"
    },
    {
      question: "Turunan pertama dari f(x) = x³ - 3x² + 2x adalah...",
      options: ["3x² - 6x + 2", "x² - 6x + 2", "3x² - 3x + 2", "x³ - 3x + 2"],
      answer: "3x² - 6x + 2"
    },
    {
      question: "Integral dari ∫2x dx adalah...",
      options: ["x² + C", "2x² + C", "x + C", "x³ + C"],
      answer: "x² + C"
    },
    {
      question: "Jika A = {1,2,3}, B = {2,3,4}, maka A ∩ B adalah...",
      options: ["{1,2,3,4}", "{2,3}", "{1,4}", "{1,2}"],
      answer: "{2,3}"
    },
    {
      question: "Diketahui barisan aritmetika dengan U₁ = 5 dan beda = 3. Maka U₁₀ adalah...",
      options: ["32", "35", "30", "33"],
      answer: "32"
    },
    {
      question: "Hasil dari (2 + √3)(2 - √3) adalah...",
      options: ["1", "4", "5", "√3"],
      answer: "1"
    },
    {
      question: "Rata-rata dari 5 angka: 6, 8, 10, 12, x adalah 10. Maka nilai x adalah...",
      options: ["14", "10", "12", "16"],
      answer: "14"
    },
    {
      question: "Jika sin θ = 3/5 dan θ di kuadran I, maka cos θ adalah...",
      options: ["4/5", "5/4", "3/4", "1/2"],
      answer: "4/5"
    }
  ],
  bahasa_inggris: [
    {
      question: "Choose the correct sentence in Past Perfect Tense.",
      options: ["She had eaten before he arrived.", "She eats before he arrives.", "She was eating when he arrived.", "She is eating before he arrives."],
      answer: "She had eaten before he arrived."
    },
    {
      question: "Identify the error: 'He don't like playing the piano.'",
      options: ["He", "don't", "like", "playing"],
      answer: "don't"
    },
    {
      question: "What is the synonym of 'meticulous'?",
      options: ["Careless", "Thorough", "Quick", "Lazy"],
      answer: "Thorough"
    },
    {
      question: "Which sentence uses the correct conditional structure (Type 3)?",
      options: ["If I had studied, I would have passed.", "If I study, I will pass.", "If I studied, I would pass.", "If I had studied, I will pass."],
      answer: "If I had studied, I would have passed."
    },
    {
      question: "What is the meaning of the idiom 'beat around the bush'?",
      options: ["Avoid saying something directly", "Go hunting", "Hit the bush", "Clean the garden"],
      answer: "Avoid saying something directly"
    },
    {
      question: "Complete the sentence: 'Had she known the answer, she ____ it earlier.'",
      options: ["tells", "told", "would have told", "will tell"],
      answer: "would have told"
    },
    {
      question: "Which one is an example of a gerund?",
      options: ["Swimming is fun.", "Swim fast!", "I will swim.", "To swim is healthy."],
      answer: "Swimming is fun."
    },
    {
      question: "Select the passive form of: 'They are cleaning the room.'",
      options: ["The room is cleaned.", "The room is being cleaned.", "They clean the room.", "Cleaning the room is being done."],
      answer: "The room is being cleaned."
    },
    {
      question: "Find the antonym of 'scarce'.",
      options: ["Rare", "Few", "Plentiful", "Empty"],
      answer: "Plentiful"
    },
    {
      question: "What is the correct reported speech of: He said, 'I am tired.'",
      options: ["He said that he was tired.", "He said that he is tired.", "He says he was tired.", "He said he will be tired."],
      answer: "He said that he was tired."
    }
  ],
  ipa: [
  {
    question: "Manakah pernyataan yang benar mengenai proses fotosintesis?",
    options: [
      "Terjadi di mitokondria dan menghasilkan ATP",
      "Menggunakan CO₂ dan menghasilkan O₂",
      "Terjadi di sitoplasma dan menghasilkan glukosa",
      "Menggunakan O₂ dan menghasilkan CO₂"
    ],
    answer: "Menggunakan CO₂ dan menghasilkan O₂"
  },
  {
    question: "Hukum Newton II menyatakan bahwa...",
    options: [
      "Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah",
      "Benda akan diam atau bergerak lurus jika tidak ada gaya",
      "Percepatan berbanding lurus dengan gaya dan berbanding terbalik dengan massa",
      "Gaya gravitasi berbanding lurus dengan massa dan jarak"
    ],
    answer: "Percepatan berbanding lurus dengan gaya dan berbanding terbalik dengan massa"
  },
  {
    question: "Zat yang bersifat elektrolit kuat akan...",
    options: [
      "Menghasilkan sedikit ion di dalam air",
      "Tidak larut dalam air",
      "Terionisasi sebagian",
      "Terionisasi sempurna dalam larutan"
    ],
    answer: "Terionisasi sempurna dalam larutan"
  },
  {
    question: "Dalam sistem pernapasan manusia, pertukaran gas O₂ dan CO₂ terjadi di...",
    options: [
      "Trakea",
      "Bronkus",
      "Alveolus",
      "Laring"
    ],
    answer: "Alveolus"
  },
  {
    question: "Ciri khas tumbuhan berbiji terbuka (Gymnospermae) adalah...",
    options: [
      "Memiliki bunga sejati",
      "Bijinya tertutup oleh ovarium",
      "Biji tidak terlindungi oleh buah",
      "Memiliki daun lebar dan lunak"
    ],
    answer: "Biji tidak terlindungi oleh buah"
  },
  {
    question: "Energi potensial suatu benda bergantung pada...",
    options: [
      "Kecepatan dan massa benda",
      "Ketinggian dan massa benda",
      "Luas permukaan benda",
      "Tekanan udara sekitar"
    ],
    answer: "Ketinggian dan massa benda"
  },
  {
    question: "Ion logam apa yang memberikan warna merah pada nyala api saat uji nyala?",
    options: [
      "Sodium (Na⁺)",
      "Kalium (K⁺)",
      "Stronsium (Sr²⁺)",
      "Tembaga (Cu²⁺)"
    ],
    answer: "Stronsium (Sr²⁺)"
  },
  {
    question: "Fungsi utama enzim amilase dalam sistem pencernaan manusia adalah...",
    options: [
      "Memecah protein menjadi asam amino",
      "Mengubah lemak menjadi asam lemak",
      "Mengubah amilum menjadi maltosa",
      "Menguraikan selulosa menjadi glukosa"
    ],
    answer: "Mengubah amilum menjadi maltosa"
  },
  {
    question: "Mutasi genetik dapat menyebabkan kelainan seperti...",
    options: [
      "Asma",
      "Hemofilia",
      "TBC",
      "Cacar air"
    ],
    answer: "Hemofilia"
  },
  {
    question: "Gaya gesek akan semakin besar apabila...",
    options: [
      "Permukaan benda lebih licin",
      "Gaya normal berkurang",
      "Massa benda dikurangi",
      "Permukaan kasar dan gaya tekan besar"
    ],
    answer: "Permukaan kasar dan gaya tekan besar"
  }
],
pkn: [
  {
    question: "Makna pokok dari sila keempat Pancasila adalah...",
    options: [
      "Kebebasan dalam beragama",
      "Musyawarah untuk mufakat",
      "Persamaan derajat di mata hukum",
      "Keadilan sosial bagi seluruh rakyat"
    ],
    answer: "Musyawarah untuk mufakat"
  },
  {
    question: "Lembaga yang memiliki kewenangan menguji undang-undang terhadap UUD 1945 adalah...",
    options: [
      "DPR",
      "Presiden",
      "Mahkamah Agung",
      "Mahkamah Konstitusi"
    ],
    answer: "Mahkamah Konstitusi"
  },
  {
    question: "Kedaulatan rakyat dalam sistem demokrasi Pancasila diwujudkan melalui...",
    options: [
      "Pemilihan umum secara langsung",
      "Kebebasan tanpa batas",
      "Dominasi mayoritas atas minoritas",
      "Pembatasan peran partai politik"
    ],
    answer: "Pemilihan umum secara langsung"
  },
  {
    question: "Apa fungsi utama konstitusi dalam suatu negara?",
    options: [
      "Menentukan agama resmi",
      "Mengatur hak dan kewajiban warga negara serta struktur pemerintahan",
      "Mengatur hubungan antar negara",
      "Membatasi kebebasan berpendapat"
    ],
    answer: "Mengatur hak dan kewajiban warga negara serta struktur pemerintahan"
  },
  {
    question: "Salah satu bentuk pelanggaran HAM berat menurut UU No. 26 Tahun 2000 adalah...",
    options: [
      "Pencurian",
      "Penganiayaan ringan",
      "Genosida",
      "Perampokan"
    ],
    answer: "Genosida"
  },
  {
    question: "Prinsip negara hukum Indonesia tercermin dalam...",
    options: [
      "Adanya kekuasaan tertinggi di tangan militer",
      "Kebebasan mutlak tanpa batas",
      "Kehidupan yang diatur sepenuhnya oleh pemerintah",
      "Adanya supremasi hukum dan peradilan yang bebas"
    ],
    answer: "Adanya supremasi hukum dan peradilan yang bebas"
  },
  {
    question: "Sikap toleransi terhadap perbedaan suku, agama, dan budaya menunjukkan pengamalan sila...",
    options: [
      "Kedua",
      "Ketiga",
      "Keempat",
      "Kelima"
    ],
    answer: "Ketiga"
  },
  {
    question: "Landasan hukum otonomi daerah di Indonesia adalah...",
    options: [
      "UUD 1945 Pasal 18",
      "UU No. 40 Tahun 1999",
      "PP No. 10 Tahun 1983",
      "UU No. 39 Tahun 1999"
    ],
    answer: "UUD 1945 Pasal 18"
  },
  {
    question: "Prinsip checks and balances dalam sistem ketatanegaraan Indonesia bertujuan untuk...",
    options: [
      "Membatasi hak rakyat",
      "Memperkuat kekuasaan eksekutif",
      "Mencegah penyalahgunaan kekuasaan antar lembaga",
      "Memberi wewenang mutlak pada presiden"
    ],
    answer: "Mencegah penyalahgunaan kekuasaan antar lembaga"
  },
  {
    question: "Salah satu bentuk partisipasi politik non-elektoral adalah...",
    options: [
      "Ikut dalam pemilu",
      "Menjadi caleg",
      "Mengkritisi kebijakan pemerintah melalui media",
      "Mendaftar sebagai pemilih tetap"
    ],
    answer: "Mengkritisi kebijakan pemerintah melalui media"
  }
],
bahasa_indonesia: [
  {
    question: "Makna kata 'elaborasi' dalam konteks penulisan ilmiah adalah...",
    options: [
      "Pemutakhiran data",
      "Penggabungan gagasan",
      "Pengembangan secara rinci",
      "Penegasan ulang"
    ],
    answer: "Pengembangan secara rinci"
  },
  {
    question: "Kalimat berikut yang termasuk kalimat majemuk bertingkat adalah...",
    options: [
      "Dia membaca buku dan menulis catatan.",
      "Mereka belajar bersama di perpustakaan.",
      "Saya akan datang jika hujan reda.",
      "Kita pergi ke pantai minggu lalu."
    ],
    answer: "Saya akan datang jika hujan reda."
  },
  {
    question: "Perbaikan kalimat tidak efektif berikut: 'Karena dia tidak hadir maka dia tidak mendapatkan informasi' adalah...",
    options: [
      "Dia tidak hadir karena tidak mendapatkan informasi.",
      "Karena tidak mendapatkan informasi, maka dia tidak hadir.",
      "Dia tidak hadir, sehingga tidak mendapat informasi.",
      "Karena tidak hadir, dia tidak mendapatkan informasi."
    ],
    answer: "Karena tidak hadir, dia tidak mendapatkan informasi."
  },
  {
    question: "Paragraf deduktif ditandai dengan kalimat utama yang terletak di...",
    options: [
      "Akhir paragraf",
      "Awal paragraf",
      "Tengah paragraf",
      "Tidak tentu"
    ],
    answer: "Awal paragraf"
  },
  {
    question: "Simpulan yang tepat dari pernyataan: 'Semua siswa yang rajin belajar lulus ujian. Budi tidak lulus ujian.' adalah...",
    options: [
      "Budi rajin belajar.",
      "Budi pasti lulus tahun depan.",
      "Budi tidak rajin belajar.",
      "Budi tidak mengikuti ujian."
    ],
    answer: "Budi tidak rajin belajar."
  },
  {
    question: "Kalimat bermajas berikut ini termasuk majas personifikasi, kecuali...",
    options: [
      "Angin malam berbisik lirih.",
      "Mentari pagi tersenyum ramah.",
      "Waktu berjalan begitu cepat.",
      "Gunung menjulang tinggi ke langit."
    ],
    answer: "Gunung menjulang tinggi ke langit."
  },
  {
    question: "Penulisan kutipan langsung panjang (lebih dari 4 baris) yang tepat dalam karya ilmiah adalah...",
    options: [
      "Dikutip dalam tanda kutip ganda tanpa paragraf baru.",
      "Dibuat paragraf baru dan diberi margin kiri lebih dalam.",
      "Diteruskan dalam kalimat tanpa keterangan sumber.",
      "Ditulis dalam catatan kaki tanpa kutipan langsung."
    ],
    answer: "Dibuat paragraf baru dan diberi margin kiri lebih dalam."
  },
  {
    question: "Sinonim kata 'absurd' dalam konteks kalimat 'Pernyataan itu terdengar absurd bagi logika' adalah...",
    options: [
      "Konyol",
      "Logis",
      "Realistis",
      "Masuk akal"
    ],
    answer: "Konyol"
  },
  {
    question: "Ciri utama teks eksposisi adalah...",
    options: [
      "Mengandung unsur cerita dan konflik",
      "Bersifat imajinatif dan emotif",
      "Menjelaskan gagasan dengan argumen logis",
      "Berisi dialog antar tokoh"
    ],
    answer: "Menjelaskan gagasan dengan argumen logis"
  },
  {
    question: "Jenis kalimat berikut yang termasuk kalimat pasif transitif adalah...",
    options: [
      "Buku itu dibaca oleh Sinta.",
      "Sinta membaca buku di taman.",
      "Kami sedang menulis laporan.",
      "Dia berangkat ke sekolah pagi-pagi."
    ],
    answer: "Buku itu dibaca oleh Sinta."
  }
],
ips: [
  {
    question: "Salah satu dampak negatif globalisasi dalam bidang ekonomi adalah...",
    options: [
      "Meningkatnya daya saing lokal",
      "Berkurangnya lapangan kerja di sektor industri tradisional",
      "Meningkatnya pendapatan negara",
      "Meningkatnya inovasi produk lokal"
    ],
    answer: "Berkurangnya lapangan kerja di sektor industri tradisional"
  },
  {
    question: "Fenomena urbanisasi yang tidak terkontrol dapat menyebabkan...",
    options: [
      "Penyebaran penduduk yang merata",
      "Meningkatnya kualitas hidup di desa",
      "Meningkatnya kepadatan penduduk di kota",
      "Meningkatnya investasi di daerah"
    ],
    answer: "Meningkatnya kepadatan penduduk di kota"
  },
  {
    question: "Tujuan utama dari sistem ekonomi campuran adalah...",
    options: [
      "Meningkatkan monopoli pasar",
      "Menghapuskan peran negara",
      "Menggabungkan keunggulan ekonomi pasar dan perencanaan",
      "Menyerahkan seluruh kegiatan ekonomi kepada swasta"
    ],
    answer: "Menggabungkan keunggulan ekonomi pasar dan perencanaan"
  },
  {
    question: "Kerajaan Sriwijaya terkenal sebagai kerajaan maritim karena...",
    options: [
      "Menguasai perdagangan jalur sutra",
      "Mengandalkan pertanian sebagai ekonomi utama",
      "Menguasai jalur perdagangan di Asia Tenggara",
      "Berpusat di Pulau Jawa"
    ],
    answer: "Menguasai jalur perdagangan di Asia Tenggara"
  },
  {
    question: "Salah satu bentuk stratifikasi sosial dalam masyarakat adalah...",
    options: [
      "Gotong royong",
      "Kepemilikan kekayaan",
      "Konflik sosial",
      "Interaksi sosial"
    ],
    answer: "Kepemilikan kekayaan"
  },
  {
    question: "Apa dampak dari inflasi yang tinggi terhadap masyarakat berpenghasilan tetap?",
    options: [
      "Pendapatan riil meningkat",
      "Kemampuan daya beli menurun",
      "Harga barang turun",
      "Nilai uang stabil"
    ],
    answer: "Kemampuan daya beli menurun"
  },
  {
    question: "Proklamasi kemerdekaan Indonesia pada 17 Agustus 1945 merupakan peristiwa yang menandai...",
    options: [
      "Penyerahan kekuasaan Jepang ke Belanda",
      "Berakhirnya masa penjajahan Belanda secara resmi",
      "Lahirnya negara Indonesia sebagai bangsa yang merdeka",
      "Kemenangan Indonesia dalam Perang Dunia II"
    ],
    answer: "Lahirnya negara Indonesia sebagai bangsa yang merdeka"
  },
  {
    question: "Faktor utama yang memengaruhi persebaran penduduk di Indonesia adalah...",
    options: [
      "Politik luar negeri",
      "Kepercayaan budaya",
      "Fasilitas transportasi dan lapangan kerja",
      "Sistem pemerintahan"
    ],
    answer: "Fasilitas transportasi dan lapangan kerja"
  },
  {
    question: "Prinsip dasar perdagangan internasional menurut teori keunggulan komparatif adalah...",
    options: [
      "Negara memproduksi semua barang sendiri",
      "Negara mengimpor barang yang bisa diproduksi sendiri",
      "Negara mengekspor barang yang paling efisien diproduksi",
      "Negara melarang ekspor untuk melindungi industri"
    ],
    answer: "Negara mengekspor barang yang paling efisien diproduksi"
  },
  {
    question: "Salah satu peran lembaga sosial adalah...",
    options: [
      "Menurunkan mobilitas sosial",
      "Mendorong penyimpangan sosial",
      "Menciptakan keteraturan sosial",
      "Mengurangi integrasi masyarakat"
    ],
    answer: "Menciptakan keteraturan sosial"
  }
],
pjok: [
  {
     question: "Apa fungsi utama dari *karbohidrat kompleks* dalam kegiatan olahraga jangka panjang?",
      options: [
        "Meningkatkan kekuatan otot",
        "Sumber energi berkelanjutan",
        "Mempercepat metabolisme protein",
        "Meningkatkan konsumsi oksigen"
      ],
      answer: "Sumber energi berkelanjutan"
    },
    {
      question: "Dalam permainan bola voli, teknik 'jump serve' memiliki keunggulan utama dalam hal...",
      options: [
        "Menghemat tenaga server",
        "Mengurangi kecepatan bola",
        "Meningkatkan akurasi servis",
        "Menambah kecepatan dan tekanan bola"
      ],
      answer: "Menambah kecepatan dan tekanan bola"
    },
    {
      question: "Salah satu risiko dari latihan beban berlebihan tanpa istirahat yang cukup adalah...",
      options: [
        "Osteoporosis",
        "Overtraining syndrome",
        "Disfungsi liver",
        "Hipoglikemia akut"
      ],
      answer: "Overtraining syndrome"
    },
    {
      question: "Apa nama fase detak jantung ketika jantung berkontraksi dan memompa darah ke arteri?",
      options: [
        "Diastol",
        "Sistol",
        "Ventrikulasi",
        "Relaksasi atrium"
      ],
      answer: "Sistol"
    },
    {
      question: "Dalam permainan sepak bola, strategi *pressing* bertujuan untuk...",
      options: [
        "Mengurangi stamina lawan",
        "Menutup ruang serangan lawan",
        "Meningkatkan ball possession",
        "Menciptakan offside trap"
      ],
      answer: "Menutup ruang serangan lawan"
    },
    {
      question: "Gerakan sit-up terutama melatih otot bagian...",
      options: [
        "Dada",
        "Punggung bawah",
        "Abdomen (perut)",
        "Lengan atas"
      ],
      answer: "Abdomen (perut)"
    },
    {
      question: "Kadar maksimal VO₂ max seseorang menggambarkan...",
      options: [
        "Kekuatan otot kaki",
        "Kapasitas paru untuk mengatur suhu",
        "Kemampuan tubuh mengonsumsi oksigen saat latihan intens",
        "Kemampuan jantung dalam memompa darah istirahat"
      ],
      answer: "Kemampuan tubuh mengonsumsi oksigen saat latihan intens"
    },
    {
      question: "Pernyataan berikut yang **benar** tentang pemanasan adalah...",
      options: [
        "Hanya perlu dilakukan sebelum olahraga berat",
        "Bertujuan mendinginkan tubuh sebelum latihan",
        "Mencegah cedera dan meningkatkan performa",
        "Tidak memengaruhi kecepatan reaksi"
      ],
      answer: "Mencegah cedera dan meningkatkan performa"
    },
    {
      question: "Dalam atletik, nomor lari jarak menengah meliputi lari dengan jarak...",
      options: [
        "100m dan 200m",
        "400m dan 800m",
        "800m dan 1500m",
        "3000m dan 5000m"
      ],
      answer: "800m dan 1500m"
    },
    {
      question: "Zat berikut yang **dihindari** atlet karena dapat menurunkan daya tahan tubuh adalah...",
      options: [
        "Elektrolit",
        "Kreatin",
        "Kafein",
        "Alkohol"
      ],
      answer: "Alkohol"
    }
  ]
};
