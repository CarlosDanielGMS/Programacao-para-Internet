document.getElementById('entrada-cpf').addEventListener('keyup', function () {
    var cpf = document.getElementById('entrada-cpf').value;
    cpf = cpf.replace(/\./g, "").replace(/\-/g, "");
    document.getElementById('cpf-digitado').innerHTML = cpf;
});