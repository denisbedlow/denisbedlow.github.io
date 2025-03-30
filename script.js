document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const headerRight = document.querySelector(".header-right");

    if (menuToggle && headerRight) {
        menuToggle.addEventListener("click", () => {
            headerRight.classList.toggle("active");
        });
    }
});