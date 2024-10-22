---
title: "A framework for the generation of monitor and plant model from event logs using process mining for formal verification of event-driven systems"
collection: publications
permalink: /publication/paper_14
excerpt: ""
date: 2024-06-05
---

[Download paper here](http://midhunxavier.github.io/files/paper14.pdf)

his article proposes a method for the automatic generation of a plant model and monitoring using process mining algorithms based on recorded event logs. The behavioral traces of the system are captured by recording event logs during plant operation in either manual control mode or with an automatic controller. Process discovery algorithms are then applied to extract the logic of the process behavior properties from the recorded event logs. The result is represented as a Petri net, which is used to construct the state machine of the plant model and monitor and is in accordance with the IEC 61499 Standard. The monitor is implemented as a function block and can be deployed in real time to trigger an error signal whenever there is a deviation from the actual process scenario. The plant model and controller are connected in a closed loop and are used for the formal verification of the system with the help of the “fb2smv” converter and symbolic model checking tool NuSMV.
