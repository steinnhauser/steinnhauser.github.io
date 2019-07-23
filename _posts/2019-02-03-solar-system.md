---
title: "Simulation of the Solar system"
date: 2019-02-02
tags: [simulation, solar system, velocity verlet]
header:
  image: "/images/solarsystem.png"
excerpt: "Simulation of the Solar system"
mathjax: "true"
---
## Introduction
A numerical simulation of the solar system was done by using the *velocity Verlet method*.
## Theory
The mathematical problem is to solve the motion of a 10-body system, which is analytically impossible to solve. Newtonian gravity is used to calculate the force,

$$F = G \frac{m_1m_2}{r^2}$$,

pointing in the direction from mass center of object 1 to mass center of object 2.
## Algorithm
An object oriented code in C++ was written. The velocity Verlet method was used to update positions and velocities for all ten celestial objects. This method is a symplectic integrator, which means that it conserves the energy (unlike other methods such as Euler's method, Euler-Cromers method and Runge-Kutta).
### Velocity verlet
The positions are calculated twice, first with a second order Taylor approximation

$$x_{i+1} = x_i + h\cdot v_i + \frac{h^2}{2}a_i + \mathcal{O}(h^3),$$

which is used to update the accelerations,

$$a_{i+1} = a(x_{i+1}, t_{i+1}).$$

Then velocites are updated,

$$v_{i+1} = v_i + \frac{h}{2}\left( a_{i+1} + a_i \right) + \mathcal{O}(h^3).$$

And finally, the positions are updated again.
At each time step, the gravitational force between all objects were used (each planet/the Sun feels a force from nine other objects). The initial conditions were obtained from NASA (at October 4th 2018): [https://ssd.jpl.nasa.gov/horizons.cgi#top](https://ssd.jpl.nasa.gov/horizons.cgi#top).

## Results
The following plot shows the orbits of all objects (up to scale) after 248 years (which is roughly one Plutonian year). The unit of the axes is in AU (astronomical units).
<img src="{{ site.url }}{{ site.baseurl }}/images/solarsystemplot.png" alt="">

## Discussion
The velocity Verlet method provides a fairly accurate numerical result. The error is of order $$h^3$$, and the code is efficient (a small time step h can be chosen).
For more information about this numerical project, be sure to check out the [github repository](https://github.com/simehaa/solar-system) where there is an extensive report about the project.
