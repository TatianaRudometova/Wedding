// Эффект открывания полноэкранного конверта
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const seal = document.getElementById('envelopeSeal');
    const heroContent = document.getElementById('heroContent');
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    // Вариант 1: Открытие по клику на печать
    if (seal) {
        seal.addEventListener('click', function() {
            openEnvelope();
        });
    }
    
    // Вариант 2: Автоматическое открытие через 3 секунды
    // Раскомментируйте строки ниже, если нужно автооткрытие
    /*
    setTimeout(function() {
        openEnvelope();
    }, 3000);
    */
    
    function openEnvelope() {
        // Добавляем класс для анимации
        envelope.classList.add('open');
        
        // Через 0.8 сек скрываем конверт и показываем содержимое
        setTimeout(function() {
            envelope.classList.add('hidden');
            heroContent.classList.add('visible');
            scrollIndicator.style.display = 'block';
        }, 800);
    }
    
    // Таймер обратного отсчета
    const weddingDate = new Date('2026-07-17T16:00:00').getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = '<div style="font-size: 24px; color: #b76e79;">Свадьба уже сегодня! 🎉</div>';
        }
    }, 1000);
    
    // Плавная прокрутка
    const scrollBtn = document.querySelector('.hero-scroll');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});
