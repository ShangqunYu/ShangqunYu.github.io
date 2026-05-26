---
layout: page
# title: VisionADL
permalink: /AvoidEvent/
# description: A growing collection of your cool projects.
# nav: true
# nav_order: 2
---

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>VisionADL</title>

    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <!-- <script type="text/javascript" src="jquery.mlens-1.0.min.js"></script> -->
    <!-- <script type="text/javascript" src="jquery.js"></script> -->
    <style>
        body {
            font-family: 'Open-Sans', sans-serif;
            font-weight: 300;
            background-color: #fff;
        }

        .content {
            width: 1000px;
            padding: 25px 50px;
            margin: 25px auto;
            background-color: white;
            box-shadow: 0px 0px 10px #999;
            border-radius: 15px;
        }

        .contentblock {
            width: 950px;
            margin: 0 auto;
            padding: 0;
            border-spacing: 25px 0;
        }

        .contentblock td {
            background-color: #fff;
            padding: 25px 50px;
            vertical-align: top;
            box-shadow: 0px 0px 10px #999;
            border-radius: 15px;
        }

        a,
        a:visited {
            color: #224b8d;
            font-weight: 300;
        }

        #authors {
            text-align: center;
            margin-bottom: 20px;
        }

        #conference {
            text-align: center;
            margin-bottom: 20px;
            font-style: italic;
        }

        #authors a {
            margin: 0 10px;
        }

        h1 {
            text-align: center;
            font-size: 35px;
            font-weight: 300;
        }

        h2 {
            font-size: 30px;
            font-weight: 300;
        }

        code {
            display: block;
            padding: 10px;
            margin: 10px 10px;
        }

        p {
            line-height: 25px;
            text-align: justify;
        }

        p code {
            display: inline;
            padding: 0;
            margin: 0;
        }

        #teasers {
            margin: 0 auto;
        }

        #teasers td {
            margin: 0 auto;
            text-align: center;
            padding: 5px;
        }

        #teasers img {
            width: 250px;
        }

        #results img {
            width: 133px;
        }

        #seeintodark {
            margin: 0 auto;
        }

        #sift {
            margin: 0 auto;
        }

        #sift img {
            width: 250px;
        }

        .downloadpaper {
            padding-left: 20px;
            float: right;
            text-align: center;
        }

        .downloadpaper a {
            font-weight: bold;
            text-align: center;
        }

        #demoframe {
            border: 0;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 340px;
        }

        #feedbackform {
            border: 1px solid #ccc;
            margin: 0 auto;
            border-radius: 15px;
        }

        #eyeglass {
            height: 530px;
        }

        #eyeglass #wrapper {
            position: relative;
            height: auto;
            margin: 0 auto;
            float: left;
            width: 800px;
        }

        #mitnews {
            font-weight: normal;
            margin-top: 20px;
            font-size: 14px;
            width: 220px;
        }

        #mitnews a {
            font-weight: normal;
        }

        .teaser-img {
            width: 80%;
						display: block;
						margin-left: auto;
						margin-right: auto;
        }
        .teaser-gif {
						display: block;
						margin-left: auto;
						margin-right: auto;
        }
        .summary-img {
            width: 100%;
						display: block;
						margin-left: auto;
						margin-right: auto;
        }

        .video-iframe {
            width: 1000;
            height: 800;
						margin:auto;
						display:block;
        }

      .container {
        display: flex;
        align-items: center;
        justify-content: center
      }
      .image {
        flex-basis: 40%
      }
      .text {
        font-size: 20px;
        padding-left: 20px;
      }
			.center {
				margin-left: auto;
				margin-right: auto;
			}
			.boxshadow {
				border: 1px solid;
				padding: 10px;
				box-shadow: 2px 2px 5px #888888;
			}
			.spacertr{
				height: 8px;
			}
			.spacertd{
				width: 40px;
			}

    </style>
    <!-- Global site tag (gtag.js) - Google Analytics -->
		<!--
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-98008272-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-98008272-2');
    </script>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML">
    </script>
		-->

</head>

