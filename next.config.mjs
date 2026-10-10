/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'xuanjichang.xyz';
const configuredBasePath = process.env.GITHUB_PAGES_BASE_PATH;
const githubPagesBasePath = configuredBasePath ?? `/${repositoryName}`;

const nextConfig = {
  output: 'export',
  // GitHub project pages are served from /<repository>, while Cloudflare
  // Pages and a custom domain are served from the domain root.
  basePath: isGithubPages ? githubPagesBasePath : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
