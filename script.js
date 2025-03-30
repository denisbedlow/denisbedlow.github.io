document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const headerRight = document.querySelector(".header-right");

    menuToggle.addEventListener("click", () => {
        headerRight.classList.toggle("active");
    });
});