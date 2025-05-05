/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  ignoreDuringBuilds: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Exclude tag pages from static generation
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // Filter out tag pages from the default path map
    const filteredPaths = {};
    for (const [path, page] of Object.entries(defaultPathMap)) {
      if (!path.startsWith('/blog/tag/')) {
        filteredPaths[path] = page;
      }
    }
    return filteredPaths;
  },
}

export default nextConfig