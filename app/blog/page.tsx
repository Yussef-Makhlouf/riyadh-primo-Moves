import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'المدونة | نقل عفش الرياض بريمو موفرز',
  description: 'تصفح مقالاتنا ونصائحنا حول نقل الأثاث والخدمات اللوجستية في الرياض',
  keywords: [
    'نقل عفش الرياض',
    'نقل الأثاث',
    'خدمات لوجستية',
    'نقل الأثاث بالرياض',
    'خدمات نقل الأثاث',
    'شركة نقل اثاث',
    'افضل شركة نقل عفش',
    'نقل عفش رخيص',
    'نقل اثاث منزلي', 
    'شركة نقل عفش بالرياض',
    'نقل اثاث بالرياض',
    'شركة نقل اثاث رخيصة',
    'نقل عفش شمال الرياض',
    'نقل عفش شرق الرياض',
    'نقل عفش غرب الرياض',
    'نقل عفش جنوب الرياض',
    'فك وتركيب اثاث',
    'تغليف اثاث',
    'تخزين اثاث',
    'شركة نقل اثاث مضمونة',
    'ارخص شركة نقل عفش',
    'نقل اثاث مع التغليف',
    'نقل اثاث مع الضمان',
    'نقل اثاث مع الفك والتركيب'
  ]
};

// Format date to Arabic format
function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('ar-SA', options);
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  
  // Sort by date (newest first)
  const sortedPosts = [...allPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get all unique categories
  const categories = Array.from(new Set(allPosts.map(post => post.category)));
  
  // Get all unique tags
  const tags = Array.from(new Set(allPosts.flatMap(post => post.tags || [])));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-purple-50">
      {/* Full-width Navbar at the top */}
      <div className="w-full">
        <Navbar />
      </div>
      
      <div className="flex-grow py-16">
        {/* Featured Post */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              مدونة بريمو موفرز
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تصفح مقالاتنا ونصائحنا حول نقل الأثاث والخدمات اللوجستية في الرياض
            </p>
            <div className="w-24 h-1 bg-purple-600 mx-auto mt-8"></div>
          </header>

          {/* Featured Post */}
          {sortedPosts.length > 0 && (
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-80 lg:h-auto">
                    <Image 
                      src={sortedPosts[0].image} 
                      alt={sortedPosts[0].title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <Link 
                          href={`/blog/category/${sortedPosts[0]?.category?.toLowerCase()?.replace(/\s+/g, '-')}`}
                          className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {sortedPosts[0].category}
                        </Link>
                        <time className="text-gray-600 text-sm mr-4 flex items-center">
                          <CalendarIcon className="h-4 w-4 ml-1" />
                          {formatDate(sortedPosts[0].date)}
                        </time>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        <Link href={`/blog/${sortedPosts[0].slug}`}>
                          {sortedPosts[0].title}
                        </Link>
                      </h2>
                      <p className="text-gray-700 mb-6 text-lg">
                        {sortedPosts[0].excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {sortedPosts[0].tags && sortedPosts[0].tags.map(tag => (
                          <span 
                            key={tag}
                            className="text-purple-700 bg-purple-50 px-3 py-1 rounded-lg text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">بواسطة {sortedPosts[0].author}</span>
                      <Link 
                        href={`/blog/${sortedPosts[0].slug}`}
                        className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow-md"
                      >
                        قراءة المقال
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-6">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sortedPosts.slice(1).map((post) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                    className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                  >
                    <div className="relative h-52 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-purple-700 font-medium">{post.category}</span>
                        <time className="text-xs text-gray-600 flex items-center">
                          <CalendarIcon className="h-3 w-3 ml-1" />
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-700 line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="text-xs text-gray-600">
                          بواسطة {post.author}
                        </span>
                        <span className="text-purple-700 text-sm font-medium">قراءة المزيد ←</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2 text-gray-800">أحدث المقالات</h3>
                <ul className="space-y-4">
                  {sortedPosts.slice(0, 5).map((post) => (
                    <li key={post.slug} className="border-b border-gray-100 pb-3 last:border-0">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="block"
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image 
                              src={post.image} 
                              alt={post.title} 
                              fill 
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 text-gray-800">{post.title}</h4>
                            <time className="text-xs text-gray-600">{formatDate(post.date)}</time>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
