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
The heat equation was implemented numerically to simulate heat diffusion. This was used to simulate a two-dimensional lithosphere with radioactive enrichment and decay. The lithosphere model was successfully implemented using the implicit scheme and the Jacobi method.

## Theory
The general dimensionless relation for heat diffusion is

$$\nabla ^2 u = \frac{\partial u}{\partial t},$$

which can be implemented numerically through Taylor expansion. The specific case of the lithosphere is presented by the following scaled equation:

$$\nabla (k \nabla T) + Q_i = \rho c_P \frac{\partial T}{\partial t}.$$

The additional heat production \textit{Q_i} regards the decay of radioactive materials in the various slices of the lithosphere. In addition to providing a heat source, these radioactive materials are also modeled to decay depending on their respectful half-lives.

## Algorithm
Several dimensionless simulation variants were conducted in C++. The \textit{Explicit}, \textit{Implicit} and \textit{Crank-Nicolson} schemes were compared with regards to efficiency and accuracy in relation to analytic solutions. The scaled lithosphere simulations had variants regarding the radioactive isotopes in the layers, some of which included radioactive decay. The lithosphere was simulated in two dimensions, so an iterative solver was required. The iterative solver used was the Jacobi method.
For more details on this method and the heat diffusion model see to the [report](https://github.com/steinnhauser/FYS3150/Reports).

## Results
The following plot illustrates the various simulation variants conducted.
<img src="{{ site.url }}{{ site.baseurl }}/images/lithosphere_data.png" alt="">
The impact of decay on the lithosphere heat production was also animated in a gif which can be found in the project [repository](https://github.com/steinnhauser/FYS3150/tree/master/Project5).

## Discussion
Comparison of the methods used produced an interesting error analysis, where the Crank-Nicolson and explicit schemes both produced excellent results. The Implicit scheme exhibited the largest absolute error in all cases. The best scheme between the two depends on the research case, as the explicit scheme is limited by the *Courant-Friedrichs-Lewy condition*.
The decay of the isotopes turned out to have a noticeable impact on the heat system of the lithosphere. It was maximally found to produce a heat difference of 36.2C at a depth of 68.4 km.
For more information about this project, the full project folder and its report can both be found on my [github](https://github.com/steinnhauser).
