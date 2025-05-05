import { getAllPosts } from '@/lib/mdx';
import FeaturedBlogPostsWrapper from './FeaturedBlogPostsWrapper';

export default function HomeBlogSection() {
  const allPosts = getAllPosts();
  
  // Sort posts by date (newest first)
  const sortedPosts = [...allPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return (
    <FeaturedBlogPostsWrapper 
      posts={sortedPosts}
      title="آخر المقالات والنصائح"
      subtitle="اطلع على أحدث المقالات والنصائح حول نقل الأثاث والخدمات اللوجستية في الرياض"
    />
  );
}