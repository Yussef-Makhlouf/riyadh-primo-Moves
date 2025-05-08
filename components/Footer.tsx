import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#c19a5b]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#c19a5b]">شركة نقل عفش الرياض</h3>
            <p className="text-gray-600 leading-relaxed">
              نقدم خدمات نقل العفش المنزلي والمكتبي في الرياض بأعلى معايير الجودة والاحترافية
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.facebook.com/profile.php?id=61574108861445" className="text-gray-400 hover:text-[#c19a5b] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
           
              <a href="https://www.instagram.com/riaydh_ads?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-[#c19a5b] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#c19a5b] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#c19a5b] transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-[#c19a5b] transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="tel:0563009155" className="text-gray-600 hover:text-[#c19a5b] transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">خدماتنا</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/home-moving" className="text-gray-600 hover:text-[#c19a5b] transition-colors">
                  نقل الأثاث المنزلي
                </Link>
              </li>
              <li>
                <Link href="/services/office-moving" className="text-gray-600 hover:text-[#c19a5b] transition-colors">
                  نقل المكاتب
                </Link>
              </li>
              <li>
                <Link href="/services/packing" className="text-gray-600 hover:text-[#c19a5b] transition-colors">
                  خدمات التغليف
                </Link>
              </li>
              <li>
                <Link href="/services/storage" className="text-gray-600 hover:text-[#c19a5b] transition-colors">
                  خدمات التخزين
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 text-[#c19a5b] ml-3" />
                <span>0563009155</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 text-[#c19a5b] ml-3" />
                <span>info@riyadhmovers.com</span>
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 text-[#c19a5b] ml-3" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} شركة نقل عفش الرياض. جميع الحقوق محفوظة
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-[#c19a5b] text-sm transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-[#c19a5b] text-sm transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
