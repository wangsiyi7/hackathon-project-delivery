const gates = [
  ["01", "Event Surface", "Capture tracks, deadline, fields, judging lens, examples, and auth boundaries."],
  ["02", "Product Frame", "Define user, recurring pain, thesis, minimum useful workflow, and non-goals."],
  ["03", "Build Early", "Ship an app shell with real state, sample data, feedback, and responsive behavior."],
  ["04", "Evidence Gate", "Audit demo, repo, screenshots, logo, team, tech stack, tests, and missing proof."],
  ["05", "Public Demo", "Deploy a stable link and verify HTTP 200, identity, assets, and mobile usability."],
  ["06", "Final Pack", "Produce README, submission fields, payload, readiness report, archive, and blocker notes."],
];

const evidence = [
  ["Public demo", "Stable URL for judges to inspect the project."],
  ["GitHub repository", "Readable README, license, docs, tests, tools, and app source."],
  ["Submission copy", "Project name, one-line idea, description, team, stack, logo, screenshots."],
  ["Validation", "Tests, link checks, payload validation, and final readiness report."],
  ["Blockers", "Named token/login requirements instead of fake completion claims."],
];

const form = document.getElementById("projectForm");
const gateGrid = document.getElementById("gateGrid");
const matrix = document.getElementById("evidenceMatrix");
const promptBox = document.getElementById("generatedPrompt");
const score = document.getElementById("readinessScore");
const payloadBox = document.getElementById("payloadBox");

function getProject() {
  return {
    eventUrl: document.getElementById("eventUrl")?.value?.trim() || "",
    idea: document.getElementById("idea")?.value?.trim() || "",
    demoUrl: document.getElementById("demoUrl")?.value?.trim() || "",
    repoUrl: document.getElementById("repoUrl")?.value?.trim() || "",
    team: document.getElementById("team")?.value?.trim() || "Huiyoung",
  };
}

function calculateReadiness(project) {
  const checks = [
    project.eventUrl.startsWith("https://"),
    project.idea.length > 48,
    project.demoUrl.startsWith("https://"),
    project.repoUrl.startsWith("https://github.com/"),
    project.team.length > 0,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function renderGates() {
  if (!gateGrid) return;
  gateGrid.innerHTML = gates.map(([num, title, body]) => `
    <article class="gate-card">
      <strong>Gate ${num}</strong>
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `).join("");
}

function renderMatrix(project) {
  if (!matrix) return;
  const rows = evidence.map(([title, body], index) => {
    const ready = [
      project.demoUrl.startsWith("https://"),
      project.repoUrl.startsWith("https://github.com/"),
      project.idea.length > 48,
      project.eventUrl.startsWith("https://"),
      true,
    ][index];
    return `
      <div class="matrix-row">
        <strong>${title}</strong>
        <span>${body}</span>
        <span class="status ${ready ? "" : "warn"}">${ready ? "Ready" : "Needs input"}</span>
      </div>
    `;
  });
  matrix.innerHTML = rows.join("");
}

function renderPrompt(project) {
  if (!promptBox) return;
  promptBox.value = `Use $hackathon-project-delivery to turn this hackathon idea into a shipped submission.

Event URL: ${project.eventUrl}
Team: ${project.team}
Idea: ${project.idea}
Demo target: ${project.demoUrl}
Repository target: ${project.repoUrl}

Please research the event surface, define the product, build the app early, add submission evidence, publish GitHub, deploy a public demo, validate every link, and report any credential-gated blocker honestly.`;
}

function renderPayload() {
  if (!payloadBox) return;
  const payload = {
    projectName: "Hackathon Project Delivery",
    team: "Huiyoung",
    track: "Skill",
    tagline: "A Codex skill for shipping hackathon projects with public demos, GitHub proof, and submission-ready evidence.",
    demoUrl: "https://wangsiyi7.github.io/hackathon-project-delivery/",
    repoUrl: "https://github.com/wangsiyi7/hackathon-project-delivery",
    logoUrl: "https://wangsiyi7.github.io/hackathon-project-delivery/assets/project-logo.png",
    techStack: [
      "Codex Skill",
      "Markdown",
      "JavaScript",
      "HTML",
      "CSS",
      "GitHub Pages",
      "Local validation scripts",
      "Bilingual documentation",
    ],
  };
  payloadBox.value = JSON.stringify(payload, null, 2);
}

function drawCanvas(project) {
  const canvas = document.getElementById("deliveryCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const nodes = [
    [98, 250, "Event", "#e7d7ae"],
    [210, 160, "Frame", "#70c89f"],
    [342, 144, "Build", "#5daec2"],
    [480, 236, "Evidence", "#c58a33"],
    [360, 354, "Demo", "#b85f49"],
    [180, 366, "Submit", "#f7f3ea"],
  ];

  ctx.globalAlpha = 1;
  ctx.strokeStyle = "rgba(247,243,234,.34)";
  ctx.lineWidth = 2;
  ctx.setLineDash([7, 7]);
  for (let i = 0; i < nodes.length; i += 1) {
    const [x1, y1] = nodes[i];
    const [x2, y2] = nodes[(i + 1) % nodes.length];
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  const readiness = calculateReadiness(project);
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 126, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * readiness / 100);
  ctx.strokeStyle = "rgba(112,200,159,.95)";
  ctx.lineWidth = 16;
  ctx.stroke();

  for (const [x, y, label, color] of nodes) {
    ctx.beginPath();
    ctx.arc(x, y, 34, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(23,20,17,.78)";
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.font = "700 15px Segoe UI, Arial";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + 5);
  }

  ctx.fillStyle = "#fffdf7";
  ctx.font = "800 38px Segoe UI, Arial";
  ctx.textAlign = "center";
  ctx.fillText("Huiyoung", width / 2, height / 2 - 8);
  ctx.fillStyle = "rgba(255,253,247,.78)";
  ctx.font = "700 16px Segoe UI, Arial";
  ctx.fillText("delivery skill", width / 2, height / 2 + 24);
}

function update() {
  const project = getProject();
  const readiness = calculateReadiness(project);
  if (score) score.textContent = `${readiness}%`;
  renderMatrix(project);
  renderPrompt(project);
  drawCanvas(project);
  localStorage.setItem("hpd-demo-project", JSON.stringify(project));
}

function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem("hpd-demo-project") || "{}");
    for (const [key, value] of Object.entries(saved)) {
      const input = document.getElementById(key);
      if (input && typeof value === "string") input.value = value;
    }
  } catch {
    localStorage.removeItem("hpd-demo-project");
  }
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(button.dataset.copy || "");
    button.textContent = "Copied";
    setTimeout(() => {
      button.textContent = "Copy";
    }, 900);
  });
});

document.getElementById("copyPrompt")?.addEventListener("click", async () => {
  await navigator.clipboard.writeText(promptBox.value);
});

document.getElementById("copyPayload")?.addEventListener("click", async () => {
  await navigator.clipboard.writeText(payloadBox.value);
});

form?.addEventListener("input", update);
window.addEventListener("resize", () => drawCanvas(getProject()));

restore();
renderGates();
renderPayload();
update();
