# LaunchLens 交付复盘

这份 reference 记录 LaunchLens 的成功交付路径，供未来 Codex 在黑客松、Demo Day、Project Wall、Devpost 或开源展示任务中复用。

## 时间线摘要

1. 从一个宽泛目标开始：理解 UCWS，查看 Project Wall 期待，并构建一个能快速提交的项目。
2. 识别提交需要可信公开链接、GitHub 仓库、截图、payload 字段和清晰产品故事。
3. 构建初始静态 App 和辅助脚本。
4. 一度过度投入 Markdown 和提交材料。
5. 用户指出问题：项目需要更多真实产品开发，而不是只做 Markdown。
6. 将产品重新定义为 LaunchLens：提交证据门，而不是文档生成器。
7. 加入真实应用行为：字段审计、评分、GitHub 仓库扫描、中英文界面、示例项目和生成输出。
8. 加入 2.5D Temple Mode、步骤节点、悬浮粒子、切换过渡和更稳定的 Classic Mode。
9. 整理 GitHub 仓库：正式 README、docs、tests、tools、payload、部署配置和 Project Wall 字段稿。
10. 推送 GitHub 并发布 GitHub Pages。
11. 准备 Vercel 部署配置和 token 脚本。
12. 因缺少 Vercel token/登录态，诚实标记为外部授权阻塞。

## 经验

- 先构建产品工作流，再扩展文档。
- 公开 URL 检查是必要证据。
- 即使没有部署 token，也应准备好部署脚本。
- 视觉效果必须服务于产品工作流。
- 凭证阻塞必须明确说明，不能伪装完成。
- 当 Vercel/Netlify 授权缺失时，GitHub Pages 是稳定备选。

## 完成标准

类似任务只有在以下条件成立时才算完成：

- 公开 Demo 可访问
- GitHub 仓库可访问
- README 正式完整
- 提交字段可直接复制
- payload 校验通过
- 测试通过
- 最终提交包存在
- 需要凭证的外部门槛被明确写出
