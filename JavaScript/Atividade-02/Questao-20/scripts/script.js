var primeiraEntrada = document.getElementById('entrada-primeiro-valor');
var segundaEntrada = document.getElementById('entrada-segundo-valor');
var botarMultiplicar = document.getElementById('botao-multiplicar');
var legendaResultado = document.getElementById('legenda-resultado');

function multiplicar(primeiroNumero, segundoNumero) {
    primeiroNumero = Number(primeiroNumero);
    segundoNumero = Number(segundoNumero);
    let resultadoMultiplicacao = primeiroNumero * segundoNumero;

    return resultadoMultiplicacao;
}

botarMultiplicar.addEventListener('click', function () {
    let primeiroValor = primeiraEntrada.value;
    let segundoValor = segundaEntrada.value;
    let resultadoMultiplicacao = multiplicar(primeiroValor, segundoValor);

    if (!isNaN(resultadoMultiplicacao)) {
        legendaResultado.innerHTML = "Resultado da multiplicação: " + resultadoMultiplicacao + ".";
    } else {
        legendaResultado.innerHTML = "Digite dois números válidos."
    }
});