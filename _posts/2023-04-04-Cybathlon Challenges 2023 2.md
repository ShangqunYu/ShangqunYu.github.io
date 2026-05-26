---
layout: post 
title: Preparation of the CYBATHLON Challenges 2023 (2)
description: Development components for task 2
date: 2023-04-04
tags: cybathlon human-computer-interaction computer-vision object-detection

authors:
  - name: Hochul Hwang
    url: "https://hchlhwang.github.io"
    affiliations:
      name: DARoS, UMass Amherst

# bibliography: 2018-12-22-distill.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Task 2
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Vision Assistive Race 
  - name: Tasks
  - name: Team
  # - name: Code Blocks


# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }

---

## Task 2. Serving Food

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/blog/cybathlon/task2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Task 2: Serving food
</div>

The aim of this task is to 1) pour water to a designated level, 2) carry & balance a tray having a bowl and glass filled with water, 3) move to the second table on the side where there are no utensils, 4) and place the bowl and glass without touching the utensils. 

It is critical to understand the scene and to provide proper commands to the pilot to complete the subtasks in task 2. To understand the scene, vision-based deep learning models were utilized and vibration signals were implmented to provide feedback to the pilot. 

***

## Pouring water 

We utilized a scale to measure the desired amound of water poured into the cup and when there are enough water poured, the vibration motors attached to the pilot's stopped vibratiing.

***

## Deciding the target location

The objective of this subtask is to move to the target location where there are no utensils on the table. First, to determine the correct direction (right or left), [YOLOv8](https://github.com/ultralytics/ultralytics) is utilized to extract the bounding box of the dining table. Then, I compared the center $x$ position of the dining table and the $x$ position of the averaged red pixels and decide the desired direction as the logic below:

{% highlight c++ linenos %}
if (tableX > redX){
  // Utensil is on left of the table
  // Move to right 
} else {
  // Utensil is on right of the table
  // Move to left
} 
{% endhighlight linenos %}


When the desired direction is determined, the red object detection function (Python) publishes an [LCM](http://lcm-proj.github.io/lcm/) message to the navigation code (C++). The following video indicates the desired direction on the top left corner in red text while the bounding box of the dining table is in blue and average position of the red objects are in green.

<iframe width="640" height="360"
src="https://www.youtube.com/embed/h8slOW101kk">
</iframe>

***

## Balancing the tray

Task 1: Sidewalk. The aim is to reach the end line without bumping into any obstacles.

***

## Placing bowl and glass

I finetuned [YOLOv8](https://github.com/ultralytics/ultralytics) on our dataset collected in various viewpoints, light settings, and backgrounds. Based on the bounding boxes obtained during inference, the desired direction of placing the bowl was determined. This direction was then conveyed to the pilot via haptic feedback via vibration motors. 

<iframe width="640" height="360"
src="https://www.youtube.com/embed/bjo3fgSEHGo">
</iframe>

***

## Thanks

Thankfully, the recruitment process was relatively smooth. We have two incredible pilots (with great atheletic abilities) and one guide dog trainer. We also have great faculty members joining. Finally, we have wonderful members for developing hardware, software, and conducting experiments. Always thankful for everyone. Especially, thankful for my advisor for the support. 


<!-- *** -->
