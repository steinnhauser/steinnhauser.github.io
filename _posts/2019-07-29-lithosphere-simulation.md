---
title: "Heat Diffusion in Lithosphere Simulation"
date: 2019-02-02
tags: [simulation, heat diffusion, heat equation]
header:
  image: "/images/lithosphere.jpg"
excerpt: "Heat Diffusion in Lithosphere Simulation"
mathjax: "true"
---
## Introduction
The heat equation was implemented numerically to simulate heat diffusion in the lithosphere.

## Theory
The general dimensionless relation for 3D heat diffusion is

$$\nabla ^2 u = \frac{\partial u}{\partial t}$$,

which can be implemented numerically through Taylor expansion. The specific case of the lithosphere is presented by the following scaled equation:

$$\nabla (k \nabla T) + Q_i = \rho c_P \frac{\partial T}{\partial t}$$.

The additional heat production $Q_i$ regards the decay of radioactive materials in the various slices of the lithosphere. In addition to providing a heat source, these radioactive materials are also modeled to decay depending on their respectful halflives.
## Algorithm
An object oriented code in C++ was written. The velocity Verlet method was used to update positions and velocities for all ten celestial objects. This method is a symplectic integrator, which means that it conserves the energy (unlike other methods such as Euler's method, Euler-Cromers method and Runge-Kutta).
### Velocity verlet
The positions are calculated twice, first with a second order Taylor approximation

$$x_{i+1} = x_i + h\cdot v_i + \frac{h^2}{2}a_i + \mathcal{O}(h^3),$$

which is used to update the accelerations,

$$a_{i+1} = a(x_{i+1}, t_{i+1}).$$

Then velocites are updated,

$$v_{i+1} = v_i + \frac{h}{2}\left( a_{i+1} + a_i \right) + \mathcal{O}(h^3).$$ [https://ssd.jpl.nasa.gov/horizons.cgi#top](https://ssd.jpl.nasa.gov/horizons.cgi#top).

## Results
The following plot illustrates the various simulation variants conducted.
<img src="{{ site.url }}{{ site.baseurl }}/images/lithosphere.png" alt="">

## Discussion
The velocity Verlet method provides a fairly accurate numerical result. The error is of order $$h^3$$, and the code is efficient (a small time step h can be chosen).
For more information about this numerical project, be sure to check out the [github repository](https://github.com/simehaa/solar-system) where there is an extensive report about the project.
