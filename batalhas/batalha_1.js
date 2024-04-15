const ataque1 = document.querySelector('.ataque1');
const ataque2 = document.querySelector('.ataque2');

const vitoria = document.querySelector('.vitoria');
const derrota = document.querySelector('.derrota');

const divAtaques = document.querySelector('.ataques');

let barraVidaJogador = document.querySelector('.vida-jogador');
let infoVidaJogador = document.querySelector('#info-vida-jogador');

let barraVidaInimigo = document.querySelector('.vida-inimigo');
let infoVidaInimigo = document.querySelector('#info-vida-inimigo')

let vidaJogador = 50;
let vidaInimigo = 50;

ataque1.addEventListener('click', () => {
    barraVidaInimigo.style.width = `${(vidaInimigo * 2) - 10}px`;
    vidaInimigo = vidaInimigo - 5;
    infoVidaInimigo.innerText = `${vidaInimigo}`;
    divAtaques.style.display = 'none'
    setTimeout(ataqueInimigo, 2000);
    verificarFimBatalha(vidaJogador, vidaInimigo);
});

ataque2.addEventListener('click', () => {
    barraVidaInimigo.style.width = `${(vidaInimigo * 2) - 20}px`;
    vidaInimigo = vidaInimigo - 10;
    infoVidaInimigo.innerText = `${vidaInimigo}`;
    divAtaques.style.display = 'none'
    setTimeout(ataqueInimigo, 2000);
    verificarFimBatalha(vidaJogador, vidaInimigo);
});

function ataqueInimigo() {
    barraVidaJogador.style.width = `${(vidaJogador * 2) - 10}px`;
    vidaJogador = vidaJogador - 5;
    infoVidaJogador.innerText = `${vidaJogador}`;
    divAtaques.style.display = 'block'
    verificarFimBatalha(vidaJogador, vidaInimigo);
}

function verificarFimBatalha(vidaJogador, vidaInimigo) {
    if (vidaJogador <= 0 && vidaInimigo <= 0) {
        derrota.style.display = 'block'
        divAtaques.style.display = 'none'
    } else if (vidaJogador <= 0) {
        derrota.style.display = 'block' 
        divAtaques.style.display = 'none'
    } else if (vidaInimigo <= 0) {
        vitoria.style.display = 'block' 
        divAtaques.style.display = 'none'
    }
}