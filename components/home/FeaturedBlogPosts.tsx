import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { PostMeta } from '@/lib/mdx';

interface FeaturedBlogPostsProps {
  posts: PostMeta[];
  title?: string;
  subtitle?: string;
}

// Format date to Arabic format
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('ar-SA', options);
}

export default function FeaturedBlogPosts({ 
  posts, 
  title = "آخر المقالات والأخبار", 
  subtitle = "اطلع على أحدث المقالات والنصائح حول نقل الأثاث والخدمات اللوجستية" 
}: FeaturedBlogPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredPosts = posts.slice(0, Math.min(posts.length, 6));
  const displayCount = 3; // Number of posts to display at once
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (featuredPosts.length - displayCount + 1)
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredPosts.length - displayCount : prevIndex - 1
    );
  };
  
  const visiblePosts = featuredPosts.slice(currentIndex, currentIndex + displayCount);
  const hasMorePosts = featuredPosts.length > displayCount;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-6"></div>
        </div>
        
        {/* Featured Post - Large */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image 
                    src={featuredPosts[0].image} 
                    alt={featuredPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full">
                        {featuredPosts[0].category}
                      </span>
                      <time className="text-gray-500 text-sm mr-4 flex items-center">
                        <CalendarIcon className="h-4 w-4 ml-1" />
                        {formatDate(featuredPosts[0].date)}
                      </time>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                      <Link href={`/blog/${featuredPosts[0].slug}`}>
                        {featuredPosts[0].title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {featuredPosts[0].excerpt}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">بواسطة {featuredPosts[0].author}</span>
                    <Link 
                      href={`/blog/${featuredPosts[0].slug}`}
                      className="text-purple-600 font-medium hover:text-purple-700 transition-colors flex items-center"
                    >
                      قراءة المزيد
                      <ArrowLeftIcon className="h-4 w-4 mr-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Blog Posts Grid with Carousel */}
        <div className="relative">
          {hasMorePosts && (
            <div className="flex justify-end mb-6 gap-2">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full bg-white shadow-md hover:bg-purple-50 transition-colors"
                aria-label="Previous posts"
              >
                <ArrowRightIcon className="h-5 w-5 text-purple-600" />
              </button>
              <button 
                onClick={nextSlide} 
                className="p-2 rounded-full bg-white shadow-md hover:bg-purple-50 transition-colors"
                aria-label="Next posts"
              >
                <ArrowLeftIcon className="h-5 w-5 text-purple-600" />
              </button>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visiblePosts.map((post, index) => (
              <Link 
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-purple-600 font-medium">{post.category}</span>
                    <time className="text-xs text-gray-500 flex items-center">
                      <CalendarIcon className="h-3 w-3 ml-1" />
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      بواسطة {post.author}
                    </span>
                    <span className="text-purple-600 text-sm font-medium">قراءة المزيد ←</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
          >
            عرض جميع المقالات
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
