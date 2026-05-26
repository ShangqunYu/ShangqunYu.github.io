---
layout: page
# title: VisionADL
permalink: /Eldercare/
# description: A growing collection of your cool projects.
# nav: true
# nav_order: 2
---

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Eldercare</title>

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
			<h1>ElderSim: A synthetic data generation platform for human action recognition in eldercare applications</h1>
        <p id="authors">
            <a href="https://hchlhwang.github.io/">Hochul Hwang</a>
            Cheongjae Jang 
            Geonwoo Park
            <a href="https://junghyuncho.notion.site/Junghyun-Cho-36f85eff362148dab9e23e6628fe3551">Junghyun Cho</a>
            <a href="https://sites.google.com/view/ijkim">Ig-Jae Kim</a>
            <br>
            Center for Artificial Intelligence @ Korea Institute of Science and Technology
            <br><i>Access 2020, IEIE 2020</i>
        </p>
				<font size="+2">
					<p style="text-align: center;">
						<a href="https://ieeexplore.ieee.org/abstract/document/9324837" target="_blank">[Paper]</a> &nbsp;&nbsp;&nbsp;&nbsp;
						<a href="https://ai4robot.github.io/ElderSim/#" target="_blank">[Project page]</a> &nbsp;&nbsp;&nbsp;&nbsp;
					</p>
				</font>
				<font size="+1">
				</font>
        <p>
            <img class='teaser-img' src='/assets/img/elder/har-kist.mp4'>
        </p>
        <br>

		<p id="abstract"><strong>Abstract: </strong>
        To train deep learning models for vision-based action recognition of elders’ daily activities, we need large-scale activity datasets acquired under various daily living environments and conditions. However, most public datasets used in human action recognition either differ from or have limited coverage of elders’ activities in many aspects, making it challenging to recognize elders’ daily activities well by only utilizing existing datasets. Recently, such limitations of available datasets have actively been compensated by generating synthetic data from realistic simulation environments and using those data to train deep learning models. In this paper, based on these ideas we develop ElderSim, an action simulation platform that can generate synthetic data on elders’ daily activities. For 55 kinds of frequent daily activities of the elders, ElderSim generates realistic motions of synthetic characters with various adjustable data-generating options and provides different output modalities including RGB videos, two- and three-dimensional skeleton trajectories. We then generate KIST SynADL, a large-scale synthetic dataset of elders’ activities of daily living, from ElderSim and use the data in addition to real datasets to train three state-of-the-art human action recognition models. From the experiments following several newly proposed scenarios that assume different real and synthetic dataset configurations for training, we observe a noticeable performance improvement by augmenting our synthetic data. We also offer guidance with insights for the effective utilization of synthetic data to help recognize elders’ daily activities.
				</p>
        <br clear="all">
    </div>
    <div class="content" id="synthetic">

        <h2 style="text-align:center;">Synthetic data generation</h2>

        <p style="text-align: center;">The world’s elderly population growth emphasizes the necessity of eldercare technologies and underlines the role of action recognition tasks to comprehend elders’ activities of daily living. However, most public datasets used in human action recognition either differ from or have limited coverage of elders’ activities in many aspects. Moreover, data acquisition of elders’ ADL is challenging due to the privacy and physical limitations of the elderly.

        We introduce ElderSim, a synthetic action simulation platform that can generate synthetic data on elders’ daily activities. For 55 kinds of frequent daily activities of the elders, ElderSim generates realistic motions of synthetic characters with several customizable data-generating options and provides several output modalities. We also provide KIST SynADL dataset which is generated from our simulation platform.
        </p>
        <img class='summary-img' src='/assets/img/elder/summary.png' style="width:80%;">
        <img class='summary-img' src='/assets/img/elder/env.png' style="width:50%;">
        <br>
    </div>

    <div class="content" id="har">
        <h2 style="text-align:center;">Human action recognition</h2>

        <p style="text-align:center;">We experimentally validated the effect of augmenting our synthetic data, KIST SynADL (KIST) for training algorithms to recognize elders' ADL. We begin by introducing two real-world datasets for the experiments and address how insufficient the existing public dataset (NTU RGB+D 120) is to cover the elders' ADL. We then describe three state-of-the-art HAR methods used in the experiments as well as several experimental scenarios to examine the various aspects arising from the recognition of the elders' ADL. Within each experimental scenario, we investigate how our synthetic data can help recognize elders' daily activities and offer some guidance and insights for effective utilization of synthetic data. 
        <center>
            <img class='summary-img' src='/assets/img/elder/datasets.png' style="width:60%;">
        </center>
        <br>

        <p style="text-align:center;">We also collected real-world elderly action data to evaluate our synthetic dataset with three different HAR algorithms. 
        <center>
            <img class='real-img' src='/assets/img/elder/collection.png' style="width:60%;">
        </center>
        <br>

        <p style="text-align:center;">For the experiments augmenting the KIST SynADL dataset to train ST-GCN and VA-CNN, we balance mini-batches to contain an equal amount of real and synthetic data. Since the sizes of datasets differ, we randomly upsample the dataset of a smaller amount (usually the real-world data) to match the size. Twenty viewpoints of the KIST SynADL dataset were utilized for both methods, while only eight viewpoints were used for the Glimpse method to ensure reasonable training time. 
        
        We report the results of the experiments performed according to the above settings. In the experiments, we trained three recognition algorithms for the proposed experimental splits and report the average video sequence-level top-1 classification accuracy for the five test trials as the action recognition score. For the results obtained from augmenting the KIST SynADL dataset, we designate the change in the recognition score from that obtained without augmentation in the parenthesis next to the score. For simplicity, I only share the results of the cross-dataset split and the confusion matrix for the cross-subject split. You can find more experimental results in our <a href="https://ieeexplore.ieee.org/abstract/document/9324837">paper</a>.


        <center>
            <img class='real-img' src='/assets/img/elder/conf.png' style="width:80%;">
        </center>
        
        <center>
            <img class='real-img' src='/assets/img/elder/result.png' style="width:80%;">
        </center>

