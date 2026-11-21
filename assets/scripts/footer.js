const footer = `
    <footer class="site-footer">
        <span>© <span id="year"></span> Aritra - Made with <span class="footer-heart">♥️</span></span>
        <a href="#top" class="button-secondary" style="border: 0;">Back to top ↑</a>
    </footer>
`;

const setupFooterYear = function () {
    const yearElement = document.querySelector("#year");
    if (!yearElement) return;
    yearElement.textContent = new Date().getFullYear();
};

export const injectFooter = function(){
    const footerPlaceholder = document.querySelector(".site-footer");
    if(footerPlaceholder) footerPlaceholder.outerHTML = footer;
    setupFooterYear();
}
