const botaoTema = document.getElementById('toggle-theme');
const body = document.body;
const iconeTema = document.getElementById('icon-theme');
const botaoMenu = document.getElementById('nav-btn-mobile');
const menu = document.getElementById('nav-ul');
const navIMobile = document.getElementById('nav-i-mobile');

// Aplica tema salvo no carregamento
if (localStorage.getItem('tema') === 'escuro') {
    body.classList.add('tema-escuro');
    iconeTema.classList.replace('fa-sun', 'fa-moon');
}

// Alterna tema claro/escuro
botaoTema.addEventListener('click', () => {
    const escuro = body.classList.toggle('tema-escuro');
    iconeTema.classList.replace(escuro ? 'fa-sun' : 'fa-moon', escuro ? 'fa-moon' : 'fa-sun');
    localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
});

// Alterna menu mobile
botaoMenu.addEventListener('click', () => {
    const ativo = menu.classList.toggle('ativo');
    botaoMenu.setAttribute('aria-expanded', ativo);
    navIMobile.classList.replace(ativo ? 'fa-bars' : 'fa-xmark', ativo ? 'fa-xmark' : 'fa-bars');
});

// Carrossel
document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel');
    const slides = [...carrossel.querySelectorAll('.slide')];
    const indicadoresContainer = document.getElementById('indicadores');
    let indexAtual = 0;
    let intervalo;
    const tempo = 3000;

    // Cria indicadores dinamicamente
    slides.forEach((_, i) => {
        const botao = document.createElement('button');
        botao.addEventListener('click', () => mostrarSlide(i));
        indicadoresContainer.appendChild(botao);
    });

    const indicadores = [...indicadoresContainer.querySelectorAll('button')];

    function mostrarSlide(index) {
        slides.forEach(s => s.classList.remove('ativo'));
        indicadores.forEach(i => i.classList.remove('ativo'));
        slides[index].classList.add('ativo');
        indicadores[index].classList.add('ativo');
        indexAtual = index;
    }

    function proximoSlide() {
        mostrarSlide((indexAtual + 1) % slides.length);
    }

    function iniciar() {
        intervalo = setInterval(proximoSlide, tempo);
    }

    function parar() {
        clearInterval(intervalo);
    }

    carrossel.addEventListener('mouseenter', parar);
    carrossel.addEventListener('mouseleave', iniciar);

    mostrarSlide(0);
    iniciar();
});