<body>

    <div class="content">
			<h1>Event-based highly dynamic obstacle avoidance</h1>
        <p id="authors">
            Shifan Zhu
            <a href="https://hchlhwang.github.io/">Hochul Hwang</a>
            Shangqun Yu
            <br>
            DARoS Lab @ UMass Amherst
            <br><i>COMPSCI 670</i>
        </p>
				<font size="+2">
					<p style="text-align: center;">
						<a href="/assets/pdf/670_Proposal.pdf" target="_blank">[Paper]</a> &nbsp;&nbsp;&nbsp;&nbsp;
						<a href="https://github.com/DARoSLab/DynamicObjectsAvoidance" target="_blank">[Code]</a> &nbsp;&nbsp;&nbsp;&nbsp;
						<a href="/assets/pdf/670_Final_Poster.pdf" target="_blank">[Poster]</a>
					</p>
				</font>
				<font size="+1">
				</font>
        <br>

        <a href="/assets/img/eventAvoid/eventAvoidVid.mp4"><img class='summary-img' src='/assets/img/eventAvoid/eventAvoidVid.mp4' style='width:70%;'></a>
        <br>
        <br>

		<p id="abstract"><strong>Abstract: </strong>
        Recent development in the robotics community enabled legged robots to maneuver agilely in complex environments. However, having these dynamic systems to avoid fast-moving obstacles in daily living scenarios is still a remaining challenge that limits deployment in real-world applications. Especially, although accurate detection of highly dynamic obstacles under dynamic robot motions is critical for successful obstacle avoidance, this problem is complex and challenging due to motion blur and the high latency of traditional image sensors. More recently, event cameras have shown great potential in alleviating relevant issues. In this paper, we propose a dynamic obstacle avoidance framework that consists of dynamic obstacle detection and trajectory prediction algorithms without using other sensors, such as depth cameras. Firstly, we present an accurate dynamic obstacle detection and tracking algorithm based on threshold event data. We then utilize Random sample consensus (RANSAC) to track and predict the trajectory of the obstacle positions in 2D pixel coordinates. Finally, we introduce our avoidance framework that operates with predicted 2D obstacle positions. We perform extensive real-world experiments to validate our avoidance framework which performs $61.9\%$ of obstacle avoidance success rate of a kicked ball. Our code and video are publicly available.
				</p>
        <br clear="all">
    </div>
    <div class="content" id="summary">

        <h2 style="text-align:center;">Summary</h2>

        <p style="text-align: center;">The overall pipeline of our framework is illustrated in the image below. Our cascaded framework consists of multiple steps: event data accumulation, data denoising, obstacle detection and tracking, trajectory prediction, and robot control. We first accumulate the sparse events to support obstacle detection in the next few steps. We then implement an event image denoising algorithm to filter out background noise. Then, the dynamic obstacle detection algorithm is introduced to segment dynamic objects. Based on the sequence of dynamic obstacle positions, we calculate the obstacle direction and predict its future trajectory. The trajectory prediction is converted to y-axis velocity commands which are provided to the robot to avoid the dynamic obstacle.
        </p>
        <img class='summary-img' src='/assets/img/eventAvoid/scheme.png' style="width:80%;">
        <br>
        <hr>
        <p style="text-align: center;">System configuration of the Unitree Go1 robot and the event camera is shown below. The Intel RealSense Depth Camera D455 was only used to visualize the robot-perspective viewpoint and not used for the obstacle avoidance framework.
</p>
        <img class='summary-img' src='/assets/img/eventAvoid/setup.png' style="width:30%;">
        <br>
        <hr>
        <!-- <p style="text-align: center;">Our experimental results are recorded below (click for video).   -->
        
		<br>
   
    <div class="content2" id="summary">

        <h2 style="text-align:center;">Experimental Results</h2>

        <p style="text-align: center;">Preliminary results of the feature-based obstacle detection algorithm are shown sequentially in the figure. The red circle depicted in the first row indicates the prediction of the obstacle position. We can observe in the figure that traditional frame-based methods (RGB) may suffer from motion blur and latency.
        </p>
        <img class='summary-img' src='/assets/img/eventAvoid/f3.png' style="width:100%;">
        <br>
        <hr>
        