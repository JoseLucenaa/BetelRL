const open = document.querySelector(".menu-icon");
const close = document.querySelector(".btn-fechar");
const menu = document.querySelector(".menu-mobile");

setTimeout(() => {
    open.addEventListener('click', function(evento) { 
        menu.style.display = 'block'; 
    });
}, 1000);

setTimeout(() => {
    close.addEventListener('click', function(evento) { 
        menu.style.display = 'none'; 
    });
}, 1000);