document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('playerName').value.trim();
    const subject = document.getElementById('subject').value;

    if (name && subject) {
      localStorage.setItem('playerName', name);
      localStorage.setItem('quizSubject', subject);
      window.location.href = 'quiz.html';
    }
  });
});