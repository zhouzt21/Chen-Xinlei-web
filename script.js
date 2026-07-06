const SITE_BASE = "https://chen-xinlei.com/";

const asset = (path) => `${SITE_BASE}${path}`;

const news = [
  {
    date: "2026.06",
    text: '<a href="https://arxiv.org/abs/2604.07973" target="_blank" rel="noreferrer"><strong>Embodied-Navigation-Bench</strong></a> is accepted by <strong>ACM KDD 2026</strong> and selected for <strong>oral, Top 5%</strong>.'
  },
  {
    date: "2026.05",
    text: '<a href="https://arxiv.org/abs/2605.03941" target="_blank" rel="noreferrer"><strong>iWorld-Bench</strong></a> is accepted by <strong>ICML 2026</strong>.'
  },
  {
    date: "2026.03",
    text: '<a href="https://ieeexplore.ieee.org/document/11456773" target="_blank" rel="noreferrer"><strong>STeP-Diff</strong></a> is accepted by <strong>IEEE TKDE</strong>.'
  },
  {
    date: "2026.03",
    text: '<a href="https://arxiv.org/abs/2603.16671" target="_blank" rel="noreferrer"><strong>x<sup>2</sup>-Fusion</strong></a> is accepted by <strong>CVPR 2026</strong> as a <strong>Highlight</strong> paper.'
  },
  {
    date: "2026.02",
    text: '<a href="https://doi.org/10.1109/JIOT.2026.3651903" target="_blank" rel="noreferrer"><strong>QUIDS</strong></a> is accepted by <strong>IEEE IoT-J</strong>.'
  },
  {
    date: "2025.12",
    text: 'A <a href="https://arxiv.org/abs/2503.22943" target="_blank" rel="noreferrer"><strong>survey on event camera based mobile embodied perception</strong></a> is accepted by <strong>ACM Computing Surveys</strong>.'
  },
  {
    date: "2025.11",
    text: 'Two works, <a href="https://arxiv.org/abs/2511.11025" target="_blank" rel="noreferrer"><strong>AirCopBench</strong></a> and <a href="https://arxiv.org/abs/2505.12340v1" target="_blank" rel="noreferrer"><strong>DIMM</strong></a>, are accepted by <strong>AAAI 2026</strong>.'
  },
  {
    date: "2025.11",
    text: '<a href="https://arxiv.org/abs/2512.03369" target="_blank" rel="noreferrer"><strong>FireSentry</strong></a> is accepted by <strong>ACM KDD 2026</strong>.'
  },
  {
    date: "2025.10",
    text: '<a href="https://ieeexplore.ieee.org/abstract/document/11186147" target="_blank" rel="noreferrer"><strong>Aerial Shepherds</strong></a> is accepted by <strong>IEEE TMC</strong>.'
  },
  {
    date: "2025.09",
    text: '<a href="https://arxiv.org/abs/2511.13100" target="_blank" rel="noreferrer"><strong>Count Every Rotation</strong></a> is accepted by <strong>ACM SenSys 2026</strong>.'
  },
  {
    date: "2025.09",
    text: '<a href="https://arxiv.org/abs/2505.22038" target="_blank" rel="noreferrer"><strong>Balanced Token Pruning</strong></a> is accepted by <strong>NeurIPS 2025</strong>.'
  },
  {
    date: "2025.07",
    text: 'Three works, <a href="https://doi.org/10.1145/3746027.3758180" target="_blank" rel="noreferrer"><strong>AirScape</strong></a>, <a href="https://doi.org/10.1145/3746027.3755703" target="_blank" rel="noreferrer"><strong>Embodied-R</strong></a>, and <a href="https://doi.org/10.1145/3746027.3758219" target="_blank" rel="noreferrer"><strong>Open3D-VQA</strong></a>, are accepted by <strong>ACM MM 2025</strong>.'
  },
  {
    date: "2025.06",
    text: '<a href="https://arxiv.org/abs/2505.05307" target="_blank" rel="noreferrer"><strong>PRE-Mamba</strong></a> is accepted by <strong>ICCV 2025</strong>.'
  },
  {
    date: "2025.05",
    text: 'The research project won <strong>Silver Prize</strong> at the 50th International Exhibition of Inventions Geneva.'
  }
];

