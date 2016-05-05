//jQuery Scroll//

$(window).scroll(function () {
    header();
});



function header() {

    if ($(window).scrollTop() > $('div.row > div.boxShTop').offset().top + 50) {
        $('.marg').addClass('navbar-fixed-top');
        $('.marg').addClass('toTop');
        $('.backgr').css("margin-top", "50px");

    } else {
        $('.marg').removeClass('navbar-fixed-top');
        $('.marg').removeClass('toTop');
        $('.backgr').css("margin-top", "0");
    }
}


