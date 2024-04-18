const open = document.querySelector(".menu-icon");
const close = document.querySelector(".btn-fechar");
const menu = document.querySelector(".menu-mobile");
const back = document.querySelector(".overlay-menu");
const btn = document.querySelector(".btn-s1")
const txt = document.querySelector(".txt-an")
const cont = document.querySelector(".img-cont")
let isMenuOpen = false;

open.addEventListener('click', () => { 
    menu.classList.add('abrir-menu');
    isMenuOpen = true;
});

menu.addEventListener('click', () => { 
    menu.classList.remove('abrir-menu');
    isMenuOpen = false;
});

back.addEventListener('click', () => { 
    menu.classList.remove('abrir-menu');
    isMenuOpen = false;
});