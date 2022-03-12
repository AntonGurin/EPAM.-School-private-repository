//Carousel Pets
const slides = document.querySelectorAll('.slide');
let isEnabled = true;
let currentSlide = 0;

function changeCurrentSlide(n){
    currentSlide = (n + slides.length) % slides.lingth;
}

function hideBlock(direction) {
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}

function showBlock(direction) {
    isEnabled = false;
    slides[currentSlide].classList.add('next', direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.remove('active');
        isEnabled = true;
    });
}

function previousSlide(n) {
    hideBlock('to-right');
    changeCurrentSlide(n - 1);
    showBlock('from-left');
}
function nextSlide(n) {
    hideBlock('to-left');
    changeCurrentSlide( n + 1);
    showBlock('from-right');

}

document.querySelector('.slider-button-prev').addEventListener('click', function() {
    if (isEnabled) {
        previousSlide(currentSlide);
    }
});

document.querySelector('.slider-button-next').addEventListener('click', function() {
    if (isEnabled) {
        nextSlide(currentSlide);
    }
});
