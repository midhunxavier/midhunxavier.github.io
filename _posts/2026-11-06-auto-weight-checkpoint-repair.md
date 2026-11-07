---
title: "Repairing a copying regression with AutoWeight"
date: 2026-11-06
last_modified_at: 2026-11-07
permalink: /blog/auto-weight/checkpoint-repair-and-weight-space-experiments/
redirect_from:
  - /blog/auto-weight/blog-title/
excerpt: "One training regression, two proposed weight edits, and a held-out check: what AutoWeight repaired, what it preserved, and what this result establishes."
layout: auto-weight-article
sections:
  - id: how-autoweight-works
    label: How AutoWeight works
  - id: the-copying-regression
    label: The copying regression
  - id: what-passed-confirmation
    label: Confirmation results
  - id: what-this-result-establishes
    label: What the result establishes
  - id: running-your-own-repair
    label: Run your own repair
  - id: when-the-experiment-is-worth-running
    label: When to run an experiment
tags:
  - AutoWeight
  - checkpoint repair
  - weight-space programming
---

A model can become worse at a behavior as training continues. AutoWeight provides a way to test a weight edit against both the regression and the behavior you want to preserve. An agent proposes an edit, a local runner measures it on development examples, and a separate confirmation set decides whether the candidate can be exported.

