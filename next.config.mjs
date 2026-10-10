/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'xuanjichang.xyz';

const nextConfig = {
  output: 'export',
  // GitHub project pages are served from /<repository>, while Cloudflare
  // Pages and a custom domain are served from the domain root.
  basePath: isGithubPages ? `/${repositoryName}` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
