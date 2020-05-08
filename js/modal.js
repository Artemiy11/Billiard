function modal() {
    let modalBtn = document.querySelector('.timer__button'),
        headerBtn = document.querySelector('.promo__button'),
        modalHeader = document.querySelector('.modal__header-text'),
        modal = document.querySelector('.modal'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.modal__close'),
        closeThanks = document.querySelector('.success__close'),
        success = document.querySelector('.success');

        closeThanks.addEventListener('click', function() {
            success.style.display = "";
            overlay.style.display = "";
            document.body.style.overflowY = "";
        });

        headerBtn.addEventListener('click', function(event) {
            event.preventDefault();
            modalHeader.textContent = "Запишись на тренировку";
            modal.style.display = "block";
            overlay.style.display = "block";
            document.body.style.overflowY = "hidden";
            modal.classList.add('fadeIn');
            modal.classList.add('animated');
        });

        modalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflowY = "hidden";
        modal.classList.add('fadeIn');
        modal.classList.add('animated');
    });

    close.addEventListener('click', function() {
        modal.style.display = "";
        overlay.style.display = "";
        document.body.style.overflowY = "";
        modalHeader.textContent = "Успей записаться на бесплатную тренировку";
    });

    modalBtn.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflowY = "hidden";
        modal.classList.add('fadeIn');
        modal.classList.add('animated');
    });

    close.addEventListener('click', function() {
        modal.style.display = "";
        overlay.style.display = "";
        document.body.style.overflowY = "";
    });
}

module.exports = modal;