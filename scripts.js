 // Função de Juros Simples
console.log("Hello, test1");
        function calcularJurosSimples() {
            let P = parseFloat(document.getElementById("principal-simples").value);
            let i = parseFloat(document.getElementById("taxa-simples").value) / 100;
            let anos = parseInt(document.getElementById("anos-simples").value) || 0;
            let meses = parseInt(document.getElementById("meses-simples").value) || 0;

            // Verificação de campos vazios
            if (isNaN(P) || isNaN(i) || (anos === 0 && meses === 0)) {
                alert("Preencha todos os campos corretamente.");
                return;
            }

            // Convertendo anos para meses e somando com os meses adicionais
            let totalMeses = anos * 12 + meses;  // total de meses

            // Cálculo de Juros Simples
            let J = P * i * totalMeses;  // Juros simples é simplesmente a taxa multiplicada pelo tempo em meses
            let M = P + J;  // Montante final (capital + juros)

            // Exibe o resultado
            let resultado = `Os juros simples são R$ ${J.toFixed(2)}. O montante final é R$ ${M.toFixed(2)}.`;
            let elementoResultado = document.getElementById("resultado-simples");
            elementoResultado.innerText = resultado;
            elementoResultado.classList.add("mostrar");
        }

        // Função de Juros Compostos
        function calcularJurosCompostos() {
            let P = parseFloat(document.getElementById("principal-compostos").value);
            let i = parseFloat(document.getElementById("taxa-compostos").value) / 100;
            let anos = parseInt(document.getElementById("anos-compostos").value) || 0;
            let meses = parseInt(document.getElementById("meses-compostos").value) || 0;

            // Verificação de campos vazios
            if (isNaN(P) || isNaN(i) || (anos === 0 && meses === 0)) {
                alert("Preencha todos os campos corretamente.");
                return;
            }

            // Convertendo anos para meses e somando com os meses adicionais
            let totalMeses = anos * 12 + meses;  // total de meses

            // Cálculo de Juros Compostos
            let F = P * Math.pow((1 + i), totalMeses);  // O montante final é calculado mês a mês
            let J = F - P;  // Juros compostos (montante - capital inicial)

            // Exibe o resultado
            let resultado = `Os juros compostos são R$ ${J.toFixed(2)}. O montante final é R$ ${F.toFixed(2)}.`;
            let elementoResultado = document.getElementById("resultado-compostos");
            elementoResultado.innerText = resultado;
            elementoResultado.classList.add("mostrar");
        }
    </script>
</body>
</html>
