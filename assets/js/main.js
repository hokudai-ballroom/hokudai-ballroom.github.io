'use strict';

{
    // nav
    const header__btn = document.querySelector('.header__button');
    const nav = document.querySelector('.nav')
    const closeTargets = document.querySelectorAll('.nav__button, .nav__item a')

    header__btn.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    closeTargets.forEach(function (target) {
        target.addEventListener('click', function () {
            nav.classList.remove('active')
        });
    });

    // footprints
    window.addEventListener('scroll', function () {
        const footprintsList = document.querySelectorAll('.footprints')
        footprintsList.forEach(function (footprints) {
            const rect = footprints.getBoundingClientRect();
            if (rect.top < window.innerHeight - 150) {
                footprints.classList.add('is-visible');
            }
        });
    });

    // tab
    const cardContainers = document.querySelectorAll('.card')
    for (let c = 0; c < cardContainers.length; c++) {
        const tabItems = cardContainers[c].querySelectorAll('.tabMenu__item')
        const eventItems = cardContainers[c].querySelectorAll('.event__item')

        for (let i = 0; i < tabItems.length; i++) {
            tabItems[i].addEventListener('click', function () {
                for (let j = 0; j < tabItems.length; j++) {
                    eventItems[j].classList.remove('is-active');
                    tabItems[j].classList.remove('is-active');
                }
                eventItems[i].classList.add('is-active');
                tabItems[i].classList.add('is-active');
            });
        }
    }

    // faq accordion
    const faqItems = document.querySelectorAll('.faq__item')
    for (let i = 0; i < faqItems.length; i++) {
        const faqBtn = faqItems[i].querySelector('.faq__btn')
        const faqAnswer = faqItems[i].querySelector('.faq__a')
        faqBtn.addEventListener('click', function () {
            faqAnswer.classList.toggle('is-open');
            faqBtn.classList.toggle('is-open')
        });
    }

    // loading
    window.addEventListener('load', function () {
        const loading = document.querySelector('.loading')
        setTimeout(function () {
            loading.classList.add('is-loaded');
        }, 900);
    });

}

// jquery slide
// pic

$(function () {
    function checkSlider() {
        const windowWidth = $(window).width();
        const $slider = $('.slides');

        if (windowWidth <= 1024) {
            if (!$slider.hasClass('slick-initialized')) {
                $slider.slick({
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 5000,
                    cssEase: "linear",
                    waitForAnimate: false,
                    slidesToShow: 2.5,
                    swipe: false,
                    arrows: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    responsive: [
                        {
                            breakpoint: 426,
                            settings: {
                                slidesToShow: 1.5,
                            }
                        }
                    ]
                });
            }
        } else {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        }
    };
    checkSlider();
    $(window).on('resize', checkSlider);
});

// text

$(function () {
    function checkSlider() {
        const windowWidth = $(window).width();
        const $slider = $('.track');

        if (windowWidth <= 1024) {
            if (!$slider.hasClass('slick-initialized')) {
                $slider.slick({
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 5000,
                    cssEase: "linear",
                    waitForAnimate: false,
                    slidesToShow: 4,
                    swipe: false,
                    arrows: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    rtl: true,
                    variableWidth: true
                });
            }
        } else {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }
        }
    };
    checkSlider();
    $(window).on('resize', checkSlider);
});
