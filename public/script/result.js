document.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem("playerName") || "Pemain";
  const subject = localStorage.getItem("quizSubject") || "-";
  const score = parseInt(localStorage.getItem("finalScore")) || 0;
  const total = parseInt(localStorage.getItem("totalQuestions")) || 10;

  // Format teks mapel: dari bahasa_inggris → Bahasa Inggris
  const formattedSubject = subject.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const percent = (score / total) * 100;
  let message = "", icon = "", color = "";

  if (percent === 100) {
    message = "Sempurna! Kamu jenius!";
    icon = "🏆";
    color = "lime";
  } else if (percent >= 70) {
    message = "Bagus banget! Kamu hampir sempurna.";
    icon = "🔥";
    color = "aqua";
  } else if (percent >= 40) {
    message = "Lumayan, bisa lebih baik!";
    icon = "⚠️";
    color = "orange";
  } else {
    message = "Jangan menyerah! Coba lagi ya.";
    icon = "😢";
    color = "red";
  }

  document.getElementById("player-name").textContent = name.toUpperCase();
  document.getElementById("subject-name").textContent = formattedSubject;
  document.getElementById("message-icon").textContent = icon;
  document.getElementById("result-message").textContent = message;
  document.getElementById("score-display").textContent = `${score} / ${total}`;
  document.getElementById("score-display").style.color = color;
});



