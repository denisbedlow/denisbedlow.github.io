document.addEventListener("DOMContentLoaded", () => {
    try {
        const menuToggle = document.querySelector(".menu-toggle");
        const headerRight = document.querySelector(".header-right");

        if (!menuToggle || !headerRight) {
            throw new Error("Required DOM elements not found");
        }

        menuToggle.addEventListener("click", () => {
            headerRight.classList.toggle("active");
        });
    } catch (error) {
        console.error("Navigation initialization failed:", error);
    }
});