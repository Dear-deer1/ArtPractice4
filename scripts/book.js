document.addEventListener('DOMContentLoaded', function() {
    const videoWrapper = document.querySelector('.VideoWrapper1');
    if (videoWrapper) {
        const slidePairs = document.querySelectorAll('.slide-pair');
        let currentSlideIndex = 0;
        
        // Показываем видео после загрузки
        const allVideos = document.querySelectorAll('.slide-pair video');
        let loadedVideos = 0;
        
        allVideos.forEach(video => {
            // Принудительно запускаем загрузку
            video.load();
            
            video.addEventListener('loadeddata', function() {
                this.style.opacity = 1;
                loadedVideos++;
                
                // Когда все видео загружены, показываем слайдер
                if (loadedVideos === allVideos.length) {
                    videoWrapper.style.opacity = "1";
                }
            });
            
            // Обработка ошибок загрузки
            video.addEventListener('error', function() {
                console.error('Ошибка загрузки видео:', this.src);
                this.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
            });
        });

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
        
        // Автоматическое масштабирование видео
        function scaleVideos() {
            allVideos.forEach(video => {
                // Сохраняем пропорции
                const aspectRatio = video.videoWidth / video.videoHeight;
                video.style.aspectRatio = aspectRatio;
            });
        }
        
        // Вызываем при изменении размера окна
        window.addEventListener('resize', scaleVideos);
        scaleVideos();
    }
});

   function setupImageToggle(className, baseName) {
        const images = document.querySelectorAll(className);
        images.forEach(img => {
            let isOriginal = true;
            
            img.addEventListener('click', () => {
                const currentSrc = img.src;
                const newSrc = isOriginal 
                    ? currentSrc.replace('.svg', '_2.svg')
                    : currentSrc.replace('_2.svg', '.svg');
                
                img.src = newSrc;
                isOriginal = !isOriginal;
                
                // Анимация перехода
                img.style.opacity = 0;
                setTimeout(() => {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = 1;
                }, 10);
            });
        });
    }

    // Инициализация для всех изображений
    document.addEventListener('DOMContentLoaded', () => {
        setupImageToggle('.img1', 'Book1');
        setupImageToggle('.img2', 'Book2');
        setupImageToggle('.img3', 'Book3');
    });