var divResultado = document.getElementById('resultado');
var repeticoes = [];

for (var i = 1; i <= 5; i++) {
    repeticoes.push("Repetição");
}

function imprimir(item) {
    divResultado.innerHTML += item + "<br>";
}

repeticoes.forEach(imprimir);