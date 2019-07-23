---
title: "PageRank Algorithm"
date: 2019-07-12
tags: [search, engine, pagerank, algorithm, google]
excerpt: "A simple algorithm behind a search engine"
mathjax: "true"
---
## Introduction
The PageRank algorithm is a search engine algorithm named after Larry Page, one of the founders of Google.

The code were written in C and improved by using OpenMP: shared memory parallelization. Check out the complete project on my
[github](https://github.com/simehaa/pagerank).

## Theory

<img src="{{ site.url }}{{ site.baseurl }}/images/pagerank.png" alt="">

The algorithm works by first setting up a matrix where and element is determined by:

$$
a_{ij} = \begin{cases}1/L(j), \text{ if there is an inbound link from webpage } j \text{ and } i\neq j \\ 0, \text{ otherwise,}\end{cases}
$$,

where $$L(j)$$ are the number of *outbound* links from webpage $$j$$.

The matrix typically looks something like

$$
\begin{bmatrix}
0&0&0&0&0&0&\frac{1}{3}&0\\
\frac{1}{2}&0&\frac{1}{2}&\frac{1}{3}&0&0&0&0\\
\frac{1}{2}&0&0&0&0&0&0&0\\
0&1&0&0&0&0&0&0\\
0&0&\frac{1}{2}&\frac{1}{3}&0&0&\frac{1}{3}&0\\
0&0&0&\frac{1}{3}&\frac{1}{3}&0&0&\frac{1}{2}\\
0&0&0&0&\frac{1}{3}&0&0&\frac{1}{2}\\
0&0&0&0&\frac{1}{3}&1&\frac{1}{3}&0\\
\end{bmatrix}
$$
The sum of each column is 1 or 0. Note that most matrix element will be zero (unless there is an extreme high amount of links on most webpages), this means that the matrix is sparse.

The scores of each webpage will be stored in a vector $$\vec{x}$$ with an initial guess of $$\frac{1}{N}$$ for all webpages.

The scores were computed iteratively by the following equation:

$$
\vec{x}^k = \frac{1-d+d\cdot W^{k-1}}{N} \begin{bmatrix} 1\\1\\\vdots\\1\end{bmatrix} + d\cdot A \vec{x}^{k-1}
$$,

where $$d\in [0,1]$$ is the damping constant, $$k$$ denotes iteration step, A is the sparse matrix and $$W^{k-1}$$ is a scalar which must be computed each iteration by

$$
W^{k-1} = \sum_{m\in D} x_m^{k-1},
$$
where $$D$$ denotes the set of indices for all dangling webpages (webpages with no outbound links).


## Algorithm



## Results

Below is a terminal print after a run

```C
$ ./pagerank.exe web-NotreDame.txt 0.5 0.001 10
Information:
  Filename (input data)   = web-NotreDame.txt
  Nodes (no. of webpages) = 325729
  Edges (no. of links)    = 1469679
  Damping Constant        = 0.500
  Convergence threshold   = 1.00e-03


Pagerank algorithm results:
  Threshold of 1.00e-03 reached,
  Iterations: 3


Timing results:
  Function:              Time [s]:
  read_graph_from_file   1.12580
  PageRank_iterations    0.03450
  top_n_webpages         0.00717


Top 10 webpages:
  Rank:  Index:  Score:
    1.        0  0.00290
    2.     1963  0.00286
    3.   191267  0.00241
    4.   124802  0.00223
    5.   142732  0.00195
    6.   143218  0.00179
    7.    32830  0.00138
    8.    12838  0.00131
    9.   149039  0.00131
   10.    81878  0.00131
```

## Discussion

The entire code ran on roughly 1.16 seconds, and there were 1.5 million different links.
