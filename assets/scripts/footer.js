const footer = `
    <footer class="site-footer">
        <div class="footer-brand">
            <p>&copy; <span id="year"></span> — <a href="/" class="footer-url">8bitnexus.pages.dev</a> made with
                <span class="heart">❤</span>.
            </p>
            <p>All rights reserved.</p>
        </div>

        <div class="footer-links">
            <a href="https://github.com/NexusWasLost" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i class="ri-github-fill" aria-hidden="true"></i>
            </a>

            <a href="https://linkedin.com/in/aritra200" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i class="ri-linkedin-box-fill" aria-hidden="true"></i>
            </a>

            <a href="https://nexus.bearblog.dev" target="_blank" rel="noopener noreferrer" aria-label="Blog">
                <i class="ri-bear-smile-line" aria-hidden="true"></i>
            </a>
        </div>
    </footer>
`;

function injectFooter() {
    const placeholder = document.querySelector(".site-footer");
    if (placeholder) {
        placeholder.outerHTML = footer;
    }
    document.getElementById("year").textContent = new Date().getFullYear();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectFooter);
}
else {
    injectFooter();
}
