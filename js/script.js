function addLED() {
    for (var i = 1; i <= 16; i++) {
        for (var j = 1; j <= 25; j++) {
            $('.led-table').append("<div class='led-cube' id='cube-" + String(i) + String(j) + "'>");
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.resoponseText == 0)
                        $("#cube-"+String(i)+String(j)).addClass("white-cube");
                }
            }
            xmlhttp.open("GET", "/php/getled.php?r="+String(i)+"&c="+String(j), true);
            xmlhttp.send();
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