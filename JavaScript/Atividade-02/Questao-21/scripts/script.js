var entradaValor = document.getElementById('entrada-valor');
var botaoCalcularDesconto = document.getElementById('botao-calcular-desconto');
var legendaResultado = document.getElementById('legenda-resultado');

function calcularDesconto(numero) {
    let resultadoDesconto = numero * (5/100);

    return resultadoDesconto;
}

botaoCalcularDesconto.addEventListener('click', function () {
    let valorEntrada = entradaValor.value;
    let resultadoDesconto = calcularDesconto(valorEntrada);
    
    legendaResultado.innerHTML = "O desconto para este valor é de R$ " + resultadoDesconto + ".";
});