# Hackathon Project Delivery

> [English](README.md) | 中文

Hackathon Project Delivery 是一个开源的 Codex Skill/插件流程，用于把粗糙的黑客松想法推进成公开可访问、评审可理解、证据完整的提交项目。

它从 LaunchLens 在 UCWS Singapore Hackathon 2026 的完整交付过程中抽象出来，并被泛化为适用于 **UCWS 以及未来所有黑客松** 的规范流程。它也适用于 Project Wall、Devpost、Demo Day、加速器展示和开源项目展示。

## 它帮助 Codex 做什么

- 研究比赛规则、赛道、样例项目、截止时间和提交字段。
- 从真实用户和产品价值出发，而不是只写提交文案。
- 尽早构建可运行 App，让文档服务于产品行为。
- 准备 GitHub 仓库结构、README、截图、测试和部署配置。
- 发布或验证公开 Demo 链接。
- 生成可复制的提交字段和机器可读 payload。
- 对 Vercel、Epic、Devpost 等凭证门槛进行诚实标注，不伪装完成。
- 将整个交付路径沉淀为未来团队可复用的证据。

## 仓库结构

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

## 适用场景

- UCWS Singapore Hackathon 以及未来 UCWS 赛事
- Project Wall 提交
- Devpost 提交
- 加速器 Demo Day
- 高校黑客松
- 公司内部产品竞赛
- 开源项目展示

## 快速校验

```powershell
npm.cmd run validate
```

预期输出：

```text
structure validation passed
```

如果本地有 Codex 官方 Skill/Plugin 校验脚本，也可以继续运行官方校验。

## 安装为个人 Codex 插件

先 dry-run：

```powershell
npm.cmd run plugin:install:dry-run
```

确认路径无误后再安装：

```powershell
npm.cmd run plugin:install
```

安装脚本会复制插件到：

```text
%USERPROFILE%\plugins\hackathon-project-delivery
```

并更新：

```text
%USERPROFILE%\.agents\plugins\marketplace.json
```

## 核心交付关卡

1. 审计比赛外部信息。
2. 定义产品和真实用户。
3. 尽早构建可运行 App。
4. 加入提交证据和评分逻辑。
5. 工作流跑通后再加入视觉差异化。
6. 上传 GitHub。
7. 部署公开 Demo。
8. 打包并验证最终提交物。

## 许可证

MIT
