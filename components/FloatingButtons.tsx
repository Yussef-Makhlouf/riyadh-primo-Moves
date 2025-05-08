'use client'

import { useState, useEffect } from 'react'
import { Phone, ArrowUp, MessageCircle } from 'lucide-react'

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/966563009155"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call Button */}
      <a
        href="tel:0563009155"
        className="bg-[#c19a5b] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="اتصل بنا الآن"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`bg-[#c19a5b] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="العودة إلى أعلى الصفحة"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  )
}

export default FloatingButtons
