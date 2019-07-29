---
title: "Heat Diffusion in Lithosphere Simulation"
date: 2019-02-02
tags: [simulation, heat diffusion, heat equation]
header:
  image: "/images/lithosphere_cover.jpg"
excerpt: "Heat Diffusion in Lithosphere Simulation"
mathjax: "true"
---
## Introduction
The heat equation was implemented numerically to simulate heat diffusion. This was used to simulate a two-dimensional lithosphere with radioactive enrichment and decay.
## Theory
The general dimensionless relation for heat diffusion is

$$\nabla ^2 u = \frac{\partial u}{\partial t},$$

which can be implemented numerically through Taylor expansion. The specific case of the lithosphere is presented by the following scaled equation:

$$\nabla (k \nabla T) + Q_i = \rho c_P \frac{\partial T}{\partial t}.$$

The additional heat production \textit{Q_i} regards the decay of radioactive materials in the various slices of the lithosphere. In addition to providing a heat source, these radioactive materials are also modeled to decay depending on their respectful half-lives.
## Algorithm
Several simulation variants were conducted in C++. The \textit{Explicit}, \textit{Implicit} and \textit{Crank-Nicolson} schemes were compared with regards to efficiency and accuracy.
### Velocity verlet
[https://ssd.jpl.nasa.gov/horizons.cgi#top](https://ssd.jpl.nasa.gov/horizons.cgi#top).

## Results
The following plot illustrates the various simulation variants conducted.
<img src="{{ site.url }}{{ site.baseurl }}/images/lithosphere_data.png" alt="">

## Discussion
The velocity Verlet method provides a fairly accurate numerical result. The error is of order $$h^3$$, and the code is efficient (a small time step h can be chosen).
For more information about this numerical project, be sure to check out the [github repository](https://github.com/simehaa/solar-system) where there is an extensive report about the project.
