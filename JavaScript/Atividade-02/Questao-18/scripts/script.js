var legendaResto = document.getElementById('legenda-resto');

function calcularResto(primeiroNumero, segundoNumero) {
    let resultadoResto = primeiroNumero % segundoNumero;
    return resultadoResto;
}

window.onload = function(){
    let resultadoResto = calcularResto(5, 2);
    legendaResto.innerHTML = "Resto da divisão de 5 por 2: " + resultadoResto + ".";
}