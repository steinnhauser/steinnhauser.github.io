---
title: "CaNoRock XVI 2018"
date: 2019-07-29
tags: [simulation, heat diffusion, heat equation]
header:
  image: "/images/CaNoRock_cover.png"
excerpt: "CaNoRock XVI 2018"
mathjax: "true"
---
## Introduction
In the autumn of 2018, students were brought together from Canada, the US and two Norwegian Universities to work on a rocket project in the North of Norway. This project was meant to introduce students to rocket building and instrumentation design to effectively study the upper atmosphere.

## The rocket
The rocket had several instruments to measure the conditions of the atmosphere as well as the position of the rocket. The students got to pick between three teams: Telemetry, Payload, and Sensory/Experiments. Following is an image of the team of students from the University of Oslo with a model of the rocket:
<img src="{{ site.url }}{{ site.baseurl }}/images/CANOROCK_oslo-team.jpg" alt="">
Three other students and I chose to go specifically into a GPS- and Simulation oriented post-study of the rocket. The first step was to set up a GPS script in MATLAB such that the data from the GPS modules was successfully logged. Afterwards the team soldered two GPS instruments on two independent circuit boards in case one failed. Following is a picture taken of my first time soldering:
<img src="{{ site.url }}{{ site.baseurl }}/images/CANOROCK_me-lodding.jpg" alt="">
These circuit boards were then fastened by us to the payload of the rocket. Following is an image taken by Kirtan of the payload. Kirtan was not on our team but was one of the payload managers from Canada:
<img src="{{ site.url }}{{ site.baseurl }}/images/CANOROCK_payload.jpg" alt="">

## The Simulation team
After the GPS modules were incorporated to the payload my team moved on to simulate the rocket flight. Our team of four split into teams of two to model the rocket in OpenRocket (3D rocket design software) using the dimensions of the one built. This 3D rocket model was then imported into RockSim (rocket simulation software) and the simulations could begin. Our team split in two to do these first steps as there were many factors in the software resulting in a lot of errors that can be made. Once everything was properly set up and the two teams got the simulations to work, the testing began. Many factors of the rockets initial conditions were tested until the ones which we would use were set. Finally, weather forecast elements such as wind direction, speed, temperature, humidity were implemented and the rocket flight animation was produced.
