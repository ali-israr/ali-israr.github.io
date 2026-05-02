const mediaItems = [
  {
    outlet: "Discover Magazine",
    title: "The Future of Tactile Touch Screens",
    logo: "assets/logos/media_logos/discover-magazine-logo.png",
    url: "https://www.discovermagazine.com/technology/the-future-of-tactile-touch-screens",
  },
  {
    outlet: "MIT Technology Review",
    title: "Getting e-mail on your skin is actually a thing now, thanks to Facebook",
    logo: "assets/logos/media_logos/mit-tech-review-logo.png",
    url: "https://www.technologyreview.com/2018/04/17/104475/getting-e-mail-on-your-skin-is-actually-a-thing-now-thanks-to-facebook/",
  },
  {
    outlet: "Variety",
    title: "Disney Researchers Create Mixed-Reality 'Magic Bench' for Shared Experiences",
    logo: "assets/logos/media_logos/Variety-Logo.jpg",
    url: "https://variety.com/2017/digital/news/disney-magic-bench-mixed-reality-research-project-1202507143/",
  },
  {
    outlet: "Wired",
    title: "Disney's 'Magic Bench' Fixes AR's Biggest Blind Spot",
    logo: "assets/logos/media_logos/wired-logo.png",
    url: "https://www.wired.com/story/disneys-magic-bench-fixes-ars-biggest-blind-spot/",
  },
  {
    outlet: "NBC",
    title: "Vybe Gaming Pad Moves You",
    logo: "assets/logos/media_logos/NBC_logo.png",
    url: "https://www.nbcnews.com/id/wbna50287715",
  },
  {
    outlet: "Engadget",
    title: "Vybe gaming pad packs Disney Research's Surround Haptics into a $99 accessory",
    logo: "assets/logos/media_logos/Engadget_Logo.png",
    url: "https://www.engadget.com/2012-12-17-vybe-gaming-chair-disney-research-surround-haptics.html",
  },
  {
    outlet: "Phys.org",
    title: "New software plug-in enables users to add haptic effects to games, media",
    logo: "assets/logos/media_logos/physorg-logo.png",
    url: "https://phys.org/news/2014-11-software-plug-in-enables-users-haptic.html",
  },
  {
    outlet: "VFX Voice",
    title: "Avatar: Flight of Passage: A cinematic, multi-sensory 3D experience that soars",
    logo: "assets/logos/media_logos/vfxv-logo.png",
    url: "https://www.vfxvoice.com/avatar-flight-of-passage-a-cinematic-multi-sensory-3d-experience-that-soars/",
  },
  {
    outlet: "BBC",
    title: "Disney develops way to 'feel' touchscreen images",
    logo: "assets/logos/media_logos/BBC-logo.jpg",
    url: "http://www.bbc.com/news/technology-24443271",
  },
  {
    outlet: "Washington Post",
    title: "Disney invents touchscreen that lets you feel textures",
    logo: "assets/logos/media_logos/washington-post-logo.png",
    url: "https://www.washingtonpost.com/news/the-switch/wp/2013/10/08/disney-invents-touchscreen-that-lets-you-feel-textures/",
  },
  {
    outlet: "Mashable",
    title: "Disney Research Develops Tactile 3D Touchscreen",
    logo: "assets/logos/media_logos/Mashable_Logo.png",
    url: "http://mashable.com/2013/10/09/disney-research-3d-touchscreens/",
  },
  {
    outlet: "Wired",
    title: "Disney's Amazing Air Cannons Let You Touch the Digital World",
    logo: "assets/logos/media_logos/wired-logo.png",
    url: "https://www.wired.com/2013/07/disneys-tiny-amazing-air-cannons-will-let-you-feel-the-digital-world/",
  },
  {
    outlet: "Mashable",
    title: "Device Puffs Virtual Objects Into Reality",
    logo: "assets/logos/media_logos/Mashable_Logo.png",
    url: "http://mashable.com/2013/07/19/aireal/#JApBz_67PkqB",
  },
  {
    outlet: "New Scientist",
    title: "Illusions to send shivers down a gamer's spine",
    logo: "assets/logos/media_logos/new-scientist-logo.png",
    url: "https://www.newscientist.com/article/mg21028137.900-illusions-to-send-shivers-down-a-gamers-spine/",
  },
  {
    outlet: "Fast Company",
    title: "Disney Reinvents The Vibrator ... For Sensational Movies And Gaming",
    logo: "assets/logos/media_logos/Fast-Company-Logo.jpg",
    url: "https://www.fastcompany.com/1772583/disney-reinvents-vibrator-sensational-movies-and-gaming",
  },
  {
    outlet: "Kotaku",
    title: "One Day Games Will Caress, Smack You",
    logo: "assets/logos/media_logos/kotaku-logo.jpg",
    url: "http://kotaku.com/5829027/one-day-games-will-caress-smack-you",
  },
  {
    outlet: "MIT Technology Review",
    title: "A Touch Screen with Texture",
    logo: "assets/logos/media_logos/mit-tech-review-logo.png",
    url: "https://www.technologyreview.com/s/421191/a-touch-screen-with-texture/",
  },
  {
    outlet: "CNN",
    title: "When glass touch screens feel like sandpaper",
    logo: "assets/logos/media_logos/CNN-logo.svg",
    url: "http://www.cnn.com/2010/TECH/innovation/10/08/tesla.touch.disney/index.html",
  },
  {
    outlet: "MSNBC",
    title: "Feel the future: Touch screens that touch back",
    logo: "assets/logos/media_logos/msnbc-logo.png",
    url: "http://www.nbcnews.com/id/40845743/ns/technology_and_science-tech_and_gadgets/#.WCwZmaIrJE4",
  },
];

