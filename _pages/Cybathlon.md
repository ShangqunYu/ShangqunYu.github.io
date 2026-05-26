---
layout: page
title: CYBATHLON Challenges 2023
permalink: /Cybathlon/
description: Vision Assistance Race
---

## Overview

[CYBATHLON](https://cybathlon.ethz.ch/en), organized by ETH Zurich, challenges teams worldwide to develop assistive technologies for people with disabilities. I led team **FlashLight** in the Vision Assistance Race at CYBATHLON Challenges 2023 — the inaugural year for this discipline.

---

## Tasks

The Vision Assistance Race consisted of two tasks designed for blind or visually impaired pilots:

**Task 1: Sidewalk Navigation** — Navigate to the end line without bumping into any obstacles.

**Task 2: Serving Food** — Pour water to a designated level, carry a balanced tray with bowl and glass, and place items without touching existing utensils.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/blog/cybathlon/task1.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/blog/cybathlon/task2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Two tasks for the Vision Assistance Race in CYBATHLON Challenges 2023.
</div>

---

## Technical Approach

### Scene Understanding
We utilized [YOLOv8](https://github.com/ultralytics/ultralytics) for object detection to understand the scene and determine navigation commands.

### Haptic Feedback
Vibration motors provided real-time feedback to the pilot, conveying spatial information and navigation commands.

### Target Location Detection
For Task 2, we detected the dining table bounding box and compared it with utensil positions to determine the correct placement direction.

<iframe width="560" height="315" src="https://www.youtube.com/embed/h8slOW101kk" frameborder="0" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/bjo3fgSEHGo" frameborder="0" allowfullscreen></iframe>

---

## Results

We placed 2nd out of 2 teams in the Vision Assistance Race. As the inaugural year for this discipline, participation was limited, but the experience provided valuable insights into developing assistive technology under competition constraints.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/blog/cybathlon/results.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Watch the full competition video on the [official CYBATHLON website](https://cybathlon.ethz.ch/en/events/challenges/Challenges-2023).

---

## Team

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/blog/cybathlon/team.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    FlashLight team
</div>

Our team included pilots with visual impairments, a guide dog trainer, faculty members, and students developing hardware and software. Team name [FlashLight](https://cybathlon.ethz.ch/en/teams/flash-light) — lighting up the path for blind or visually impaired individuals.

---

## Takeaways

- Competition solutions differ from real-world deployments — heuristic methods may work in controlled settings but lack robustness.
- Simplicity is key — our multi-sensor system added complexity that was difficult to optimize under time constraints.
- User feedback matters — pilots noted some tasks had limited real-world relevance.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WwXPCI1apZk" frameborder="0" allowfullscreen></iframe>
