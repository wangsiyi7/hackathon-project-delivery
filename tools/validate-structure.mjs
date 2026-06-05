import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const requiredFiles = [
  "README.md",
  "README.zh-CN.md",
  "LICENSE",
  "package.json",
  ".codex-plugin/plugin.json",
  "skills/hackathon-project-delivery/SKILL.md",
  "skills/hackathon-project-delivery/agents/openai.yaml",
  "skills/hackathon-project-delivery/references/delivery-replay.md",
  "skills/hackathon-project-delivery/references/delivery-replay.zh-CN.md",
  "docs/ADAPTATION_GUIDE.md",
  "docs/ADAPTATION_GUIDE.zh-CN.md",
  "docs/CHECKLIST.md",
  "docs/CHECKLIST.zh-CN.md",
  "tools/install-codex-plugin.mjs",
  "tools/validate-structure.mjs",
];

for (const file of requiredFiles) {
  assert(existsSync(file), `Missing required file: ${file}`);
}

const manifest = JSON.parse(readFileSync(".codex-plugin/plugin.json", "utf8"));
assert(manifest.name === "hackathon-project-delivery", "plugin name mismatch");
assert(/^\d+\.\d+\.\d+$/.test(manifest.version), "plugin version must be semver");
assert(manifest.license === "MIT", "plugin license should be MIT");
assert(manifest.skills === "./skills/", "plugin skills path mismatch");
assert(Array.isArray(manifest.interface.defaultPrompt), "defaultPrompt must be an array");
assert(manifest.interface.defaultPrompt.length <= 3, "defaultPrompt should have at most 3 prompts");

for (const prompt of manifest.interface.defaultPrompt) {
  assert(prompt.length <= 128, `default prompt too long: ${prompt}`);
}

const skill = readFileSync(join("skills", "hackathon-project-delivery", "SKILL.md"), "utf8");
assert(/^---\r?\n[\s\S]*?\r?\n---/.test(skill), "SKILL.md frontmatter missing");
assert(skill.includes("name: hackathon-project-delivery"), "SKILL.md name missing");
assert(skill.includes("description:"), "SKILL.md description missing");
assert(skill.includes("UCWS"), "SKILL.md should mention UCWS support");
assert(skill.includes("future hackathons") || skill.includes("general hackathon"), "SKILL.md should mention general hackathon support");

const readme = readFileSync("README.md", "utf8");
const readmeZh = readFileSync("README.zh-CN.md", "utf8");
assert(readme.includes("[中文](README.zh-CN.md)"), "English README should link Chinese README");
assert(readmeZh.includes("[English](README.md)"), "Chinese README should link English README");
assert(readme.includes("Detailed Delivery Gates"), "English README should include detailed gates");
assert(readmeZh.includes("详细交付关卡"), "Chinese README should include detailed gates");

console.log("structure validation passed");
