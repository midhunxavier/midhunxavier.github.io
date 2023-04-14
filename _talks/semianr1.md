---
title: "Seminar on framework for closed-loop formal verification of distributed automation software with plant model generator from event logs
"
collection: talks
type: "Talk"
permalink: /talks/seminar1
venue: " NSU"
date: 2021-11-17
location: "Russia"
---


The cyber-physical automation system is quite popular in today’s ever-evolving industry world. The IEC 61499 architecture is a powerful mechanism for engineering such systems. It has been proven also as an efficient way of modeling CPS in automation. These systems pose a significant challenge for their efficient verification and validation due to their heterogeneous structure, use of wireless communication and decentralized logic. To address this issue, the formal verification technique has been used to automatically verify the correctness and safety of these automation systems. Closed-loop modelling has been proposed for the most comprehensive verification, which implies the need for modelling the plant.

This seminar introduces a concept of an automatic generation of a formal model of plant from the event logs recorded from its digital twin. The traces are observed from simulation in the loop of the digital twin in the Visual Components 3D simulator connected with distributed automation software, developed in NxtSTUDIO according to IEC 61499.  The process mining technique is used for extracting the process models from the recorded behavioral traces of the system. The Petri net model of the system’s behaviour is derived with the help of  proM tool using an Alpha algorithm. The generated modular formal model of the closed-loop system is transformed to the model of uncontrolled plant behaviour extended with non- determinism. The formal model implementation and its verification is done with the help of a comprehensive tool-chain that can combine design, simulation, formal verification, and distributed deployment of automation software. The tool chain includes an IEC 61499 compliant engineering environment, fb2smv converter of functions blocks to SMV code, the NuSMV model-checker and utilities for interpreting counterexamples.

[Click here to see](http://midhunxavier.github.io/files/seminar1.pdf)
