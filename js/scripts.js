function calcularJurosSimples() {
    let P = parseFloat(document.getElementById("principal-simples").value);
    let i = parseFloat(document.getElementById("taxa-simples").value) / 100;
    let t = parseFloat(document.getElementById("tempo-simples").value);

    if (isNaN(P) || isNaN(i) || isNaN(t)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let J = P * i * t;
    let resultado = `Os juros simples são R$ ${J.toFixed(2)}.`;
    document.getElementById("resultado-simples").innerText = resultado;
}

function calcularJurosCompostos() {
    let P = parseFloat(document.getElementById("principal-compostos").value);
    let i = parseFloat(document.getElementById("taxa-compostos").value) / 100;
    let t = parseFloat(document.getElementById("tempo-compostos").value);

    if (isNaN(P) || isNaN(i) || isNaN(t)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let F = P * Math.pow((1 + i), t);
    let resultado = `O montante final é R$ ${F.toFixed(2)}.`;
    document.getElementById("resultado-compostos").innerText = resultado;
}
