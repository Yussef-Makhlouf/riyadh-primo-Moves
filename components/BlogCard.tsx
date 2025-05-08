import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  coverImage: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  return (
    <article className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#c19a5b]/10 ${featured ? 'md:flex' : ''}`}>
      <Link href={`/blog/${post.slug}`} className={`block relative ${featured ? 'md:w-2/5' : ''}`}>
        <div className={`relative overflow-hidden ${featured ? 'h-full' : 'h-48'}`}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      <div className={`p-6 ${featured ? 'md:w-3/5' : ''}`}>
        {/* <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-[#c19a5b] ml-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-[#c19a5b] ml-1" />
            <span>{post.readTime}</span>
          </div>
        </div> */}

        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c19a5b] transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        </Link>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-[#c19a5b] font-medium hover:text-[#8b6b3d] transition-colors"
        >
          اقرأ المزيد
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default BlogCard 