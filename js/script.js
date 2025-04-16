$(document).ready(function () {
    $('.bn.left').click(function () {
        $('.nav_bg').slideToggle()
    });
})
$(document).ready(function () {
    //모바일버튼을 클릭하면 nav영역이 나타남.
    $('.price').click(function () {
        $('.tbl_reserve').slideToggle();
    });
});


/* swiper js */
//main_visual
var swiper = new Swiper(".main_visual_img", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//sub img
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".sub_img", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});