For the broader research context, see [Sparks of Weight-Space Programming: LLMs can natively read & write neural network weights](https://rikiyat.github.io/blog/weight-space-programming/) by Rikiya Takehi, Jayden Teoh, Alex Zhang, and Omar Khattab. Their study examines general-purpose LLMs reading and writing neural network weights directly. AutoWeight focuses on testing proposed repairs against explicit improvement and preservation checks.

This article follows one documented repair: a copying regression that emerged during an earlier training study. It involved a small research transformer and synthetic token sequences. The checkpoints and the observed regression existed before the repair was designed. It is evidence for this particular repair workflow; a confirmed repair of a public fine-tune would be a separate case.

*Updated November 7, 2026.*

*The source repositories linked below are private. Their documentation and run artifacts require repository access; the measured results and limitations are summarized here.*

## How AutoWeight works

**Freeze the experiment.** Start with a checkpoint, independent development and confirmation examples, and rules for improvement and preservation. AutoWeight records the inputs and acceptance gates before testing proposals.

**Propose and measure.** Codex or Claude Code can propose edits through local MCP. The CLI also accepts manual proposals or uses a local Ollama proposer. For compatible checkpoints, edits can restore selected tensors from an earlier checkpoint, blend weights, or scale them. Development feedback helps decide whether to discard a proposal or select it for confirmation.

**Confirm and export.** The runner rebuilds the selected edit, checks that it matches the development candidate, and scores it on the held-out examples. Export requires both the improvement and preservation gates to pass. The report records the evaluated checkpoint, changed tensors, scores, and acceptance decision. [Workflow and evaluation rules](https://github.com/midhunxavier/auto-weight/blob/main/docs/05-evaluation-protocol.md)

## The copying regression

A four-layer causal transformer, trained with seed 11101, learned to copy repeated permutations of distinct tokens. Between training steps 500 and 1,000, it became worse at copying sequences containing token collisions. The earlier study measured collision-copy accuracy of 44.6% at step 500 and 33.2% at step 1,000 on its fixed-position prompts. Both checkpoints had been saved at fixed steps during that study. [Original training and measurements](https://github.com/midhunxavier/weight-space-programming/blob/9b4a7b1f2a0156caba723158b4c3ff31c1ede2bd/packages/weight-edit-toolkit/research/inspector/examples/specificity-validation-20261105/README.md)

The repair used the later checkpoint as the base and the earlier one as a donor. Its evaluation examples varied prompt offsets from 0 through 16, so the repair scores below use a different dataset from the earlier study. Collision-copy accuracy was the behavior to improve. Accuracy on sequences with unique tokens was the behavior to preserve.

Codex authored two proposals. First, it tested restoring the earlier readout. Exploratory scores showed lower loss with almost no accuracy change. It then explored blends of 10%, 25%, and 50% toward the earlier checkpoint and selected the 50% blend for the tracked workflow. Both tracked proposals were recorded before confirmation. The selected blend covered the complete state and changed 33 tensors.

## What passed confirmation

Development used 256 examples per group. Confirmation used 1,024 per group from a separate seed. The frozen gates required a lower confidence bound of at least **+3 percentage points** on collision-copy accuracy and at least **−2 points** on unique-copy accuracy.

<div class="table-scroll" role="region" aria-label="Copying regression repair results" tabindex="0" markdown="1">

| Trial | Collision accuracy, base → candidate | Unique accuracy, base → candidate | Result |
| --- | --- | --- | --- |
| Development: restore readout | 39.58% → 39.67% | 99.43% → 99.41% | Discarded |
| Development: blend checkpoints | 39.58% → 47.55% | 99.43% → 99.35% | Eligible |
| Confirmation: blend checkpoints | **38.75% → 47.41%** | **99.31% → 99.31%** | **Accepted** |

</div>

On confirmation, collision-copy accuracy improved by **8.66 percentage points**, with a lower bound of **+8.29 points**. Unique-copy accuracy changed by **+0.008 points**, with a lower bound of **−0.10 points**. Both gates passed.

The evaluator loaded the serialized candidate at both stages. Verification matched the accepted NPZ bytes to the evaluation reports, and the input base and donor remained unchanged. The repository includes the [proposals, provenance, and reproduction instructions](https://github.com/midhunxavier/auto-weight/tree/main/examples/copy-repair), along with the [confirmation report](https://github.com/midhunxavier/auto-weight/blob/main/examples/copy-repair/confirmation.json).

## What this result establishes

For this training run and these two tasks, a checkpoint blend improved the regressed behavior while passing the held-out preservation check. AutoWeight made the proposal, evaluation, and export decision traceable.

The edit itself was standard checkpoint interpolation. A full rollback was not scored on confirmation, so this experiment does not establish an advantage over rollback or show that an LLM finds better repairs than a fixed blend. The repaired model still missed roughly half the collision targets. The result covers one small model trained on synthetic sequences and two related copying tasks.

Preservation also depends on the metric. Unique-copy accuracy passed, but its negative log-likelihood increased from 0.0291 to 0.0349. Collision negative log-likelihood improved from 3.852 to 2.766. The frozen issue gated accuracy and recorded loss as a secondary measure. A passing result means the specified checks passed; broader behavior needs broader evaluation.

## Running your own repair

Install AutoWeight with Python 3.11 or newer on macOS or Linux:

```sh
uv tool install 'auto-weight[hf,mcp]'
```

For a local Hugging Face causal language model, prepare two labeled JSONL files with at least 32 independent examples per gated behavior in each file. Name the improvement group `fix` and give each preservation behavior its own group. Keep the confirmation examples out of the proposer's context. [Supported models and data format](https://github.com/midhunxavier/auto-weight/blob/main/docs/12-hugging-face.md)

Start a local Ollama service and install the default proposer with `ollama pull qwen3.5`, then run:

```sh
auto-weight repair --base ./my-model \
  --development dev.jsonl --confirmation holdout.jsonl \
  --donor ./earlier-model \
  --issue "Describe the regression and the behavior to preserve"
```

The proposer and the model being repaired are separate models. The donor must be compatible with the base; omit it when no earlier checkpoint is available, in which case the automatic proposer can try scaling edits. Set `--improve` and `--preserve` to define your own acceptance gates. The first candidate that passes development is checked once on confirmation. A failing confirmation ends the run without an accepted export. [Automatic repair settings](https://github.com/midhunxavier/auto-weight/blob/main/docs/13-automatic-repair.md)

For Codex or Claude Code, configure the same local runner with `auto-weight setup-runtime --input-root ./repair-inputs` and follow the [plugin setup](https://github.com/midhunxavier/auto-weight/blob/main/plugins/auto-weight/README.md). The agent can then propose edits through MCP and use development feedback before selecting a candidate.

## When the experiment is worth running

AutoWeight is useful when the regression is narrow, the model fits the local runtime, and you can score both the fix and preservation. Compare the base, an earlier checkpoint, and a simple blend on development examples before spending an agent budget. If rollback already meets the relevant requirements, that may be enough.

Choose gates that reflect the behavior your application needs, reserve confirmation for the selected candidate, and reload an accepted export through the serving path you intend to use. The copying case demonstrates a measured improvement under those checks. Further cases are needed to establish how often this approach helps with regressions in larger, publicly available fine-tunes.
