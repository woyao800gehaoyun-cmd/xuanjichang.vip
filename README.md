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

仓库已经包含 GitHub Actions 部署流程。将仓库的 Pages 来源设置为 **GitHub Actions** 后，每次推送到 `main` 会自动构建并发布。正式访问地址是：

```text
https://xuanjichang.vip/
```

GitHub Pages 构建已经针对自定义域名使用根路径；`public/CNAME` 会把域名写入静态产物。
