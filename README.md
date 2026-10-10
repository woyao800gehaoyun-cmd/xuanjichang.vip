# 线路观测站

Next.js App Router 静态导出博客，使用本地 Markdown/MDX 评测数据。

## 本地开发

```bash
npm install
npm run dev
```

## 生成静态站

```bash
npm run build
```

静态文件输出到 `out/`。请通过 HTTP 服务预览导出结果，不要直接双击 `out/index.html`，否则浏览器会阻止 `/_next/static/` 下的 CSS 和 JS 加载，页面会退化为无样式 HTML：

```bash
npx serve out
```

Cloudflare Pages 的构建命令为 `npm run build`，输出目录为 `out`。

## GitHub Pages

仓库已经包含 GitHub Actions 部署流程。将仓库的 Pages 来源设置为 **GitHub Actions** 后，每次推送到 `main` 会自动构建并发布。GitHub 已将原仓库 `xuanjichang.xyz` 迁移到 `xuanjichang.vip`，因此项目站点地址以仓库当前名称为准，通常是：

```text
https://woyao800gehaoyun-cmd.github.io/xuanjichang.vip/
```

GitHub Pages 构建会从 `GITHUB_REPOSITORY` 自动读取仓库名称作为 `basePath`；本地开发和自定义域名仍使用根路径，不会互相影响。
