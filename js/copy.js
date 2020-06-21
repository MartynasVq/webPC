function copyMail() {
var copyText = document.getElementById("email");
    if(navigator.clipboard) {
    navigator.clipboard.writeText(copyText.textContent).catch(err => {
    alert("Nepavyko nukopijuoti")});
    } else {
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.value = copyText.textContent;
    input.focus();
    input.select();
    input.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    alert("Nukopijuota: " + input.value);
    }
}