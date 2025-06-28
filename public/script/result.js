document.addEventListener('DOMContentLoaded', () => {
  const playerName = localStorage.getItem('playerName') || 'Pemain';
  const subject = localStorage.getItem('quizSubject') || '-';
  const score = parseInt(localStorage.getItem('finalScore')) || 0;
  const total = parseInt(localStorage.getItem('totalQuestions')) || 0;

  const resultBgm = document.getElementById("resultBgm");

  const nameEl = document.getElementById("player-name");
  const subjectEl = document.getElementById("subject-name");
  const scoreEl = document.getElementById("score-display");
  const messageEl = document.getElementById("message-text");

  nameEl.textContent = playerName.toUpperCase();
  subjectEl.textContent = subject.replace("_", " ");
  scoreEl.textContent = `${score} / ${total}`;

  const percentage = (score / total) * 100;
  let message = "", audioSrc = "", color = "";

  if (percentage === 100) {
    message = "🏆 Sempurna! Kamu jenius!";
    audioSrc = "assets/sounds/victory.mp3";
    color = "lime";
  } else if (percentage >= 70) {
    message = "🔥 Bagus banget! Kamu hampir sempurna.";
    audioSrc = "assets/sounds/victory.mp3";
    color = "aqua";
  } else if (percentage >= 40) {
    message = "⚠️ Lumayan, bisa lebih baik!";
    audioSrc = "assets/sounds/lose.mp3";
    color = "orange";
  } else {
    message = "😢 Jangan menyerah! Coba lagi ya.";
    audioSrc = "assets/sounds/lose.mp3";
    color = "red";
  }

  messageEl.textContent = message;
  messageEl.style.color = color;
  scoreEl.style.color = color;

  resultBgm.src = audioSrc;
  resultBgm.play().catch(() => {
    console.warn("Audio autoplay ditolak, user harus klik dulu.");
  });
});




