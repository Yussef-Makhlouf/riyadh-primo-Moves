import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';

interface Props {
  params: { tag: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = params.tag.replace(/-/g, ' ');
  const allPosts = getAllPosts();
  console.log("البحث عن الوسم:", tag);
  console.log("الأوسمة المتاحة:", allPosts.flatMap(post => post.tags || []));
  return {
    title: `مقالات بوسم ${tag} | نقل عفش الرياض بريمو موفرز`,
    description: `تصفح مقالاتنا ونصائحنا بوسم ${tag} وخدمات نقل الأثاث في الرياض`,
    keywords: `نقل عفش الرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض, نقل عفش بالرياض `
  };
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

export async function generateStaticParams() {
    const posts = getAllPosts();
    const tags = new Set<string>();
    
    posts.forEach(post => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach(tag => {
          // تنظيف الوسم وإضافته إلى المجموعة
          const cleanTag = tag.toLowerCase().trim();
          tags.add(cleanTag);
        });
      }
    });
    
    console.log("الأوسمة التي تم إنشاؤها:", Array.from(tags));
    
    return Array.from(tags).map(tag => ({
      tag: tag.replace(/\s+/g, '-'),
    }));
  }
  
  
export default function TagPage({ params }: Props) {
  const tag = params.tag.replace(/-/g, ' ');
  const allPosts = getAllPosts();
  
  // Filter posts by tag or category
  const tagPosts = allPosts.filter(post => {
    if (!post.tags || !Array.isArray(post.tags)) return false;
    
    // البحث عن الوسم في قائمة الأوسمة
    return post.tags.some(postTag => {
      // تحويل كلا النصين إلى أحرف صغيرة وإزالة المسافات الزائدة
      const normalizedPostTag = postTag.toLowerCase().trim();
      const normalizedSearchTag = tag.toLowerCase().trim();
      
      return normalizedPostTag === normalizedSearchTag;
    });
  });
  
  
  // Sort by date (newest first)
  const sortedPosts = [...tagPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-lg mb-4">
            وسم
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {tag}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تصفح مقالاتنا ونصائحنا بوسم {tag} وخدمات نقل الأثاث في الرياض
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-8"></div>
        </header>

        {tagPosts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">لا توجد مقالات متاحة</h2>
            <p className="text-gray-600 mb-8">لم نعثر على أي مقالات بهذا الوسم. يرجى تصفح الأوسام الأخرى.</p>
            <Link 
              href="/blog"
              className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              العودة إلى المدونة
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
                >
                  <div className="relative h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
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

            <div className="mt-16 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
              >
                <span>العودة إلى المدونة</span>
                <span className="mr-2">←</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}