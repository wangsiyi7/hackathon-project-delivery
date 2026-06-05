# Hackathon Project Delivery

> [English](README.md) | 中文

Hackathon Project Delivery 是一个开源 Codex Skill/插件流程，用于把粗糙的黑客松想法推进成公开可访问、评审可理解、证据完整的提交项目。

它从 LaunchLens 在 UCWS Singapore Hackathon 2026 的完整交付过程中抽象出来，并被泛化为适用于 **UCWS 以及未来所有黑客松** 的规范流程。它也适用于 Project Wall、Devpost、Demo Day、加速器展示、高校黑客松、内部创新赛和开源项目展示。

## 为什么需要它

黑客松团队很少只是因为想法不够好而失败。更常见的问题发生在最后的公开交付层：

- Demo URL 不稳定或缺失
- GitHub 仓库无法快速解释产品
- 截图、Logo、团队字段不完整
- 产品故事不符合评审查看项目的方式
- 本地能运行，但评审无法在线访问
- 需要凭证的部署被误认为已经完成

这个 Skill 的核心思想是：**外部评审路径也是产品的一部分。**

## 它帮助 Codex 做什么

| 能力 | Codex 应产出什么 |
| --- | --- |
| 比赛研究 | 赛道、截止时间、字段、评审标准、凭证边界、样例 |
| 产品定义 | 用户、痛点、产品论点、范围、非目标 |
| App 交付 | 可运行 App、示例数据、状态、交互反馈、响应式 UI |
| 证据层 | 字段审计、评分、缺失证据列表、仓库检查、截图 |
| GitHub 发布 | 清晰仓库结构、中英文 README、许可证、docs、tools |
| 公开 Demo | GitHub Pages、Vercel、Netlify 或可验证托管备选 |
| 提交包 | 可复制字段、payload、最终就绪报告、源码包 |
| 阻塞处理 | 明确需要的 token/login，不伪装完成 |

## 仓库结构

```text
hackathon-project-delivery/
  .codex-plugin/plugin.json                         Codex 插件 manifest
  skills/hackathon-project-delivery/SKILL.md        Codex Skill 指令
  skills/hackathon-project-delivery/agents/         UI 元数据
  skills/hackathon-project-delivery/references/     LaunchLens 案例复盘
  docs/ADAPTATION_GUIDE.md                          英文适配指南
  docs/ADAPTATION_GUIDE.zh-CN.md                    中文适配指南
  docs/CHECKLIST.md                                 英文交付检查清单
  docs/CHECKLIST.zh-CN.md                           中文交付检查清单
  tools/install-codex-plugin.mjs                    dry-run 优先安装脚本
  tools/validate-structure.mjs                      本地结构校验脚本
```

## 什么时候使用

当用户让 Codex 做这些事情时使用：

- 快速构建黑客松项目
- 准备 UCWS Project Wall 提交
- 准备 Devpost 或类似项目门户提交
- 把粗糙想法变成公开 Demo 和 GitHub 仓库
- 审计项目是否已经可以被评审
- 创建中英文 README 和官方提交字段
- 部署静态 App 并准备最终证据
- 把一次交付过程沉淀成可复用 Codex 流程

如果只是普通功能开发，不涉及公开提交、Demo 或评审路径，不需要使用这个 Skill。

## 新黑客松项目快速开始

向 Codex 这样提问：

```text
Use $hackathon-project-delivery to turn this hackathon idea into a shipped submission.
Event URL: ...
Idea: ...
Preferred stack: ...
```

Codex 应该：

1. 检查比赛页面和最新要求。
2. 识别必填字段、赛道、截止时间和评审标准。
3. 定义产品论点和最小可提交工作流。
4. 先构建 App。
5. 加入证据、评分、导出、截图和文档。
6. 发布 GitHub 并部署公开 Demo。
7. 校验链接、测试、payload 和最终包。
8. 明确说明需要凭证的外部阻塞。

## 详细交付关卡

### Gate 1: 比赛外部信息审计

收集：

- 比赛名称和 URL
- 赛道/分类
- 团队人数和资格要求
- 截止时间和时区
- 提交字段
- Demo、仓库、媒体要求
- 评审标准
- 公开样例
- 需要登录的接口

