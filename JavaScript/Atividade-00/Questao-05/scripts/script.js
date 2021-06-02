document.getElementById('botao-exibir-quantidade-letras').addEventListener('click', function() {
    const nomeCompleto = document.getElementById('entrada-nome-completo').value;
    const quantidadeLetras = nomeCompleto.length;
    alert(quantidadeLetras);
})