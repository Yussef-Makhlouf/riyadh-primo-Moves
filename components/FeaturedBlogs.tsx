import Link from 'next/link';
import { getFeaturedBlogPosts } from '@/lib/blog';
import BlogCard from './BlogCard';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function FeaturedBlogs() {
  const featuredPosts = getFeaturedBlogPosts();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#c19a5b]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <div 
          className="mb-14 text-center animate-fadeIn"
          style={{ 
            opacity: 0, 
            animation: 'fadeIn 0.7s ease-in-out forwards' 
          }}
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c19a5b]/10 mb-6 border border-[#c19a5b]/20">
            <BookOpen className="h-5 w-5 text-[#c19a5b] ml-2" />
            <span className="text-[#c19a5b] font-medium">المدونة</span>
          </span>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] bg-clip-text text-transparent md:text-5xl">
            آخر المدونات
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mt-4">
            استكشف أحدث المقالات والنصائح المتعلقة بالعقارات والانتقال في مدينة الرياض
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fadeIn"
              style={{ 
                opacity: 0, 
                animation: 'fadeIn 0.5s ease-in-out forwards',
                animationDelay: `${0.1 * (index % 3)}s`
              }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div 
          className="mt-14 text-center animate-fadeIn"
          style={{ 
            opacity: 0, 
            animation: 'fadeIn 0.5s ease-in-out forwards',
            animationDelay: '0.3s' 
          }}
        >
          <Link 
            href="/blog" 
            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#c19a5b] bg-white px-6 py-3 font-medium text-[#c19a5b] transition-all duration-300 hover:bg-[#c19a5b] hover:text-white"
          >
            عرض جميع المدونات
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 rtl:rotate-180 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
} 