# Hackathon Delivery Checklist

Use this checklist when running `hackathon-project-delivery` on a real event.

## 1. Event Intake

| Item | Done | Evidence |
| --- | --- | --- |
| Event URL collected |  |  |
| Deadline and timezone recorded |  |  |
| Track/category selected |  |  |
| Required submission fields listed |  |  |
| Public examples inspected |  |  |
| Auth-required endpoints identified |  |  |
| Judging criteria summarized |  |  |

## 2. Product Definition

| Item | Done | Evidence |
| --- | --- | --- |
| User defined |  |  |
| Pain defined |  |  |
| Product thesis written |  |  |
| Minimum workflow defined |  |  |
| Non-goals listed |  |  |
| Risk list written |  |  |

## 3. App Build

| Item | Done | Evidence |
| --- | --- | --- |
| App starts locally |  |  |
| First screen is usable product, not placeholder landing |  |  |
| Sample data included |  |  |
| Core interaction works |  |  |
| Feedback states exist |  |  |
| Mobile layout checked |  |  |
| Screenshot captured |  |  |

## 4. Evidence Layer

| Item | Done | Evidence |
| --- | --- | --- |
| Required-field audit exists |  |  |
| Missing-proof suggestions exist |  |  |
| Score/readiness model exists |  |  |
| Repo URL validation exists |  |  |
| Screenshot/logo paths exist |  |  |
| Copy/export/download behavior works |  |  |

## 5. GitHub

| Item | Done | Evidence |
| --- | --- | --- |
| Repository created |  |  |
| README explains product and usage |  |  |
| Bilingual README added when needed |  |  |
| License added when open source |  |  |
| `docs/`, `tools/`, `tests/`, `assets/` are organized |  |  |
| Raw README URL returns HTTP 200 |  |  |

## 6. Public Demo

| Item | Done | Evidence |
| --- | --- | --- |
| Demo URL deployed |  |  |
| Demo returns HTTP 200 |  |  |
| App identity visible |  |  |
| Main assets load |  |  |
| Mobile route works |  |  |
| Vercel/Netlify blocker documented if token missing |  |  |

## 7. Submission Package

| Item | Done | Evidence |
| --- | --- | --- |
| Copy-ready submission fields written |  |  |
| Payload generated, if needed |  |  |
| Payload validator passes |  |  |
| Final readiness report written |  |  |
| Completion audit written |  |  |
| Source/submission archive generated |  |  |

## 8. Final Verification

Run or adapt:

```powershell
git status --short -uall
npm.cmd test
node tools/validate-submission.mjs
Invoke-WebRequest -Uri "https://github.com/OWNER/REPO" -UseBasicParsing
Invoke-WebRequest -Uri "https://OWNER.github.io/REPO/" -UseBasicParsing
```

## Completion Rule

Only call the work complete when all required items are either verified or blocked solely by named external authorization.
