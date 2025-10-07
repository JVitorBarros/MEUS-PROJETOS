let divUsuario = document.querySelector('.usuarios');

fetch("data.json")
.then(response => response.json())
.then(({usuarios}) =>{
    const html = usuarios.map(dados => `
        <li>
            <img src="${dados.logo}"></img>
        </li>
        <li>${dados.name}</li>
        <li>${dados.description}</li>
        <li>${dados.isActive}</li>
        
        `).join('');
    divUsuario.innerHTML = html;
});