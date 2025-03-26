// Função de Juros Simples... oi oi oi
console.log("Hello, test1");
function calcularJurosSimples() {
    let P = parseFloat(document.getElementById("principal-simples").value);
    let i = parseFloat(document.getElementById("taxa-simples").value) / 100;
    let meses = parseInt(document.getElementById("anos-simples").value) || 0; // Alterado o ID para "anos-simples"

    // Verificação de campos vazios
    if (isNaN(P) || isNaN(i) || isNaN(meses) || meses < 0) {
        alert("Preencha todos os campos corretamente com valores válidos.");
        return;
    }

    // Cálculo de Juros Simples
    let J = P * i * 12 // Considera que a taxa é ao mês, então divide por 12 para ter a taxa anual
    let resultado = `Os juros simples são R$ ${J.toFixed(2)}.`;

    // Exibe o resultado
    let elementoResultado = document.getElementById("resultado-simples");
    elementoResultado.innerText = resultado;
    elementoResultado.classList.add("mostrar");
}

// Função de Juros Compostos
function calcularJurosCompostos() {
    let P = parseFloat(document.getElementById("principal-compostos").value);
    let i = parseFloat(document.getElementById("taxa-compostos").value) / 100;
    let meses = parseInt(document.getElementById("anos-compostos").value) || 0; // Alterado o ID para "anos-compostos"

    // Verificação de campos vazios
    if (isNaN(P) || isNaN(i) || isNaN(meses) || meses < 0) {
        alert("Preencha todos os campos corretamente com valores válidos.");
        return;
    }

    // Cálculo de Juros Compostos
    let F = P * Math.pow((1 + i) // Considera que a taxa é ao mês, então divide por 12 para ter a taxa anual
    let resultado = `O montante final é R$ ${F.toFixed(2)}.`;

    // Exibe o resultado
    let elementoResultado = document.getElementById("resultado-compostos");
    elementoResultado.innerText = resultado;
    elementoResultado.classList.add("mostrar");
}
