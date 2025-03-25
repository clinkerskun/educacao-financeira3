function calcularJurosSimples() {
    let capital = parseFloat(document.getElementById('capital').value);
    let taxa = parseFloat(document.getElementById('taxa').value) / 100;
    let tempo = parseInt(document.getElementById('tempo').value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    let montante = capital * (1 + taxa * tempo);
    exibirResultado(montante);
}

function calcularJurosCompostos() {
    let capital = parseFloat(document.getElementById('capital').value);
    let taxa = parseFloat(document.getElementById('taxa').value) / 100;
    let tempo = parseInt(document.getElementById('tempo').value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
        alert('Preencha todos os campos corretamente.');
        return;
    }

    let montante = capital * Math.pow(1 + taxa, tempo);
    exibirResultado(montante);
}

function exibirResultado(montante) {
    document.getElementById('resultado').innerText = 'Montante: R$ ' + montante.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
