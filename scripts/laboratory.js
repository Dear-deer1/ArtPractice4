const newLocal = window.onload = function() {
    const VideoWrapper = document.querySelector('.VideoWrapper1');
    const videos = Array.from(document.querySelectorAll('.VideoWrapper1 video'));
    let currentSlideIndex = 0;

    function moveToSlide(index) {
        const singlePairWidth = videos[0].parentNode.offsetWidth; 
        VideoWrapper.style.transform = `translateX(${-index * singlePairWidth}px)`; 
    }


    document.getElementById('prev').addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            moveToSlide(currentSlideIndex);
        }
    });

  
    document.getElementById('next').addEventListener('click', () => {
        if ((currentSlideIndex + 1) * 2 < videos.length) {
            currentSlideIndex++;
            moveToSlide(currentSlideIndex);
        }
    });
};