$(function () {
    var navigation1 = $('.navigation');
    var navigation2 = $('.navigation2');

    $(window).scroll(function () {
        // First condition
        if ($(window).scrollTop() <= 230) {
            navigation1.removeClass('d-none');
        } else {
            navigation1.addClass('d-none');
        }

        // Second condition
        if ($(window).scrollTop() <= 120) {
            navigation2.removeClass('nav-top-negative2');
        } else {
            navigation2.addClass('nav-top-negative2');
        }
    });

    // Set transition for both navigations
    navigation1.css('transition', 'all 0.5s fade');
    navigation2.css('transition', 'all 0.7s ease-in-out');
});