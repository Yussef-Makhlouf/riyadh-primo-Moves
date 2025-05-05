'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      setWidth(scrollPercentage);
    };
    
    window.addEventListener('scroll', updateProgressBar);
    
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 bg-purple-600 z-50 origin-left" 
      style={{ width: `${width}%` }}
    />
  );
}