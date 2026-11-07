---
layout: code-flow-article
title: "Describe the team. Code Flow builds the workflow."
date: 2026-11-07
last_modified_at: 2026-11-07
permalink: /blog/code-flow/one-workspace-for-your-coding-agents/
excerpt: "What if you could describe the agents, review rounds, and checks you want—and review the approach before the work begins?"
tags: [Code Flow, coding agents, open source]
---

You have an idea for a feature. You want one model to explore it, another to challenge the idea, a third to turn the discussion into a plan, and a team to build and review the result.

Today that can mean moving between conversations, copying context, and keeping track of which version each agent reviewed. What if you could describe the team and its process in the same place you describe the task?

## The idea

Imagine asking Code Flow:

> Build a settings page for my app. Have Claude Opus brainstorm the approach and Codex Sol review it for up to three rounds. Then have Codex Astra turn the discussion into a plan. Show me the plan before implementation.
>
> Once I approve the plan, propose an implementation with Opus and Sol, then have a fresh Fable reviewer examine the result. Run the relevant checks. Use high effort for each participant where supported.

This is an **illustrative request**, not a claim that these exact model names, roles, or sequence are available in every installation. Model access and effort settings depend on the installed CLI, its catalog, and your account. Code Flow checks explicit choices and asks you to correct unsupported ones rather than silently substituting them. If your installed CLI doesn't offer Fable, for example, choose an available reviewer.

The point is the shape of the request: you describe **who should contribute, how they should collaborate, and what you want to review**. Code Flow helps turn that into a task-specific approach.

## How it works

### 1. Turn the request into an approach

Open **New chat → Team**, choose your project and repository, and describe the outcome. The lead can discuss the idea and prepare an approach with participants, provider and model choices, supported effort settings, work order, checks, completion criteria, and limits. A discussion can use the lead without starting task workers.

For the example above, start with a **plan-only** request. Review the proposed brainstorming and review passes, the model choices, and the maximum number of rounds. Adjust the approach if it doesn't reflect what you asked for. The exact multi-stage sequence depends on what the current workflow supports; simplify or split it into separate tasks when needed.

### 2. Approve the planning work

Select **Start planning** to accept that planning approach. The team can explore options, exchange findings, and review the plan within the accepted limits. A bounded review loop can end with unresolved disagreement; the result should show that rather than claiming agreement that didn't happen.

Read the resulting plan. Ask for changes if you want a different design, a smaller scope, or another review. A plan-only approval does not authorize implementation.

### 3. Approve implementation separately

When you are ready, ask Code Flow to implement the agreed plan. It prepares another approach for you to review: who will write, who will review, which checks will run, and what counts as finished. Correct any unavailable model or unsupported setting, then choose **Start implementation**.

As work proceeds, you can follow the activity in the chat. The result brings the changes, checks, and review evidence together. Inspect the diff and the actual participation and check results before applying the work to your checkout or opening a pull request.

A passing check applies to the code snapshot it tested; it is not proof that the entire application is correct. Agreement is similarly about the specific artifact reviewed. [How verification works](https://midhunxavier.com/code-flow/docs/verification.html)

## What makes it different

**The team is part of the request.** Instead of choosing only a model, you can describe a process: brainstorming, review, a bounded number of passes, implementation, and an independent check. Code Flow presents the proposed approach so you can inspect and change it.

**Different coding CLIs can work together.** Conversational Team tasks can use Claude Code and Codex participants in one workflow, using your installed CLIs and their own logins. You can ask for specific models and supported efforts, or leave those choices to the proposal. Provider access and usage depend on your own accounts and limits.

**You can see the work and its evidence.** The chat keeps the proposal, activity, results, and evidence together. Code changes live in worktrees that you can inspect; a worktree is not a security sandbox. Checks may execute repository code on your machine, and local CLIs still contact their providers. [Read the execution boundaries](https://midhunxavier.com/code-flow/docs/security.html).

Other tools have their own agent collaboration features: [Claude Code agent teams](https://code.claude.com/docs/en/agent-teams) coordinate Claude sessions, [Codex subagents](https://developers.openai.com/codex/multi-agent) delegate work, and [Cursor Cloud Agents](https://cursor.com/docs/cloud-agent) run in cloud environments. Code Flow focuses on bringing supported coding CLIs into a shared, inspectable workflow that can start locally.

## Where it helps

This approach is useful when the work deserves more than one perspective: exploring a design before committing to it, implementing a feature against a reviewed plan, or asking an independent agent to examine a change alongside focused tests.

You don't need a large team for every request. One agent can be enough for a small edit or question. More participants and review passes use more provider calls and time, so set limits that fit the task.

### Provider support today

- **Claude Code and Codex:** supported managed participants for conversational Team tasks, including the experimental integration inside their CLI conversations. Install and sign in to the CLIs you choose.
- **Antigravity:** available for supported Code Flow runs and workflows, with platform and execution restrictions. It is not a managed participant in the conversational Team workflow described above. [Antigravity and Team details](https://midhunxavier.com/code-flow/docs/auto-team.html#run-permissions-across-providers)
- **OpenCode, Kilo, and Cline:** ACP connections can be configured and checked, but cannot currently start new managed runs or provider forks. A successful connection check does not mean execution is enabled. [ACP support](https://midhunxavier.com/code-flow/docs/acp-agents.html)

Provider support, model IDs, effort levels, and workflow capabilities can change. Check the current choices in your installation and review the proposal before accepting it.

## Getting started

Install Node.js 22.13+, Git 2.38+, and a supported coding CLI, then sign in to that CLI. On macOS, Linux, or inside WSL2, start the local browser app:

```sh
npm install -g @midhunxavier/code-flow@preview
codeflow
```

Open **New chat → Team**, select a repository, and start with a plan-only version of the example. Review the plan, then authorize implementation as a separate task when you're ready.

You can also use the experimental integration from a Claude Code or Codex CLI conversation: install the launcher, run `codeflow init` in your Git project, and follow the [terminal setup guide](https://midhunxavier.com/code-flow/docs/cli-conversational-teams.html). The [landing page](https://midhunxavier.com/code-flow/#get-started) has desktop downloads and setup options.

Code Flow is a preview. Choose a repository you trust, review the proposed permissions and checks, and inspect the result before shipping.
