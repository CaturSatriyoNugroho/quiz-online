document.addEventListener('DOMContentLoaded', () => {
  const loadingEl = document.getElementById("loading");
  const startBtn = document.getElementById("start-btn");
  const startScreen = document.getElementById("start-screen");
  const countdownEl = document.getElementById("countdown");
  const questionBox = document.getElementById("question-box");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");

  const correctSound = new Audio('assets/sounds/correct.mp3');
  const wrongSound = new Audio('assets/sounds/wrong.mp3');
  const victorySound = new Audio('assets/sounds/victory.mp3');
  const loseSound = new Audio('assets/sounds/lose.mp3');
  const quizBgm = document.getElementById('quizBgm');

  let currentIndex = 0;
  let score = 0;

  const playerName = localStorage.getItem('playerName') || 'Pemain';
  const subject = localStorage.getItem('quizSubject') || 'matematika';

  const selectedQuestions = [...questions[subject]].sort(() => Math.random() - 0.5);

  if (loadingEl) loadingEl.style.display = "none";

  startBtn.addEventListener('click', () => {
    startScreen.style.display = "none";
    countdownEl.style.display = "flex";
    quizBgm.play();
    startCountdown();
  });

  function startCountdown() {
    let count = 3;
    countdownEl.textContent = count;

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        countdownEl.textContent = count;
      } else {
        clearInterval(interval);
        countdownEl.style.display = "none";
        questionBox.style.display = "block";
        loadQuestion();
      }
    }, 1000);
  }

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

    const percentage = (score / selectedQuestions.length) * 100;
    let message = "", color = "";

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

