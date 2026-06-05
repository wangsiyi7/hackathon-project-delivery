# Hackathon Project Delivery

> English | [中文](README.zh-CN.md)

Hackathon Project Delivery is an open-source Codex skill/plugin workflow for turning a rough hackathon idea into a public, judge-ready project package.

It was extracted from the LaunchLens UCWS Singapore Hackathon 2026 delivery process and generalized for **UCWS and future hackathons**, including Project Wall, Devpost, demo-day, accelerator, and open-source showcase submissions.

## What It Helps Codex Do

- Research competition rules, tracks, examples, deadlines, and submission fields.
- Shape a real product thesis instead of only writing submission copy.
- Build a working app early and keep documentation connected to product behavior.
- Prepare GitHub repository structure, README, screenshots, tests, and deployment config.
- Publish or verify a public demo link.
- Generate copy-ready submission fields and machine-readable payloads.
- Name credential-gated blockers honestly instead of pretending deployment is complete.
- Preserve the delivery path as reusable evidence for future teams.

## Repository Structure

```text
hackathon-project-delivery/
  .codex-plugin/plugin.json
  skills/hackathon-project-delivery/SKILL.md
  skills/hackathon-project-delivery/agents/openai.yaml
  skills/hackathon-project-delivery/references/delivery-replay.md
  skills/hackathon-project-delivery/references/delivery-replay.zh-CN.md
  docs/ADAPTATION_GUIDE.md
  docs/ADAPTATION_GUIDE.zh-CN.md
  tools/install-codex-plugin.mjs
  tools/validate-structure.mjs
```

## Use Cases

- UCWS Singapore Hackathon and future UCWS events
- Project Wall submissions
- Devpost submissions
- accelerator demo days
- university hackathons
- internal product contests
- open-source showcase launches

## Quick Validation

```powershell
npm.cmd run validate
```

Expected:

```text
structure validation passed
```

If you have the Codex skill/plugin validation scripts available, you can also validate the skill and plugin with the official validators.

## Install As A Personal Codex Plugin

Dry run first:

```powershell
npm.cmd run plugin:install:dry-run
```

Install only when you are ready to write to your personal Codex plugin directory and marketplace file:

```powershell
npm.cmd run plugin:install
```

The installer copies this plugin to:

```text
%USERPROFILE%\plugins\hackathon-project-delivery
```

and updates:

```text
%USERPROFILE%\.agents\plugins\marketplace.json
```

## Core Delivery Gates

1. Audit the event surface.
2. Define the product and real user.
3. Build the working app early.
4. Add submission evidence and scoring.
5. Add visual distinction only after the workflow works.
6. Publish to GitHub.
7. Deploy a public demo.
8. Package and verify the final submission.

## License

MIT
