---
title: "Heat Diffusion in Lithosphere Simulation"
date: 2019-07-29
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
Several dimensionless simulation variants were conducted in C++. The \textit{Explicit}, \textit{Implicit} and \textit{Crank-Nicolson} schemes were compared with regards to efficiency and accuracy in relation to analytic solutions. The scaled lithosphere simulations had variants regarding the radioactive isotopes in the layers, some of which included radioactive decay. The lithosphere was simulated in two dimensions, so an iterative solver was required.
### Velocity verlet
Ultimately, this produced a
[https://ssd.jpl.nasa.gov/horizons.cgi#top](https://ssd.jpl.nasa.gov/horizons.cgi#top).

## Results
The following plot illustrates the various simulation variants conducted.
<img src="{{ site.url }}{{ site.baseurl }}/images/lithosphere_data.png" alt="">
The impact of decay on the lithosphere heat production was also animated in numerous gifs which can be found in the project [repository](https://github.com/steinnhauser/FYS3150/tree/master/Project5).

## Discussion
The velocity Verlet method provides a fairly accurate numerical result. The error is of order $$h^3$$, and the code is efficient (a small time step h can be chosen).
For more information about this project, the full project folder and its report can both be found on my [github](https://github.com/steinnhauser).
