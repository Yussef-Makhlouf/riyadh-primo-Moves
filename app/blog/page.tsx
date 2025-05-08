import { getAllBlogPosts } from '@/lib/blog'
import BlogList from '@/components/BlogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'المدونة - شركة نقل عفش الرياض',
  description: 'مقالات ونصائح حول نقل العفش في الرياض، نصائح للفك والتركيب، وأحدث الأخبار في مجال نقل الأثاث',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#c19a5b]/5 to-transparent"></div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] bg-clip-text text-transparent mb-4">
              مدونة نقل العفش
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف أحدث المقالات والنصائح المتعلقة بنقل العفش في الرياض
            </p>
          </div>

          <BlogList posts={posts} showFeatured={true} />
        </div>
      </div>
    </main>
  )
} 