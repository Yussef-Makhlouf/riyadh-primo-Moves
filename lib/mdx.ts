import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

const POSTS_PATH = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  title: string
  excerpt: string
  date: string
  image: string
  author: string
  category: string
  tags: string[]
  slug: string
}

export interface Post extends PostMeta {
  content: string
  source: any
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH).filter(path => /\.mdx?$/.test(path))
}

export function getPostBySlug(slug: string): Post {
  // Remove .mdx extension if present in the slug
  const cleanSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(POSTS_PATH, `${cleanSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    ...(data as PostMeta),
    content,
    slug: slug.replace(/\.mdx?$/, ''),
    source: null // Will be populated by getCompiledPost
  }
}

export async function getCompiledPost(slug: string): Promise<Post> {
  const post = getPostBySlug(slug)
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypePrism,
        [rehypePrettyCode, {
          theme: 'github-dark',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
        }],
      ],
    },
  })

  return { ...post, source: mdxSource }
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs()
  console.log("قائمة الملفات:", slugs)
  
  const posts = slugs
    .map((slug) => {
      try {
        const post = getPostBySlug(slug)
        console.log(`تم قراءة المقال: ${slug}, التصنيف: ${post.category}, الأوسمة: ${post.tags?.join(', ')}`)
        return post as PostMeta
      } catch (error) {
        console.error(`خطأ في قراءة المقال ${slug}:`, error)
        return null
      }
    })
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  console.log(`تم العثور على ${posts.length} مقال`)
  return posts
}
export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categoriesSet = new Set(posts.map(post => post.category))
  return Array.from(categoriesSet)
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagsSet = new Set(posts.flatMap(post => post.tags))
  return Array.from(tagsSet)
}

export function getPostsByCategory(category: string): PostMeta[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): PostMeta[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}