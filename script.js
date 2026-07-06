const asset = (path) => path.startsWith("video/") ? `images/${path}` : path;
const localAsset = (path) => path;

const news = [
  {
    date: "2026.06",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://arxiv.org/abs/2604.07973" target="_blank" rel="noreferrer"><strong>Embodied-Navigation-Bench</strong></a> is accepted by <strong>ACM KDD 2026</strong> and selected for <strong>oral (Top 5% of all submissions)</strong>! Congrats to Baining, Ziyou, Jianjie, and all coauthors!'
  },
  {
    date: "2026.05",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://arxiv.org/abs/2605.03941" target="_blank" rel="noreferrer"><strong>iWorld-Bench</strong></a> is accepted by <strong>ICML 2026</strong>! Congrats to Jianjie, Yingshan, and Qin!'
  },
  {
    date: "2026.03",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://ieeexplore.ieee.org/document/11456773" target="_blank" rel="noreferrer"><strong>STeP-Diff</strong></a> is accepted by <strong>IEEE TKDE</strong>! Congrats to Nan!'
  },
  {
    date: "2026.03",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://arxiv.org/abs/2603.16671" target="_blank" rel="noreferrer"><strong>x<sup>2</sup>-Fusion</strong></a> is accepted by <strong>CVPR 2026</strong> as a <strong>Highlight</strong> paper! Congrats to Ruishan!'
  },
  {
    date: "2026.02",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://doi.org/10.1109/JIOT.2026.3651903" target="_blank" rel="noreferrer"><strong>QUIDS</strong></a> is accepted by <strong>IEEE IoT-J</strong>! Congrats to Nan!'
  },
  {
    date: "2025.12",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://arxiv.org/abs/2503.22943" target="_blank" rel="noreferrer">Our <strong>survey</strong></a> on event camera based mobile embodied perception is accepted by <strong>ACM Computing Surveys</strong>! Congrats to Haoyang!'
  },
  {
    date: "2025.11",
    text: '<span class="news-new"><strong>New!</strong></span> Two works (<a href="https://arxiv.org/abs/2511.11025" target="_blank" rel="noreferrer"><strong>AirCopBench</strong></a> &amp; <a href="https://arxiv.org/abs/2505.12340v1" target="_blank" rel="noreferrer"><strong>DIMM</strong></a>) are accepted by <strong>AAAI 2026</strong>! Congrats to Jirong and Yuxuan!'
  },
  {
    date: "2025.11",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://arxiv.org/abs/2512.03369" target="_blank" rel="noreferrer"><strong>FireSentry</strong></a> is accepted by <strong>ACM KDD 2026</strong>! Congrats to Nan!'
  },
  {
    date: "2025.10",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://ieeexplore.ieee.org/abstract/document/11186147" target="_blank" rel="noreferrer"><strong>Aerial shepherds</strong></a> is accepted by <strong>IEEE TMC</strong>! Congrats to Haoyang!'
  },
  {
    date: "2025.09",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://arxiv.org/abs/2511.13100" target="_blank" rel="noreferrer"><strong>Count Every Rotation</strong></a> is accepted by <strong>ACM SenSys 2026</strong>! Congrats to Xuecheng and Jingao!'
  },
  {
    date: "2025.09",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://arxiv.org/abs/2505.22038" target="_blank" rel="noreferrer"><strong>Balanced Token Pruning</strong></a> is accepted by <strong>NeurIPS 2025</strong>! Congrats to Kaiyuan and Xiaoyue!'
  },
  {
    date: "2025.07",
    text: '<span class="news-new"><strong>New!</strong></span> Three works (<a href="https://doi.org/10.1145/3746027.3758180" target="_blank" rel="noreferrer"><strong>AirScape</strong></a>, <a href="https://doi.org/10.1145/3746027.3755703" target="_blank" rel="noreferrer"><strong>Embodied-R</strong></a>, <a href="https://doi.org/10.1145/3746027.3758219" target="_blank" rel="noreferrer"><strong>Open3D-VQA</strong></a>) are accepted by <strong>ACM MM 2025</strong>! Congrats to Baining, Rongze, Mingyuan, Ziyou, Jianjie, Weichen, Zile, and Xin!'
  },
  {
    date: "2025.06",
    text: '<span class="news-new"><strong>New!</strong></span> <a href="https://arxiv.org/abs/2505.05307" target="_blank" rel="noreferrer"><strong>PRE-Mamba</strong></a> is accepted by <strong>ICCV 2025</strong>! Congrats to Ciyu and Ruishan!'
  },
  {
    date: "2025.05",
    text: 'Our research project has won <strong>Sliver Prize</strong> at 50th International Exhibition of Inventions Geneva!'
  },
  {
    date: "2025.05",
    text: 'Three works (<a href="https://arxiv.org/abs/2505.24331" target="_blank" rel="noreferrer"><strong>Context-Aware Sentiment Forecasting</strong></a>, <a href="https://arxiv.org/abs/2505.05622" target="_blank" rel="noreferrer"><strong>CityNavAgent</strong></a>, <a href="https://dl.acm.org/doi/10.1145/3715014.3722048" target="_blank" rel="noreferrer"><strong>Urbanvideo-Bench</strong></a>) are accepted by <strong>ACL 2025</strong>! Congrats to Fanhang, Baining, and Weichen!'
  },
  {
    date: "2025.04",
    text: '<a href="https://ieeexplore.ieee.org/abstract/document/10966246" target="_blank" rel="noreferrer"><strong>MR-COGraphs</strong></a> is accepted by <strong>IEEE RA-L</strong>! Congrats to Qiuyi and Zhaocheng!'
  },
  {
    date: "2025.04",
    text: '<a href="https://ieeexplore.ieee.org/document/10962560" target="_blank" rel="noreferrer"><strong>CatUA</strong></a> is accepted by <strong>IEEE TMC</strong>! Congrats to Nan, Yuxuan, and Haoyang!'
  },
  {
    date: "2025.04",
    text: '<a href="https://ieeexplore.ieee.org/iel8/7755/4358975/10944224.pdf" target="_blank" rel="noreferrer"><strong>SmartSpr</strong></a> is accepted by <strong>IEEE TMC</strong>! Congrats to Ji!'
  },
  {
    date: "2025.01",
    text: 'Our work <a href="https://dl.acm.org/doi/10.1145/3715014.3722048" target="_blank" rel="noreferrer"><strong>mmE-Loc</strong></a> is conditionally accepted by <strong>ACM SenSys 2025</strong>! Congrats to Haoyang!'
  },
  {
    date: "2024.11",
    text: 'I\'m honored to be invited as a <strong>Technical Program Committee Member</strong> for <strong>ACM SenSys 2025</strong>!'
  },
  {
    date: "2024.06",
    text: 'Our work <a href="https://ieeexplore.ieee.org/abstract/document/10605737" target="_blank" rel="noreferrer"><strong>DDL</strong></a> is accepted by <strong>IEEE JSTSP</strong>! Congrats to Xuecheng and Haoyang!'
  },
  {
    date: "2024.06",
    text: 'Our work <a href="https://dl.acm.org/doi/abs/10.1145/3636534.3690699" target="_blank" rel="noreferrer"><strong>AirTouch</strong></a> is accepted by <strong>ACM MobiCom 2024</strong>! Congrats to Chenyu and Ciyu!'
  },
  {
    date: "2024.05",
    text: 'Our work on estimating and modeling spontaneous mobility changes is accepted by <strong>Humanities and social sciences communications</strong>! Congrats to Baining!'
  },
  {
    date: "2024.04",
    text: 'Our work <a href="https://ieeexplore.ieee.org/document/10502270" target="_blank" rel="noreferrer"><strong>SOScheduler</strong></a> is accepted by <strong>IEEE IOT-J</strong>! Congrats to Xuecheng!'
  },
  {
    date: "2024.03",
    text: 'Our work <a href="https://dl.acm.org/doi/abs/10.1145/3643832.3661872" target="_blank" rel="noreferrer"><strong>MobiAir</strong></a> is accepted by <strong>ACM MobiSys 2024</strong>! (Acceptance ratio: 16.3%)! Congrats to Yuxuan and Haoyang!'
  },
  {
    date: "2023.12",
    text: '<strong>Three works</strong> (<a href="https://arxiv.org/html/2403.08815v1" target="_blank" rel="noreferrer"><strong>TransformLoc</strong></a>, <a href="https://ieeexplore.ieee.org/abstract/document/10621374" target="_blank" rel="noreferrer"><strong>QUEST</strong></a>, <a href="https://ieeexplore.ieee.org/document/10621142" target="_blank" rel="noreferrer"><strong>BlueKey</strong></a>) are accepted by <a href="https://infocom2024.ieee-infocom.org/" target="_blank" rel="noreferrer"><strong>IEEE INFOCOM 2024</strong></a>! (Acceptance rate: 19.5%)! Congrats to Haoyang, Zuxin, and Yawen!'
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
    subtitle: "Event-driven perception for fast and challenging aerial scenarios.",
    items: [
      {
        title: "Drone Dynamics From Propeller Motion",
        venue: "ACM SenSys 2026",
        text: "A contactless sensing demo that infers drone dynamics from high-frequency propeller motion. It enables passive monitoring without adding onboard sensors.",
        link: "https://arxiv.org/abs/2511.13100",
        mediaType: "video",
        media: asset("video/基于高频视觉的无人机.mp4")
      },
      {
        title: "Thin Obstacle Detection",
        venue: "ACM MobiCom 2025 Poster",
        text: "An event-driven detection demo for thin wires and submillimeter obstacles. It improves safety in low-altitude flight where small obstacles are easily missed by conventional cameras.",
        link: "https://doi.org/10.1145/3680207.3765671",
        mediaType: "video",
        media: asset("video/细线检测的视频.mp4")
      },
      {
        title: "In-flight Obstacle Avoidance",
        venue: "ACM MobiCom 2025 Demo",
        text: "A practical avoidance demo for indoor drone flight in cluttered spaces. It combines fast sensing and depth cues to support rapid, stable reactions.",
        link: "https://dl.acm.org/doi/10.1145/3680207.3765594",
        mediaType: "video",
        media: asset("video/室内机载高灵敏避障.mp4")
      },
      {
        title: "High-speed Outdoor Avoidance",
        venue: "ACM MobiCom 2025 Demo",
        text: "A high-speed outdoor avoidance demo for drones facing dynamic obstacles. It highlights low-latency perception and control under fast motion.",
        link: "https://dl.acm.org/doi/10.1145/3680207.3765594",
        mediaType: "video",
        media: asset("video/室外高速无人机.mp4")
      },
      {
        title: "Event-camera Deraining",
        venue: "ICCV 2025",
        text: "A robust perception demo that removes rain interference from event streams. It keeps high-frequency visual input cleaner for navigation and obstacle avoidance in adverse weather.",
        link: "https://arxiv.org/abs/2505.05307",
        mediaType: "video",
        media: asset("video/去雨演示.mov")
      },
      {
        title: "Precision Drone Landing",
        venue: "ACM SenSys 2025",
        text: "A landing demo using complementary high-frequency sensing. It improves localization robustness for safety-critical final approach and touchdown.",
        link: "https://dl.acm.org/doi/10.1145/3715014.3722048",
        mediaType: "video",
        media: asset("video/mmeloc.mp4")
      }
    ]
  },
  {
    title: "Neuromorphic Cognition",
    subtitle: "World modeling and spatial reasoning for embodied agents.",
    items: [
      {
        title: "Controllable Aerial World Modeling",
        venue: "ACM MM 2025",
        text: "A generative demo that predicts future aerial views under controllable motion. It helps agents reason about possible actions before execution.",
        link: "https://doi.org/10.1145/3746027.3758180",
        mediaType: "video",
        media: asset("video/AirScape.mp4")
      },
      {
        title: "Embodied Spatial Reasoning",
        venue: "ACM MM 2025",
        text: "A reasoning demo connecting visual perception, language planning, and reinforcement learning. It strengthens spatial decision-making in 3D environments.",
        link: "https://doi.org/10.1145/3746027.3755703",
        mediaType: "video",
        media: asset("video/Embodied-R.mp4")
      },
      {
        title: "Indoor Target Navigation",
        venue: "ACL 2025",
        text: "A vision-language navigation demo for indoor target search. It uses semantic planning and memory to reduce repeated exploration.",
        link: "https://arxiv.org/abs/2505.05622",
        mediaType: "video",
        media: asset("video/室内无人机导航.mp4")
      },
      {
        title: "Large-scale Outdoor Search",
        venue: "Demo",
        text: "A drone search demo for large-scale outdoor environments. It shows how aerial agents can explore complex scenes and localize targets beyond small indoor spaces.",
        link: "",
        mediaType: "video",
        media: asset("video/室外大尺度复杂环境无人机目标搜索demo_draft（1.8第一版）.mp4")
      }
    ]
  },
  {
    title: "Embodied Intelligence",
    subtitle: "Multi-robot systems for collaborative perception, control, and decision-making.",
    items: [
      {
        title: "Collaborative Semantic Mapping",
        venue: "IEEE RA-L 2025",
        text: "A multi-robot mapping demo for open-vocabulary scene understanding. It shares compact semantic structure to reduce communication cost.",
        link: "https://ieeexplore.ieee.org/abstract/document/10966246",
        mediaType: "video",
        media: asset("video/MR-COGraphs_video.mp4")
      },
      {
        title: "Multi-drone Strategic Play",
        venue: "NeurIPS 2025",
        text: "A multi-drone control demo built around a volleyball-style task. It evaluates agile motion and strategic coordination in the same physical setting.",
        link: "https://arxiv.org/abs/2502.01932",
        mediaType: "video",
        media: asset("video/颠球.mp4")
      },
      {
        title: "Autonomous UAV Exploration",
        venue: "Demo",
        text: "An autonomous exploration demo built around skeleton-graph planning. It improves computation efficiency while preserving structured navigation decisions.",
        link: "",
        mediaType: "video",
        media: asset("video/SCOPE.mp4")
      }
    ]
  }
];

