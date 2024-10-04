
function fadeContent() {
    $(".slider_contents div:hidden:first-child").fadeIn(2500, function () {
        $(this).fadeOut(2000, function () {
            $(this).appendTo($(this).parent());
            fadeContent();
        });
    });
}