const researchAreas = [
  {
    title: "AIoT and Cyber Physical Systems",
    text: "City-scale sensing, actuation, and computing systems for smart cities and industrial AIoT platforms."
  },
  {
    title: "Neuromorphic and Event-based Perception",
    text: "Event cameras, high-frequency sensing, robust perception, and mobile embodied perception."
  },
  {
    title: "Embodied and Multi-agent Intelligence",
    text: "Collaborative strategies for UAVs, robots, aerial navigation, spatial reasoning, and agent coordination."
  },
  {
    title: "Mobile Sensing and Wireless Networks",
    text: "Ubiquitous computing, mobile computing, smart sensing, wireless communication, and networked sensing."
  }
];

const projectGroups = [
  {
    title: "Neuromorphic Perception",
    subtitle: "Event-driven and high-frequency sensing for aerial and mobile systems.",
    items: [
      {
        title: "Count Every Rotation and Every Rotation Counts",
        venue: "ACM SenSys 2026",
        text: "Contactless drone sensing and drone dynamics inversion via propeller speed.",
        link: "https://arxiv.org/abs/2511.13100",
        mediaType: "video",
        media: asset("video/基于高频视觉的无人机.mp4"),
        poster: asset("images/Count_every_rotation_EventPro.png")
      },
      {
        title: "Skyshield: Event-Driven Submillimetre Thin Obstacle Detection",
        venue: "ACM MobiCom 2025 Poster",
        text: "Rapid detection of submillimeter thin wire obstacles.",
        link: "https://doi.org/10.1145/3680207.3765671",
        mediaType: "video",
        media: asset("video/细线检测的视频.mp4"),
        poster: asset("images/Count_every_rotation_EventPro.png")
      },
      {
        title: "HawkEye: Practical In-Flight Obstacle Avoidance",
        venue: "ACM MobiCom 2025 Demo",
        text: "High-speed reaction drone for indoor and outdoor dynamic obstacle avoidance.",
        link: "https://dl.acm.org/doi/10.1145/3680207.3765594",
        mediaType: "video",
        media: asset("video/室外高速无人机.mp4"),
        poster: asset("images/mmeloc_SenSys.png")
      },
      {
        title: "PRE-Mamba",
        venue: "ICCV 2025",
        text: "A 4D state-space model for ultra-high-frequency event camera deraining.",
        link: "https://arxiv.org/abs/2505.05307",
        mediaType: "video",
        media: asset("video/去雨演示.mov"),
        poster: asset("images/Pre-mamba.png")
      }
    ]
  },
  {
    title: "Neuromorphic Cognition",
    subtitle: "World models, spatial reasoning, and navigation for embodied agents.",
    items: [
      {
        title: "AirScape",
        venue: "ACM MM 2025",
        text: "Aerial generative world model with motion controllability.",
        link: "https://doi.org/10.1145/3746027.3758180",
        mediaType: "video",
        media: asset("video/AirScape.mp4"),
        poster: asset("images/AirScape.png")
      },
      {
        title: "Embodied-R",
        venue: "ACM MM 2025",
        text: "Embodied spatial reasoning by coupling VLM perception with LM planning via reinforcement learning.",
        link: "https://doi.org/10.1145/3746027.3755703",
        mediaType: "video",
        media: asset("video/Embodied-R.mp4"),
        poster: asset("images/Embodied-R.png")
      },
      {
        title: "CityNavAgent",
        venue: "ACL 2025",
        text: "Aerial vision-and-language navigation with hierarchical semantic planning and global memory.",
        link: "https://arxiv.org/abs/2505.05622",
        mediaType: "video",
        media: asset("video/室内无人机导航.mp4"),
        poster: asset("images/CityNavAgent.png")
      }
    ]
  },
  {
    title: "Embodied Intelligence",
    subtitle: "Multi-robot collaboration, mapping, control, and strategic play.",
    items: [
      {
        title: "MR-COGraphs",
        venue: "IEEE RA-L 2025",
        text: "Communication-efficient multi-robot open-vocabulary mapping via 3D scene graphs.",
        link: "https://ieeexplore.ieee.org/abstract/document/10966246",
        mediaType: "video",
        media: asset("video/MR-COGraphs_video.mp4"),
        poster: asset("images/MR-CPGraphs.png")
      },
      {
        title: "VolleyBots",
        venue: "NeurIPS 2025",
        text: "A testbed for multi-drone volleyball combining motion control and strategic play.",
        link: "https://arxiv.org/abs/2502.01932",
        mediaType: "video",
        media: asset("video/颠球.mp4"),
        poster: asset("images/MR-CPGraphs.png")
      },
      {
        title: "mmE-Loc",
        venue: "ACM SenSys 2025",
        text: "mmWave radar and event camera sensing for accurate drone landing.",
        link: "https://dl.acm.org/doi/10.1145/3715014.3722048",
        mediaType: "video",
        media: asset("video/mmeloc.mp4"),
        poster: asset("images/mmeloc_SenSys.png")
      }
    ]
  }
];

