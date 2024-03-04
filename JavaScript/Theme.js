if (JSON.parse(localStorage.getItem("theme")) == "dark") {
    $("body").addClass("dark-mode");
    $(".themebtn").addClass("fa-moon");
    $(".themebtn").removeClass("fa-sun");
}
else {
    $("body").removeAttr("class");
    $(".themebtn").addClass("fa-sun");
    $(".themebtn").removeClass("fa-moon");
}
$(".themebtn").click(function () {
    var theme = "";
    if ($(this).hasClass("fa-sun")) {
        $(this).addClass("fa-moon");
        $(this).removeClass("fa-sun");
        $("body").addClass("dark-mode");
        theme = "dark";
        localStorage.setItem('theme', JSON.stringify(theme));
    }
    else {
        $(this).addClass("fa-sun");
        $(this).removeClass("fa-moon");
        $("body").removeAttr("class");
        theme = "light";
        localStorage.setItem('theme', JSON.stringify(theme));
    }
});

$("#menubtn").click(function () {
    var aside = "";
    if ($("aside").hasClass("small-menu")) {
        aside = "wide"
        localStorage.setItem('aside', JSON.stringify(aside));
    }
    else {
        aside = "small"
        localStorage.setItem('aside', JSON.stringify(aside));
    }
});

if (screen.width > 600){
    if(JSON.parse(localStorage.getItem("aside")) == "small") {
        var width = $("main").width();
        //width += 170;
        $("main").width(width - 80);
        $("main").css("margin-left", "80px");
        $("aside ul").width("50px");
        $(".half-width svg").width($(".half-width").width());
        $(".piechart svg").width($(".half-width").width());
        $("aside").addClass("small-menu");
    }
}
else {
    if (JSON.parse(localStorage.getItem("aside")) == "small") {
        $("aside").addClass("small-menu");
        $("aside").height($(document).height());
    }
}
