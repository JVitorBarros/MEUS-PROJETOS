const botaoMudarTema = document.querySelector('.caixa-tema');


botaoMudarTema.addEventListener('click', evento =>{
    const modoEscuro = document.querySelector('#escuro');
    const modoClaro = document.querySelector('#claro');
    const body = document.querySelector('.corpo');
    const logo = document.querySelector('.caixa-logo-filho');
    const containerTopo = document.querySelector('.container-topo');
    const caixaTema = document.querySelector('.caixa-tema');

    /* modo escuro */
    modoEscuro.classList.toggle('ativo');
    body.classList.toggle('corpo-escuro');
    logo.classList.toggle('caixa-logo-escuro');
    containerTopo.classList.toggle('container-topo-escuro');
    caixaTema.classList.toggle('caixa-tema-escuro');
    /* modo claro */
    modoClaro.classList.toggle('ativo');
    body.classList.toggle('corpo-claro');
    logo.classList.toggle('caixa-logo-claro');
    containerTopo.classList.toggle('container-topo-claro');
    caixaTema.classList.toggle('caixa-tema-claro');
})