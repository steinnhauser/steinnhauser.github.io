---
title: "4D Space Numerical Workshop"
date: 2019-08-17
tags: [excursion, trip, summer school, boston]
header:
  image: "/images/Kobe-Cover.jpg"
excerpt: "4D Space Numerical Workshop"
mathjax: "true"
---
## Introduction
In the summer of 2019, from June 17th to June 21th, 10 students were brought together in Japan to partake in a summer school dedicated to an introduction to supercomputer simulations of satellites in the ionosphere. Three instructors from Norway and one from Japan were there to teach us and help us with our projects.

## Purpose
The purpose of the trip was to encourage students to work together with international scientists in the same fields. The students were also encouraged to venture into more challenging projects which may be worth publishing. The main focus of the projects was supercomputer simulations of the NORSAT-1 satellite in space. The supercomputer used was one provided to us by Kobe University. The code which would be run on the supercomputer was already written for us by one of the Japanese instructors which happened to be in Oslo at the time. This code included a model of the NORSAT-1 probe and ions which obeyed Maxwell's equations. The number of ions, ion velocity, magnetic fields, etc. was something that we learned to change for the various simulation variants.

## Team Project
My team of five conducted several simulations which were designed to study the floating potential of the spacecraft. These were designed to be comparable to theoretical values given by the *PP-regime* as opposed to the *OML-regime* (justified by the fact that the Debye sphere is a lot smaller than the components of the spacecraft, see the [Floating potential lecture notes](https://github.com/steinnhauser/4DSNW-2019/tree/master/Kobe) by W. Miloch for more details). The visualization of the data produced by the supercomputer was a central focus of our study. For this our group used the ParaView 5.4.1 data visualization software. This software was ideal for visualization of parameters for the 3-dimensional satellite model.

## Team Results
Follwing is the comparison between the magnetic fields which the two satellites were exposed to:
<img src="{{ site.url }}{{ site.baseurl }}/images/SWSS_Comparison-Bfields.png" alt="">
The power point presentation can be found on my [github](https://github.com/steinnhauser/4DSNW-2019/tree/master/Kobe).

## My experience

## Afterthoughts
