
const TransferênciasBotao = document.getElementById("Transferências");
const ElencoBotao = document.getElementById("Elenco");
const TítulosBotao = document.getElementById("Títulos");

// Botão Transferências
TransferênciasBotao.addEventListener("click", function () {
    const novoNome = prompt("Digite o nome do jogador:");

    if (novoNome !== null && novoNome.trim() !== "") {
        document.getElementById("transferencias-info").textContent =
            "Jogador: " + novoNome.trim();
    }
});

// Botão Elenco
ElencoBotao.addEventListener("click", function () {
    const cidade = prompt("Digite a cidade:");

    if (cidade !== null && cidade.trim() !== "") {
        alert("Cidade informada: " + cidade.trim());
    }
});

// Botão Títulos
TítulosBotao.addEventListener("click", function () {
    const resposta = confirm("Deseja sair do perfil?");

    if (resposta) {
        alert("Você saiu do perfil!");
        window.location.href = "about:blank";
    }
});

