/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    output: 'export',
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    ignoreDuringBuilds: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    // Generate static params for dynamic routes
    generateStaticParams: async function () {
      const posts = getAllPosts();
      return posts.map(post => ({
        slug: post.slug,
        category: post.category
      }));
    },
  }
  
  export default nextConfig