const publications = [
  {
    title: "Embodied-Navigation-Bench: Evaluating Embodied Navigation in Realistic Urban Environments",
    venue: "ACM KDD 2026",
    type: "Conference",
    year: "2026",
    note: "Oral, Top 5%",
    image: asset("images/Embodied-navigation-bench.png"),
    link: "https://arxiv.org/abs/2604.07973",
    authors: "Baining Wang et al.; Xinlei Chen"
  },
  {
    title: "iWorld-Bench",
    venue: "ICML 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/iworld-bench-overview.png"),
    link: "https://arxiv.org/abs/2605.03941",
    authors: "Jianjie, Yingshan, Qin, and collaborators"
  },
  {
    title: "x2-Fusion",
    venue: "CVPR 2026",
    type: "Conference",
    year: "2026",
    note: "Highlight",
    image: asset("images/X-fusion.jpg"),
    link: "https://arxiv.org/abs/2603.16671",
    authors: "Ruishan Guo et al.; Xinlei Chen"
  },
  {
    title: "STeP-Diff: Spatio-Temporal Physics-Informed Diffusion Models for Mobile Fine-Grained Pollution Forecasting",
    venue: "IEEE TKDE",
    type: "Journal",
    year: "2026",
    note: "",
    image: asset("images/STiP-Diff.jpg"),
    link: "https://ieeexplore.ieee.org/document/11456773",
    authors: "Nan Zhou et al.; Xinlei Chen"
  },
  {
    title: "QUIDS: Quality-informed Incentive-driven Multi-agent Dispatching System for Mobile Crowdsensing",
    venue: "IEEE IoT-J",
    type: "Journal",
    year: "2026",
    note: "",
    image: asset("images/QUIDS.png"),
    link: "https://doi.org/10.1109/JIOT.2026.3651903",
    authors: "Nan Zhou et al.; Xinlei Chen"
  },
  {
    title: "Event Camera Meets Mobile Embodied Perception: Abstraction, Algorithm, Acceleration, Application",
    venue: "ACM Computing Surveys",
    type: "Journal",
    year: "2025",
    note: "Survey",
    image: asset("images/Event_Survey.png"),
    link: "https://doi.org/10.1145/3786332",
    authors: "Haoyang Wang et al.; Xinlei Chen"
  },
  {
    title: "AirCopBench",
    venue: "AAAI 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/AircopBench.png"),
    link: "https://arxiv.org/abs/2511.11025",
    authors: "Jirong and collaborators"
  },
  {
    title: "DIMM",
    venue: "AAAI 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/DIMM.png"),
    link: "https://arxiv.org/abs/2505.12340v1",
    authors: "Yuxuan and collaborators"
  },
  {
    title: "Count Every Rotation and Every Rotation Counts: Exploring Drone Dynamics via Propeller Sensing",
    venue: "ACM SenSys 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/Count_every_rotation_EventPro.png"),
    link: "https://arxiv.org/abs/2511.13100",
    authors: "Xuecheng Chen, Jingao Xu, and collaborators"
  },
  {
    title: "Balanced Token Pruning",
    venue: "NeurIPS 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/Balanced_token_pruning.png"),
    link: "https://arxiv.org/abs/2505.22038",
    authors: "Kaiyuan, Xiaoyue, and collaborators"
  },
  {
    title: "PRE-Mamba: A 4D State Space Model for Ultra-High-Frequent Event Camera Deraining",
    venue: "ICCV 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/Pre-mamba.png"),
    link: "https://arxiv.org/abs/2505.05307",
    authors: "Ciyu Ruan, Ruishan Guo, and collaborators"
  },
  {
    title: "AirScape: Aerial Generative World Model with Motion Controllability",
    venue: "ACM MM 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/AirScape.png"),
    link: "https://doi.org/10.1145/3746027.3758180",
    authors: "Baining Wang and collaborators"
  },
  {
    title: "Embodied-R: Activating Embodied Spatial Reasoning via Reinforcement Learning",
    venue: "ACM MM 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/Embodied-R.png"),
    link: "https://doi.org/10.1145/3746027.3755703",
    authors: "Rongze, Mingyuan, and collaborators"
  },
  {
    title: "CityNavAgent: Aerial Vision-and-Language Navigation with Hierarchical Semantic Planning and Global Memory",
    venue: "ACL 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/CityNavAgent.png"),
    link: "https://arxiv.org/abs/2505.05622",
    authors: "Baining Wang and collaborators"
  },
  {
    title: "MR-COGraphs: Communication-efficient Multi-Robot Open-vocabulary Mapping System via 3D Scene Graphs",
    venue: "IEEE RA-L",
    type: "Journal",
    year: "2025",
    note: "",
    image: asset("images/MR-CPGraphs.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/10966246",
    authors: "Qiuyi Gu, Zhaocheng Ye, and collaborators"
  },
  {
    title: "CatUA: Catalyzing Urban Air Quality Intelligence through Mobile Crowd-sensing",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2025",
    note: "",
    image: asset("images/CatUA.png"),
    link: "https://ieeexplore.ieee.org/document/10962560",
    authors: "Nan Zhou, Yuxuan Liu, Haoyang Wang, and collaborators"
  },
  {
    title: "AirTouch: A Fingerprinting Infrastructure Using Designed Touch Gestures on Drone",
    venue: "ACM MobiCom 2024",
    type: "Conference",
    year: "2024",
    note: "",
    image: asset("images/airtouch_mobicom.png"),
    link: "https://dl.acm.org/doi/abs/10.1145/3636534.3690699",
    authors: "Chenyu, Ciyu, and collaborators"
  },
  {
    title: "MobiAir: A Mobile and Collaborative Urban Air Quality Sensing System",
    venue: "ACM MobiSys 2024",
    type: "Conference",
    year: "2024",
    note: "Acceptance ratio 16.3%",
    image: asset("images/MobiAir_MobiSys.png"),
    link: "https://dl.acm.org/doi/abs/10.1145/3643832.3661872",
    authors: "Yuxuan Liu, Haoyang Wang, and collaborators"
  },
  {
    title: "DDL: Empowering Delivery Drones With Large-Scale Urban Sensing Capability",
    venue: "IEEE J-STSP",
    type: "Journal",
    year: "2024",
    note: "",
    image: asset("images/DDL_JSTSP.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/10605737",
    authors: "Xuecheng Chen, Haoyang Wang, and collaborators"
  }
];

const awards = [
  "[2025] Silver Prize, the 50th International Exhibition of Inventions Geneva.",
  "[2023] Best Paper Award, ACM UbiComp CPD Workshop.",
  "[2022] National Overseas Early Career Award, National Science Foundation of China.",
  "[2017] Best Poster Award, ACM/IEEE International Conference on Information Processing in Sensor Networks.",
  "[2016] Best Demo Award, ACM Conference on Embedded Networked Sensor Systems.",
  "[2016] Best Poster Runner Up Award, ACM Conference on Embedded Networked Sensor Systems.",
  "[2013] Dean Fellowship, Carnegie Mellon University.",
  "[2012] Excellent Master Thesis Award, Tsinghua University."
];

const services = [
  "TPC Member, ACM/IEEE International Conference on Embedded Artificial Intelligence and Sensing Systems, 2026.",
  "TPC Member, The 23rd ACM Conference on Embedded Networked Sensor Systems, 2025.",
  "TPC Member, The 11th ACM International Conference on Systems for Energy-Efficient Buildings, Cities, and Transportation, 2024.",
  "TPC Member, The 25th International Workshop on Mobile Computing Systems and Applications, 2024.",
  "TPC Member, The 19th International Conference on Mobility, Sensing and Networking, 2023.",
  "Leading Guest Editor, Sensors Special Issue: New Trends in Artificial Intelligence of Things, 2023.",
  "Leading Guest Editor, Applied Sciences Special Issue: Information Fusion and Its Applications for Smart Sensing, 2023.",
  "General Chair, The 4th TBSI Workshop on Learning Theory, 2022.",
  "TPC Member, The 27th IEEE International Conference on Parallel and Distributed Systems, 2021.",
  "TPC Co-Chair of CPD Workshop, ACM International Joint Conference on Pervasive and Ubiquitous Computing, 2019-2021.",
  "Competition Co-chair, Cyber-Physical Systems and Internet-of-Things Week, 2020.",
  "TPC Member, International Joint Conference on Artificial Intelligence, 2019-2020.",
  "TPC Member, The 33rd AAAI Conference on Artificial Intelligence, 2019.",
  "Web Chair, ACM SenSys and ACM BuildSys, 2018."
];

const teaching = [
  "Introduction to AIoT, 2023-2024 Fall, Tsinghua University.",
  "Data Visualization, 2022-2025 Spring, Tsinghua University.",
  "Urban low altitude messenger, 2024-2025 Spring, Tsinghua University.",
  "Data Mining: Theory and Algorithms, 2022 Fall, Tsinghua University."
];

const renderHtml = (container, html) => {
  container.innerHTML = html;
};

function renderNews() {
  const list = document.querySelector("#news-list");
  const toggle = document.querySelector("#toggle-news");
  const collapsedCount = 9;

  renderHtml(
    list,
    news
      .map(
        (item, index) => `
          <li class="${index >= collapsedCount ? "is-hidden" : ""}">
            <span class="timeline-date">[${item.date}]</span>
            <span>${item.text}</span>
          </li>
        `
      )
      .join("")
  );

  if (news.length <= collapsedCount) {
    toggle.hidden = true;
    return;
  }

  toggle.addEventListener("click", () => {
    const hiddenItems = list.querySelectorAll(".is-hidden");
    const isExpanded = hiddenItems.length === 0;

    if (isExpanded) {
      [...list.children].forEach((item, index) => {
        item.classList.toggle("is-hidden", index >= collapsedCount);
      });
      toggle.textContent = "Show all";
    } else {
      hiddenItems.forEach((item) => item.classList.remove("is-hidden"));
      toggle.textContent = "Show less";
    }
  });
}

function renderResearch() {
  const list = document.querySelector("#research-list");
  renderHtml(
    list,
    researchAreas
      .map(
        (item) => `
          <article class="research-card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `
      )
      .join("")
  );
}

function renderProjects() {
  const list = document.querySelector("#project-list");
  renderHtml(
    list,
    projectGroups
      .map(
        (group) => `
          <div class="project-category">
            <div class="project-category-header">
              <h3>${group.title}</h3>
              <span class="project-category-subtitle">${group.subtitle}</span>
            </div>
            <div class="project-grid">
              ${group.items
                .map((item) => {
                  const media =
                    item.mediaType === "video"
                      ? `<video src="${item.media}" poster="${item.poster || ""}" muted loop playsinline controls preload="metadata"></video>`
                      : `<img src="${item.media}" alt="${item.title}">`;

                  return `
                    <article class="project-card">
                      <div class="project-media">${media}</div>
                      <div class="project-body">
                        <span class="project-venue">${item.venue}</span>
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
                        <div class="project-links">
                          <a href="${item.link}" target="_blank" rel="noreferrer">Paper</a>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join("")}
            </div>
          </div>
        `
      )
      .join("")
  );
}

function publicationMarkup(item) {
  const note = item.note ? `<span>${item.note}</span>` : "";
  return `
    <article class="publication-item" data-type="${item.type}">
      <div class="publication-thumb">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div>
        <h3>${item.title}</h3>
        <div class="publication-meta">
          <span>${item.venue}</span>
          <span>${item.year}</span>
          <span>${item.type}</span>
          ${note}
        </div>
        <p class="publication-authors">${item.authors}</p>
        <a class="publication-link" href="${item.link}" target="_blank" rel="noreferrer">Paper</a>
      </div>
    </article>
  `;
}

function renderPublications() {
  const list = document.querySelector("#publication-list");
  const filterHost = document.querySelector("#publication-filters");
  const filters = ["All", "Conference", "Journal"];

  renderHtml(
    filterHost,
    filters
      .map(
        (filter, index) =>
          `<button type="button" class="${index === 0 ? "active" : ""}" data-filter="${filter}">${filter}</button>`
      )
      .join("")
  );

  renderHtml(list, publications.map(publicationMarkup).join(""));

  filterHost.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    filterHost.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    list.querySelectorAll(".publication-item").forEach((item) => {
      const shouldShow = filter === "All" || item.dataset.type === filter;
      item.hidden = !shouldShow;
    });
  });
}

function renderSimpleList(selector, items) {
  const list = document.querySelector(selector);
  renderHtml(list, items.map((item) => `<li>${item}</li>`).join(""));
}

function setupActiveNavigation() {
  const navLinks = [...document.querySelectorAll(".quick-nav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === id);
        });
      });
    },
    {
      rootMargin: "-30% 0px -58% 0px",
      threshold: 0.01
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  renderNews();
  renderResearch();
  renderProjects();
  renderPublications();
  renderSimpleList("#award-list", awards);
  renderSimpleList("#service-list", services);
  renderSimpleList("#teaching-list", teaching);
  setupActiveNavigation();
}

document.addEventListener("DOMContentLoaded", init);
