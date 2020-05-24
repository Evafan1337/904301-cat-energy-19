var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var formMain = document.querySelector('.form__main');
var requireEls = document.querySelectorAll('.require');

navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

formMain.addEventListener("submit", function (evt) {
    if (requireEls) {
        requireEls.forEach(function(el){
            if (
            !el.value
        ) {
            evt.preventDefault();
            el.classList.add("error");

        }

        });

    }
});

