    function displayTable(x) {
    var temp = document.getElementsByClassName("tables");
    var k;
	for(k = 0; k < temp.length; k++) {
		temp[k].style.backgroundColor = '#4CAF50';
		temp[k].style.textShadow = '0 0 4px black';
	}
	x.style.backgroundColor = '#3e8e41';
	x.style.textShadow = '0 0 5px red';
    var id = x.textContent;
    var elements = document.getElementsByClassName("service");
    var i;
    for (i = 0; i < elements.length; i++) {
        if(elements[i].classList.contains("showDisplay")) {
            elements[i].classList.remove("showOpacity");
            elements[i].classList.remove("showDisplay");
        }
    }
    document.getElementById(id).classList.add("showDisplay");
    setTimeout(function() { document.getElementById(id).classList.add("showOpacity"); });
    }