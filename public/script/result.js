document.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem("playerName") || "Pemain";
  const subject = localStorage.getItem("quizSubject") || "-";
  const score = parseInt(localStorage.getItem("finalScore")) || 0;
  const total = parseInt(localStorage.getItem("totalQuestions")) || 10;

  const playerEl = document.getElementById("player-name");
  const subjectEl = document.getElementById("subject-name");
  const scoreEl = document.getElementById("score-display");
  const messageEl = document.getElementById("result-message");
  const iconEl = document.getElementById("message-icon");

  playerEl.textContent = name.toUpperCase();
  subjectEl.textContent = subject;

  let message = "";
  let icon = "";
  let color = "";
  let soundFile = "";

  const percentage = (score / total) * 100;

  if (percentage === 100) {
    message = "🏆 Sempurna! Kamu jenius!";
    color = "lime";
    soundFile = "victory.mp3";
  } else if (percentage >= 70) {
    message = "🔥 Bagus banget! Kamu hampir sempurna.";
    color = "aqua";
    soundFile = "victory.mp3";
  } else if (percentage >= 40) {
    message = "⚠️ Lumayan, bisa lebih baik!";
    color = "orange";
    soundFile = "lose.mp3";
  } else {
    message = "😢 Jangan menyerah! Coba lagi ya.";
    color = "red";
    soundFile = "lose.mp3";
  }

  iconEl.textContent = message.match(/^\W+/)?.[0] || "";
  messageEl.textContent = message.replace(/^\W+/, "");
  scoreEl.textContent = `${score} / ${total}`;
  scoreEl.style.color = color;

  // 🔊 Play background music sesuai hasil
  const resultBgm = new Audio(`assets/sounds/${soundFile}`);
  resultBgm.loop = true;
  document.body.addEventListener('click', () => {
    resultBgm.play();
  }, { once: true });
});


