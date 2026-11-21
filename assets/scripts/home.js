import { renderProjects } from "./project_db.js";
import { setupStickers } from "./stickers.js";
import { setupRevealOnScroll } from "./reveal.js";
import { setupNavigation } from "./nav.js";
import { injectFooter } from "./footer.js";

renderProjects();
setupStickers();
setupRevealOnScroll();
setupNavigation();
injectFooter();
