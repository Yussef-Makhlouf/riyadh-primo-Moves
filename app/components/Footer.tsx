import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#c19a5b]">رياض بريمو</h3>
            <p className="text-gray-400 leading-relaxed">
              شركة متخصصة في خدمات نقل وتخزين الأثاث بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#c19a5b] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#c19a5b] transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#c19a5b] transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#c19a5b] transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={20} />
                <a href="tel:0563009155" className="hover:text-[#c19a5b] transition-colors">
                  0563009155
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={20} />
                <a href="mailto:info@riyadhprimo.com" className="hover:text-[#c19a5b] transition-colors">
                  info@riyadhprimo.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={20} />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#c19a5b] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#c19a5b] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#c19a5b] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} رياض بريمو. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 