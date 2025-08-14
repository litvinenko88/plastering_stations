/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/plastering_stations' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/plastering_stations' : '',
  distDir: 'out'
};

export default nextConfig;