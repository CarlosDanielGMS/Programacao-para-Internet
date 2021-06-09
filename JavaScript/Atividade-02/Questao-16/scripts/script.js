var botaoSoma = document.getElementById('btn-soma');

function somar() {
    var entradaNum1 = Number(document.getElementById('soma1').value);
    var entradaNum2 = Number(document.getElementById('soma2').value);
    
    if (!isNaN(entradaNum1) && !isNaN(entradaNum2)) {
        var resultadoSoma = entradaNum1 + entradaNum2;
        document.getElementById('resultado-soma').innerHTML = "Resultado da soma: " + resultadoSoma + ".";
    }
    else {
        document.getElementById('resultado-soma').innerHTML = "Digite dois números válidos.";
    }
}

botaoSoma.addEventListener('click', somar);