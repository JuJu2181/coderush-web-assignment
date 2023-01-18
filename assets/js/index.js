// To get current year 
let date = new Date();
let year = date.getFullYear();
let currentYear = document.getElementById("currentYear");
currentYear.innerHTML = year;
// for nav menu
const toggleMenu = () => { 
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
const nav_menu = document.querySelector(".nav-menu");
nav_menu.addEventListener("click", toggleMenu)
// to remove class during window resizing
window.addEventListener("resize", function() {
    if (window.innerWidth > 650) navbar.classList.remove("active");
});
