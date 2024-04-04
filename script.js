const open = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-mobile");
const close = document.querySelector(".btn-fechar")

open.addEventListener('click', () => {
    menu.style.display = 'block';
});

close.addEventListener('click', () => {
    menu.style.display = 'none';
});