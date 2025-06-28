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
]
};
