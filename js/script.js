
$('.carousel').carousel({
    interval: 2000
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 870 && $(this).scrollTop() < 1350) {
        $('#fade').fadeIn();
    } else {
        $('#fade').fadeOut();
    }
});