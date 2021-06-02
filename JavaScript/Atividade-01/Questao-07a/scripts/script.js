document.getElementById('botao-saudacao').addEventListener('click', function() {
    const nome = document.getElementById('entrada-nome').value;
    const sobrenome = document.getElementById('entrada-sobrenome').value;
    alert('Olá, ' + nome + ' ' + sobrenome + '!');
});