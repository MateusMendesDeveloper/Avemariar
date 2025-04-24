const botaoTema = document.getElementById('toggle-theme');
const body = document.body;
const iconeTema = document.getElementById('icon-theme');
const botaoMenu = document.getElementById('nav-btn-mobile');
const menu = document.getElementById('nav-ul');

// Verifica o tema salvo ao carregar a página
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    body.classList.add('tema-escuro');
    iconeTema.classList.remove('fa-sun');
    iconeTema.classList.add('fa-moon');
}

// Alterna o tema e salva no localStorage
botaoTema.addEventListener('click', () => {
    const temaEscuroAtivo = body.classList.toggle('tema-escuro');

    if (temaEscuroAtivo) {
        //ícone de lua
        iconeTema.classList.remove('fa-sun');
        iconeTema.classList.add('fa-moon');
        localStorage.setItem('tema', 'escuro');
    } else {
        //ícone de sol
        iconeTema.classList.remove('fa-moon');
        iconeTema.classList.add('fa-sun');
        localStorage.setItem('tema', 'claro');
    }
});

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});