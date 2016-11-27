$(document)
    .ready(function () {
        $('.progress-bar').viewportChecker({
            classToAdd: 'animated fadeInLeft'
        });
    })
    .ready(function () {
        $('.hide').click(function () {
            if (!$('.headbar').hasClass('fadeOutLeft')) {
                $('.headbar').addClass('animated fadeOutLeft');
                $('.mainbar ').animate({
                    width: '100%'
                }, 400);
            } else {
                $('.headbar').removeClass('fadeOutLeft').addClass('fadeInLeft');
                $('.mainbar').animate({
                    width: '70%'
                }, 400);
            }
        });
    })


function hide() {
    if ($(window).width() <= '1110') {
        $('.headbar').removeClass('animated fadeOutLeft');
        $('.mainbar').animate({
            width: '100%'
        }, 400);
    } else {
        $('.headbar').removeClass('fadeOutLeft').addClass('animated fadeInLeft');
        $('.mainbar').animate({
            width: '70%'
        }, 400);
    }
}
$(window).on('load resize', hide);