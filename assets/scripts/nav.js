export const setupNavigation = function () {
    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelectorAll(".site-nav a");
    const menuOverlay = document.querySelector(".menu-overlay");

    if (!header || !menuToggle || !menuOverlay) {
        return;
    }

    const closeMenu = function () {
        header.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    };

    menuToggle.addEventListener("click", function () {
        const isOpen = header.classList.toggle("menu-open");

        if (isOpen) {
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Close navigation");
        } else {
            closeMenu();
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", function (event) {
        if (!header.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    menuOverlay.addEventListener("click", closeMenu);
};
