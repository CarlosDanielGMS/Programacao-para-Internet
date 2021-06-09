//Estrutura para a soma de dois números, caso eles sejam válidos
document.getElementById('btn-soma').addEventListener('click', function () {
    var soma1 = Number(document.getElementById('soma1').value);
    var soma2 = Number(document.getElementById('soma2').value);
    if (!isNaN(soma1) && !isNaN(soma2)) {
        var resultadoSoma = soma1 + soma2;
        document.getElementById('resultado-soma').innerHTML = "Resultado da soma:" + resultadoSoma;
    }
    else {
        document.getElementById('resultado-soma').innerHTML = "Digite dois números válidos";
    }
});