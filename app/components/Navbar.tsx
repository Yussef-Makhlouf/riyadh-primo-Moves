import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { title: 'الرئيسية', href: '/' },
    { title: 'خدماتنا', href: '/services' },
    { title: 'من نحن', href: '/#about' },
    { title: 'اتصل بنا', href: 'tel:0563009155' },
  ]

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#c19a5b]">رياض بريمو</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#c19a5b] transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
            <a
              href="tel:0563009155"
              className="bg-[#c19a5b] text-white px-6 py-2 rounded-lg hover:bg-[#b38a4b] transition-colors duration-300"
            >
              اتصل بنا
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 space-y-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-[#c19a5b] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <a
                href="tel:0563009155"
                className="block px-3 py-2 bg-[#c19a5b] text-white rounded-lg hover:bg-[#b38a4b] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 