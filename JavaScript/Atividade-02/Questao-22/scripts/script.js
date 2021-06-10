var entradaValor = document.getElementById('entrada-valor');
var botaoCalcularMaioridade = document.getElementById('botao-calcular-maioridade');
var legendaResultado = document.getElementById('legenda-resultado');

function calcularDesconto(anoNascimento) {
    let idade = 2021 - anoNascimento;
    let resultadoMaioridade;

    if (idade >= 18) {
        resultadoMaioridade = 'maior';
    } else {
        resultadoMaioridade = 'menor';
    }

    return resultadoMaioridade;
}

botaoCalcularMaioridade.addEventListener('click', function () {
    let valorEntrada = entradaValor.value;
    let resultadoMaioridade = calcularDesconto(valorEntrada);

    legendaResultado.innerHTML = "Você é " + resultadoMaioridade + " de idade.";
});