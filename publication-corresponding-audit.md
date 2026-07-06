# Publication Corresponding-Author Audit

Scope: audit publications shown on the homepage so the rendered list focuses on papers where Xinlei Chen is a corresponding author. Non-corresponding entries are commented out in `script.js`, not deleted.

Legend:
- `keep`: already marked or verified as Xinlei Chen corresponding author.
- `add`: verified missing item added to the homepage list.
- `comment_out`: preserved in code comments, hidden from the rendered page.
- `needs_review`: evidence is mixed or incomplete; no such item was force-added.

## Evidence Sources Used

- Current legacy homepage `https://chen-xinlei.com/`, which states `†: Corresponding author`.
- Tsinghua SIGS profile `https://www.sigs.tsinghua.edu.cn/cxl_en/main.htm`, where selected publications use `*` for corresponding authors in several older entries.
- AnySearch search/extract results from DOI, publisher, arXiv HTML, and PDF-indexed pages.
- DOI/PDF pages were preferred over aggregator snippets when they explicitly stated corresponding authors.

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

## Commented Out

| Title | Reason |
| --- | --- |
| How Far Are Large Multimodal Models from Human-Level Spatial Action? A Benchmark for Goal-Oriented Embodied Navigation in Urban Airspace | Searched arXiv and web results; no source found identifying Xinlei Chen as corresponding author. |
| iWorld-Bench: A Benchmark for Interactive World Models with a Unified Action Generation Framework | Project/arXiv/ICML pages list authors but no corresponding-author evidence for Xinlei Chen. |
| BlueKey: Exploiting Bluetooth Low Energy for Enhanced Physical-Layer Key Generation | PDF states Fan Dang is the corresponding author. Both conference and journal entries were hidden. |
| StreamingTag: A Scalable Piracy Tracking Solution for Mobile Streaming Services | Current author list marks other authors with `†`, not Xinlei Chen. |
| LSync conference and journal entries | No source found identifying Xinlei Chen as corresponding author. |
| DrunkWalk: Collaborative and Adaptive Planning for Navigation of Micro-Aerial Sensor Swarms | Current legacy author list marks Pei Zhang, not Xinlei Chen, as corresponding author. |
| A Novel Integrated Sensing and Communication Scheme in UAVs-Enabled Vehicular Networks with MARL-Driven Adaptive Control | No source found identifying Xinlei Chen as corresponding author. |
| BEANet: An Energy-efficient BLE Solution for High-capacity Equipment Area Network | No source found identifying Xinlei Chen as corresponding author. |
| Path Generation for Wheeled Robots Autonomous Navigation on Vegetated Terrain | DOI result identifies Zhuozhu Jian as corresponding author, not Xinlei Chen. |

## Not Added

| Title | Reason |
| --- | --- |
| SniffySquad: Patchiness-Aware Gas Source Localization with Multi-Robot Collaboration | DOI result identifies Yuhan Cheng as corresponding author; not added. |
| Event Camera Meets Mobile Embodied Perception: Abstraction, Algorithm, Acceleration, Application | Current homepage marks Xinlei Chen as corresponding author; kept as-is, but aggregator result marks Haoyang Wang. If the publisher final version should override the homepage, this needs manual confirmation. |
| QUIDS and STeP-Diff | Current homepage marks Xinlei Chen as corresponding author; kept as-is, but aggregator snippets did not always mark Xinlei Chen. Manual confirmation recommended if strict publisher-only evidence is required. |
| SmartSpr | Current homepage marks Xinlei Chen as corresponding author; kept as-is, but aggregator snippets mark Ji Luo. Manual confirmation recommended if strict publisher-only evidence is required. |
