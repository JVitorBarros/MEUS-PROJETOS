// Função que cria o HTML de um único card usando Template Literals.
// É mais limpo e fácil de ler do que criar elemento por elemento.
function criarCardExtensao(extensao, id) {
  // Define se o checkbox deve vir marcado ou não
  const isChecked = extensao.isActive ? "checked" : "";

  return `
    <div class="bloco-extensao">
      <div class="caixaSuperior">
        <div class="caixaLogo">
          <img src='${extensao.logo}' alt="Logo for ${extensao.name}">
        </div>
        <div class="titulo__descricao__extensao">
          <h1>${extensao.name}</h1>
          <p>${extensao.description}</p>
        </div>
      </div>
      <div class="caixaInferior">
        <button class="botaoRemover">Remove</button>
        <div class="caixaInput">
          <input type="checkbox" class="ckb" id="checkbox${id}" ${isChecked}>
          <label for="checkbox${id}" class="swicth">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  `;
}

// Faz uma requisição ao arquivo 'data.json' para obter os dados das extensões.
fetch("data.json")
  // Converte a resposta da requisição em formato JSON.
  .then((resposta) => resposta.json())
  // Desestrutura o objeto retornado para acessar diretamente a propriedade 'extensoes'.
  .then(({ extensoes }) => {    
    // Gera o HTML para todos os cards de uma vez.
    const todosOsCardsHtml = extensoes
      .map((extensao, index) => criarCardExtensao(extensao, index + 1))
      .join("");
    
    // Insere todo o HTML gerado no container de uma só vez.
    // Isso é mais performático do que adicionar um por um (appendChild).
    containerExtensao.innerHTML = todosOsCardsHtml;
    });
 
