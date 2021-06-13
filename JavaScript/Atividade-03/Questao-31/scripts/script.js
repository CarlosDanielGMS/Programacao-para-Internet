var divResultado = document.getElementById('resultado');
var numero = 0;

for (var i = 1; i <= 10; i++) {
    for (var n = 1; n <= 10; n++) {
        divResultado.innerHTML += i + " x " + n + " = " + i * n + "<br>";

        if (n == 10) {
            divResultado.innerHTML += "-----------------<br>";
        }
    }
}