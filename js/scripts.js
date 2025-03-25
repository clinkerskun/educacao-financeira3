function calcularJurosCompostos() {
    var capital = document.getElementById('capital').value.trim();
    var taxa = document.getElementById('taxa').value.trim();
    var tempo = document.getElementById('tempo').value.trim();

    if (!capital || !taxa || !tempo) {
        alert('Preencha todos os campos!');
        return;
    }

    capital = parseFloat(capital);
    taxa = parseFloat(taxa) / 100;
    tempo = parseInt(tempo);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        alert('Por favor, insira valores válidos!');
        return;
    }

    var montante = capital * Math.pow((1 + taxa), tempo);

    document.getElementById('resultado').innerText = 'Montante: R$ ' + montante.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calcularJurosSimples() {
    var capital = document.getElementById('capital').value.trim();
    var taxa = document.getElementById('taxa').value.trim();
    var tempo = document.getElementById('tempo').value.trim();

    if (!capital || !taxa || !tempo) {
        alert('Preencha todos os campos!');
        return;
    }

    capital = parseFloat(capital);
    taxa = parseFloat(taxa) / 100;
    tempo = parseInt(tempo);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        alert('Por favor, insira valores válidos!');
        return;
    }

    var montante = capital * (1 + (taxa * tempo));

    document.getElementById('resultado').innerText = 'Montante: R$ ' + montante.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
