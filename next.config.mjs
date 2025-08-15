/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  // Removed assetPrefix and basePath for custom domain
  experimental: {
    optimizeCss: true
  }
};

export default nextConfig;