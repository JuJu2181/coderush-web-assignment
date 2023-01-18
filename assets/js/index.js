// To get current year
let date = new Date();
let year = date.getFullYear();
let currentYear = document.getElementById("currentYear");
currentYear.innerHTML = year;

// for nav menu
const toggleMenu = () => {
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
};
const nav_menu = document.querySelector(".nav-menu");
nav_menu.addEventListener("click", toggleMenu);

// to remove class during window resizing
window.addEventListener("resize", function () {
    if (window.innerWidth > 650) navbar.classList.remove("active");
});

// For image slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("image-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // slideIndex++;
    // if (slideIndex > slides.length) { 
    //     slideIndex = 1;
    // }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active-dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
    // setTimeout(showSlides, 10000);
}
