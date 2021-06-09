var botaoRevelar = document.getElementById('botao-revelar');
var divResultado = document.getElementById('resultado');

function revelar () {
    divResultado.innerHTML = "Esse texto foi inserido pelo JavaScript...";
}

botaoRevelar.addEventListener('click', revelar);