'use client';

import { useEffect, useState } from 'react';
import { ListOrdered } from 'lucide-react';

type Section = {
  id: string;
  title: string;
  level: number;
};

export default function TableOfContents({ content }: { content: string }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  // استخراج العناوين من المحتوى
  useEffect(() => {
    const extractSections = () => {
      // سنقوم بتقسيم المحتوى إلى أقسام بناءً على رمز ##
      const parts = content.split('##').filter(Boolean);
      
      if (parts.length <= 1) {
        return [];
      }
      
      // نحذف القسم الأول لأنه المقدمة
      parts.shift();
      
      // نستخرج العناوين من كل قسم
      return parts.map((part, index) => {
        const title = part.split('\n')[0].trim();
        const id = `section-${index + 1}`;
        
        return {
          id,
          title,
          level: 2 // مستوى العنوان (h2)
        };
      });
    };
    
    setSections(extractSections());
  }, [content]);
  
  // متابعة القسم النشط أثناء التمرير
  useEffect(() => {
    // التأكد من وجود أقسام
    if (sections.length === 0) return;
    
    const handleScroll = () => {
      // نحصل على موضع التمرير الحالي
      const scrollPosition = window.scrollY + 150;
      
      // تحقق من وجود العناصر أولاً - تأخير للتأكد من وجودها في DOM
      setTimeout(() => {
        const sectionElements = sections
          .map(section => ({ 
            id: section.id, 
            element: document.getElementById(section.id) 
          }))
          .filter(item => item.element !== null);
        
        if (sectionElements.length === 0) return;
        
        // نتحقق من كل قسم من الأسفل إلى الأعلى
        let foundActive = false;
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const { id, element } = sectionElements[i];
          if (!element) continue;
          
          const offsetTop = element.offsetTop;
          
          if (scrollPosition >= offsetTop) {
            setActiveSection(id);
            foundActive = true;
            break;
          }
        }
        
        // إذا كنا في بداية الصفحة ولم نجد قسمًا نشطًا، نضبط القسم الأول
        if (!foundActive && sectionElements.length > 0) {
          setActiveSection(sectionElements[0].id);
        }
      }, 100);
    };
    
    // تسجيل مستمع التمرير
    window.addEventListener('scroll', handleScroll);
    
    // استدعاء المعالج بعد تأخير للتأكد من تحميل العناصر
    const initialTimer = setTimeout(() => {
      handleScroll();
    }, 1000);
    
    // تنظيف
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initialTimer);
    };
  }, [sections]);
  
  // التمرير إلى القسم عند النقر
  const scrollToSection = (id: string) => {
    // تأخير بسيط للتأكد من وجود العناصر
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      
      // الحصول على موضع القسم
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      
      // التمرير إلى القسم مع هامش علوي
      window.scrollTo({
        top: offsetTop - 120,
        behavior: 'smooth'
      });
      
      // تحديث القسم النشط
      setActiveSection(id);
    }, 100);
  };
  
  if (sections.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-8 rounded-lg border border-gray-200 bg-blue-50/30 p-5 lg:sticky lg:top-24">
      <h4 className="mb-4 flex items-center gap-2 font-bold text-gray-800">
        <ListOrdered size={18} className="text-blue-600" />
        محتويات المقال
      </h4>
      
      <ul className="space-y-2">
        {sections.map((section) => (
          <li 
            key={section.id}
            className={`
              cursor-pointer rounded-md p-2 text-sm transition-colors
              ${activeSection === section.id 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'text-gray-700 hover:bg-blue-50'}
            `}
            onClick={() => scrollToSection(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
} 