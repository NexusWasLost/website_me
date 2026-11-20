const projects = [
    {
        name: "Cyphr",
        description: "A serverless API key storage solution that uses AES-256-GCM to encrypt keys and provide sub 100ms read latencies.",
        tags: "Serverless · SaaS",
        tone: "#ff5a36",
        link: "./projects/cyphr.html"
    },
    {
        name: "Lumi",
        description: "A C library for querying CPU, memory and more on Windows, with a showcase example.",
        tags: "Systems · Windows",
        tone: "#c8f169",
        link: "./projects/lumi.html"
    },
    {
        name: "Pixel Store",
        description: "A demo storefront built to show a complete Razorpay payment flow, from checkout to an invoice generated on the spot.",
        tags: "Showcase · Razorpay",
        tone: "#ffb3d1",
        link: "./projects/pixelstore.html"
    },
];

export const renderProjects = function () {
    const projectList = document.getElementById("project-list");
    if (!projectList) return;

    projects.forEach(function (project, projectIndex) {
        const projectNumber = String(projectIndex + 1).padStart(2, "0");
        const projectElement = document.createElement("a");

        projectElement.className = "project reveal";
        projectElement.href = project.link;
        projectElement.style.setProperty("--tone", project.tone);
        projectElement.innerHTML = `
      <span class="project-index">${projectNumber}</span>
      <div>
        <h3 class="project-name">${project.name}</h3>
        <p class="project-description">${project.description}</p>
      </div>
      <span class="project-tags">${project.tags}</span>
    `;

        projectList.appendChild(projectElement);
    });
};
