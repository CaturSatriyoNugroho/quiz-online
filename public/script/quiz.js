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

  localStorage.setItem("finalScore", score);
  localStorage.setItem("totalQuestions", selectedQuestions.length);

  questionBox.innerHTML = `
  <div class="result-box" style="
    text-align: center;
    padding: 2.5rem;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.85);
    box-shadow: 0 0 20px var(--primary); /* Glow hanya di sini */
    max-width: 500px;
    margin: 0 auto;
  ">
    <h2 style="
      font-size: 2.2rem;
      margin-bottom: 2rem;
      font-weight: 700;
      color: var(--white);
      text-shadow: 0 0 10px var(--primary), 0 0 20px var(--accent);
    ">
      🎉 Kuis Selesai!
    </h2>

    <div style="margin-top: 1.5rem;">
      <button onclick="window.location.href='result.html'" style="
        padding: 0.9rem 2rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 0.5rem;
        background: var(--accent);
        color: white;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.3s ease;
      ">
        👀 Lihat Skor
      </button>
    </div>
  </div>
  `;
}

});