const publications = [
  {
    title: "How Far Are Large Multimodal Models from Human-Level Spatial Action? A Benchmark for Goal-Oriented Embodied Navigation in Urban Airspace",
    venue: "ACM KDD 2026 Oral",
    type: "Conference",
    year: "2026",
    note: "Oral",
    image: asset("images/Embodied-navigation-bench.png"),
    link: "https://arxiv.org/abs/2604.07973",
    authors: "Baining Zhao, Ziyou Wang, Jianjie Fang, Zile Zhou, Yanggang Xu, Yatai Ji, Jiacheng Xu, Qian Zhang, Weichen Zhang, Chen Gao, Xinlei Chen†"
  },
  {
    title: "iWorld-Bench: A Benchmark for Interactive World Models with a Unified Action Generation Framework",
    venue: "ICML 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/iworld-bench-overview.png"),
    link: "https://arxiv.org/abs/2605.03941",
    authors: "Jianjie Fang*, Yingshan Lei*, Qin Wan*, Ziyou Wang, Yuchao Huang, Yongyan Xu, Baining Zhao, Weichen Zhang, Chen Gao, Xinlei Chen†, Yong Li"
  },
  {
    title: "x2-Fusion: Cross-Modality and Cross-Dimension Flow Estimation in Event Edge Space",
    venue: "CVPR 2026 Highlight",
    type: "Conference",
    year: "2026",
    note: "Highlight",
    image: asset("images/X-fusion.jpg"),
    link: "https://arxiv.org/abs/2603.16671",
    authors: "Ruishan Guo*, Ciyu Ruan*, Haoyang Wang*, Zihang Gong, Jingao Xu, Xinlei Chen†"
  },
  {
    title: "AirCopBench: A Benchmark for Multi-drone Collaborative Embodied Perception and Reasoning",
    venue: "AAAI 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/AircopBench.png"),
    link: "https://arxiv.org/abs/2511.11025",
    authors: "Jirong Zha*, Yuxuan Fan*, Tianyu Zhang, Geng Chen, Yingfeng Chen, Chen Gao, Xinlei Chen†"
  },
  {
    title: "DIMM: Decoupled Multi-hierarchy Kalman Filter via Reinforcement Learning",
    venue: "AAAI 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/DIMM.png"),
    link: "https://arxiv.org/abs/2505.12340v1",
    authors: "Jirong Zha, Yuxuan Fan, Kai Li, Han Li, Chen Gao, Xinlei Chen†, Yong Li"
  },
  {
    title: "FireSentry: A Multi-Modal Spatio-temporal Benchmark Dataset for Fine-Grained Wildfire Spread Forecasting",
    venue: "ACM KDD 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/FireSentry.png"),
    link: "https://arxiv.org/abs/2512.03369",
    authors: "Nan Zhou, Huandong Wang, Jiahao Li, Han Li, Yali Song, Qiuhua Wang, Yong Li, Xinlei Chen†"
  },
  {
    title: "Count Every Rotation and Every Rotation Counts: Exploring Drone Dynamics via Propeller Sensing",
    venue: "ACM SenSys 2026",
    type: "Conference",
    year: "2026",
    note: "",
    image: asset("images/Count_every_rotation_EventPro.png"),
    link: "https://arxiv.org/abs/2511.13100",
    authors: "Xuecheng Chen*, Jingao Xu*, Wenhua Ding, Haoyang Wang, Xinyu Luo, Ruiyang Duan, Jialong Chen, Xueqian Wang, Yunhao Liu, Xinlei Chen†"
  },
  {
    title: "Balanced Token Pruning: Accelerating Vision Language Models Beyond Local Optimization",
    venue: "NeurIPS 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/Balanced_token_pruning.png"),
    link: "https://arxiv.org/abs/2505.22038",
    authors: "Kaiyuan Li*, Xiaoyue Chen*, Chen Gao, Yong Li, Xinlei Chen†"
  },
  {
    title: "AirScape: An Aerial Generative World Model with Motion Controllability",
    venue: "ACM MM 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/AirScape.png"),
    link: "https://doi.org/10.1145/3746027.3758180",
    authors: "Baining Zhao*, Rongze Tang*, Mingyuan Jia*, Ziyou Wang*, Fanhang Man, Xin Zhang, Yu Shang, Weichen Zhang, Wei Wu, Chen Gao, Xinlei Chen†, Yong Li"
  },
  {
    title: "Open3D-VQA: A Benchmark for Embodied Spatial Concept Reasoning with Multimodal Large Language Model in Open Space",
    venue: "ACM MM 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/Open3D-VQA.jpg"),
    link: "https://doi.org/10.1145/3746027.3758219",
    authors: "Weichen Zhang*, Zile Zhou*, Xin Zeng*, Liu Xuchen, Jianjie Fang, Chen Gao, Jinqiang Cui, Yong Li, Xinlei Chen†, Xiao-Ping Zhang"
  },
  {
    title: "Embodied-R: Collaborative Framework for Activating Embodied Spatial Reasoning in Foundation Models via Reinforcement Learning",
    venue: "ACM MM 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/Embodied-R.png"),
    link: "https://doi.org/10.1145/3746027.3755703",
    authors: "Baining Zhao*, Ziyou Wang*, Jianjie Fang*, Chen Gao, Fanhang Man, Jinqiang Cui, Xin Wang, Xinlei Chen†, Yong Li, Wenwu Zhu"
  },
  {
    title: "PRE-Mamba: A 4D State Space Model for Ultra-High-Frequent Event Camera Deraining",
    venue: "ICCV 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/Pre-mamba.png"),
    link: "https://arxiv.org/abs/2505.05307",
    authors: "Ciyu Ruan*, Ruishan Guo*, Zihang Gong, Jingao Xu, Wenhan Yang, Xinlei Chen†"
  },
  {
    title: "Context-Aware Sentiment Forecasting via LLM-based Multi-Perspective Role-Playing Agents",
    venue: "ACL 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/Context-aware.png"),
    link: "https://arxiv.org/abs/2505.24331",
    authors: "Fanhang Man, Huandong Wang, Jianjie Fang, Zhaoyi Deng, Baining Zhao, Xinlei Chen†, Yong Li"
  },
  {
    title: "CityNavAgent: Aerial Vision-and-Language Navigation with Hierarchical Semantic Planning and Global Memory",
    venue: "ACL 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/CityNavAgent.png"),
    link: "https://arxiv.org/abs/2505.05622",
    authors: "Weichen Zhang, Chen Gao, Shiquan Yu, Ruiying Peng, Baining Zhao, Qian Zhang, Jinqiang Cui, Xinlei Chen†, Yong Li"
  },
  {
    title: "UrbanVideo-Bench: Benchmarking Vision-Language Models on Embodied Intelligence with Video Data in Urban Spaces",
    venue: "ACL 2025",
    type: "Conference",
    year: "2025",
    note: "",
    image: asset("images/UrbanVideoBench.png"),
    link: "https://arxiv.org/abs/2503.06157",
    authors: "Baining Zhao*, Jianjie Fang*, Zichao Dai*, Ziyou Wang, Jirong Zha, Weichen Zhang, Chen Gao, Yue Wang, Jinqiang Cui, Xinlei Chen†, Yong Li"
  },
  {
    title: "Ultra-High-Frequency Harmony: mmWave Radar and Event Camera Orchestrate Accurate Drone Landing",
    venue: "ACM SenSys 2025",
    type: "Conference",
    year: "2025",
    note: "Acceptance ratio: 46/245=18.7%",
    image: asset("images/mmeloc_SenSys.png"),
    link: "https://dl.acm.org/doi/10.1145/3715014.3722048",
    authors: "Haoyang Wang, Jingao Xu, Xinyu Luo, Xuecheng Chen, Ting Zhang, Ruiyang Duan, Yunhao Liu, Xinlei Chen†"
  },
  {
    title: "Foes or Friends: Embracing Ground Effect for Edge Detection on Lightweight Drones",
    venue: "ACM MobiCom 2024",
    type: "Conference",
    year: "2024",
    note: "",
    image: asset("images/airtouch_mobicom.png"),
    link: "https://dl.acm.org/doi/abs/10.1145/3636534.3690699",
    authors: "Chenyu Zhao*, Ciyu Ruan*, Jingao Xu†, Haoyang Wang, Shengbo Wang, Jiaqi Li, Jirong Zha, Zheng Yang, Yunhao Liu, Xiao-Ping Zhang, Xinlei Chen†"
  },
  {
    title: "Distill Drops into Data: Event-based Rain-Background Decomposition Network",
    venue: "ACM MobiCom 2024 (WKS)",
    type: "Conference",
    year: "2024",
    note: "",
    image: asset("images/Distill_drop.png"),
    link: "https://doi.org/10.1145/3636534.3694737",
    authors: "Ciyu Ruan*, Chenyu Zhao*, Chenxin Liang, Xinyu Luo, Jingao Xu, Xinlei Chen†"
  },
  {
    title: "MobiAir: Unleashing Sensor Mobility for City-scale and Fine-grained Air-Quality Monitoring with AirBERT",
    venue: "ACM MobiSys 2024",
    type: "Conference",
    year: "2024",
    note: "Acceptance ratio: 43/263 = 16.3%",
    image: asset("images/MobiAir_MobiSys.png"),
    link: "https://dl.acm.org/doi/abs/10.1145/3643832.3661872",
    authors: "Yuxuan Liu*, Haoyang Wang*, Fanhang Man, Jingao Xu, Fan Dang, Yunhao Liu, Xiao-Ping Zhang, Xinlei Chen†"
  },
  {
    title: "Physics-informed Neural ODE for Post-disaster Mobility Recovery",
    venue: "KDD 2024",
    type: "Conference",
    year: "2024",
    note: "",
    image: asset("images/Physics_informed_NN.png"),
    link: "https://dl.acm.org/doi/10.1145/3637528.3672027",
    authors: "Jiahao Li*, Huandong Wang*, Xinlei Chen†"
  },
  {
    title: "TransformLoc: Transforming MAVs into Mobile Localization Infrastructures in Heterogeneous Swarms",
    venue: "IEEE INFOCOM 2024",
    type: "Conference",
    year: "2024",
    note: "Acceptance ratio: 256/1307=19.5%",
    image: asset("images/TransformLoc_INFOCOM.png"),
    link: "https://arxiv.org/html/2403.08815v1",
    authors: "Haoyang Wang, Jingao Xu, Chenyu Zhao, Zihong Lu, Yuhan Cheng, Xuecheng Chen, Xiao-Ping Zhang, Yunhao Liu, Xinlei Chen†"
  },
  {
    title: "QUEST: Quality-informed Multi-agent Dispatching System for Optimal Mobile Crowdsensing",
    venue: "IEEE INFOCOM 2024",
    type: "Conference",
    year: "2024",
    note: "Acceptance ratio: 256/1307=19.5%",
    image: asset("images/QUEST_INFOCOM.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/10621374",
    authors: "Zuxin Li, Fanhang Man, Xuecheng Chen, Susu Xu, Fan Dang, Xiao-Ping Zhang, Xinlei Chen†"
  },
  /*
  Commented out after corresponding-author audit:
  the available PDF identifies Fan Dang as corresponding author.
  {
    title: "BlueKey: Exploiting Bluetooth Low Energy for Enhanced Physical-Layer Key Generation",
    venue: "IEEE INFOCOM 2024",
    type: "Conference",
    year: "2024",
    note: "Acceptance ratio: 256/1307=19.5%",
    image: asset("images/BlueKey.png"),
    link: "https://ieeexplore.ieee.org/document/10621142",
    authors: "Yawen Zheng, Fan Dang, Zihao Yang, Jinyan Jiang, Xu Wang, Lin Wang, Kebin Liu, Xinlei Chen, Yunhao Liu"
  },
  */
  /*
  Commented out after corresponding-author audit:
  current evidence marks other authors, not Xinlei Chen, as corresponding authors.
  {
    title: "StreamingTag: A Scalable Piracy Tracking Solution for Mobile Streaming Services",
    venue: "ACM MobiCom 2022",
    type: "Conference",
    year: "2022",
    note: "",
    image: asset("images/StreamTag.png"),
    link: "https://dl.acm.org/doi/abs/10.1145/3495243.3560521",
    authors: "Xinqi Jin*, Fan Dang*†, Qi-An Fu, Lingkun Li, Guanyan Peng, Xinlei Chen, Kebin Liu, Yunhao Liu†"
  },
  */
  {
    title: "LSync: A Universal Event-Synchronizing Solution for Live Streaming",
    venue: "IEEE INFOCOM 2022",
    type: "Conference",
    year: "2022",
    note: "",
    image: localAsset("images/lsync-infocom-2022.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/9796933/",
    authors: "Yifan Xu, Fan Dang, Rongwu Xu, Xinlei Chen†, Yunhao Liu"
  },
  {
    title: "Califormer: Leveraging Unlabeled Measurements to Calibrate Sensors with Self-supervised Learning",
    venue: "ACM UbiComp CPD 2023 (WKS)",
    type: "Conference",
    year: "2023",
    note: "",
    image: localAsset("images/califormer-ubicomp-2023.png"),
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Ha8rlUgAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=Ha8rlUgAAAAJ:EUQCXRtRnyEC",
    authors: "Haoyang Wang*, Yuxuan Liu*, Chenyu Zhao, Jiayou He, Wenbo Ding, Xinlei Chen†"
  },
  {
    title: "DeliverSense: Efficient Delivery Drone Scheduling for Crowdsensing with Deep Reinforcement Learning",
    venue: "ACM UbiComp CPD 2022 (WKS)",
    type: "Conference",
    year: "2022",
    note: "",
    image: localAsset("images/DeliverSense.png"),
    link: "https://dl.acm.org/doi/abs/10.1145/3544793.3560412",
    authors: "Xuecheng Chen, Haoyang Wang, Zuxin Li, Wenbo Ding, Fan Dang, Chengye Wu, Xinlei Chen† \nBest Paper Award (1 out of all submissions)"
  },
  {
    title: "PGA: Physics Guided and Adaptive Approach for Mobile Fine-Grained Air Pollution Estimation",
    venue: "ACM UbiComp CPD 2018 (WKS)",
    type: "Conference",
    year: "2018",
    note: "",
    image: localAsset("images/pga-ubicomp-2018.png"),
    link: "https://dl.acm.org/doi/10.1145/3267305.3274179",
    authors: "Xinlei Chen†, Xiangxiang Xu, Xinyu Liu, Shijia Pan, Jiayou He, Hae Young Noh, Lin Zhang, Pei Zhang"
  },
  {
    title: "DrunkWalk: Collaborative and Adaptive Planning for Navigation of Micro-Aerial Sensor Swarms",
    venue: "ACM SenSys 2015",
    type: "Conference",
    year: "2015",
    note: "",
    image: localAsset("images/drunkwalk-sensys-2015.png"),
    link: "https://dl.acm.org/doi/10.1145/2809695.2809724",
    authors: "Xinlei Chen†, Aveek Purohit, Carlos Ruiz Dominguez, Stefano Carpin, Pei Zhang†"
  },
  {
    title: "mmE-Loc: Facilitating Accurate Drone Landing with Ultra-High-Frequency Localization",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2026",
    note: "",
    image: asset("images/mmeloc_SenSys.png"),
    link: "https://doi.org/10.1109/tmc.2026.3666235",
    authors: "Haoyang Wang, Jingao Xu, Xinyu Luo, Ting Zhang, Xuecheng Chen, Ruiyang Duan, Yunhao Liu, Jianfeng Zheng, Weijie Hong, Xiaoqiang Ji, Yuqing Tang, Xinlei Chen†"
  },
  {
    title: "STeP-Diff: Spatio-Temporal Physics-Informed Diffusion Models for Mobile Fine-Grained Pollution Forecasting",
    venue: "IEEE TKDE",
    type: "Journal",
    year: "2025",
    note: "",
    image: asset("images/STiP-Diff.jpg"),
    link: "https://ieeexplore.ieee.org/document/11456773",
    authors: "Nan Zhou, Weijie Hong, Huandong Wang, Jianfeng Zheng, Qiuhua Wang, Yali Song, Xiao-Ping Zhang, Yong Li, Xinlei Chen†"
  },
  {
    title: "Event Camera Meets Mobile Embodied Perception: Abstraction, Algorithm, Acceleration, Application",
    venue: "ACM CSUR",
    type: "Journal",
    year: "2026",
    note: "",
    image: asset("images/Event_Survey.png"),
    link: "https://doi.org/10.1145/3786332",
    authors: "Haoyang Wang, Ruishan Guo, Pengtao Ma, Ciyu Ruan, Xinyu Luo, Wenhua Ding, Tianyang Zhong, Jingao Xu, Yunhao Liu, Xinlei Chen†"
  },
  {
    title: "Aerial Shepherds: Enabling Hierarchical Localization in Heterogeneous MAV Swarms",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2025",
    note: "",
    image: asset("images/AerialShepherds.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/11186147",
    authors: "Haoyang Wang, Jingao Xu, Chenyu Zhao, Yuhan Cheng, Xuecheng Chen, Chaopeng Hong, Xiao-Ping Zhang, Yunhao Liu, Xinlei Chen†"
  },
  {
    title: "A Novel Integrated Sensing and Communication Scheme in UAVs-Enabled Vehicular Networks with MARL-Driven Adaptive Control",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2025",
    note: "",
    image: asset("images/ANovelIntegratedSensing.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/11087623",
    authors: "Ziyuan Wang, Xiao-Ping Zhang, Wenbo Ding, Yuhan Dong, Xinlei Chen†"
  },
  /*
  Commented out after corresponding-author audit:
  the available PDF identifies Fan Dang as corresponding author.
  {
    title: "BlueKey: Exploiting Bluetooth Low Energy for Enhanced Physical-Layer Key Generation",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2025",
    note: "",
    image: asset("images/Bluekey.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/11134804",
    authors: "Yawen Zheng, Fan Dang, Zihao Yang, Jinyan Jiang, Xu Wang, Lin Wang, Kebin Liu, Xinlei Chen, Yunhao Liu"
  },
  */
  {
    title: "QUIDS: Quality-informed Incentive-driven Multi-agent Dispatching System for Mobile Crowdsensing",
    venue: "IEEE IoT-J",
    type: "Journal",
    year: "2026",
    note: "",
    image: asset("images/QUIDS.png"),
    link: "https://doi.org/10.1109/JIOT.2026.3651903",
    authors: "Nan Zhou, Zuxin Li, Fanhang Man, Xuecheng Chen, Susu Xu, Fan Dang, Xinlei Chen†"
  },
  {
    title: "Phy-APMR: A Physics-informed Air Pollution Map Reconstruction Approach with Mobile Crowd-sensing for Fine-grained Measurement",
    venue: "Building and Environment",
    type: "Journal",
    year: "2025",
    note: "",
    image: asset("images/Phy-APMR.png"),
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Ha8rlUgAAAAJ&sortby=pubdate&citation_for_view=Ha8rlUgAAAAJ:XiVPGOgt02cC",
    authors: "Rongye Shi*, Ji Luo*, Nan Zhou, Yuxuan Liu, Chaopeng Hong, Xiao-Ping Zhang, Xinlei Chen†"
  },
  {
    title: "MR-COGraphs: Communication-efficient Multi-Robot Open-vocabulary Mapping System via 3D Scene Graphs",
    venue: "IEEE RA-L",
    type: "Journal",
    year: "2025",
    note: "",
    image: asset("images/MR-CPGraphs.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/10966246",
    authors: "Qiuyi Gu*, Zhaocheng Ye*, Jincheng Yu, Jiahao Tang, Tinghao Yi, Yuhan Dong, Jian Wang, Jinqiang Cui, Xinlei Chen†, Yu Wang"
  },
  {
    title: "SmartSpr: A Physics-informed Mobile Sprinkler Scheduling System for Reducing Urban Particulate Matter Pollution",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2025",
    note: "CCF-A, SCI Q1, IF:7.7",
    image: asset("images/SmartSpr.png"),
    link: "https://ieeexplore.ieee.org/iel8/7755/4358975/10944224.pdf",
    authors: "Ji Luo, Zijian Xiao, Zuxin Li, Xuecheng Chen, Chaopeng Hong, Xiao-Ping Zhang, Xinlei Chen†"
  },
  {
    title: "CatUA: Catalyzing Urban Air Quality Intelligence through Mobile Crowd-sensing",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2025",
    note: "CCF-A, SCI Q1, IF:7.7",
    image: asset("images/CatUA.png"),
    link: "https://ieeexplore.ieee.org/document/10962560",
    authors: "Nan Zhou*, Yuxuan Liu*, Haoyang Wang*, Fanhang Man, Jingao Xu, Fan Dang, Chaopeng Hong, Yunhao Liu, Xiao-Ping Zhang, Xinlei Chen†"
  },
  {
    title: "DDL: Empowering Delivery Drones With Large-Scale Urban Sensing Capability",
    venue: "IEEE J-STSP",
    type: "Journal",
    year: "2024",
    note: "",
    image: asset("images/DDL_JSTSP.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/10605737",
    authors: "Xuecheng Chen*, Haoyang Wang*, Yuhan Cheng, Haohao Fu, Yuxuan Liu, Fan Dang, Yunhao Liu, Jinqiang Cui, Xinlei Chen†"
  },
  {
    title: "SOScheduler: Toward Proactive and Adaptive Wildfire Suppression via Multi-UAV Collaborative Scheduling",
    venue: "IEEE IoT-J",
    type: "Journal",
    year: "2024",
    note: "",
    image: asset("images/SOScheduler.png"),
    link: "https://ieeexplore.ieee.org/document/10502270",
    authors: "Xuecheng Chen, Zijian Xiao, Yuhan Cheng, ChenChun Hsia, Haoyang Wang, Jingao Xu, Susu Xu, Fan Dang, Xiao-Ping Zhang, Yunhao Liu, Xinlei Chen†"
  },
  {
    title: "BEANet: An Energy-efficient BLE Solution for High-capacity Equipment Area Network",
    venue: "ACM TOSN",
    type: "Journal",
    year: "2024",
    note: "",
    image: asset("images/BEANet.png"),
    link: "https://dl.acm.org/doi/abs/10.1145/3641280",
    authors: "Yifan Xu, Fan Dang, Kebin Liu, Zhui Zhu, Xinlei Chen†, Xu Wang, Xin Miao, Haitian Zhao"
  },
  {
    title: "LSync: A Universal Timeline-Synchronizing Solution for Live Streaming",
    venue: "IEEE TON",
    type: "Journal",
    year: "2024",
    note: "",
    image: localAsset("images/lsync-ton-2024.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/10555015",
    authors: "Fan Dang, Yifan Xu, Rongwu Xu, Xinlei Chen†, Yunhao Liu"
  },
  {
    title: "Path Generation for Wheeled Robots Autonomous Navigation on Vegetated Terrain",
    venue: "IEEE RA-L",
    type: "Journal",
    year: "2023",
    note: "",
    image: localAsset("images/path-generation-ral-2023.png"),
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Ha8rlUgAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=Ha8rlUgAAAAJ:b0M2c_1WBrUC",
    authors: "Zhuozhu Jian*, Zejia Liu*, Haoyu Shao, Xueqian Wang, Xinlei Chen†, Bin Liang†"
  },
  {
    title: "A Wearable Low-power Collaborative Sensing System for High-quality SSVEP-BCI Signal Acquisition",
    venue: "IEEE IoT-J",
    type: "Journal",
    year: "2021",
    note: "",
    image: localAsset("images/wearable-ssvep-bci-2021.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/9542927/",
    authors: "Rui Na, Dezhi Zheng, Ying Sun, Mingzhe Han, Shuai Wang, Shuailei Zhang, Qianxin Hui, Xinlei Chen†, Jun Zhang, Chun Hu"
  },
  {
    title: "Ultralow-power Sensing Framework for Internet of Things: A Smart Gas Meter as a Case",
    venue: "IEEE IoT-J",
    type: "Journal",
    year: "2021",
    note: "",
    image: localAsset("images/ultralow-power-smart-gas-meter-2021.png"),
    link: "https://ieeexplore.ieee.org/document/9530553",
    authors: "Ziteng Wang, Chun Hu, Dezhi Zheng, Xinlei Chen†"
  },
  {
    title: "Adaptive Hybrid Model-enabled Sensing System (HMSS) for Mobile Fine-Grained Air Pollution Estimation",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2020",
    note: "",
    image: localAsset("images/hmss-tmc-2020.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/9241405/",
    authors: "Xinlei Chen†, Susu Xu, Xinyu Liu, Xiangxiang Xu, Hae Young Noh, Lin Zhang, Pei Zhang"
  },
  {
    title: "H-DrunkWalk: Collaborative and Adaptive Navigation for Heterogeneous MAV Swarm",
    venue: "ACM TOSN",
    type: "Journal",
    year: "2020",
    note: "",
    image: localAsset("images/h-drunkwalk-tosn-2020.png"),
    link: "https://dl.acm.org/doi/abs/10.1145/3382094",
    authors: "Xinlei Chen†, Carlos Ruiz, Sihan Zeng, Liyao Gao, Aveek Purohit, Stefano Carpin, Pei Zhang"
  },
  {
    title: "PAS: Prediction-based Actuation System for City-scale Ridesharing Vehicular Mobile Crowdsensing",
    venue: "IEEE IoT-J",
    type: "Journal",
    year: "2020",
    note: "",
    image: localAsset("images/pas-iotj-2020.png"),
    link: "https://ieeexplore.ieee.org/ielaam/6488907/9091956/8964368-aam.pdf",
    authors: "Xinlei Chen†, Susu Xu, Jun Han, Haohao Fu, Xidong Pi, Carlee Joe-Wong, Yong Li, Lin Zhang, Hae Young Noh, Pei Zhang"
  },
  {
    title: "QoE-Aware Wireless Video Communications for Emotion-Aware Intelligent Systems: A Multi-layered Collaboration Approach",
    venue: "Information Fusion",
    type: "Journal",
    year: "2019",
    note: "",
    image: localAsset("images/QoE-Aware.png"),
    link: "https://doi.org/10.1016/j.inffus.2018.06.007",
    authors: "Xinlei Chen†, Yulei Zhao, Yong Li"
  },
  {
    title: "CAP: Context-aware App Usage Prediction with Heterogeneous Graph Embedding",
    venue: "ACM IMWUT",
    type: "Journal",
    year: "2019",
    note: "",
    image: localAsset("images/CAP.png"),
    link: "https://doi.org/10.1145/3314391",
    authors: "Xinlei Chen†, Yu Wang, Jiayou He, Shijia Pan, Yong Li, Pei Zhang"
  },
  {
    title: "iLocus: Incentivizing Vehicle Mobility to Optimize Sensing Distribution in Crowd Sensing",
    venue: "IEEE TMC",
    type: "Journal",
    year: "2019",
    note: "",
    image: localAsset("images/ilocus-tmc-2019.png"),
    link: "https://ieeexplore.ieee.org/abstract/document/8712442",
    authors: "Susu Xu*, Xinlei Chen*†, Xidong Pi, Carlee Joe-Wong, Pei Zhang, Hae Young Noh"
  },
  {
    title: "Social Trust Aided D2D Communications: Performance Bound and Implementation Mechanism",
    venue: "IEEE JSAC",
    type: "Journal",
    year: "2018",
    note: "",
    image: localAsset("images/Social_Trust_Aided_D2D_Communications.png"),
    link: "https://doi.org/10.1109/jsac.2018.2825658",
    authors: "Xinlei Chen†, Yulei Zhao, Yong Li, Xu Chen, Ning Ge, Sheng Chen"
  },
  {
    title: "Large-Scale Mobile Fitness App Usage Analysis for Smart Health",
    venue: "IEEE Communications Magazine",
    type: "Journal",
    year: "2018",
    note: "",
    image: localAsset("images/Large-Scale_Mobile_Fitness.png"),
    link: "https://doi.org/10.1109/mcom.2018.1700807",
    authors: "Xinlei Chen†, Zheqi Zhu, Min Chen, Yong Li"
  },
  {
    title: "Design Experiences in Minimalistic Flying Sensor Node Platform through SensorFly",
    venue: "ACM TOSN",
    type: "Journal",
    year: "2017",
    note: "",
    image: localAsset("images/sensorfly-tosn-2017.png"),
    link: "https://dl.acm.org/doi/10.1145/3131779",
    authors: "Xinlei Chen†, Aveek Purohit, Shijia Pan, Carlos Ruiz, Jun Han, Zheng Sun, Frank Mokaya, Patric Tague, Pei Zhang"
  }];

const awards = [
  "[2025] <strong>Silver Prize</strong>, the 50th International Exhibition of Inventions Geneva.",
  "[2023] <strong>Best Paper Award</strong>, ACM UbiComp CPD Workshop.",
  "[2022] <strong>National Overseas Early Career Award</strong>, National Science Foundation of China.",
  "[2017] <strong>Best Poster Award</strong>, ACM/IEEE International Conference on Information Processing in Sensor Networks.",
  "[2016] <strong>Best Demo Award</strong>, ACM Conference on Embedded Networked Sensor Systems.",
  "[2016] <strong>Best Poster Runner Up Award</strong>, ACM Conference on Embedded Networked Sensor Systems.",
  "[2013] <strong>Dean Fellowship</strong>, Carnegie Mellon University.",
  "[2012] <strong>Excellent Master Thesis Award</strong>, Tsinghua University."
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
      toggle.textContent = "Show more";
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
                      ? `<video src="${item.media}" muted loop autoplay playsinline controls preload="auto"></video>`
                      : `<img src="${item.media}" alt="${item.title}">`;

                  return `
                    <article class="project-card">
                      <div class="project-media">${media}</div>
                      <div class="project-body">
                        <div class="project-meta-row">
                          <span class="project-venue">${item.venue}</span>
                          ${
                            item.link
                              ? `<a class="project-paper-link" href="${item.link}" target="_blank" rel="noreferrer">Paper</a>`
                              : ""
                          }
                        </div>
                        <h3>${item.title}</h3>
                        <p>${item.text}</p>
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
    <article class="publication-item" data-type="${item.type}" data-year="${item.year}">
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
  const typeFilters = ["All", "Conference", "Journal"];
  const yearFilters = [
    "All years",
    ...[...new Set(publications.map((item) => item.year).filter(Boolean))].sort(
      (a, b) => Number(b) - Number(a)
    )
  ];

  renderHtml(
    filterHost,
    `
      <div class="filter-group" aria-label="Publication type filter">
        <span class="filter-label">Type</span>
        ${typeFilters
          .map(
            (filter, index) =>
              `<button type="button" class="${index === 0 ? "active" : ""}" data-filter-group="type" data-filter="${filter}">${filter}</button>`
          )
          .join("")}
      </div>
      <div class="filter-group" aria-label="Publication year filter">
        <span class="filter-label">Year</span>
        ${yearFilters
          .map(
            (filter, index) =>
              `<button type="button" class="${index === 0 ? "active" : ""}" data-filter-group="year" data-filter="${filter}">${filter}</button>`
          )
          .join("")}
      </div>
    `
  );

  renderHtml(list, publications.map(publicationMarkup).join(""));

  filterHost.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const group = button.dataset.filterGroup;
    filterHost
      .querySelectorAll(`button[data-filter-group="${group}"]`)
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const activeType = filterHost.querySelector('button[data-filter-group="type"].active').dataset.filter;
    const activeYear = filterHost.querySelector('button[data-filter-group="year"].active').dataset.filter;

    list.querySelectorAll(".publication-item").forEach((item) => {
      const matchesType = activeType === "All" || item.dataset.type === activeType;
      const matchesYear = activeYear === "All years" || item.dataset.year === activeYear;
      const shouldShow = matchesType && matchesYear;
      item.classList.toggle("is-filtered-out", !shouldShow);
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
  // Research section is temporarily hidden until the content is finalized.
  // renderResearch();
  renderProjects();
  renderPublications();
  renderSimpleList("#award-list", awards);
  renderSimpleList("#service-list", services);
  renderSimpleList("#teaching-list", teaching);
  setupActiveNavigation();
}

document.addEventListener("DOMContentLoaded", init);
