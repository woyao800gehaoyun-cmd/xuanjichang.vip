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
