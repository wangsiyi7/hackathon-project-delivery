# Hackathon Project Delivery

> English | [中文](README.zh-CN.md)

Hackathon Project Delivery is an open-source Codex skill/plugin workflow for shipping hackathon projects end to end: research the event, shape the product, build the app, publish GitHub, deploy a public demo, prepare submission fields, and verify the package before judging.

It was extracted from the LaunchLens UCWS Singapore Hackathon 2026 delivery process and generalized for **UCWS and future hackathons**. It also works for Project Wall, Devpost, demo-day, accelerator, university hackathon, internal innovation, and open-source showcase workflows.

## Why This Exists

Hackathon teams rarely fail only because the idea is weak. They often fail at the final public handoff:

- the demo URL is unstable or missing
- the GitHub repo does not explain the product
- screenshots, logo, or team fields are incomplete
- the story does not match how judges inspect projects
- the app works locally but cannot be reviewed publicly
- credential-gated deployment is mistaken for completion

This skill teaches Codex to treat the external review path as part of the product.

## What The Skill Helps Codex Do

| Capability | What Codex should produce |
| --- | --- |
| Event research | Tracks, deadlines, fields, judging criteria, auth boundaries, examples |
| Product framing | user, pain, product thesis, scope, non-goals |
| App delivery | runnable app, sample data, state, interaction feedback, responsive UI |
| Evidence layer | field audit, scoring, missing-proof list, repo checks, screenshots |
| GitHub publishing | clean repo structure, bilingual README, license, docs, tools |
| Public demo | GitHub Pages, Vercel, Netlify, or verified hosting fallback |
| Submission pack | copy-ready fields, payload, final readiness report, source archive |
| Blocker handling | exact token/login needed, never fake completion |

## Repository Structure

```text
hackathon-project-delivery/
  .codex-plugin/plugin.json                         Codex plugin manifest
  skills/hackathon-project-delivery/SKILL.md        Codex skill instructions
  skills/hackathon-project-delivery/agents/         UI metadata
  skills/hackathon-project-delivery/references/     LaunchLens case replay
  docs/ADAPTATION_GUIDE.md                          event adaptation guide
  docs/ADAPTATION_GUIDE.zh-CN.md                    Chinese adaptation guide
  docs/CHECKLIST.md                                 detailed delivery checklist
  docs/CHECKLIST.zh-CN.md                           Chinese delivery checklist
  tools/install-codex-plugin.mjs                    dry-run-first installer
  tools/validate-structure.mjs                      local structure validator
```

## When To Use This Skill

Use it when a user asks Codex to:

- build a hackathon project quickly
- prepare a UCWS Project Wall submission
- submit to Devpost or a similar project portal
- turn a rough idea into a public demo and GitHub repo
- audit whether a project is ready for judging
- create a bilingual README and official submission fields
- deploy a static app and prepare final evidence
- preserve a delivery process as a reusable Codex workflow

Do not use it for ordinary feature work where no public submission, demo, or judging surface exists.

## Quick Start For A New Hackathon Project

Ask Codex:

```text
Use $hackathon-project-delivery to turn this hackathon idea into a shipped submission.
Event URL: ...
Idea: ...
Preferred stack: ...
```

Expected Codex behavior:

1. Inspect the event page and current requirements.
2. Identify required fields, tracks, deadline, and judging criteria.
3. Define a product thesis and minimum shippable workflow.
4. Build the app first.
5. Add evidence, scoring, exports, screenshots, and docs.
6. Publish GitHub and deploy a public demo.
7. Validate links, tests, payload, and final package.
8. Report any credential-gated blocker explicitly.

## Detailed Delivery Gates

### Gate 1: Event Surface Audit

Collect:

- event title and URL
- track/category list
- team size and eligibility
- deadline and timezone
- submission fields
- demo/repo/media requirements
- judging criteria
- public examples
- authenticated endpoints

Output:

- `docs/EVENT_RESEARCH.md` or equivalent notes
- selected track
- required evidence matrix
- known auth blockers

### Gate 2: Product Framing

Answer:

- Who is the user?
- What repeatable pain is being solved?
- What will judges understand in two minutes?
- What is the smallest useful workflow?
- What is deliberately out of scope?

Output:

- one-sentence product thesis
- user/problem/solution table
- minimum feature list
- risk list

### Gate 3: Build The App Early

Required:

- app shell
- sample data
- interactive controls
- saved state or deterministic state
- visible feedback
- responsive layout
- no placeholder-only landing page

Output:

- runnable app
- local server command
- screenshot path

### Gate 4: Evidence Layer

Add:

- required-field audit
- missing-proof list
- scoring or readiness model
- repo URL validation
- screenshot/logo checks
- copy/export/download behavior

Output:

- `PROJECT_SUBMISSION.md`
- `project-payload.json`
- `docs/FINAL_READINESS_REPORT.md`

### Gate 5: Visual And Interaction Polish

Only after core workflow works:

- spatial metaphor if useful
- hover/click feedback
- page transitions
- empty/loading/error states
- bilingual UX when requested
- mobile layout verification

Output:

- desktop screenshot
- mobile screenshot
- visual interaction notes

### Gate 6: GitHub Repository

Required root clarity:

```text
README.md
LICENSE
index.html / app source
assets/
docs/
tests/
tools/
deployment config
submission fields
```

Verify:

```powershell
git status --short -uall
Invoke-WebRequest -Uri "https://github.com/OWNER/REPO" -UseBasicParsing
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/OWNER/REPO/main/README.md" -UseBasicParsing
```

### Gate 7: Public Demo

Preferred order:

1. GitHub Pages
2. Vercel
3. Netlify
4. organizer-provided hosting
5. temporary tunnel only for short review, never final judging

Verify:

- HTTP 200
- app identity visible
- main assets load
- screenshots load
- mobile viewport usable

### Gate 8: Final Submission Package

Required:

- copy-ready official fields
- public demo URL
- GitHub repo URL
- screenshots/logo URLs
- source archive
- final readiness report
- exact remaining external blockers, if any

Do not call the work complete unless every required item is proven or the remaining blocker is external authorization.

## UCWS Recipe

For UCWS-style events:

- inspect the event page and event API if available
- record the event ID when found
- identify tracks such as Agent, Skill, Application, Deep Research
- prepare Project Wall copy fields
- use GitHub repo URL as a first-class evidence field
- check whether project APIs return 401 without login
- prepare manual copy-paste fields even if scripted submission exists
- consider community vote, AI evaluation, and expert judges separately

Recommended output names:

```text
PROJECT_WALL_SUBMISSION.md
project-payload.json
docs/FINAL_READINESS_REPORT.md
docs/COMPLETION_AUDIT.md
```

## Devpost Recipe

For Devpost-style events, prepare:

- inspiration
- what it does
- how it was built
- challenges
- accomplishments
- what is next
- built-with tags
- video URL
- demo URL
- source code URL

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

## Validate This Repository

Local structure:

```powershell
npm.cmd run validate
```

Expected:

```text
structure validation passed
```

Codex official validation, when scripts are available:

```powershell
python path\to\quick_validate.py .\skills\hackathon-project-delivery
python path\to\validate_plugin.py .
```

## Final Completion Standard

The delivery is not complete because it looks plausible. It is complete when evidence proves:

- the app runs
- the public demo works
- the GitHub repo works
- README is clear and bilingual if requested
- submission fields are copy-ready
- payload validates, when used
- tests pass
- screenshots and logo exist
- final package exists
- external auth blockers are named exactly

## License

MIT
