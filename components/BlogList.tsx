'use client'
import { useState } from 'react';
import { BlogPost, getAllBlogPosts } from '@/lib/blog';
import BlogCard from './BlogCard';
import { Filter } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
  showFeatured?: boolean;
  title?: string;
}

export default function BlogList({ posts, showFeatured = false, title }: BlogListProps) {
  // استخراج جميع التصنيفات الفريدة من المدونات
  const allCategories = Array.from(new Set(getAllBlogPosts().map(post => post.category)));
  
  // حالة التصنيف المحدد
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // حالة عرض قائمة التصنيفات على الأجهزة الصغيرة
  const [showFilters, setShowFilters] = useState(false);

  // إذا كان هناك عرض للمدونات المميزة، نعرض أول مدونة بطريقة مميزة
  const featuredPost = showFeatured && posts.length > 0 ? posts[0] : null;
  
  // تصفية المدونات حسب التصنيف المحدد
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;
  
  const regularPosts = showFeatured && filteredPosts.length > 0 && !selectedCategory
    ? filteredPosts.slice(1) 
    : filteredPosts;

  // تبديل عرض التصفية على الأجهزة الصغيرة
  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <div className="container mx-auto py-12 px-4">
      {title && (
        <div className="mb-12 text-center animate-fadeInUp">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
        </div>
      )}
      
      {/* تصفية حسب التصنيف */}
      {allCategories.length > 0 && (
        <div className="mb-10">
          {/* زر عرض التصفية على الأجهزة الصغيرة */}
          <button
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 md:hidden"
            onClick={toggleFilters}
          >
            <Filter size={16} />
            {showFilters ? 'إخفاء التصنيفات' : 'عرض التصنيفات'}
          </button>
          
          {/* تصنيفات للأجهزة الصغيرة */}
          <div className={`mb-6 flex flex-col gap-2 md:hidden ${showFilters ? 'block' : 'hidden'}`}>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-lg px-4 py-2 text-center text-sm font-medium transition-all duration-300 ${
                selectedCategory === null 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              الكل
            </button>
            {allCategories.map(category => (
              <button
                key={`mobile-${category}`}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg px-4 py-2 text-center text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* تصنيفات للأجهزة الكبيرة */}
          <div className="hidden flex-wrap items-center justify-center gap-3 rounded-xl bg-gray-50 p-4 md:flex">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === null 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              الكل
            </button>
            {allCategories.map(category => (
              <button
                key={`desktop-${category}`}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-12">
        {/* المدونة المميزة */}
        {featuredPost && !selectedCategory && (
          <div 
            className="mb-12 rounded-xl border border-gray-100 p-2 shadow-md animate-fadeIn"
            style={{ 
              opacity: 0, 
              animation: 'fadeIn 0.5s ease-in-out forwards'
            }}
          >
            <BlogCard post={featuredPost} featured={true} />
          </div>
        )}

        {/* قائمة المدونات العادية */}
        {regularPosts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="animate-fadeIn rounded-xl border border-gray-100 p-2 shadow-sm transition-all duration-300 hover:shadow-md"
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
        ) : (
          <div className="mt-12 rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-lg text-gray-600">لا توجد مدونات في هذا التصنيف حالياً</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              عرض جميع المدونات
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 