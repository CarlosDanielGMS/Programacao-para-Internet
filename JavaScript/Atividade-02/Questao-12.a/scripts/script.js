function mudarCorBackground(cor) {
    if (cor == 'verde') {
        document.body.style.backgroundColor = 'green';
    }
    else if (cor == 'vermelho') {
        document.body.style.backgroundColor = 'red';
    }
}

var botaoVerde = document.getElementById('botao-verde');
botaoVerde.addEventListener('click', function () {
    mudarCorBackground('verde');
});

var botaoVermelho = document.getElementById("botao-vermelho");
botaoVermelho.addEventListener('click', function () {
    mudarCorBackground('vermelho');
});