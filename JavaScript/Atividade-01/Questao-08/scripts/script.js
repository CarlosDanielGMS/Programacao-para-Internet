document.getElementById('entrada-cpf').addEventListener('keyup', function () {
    var cpf = document.getElementById('entrada-cpf').value;
    const tamanhoCpf = cpf.length;
    if (tamanhoCpf >= 3 && tamanhoCpf < 6) {
        cpf = cpf.replace(/(\d{3})/g, "\$1.");
    }
    else if (tamanhoCpf >= 6 && tamanhoCpf < 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})/g, "\$1.\$2.");
    }
    else if (tamanhoCpf >= 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/g, "\$1.\$2.\$3\-");
    }
    document.getElementById('cpf-digitado').innerHTML = cpf;
});