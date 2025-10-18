

// ========== LOGICA PARA ALTERAÇÃO DE TEMA ========== //

// Referência ao corpo (body) do documento HTML.
const body = document.body;
// Referência ao botão de alternância de tema.
const botaoTema = document.querySelector('.tema');
// Referência ao botão tema escuro
const modoEscuro = document.querySelector('#modo-escuro');
// Referência ao botão tema escuro
const modoClaro = document.querySelector('#modo-claro');

// Variável que armazena o tema atual da página ('claro' ou 'escuro').
let temaAtual = 'escuro';

// Função responsável por alternar o tema da página.
function alterarTema(){

    // Verifica se o tema atual é o modo escuro.
    if(temaAtual === 'escuro'){

        // Substitui a classe de tema escuro pela de tema claro no corpo da página.
        body.classList.replace('tema-escuro', 'tema-claro');

        // Remove a classe 'inativo' do ícone/botão de modo escuro.
        modoEscuro.classList.remove('inativo');

        // Adiciona a classe 'ativo' ao ícone/botão de modo claro.
        modoClaro.classList.add('inativo');

         // Atualiza o valor da variável indicando que o tema atual é o claro.
        temaAtual = 'claro';
    }else{
         // Substitui a classe de tema claro pela de tema escuro no corpo da página.
        body.classList.replace('tema-claro','tema-escuro');

        // Remove a classe 'inativo' do ícone/botão de modo claro.
        modoClaro.classList.remove('inativo');

        // Adiciona a classe 'inativo' ao ícone/botão de modo escuro.
        modoEscuro.classList.add('inativo');

        // Atualiza o valor da variável indicando que o tema atual é o escuro.
        temaAtual = 'escuro';
    }
    // Salva o tema atual no armazenamento local do navegador (localStorage)
    localStorage.setItem('tema', temaAtual);
}

// Evento que é executado quando todo o conteúdo da página é carregado.
document.addEventListener('DOMContentLoaded', () =>{

      // Recupera o tema salvo anteriormente no localStorage (se existir).
    const temaSalvo = localStorage.getItem('tema');

    // Verifica se o tema salvo é o escuro.
    if (temaSalvo === 'escuro') {

        // Aplica a classe de tema escuro ao corpo da página.
        body.classList.add('tema-escuro');

        // Ativa visualmente o ícone/botão de modo escuro.
        modoEscuro.classList.add('inativo');

        // Remove a ativação do ícone/botão de modo claro.
        modoClaro.classList.remove('inativo');

        // Define a variável de controle como 'escuro'.
        temaAtual = 'escuro';

    } else {
        // Caso contrário, aplica o tema claro por padrão.
        body.classList.add('tema-claro');

        // Ativa visualmente o ícone/botão de modo claro.
        modoClaro.classList.add('inativo');

        // Remove a ativação do ícone/botão de modo escuro.
        modoEscuro.classList.remove('inativo');

        // Define a variável de controle como 'claro'.
        temaAtual = 'claro';
    }
})

// Adiciona um ouvinte de evento de clique ao botão de alternância de tema.
// Ao clicar no botão, a função 'alterarTema()' é chamada.
botaoTema.addEventListener('click', alterarTema);

const containerExtensao = document.querySelector('.extensoes');

// ========== LOGICA PARA ADICIONAR UM VALOR NOS IDS DOS INPUTS ========== //

let acumulador = 0
 const contadorINPUT = () =>{ return ++acumulador};
let acumulador1 = 0
 const contadorBlocoEXT = () =>{return ++acumulador1;}


// ========== LOGICA BOTOES EXTENSOES ========== //

// Referência ao botão que exibe apenas as extensões inativas.
const botaoInativo = document.querySelector('.inativos');

// Referência ao botão que exibe apenas as extensões ativas.
const botaoAtivo = document.querySelector('.ativos');

// Referência ao botão que exibe todas as extensões.
const botaoTodos = document.querySelector('.todos');

// Referência ao bloco que contém as extensões.
const blocoExtensao = document.querySelector('.bloco-extensao');

// --------------------------------------------------------------
// Função responsável por mostrar ou ocultar extensões
// conforme o estado dos checkboxes (ativos/inativos).
// --------------------------------------------------------------
function executarAcao(valor) {
    // Seleciona todos os elementos com a classe '.ckb' (checkboxes de ativação).
    const ativar_desativar_extensao = [...document.querySelectorAll('.ckb')];

    // Armazena a lista de checkboxes em uma variável.
    const elementos = ativar_desativar_extensao;

    // Percorre cada checkbox encontrado.
    elementos.forEach(elemento => {
        // Obtém o elemento pai principal (bloco da extensão correspondente).
        const blocoExtensaoPai = elemento.parentElement.parentElement.parentElement;

        // Verifica o estado do checkbox em relação ao valor recebido.
        // Se o estado do checkbox for igual ao valor passado na função,
        // o bloco é ocultado. Caso contrário, ele é exibido.
        if (elemento.checked === valor) {
            blocoExtensaoPai.style.display = 'none';
        } else {
            blocoExtensaoPai.style.display = 'flex';
        }
    });
}

// --------------------------------------------------------------
// Eventos de clique nos botões de filtro de extensões.
// --------------------------------------------------------------

// Quando o botão "Inativos" é clicado, oculta as extensões ativas
// e mostra apenas as que estão desativadas.
botaoInativo.addEventListener('click', evt => {
    executarAcao(true);
});

// Quando o botão "Ativos" é clicado, oculta as extensões inativas
// e mostra apenas as que estão ativas.
botaoAtivo.addEventListener('click', evt => {
    executarAcao(false);
});

// Quando o botão "Todos" é clicado, exibe todas as extensões.
botaoTodos.addEventListener('click', evt => {
    executarAcao();
});

// --------------------------------------------------------------
// ========== LÓGICA DO BOTÃO "REMOVER" ==========
// --------------------------------------------------------------

// Referência ao container principal que contém todas as extensões.
const caixaExtensoes = document.querySelector('.extensoes');

// Adiciona um evento de clique ao container de extensões.
// Essa técnica (delegação de eventos) permite capturar cliques
// em qualquer botão "Remover" existente dentro do container.
caixaExtensoes.addEventListener('click', evt => {

    // Verifica se o elemento clicado possui a classe 'botaoRemover'.
    if (evt.target.classList.contains('botaoRemover')) {

        // Encontra o elemento pai mais próximo com a classe '.bloco-extensao',
        // que representa o bloco da extensão que será removida.
        const bloco = evt.target.closest('.bloco-extensao');
        
        // Exibe uma caixa de confirmação para o usuário.
        const confirmar = confirm('Deseja remover esta extensão?');

        // Se o usuário confirmar, remove o bloco da extensão da página.
        if (confirmar) {
            bloco.remove();
        }
    }
});