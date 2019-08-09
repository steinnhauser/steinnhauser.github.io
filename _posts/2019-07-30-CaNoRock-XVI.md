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

## Particular assignment
The simulation team was set to pursue two particular assignments. This could be anything we determined was worth researching with the instrument data we had available. The group split in two and me and Brady Pomerleau discussed calculating the drag coefficient of the rocket using the GPS data. The mathematical model we used to determine the drag coefficient was:

$$
F_D = \frac{1}{2} C_D \rho A v^2,
$$
where $F_D$ is the drag force, $C_D$ is the drag coefficient, $\rho$ is the density of the surrounding fluid (in this case atmospheric density), $A$ is the area and $v$ is the speed. Brady and I discussed in detail how the center of drag would change in time and how they were influenced by wind speed and rocket roll. The GPS data would tell us of the acceleration of the rocket at any given point in time, and if the mass of the rocket is known (by calculating how much fuel mass has been expulsed at the time) then the sum of the forces (at a time step \textit{i}) can be found by:

$$
\vec{F}_i = m_i \vec{a}_i
$$
The sum of forces on the rocket were then modeled to be the combination of gravitational, drag, and rocket thruster forces.

$$
\vec{F}_i = \vec{F}_D + \vec{F}_G + \vec{F}_T
$$
If the output of the thruster on the rocket is known at any given time step \textit{i}, then all parameters will be known except for the drag coefficient. This can then be calculated for every time step and averaged.

## Post-Launch words
Many hours were spent trying to figure out how to calculate the drag coefficient as accurately as possible and a MATLAB script was designed to do so, though both GPS modules were faulty and did not record the data properly in post-launch analyses. The launch was a thrilling experience. On Thursday we had a misfire which delayed the launch too long (bad weather caused the launch to be delayed even further afterwards), but on T+7s on Friday we had a successful launch into the clouds. The

## Workshop Summary
It was very enjoyable to get to work with students from all around the world which had similar interests to mine. All the students got each others contact information for any possible work together in the future. It was enjoyable also to meet the five physics students from Tromso, Norway, as that's where I considered studying in my first year. All a very fun experience with great people.
