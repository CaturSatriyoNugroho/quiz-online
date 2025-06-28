document.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem("playerName") || "Pemain";
  const score = parseInt(localStorage.getItem("finalScore")) || 0;
  const total = parseInt(localStorage.getItem("totalQuestions")) || 0;
  const percentage = (score / total) * 100 || 0;
  const subject = localStorage.getItem("quizSubject") || "-";

  const resultBox = document.getElementById("result-box");
  const resultSound = document.getElementById("resultSound");

  let message = "", color = "", sound = "";

  if (percentage === 100) {
    message = "🏆 Sempurna! Kamu jenius!";
    color = "lime";
    sound = "victory.mp3";
  } else if (percentage >= 70) {
    message = "🔥 Bagus banget! Kamu hampir sempurna.";
    color = "aqua";
    sound = "victory.mp3";
  } else if (percentage >= 40) {
    message = "⚠️ Lumayan, bisa lebih baik!";
    color = "orange";
    sound = "lose.mp3";
  } else {
    message = "😢 Jangan menyerah! Coba lagi ya.";
    color = "red";
    sound = "lose.mp3";
  }

  resultSound.src = `assets/sounds/${sound}`;
  resultSound.play();

  resultBox.innerHTML = `
    <h2 style="color: ${color};">Selamat, <strong>${name}</strong>!</h2>
    <p>Mapel: <strong>${subject}</strong></p>
    <p style="margin-bottom: 0.5rem;">${message}</p>
    <h1 style="font-size: 3rem; margin: 1rem 0; color: ${color};">${score} / ${total}</h1>
    <button onclick="window.location.href='index.html'">Main Lagi</button>
  `;
});


