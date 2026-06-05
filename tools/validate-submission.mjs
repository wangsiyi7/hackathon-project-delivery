import { existsSync, readFileSync, statSync } from "node:fs";

const requiredUrls = [
  "https://wangsiyi7.github.io/hackathon-project-delivery/",
  "https://wangsiyi7.github.io/hackathon-project-delivery/submission.html",
  "https://github.com/wangsiyi7/hackathon-project-delivery",
  "https://wangsiyi7.github.io/hackathon-project-delivery/assets/project-logo.png",
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const payload = JSON.parse(readFileSync("project-payload.json", "utf8"));
assert(payload.projectName === "Hackathon Project Delivery", "projectName mismatch");
assert(payload.team === "Huiyoung", "team must be Huiyoung");
assert(payload.track === "Skill", "track must be Skill");

for (const key of ["demoUrl", "submissionUrl", "repoUrl", "logoUrl", "tagline", "techStack"]) {
  assert(typeof payload[key] === "string" && payload[key].trim(), `${key} is required`);
}

for (const url of requiredUrls) {
  assert(JSON.stringify(payload).includes(url), `payload missing URL: ${url}`);
}

assert(existsSync("index.html"), "index.html demo is required");
assert(existsSync("submission.html"), "submission.html is required");
assert(existsSync("PROJECT_WALL_SUBMISSION.md"), "English submission markdown is required");
assert(existsSync("PROJECT_WALL_SUBMISSION.zh-CN.md"), "Chinese submission markdown is required");
assert(existsSync("assets/project-logo.png"), "PNG project logo is required");
assert(statSync("assets/project-logo.png").size < 5 * 1024 * 1024, "project logo must be below 5MB");

const index = readFileSync("index.html", "utf8");
const submission = readFileSync("submission.html", "utf8");
const english = readFileSync("PROJECT_WALL_SUBMISSION.md", "utf8");
assert(index.includes("Interactive Skill Console"), "demo page should present the skill console");
assert(submission.includes("Copy-Ready Submission"), "submission page should be copy-ready");
assert(english.includes("Huiyoung"), "English submission should include team name");
assert(english.includes(payload.demoUrl), "English submission should include demo URL");

console.log("submission validation passed");
