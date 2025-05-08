'use client';

import { useState, useEffect } from 'react';
import { BlogPost, getBlogPostsByCategory } from '@/lib/blog';
import BlogCard from './BlogCard';
import ShareButtons from './ShareButtons';

type RelatedPostsProps = {
  category: string;
  currentPostId: string;
};

export default function RelatedPosts({ category, currentPostId }: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  // إنشاء رابط الصفحة الحالية
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href
    : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://primomoves.com'}/blog/${currentPostId}`;
  
  // الحصول على المقالات ذات الصلة
  useEffect(() => {
    const related = getBlogPostsByCategory(category)
      .filter(post => post.id !== currentPostId)
      .slice(0, 3);
    
    setRelatedPosts(related);
  }, [category, currentPostId]);
  
  if (relatedPosts.length === 0) {
    return (
      <div className="my-10">
        <ShareButtons 
          title="مشاركة المقال" 
          url={currentUrl} 
        />
      </div>
    );
  }
  
  return (
    <>
      {/* أزرار المشاركة */}
      <div className="my-10">
        <ShareButtons 
          title="مشاركة المقال" 
          url={currentUrl} 
        />
      </div>
      
      {/* المقالات ذات الصلة */}
      <div 
        className="mt-16 animate-fadeIn"
        style={{ 
          opacity: 0, 
          animation: 'fadeIn 0.5s ease-in-out forwards',
          animationDelay: '0.3s'
        }}
      >
        <h3 className="mb-8 text-2xl font-bold text-gray-900">مقالات ذات صلة</h3>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
} 