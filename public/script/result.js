document.addEventListener("DOMContentLoaded", () => {
  const score = parseInt(localStorage.getItem("finalScore")) || 0;
  const total = parseInt(localStorage.getItem("totalQuestions")) || 0;
  const playerName = localStorage.getItem("playerName") || "Pemain";
  const subject = localStorage.getItem("quizSubject") || "-";

  // Tampilkan ke halaman
  document.getElementById("score-display").textContent = `${score} / ${total}`;
  document.getElementById("player-name").textContent = playerName;
  document.getElementById("subject-name").textContent = subject.replace("_", " ");

  // Tentukan file audio
  const audioFile = score >= 7 ? "victory.mp3" : "lose.mp3";
  const resultAudio = new Audio(`assets/sounds/${audioFile}`);

  // Coba autoplay musik dengan sedikit delay agar browser mengizinkan
  setTimeout(() => {
    resultAudio.play().catch((err) => {
      console.warn("Autoplay dicegah, user harus klik dulu.");
    });
  }, 300);
});



