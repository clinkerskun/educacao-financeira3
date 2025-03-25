// Função para calcular os juros simples
function calcularJurosSimples() {
    // Obtendo os valores de entrada
    let principal = parseFloat(document.getElementById("principal-simples").value);
    let taxa = parseFloat(document.getElementById("taxa-simples").value) / 100;  // Convertendo para decimal
    let anos = parseInt(document.getElementById("anos-simples").value);
    let meses = parseInt(document.getElementById("meses-simples").value);

    // Verificação de campos vazios ou inválidos
    if (isNaN(principal) || isNaN(taxa) || isNaN(anos) || isNaN(meses) || principal <= 0 || taxa <= 0) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    // Convertendo o tempo total para meses
    let totalMeses = (anos * 12) + meses;

    // Cálculo de Juros Simples
    let juros = principal * taxa * totalMeses;
    let montante = principal + juros;

    // Exibindo o resultado
    let resultado = `Juros Simples: R$ ${juros.toFixed(2)}<br>Montante Final: R$ ${montante.toFixed(2)}`;
    document.getElementById("resultado-simples").innerHTML = resultado;
}

// Função para calcular os juros compostos
function calcularJurosCompostos() {
    // Obtendo os valores de entrada
    let principal = parseFloat(document.getElementById("principal-compostos").value);
    let taxa = parseFloat(document.getElementById("taxa-compostos").value) / 100;  // Convertendo para decimal
    let anos = parseInt(document.getElementById("anos-compostos").value);
    let meses = parseInt(document.getElementById("meses-compostos").value);

    // Verificação de campos vazios ou inválidos
    if (isNaN(principal) || isNaN(taxa) || isNaN(anos) || isNaN(meses) || principal <= 0 || taxa <= 0) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    // Convertendo o tempo total para meses
    let totalMeses = (anos * 12) + meses;

    // Cálculo de Juros Compostos
    let montante = principal * Math.pow((1 + taxa), totalMeses);
    let juros = montante - principal;

    // Exibindo o resultado
    let resultado = `Juros Compostos: R$ ${juros.toFixed(2)}<br>Montante Final: R$ ${montante.toFixed(2)}`;
    document.getElementById("resultado-compostos").innerHTML = resultado;
}
