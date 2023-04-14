---
title: "Plant model generator from digital twin for purpose of formal verification"
collection: publications
permalink: /publication/paper_1
excerpt: ''
date: 2021-07-21
venue: '2021 26th IEEE International Conference on Emerging Technologies and Factory'
paperurl: 'http://midhunxavier.github.io/files/paper3.pdf'

---

[Download paper here](http://midhunxavier.github.io/files/paper3.pdf)

This paper reports on a method of automatic generation of a formal model of plant from the behaviour traces recorded from its digital twin. The traces are observed from simulation in the loop of the digital twin in Visual Components connected with distributed automation software, developed in NxtSTUDIO according to IEC 61499. The generated modular formal model of the closed-loop system is transformed to the model of uncontrolled plant behaviour extended with nondeterminism. The model is then combined in closed-loop with the formal model of controller, generated from its source code using the fb2smv tool. The verification and simulation is done by the symbolic model checker NuSMV tool, which verifies various CTL/LTL specifications of the system.
