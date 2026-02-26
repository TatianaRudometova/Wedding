// ===== script.js =====
// Полный JavaScript файл для свадебного приглашения

(function() {
  // ===== SCROLL ANIMATION =====
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));

  // ===== TIMER =====
  const weddingDate = new Date("July 17, 2026 15:00:00").getTime();
  const timerElement = document.getElementById("timer");

  function updateTimer() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      timerElement.innerHTML = "Этот день настал";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);

    timerElement.innerHTML = `${days} дней ${hours} часов ${minutes} минут`;
  }

  setInterval(updateTimer, 1000);
  updateTimer();

  // ===== RSVP FORM HANDLER =====
  const form = document.getElementById("rsvp-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = this.name.value.trim();
      const attendance = this.attendance.value;

      if (!name || !attendance) {
        alert("Пожалуйста, заполните все поля");
        return;
      }

      alert("Спасибо за ваш ответ!");
      this.reset(); // Очистка формы после отправки
    });
  }
})();
