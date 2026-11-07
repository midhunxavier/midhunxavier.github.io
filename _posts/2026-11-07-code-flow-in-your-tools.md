---
layout: code-flow-article
integration_article: true
title: "Bring your Code Flow team into the tools you already use"
date: 2026-11-07
permalink: /blog/code-flow/code-flow-in-your-cli-and-desktop-apps/
excerpt: "Start a Code Flow team from Claude Code, Codex CLI, Claude Desktop, or the Codex app—and review the work in the conversation where it began."
tags: [Code Flow, Claude Code, Codex, MCP]
---

You are already in a conversation with your coding agent. An idea is taking shape, and you want another perspective: perhaps Claude can draft a plan, Codex can review it, and you can decide what happens next.

You could move the task into another tool and start again. With Code Flow's experimental integration, you can ask for that team from the conversation you are already using. Code Flow prepares an approach, connects it to a shared local workspace, and lets you review the proposed work before task workers start.

## The idea

The same project can be the starting point for a conversation in **Claude Code**, **Codex CLI**, **Claude Desktop**, or the **Codex app**. Code Flow connects to the host through a local Model Context Protocol (MCP) bridge. You describe the goal in ordinary language; the host uses the bridge to prepare and follow a Code Flow task.

For example:

> Use Code Flow for this repository. Have Claude draft a plan for a settings page and Codex review it. Plan only, and show me the proposed approach before starting.

The proposal identifies the project, participants, scope, checks, and limits. You can change the approach before accepting it. A planning approval does not authorize implementation; a later implementation proposal needs its own acceptance.

## Using the CLI

Use this path if you prefer to stay in a Claude Code or Codex terminal conversation. You need **Node.js 22.13+**, **Git 2.38+**, and the coding CLI or CLIs you intend to use, installed and signed in. On Windows, run these commands and your coding CLIs in WSL2, with the repository in the Linux environment.

Install the Code Flow launcher, then initialize your Git project:

```sh
npm install -g @midhunxavier/code-flow@preview
cd /path/to/your-git-project
codeflow init --dry-run
codeflow init
codeflow doctor
```

The dry run shows the proposed setup. `init` configures the project integration and installs its Code Flow skill; `doctor` checks the local setup. Neither starts a team task. The example path is a placeholder: replace it with your own repository directory.

Start `claude` or `codex` in that project, trust the project, and approve its MCP connection if prompted. Invoke **`/codeflow`** in Claude Code or **`$codeflow`** in Codex, then describe your task. If the connection or skill doesn't appear, reload the CLI and check the [terminal integration guide](https://midhunxavier.com/code-flow/docs/cli-conversational-teams.html).

## Using desktop apps

Prefer a desktop conversation? Code Flow has a setup path for **Claude Desktop and the Codex app on macOS**. Codex configuration can also be generated on Linux for compatible clients. Automatic Claude Desktop setup on Windows or WSL is not currently supported.

You still need an installed, signed-in coding CLI for managed workers; a desktop chat subscription alone does not install or authenticate it. Install a persistent Code Flow launcher and its Node.js and Git prerequisites, then run this from the repository you want the connection to use:

```sh
cd /path/to/your-git-project
codeflow desktop setup --dry-run
codeflow desktop setup
codeflow desktop doctor
```

After setup, fully quit and reopen **Claude Desktop**, then check its MCP settings. In the **Codex app**, enable the generated Code Flow connection in **Settings → MCP servers** and open a fresh chat. Select or trust the connection if the host asks. Each desktop connection is app-wide but bound to the project used during setup; confirm the repository shown in the proposal before starting.

These are connections to Claude Desktop and the **Codex app**. The project does not document a direct integration with the general ChatGPT desktop app; don't assume that a ChatGPT chat has the same MCP connection. See [desktop setup](https://midhunxavier.com/code-flow/docs/desktop-mcp.html) for host selection, troubleshooting, and removal.

## What to expect

Ask for a plan, review, or implementation in the host conversation. The assistant shows the proposed team, work, source, checks, and limits. If the host supports the native confirmation form, use it to approve the exact proposal. Otherwise, open the provided **Open in Code Flow** link and start the task there. An ordinary host tool permission does not replace accepting the Code Flow proposal.

Once started, ask for progress or steer the task from the conversation. The Code Flow workspace shows the same proposals, runs, decisions, and artifacts. Managed workers can continue when a host closes, while work assigned to the current host session can wait for reconnection. Ordinary host messages outside Code Flow are not mirrored, and the full workspace opens separately.

Review the actual result, diff, check output, and review findings before applying changes. Checks apply to the snapshot they ran on; worktrees make changes inspectable but are not a security sandbox. [Read about verification](https://midhunxavier.com/code-flow/docs/verification.html) and [execution boundaries](https://midhunxavier.com/code-flow/docs/security.html).

## Support and limits

This integration is experimental. Conversational managed participants are currently **Claude and Codex**; the CLI integration discovers supported models and efforts from your installed providers. Availability, authentication, and usage limits depend on your own CLI accounts. Other Code Flow workflows have different provider support.

The desktop installer and bridge have automated coverage with simulated hosts. In documented native validation, a fresh Codex desktop chat discovered and called read tools. Claude Desktop's Code mode discovered tools, but a run retrieval attempt encountered a backend connection failure; retrieval in Claude Desktop's normal chat mode has not yet been verified. If a host cannot show the native confirmation form, use the shared workspace link. Check the [desktop validation and troubleshooting guide](https://midhunxavier.com/code-flow/docs/desktop-mcp.html#validation-and-scope) for current details.

Start with a small plan-only task, verify that the displayed repository is the one you intended, and approve implementation separately when you're ready. For a closer look at how a task-specific team can be structured, read [Describe the team. Code Flow builds the workflow.](https://midhunxavier.com/blog/code-flow/one-workspace-for-your-coding-agents/)
