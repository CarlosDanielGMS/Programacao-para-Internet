/*Estrutura básica para somar dois números se eles forem válidos
Negação da função isNaN para verificar se os valores são válidos*/
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