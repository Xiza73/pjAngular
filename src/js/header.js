// Page loading animation
$(window).on('load', function () {
    if ($('.cover').length) {
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function () {
        setTimeout(function () {
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $('.banner-home').height();
    var header = $('header').height();
    if (scroll >= 200 - header) {
        $("header").addClass("background-header");
    } else {
        $("header").removeClass("background-header");
    }
});