const botaoTema = document.getElementById('toggle-theme');
const body = document.body;
const iconeTema = document.getElementById('icon-theme');
const botaoMenu = document.getElementById('nav-btn-mobile');
const menu = document.getElementById('nav-ul');
const navIMobile = document.getElementById('nav-i-mobile');

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
        iconeTema.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('tema', 'escuro');
    } else {
        iconeTema.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('tema', 'claro');
    }
});

// Alterna o menu mobile
botaoMenu.addEventListener('click', () => {
    const estaAtivo = menu.classList.toggle('ativo');
    botaoMenu.setAttribute('aria-expanded', estaAtivo); // acessibilidade

    if (estaAtivo) {
        navIMobile.classList.replace('fa-bars', 'fa-xmark');
    } else {
        navIMobile.classList.replace('fa-xmark', 'fa-bars');
    }
});
