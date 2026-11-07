---
title: "Evidence for Can Weight-Space Programming Fix a Model?"
date: 2026-11-07
permalink: /blog/auto-weight/weight-space-evidence/
layout: auto-weight-article
hide_cover: true
excerpt: "Protocols, exact edit specifications, and recorded outcomes behind the research note."
sections:
  - id: cartpole
    label: "CartPole"
  - id: smollm2
    label: "SmolLM2"
  - id: continuous-mountaincar
    label: "Continuous MountainCar"
  - id: calibration
    label: "Calibration"
  - id: discrete-mountaincar
    label: "Discrete MountainCar"
---

[Read the research note](/blog/auto-weight/better-weights-tougher-tests/).

These are selected **author-reported experimental records**, published for inspection. They let readers check protocols, edit definitions, acceptance decisions, and the arithmetic behind reported scores. They are not an independent replication or a complete model-execution package.

The release includes all seven CartPole follow-up policies (1,024 episodes each), all four final SmolLM2 checkpoints (1,792 cases each), and all four continuous-MountainCar confirmation policies (1,024 episodes each). Calibration and discrete MountainCar include protocols and aggregate reports; their per-example/per-episode observations are not included in this release. Exploratory pilots and unsuccessful development searches outside these five case families remain in the private archive.

The JSON links below open the records directly. [The manifest](/assets/auto-weight-evidence/manifest.json) gives the original archive-relative filenames, SHA-256 hashes, and whether each copy is byte-identical or has local absolute paths removed. A redacted copy retains historical IDs, but is not the original sealed byte sequence. No checkpoint weights, benchmark question text, full agent conversations, or private filesystem locations are published here. No new model evaluation or bootstrap was performed for this release.

## CartPole

The initial confirmation and later control comparison use different cohorts. The comparison scores include environment seeds, action seeds, initial states, returns, and completion metrics; pair rows by their seeds. `accepted_12_3` is the Astra edit, and `automatic_winner` is the informed grid's selected policy. The edited-plus-argmax policy is descriptive and outside the five prespecified superiority comparisons. The analysis retains both the original one-sided bounds and the reported two-sided intervals. Its historical field name `simultaneous_ci99` means 99% per-comparison intervals with a Bonferroni family-error bound of 0.05 across five contrasts; it does not mean 99% joint coverage.

- [Checkpoint revision and runtime](/assets/auto-weight-evidence/cartpole-provenance.json)
- [Initial frozen issue and six gates](/assets/auto-weight-evidence/cartpole-initial-issue.json)
- [Accepted proposal 008](/assets/auto-weight-evidence/cartpole-proposal.json)
- [Initial confirmation report](/assets/auto-weight-evidence/cartpole-confirmation.json)
- [Follow-up protocol](/assets/auto-weight-evidence/cartpole-comparison-plan.json)
- [Selected numerical control](/assets/auto-weight-evidence/cartpole-grid-selection.json)
- [Means, paired intervals and work accounting](/assets/auto-weight-evidence/cartpole-analysis.json)
- [Episode scores: accepted_12_3](/assets/auto-weight-evidence/cartpole-final-accepted_12_3.json)
- [Episode scores: accepted_argmax](/assets/auto-weight-evidence/cartpole-final-accepted_argmax.json)
- [Episode scores: angle_only_12](/assets/auto-weight-evidence/cartpole-final-angle_only_12.json)
- [Episode scores: automatic_winner](/assets/auto-weight-evidence/cartpole-final-automatic_winner.json)
- [Episode scores: original_argmax](/assets/auto-weight-evidence/cartpole-final-original_argmax.json)
- [Episode scores: original_stochastic](/assets/auto-weight-evidence/cartpole-final-original_stochastic.json)
- [Episode scores: output_only_3](/assets/auto-weight-evidence/cartpole-final-output_only_3.json)

## SmolLM2

