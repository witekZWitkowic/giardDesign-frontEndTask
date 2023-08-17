
//Consts

// __ Menu __ //
const menu_button = document.getElementById("menu_button");
const navBar_list = document.getElementById("navBar_list");
const navBar_background = document.getElementById("navBar_background");
const hamburger = document.getElementById("hamburger");
const macy = document.getElementById("macy");

// __ Slider __ //

const sliderButtons = document.querySelectorAll("[data-slider-button]")

//Open / Close hamburgerMenu
const toggleMenu = () => {
    navBar_list.classList.toggle("active");
    navBar_background.classList.toggle("active");
    hamburger.classList.toggle("active");
}

menu_button.addEventListener("click", toggleMenu);

//Slider
sliderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const slide = button.dataset.hero__slider-button === "next" ? 1 : -1;
        const slides = button.closest("[data-slider]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + slide;
        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;

    })
})

//Masonry layout

window.onload = () => {
    const macy = Macy({
        container: '#macy',
        trueOrder: true,
        waitForImages: false,
        margin: 43,
        columns: 4,
        breakAt: {
            1441: 3,
            769: 2,
            425: 1
        }
    });
}
