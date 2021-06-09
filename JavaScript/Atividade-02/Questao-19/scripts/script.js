var entradaValor = document.getElementById('entrada-valor');
var botaoVerificarParidade = document.getElementById('botao-verificar-paridade');
var legendaResultado = document.getElementById('legenda-resultado');

function paridade(numero) {
    let resultadoParidade;

    if (numero % 2 == 0) {
        resultadoParidade = 'par';
    } else {
        resultadoParidade = 'ímpar';
    }

    return resultadoParidade;
}

botaoVerificarParidade.addEventListener('click', function () {
    let valorEntrada = entradaValor.value;
    let resultado = paridade(valorEntrada);
    
    legendaResultado.innerHTML = "O número digitado é " + resultado + ".";
});