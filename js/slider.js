function slider() {
    let slides = document.querySelectorAll('.slider__img'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.dots'),
        dots = document.querySelectorAll('.dot'),
        text = document.querySelectorAll('.slider__img_text'),
        sliderIndex = 1;

    
    showSlides(sliderIndex);

    function showSlides() {
        if (sliderIndex < 1) {
            sliderIndex = slides.length;
        }
        if (sliderIndex > slides.length) {
            sliderIndex = 1;
        }
        slides.forEach((item) => item.style.display = 'none');
        text.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot_active'));

        slides[sliderIndex - 1].style.display = 'block';
        text[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot_active');
    }

    function changeImg(number) {
        showSlides(sliderIndex+=number);
    }

    prev.addEventListener('click', function() {
        changeImg(-1);
    });
    
    next.addEventListener('click', function() {
        changeImg(1);
    }); 

    function currentSlide(number) {
        showSlides(sliderIndex = number);
    }

    dotsWrap.addEventListener('click', function(event) {
        for(let i = 0; i < dots.length; i++) {
            if (event.target == dots[i] && event.target.classList.contains('dot')) {
                currentSlide(i + 1)
            }
        }
    });
}

module.exports = slider;