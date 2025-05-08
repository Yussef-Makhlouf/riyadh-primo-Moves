import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import BlogPostContent from "@/components/BlogPostContent";
import RelatedPosts from "@/components/RelatedPosts";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";

// جلب البيانات الوصفية
export const generateMetadata = async ({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> => {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "المدونة غير موجودة | رياض بريمو",
    };
  }
  
  return {
    title: `${post.title} | رياض بريمو`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage || '/images/blog/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
};

// توليد المسارات الثابتة
export const generateStaticParams = async () => {
  const posts = getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// صفحة تفاصيل المدونة
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  // إذا لم يتم العثور على المدونة، انتقل إلى صفحة 404
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#c19a5b]/5 to-transparent"></div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-[#c19a5b] hover:text-[#8b6b3d] transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 ml-2" />
            العودة إلى المدونة
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] bg-clip-text text-transparent mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-[#c19a5b] ml-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#c19a5b] ml-2" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <BlogPostContent content={post.content} />
              </div>
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <TableOfContents content={post.content} />
                  <ShareButtons url={`/blog/${post.slug}`} title={post.title} />
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-24">
            <RelatedPosts category={post.category} currentPostId={post.id} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 