import { getCompiledPost, getAllPosts, type PostMeta } from '@/lib/mdx'
import MDXContent from '@/components/MDXContent'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { CalendarIcon, TagIcon, ClockIcon } from '@heroicons/react/24/outline'
import ShareButtons from '@/components/ShareButtons'


interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getCompiledPost(params.slug)
  const postUrl = `https://primomoves.com/blog/${params.slug}`
  const keywords = post.tags ? post.tags.join(', ') : ''
  
  return {
    title: `${post.title} | نقل عفش الرياض بريمو موفرز`,
    description: post.excerpt,
    keywords: keywords,
    alternates: {
      canonical: postUrl
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      url: postUrl,
      siteName: 'نقل عفش الرياض بريمو موفرز',
      locale: 'ar_SA',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      site: '@primomoves',
    },
  }
}

// Estimate reading time based on word count
function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
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

// Table of contents component


function RelatedPosts({ currentPost, posts }: { currentPost: PostMeta, posts: PostMeta[] }) {
  const relatedPosts = posts
    .filter(post => 
      post.slug !== currentPost.slug && 
      (post.category === currentPost.category || 
       (post.tags && currentPost.tags && post.tags.some(tag => currentPost.tags.includes(tag))))
    )
    .slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <div className="mt-16 pt-10 border-t border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center relative">
        <span className="relative inline-block text-black ">
          مقالات ذات صلة
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="group bg-white text-black rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
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
              <span className="text-xs text-purple-600 font-medium mb-2">{post.category}</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {formatDate(post.date)}
                </span>
                <span className="text-purple-600 text-sm font-medium">قراءة المزيد ←</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Call to action component
function CallToAction() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-md my-12 text-center">
      <h3 className="text-2xl font-bold text-purple-800 mb-4">هل تحتاج إلى خدمة نقل أثاث احترافية؟</h3>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">فريق بريمو موفرز جاهز لمساعدتك في نقل أثاثك بأمان وكفاءة. نقدم خدمات متكاملة تشمل الفك والتركيب والتغليف والنقل.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="tel:0565265233"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg font-medium"
        >
          تواصل معنا الآن
        </Link>
        <Link
          href="/#services"
          className="bg-white text-purple-600 border border-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-sm hover:shadow-md font-medium"
        >
          استكشف خدماتنا
        </Link>
      </div>
    </div>
  );
}

// Progress bar component

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  // Return all possible slug values
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const post = await getCompiledPost(params.slug)
  const allPosts = getAllPosts()
  const readingTime = getReadingTime(post.content || '')
  const postUrl = `https://primomoves.com/blog/${params.slug}`

  return (
    <>
      {/* <ProgressBar /> */}
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12 md:py-20">
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Enhanced */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <div className="absolute bottom-0 w-full p-6 md:p-10 text-white">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Link 
                    href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-purple-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    {post.category}
                  </Link>
                  <time className="text-purple-100 text-sm flex items-center">
                    <CalendarIcon className="h-4 w-4 ml-1" />
                    {formatDate(post.date)}
                  </time>
                  <span className="text-purple-100 text-sm flex items-center">
                    <ClockIcon className="h-4 w-4 ml-1" />
                    {readingTime} دقائق للقراءة
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">{post.title}</h1>
                <div className="flex items-center gap-2 text-purple-100">
                  <span>بواسطة</span>
                  <span className="font-medium text-white">{post.author}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Full Width */}
          <div className="max-w-4xl mx-auto">
            {/* Tags */}

{post.tags && (
  <div className="flex flex-wrap gap-2 mb-8">
    {post.tags.map((tag) => (
      <span
        key={tag}
        className="bg-purple-100 text-purple-600 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors flex items-center"
      >
        <TagIcon className="h-3 w-3 ml-1" />
        {tag}
      </span>
    ))}
  </div>
)}


{/* Tags at the bottom - Enhanced */}
<div className="mt-8 flex flex-wrap gap-2 bg-white p-4 rounded-xl shadow-sm">
  <span className="text-gray-700 font-medium">الوسوم:</span>
  {post.tags.map((tag) => (
    <span
      key={`bottom-${tag}`}
      className="text-purple-600 hover:text-purple-800  bg-purple-50 px-3 py-1 rounded-lg hover:bg-purple-100 transform hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      #{tag}
    </span>
  ))}
