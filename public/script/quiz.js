document.addEventListener('DOMContentLoaded', () => {
  const loadingEl = document.getElementById("loading");
  if (loadingEl) loadingEl.style.display = "none";

  const playerName = localStorage.getItem('playerName') || 'Pemain';
  const subject = localStorage.getItem('quizSubject') || 'matematika';

  const questionBox = document.getElementById('question-box');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options');
  const nextButton = document.getElementById('next-btn');
  const quizBgm = document.getElementById('quizBgm');

  const correctSound = new Audio('assets/sounds/correct.mp3');
  const wrongSound = new Audio('assets/sounds/wrong.mp3');

  let currentIndex = 0;
  let score = 0;
  const selectedQuestions = [...questions[subject]].sort(() => Math.random() - 0.5);

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
      loadQuestion();
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

    const percentage = (score / selectedQuestions.length) * 100;
    localStorage.setItem("finalScore", score);
    localStorage.setItem("totalQuestions", selectedQuestions.length);
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("subjectName", subject);
    localStorage.setItem("percentageScore", percentage);

    window.location.href = "result.html";
  }
});

