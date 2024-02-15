document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    let slideIndex = 0;

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.children.length) {
            slideIndex = 0;
        }
        updateSlide();
    }

    function updateSlide() {
        slides.style.transform = `translateX(-${slideIndex * 100}vw)`; 
    }

    setInterval(nextSlide, 3000);
});