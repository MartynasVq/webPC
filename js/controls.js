 function buttonPress(x) {
    var buttonname = x.textContent.toLowerCase();
    var temp = buttonname.split("");
    temp[0] = temp[0].toUpperCase();
    var button = temp.join("");
    var y = document.getElementsByClassName("1");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = 'transparent';
	y[i].style.textShadow = '0 0 3px black';
        }
    x.style.backgroundColor = '#5D5C61';
    x.style.textShadow ='0 0 3px red';
    var z = document.getElementsByClassName("main");
    var j;
    for (j = 0; j < z.length; j++) {
	if(z[j].classList.contains("fade")) {
        	z[j].classList.remove("fade");
        	z[j].classList.remove("block");
		}
        }
        if(document.getElementById(button) == null) {
	        document.getElementById('Kontaktai').classList.add("block");
	        setTimeout(function() { document.getElementById('Kontaktai').classList.add("fade"); });
        } else {
	        document.getElementById(button).classList.add("block");
	        setTimeout(function() { document.getElementById(button).classList.add("fade"); });
        }

    }