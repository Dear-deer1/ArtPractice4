document.addEventListener('DOMContentLoaded', function() {
    // Первый слайдер (с видео)
    const videoWrapper = document.querySelector('.VideoWrapper1');
    if (videoWrapper) {
        const slidePairs = document.querySelectorAll('.slide-pair');
        let currentSlideIndex = 0;

        function initSlider() {
            setTimeout(() => {
                videoWrapper.style.opacity = "1";
                videoWrapper.style.transition = "opacity 1.2s ease";
            }, 300);
        }

        function updateSlider() {
            videoWrapper.style.transform = `translateX(${-currentSlideIndex * 50}%)`;
        }

        document.getElementById('prev1')?.addEventListener('click', () => {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                updateSlider();
            }
        });

        document.getElementById('next1')?.addEventListener('click', () => {
            if (currentSlideIndex < slidePairs.length - 1) {
                currentSlideIndex++;
                updateSlider();
            }
        });

        initSlider();
    }


    
    // Инициализация всех тройных слайдеров
    const sliders = document.querySelectorAll('.triple-slider');
    
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.slider-btn.prev');
        const nextBtn = slider.querySelector('.slider-btn.next');
        
        // Начальное состояние
        let currentOrder = ['left', 'center', 'right'];
        
        function rotateSlides(direction) {
            if (direction === 'next') {
                currentOrder = [currentOrder[2], currentOrder[0], currentOrder[1]];
            } else {
                currentOrder = [currentOrder[1], currentOrder[2], currentOrder[0]];
            }
            
            // Применяем новые классы
            slides.forEach((slide, index) => {
                slide.className = `slide ${currentOrder[index]}`;
            });
        }
        
        // Обработчики кнопок
        if (prevBtn) {
            prevBtn.addEventListener('click', () => rotateSlides('prev'));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => rotateSlides('next'));
        }
    });
});