window.onload = () => {
    // Adiciona eventos aos botões
    document.getElementById("btn-juros-simples").addEventListener("click", calcularJurosSimples);
    document.getElementById("btn-juros-compostos").addEventListener("click", calcularJurosCompostos);

    // Função de Juros Simples
    const calcularJurosSimples = () => {
        let P = parseFloat(document.getElementById("principal-simples").value);
        let i = parseFloat(document.getElementById("taxa-simples").value) / 100;
        let anos = parseInt(document.getElementById("anos-simples").value) || 0;
        let meses = parseInt(document.getElementById("meses-simples").value) || 0;

        if (isNaN(P) || isNaN(i) || (anos === 0 && meses === 0)) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        let t = anos + meses / 12;
        let J = P * i * t;
        let resultado = `Os juros simples são R$ ${J.toFixed(2)}.`;

        let elementoResultado = document.getElementById("resultado-simples");
        elementoResultado.innerText = resultado;
        elementoResultado.classList.add("mostrar");
    }

    // Função de Juros Compostos
    const calcularJurosCompostos = () => {
        let P = parseFloat(document.getElementById("principal-compostos").value);
        let i = parseFloat(document.getElementById("taxa-compostos").value) / 100;
        let anos = parseInt(document.getElementById("anos-compostos").value) || 0;
        let meses = parseInt(document.getElementById("meses-compostos").value) || 0;

        if (isNaN(P) || isNaN(i) || (anos === 0 && meses === 0)) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        let t = anos + meses / 12;
        let F = P * Math.pow((1 + i), t);
        let resultado = `O montante final é R$ ${F.toFixed(2)}.`;

        let elementoResultado = document.getElementById("resultado-compostos");
        elementoResultado.innerText = resultado;
        elementoResultado.classList.add("mostrar");
    }
}
