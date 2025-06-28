document.addEventListener('DOMContentLoaded', () => {
  const score = parseInt(localStorage.getItem("finalScore"), 10) || 0;
  const total = parseInt(localStorage.getItem("totalQuestions"), 10) || 10;
  const name = localStorage.getItem("playerName") || "Pemain";
  const subject = localStorage.getItem("quizSubject") || "Umum";

  const percentage = (score / total) * 100;
  let message = "", color = "", soundSrc = "";

  if (percentage === 100) {
    message = "🏆 Sempurna! Kamu jenius!";
    color = "lime";
    soundSrc = "assets/sounds/victory.mp3";
  } else if (percentage >= 70) {
    message = "🔥 Bagus banget! Kamu hampir sempurna.";
    color = "aqua";
    soundSrc = "assets/sounds/victory.mp3";
  } else if (percentage >= 40) {
    message = "⚠️ Lumayan, bisa lebih baik!";
    color = "orange";
    soundSrc = "assets/sounds/lose.mp3";
  } else {
    message = "😢 Jangan menyerah! Coba lagi ya.";
    color = "red";
    soundSrc = "assets/sounds/lose.mp3";
  }

  document.getElementById("resultName").innerHTML = `Selamat, <strong>${name.toUpperCase()}</strong>!`;
  document.getElementById("resultMapel").textContent = `Mapel: ${subject}`;
  document.getElementById("resultScore").textContent = `${score} / ${total}`;
  document.getElementById("resultMessage").textContent = message;
  document.getElementById("resultMessage").style.color = color;
  document.getElementById("resultScore").style.color = color;

  const resultSound = document.getElementById("resultSound");
  resultSound.src = soundSrc;
  resultSound.play();
});




