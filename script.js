// Эффект открывания конверта
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const clickArea = document.getElementById('envelopeClickArea');
    const heroContent = document.getElementById('heroContent');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const overlay = document.getElementById('envelopeOverlay');
    
    let isOpened = false; // Флаг, чтобы не открыть дважды
    
    function openEnvelope() {
        if (isOpened) return; // Если уже открыто, выходим
        isOpened = true;
        
        // Добавляем класс для анимации
        envelope.classList.add('open');
        
        // Через 0.8 сек скрываем конверт и показываем содержимое
        setTimeout(function() {
            envelope.classList.add('hidden');
            heroContent.classList.add('visible');
            scrollIndicator.style.display = 'block';
            
            // Дополнительно скрываем оверлей, если вдруг
            if (overlay) {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 500);
            }
        }, 800);
    }
    
    // Открытие по клику
    if (clickArea) {
        clickArea.addEventListener('click', openEnvelope);
    }
    
    // Открытие через 5 секунд автоматически
    setTimeout(function() {
        openEnvelope();
    }, 5000); // 5000 миллисекунд = 5 секунд
    
    // Таймер обратного отсчета
    const weddingDate = new Date('2026-07-17T16:00:00').getTime();
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        // Расчет дней, часов, минут, секунд
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Выводим результат в элементы
        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
        
        // Если свадьба прошла
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('timer').innerHTML = '<div style="font-size: 24px; color: #b76e79;">Свадьба уже сегодня! 🎉</div>';
        }
    }, 1000);
    
    // Плавная прокрутка при клике на стрелку
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
