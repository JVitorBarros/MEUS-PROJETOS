// ==================================================================
// ========== SELETORES DE ELEMENTOS DO DOM (VARIÁVEIS GLOBAIS) ==========
// ==================================================================

// --- Elementos Gerais e de Tema ---
const body = document.body;
const botaoTema = document.querySelector(".tema");
const modoEscuro = document.querySelector("#modo-escuro");
const modoClaro = document.querySelector("#modo-claro");

// --- Container das Extensões ---
const containerExtensao = document.querySelector(".extensoes");

// --- Container dos Botões de Filtro ---
const containerFiltros = document.querySelector(".lista-opcoes");

// ========== LÓGICA PARA ALTERAÇÃO DE TEMA ========== //

// Variável que armazena o tema atual da página ('claro' ou 'escuro').
let temaAtual;

// Função responsável por alternar o tema da página.
function alterarTema() {
  // Alterna as classes de tema no body.
  body.classList.toggle("tema-claro");
  body.classList.toggle("tema-escuro");

  // Alterna a classe 'inativo' nos botões de tema.
  modoEscuro.classList.toggle("inativo");
  modoClaro.classList.toggle("inativo");

  // Atualiza a variável de tema e a salva no localStorage.
  temaAtual = body.classList.contains("tema-escuro") ? "escuro" : "claro";
  localStorage.setItem("tema", temaAtual);
}

// Função para carregar o tema salvo ou definir um padrão.
function carregarTema() {
  const temaSalvo = localStorage.getItem("tema");

  // Define o tema com base no que está salvo, ou 'escuro' como padrão.
  temaAtual = temaSalvo || "escuro";

  // Remove classes existentes para garantir um estado limpo.
  body.classList.remove("tema-claro", "tema-escuro");
  modoClaro.classList.remove("inativo");
  modoEscuro.classList.remove("inativo");

  // Aplica as classes corretas com base no tema.
  if (temaAtual === "claro") {
    body.classList.add("tema-claro");
    modoClaro.classList.add("inativo");
  } else {
    body.classList.add("tema-escuro");
    modoEscuro.classList.add("inativo");
  }
}

// Eventos de Tema
document.addEventListener("DOMContentLoaded", carregarTema);
botaoTema.addEventListener("click", alterarTema);

// ========== LÓGICA DE FILTRAGEM DE EXTENSÕES ==========

function filtrarExtensoes(estado) {
  const checkboxes = document.querySelectorAll(".ckb");

  checkboxes.forEach((checkbox) => {
    // .closest() é uma forma mais segura de encontrar o elemento pai.
    const blocoExtensaoPai = checkbox.closest(".bloco-extensao");

    // Se 'estado' for undefined (botão "All"), mostra todos os blocos.
    if (estado === undefined) {
      blocoExtensaoPai.style.display = "flex";
      // Se o estado do checkbox for igual ao estado do filtro, mostra o bloco.
    } else if (checkbox.checked === estado) {
      blocoExtensaoPai.style.display = "flex";
      // Caso contrário, esconde o bloco.
    } else {
      blocoExtensaoPai.style.display = "none";
    }
  });
}

// Evento de clique para os botões de filtro (usando delegação de eventos)
containerFiltros.addEventListener("click", (evt) => {
  const botaoClicado = evt.target;

  if (botaoClicado.classList.contains("ativos")) {
    filtrarExtensoes(true); // true para ativos (checked)
  } else if (botaoClicado.classList.contains("inativos")) {
    filtrarExtensoes(false); // false para inativos (not checked)
  } else if (botaoClicado.classList.contains("todos")) {
    filtrarExtensoes(); // undefined para todos
  }
});

// --------------------------------------------------------------
// ========== LÓGICA DO BOTÃO "REMOVER" ==========
// --------------------------------------------------------------

// Adiciona um evento de clique ao container de extensões.
// Essa técnica (delegação de eventos) permite capturar cliques
// em qualquer botão "Remover" existente dentro do container.
containerExtensao.addEventListener("click", (evt) => {
  // Verifica se o elemento clicado possui a classe 'botaoRemover'.
  if (evt.target.classList.contains("botaoRemover")) {
    // Encontra o elemento pai mais próximo com a classe '.bloco-extensao',
    // que representa o bloco da extensão que será removida.
    const bloco = evt.target.closest(".bloco-extensao");

    // Exibe uma caixa de confirmação para o usuário.
    const confirmar = confirm("Deseja remover esta extensão?");

    // Se o usuário confirmar, remove o bloco da extensão da página.
    if (confirmar) {
      bloco.remove();
    }
  }
});
