const open = document.querySelector(".menu-icon");
const close = document.querySelector(".btn-fechar");
const menu = document.querySelector(".menu-mobile");
const back = document.querySelector(".overlay-menu");


open.addEventListener('click', () => { 
        menu.classList.add('abrir-menu')
});


menu.addEventListener('click', () => { 
    menu.classList.remove('abrir-menu')
});

back.addEventListener('click', () => { 
    menu.classList.remove('abrir-menu')
});