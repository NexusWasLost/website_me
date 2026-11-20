export const setupFooterYear = function () {
    const yearElement = document.querySelector("#year");

    if (!yearElement) {
        return;
    }

    yearElement.textContent = new Date().getFullYear();
};
