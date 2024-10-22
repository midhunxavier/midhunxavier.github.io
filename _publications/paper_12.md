---
title: "Formal Verification of the Control Software of a Radioactive Material Remote Handling System, Based on IEC 61499"
collection: publications
permalink: /publication/paper_12
excerpt: ""
date: 2023-10-07
---

[Download paper here](http://midhunxavier.github.io/files/paper12.pdf)

Automation systems within nuclear laboratories are intended to work under harsh operating conditions. Selective Production of Exotic Species (SPES) is a nuclear research facility currently under construction by the Istituto Nazionale di Fisica Nucleare, dedicated to the production and study of radioactive ion beams. Isotopes are produced within the target ion source unit, a vacuum vessel that must be replaced on a regular basis. The highly radioactive environment necessitates the deployment of a set of automated systems dedicated to the unit's remote management. To meet high-level security standards, the design of such instrumentation and control systems must include extensive verification. Based on specific safety requirements, model checking can be used to assess the systems' correctness. This article describes how to employ an integrated toolchain to design, simulate, formally verify, and deploy the control software for the Horizontal Handling Machine, a safety-critical remote handling system in operation at SPES. The IEC 61499 standard's adoption led to a redesign of the control logic. Following a preliminary online simulation, the closed-loop system has been formally verified using the NuSMV symbolic model checker, with the help of the FB2SMV converter. In addition, the Function Blocks Modeling Environment tool was used for automating verification and analyzing counterexamples.
