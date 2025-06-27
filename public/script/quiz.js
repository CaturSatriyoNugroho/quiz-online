document.addEventListener('DOMContentLoaded', () => {
  // Matikan loading
  const loadingEl = document.getElementById("loading");
  if (loadingEl) loadingEl.style.display = "none";

  // Ambil data pemain dan mapel dari localStorage
  const playerName = localStorage.getItem('playerName') || 'Pemain';
  const subject = localStorage.getItem('quizSubject') || 'matematika';

  // Ambil elemen penting
  const questionBox = document.getElementById('question-box');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  const countdownEl = document.getElementById("countdown");
  const quizBgm = document.getElementById('quizBgm');

  // Sound efek
  const correctSound = new Audio('assets/sounds/correct.mp3');
  const wrongSound = new Audio('assets/sounds/wrong.mp3');
  const victorySound = new Audio('assets/sounds/victory.mp3');
  const loseSound = new Audio('assets/sounds/lose.mp3');

  // Inisialisasi variabel
  let currentIndex = 0;
  let score = 0;

  // Acak soal
  const selectedQuestions = [...questions[subject]].sort(() => Math.random() - 0.5);

  // Countdown 3 detik sebelum mulai quiz
  let count = 3;
  countdownEl.textContent = count;

  const countdownInterval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownEl.textContent = count;
    } else {
      clearInterval(countdownInterval);
      countdownEl.style.display = "none";
      questionBox.style.display = "block";
      quizBgm.play().catch(() => {}); // untuk mencegah error autoplay di beberapa browser
      loadQuestion();
    }
  }, 1000);

  // Tampilkan soal
  function loadQuestion() {
    const q = selectedQuestions[currentIndex];
    questionText.textContent = `${currentIndex + 1}. ${q.question}`;
    optionsContainer.innerHTML = '';

    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.classList.add('option-btn');
      btn.addEventListener('click', () => checkAnswer(btn, q.answer));
      optionsContainer.appendChild(btn);
    });

    nextButton.style.display = 'none';
  }

  // Cek jawaban user
  function checkAnswer(button, correctAnswer) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (button.textContent === correctAnswer) {
      button.classList.add('correct');
      correctSound.play();
      score++;
    } else {
      button.classList.add('wrong');
      wrongSound.play();
      buttons.forEach(btn => {
        if (btn.textContent === correctAnswer) btn.classList.add('correct');
      });
    }

    nextButton.style.display = 'block';
  }

  // Klik "Soal Selanjutnya"
  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < selectedQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  // Simpan hasil dan redirect ke result.html
  function showResult() {
    quizBgm.pause();
    quizBgm.currentTime = 0;

    const percentage = (score / selectedQuestions.length) * 100;

    localStorage.setItem("finalScore", score);
    localStorage.setItem("totalQuestions", selectedQuestions.length);
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("subjectName", subject);
    localStorage.setItem("percentageScore", percentage);

    window.location.href = "result.html";
  }
});

