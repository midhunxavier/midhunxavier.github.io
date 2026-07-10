---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am an **AI Research Engineer at Aerobase** specializing in **Neural Combinatorial Optimization (NCO)** and **Reinforcement Learning (RL)**. My work bridges theoretical research on learning-based optimization with applied deployment in **metal additive manufacturing** — Directed Energy Deposition (DED), Laser Powder Bed Fusion (LPBF), and Wire Arc Additive Manufacturing (WAAM) — using deep learning to generate and optimize robot and laser paths and to minimize defects in printed parts.

## Applied Research at Aerobase

- **Additive Manufacturing Path Optimization** – Generating and optimizing robotic deposition paths for DED and WAAM and laser scan/toolpaths for LPBF by formulating path planning as a combinatorial optimization problem, sequencing segments to reduce travel, balance thermal load, and improve build quality and productivity.

- **Reinforcement Learning for Defect Minimization** – Training RL agents to minimize defects such as porosity, cracking, residual stress, and distortion by learning from multiphysics simulation feedback, including thermal and mechanical FEM, microstructure analysis, and melt-pool CFD simulations.

- **Simulation-in-the-Loop Optimization** – Coupling learned policies with physics-based simulators to close the loop between process parameters, path planning, and predicted part quality.

## Neural Combinatorial Optimization (Theory)

- **Learning-Based Solvers** – Designing neural solvers for classic combinatorial problems (TSP, CVRP, scheduling, bin packing, assignment) that construct and refine solutions directly from data, complementing or replacing hand-crafted heuristics.

- **Attention Models & Architectures** – Building Transformer-based encoder–decoder solvers, Pointer Networks, and graph neural networks that scale to large problem instances.

- **Policy Optimization & Reinforcement Learning** – Training solvers with policy-gradient and actor–critic methods and modern algorithms such as GRPO, PKPO, RSPO, and PPO, including REINFORCE with greedy and rollout baselines.

- **Pass@K & Max@K Objectives** – Optimizing and evaluating models under best-of-K objectives, aligning the training objective with the metric that matters at inference time.

- **Learned Heuristics & Generalization** – Developing constructive and improvement (local-search) policies, neural large-neighborhood search, and improving out-of-distribution generalization across instance sizes and distributions.

With a strong foundation in machine learning, reinforcement learning, and optimization, I build neural solvers and RL systems that are efficient, scalable, and grounded in real-world manufacturing physics.
