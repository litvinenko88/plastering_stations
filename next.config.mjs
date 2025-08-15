/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // distDir: '.next', // Лучше использовать стандартное значение
  experimental: {
    // optimizeCss: false // Лучше отключить, если возникают ошибки
  },
};

export default nextConfig;
