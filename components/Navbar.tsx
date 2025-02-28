'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

declare const gtag_report_conversion: (url: string) => void;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string) => {
    e.preventDefault();
    if (typeof gtag_report_conversion === 'function') {
      gtag_report_conversion(`tel:${phoneNumber}`);
    }
    window.location.href = `tel:${phoneNumber}`;
  };

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدمات النقل', href: '#services' },
    { name: 'عن الشركة', href: '#about' },
    { 
      name: 'تواصل معنا', 
      href: 'tel:0543757997',
      isPhone: true 
    }
  ]

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/01.png" 
                alt="نقل عفش الرياض" 
                width={48}
                height={48}
                className="rounded-full"
              />
              <h1 className="font-bold text-lg md:text-xl mr-2">نقل عفش الرياض</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              link.isPhone ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleCallClick(e, '0543757997')}
                  className="px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition-all duration-300 hover:shadow-lg"
                  aria-label="اتصل بنا الآن للحصول على خدمة نقل عفش محترفة"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-600 transition-all duration-300 hover:shadow-lg"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-purple-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-purple-700 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              link.isPhone ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleCallClick(e, '0565265233');
                    setIsOpen(false);
                  }}
                  className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-purple-600 transition-all duration-300"
                  aria-label="اتصل بنا الآن للحصول على خدمة نقل عفش محترفة"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-purple-600 transition-all duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
