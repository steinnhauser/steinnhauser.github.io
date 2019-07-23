---
title: "Dripping Faucet"
date: 2019-02-02
tags: [simulation, dripping faucet, feigenbaum]
header:
  image: "/images/faucet.jpg"
excerpt: "Simulation of dripping faucet"
mathjax: "true"
---
## Introduction
The simulation will model water at the edge of a faucet. A drop will be affected by the force of gravity and the surface tension of water. Additionally there will be a small rate of flow from the faucet. The drop will increase in size, and when the tip of the drop exceeds a critical distance from the faucet, a droplet will fall off.
## Theory
The flow of water is given by

$$\psi (t) = \frac{d m(t)}{dt},$$

where $$m(t)$$ is the mass of the drop. The complete differential equation for the system is

$$m(t)\frac{d^2 x(t)}{dt^2} + (b + \psi(t)) \frac{d x(t)}{dt} + kx(t) = m(t)g.$$

$$b = 0.001 kg/s$$ is the initial flow of water, $$k = 0.475 N/m$$ is the surface tension and $$g = 9.81 m/s^2$$ is the gravity. This equation can be modeled numerically, however there is an extra feature which must be implemented: the release of droplets.

### Release of droplets
The critical distance for a droplet to fall of is set to $$x_c = 0.0025 m$$. The drop will lose a mass of

$$\Delta m = \beta m(t_c) \frac{dx(t_c)}{dt},$$

with $$\beta = 50 s/m$$ and $$t_c$$ is the time of the release. The tip of the hanging drop will have a reduction in distance given by

$$\Delta x = \left(\frac{3(\Delta m)^4}{4\pi \rho m(t_c)^3} \right)^{1/3},$$

where $$\rho = 1000 kg/m^3$$ is the density of water.

## Algorithm
The Runge-Kutta method of fourth order (RK4) is used to simulate the system, with an if-test that checks whether a droplet should be released. The time interval between release of droplets is recorded for various rates of water flow, and the time interval of the 50 last drops is plotted vs. water flow. The full code can be found at my [github](https://github.com/simehaa/dripping-faucet).

## Results
The following plot shows the time intervals between droplets vs. the rate of water flow:
<img src="{{ site.url }}{{ site.baseurl }}/images/bifurcation.jpeg" alt="">

## Discussion
This is an example of a **Bifurcation diagram**, which is the mathematically expected behavior, considering the differential equation. The figure shows that
1. there is initially one time interval between the droplets.
2. then there are two time intervals (a drip-drip ... drip-drip ... fashion).
3. then four time intervals.
4. there are many time intervals in a seemingly chaotic behavior.
5. finally, a continuous flow of water.

From the figure it is possible to extract the *Feigenbaum constants*, two of the most famous irrational numbers in mathematics. They can be found as the factor of decrease in height and width in the zones of the diagram (i.e. the width of the zone with two periods is some factor wider than the zone with four periods and so on). The constants are:
* $$\delta = 4.6692...$$
* $$\alpha = 2.5029...$$
