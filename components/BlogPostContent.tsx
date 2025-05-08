'use client';

import { useEffect, useRef } from 'react';
import TableOfContents from './TableOfContents';

type BlogPostContentProps = {
  content: string;
};

export default function BlogPostContent({ content }: BlogPostContentProps) {
  // تقسيم المحتوى إلى أجزاء حسب الرموز
  const sections = content.split('##').filter(Boolean);
  const mainContent = sections.shift()?.replace('#', '') || '';
  
  // مرجع للمحتوى
  const contentRef = useRef<HTMLDivElement>(null);
  
  // إضافة تأثيرات بصرية للنص فقط (بدون إضافة معرفات للعناوين)
  useEffect(() => {
    if (contentRef.current) {
      // تطبيق تأثير تدريجي على العناوين
      const headings = contentRef.current.querySelectorAll('h2');
      headings.forEach((heading, index) => {
        (heading as HTMLElement).style.opacity = '0';
        (heading as HTMLElement).style.animation = `fadeInUp 0.5s ease-out ${0.2 + index * 0.1}s forwards`;
      });
    }
  }, []);

  return (
    <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg prose-blockquote:border-r-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:italic">
      {sections.map((section: string, index: number) => {
        const [title, ...content] = section.split('\n').filter(Boolean);
        const sectionId = `section-${index + 1}`;
        
        return (
          <div 
            key={index} 
            className="mb-16 rounded-xl border-r-4 border-blue-600 bg-blue-50/50 p-8"
            style={{
              opacity: 0,
              animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.15}s forwards`
            }}
          >
            <h2 
              id={sectionId}
              className="mb-8 text-3xl font-bold text-blue-900 scroll-mt-24"
            >
              {title.trim()}
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              {content.map((paragraph: string, pIndex: number) => (
                <p key={pIndex} className="text-gray-700">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
} 