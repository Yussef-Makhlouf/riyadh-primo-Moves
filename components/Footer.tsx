import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">نقل عفش الرياض | بريمو موفرز</h3>
            <p className="text-purple-200 leading-relaxed mb-6">
              خدمات نقل احترافية في جميع أنحاء الرياض والمناطق المجاورة. نضمن سلامة ممتلكاتك مع أفضل الأسعار.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              {[
                'الرئيسية',
                'خدماتنا',
                'عن الشركة',
                'اتصل بنا',
                'الأسعار',
                'المدونة'
              ].map((link) => (
                <li key={link}>
                  <Link 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-colors hover:translate-x-2 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">معلومات التواصل</h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: '0565265233', href: 'tel:0565265233' },
                { icon: Mail, text: 'info@example.com', href: 'mailto:info@example.com' },
                { icon: MapPin, text: 'الرياض، المملكة العربية السعودية', href: '#' }
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 text-purple-400" />
                  <Link href={item.href} className="text-purple-200 hover:text-white mr-2">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fashne Digital Marketing */}
          <div>
            <h3 className="text-xl font-semibold mb-6">تطوير وتصميم</h3>
            <Link 
              href="https://fashne.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
            >
              <span className="mr-2">الفشني للتسويق الرقمي</span>
              <span className="transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-200">© 2024 نقل عفش الرياض بريمو موفرز. جميع الحقوق محفوظة</p>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
