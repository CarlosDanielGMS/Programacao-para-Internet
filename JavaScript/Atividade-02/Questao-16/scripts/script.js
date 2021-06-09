var primeiraEntrada = document.getElementById('entrada-primeiro-valor');
var segundaEntrada = document.getElementById('entrada-segundo-valor');
var botaoSoma = document.getElementById('botao-somar');
var legendaResultado = document.getElementById('legenda-resultado');

function somar(primeiroNumero, segundoNumero) {
    let resultadoSoma = primeiroNumero + segundoNumero;
    return resultadoSoma;
}

botaoSoma.addEventListener('click', function(){
    let primeiroNumero = Number(primeiraEntrada.value);
    let segundoNumero = Number(segundaEntrada.value);
    let resultado = somar(primeiroNumero, segundoNumero);

    if (!isNaN(resultado)){
        legendaResultado.innerHTML = "Resultado da soma: " + resultado + ".";
    } else {
        legendaResultado.innerHTML = "Digite dois números válidos."
    }
});