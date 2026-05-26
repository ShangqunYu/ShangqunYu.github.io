---
layout: page
title: Projects
permalink: /project/
description: Research projects in Robotics (perception, planning, and control) and HRI for assistive technology.
nav: true
nav_order: 1
---

<style>
  .project-grid .card.hoverable { height: 100%; transition: transform .2s ease, box-shadow .2s ease; }
  .project-grid a { text-decoration: none; }
  .project-grid .card-img-top { height: 180px; width: 100%; object-fit: cover; }
  .project-grid .card-title { font-size: 1.05rem; margin-bottom: .35rem; }
  .project-grid .card-text { font-size: .85rem; color: var(--global-text-color-light); margin-bottom: 0; }
  .project-section-title { color: var(--global-theme-color); border-bottom: 2px solid var(--global-divider-color); padding-bottom: .3rem; margin-top: 2rem; }
</style>

<h2 class="project-section-title">Assistive Robotics for the Blind &amp; Low-Vision People</h2>

<div class="row project-grid">
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="https://guidedogrobot-navigation.github.io" target="_blank" rel="noopener">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/hri-final.gif' | relative_url }}" class="card-img-top" alt="GuideNav">
        <div class="card-body">
          <h3 class="card-title">GuideNav: Vision-Only Long-Range Route Following 🏆</h3>
          <p class="card-text">Robust visual teach-and-repeat for kilometer-scale route following using only images.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="https://guidedogrobot-hgidataset.github.io" target="_blank" rel="noopener">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/chi24.png' | relative_url }}" class="card-img-top" alt="GuideData">
        <div class="card-body">
          <h3 class="card-title">GuideData: Handler-Guide Dog Interaction Dataset 🏆</h3>
          <p class="card-text">A dataset capturing interactions between handlers and guide dogs for guide dog robot design implications.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="https://guidedogrobot-tactile.github.io/" target="_blank" rel="noopener">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/tactile26.gif' | relative_url }}" class="card-img-top" alt="GuideTWSI">
        <div class="card-body">
          <h3 class="card-title">GuideTWSI: Stopping at Tactile Pavings 🏆</h3>
          <p class="card-text">Synthetic TWSI data generation for tactile paving segmentation and stopping.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="https://guidedogrobot-stairclimbing.github.io" target="_blank" rel="noopener">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/locomotion25.gif' | relative_url }}" class="card-img-top" alt="Quiet and Stable Locomotion Control">
        <div class="card-body">
          <h3 class="card-title">Quiet and Stable Locomotion Control</h3>
          <p class="card-text">Stable and low-noise locomotion controller for quiet walking and smooth stair climbing.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="https://guidedogrobot-obstacleavoid.github.io" target="_blank" rel="noopener">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/icra23.gif' | relative_url }}" class="card-img-top" alt="System Integration & Obstacle Avoidance">
        <div class="card-body">
          <h3 class="card-title">System Integration &amp; Obstacle Avoidance</h3>
          <p class="card-text">Guide dog robot configuration and semantics-aware local path planning.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="{{ '/SToP/' | relative_url }}">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/rita24.png' | relative_url }}" class="card-img-top" alt="SToP Dataset">
        <div class="card-body">
          <h3 class="card-title">The Synthetic Tactile-on-Paving (SToP) Dataset</h3>
          <p class="card-text">Unreal Engine-based synthetic data augmentation for tactile paving detection.</p>
        </div>
      </div>
    </a>
  </div>
</div>

<h2 class="project-section-title">Competitions</h2>

<div class="row project-grid">
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="{{ '/Cybathlon/' | relative_url }}">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/ava25.png' | relative_url }}" class="card-img-top" alt="CYBATHLON Vision Assistance Race 2023">
        <div class="card-body">
          <h3 class="card-title">CYBATHLON Vision Assistance Race 2023</h3>
          <p class="card-text">Solving real-world problems for blind and low-vision people.</p>
        </div>
      </div>
    </a>
  </div>
</div>

<h2 class="project-section-title">Other Research</h2>

<div class="row project-grid">
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="{{ '/AvoidEvent/' | relative_url }}">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/iros-w.gif' | relative_url }}" class="card-img-top" alt="Event Cameras for Dynamic Obstacle Avoidance">
        <div class="card-body">
          <h3 class="card-title">Event Cameras for Dynamic Obstacle Avoidance</h3>
          <p class="card-text">Highly dynamic obstacle detection using event cameras.</p>
        </div>
      </div>
    </a>
  </div>
  <div class="col-sm-6 col-lg-4 mb-4">
    <a href="{{ '/Eldercare/' | relative_url }}">
      <div class="card hoverable">
        <img src="{{ '/assets/img/publication_preview/access21.gif' | relative_url }}" class="card-img-top" alt="ElderSim">
        <div class="card-body">
          <h3 class="card-title">ElderSim</h3>
          <p class="card-text">A synthetic data generation platform for human action recognition in eldercare applications.</p>
        </div>
      </div>
    </a>
  </div>
</div>
