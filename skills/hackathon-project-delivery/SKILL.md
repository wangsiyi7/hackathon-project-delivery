---
name: hackathon-project-delivery
description: Build and ship UCWS, Project Wall, Devpost, demo-day, accelerator, open-source showcase, or general hackathon projects end to end. Use when Codex must research competition requirements, define a product, implement a working web app, prepare bilingual README/submission fields, publish to GitHub, deploy a public demo, validate links/tests/assets, package deliverables, or honestly handle credential-gated deployment blockers.
---

# Hackathon Project Delivery

Use this skill to move from rough competition intent to a verified public submission package. It supports UCWS and future hackathons.

## Operating Principle

Treat the external review path as the product surface. Code is not enough. The final state must be inspectable through a public demo, GitHub repository, README, submission fields, screenshots, tests, and validated links.

## Workflow

1. **Audit the event surface**
   - Identify event URL, track options, submission fields, judging lens, public examples, auth boundaries, and deadline assumptions.
   - Browse current sources when event data, rules, or public project lists may have changed.
   - For UCWS, check event API/page, tracks, Project Wall constraints, and whether project APIs require authentication.
   - Produce a short evidence table with source URL, requirement, proof, and uncertainty.

2. **Define the product**
   - Name the real user, recurring pain, product thesis, and minimum shippable workflow.
   - Prefer a usable product over a documentation-only output.
   - Ask what value remains useful after this single hackathon.
   - If the work drifts into documentation only, stop and re-center on a usable product behavior.

3. **Build the app early**
   - Create the runnable app before producing large documentation sets.
   - Include real state, sample data, interaction feedback, export/copy behavior, and responsive layout.
   - Start a local server when the app needs one, then provide the HTTP URL.

4. **Add submission evidence**
   - Add field audit, scoring, missing-proof suggestions, payload generation, and repository checks when relevant.
   - Keep official copy fields in a root-level markdown file.
   - Support bilingual fields when the user asks for Chinese and English.
   - Include examples, missing-field warnings, and the exact next action for each incomplete item.

5. **Add visual distinction after the workflow works**
   - Use spatial, animated, or atmospheric effects only when they support orientation.
   - Preserve a clean operational mode for judges and maintainers.
   - Verify that visual effects do not hide the core workflow, fields, or submission actions.

6. **Publish to GitHub**
   - Keep root structure clear: README, app files, assets, docs, tests, tools, deployment config.
   - Verify remote files through raw GitHub URLs, not memory.
   - Keep root README, docs index, tests, tools, deployment config, and submission copy easy to find.

7. **Deploy a public demo**
   - Prefer GitHub Pages, Vercel, or Netlify.
   - Verify HTTP 200, app identity, key assets, screenshots, and mobile usability.
   - If provider credentials are missing, create the deploy script and mark the auth gate honestly.
   - Use GitHub Pages as a stable fallback when Vercel/Netlify authorization is missing.

8. **Package and verify**
   - Run tests, payload validation, link checks, and final readiness report.
   - Generate source archive and submission pack.
   - Do not declare completion until every explicit user requirement is proven or externally blocked.
   - Create or update a completion audit that separates verified work from credential-gated work.

## Granular Evidence Matrix

For each major requirement, track:

- requirement
- artifact path or URL
- verification command
- result
- remaining blocker, if any

Use this shape for final audits:

```text
Requirement | Evidence | Verification | Status | Blocker
```

## Required Artifacts

- working app source
- public demo URL
- GitHub repository URL
- formal README, bilingual when requested
- copy-ready submission fields
- machine-readable payload when applicable
- screenshots and logo
- validation scripts or tests
- deployment config
- final readiness report
- source/submission archive

## Validation Commands

Adapt commands to the repo, but always verify:

```powershell
git status --short -uall
npm.cmd test
node tools/validate-submission.mjs
node tools/final-readiness-report.mjs
```

For public links:

```powershell
Invoke-WebRequest -Uri "https://github.com/OWNER/REPO" -UseBasicParsing
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/OWNER/REPO/main/README.md" -UseBasicParsing
Invoke-WebRequest -Uri "https://OWNER.github.io/REPO/" -UseBasicParsing
```

## Failure Rules

- Do not treat placeholders as final values.
- Do not submit temporary tunnel URLs as final demo links.
- Do not claim Vercel/Netlify deployment without a verified production URL.
- Do not claim official Project Wall/Devpost submission without authentication proof.
- Do not let documentation work replace product work.
- Do not hide auth blockers; name the exact token or login state needed.
- Do not mark the task complete only because the local app works.

## Case Studies And Adaptation

- For the LaunchLens replay, read `references/delivery-replay.md`.
- For the Chinese replay, read `references/delivery-replay.zh-CN.md`.
- For broad hackathon adaptation, read `docs/ADAPTATION_GUIDE.md` or `docs/ADAPTATION_GUIDE.zh-CN.md` from the repository root.
