/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(avif)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  transpilePackages: ['framer-motion'],
  modularizeImports: {
    'framer-motion': {
      transform: 'framer-motion/{{member}}',
    },
  },
  basePath: '',
  assetPrefix: '',
}

export default nextConfig