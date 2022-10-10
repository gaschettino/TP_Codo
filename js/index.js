const navHamburguesa = document.querySelector(".hamburguesa")
const navMenu = document.querySelector(".nav-menu")

navHamburguesa.addEventListener("click", () => {
    navMenu.classList.toggle("hamburguesa_visible");   
});