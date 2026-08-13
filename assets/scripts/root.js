document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const menuBackdrop = document.querySelector(".menu-backdrop");

function closeMenu() {
    siteNav.classList.remove("open");
    menuBackdrop.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    menuToggle.querySelector("i").className = "ri-menu-line";
}

function openMenu() {
    siteNav.classList.add("open");
    menuBackdrop.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
    menuToggle.querySelector("i").className = "ri-close-line";
}

menuToggle.addEventListener("click", () => {
    if (siteNav.classList.contains("open")) {
        closeMenu();
    }
    else {
        openMenu();
    }
});

menuBackdrop.addEventListener("click", closeMenu);

siteNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
});
