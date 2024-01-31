var alturaEmMetros = document.getElementById("altura");
var output = document.getElementById("metros");
    output.innerHTML = alturaEmMetros.value;

     alturaEmMetros.oninput = function() {
     output.innerHTML = this.value;
 }