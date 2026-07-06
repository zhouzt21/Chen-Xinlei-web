# Publication Corresponding-Author Audit

Scope: audit publications shown on the homepage so the rendered list focuses on papers where Xinlei Chen is a corresponding author. Non-corresponding entries are commented out in `script.js`, not deleted.

Legend:
- `keep`: already marked or verified as Xinlei Chen corresponding author.
- `add`: verified missing item added to the homepage list.
- `comment_out`: preserved in code comments, hidden from the rendered page.
- `manual_confirm`: manually confirmed by the requester as Xinlei Chen corresponding author.
- `needs_review`: evidence is mixed or incomplete; no such item was force-added.

## Evidence Sources Used

- Current legacy homepage `https://chen-xinlei.com/`, which states `†: Corresponding author`.
- Tsinghua SIGS profile `https://www.sigs.tsinghua.edu.cn/cxl_en/main.htm`, where selected publications use `*` for corresponding authors in several older entries.
- AnySearch search/extract results from DOI, publisher, arXiv HTML, and PDF-indexed pages.
- DOI/PDF pages were preferred over aggregator snippets when they explicitly stated corresponding authors.
- Manual confirmation from the requester on 2026-07-06 for entries whose corresponding-author status should override earlier audit uncertainty.

## Added Or Re-marked As Xinlei Chen Corresponding Author

| Action | Title | Evidence |
| --- | --- | --- |
| add | mmE-Loc: Facilitating Accurate Drone Landing with Ultra-High-Frequency Localization | arXiv/PDF states `Corresponding author: Xinlei Chen`; DOI `10.1109/tmc.2026.3666235`. |
| keep, re-mark | PGA: Physics Guided and Adaptive Approach for Mobile Fine-Grained Air Pollution Estimation | AnySearch DOI result lists Xinlei Chen as corresponding author. |
| keep, re-mark | Adaptive Hybrid Model-enabled Sensing System (HMSS) for Mobile Fine-Grained Air Pollution Estimation | AnySearch DOI result lists Xinlei Chen as corresponding author. |
| keep, re-mark | H-DrunkWalk: Collaborative and Adaptive Navigation for Heterogeneous MAV Swarm | AnySearch DOI result lists Xinlei Chen as corresponding author. |
| keep, re-mark | PAS: Prediction-based Actuation System for City-scale Ridesharing Vehicular Mobile Crowdsensing | PDF states `Corresponding Author: Xinlei Chen`; DOI result agrees. |
| keep, re-mark | iLocus: Incentivizing Vehicle Mobility to Optimize Sensing Distribution in Crowd Sensing | PDF states `Corresponding author: Xinlei Chen`; SIGS profile marks Chen with `*`. |
| keep, re-mark | Design Experiences in Minimalistic Flying Sensor Node Platform through SensorFly | AnySearch DOI result lists Xinlei Chen as corresponding author. |
| add | QoE-Aware Wireless Video Communications for Emotion-Aware Intelligent Systems: A Multi-layered Collaboration Approach | SIGS selected publications mark `Chen, X.*`; ScienceDirect confirms publication metadata. |
| add | CAP: Context-aware App Usage Prediction with Heterogeneous Graph Embedding | DOI result lists Xinlei Chen as corresponding author. |
| add | Social Trust Aided D2D Communications: Performance Bound and Implementation Mechanism | DOI result lists Xinlei Chen as corresponding author. |
| add | Large-Scale Mobile Fitness App Usage Analysis for Smart Health | DOI result lists Xinlei Chen as corresponding author. |
| keep, manual_confirm | How Far Are Large Multimodal Models from Human-Level Spatial Action? A Benchmark for Goal-Oriented Embodied Navigation in Urban Airspace | Requester confirmed Xinlei Chen is corresponding author; entry restored on the homepage. |
| keep, manual_confirm | iWorld-Bench: A Benchmark for Interactive World Models with a Unified Action Generation Framework | Requester confirmed Xinlei Chen is corresponding author; entry restored on the homepage. |
| keep, manual_confirm | LSync: A Universal Event-Synchronizing Solution for Live Streaming | Requester confirmed Xinlei Chen is corresponding author; conference and journal entries restored on the homepage. |
| keep, manual_confirm | DrunkWalk: Collaborative and Adaptive Planning for Navigation of Micro-Aerial Sensor Swarms | Requester confirmed Xinlei Chen is corresponding author; entry restored on the homepage. |
| keep, manual_confirm | A Novel Integrated Sensing and Communication Scheme in UAVs-Enabled Vehicular Networks with MARL-Driven Adaptive Control | Requester confirmed Xinlei Chen is corresponding author; entry restored on the homepage. |
| keep, manual_confirm | BEANet: An Energy-efficient BLE Solution for High-capacity Equipment Area Network | Requester confirmed Xinlei Chen is corresponding author; entry restored on the homepage. |
| keep, manual_confirm | Path Generation for Wheeled Robots Autonomous Navigation on Vegetated Terrain | Requester confirmed Xinlei Chen is corresponding author; entry restored on the homepage. |
| keep, manual_confirm | Event Camera Meets Mobile Embodied Perception: Abstraction, Algorithm, Acceleration, Application | Requester confirmed Xinlei Chen is corresponding author; kept on the homepage. |
| keep, manual_confirm | QUIDS: Quality-informed Incentive-driven Multi-agent Dispatching System for Mobile Crowdsensing | Requester confirmed Xinlei Chen is corresponding author; kept on the homepage. |
| keep, manual_confirm | STeP-Diff: Spatio-Temporal Physics-Informed Diffusion Models for Mobile Fine-Grained Pollution Forecasting | Requester confirmed Xinlei Chen is corresponding author; kept on the homepage. |
| keep, manual_confirm | SmartSpr: A Physics-informed Mobile Sprinkler Scheduling System for Reducing Urban Particulate Matter Pollution | Requester confirmed Xinlei Chen is corresponding author; kept on the homepage. |

## Commented Out

| Title | Reason |
| --- | --- |
| BlueKey: Exploiting Bluetooth Low Energy for Enhanced Physical-Layer Key Generation | PDF states Fan Dang is the corresponding author. Both conference and journal entries were hidden. |
| StreamingTag: A Scalable Piracy Tracking Solution for Mobile Streaming Services | Current author list marks other authors, not Xinlei Chen, as corresponding authors. |

## Not Added

| Title | Reason |
| --- | --- |
| SniffySquad: Patchiness-Aware Gas Source Localization with Multi-Robot Collaboration | DOI result identifies Yuhan Cheng as corresponding author; not added. |
