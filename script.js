// ================= script.js =================
// Весь JavaScript код проекта

document.addEventListener('DOMContentLoaded', function() {
  
  // ===== АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ =====
  const faders = document.querySelectorAll('.fade-in');
  
  const appearObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  faders.forEach(fader => appearObserver.observe(fader));
  
  // ===== ТАЙМЕР ОБРАТНОГО ОТСЧЁТА =====
  const weddingDate = new Date("July 17, 2026 16:00:00").getTime();
  
  function updateTimer() {
    const now = new Date().getTime();
    const diff = weddingDate - now;
    
    // Если дата прошла
    if (diff < 0) {
      document.getElementById("timerDays").innerText = "00";
      document.getElementById("timerHours").innerText = "00";
      document.getElementById("timerMinutes").innerText = "00";
      document.getElementById("timerSeconds").innerText = "00";
      return;
    }
    
    // Расчёт времени
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Обновление DOM
    document.getElementById("timerDays").innerText = days.toString().padStart(2, '0');
    document.getElementById("timerHours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("timerMinutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("timerSeconds").innerText = seconds.toString().padStart(2, '0');
  }
  
  // Запуск таймера
  updateTimer();
  setInterval(updateTimer, 1000);
  
  // ===== СЛАЙДЕР ПОЖЕЛАНИЙ (если есть на странице) =====
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slider-slide');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  const dots = document.querySelectorAll('.dot');
  
  if (sliderTrack && slides.length) {
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Обновление точек
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      });
    }
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
    
    updateSlider();
  }
  
  // ===== ОБРАБОТКА ФОРМЫ RSVP (если есть на странице) =====
  const rsvpForm = document.querySelector('.rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Спасибо за подтверждение! Мы свяжемся с вами позже.');
      this.reset();
    });
  }
  
  // ===== КОПИРОВАНИЕ ТЕЛЕФОНА (если есть на странице) =====
  const contactPhones = document.querySelectorAll('.contact-phone');
  contactPhones.forEach(phone => {
    phone.addEventListener('click', function(e) {
      e.preventDefault();
      const phoneNumber = this.getAttribute('href').replace('tel:', '');
      navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Номер телефона скопирован в буфер обмена');
      }).catch(() => {
        // Fallback для старых браузеров
        prompt('Скопируйте номер:', phoneNumber);
      });
    });
  });
  
});
