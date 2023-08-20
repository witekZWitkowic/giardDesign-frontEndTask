
//Consts
// __ Menu __ //
const menu_button = document.getElementById("menu_button");
const navBar_list = document.getElementById("navBar_list");
const navBar_background = document.getElementById("navBar_background");
const hamburger = document.getElementById("hamburger");
const navbar_li = document.querySelectorAll(".navBar__list li");
const dropdown = document.querySelector('.navBar__dropdown')
const dropdownOpen = document.querySelector(".navBar__offer-dropdown-open");
const dropdownClosed = document.querySelector('.navBar__offer-dropdown-closed');
const littleArrowDropdown = document.querySelector('.navBar__dropdown img')
const searchButton = document.querySelector('.navBar__search-button');

// __ Gallery __ //
const macy = document.getElementById("macy");
const images = document.querySelectorAll(".macy-grid img");
const singleImage = document.querySelector('.gallery__singleImage');
const poppedImage = document.querySelector('.gallery__singleImage img');
const moreImagesButton = document.querySelector('.moreImages__button')
const blurredBackground = document.querySelector('.moreImages__backgroud');

// __ Slider __ //
const sliderButtons = document.querySelectorAll("[data-slider-button]")


//Functionality
//Open / Close hamburgerMenu
const toggleMenu = () => {
    navBar_list.classList.toggle("active");
    navBar_background.classList.toggle("active");
    hamburger.classList.toggle("active");
}
const toggleOverflow = () => {
    hamburger.classList.contains("active")
    ? document.body.style.overflow = "hidden"
    : document.body.style.overflow = "auto"
}

menu_button.addEventListener("click", toggleMenu);
menu_button.addEventListener("click", toggleOverflow);

navbar_li.forEach((li) => {
    li.classList.contains("navBar__dropdown")
    ? li.addEventListener("click", null)
    : li.addEventListener("click", toggleMenu)
})

//Dropdown toggle
const toggleDropdown = () => {
    dropdownClosed.classList.toggle('navBar__offer-dropdown-open')
    littleArrowDropdown.classList.toggle('navBar__dropdown-arrow')
}
dropdown.addEventListener('click', toggleDropdown);

//Search button
const toggleSearch = () => {
    document.querySelector('.navBar__input').classList.toggle('navBar__search-open')
}

searchButton.addEventListener('click', toggleSearch);

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
        waitForImages: true,
        margin: 43,
        columns: 4,
        breakAt: {
            1441: 3,
            1000: 2,
            800: {
                margin: {
                    x: 100,
                    y: 40,
                },
             columns: 1   
            }
        }
    });
}

const moreImagesHandler = () => {
    document.querySelector('.macy-grid-overflow-hidden').style.maxHeight = "7000px";
    moreImagesButton.style.display = 'none';
    blurredBackground.style.display = 'none';
}
moreImagesButton.addEventListener('click', moreImagesHandler);

//PopUp Gallery
images.forEach((image) => {
    image.onclick = () =>{
        singleImage.classList.toggle('gallery__singleImage-open')

        poppedImage.src = image.getAttribute('src');
        poppedImage.alt = image.getAttribute('alt');
        document.querySelector('.gallery__singleImage span').innerHTML = poppedImage.alt
    }
})

const turnOffImageDisplay = () => {
    singleImage.classList.toggle('gallery__singleImage-open')
}
poppedImage.addEventListener('click', turnOffImageDisplay)
