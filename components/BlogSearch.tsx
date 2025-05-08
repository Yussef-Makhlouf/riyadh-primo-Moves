'use client';

import { useState, useEffect } from 'react';
import { getAllBlogPosts } from '@/lib/blog';
import { Search, X, AlertCircle } from 'lucide-react';
import BlogList from './BlogList';

export default function BlogSearch() {
  const allPosts = getAllBlogPosts();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // تصفية المدونات حسب كلمة البحث
  const filteredPosts = searchTerm 
    ? allPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // تعيين حالة البحث عندما يقوم المستخدم بإدخال نص
  useEffect(() => {
    if (searchTerm) {
      setIsSearching(true);
    }
  }, [searchTerm]);

  // مسح حقل البحث
  const clearSearch = () => {
    setSearchTerm("");
    setIsSearching(false);
  };

  return (
    <>
      {/* قسم العنوان والبحث */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-purple-700 py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-[10%] -top-[10%] h-[40%] w-[40%] rounded-full bg-white blur-3xl"></div>
          <div className="absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-white blur-3xl"></div>
          <div className="absolute -bottom-[20%] right-[20%] h-[40%] w-[40%] rounded-full bg-white blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-4 text-center text-white">
          <div
            className="animate-fadeIn"
            style={{ 
              opacity: 0, 
              animation: 'fadeIn 0.5s ease-in-out forwards'
            }}
          >
            <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
              أحدث المدونات
            </span>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">مدونة رياض بريمو</h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              اكتشف أحدث المقالات والنصائح المتعلقة بالعقارات والانتقال في مدينة الرياض
            </p>
            
            <div className="mx-auto max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="ابحث في المدونة..."
                  className="w-full rounded-full border-2 border-white/20 bg-white/10 px-6 py-3 pr-12 text-white backdrop-blur-sm placeholder:text-white/60 focus:border-white/30 focus:outline-none"
                />
                {searchTerm ? (
                  <button 
                    onClick={clearSearch}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                ) : (
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* عرض المحتوى */}
      <div className="animate-fadeIn" style={{ opacity: 0, animation: 'fadeIn 0.5s ease-in-out forwards' }}>
        {isSearching ? (
          /* نتائج البحث */
          filteredPosts.length > 0 ? (
            <BlogList 
              posts={filteredPosts} 
              showFeatured={false} 
              title={`نتائج البحث: ${filteredPosts.length} مدونة`}
            />
          ) : (
            /* لا توجد نتائج للبحث */
            <div className="container mx-auto py-16 px-4">
              <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
                <AlertCircle className="mx-auto mb-4 h-16 w-16 text-blue-500 opacity-60" />
                <h2 className="mb-2 text-2xl font-bold text-gray-800">لا توجد نتائج للبحث</h2>
                <p className="mb-6 text-gray-600">
                  لم نتمكن من العثور على أي مدونات تطابق "{searchTerm}"
                </p>
                <button
                  onClick={clearSearch}
                  className="rounded-full bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  العودة إلى جميع المدونات
                </button>
              </div>
            </div>
          )
        ) : (
          /* جميع المدونات */
          <BlogList 
            posts={allPosts} 
            showFeatured={true} 
            title="جميع المقالات"
          />
        )}
      </div>

      {/* زر العودة إلى جميع المدونات */}
      {isSearching && filteredPosts.length > 0 && (
        <div className="container mx-auto mb-16 px-4 text-center">
          <button
            onClick={clearSearch}
            className="rounded-full bg-blue-100 px-6 py-2 text-sm font-medium text-blue-700 transition-all hover:bg-blue-200"
          >
            العودة إلى جميع المدونات
          </button>
        </div>
      )}
    </>
  );
} 