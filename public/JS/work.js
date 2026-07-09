const cards = document.querySelectorAll("[data-card]");

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        if (card.classList.contains("expanded")) {
            card.classList.remove("expanded");
        }
        else {
            cards.forEach(function (c) {
                c.classList.remove("expanded");
            });
            card.classList.add("expanded");
        }
    });
});
