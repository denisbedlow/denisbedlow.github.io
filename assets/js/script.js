document.addEventListener("DOMContentLoaded", () => {
    try {
        const menuToggle = document.querySelector(".menu-toggle");
        const headerRight = document.querySelector(".header-right");
        const navLinks = document.querySelectorAll(".nav-links a"); // Select all nav links

        if (!menuToggle || !headerRight) {
            throw new Error("Required DOM elements not found");
        }

        // Toggle the 'active' class on the header-right element
        menuToggle.addEventListener("click", () => {
            const isExpanded = headerRight.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", isExpanded);
        });

        // Close the menu if clicking outside of it
        document.addEventListener("click", (event) => {
            if (!headerRight.contains(event.target) && !menuToggle.contains(event.target)) {
                headerRight.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

        // Close the menu when a navigation link is clicked
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                headerRight.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    } catch (error) {
        console.error("Navigation initialization failed:", error);
    }
});