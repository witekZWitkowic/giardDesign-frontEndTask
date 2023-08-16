//Consts
const menu_button = document.getElementById("menu_button");
const navBar_list = document.getElementById("navBar_list");
const navBar_background = document.getElementById("navBar_background");
const hamburger = document.getElementById("hamburger");

//Open / Close hamburgerMenu
const toggleMenu = () => {
    navBar_list.classList.toggle("active");
    navBar_background.classList.toggle("active");
    hamburger.classList.toggle("active");
}

menu_button.addEventListener("click", toggleMenu);
