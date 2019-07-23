---
title: "Image Denoising"
date: 2019-02-02
tags: [image, denoising, noise, smooth]
#header:
#  image: "/images/faucet.jpg"
excerpt: "An image denoising algorithm"
mathjax: "true"
---
## Introduction
This project was written in C with the aim of high performance. The denoising algorithm is based on isotropic diffusion. The high performance aim was achieved by parallelizing the code with MPI. Feel free to check out the code on my [github](https://github.com/simehaa/image-denoising) and try it for yourself. As for now it only works on grayscale jpg images.

## Theory

The equation used is actually the diffusion equation:

$$
\frac{\partial u(x,y,t)}{\partial t} = D \nabla^2 u(x,y,t),
$$

where $$D$$ is a constant in the case of the *isotropic diffusion eq.* This tends to smooth out the value of $u$ as time evolves.

## Algorithm

The equation can be discretized and expressed as

$$
\bar{u}_{i,j} = u_{i,j} + \kappa (u_{i+1,j} + u_{i-1,j} - 4u_{i,j}) + u_{i,j+1} + u_{i,j-1},
$$

where $$\kappa \leq 0.2$$ is a constant and $$\bar{u}$$ is one time step ahead of $u$.

Below is a part of the C-written code:

```C
void iso_diffusion_denoising(image *u, image *u_bar, float kappa, int maxiter) {

  for (int iter=1; iter<=maxiter; iter++)
  {
    // One sweep of the image
    for (int i=1; i<u->m-1; i++)
      for (int j=1; j<u->n-1; j++)
        u_bar->image_data[i][j] = u->image_data[i][j] + kappa*(
                                  u->image_data[i+1][j] +
                                  u->image_data[i-1][j] -
                                  4*u->image_data[i][j] +
                                  u->image_data[i][j+1] +
                                  u->image_data[i][j-1]);
    // Update u
    if (iter < maxiter) { // this part is not needed at last step
      float **temp = u->image_data;
      u->image_data = u_bar->image_data;
      u_bar->image_data = temp;
    }
  }
}
```

## Results

| Noisy source image | $$\kappa = 0.08$$, maxiter = 15 | $$\kappa=0.19$$, maxiter = 30 |
| --- | --- | --- |
| <img src="{{ site.url }}{{ site.baseurl }}/images/noisy.jpg" alt=""> | <img src="{{ site.url }}{{ site.baseurl }}/images/smooth.jpg" alt=""> | <img src="{{ site.url }}{{ site.baseurl }}/images/blur.jpg" alt=""> |

## Discussion

With the first set of parameters, most of the noise is gone and the image looks much better. If more iterations are allowed or $$\kappa$$ is increased: the image will become even less noisy, but with the cost that it will also become more blurry.

Check out this short [report](https://github.com/simehaa/image-denoising/blob/master/project_report.pdf) for the results of parallelizing the code.
