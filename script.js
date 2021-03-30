// window.addEventListener("scroll", function() {
//     var header = document.querySelector(".navbar");
//     header.classList.toggle("sticky", window.scrollY > 0)
// })


$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

/*---For Login and Sign-up----------------------------*/
$(document).on('click', '.user,.already-account', function() {
    $('.form').addClass('login-active').removeClass('sign-up-active')
});

$(document).on('click', '.sign-up-btn', function() {
    $('.form').addClass('sign-up-active').removeClass('login-active')
});

$(document).on('click', '.form-cancel', function() {
    $('.form').removeClass('login-active').removeClass('sign-up-active')
});


let menu = document.getElementById("ulitem");
menu.style.maxHeight = "0px";

function menubtn() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "220px"
    } else {
        menu.style.maxHeight = "0px"
    }
}