const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-bar-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });