const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__nav"); 
const menuLinks = document.querySelectorAll(".header__nav-link");

function toggleMenu() {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-open"); 
    document.body.classList.toggle("no-scroll");
}

function closeMenu() {
    burger.classList.remove("is-active");
    menu.classList.remove("is-open"); 
}

burger.addEventListener("click", toggleMenu);
menuLinks.forEach(link => link.addEventListener("click", closeMenu));