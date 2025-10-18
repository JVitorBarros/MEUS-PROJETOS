// Faz uma requisição ao arquivo 'data.json' para obter os dados das extensões.
fetch('data.json')
    // Converte a resposta da requisição em formato JSON.
    .then(resposta => resposta.json())
    // Desestrutura o objeto retornado para acessar diretamente a propriedade 'extensoes'.
    .then(({ extensoes }) => {

        // Percorre cada extensão presente no arquivo JSON.
        extensoes.map(extensao => {

            // ---------- Criação dos elementos HTML ---------- //

            // Cria um elemento <div> principal para cada extensão.
            const bloco = document.createElement('div');
            // Adiciona classes ao bloco (classe fixa e uma gerada dinamicamente).
            bloco.setAttribute('class', `bloco-extensao ${contadorBlocoEXT()}`);

            // Cria a caixa superior (onde ficará o logo e o título).
            const caixaSuperior = document.createElement('div');
            // Adiciona uma classe à caixa superior.
            caixaSuperior.setAttribute('class', 'caixaSuperior');

            // Cria a caixa inferior (botão e switch).
            const caixaInferior = document.createElement('div');
            // Adiciona uma classe à caixa inferior.
            caixaInferior.setAttribute('class', 'caixaInferior');

            // Cria uma caixa para armazenar o logo da extensão.
            const caixaLogo = document.createElement('div');
            // Adiciona a classe correspondente à caixa do logo.
            caixaLogo.setAttribute('class', 'caixaLogo');

            // Cria uma caixa para o título e a descrição da extensão.
            const tituloDescricaoExtensao = document.createElement('div');
            // Define a classe da caixa de título/descrição.
            tituloDescricaoExtensao.setAttribute('class', 'titulo__descricao__extensao');

            // Cria o título (nome da extensão).
            const titulo = document.createElement('h1');
            // Cria o parágrafo da descrição.
            const descricao = document.createElement('p');

            // Cria o botão de remover extensão.
            const botao = document.createElement('button');
            // Define a classe do botão.
            botao.setAttribute('class', 'botaoRemover');

            // Cria a caixa que conterá o input e o label do interruptor.
            const caixaInput = document.createElement('div');
            // Define a classe da caixa do input.
            caixaInput.setAttribute('class', 'caixaInput');
            //Criando uma variavel para id input
            const idInput = contadorINPUT();
            // Cria o input tipo checkbox (interruptor de ativação).
            const interruptor = document.createElement('input');
            // Define a classe e o id únicos do input, usando um contador.
            interruptor.setAttribute('class', 'ckb');
            interruptor.setAttribute('id', `checkbox${idInput}`);
            // Cria o elemento <label> que servirá como o "switch" visual do input.
            const label = document.createElement('label');
            // Define o atributo 'for' vinculado ao input correspondente.
            label.setAttribute('for', `checkbox${idInput}`);
            // Define a classe CSS para estilizar o switch.
            label.setAttribute('class', 'swicth');

            // Cria o <span> que representará a parte deslizante do switch.
            const slider = document.createElement('span');
            // Define a classe do span.
            slider.setAttribute('class', 'slider');

            // ---------- Atribuição de conteúdos e valores ---------- //

            // Insere o logo da extensão dentro da caixa do logo.
            caixaLogo.innerHTML = `<img src='${extensao.logo}'>`;

            // Define o texto do título com o nome da extensão.
            titulo.innerHTML = extensao.name;

            // Define o texto da descrição com as informações da extensão.
            descricao.innerHTML = extensao.description;

            // Define o valor do input de acordo com o estado da extensão (ativa/inativa).
            interruptor.value = extensao.isActive;

            // Define o texto do botão como "Remove".
            botao.innerHTML = 'Remove';

            // Define o tipo do input como checkbox.
            interruptor.type = 'checkbox';

            // Marca o checkbox se a extensão estiver ativa (isActive = true).
            interruptor.checked = extensao.isActive;

            // ---------- Estruturação dos elementos no DOM ---------- //

            // Adiciona o bloco principal dentro do container de extensões.
            containerExtensao.appendChild(bloco);

            // Adiciona a caixa superior dentro do bloco.
            bloco.appendChild(caixaSuperior);

            // Dentro da caixa superior, adiciona o logo e o título/descrição.
            caixaSuperior.appendChild(caixaLogo);
            caixaSuperior.appendChild(tituloDescricaoExtensao);

            // Adiciona o título e a descrição dentro da caixa de título/descrição.
            tituloDescricaoExtensao.appendChild(titulo);
            tituloDescricaoExtensao.appendChild(descricao);

            // Adiciona a caixa inferior dentro do bloco principal.
            bloco.appendChild(caixaInferior);

            // Adiciona o botão de remover dentro da caixa inferior.
            caixaInferior.appendChild(botao);

            // Adiciona a caixa do input dentro da caixa inferior.
            caixaInferior.appendChild(caixaInput);

            // Dentro da caixa do input, adiciona o checkbox e o label do switch.
            caixaInput.appendChild(interruptor);
            caixaInput.appendChild(label);

            // Dentro do label, adiciona o span que representa o botão deslizante.
            label.appendChild(slider);
        });
    });