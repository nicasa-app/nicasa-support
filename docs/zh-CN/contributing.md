# 参与贡献

我们欢迎你来改进 Nicasa 支持文档！无论是修正错别字、新增指南，还是优化现有内容，你的帮助都很有价值。

## 贡献方式

### 改进文档
- 修正错别字或语法错误
- 澄清含糊的说明
- 补充缺失的信息
- 更新过时的内容
- 改善排版与可读性

### 新增内容
- 编写常见问题的指南
- 添加教程或示例
- 把文档翻译成其他语言
- 撰写常见问题条目

### 技术贡献
- 改进构建流程
- 为文档站点添加新功能
- 修复部署工作流中的问题

## 快速上手

### 前置要求
- Node.js 18 或更高版本
- pnpm 包管理器
- Git

### 开发环境搭建

1. 在 GitHub 上 **Fork 仓库**
2. **克隆你的 fork**：
   ```bash
   git clone https://github.com/YOUR_USERNAME/nicasa-support.git
   cd nicasa-support
   ```
3. **安装依赖**：
   ```bash
   pnpm install
   ```
4. **启动开发服务器**：
   ```bash
   pnpm docs:dev
   ```
5. 在浏览器中打开 `http://localhost:5173`

### 修改内容

1. 为你的改动创建一个新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 修改 `docs/` 下的文档文件
3. 构建站点以检验改动：
   ```bash
   pnpm docs:build
   ```
4. 提交你的改动：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 提交改动

1. **推送你的分支**到你的 fork：
   ```bash
   git push origin feature/your-feature-name
   ```
2. 在 GitHub 上**创建 Pull Request**
3. **等待评审**并回应反馈

## 规范

### 写作风格
- 使用清晰简洁的语言
- 尽可能使用主动语态
- 保持包容与友好
- 使用一致的排版格式
- 在合适的地方附上代码示例

### 文件结构
- 文档页面放在 `docs/`
- 指南放在 `docs/guide/`
- 文件名使用小写并用连字符：`my-new-guide.md`
- 不强制要求 frontmatter，但可用于元数据

### 链接
- 内部文档使用相对链接
- 在合适处链接到外部资源
- 确保所有链接可用

### 图片与资源
- 图片放在 `docs/public/` 或其子目录中
- 使用有描述性的文件名
- 优化图片体积（建议小于 500KB）

## 多语言

本站支持 7 种语言：英语（`docs/`）、西班牙语（`es`）、简体中文（`zh-CN`）、繁体中文（`zh-TW`）、日语（`ja`）、德语（`de`）、法语（`fr`）。

- 每种语言的页面放在 `docs/<lang>/`，目录结构与英文版保持一一对应
- 译文中的内部链接需要带语言前缀，例如 `/zh-CN/guide/usage`
- 首页文案位于 `index.md` 的 `home:` frontmatter 中
- 新增语言时，在 `docs/.vitepress/config.ts` 的 `STR`、`MD`、`locales` 三处同步添加

## 行为准则

本项目遵循行为准则。参与即表示你同意：
- 保持尊重与包容
- 聚焦建设性反馈
- 为自己的失误承担责任

详情见 [CODE_OF_CONDUCT.md](https://github.com/nicasa-project/nicasa-support/blob/main/CODE_OF_CONDUCT.md)。

## 有疑问？

如果你对贡献有疑问：
- 查看已有的 [issues](https://github.com/nicasa-project/nicasa-support/issues) 与 [discussions](https://github.com/nicasa-project/nicasa-support/discussions)
- 如有需要，新建一个 issue
- 联系维护者

感谢你帮助改进 Nicasa 支持文档！🎉
