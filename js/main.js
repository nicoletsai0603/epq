//回到頂端
function Back_top() {

    var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });
    $back_to_top.on('click',
        function(event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                },
                scroll_top_duration);
        });
}

//手機選單
function mobile_menu() {
    var winWidth = $(window).width();

    //漢堡線
    $("#mobile_menu_labIcon").click(function() {
        $(".nav-bar").toggleClass("on");
        $(".portfolio-filter.isotope-filter.pull-center").toggleClass("on");
        $("#greybg").toggle();
        $('.hamburger').toggleClass('is-active');

    })

    $("#greybg").click(function() {

        $(this).toggle();
        $(".portfolio-filter.isotope-filter.pull-center").removeClass("on");
        $('.hamburger').removeClass('is-active');
    })

}




//手機次選單
function MobileSubmenu() {
    var winWidth = $(window).width();
    if (winWidth < 941) {

        $("#greybg").css("display", "none");
        $(".portfolio-filter.isotope-filter.pull-center,.hamburger").removeClass("on");
        $('.hamburger').removeClass('is-active');

    } else {

        $("#greybg").css("display", "none");

    }
}


$(function() {
    Back_top(); //回到頂端
    mobile_menu(); //手機選單
    MobileSubmenu(); //手機次選單


});