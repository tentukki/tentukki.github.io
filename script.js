// Скрипт для скрытия прелоадера
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Опционально: минимальная задержка в 2 секунды (чтобы прелоадер не исчезал слишком быстро)
    setTimeout(function() {
        preloader.classList.add('hidden');
        
        // Полностью удаляем через 0.5с (после анимации)
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 2000); // Задержка в миллисекундах (2000 = 2 секунды)
});