const projects = window.PROJECTS || PROJECTS || [];

function assetUrl(folder, filename) {
  return `${folder}/${encodeURIComponent(filename).replace(/%2F/g, "/")}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function primaryProjectImage(project) {
  return project.images?.length ? assetUrl("assets/images", project.images[0]) : "";
}

function linkTypeLabel(url) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "Video";
  if (url.includes("patent")) return "Patent";
  return "Publication";
}

function renderMedia() {
  const carousel = document.querySelector("#mediaCarousel");
  if (!carousel) return;

  carousel.innerHTML = mediaItems.map((item) => `
    <a class="media-card" href="${item.url}" target="_blank" rel="noopener">
      <div class="media-logo">
        <img src="${item.logo}" alt="${item.outlet} logo">
      </div>
      <h3>${item.outlet}</h3>
      <p>${item.title}</p>
      <span>Read coverage</span>
    </a>
  `).join("");

  document.querySelector(".carousel-button.previous")?.addEventListener("click", () => {
    carousel.scrollBy({ left: -330, behavior: "smooth" });
  });
  document.querySelector(".carousel-button.next")?.addEventListener("click", () => {
    carousel.scrollBy({ left: 330, behavior: "smooth" });
  });
}

function renderProjects() {
  const grid = document.querySelector("#projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((project) => `
    <a class="project-card" href="project.html?project=${project.slug}">
      <div class="project-thumb">
        <img src="${primaryProjectImage(project)}" alt="">
      </div>
      <div class="project-card-body">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
      </div>
    </a>
  `).join("");
}

function renderProjectPage() {
  const root = document.querySelector("#projectRoot");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project") || "tactile-animation";
  const project = projects.find((item) => item.slug === slug) || projects.find((item) => item.slug === "tactile-animation");

  if (!project) return;

  const pdfUrl = assetUrl("assets/docs", project.pdf);
  const detailParagraphs = project.details.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  const gallery = project.images.map((image) => `
    <figure class="detail-panel">
      <img src="${assetUrl("assets/images", image)}" alt="${escapeHtml(project.title)} project image">
    </figure>
  `).join("");
  const externalLinks = project.links.map((link) => `
    <a class="resource-link" href="${link.url}" target="_blank" rel="noopener">
      <span>${escapeHtml(link.label)}</span>
      <small>${linkTypeLabel(link.url)}</small>
    </a>
  `).join("");
  const citation = project.citation ? `
    <div class="citation">
      <strong>Citation:</strong> ${escapeHtml(project.citation)}
    </div>
  ` : "";

  root.innerHTML = `
    <section class="project-hero">
      <div>
        <p class="eyebrow">Featured project</p>
        <h1>${escapeHtml(project.title)}</h1>
        <p>${escapeHtml(project.summary)}</p>
        ${detailParagraphs}
        <div class="project-actions">
          <a class="button primary" href="${pdfUrl}" target="_blank" rel="noopener">Project PDF</a>
          <a class="button" href="index.html#projects">All Projects</a>
        </div>
      </div>
    </section>
    <section class="project-resources" aria-label="Project links">
      <div class="section-heading">
        <p class="eyebrow">Papers and media</p>
        <h2>Links</h2>
      </div>
      <div class="resource-grid">
        ${externalLinks}
      </div>
      ${citation}
    </section>
    <section class="project-gallery" aria-label="${escapeHtml(project.title)} gallery">
      <div class="section-heading">
        <p class="eyebrow">Project images</p>
        <h2>Gallery</h2>
      </div>
      <div class="project-detail-grid">
        ${gallery}
      </div>
    </section>
  `;
  document.title = `${project.title} | Ali Israr`;
}

document.querySelectorAll("#year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
renderMedia();
renderProjects();
renderProjectPage();