产出：

- `docs/EVENT_RESEARCH.md` 或等价笔记
- 选择的赛道
- 必需证据矩阵
- 已知授权阻塞

### Gate 2: 产品定义

回答：

- 用户是谁？
- 重复出现的痛点是什么？
- 评审两分钟内能理解什么？
- 最小有用工作流是什么？
- 哪些内容明确不做？

产出：

- 一句话产品论点
- 用户/问题/解决方案表
- 最小功能列表
- 风险列表

### Gate 3: 尽早构建 App

必须具备：

- app shell
- 示例数据
- 交互控件
- 保存状态或确定性状态
- 可见反馈
- 响应式布局
- 不是只有占位文案的 landing page

产出：

- 可运行 App
- 本地启动命令
- 截图路径

### Gate 4: 证据层

加入：

- 必填字段审计
- 缺失证据列表
- 评分或就绪模型
- 仓库 URL 校验
- 截图/Logo 检查
- 复制/导出/下载行为

产出：

- `PROJECT_SUBMISSION.md`
- `project-payload.json`
- `docs/FINAL_READINESS_REPORT.md`

### Gate 5: 视觉和交互打磨

只在核心工作流跑通后加入：

- 空间隐喻
- hover/click 反馈
- 页面切换
- 空状态/加载/错误状态
- 必要时中英文 UX
- 移动端布局验证

### Gate 6: GitHub 仓库

根目录需要清晰：

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

验证：

```powershell
git status --short -uall
Invoke-WebRequest -Uri "https://github.com/OWNER/REPO" -UseBasicParsing
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/OWNER/REPO/main/README.md" -UseBasicParsing
```

### Gate 7: 公开 Demo

优先顺序：

1. GitHub Pages
2. Vercel
3. Netlify
4. 主办方提供的托管方式
5. 临时 tunnel 只用于短期预览，不能作为最终评审链接

验证：

- HTTP 200
- 页面能看到项目身份
- 主资源加载
- 截图能访问
- 移动端可用

### Gate 8: 最终提交包

必须包含：

- 可复制官方字段
- 公开 Demo URL
- GitHub repo URL
- 截图/Logo URL
- 源码包
- 最终就绪报告
- 如有外部阻塞，明确写出

除非每个必需项都有证据，或剩余项明确是外部授权阻塞，否则不要宣布完成。

## UCWS 配方

对于 UCWS 类型赛事：

- 检查 event page 和可用 event API
- 记录 event ID
- 识别 Agent、Skill、Application、Deep Research 等赛道
- 准备 Project Wall 字段
- 将 GitHub repo URL 当作核心证据字段
- 检查项目 API 是否匿名返回 401
- 即使有脚本提交，也准备手动复制字段
- 分开考虑 Community Vote、AI Evaluation 和 Expert Judges

推荐文件名：

```text
PROJECT_WALL_SUBMISSION.md
project-payload.json
docs/FINAL_READINESS_REPORT.md
docs/COMPLETION_AUDIT.md
```

## Devpost 配方

对于 Devpost 类型提交，额外准备：

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

## 安装为个人 Codex 插件

先 dry-run：

```powershell
npm.cmd run plugin:install:dry-run
```

确认要写入个人 Codex 插件目录和 marketplace 后再运行：

```powershell
npm.cmd run plugin:install
```

安装路径：

```text
%USERPROFILE%\plugins\hackathon-project-delivery
```

marketplace 路径：

```text
%USERPROFILE%\.agents\plugins\marketplace.json
```

## 校验仓库

本地结构：

```powershell
npm.cmd run validate
```

预期：

```text
structure validation passed
```

如果有 Codex 官方校验脚本：

```powershell
python path\to\quick_validate.py .\skills\hackathon-project-delivery
python path\to\validate_plugin.py .
```

## 最终完成标准

交付不是“看起来差不多”就算完成。必须有证据证明：

- App 能运行
- 公开 Demo 可访问
- GitHub 仓库可访问
- README 清晰，若用户要求则中英文齐备
- 提交字段可直接复制
- payload 校验通过，如果使用 payload
- 测试通过
- 截图和 Logo 存在
- 最终包存在
- 外部授权阻塞被明确写出

## 许可证

MIT
