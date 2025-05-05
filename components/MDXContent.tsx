'use client';

import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Custom components for MDX
const CustomComponents = {
  // Enhanced heading components
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 mt-8 relative pb-3 border-b border-purple-200">
      {children}
      <span className="absolute bottom-0 left-0 w-24 h-1 bg-purple-600"></span>
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-8 relative">
      <span className="relative inline-block">
        {children}
        {/* <span className="absolute bottom-0 left-0 right-0 h-1 bg-purple-400 transform -translate-y-1"></span> */}
      </span>
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 mt-6">{children}</h3>
  ),
  
  // Enhanced paragraph
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-700 mb-4 leading-relaxed text-lg">{children}</p>
  ),
  
  // Enhanced lists
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 pr-6">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 pr-6">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-gray-700 leading-relaxed">{children}</li>
  ),
  
  // Enhanced link
  a: ({ href, ...props }: any) => {
    if (href.startsWith('/')) {
      return <Link href={href} {...props} />;
    }
    if (href.startsWith('#')) {
      return <a href={href} {...props} />;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
  },
  
  // Custom blockquote
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-r-4 border-purple-500 pr-4 italic my-6 text-gray-700 bg-purple-50 p-4 rounded-lg">
      {children}
    </blockquote>
  ),
  
  // Custom image wrapper
  img: ({ src, alt, ...props }: any) => {
    return (
      <div className="relative w-full h-64 my-6">
        <Image 
          src={src} 
          alt={alt || ''}
          fill 
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  },
  
  // Custom components for special sections
  Tip: ({ children }: { children: React.ReactNode }) => (
    <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded-lg my-6">
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-bold text-green-700">نصيحة مفيدة</span>
      </div>
      <div className="text-green-800">{children}</div>
    </div>
  ),
  
  Warning: ({ children }: { children: React.ReactNode }) => (
    <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg my-6">
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span className="font-bold text-yellow-700">تنبيه هام</span>
      </div>
      <div className="text-yellow-800">{children}</div>
    </div>
  ),
  
  // Collapsible section
  Collapsible: ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="border border-gray-200 rounded-lg my-6 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full p-4 text-right bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
        >
          <span className="font-medium text-gray-800">{title}</span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 p-4' : 'max-h-0'
          }`}
        >
          {children}
        </div>
      </div>
    );
  },
  
  // Two-column layout
  TwoColumns: ({ children }: { children: React.ReactNode }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      {children}
    </div>
  ),
  
  // Call to action component
  CTA: ({ title, buttonText, link }: { title: string; buttonText: string; link: string }) => (
    <div className="bg-purple-100 p-6 rounded-xl my-8 text-center">
      <h4 className="text-xl font-bold text-purple-800 mb-3">{title}</h4>
      <Link 
        href={link} 
        className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md"
      >
        {buttonText}
      </Link>
    </div>
  ),
};

export default function MDXContent({ source }: { source: any }) {
  return (
    <div className="text-gray-700 leading-relaxed">
      <MDXRemote {...source} components={CustomComponents} />
    </div>
  );
}
