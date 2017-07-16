function addLED() {
    for (var i = 1; i <= 16; i++) {
        for (var j = 1; j <= 25; j++) {
            $('.led-table').append("<div class='led-cube white-cube' id='cube-" + String(i) + "-" + String(j) + "'>");
        }
    }

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var text = this.responseText.split(' ');
			for (var i = 0; i < text.length / 3; i++)
				if (String(text[i * 3 + 2]) == "1")
					$("#cube-"+String(text[i * 3])+"-"+String(text[i * 3 + 1])).removeClass("white-cube");
		}
	}
	xmlhttp.open("GET", "/php/getled.php?action=build", true);
	xmlhttp.send();

    $(".led-cube").click(function() {
        if ($(this).hasClass("white-cube")) {
            $(this).removeClass("white-cube");
			var clickLED = new XMLHttpRequest();
			clickLED.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				}
			}
			var id = $(this).attr('id').split('-');
			clickLED.open("GET", "/php/getled.php?action=modify&r="+id[1]+"&c="+id[2]+"&t=1", true);
			clickLED.send();
		}
        else {
            $(this).addClass("white-cube");
			var clickLED = new XMLHttpRequest();
			clickLED.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				}
			}
			var id = $(this).attr('id').split('-');
			clickLED.open("GET", "/php/getled.php?action=modify&r="+id[1]+"&c="+id[2]+"&t=0", true);
			clickLED.send();
		}
    });
}

$(document).ready(function(){
    addLED();
});