</div>


            {/* Table of Contents - Horizontal Layout */}
            {/* {post.content && <TableOfContents content={post.content} />} */}

            {/* Excerpt - Enhanced */}
            <div className="mb-8">
              <p className="text-xl text-gray-700 font-medium leading-relaxed border-r-4 border-purple-500 pr-4 py-2 bg-purple-50 rounded-l-lg">
                {post.excerpt}
              </p>
            </div>

            {/* Share buttons */}
            <div className="mb-8">
              <ShareButtons url={postUrl} title={post.title} />
            </div>

            {/* Content - Enhanced */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg rtl:text-right bg-white p-6 md:p-10 rounded-2xl shadow-md">
              {/* Enhanced content styling */}
              <div className="not-prose mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <CalendarIcon className="h-4 w-4 ml-1" />
                    نُشر في {formatDate(post.date)}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <ClockIcon className="h-4 w-4 ml-1" />
                    {readingTime} دقائق للقراءة
                  </span>
                </div>
              </div>
              
              <MDXContent source={post.source} />
              
              {/* Enhanced post footer */}
              <div className="not-prose mt-10 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    آخر تحديث: {formatDate(post.date)}
                  </div>
                  <ShareButtons url={postUrl} title={post.title} />
                </div>
              </div>
            </div>

            {/* Tags at the bottom - Enhanced */}
            <div className="mt-8 flex flex-wrap gap-2 bg-white p-4 rounded-xl shadow-sm">
              <span className="text-gray-700 font-medium">الوسوم:</span>
              {post.tags.map((tag) => (
                <span
                  key={`bottom-${tag}`}
                  className="text-purple-600 hover:text-purple-800 transition-colors bg-purple-50 px-3 py-1 rounded-lg hover:bg-purple-100"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Call to Action */}
            <CallToAction />
          </div>

          {/* Related Posts */}
          <RelatedPosts currentPost={post} posts={allPosts} />

          {/* Back to Blog - Enhanced */}
          <div className="mt-16 text-center">
            <Link
                          href="/blog"
                          className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300"
                        >
                          <span>العودة إلى المدونة</span>
                          <span>←</span>
                        </Link>
                      </div>
                    </article>
                  </div>
            
                  {/* Client-side script for progress bar */}
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
                        document.addEventListener('DOMContentLoaded', function() {
                          const progressBar = document.getElementById('progress-bar');
                          
                          window.addEventListener('scroll', () => {
                            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                            const clientHeight = document.documentElement.clientHeight || window.innerHeight;
                            const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
                            
                            progressBar.style.width = scrollPercentage + '%';
                          });
            
                          // Add smooth scrolling for table of contents links
                          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                            anchor.addEventListener('click', function (e) {
                              e.preventDefault();
                              const targetId = this.getAttribute('href');
                              const targetElement = document.querySelector(targetId);
                              
                              if (targetElement) {
                                window.scrollTo({
                                  top: targetElement.offsetTop - 100,
                                  behavior: 'smooth'
                                });
                              }
                            });
                          });
            
                          // Add heading IDs for the table of contents
                          document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
                            if (!heading.id) {
                              const id = heading.textContent.toLowerCase().replace(/\\s+/g, '-');
                              heading.id = id;
                            }
                          });
            
                          // Highlight active headings as user scrolls
                          const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
                          const tocLinks = document.querySelectorAll('nav a');
                          
                          if (headings.length > 0 && tocLinks.length > 0) {
                            window.addEventListener('scroll', () => {
                              let current = '';
                              
                              headings.forEach(heading => {
                                const sectionTop = heading.offsetTop - 120;
                                if (scrollTop >= sectionTop) {
                                  current = '#' + heading.id;
                                }
                              });
                              
                              tocLinks.forEach(link => {
                                link.classList.remove('text-purple-600', 'font-medium');
                                if (link.getAttribute('href') === current) {
                                  link.classList.add('text-purple-600', 'font-medium');
                                }
                              });
                            });
                          }
                        });
                      `,
                    }}
                  />
                </>
              )
            }
            