'use client';

import FeaturedBlogPosts from './FeaturedBlogPosts';
import { PostMeta } from '@/lib/mdx';

interface FeaturedBlogPostsWrapperProps {
  posts: PostMeta[];
  title?: string;
  subtitle?: string;
}

export default function FeaturedBlogPostsWrapper(props: FeaturedBlogPostsWrapperProps) {
  return <FeaturedBlogPosts {...props} />;
}