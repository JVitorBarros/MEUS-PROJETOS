const containerExtensao = document.querySelector('.extensoes');

fetch('data.json')
.then(resposta => resposta.json())
.then(({extensoes})=>{
    extensoes.map(extensao =>{

        // criando a varival bloco como um caixa pai
        const bloco = document.createElement('div');
        // Adicioando class
        bloco.setAttribute('class', 'bloco-extensao')
        // caixa superior para o logo, titulo e descricao
        const caixaSuperior = document.createElement('div');
        // adicionando class
        caixaSuperior.setAttribute('class', 'caixaSuperior');
        
        const caixaLogo = document.createElement('div');
        caixaLogo.setAttribute('class','logo__imagem__extensao');
        caixaDescricao.setAttribute('class', 'titulo__descricao__extensao')
        const caixaInferior = document.createElement('div');
        const caixaDescricaoExtensao = document.createElement('div');
        const logo = document.createElement('div');
        logo.setAttribute('class', 'caixa__logo__extensao');
        const titulo = document.createElement('h1');
        const descricao = document.createElement('p');
        const botaoRemover = document.createElement('button');
        
        const ligar__desligar = document.createElement('input');
        

        logo.innerHTML = `<img src='${extensao.logo}'>`
        titulo.innerHTML = `${extensao.name}`
        descricao.innerHTML = `${extensao.description}`
        botaoRemover.innerHTML = 'remover';
        ligar__desligar.type = "checkbox";
        ligar__desligar.checked = `${extensao.isActive}`


    
        containerExtensao.appendChild(bloco)
        bloco.appendChild(caixaSuperior)
        bloco.appendChild(caixaInferior)
        caixaSuperior.appendChild(logo)
        caixaSuperior.appendChild(titulo)
        caixaSuperior.appendChild(descricao)
        caixaInferior.appendChild(botaoRemover)
        caixaInferior.appendChild(ligar__desligar)

        
    })
});
