const body = document.body;
const botaoTema = document.querySelector('.tema');
const modoEscuro = document.querySelector('#modo-escuro');
const modoClaro = document.querySelector('#modo-claro');

let temaAtual = 'escuro';

function alterarTema(){
    if(temaAtual === 'escuro'){
        body.classList.replace('tema-escuro', 'tema-claro');
        modoEscuro.classList.remove('ativo');
        modoClaro.classList.add('ativo');

        temaAtual = 'claro';
    }else{
        body.classList.replace('tema-claro','tema-escuro');
        modoClaro.classList.remove('ativo');
        modoEscuro.classList.add('ativo');

        temaAtual = 'escuro';
    }
}
botaoTema.addEventListener('click', alterarTema);
