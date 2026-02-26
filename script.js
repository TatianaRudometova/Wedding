// ===== script.js =====

// Дожидаемся полной загрузки DOM перед выполнением скриптов
document.addEventListener('DOMContentLoaded', function() {
  
  // ========== АНИМАЦИЯ ПОЯВЛЕНИЯ (REVEAL) ==========
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));

  // ========== ТАЙМЕР ==========
  const weddingDate = new Date("July 19, 2025 15:00:00").getTime();
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
  updateTimer(); // вызываем сразу, чтобы не ждать 1 секунду

  // ========== ОБРАБОТКА ФОРМЫ (RSVP) ==========
  const form = document.getElementById("rsvp-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Спасибо за ваш ответ!");
      // Здесь можно добавить отправку данных на сервер, если нужно
      // form.reset(); // при необходимости раскомментировать
    });
  }
  
});