The four score files contain exact case IDs, seed, binary accuracy, evaluation ID, and checkpoint hash. Join them by case ID and seed; use the `confirmation` split in the case-identity file for group membership. These scores reproduce the counts in Table 2. The selected L1 schedule includes every stored tensor’s donor fraction and the base/instruct checkpoint revisions. Structural instruction scores do not measure general answer quality.

- [Frozen sampling protocol and gates](/assets/auto-weight-evidence/smollm2-protocol.json)
- [Astra search and selection plan](/assets/auto-weight-evidence/smollm2-astra-plan.json)
- [Exact selected L1 tensor schedule](/assets/auto-weight-evidence/smollm2-L1.json)
- [Development selection](/assets/auto-weight-evidence/smollm2-selection.json)
- [Primary confirmation decision](/assets/auto-weight-evidence/smollm2-confirmation.json)
- [Paired comparisons with controls](/assets/auto-weight-evidence/smollm2-comparisons.json)
- [Case identities and group assignments](/assets/auto-weight-evidence/smollm2-case-identities.json)
- [Case source mapping](/assets/auto-weight-evidence/smollm2-case-sources.json)
- [Per-case scores and evaluation ID: instruct](/assets/auto-weight-evidence/smollm2-instruct-scores.json)
- [Per-case scores and evaluation ID: astra-L1](/assets/auto-weight-evidence/smollm2-astra-L1-scores.json)
- [Per-case scores and evaluation ID: blend-15](/assets/auto-weight-evidence/smollm2-blend-15-scores.json)
- [Per-case scores and evaluation ID: rollback](/assets/auto-weight-evidence/smollm2-rollback-scores.json)

## Continuous MountainCar

The frozen plan records the pilot diagnosis, numerical search space, seeds, and all four stronger external acceptance rules. The external confirmation record includes per-episode return, steps, and success for the selected policy and three controls. The native issue/report and external criteria jointly determine the reported acceptance. The proposal identifies replacement tensors and payload hash; checkpoint and replacement binary files are not bundled.

- [Checkpoint revision and runtime](/assets/auto-weight-evidence/continuous-provenance.json)
- [Contemporaneous diagnosis, search and acceptance plan](/assets/auto-weight-evidence/continuous-plan.json)
- [All numerical development candidates](/assets/auto-weight-evidence/continuous-search.json)
- [Native frozen issue and gates](/assets/auto-weight-evidence/continuous-issue.json)
- [Exact selected tensor proposal](/assets/auto-weight-evidence/continuous-proposal.json)
- [Native confirmation report](/assets/auto-weight-evidence/continuous-confirmation.json)
- [External gates and all four policies’ episode scores](/assets/auto-weight-evidence/continuous-external-confirmation.json)

## Calibration

The selection record identifies the conventional temperature search. The issue specifies NLL improvement and accuracy/Brier preservation; the confirmation report gives the reserved aggregate results. This release does not include the image features or per-image predictions.

- [Checkpoint and data identities](/assets/auto-weight-evidence/calibration-sources.json)
- [Frozen issue and three gates](/assets/auto-weight-evidence/calibration-issue.json)
- [Temperature selection](/assets/auto-weight-evidence/calibration-selection.json)
- [Reserved confirmation report](/assets/auto-weight-evidence/calibration-confirmation.json)

## Discrete MountainCar

Both the original failed confirmation and separately registered retest are retained. The retest record identifies the fixed candidate and thresholds; its summary reports the larger fresh cohort. This release does not include the individual trajectories and does not provide a joint error guarantee across the original test and retest.

- [Original frozen issue and gates](/assets/auto-weight-evidence/mountaincar-issue.json)
- [Original rejected confirmation](/assets/auto-weight-evidence/mountaincar-original-confirmation.json)
- [Fixed-candidate retest registration](/assets/auto-weight-evidence/mountaincar-retest-plan.json)
- [Retest confirmation summary](/assets/auto-weight-evidence/mountaincar-retest-summary.json)
