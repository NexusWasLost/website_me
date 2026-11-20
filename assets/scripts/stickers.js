export const setupStickers = function () {
    const stickers = document.querySelectorAll(".sticker");

    if (stickers.length === 0) {
        return;
    }

    let activeSticker = null;
    let offsetX = 0;
    let offsetY = 0;
    let topLayer = 5;

    stickers.forEach(function (sticker) {
        sticker.addEventListener("pointerdown", function (event) {
            const stickerBox = sticker.getBoundingClientRect();

            activeSticker = sticker;
            offsetX = event.clientX - stickerBox.left;
            offsetY = event.clientY - stickerBox.top;
            topLayer = topLayer + 1;
            sticker.style.zIndex = topLayer;
            sticker.classList.add("dragging");
            event.preventDefault();
        });
    });

    window.addEventListener("pointermove", function (event) {
        if (!activeSticker) return;

        const heroBox = activeSticker.parentElement.getBoundingClientRect();
        activeSticker.style.left = `${event.clientX - heroBox.left - offsetX}px`;
        activeSticker.style.top = `${event.clientY - heroBox.top - offsetY}px`;
        activeSticker.style.bottom = "auto";
    });

    const releaseSticker = function () {
        if (activeSticker) {
            activeSticker.classList.remove("dragging");
            activeSticker = null;
        }
    };

    window.addEventListener("pointerup", releaseSticker);
    window.addEventListener("pointercancel", releaseSticker);
};
