document.addEventListener('DOMContentLoaded', () => {
  const loadingEl = document.getElementById("loading");
  if (loadingEl) loadingEl.style.display = "none";

  const playerName = localStorage.getItem('playerName') || 'Pemain';
  const subject = localStorage.getItem('quizSubject') || 'matematika';

  const nameDisplay = document.getElementById('player-name');
  const subjectDisplay = document.getElementById('subject-name');
  if (nameDisplay) nameDisplay.textContent = playerName;
  if (subjectDisplay) subjectDisplay.textContent = subject;

  const questionBox = document.getElementById('question-box');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');

  const correctSound = new Audio('assets/sounds/correct.mp3');
  const wrongSound = new Audio('assets/sounds/wrong.mp3');
  const victorySound = new Audio('assets/sounds/victory.mp3');
  const loseSound = new Audio('assets/sounds/lose.mp3');
  const quizBgm = document.getElementById('quizBgm'); // ambil elemen audio dari quiz.html

  let currentIndex = 0;
  let score = 0;

  // Acak soal
  const selectedQuestions = [...questions[subject]].sort(() => Math.random() - 0.5);

  // 🔢 Countdown 3 detik sebelum quiz dimulai
  const countdownEl = document.getElementById("countdown");
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
      quizBgm.play();
      loadQuestion(); // mulai quiz setelah countdown
    }
  }, 1000);

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

  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < selectedQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    quizBgm.pause();
    quizBgm.currentTime = 0;

    let message = "";
    let color = "";

    const percentage = (score / selectedQuestions.length) * 100;

    if (percentage === 100) {
      message = "🏆 Sempurna! Kamu jenius!";
      color = "lime";
      victorySound.play();
    } else if (percentage >= 70) {
      message = "🔥 Bagus banget! Kamu hampir sempurna.";
      color = "aqua";
      victorySound.play();
    } else if (percentage >= 40) {
      message = "⚠️ Lumayan, bisa lebih baik!";
      color = "orange";
      loseSound.play();
    } else {
      message = "😢 Jangan menyerah! Coba lagi ya.";
      color = "red";
      loseSound.play();
    }

    questionBox.innerHTML = `
      <div class="result-box" style="text-align: center; background: transparent; box-shadow: none; border: none;">
        <h2 style="color: ${color};">Selamat, <strong>${playerName}</strong>!</h2>
        <p style="margin-bottom: 0.5rem;">${message}</p>
        <h1 style="font-size: 3rem; margin: 1rem 0; color: ${color};">${score} / ${selectedQuestions.length}</h1>
        <button onclick="window.location.href='index.html'">Main Lagi</button>
      </div>
    `;
  }
});
