function addLED() {
    for (var i = 1; i <= 16; i++) {
        for (var j = 1; j <= 25; j++) {
            $('.led-table').append("<div class='led-cube' id='cube-" + String(i) + String(j) + "'>");
        }
    }
    $(".led-cube").click(function() {
        if ($(this).hasClass("white-cube"))
            $(this).removeClass("white-cube");
        else
            $(this).addClass("white-cube");
    });
}

$(document).ready(function(){
    addLED();
});