$("#menubtn").click(function () {
    $("nav").toggleClass("mobile-nav");
    if ($("nav").hasClass("mobile-nav")) {
        $("html, body").css("overflow", "hidden");
    }
    else {
        $("html, body").css("overflow", "auto");
    }
});

var header = $("body>header");
$(document).scroll(function () {
    if ($(document).scrollTop() > 100) {
        if($(window).width > 600){
            header.addClass("shrink");
        }
    } 
    else {
        if($(window).width > 600){
            header.removeClass("shrink");
        }
    }
});

