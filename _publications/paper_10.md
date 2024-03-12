---
title: "Generating Por table Test Cases for IEC 61499 FBs from Interface Behaviour Specifications"
collection: publications
permalink: /publication/paper_10
excerpt: ''
date: 2023-11-27
venue: '2023 IEEE 28th International Conference on Emerging Technologies and Factory Automation (ETFA), Sinaia, Romania'
---

[Download paper here](http://midhunxavier.github.io/files/paper10.pdf)

IEC 61499 is an executable, event-based language for control software that allows visual and textual implementation of individual software components (Function Blocks, FBs). The standardized visual service sequence model specifies the expected input/output behaviour of a component, thus supporting model-based testing. We present our approach for testing an FB on various platforms, which helps manage the variations in execution semantics between different vendors. First, service sequences are generated manually or derived from an existing (partial) implementation. Then, these service sequences serve as unit tests for this implementation. Finally, we create a test application that is executable on any IEC 61499-compliant platform. Executing tests directly in the target platform helps validate the correct functionality of an FB before deploying the control software to a cyber-physical system.
