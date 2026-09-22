---
layout: page
title: Dash
permalink: /Dash/
description: An 18-DoF open-source humanoid robot developed from scratch — custom motor controller design, firmware, communication architecture, and RL policy deployment.
---

## Overview

Dash is an open-source humanoid robot platform developed independently from the ground up, spanning custom actuator electronics through learned locomotion control deployed on hardware. The system integrates a custom-designed motor controller and communication architecture, firmware, and a reinforcement-learning-based control stack into a single, fully open humanoid platform.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/dash/robot.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dash, an 18-DoF open-source humanoid robot.
</div>

### Specifications

| | |
|---|---|
| Height | 110 cm |
| Weight | 35 kg |
| Degrees of freedom | 18 total — 5 DoF per leg, 4 DoF per arm |
| Actuation | Cross-roller bearing motors at the shoulder pitch, hip, and knee joints for high dynamic motion and heavy payload handling |
| Electronics | Fully open-source design, including custom motor controller PCB and firmware |

---

## Motor Controller & Communication Board

The motor controller and communication board form the electrical backbone of the robot, providing closed-loop actuator control and a communication bus linking every joint to the central compute.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/dash/motorControllerBoard.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/dash/ComBoard.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: custom motor controller board. Right: communication board.
</div>

### Motor Controller Specifications

Designed to an ODrive Pro-level specification:

| | |
|---|---|
| Voltage input | 12–54 V (tested) |
| Control loop frequency | 40 kHz |
| PWM switching frequency | 40 kHz |
| Communication | CAN 2.0 |
| Position sensing | 14-bit onboard encoder, with external encoder support via SPI |
| Thermal protection | NTC thermistor sensing |

---

## Firmware

The firmware running on each motor controller handles low-level commutation, current sensing, and closed-loop torque and position control, and exposes the CAN interface used for coordination across the robot.

---

## Motor Testing

Each motor and controller pair was bench-tested in isolation to validate control performance before integration onto the robot.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/dash/motorControl.gif" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Bench testing a motor with the custom controller and firmware.
</div>

---

## Robot Integration

With all motors validated individually, they were integrated onto the robot frame and brought up as a complete system.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/dash/integrationTest.gif" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Integration testing of all motors on the assembled robot.
</div>

---

## RL Policy Deployment

A reinforcement-learning locomotion policy was deployed onto the physical robot, closing the loop from custom electronics to learned control.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/dash/policyDeployment.gif" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    RL locomotion policy deployed on the physical Dash robot.
</div>
