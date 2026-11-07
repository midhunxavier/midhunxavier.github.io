---
layout: code-flow-article
title: "Your coding agents. One workspace."
date: 2026-11-07
permalink: /blog/code-flow/one-workspace-for-your-coding-agents/
excerpt: "Code Flow brings coding agents together around a task, with a clear way to plan, build, review, and decide what happens next."
tags: [Code Flow, coding agents, open source]
---

Coding agents are becoming part of everyday development. One can explore a codebase, another can implement a change, and another can catch something the first missed. But as the work grows, so does the coordination: which agent did what, what was actually checked, and where is the result?

Code Flow is an open-source workspace for that part of the job. It brings your installed coding CLIs together around a task, so you can follow the work from an idea to a result you can inspect.

## The idea

A useful development workflow is more than a prompt followed by an answer. It has context, choices, feedback, and a point where a person decides whether the work is ready. Code Flow makes those steps visible.

You can use Claude Code, Codex, and Antigravity through their installed CLIs and existing logins. Give Code Flow a repository and a goal, choose how you want the work approached, and follow the agents as they plan, build, and review. Provider access and usage depend on your own accounts and their limits.

## How it works

Imagine you need to fix a form that accepts an empty email address. You describe the bug and ask for a focused test. Code Flow can help you organize a workflow in which one agent investigates and implements the fix, a check runs, and another agent reviews the result.

1. **Describe the task.** Select a Git repository, explain the outcome, and add any context or checks that matter.
2. **Choose an approach.** Pick a workflow or review a proposed team, its participants, checks, and limits before starting.
3. **Follow and guide the work.** See activity as it happens, respond to questions, and inspect the changes and evidence.
4. **Review the result.** Look at the diff, checks, and review findings before applying changes or opening a pull request.

That example describes a possible workflow, not a benchmark or a guarantee that an agent will find every defect. A passing check is evidence about the snapshot it ran against; it is not proof that the whole application is correct. [Read about verification](https://midhunxavier.com/code-flow/docs/verification.html).

## What makes it different

**One workflow across coding CLIs.** Code Flow can bring Claude Code and Codex into the same task, alongside other supported providers and workflows. You can choose roles and review the proposed process rather than manually carrying context between separate conversations. It uses the providers' own CLIs and authentication; availability and quota still depend on each provider.

**Your machine is a starting point.** The browser app runs locally, using the tools and logins you have installed. Code Flow also offers remote and container options when appropriate. Local does not mean disconnected: the coding CLIs contact their providers, and checks can run repository code on your machine. [Understand the execution boundaries](https://midhunxavier.com/code-flow/docs/security.html).

**The result includes the path to it.** A run can show agent activity, worktree changes, checks, and review findings together. Separate Git worktrees make changes easier to inspect without treating a worktree as a security sandbox. You remain responsible for deciding whether the evidence is enough.

**Work where you prefer.** Use the web workspace or desktop preview, or connect the experimental project integration to a Claude Code or Codex CLI conversation. In the terminal, Code Flow proposes a task-specific approach that you can review before it starts. [See the terminal guide](https://midhunxavier.com/code-flow/docs/cli-conversational-teams.html).

Other products already have powerful agent workflows. [Claude Code agent teams](https://code.claude.com/docs/en/agent-teams) coordinate Claude sessions, [Codex subagents](https://developers.openai.com/codex/multi-agent) support delegated work, and [Cursor Cloud Agents](https://cursor.com/docs/cloud-agent) run agents in cloud environments. Code Flow's particular focus is combining supported coding CLIs in a shared, inspectable workflow that can start on your own machine. These tools evolve, and the right choice depends on your workflow.

## Where it helps

Code Flow is useful when a task benefits from a second perspective or a clear handoff: a feature that needs planning and implementation, a bug fix that needs a focused check, a review that should surface findings before a merge, or an idea where you want multiple approaches considered.

For a small question or a quick edit, one agent may be enough. A team adds coordination and uses more provider calls, so choose the smallest workflow that gives you useful evidence.

## Getting started

Install Node.js 22.13+, Git 2.38+, and at least one supported coding CLI, then sign in to the CLI. On macOS, Linux, or inside WSL2, start the local web app:

```sh
npm install -g @midhunxavier/code-flow@preview
codeflow
```

The launcher opens the app in your browser; keep the terminal open while you work. Desktop preview downloads and requirements are on the [Code Flow landing page](https://midhunxavier.com/code-flow/#get-started). For Claude Code or Codex, install the launcher, run `codeflow init` in your Git project, and follow the [CLI setup guide](https://midhunxavier.com/code-flow/docs/cli-conversational-teams.html).

Code Flow is a preview. Start with a repository and task you trust, inspect the proposed permissions and checks, and use the result as a starting point for your own review.
