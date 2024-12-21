import Link from 'next/link'
import { ArrowLeft, Truck, Clock, Shield, Star } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-800 via-indigo-700 to-purple-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-right">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">أفضل شركة نقل عفش في الرياض | بريمو موفرز</span>
                <span className="block text-purple-300 mt-3">خدمة نقل آمنة وسريعة</span>
              </h1>
              <p className="mt-6 text-xl text-purple-100 sm:max-w-xl lg:mx-0">
                نقدم خدمات نقل الأثاث المنزلي والمكتبي مع ضمان السلامة والجودة. خبرة 15 عاماً في خدمة سكان الرياض والمناطق المجاورة.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="tel:0565265233" 
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-purple-800 hover:bg-purple-100 transition-all duration-300 hover:shadow-2xl">
                  احصل على عرض سعر الخدمة
                  <Star className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                </Link>
                <Link href="https://wa.me/966565265233" target="_blank" rel="noopener noreferrer" 
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-purple-800 transition-all duration-300">
تواصل واتساب                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </main>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto text-white">
            {[
              { icon: Truck, text: 'تغطية شاملة للرياض', subtext: '24/7 خدمة' },
              { icon: Clock, text: 'سرعة في التنفيذ', subtext: 'جدولة مرنة' },
              { icon: Shield, text: 'ضمان كامل', subtext: 'تأمين شامل' }
            ].map(({ icon: Icon, text, subtext }) => (
              <div key={text} className="flex flex-col items-center text-center group hover:scale-110 transition-transform duration-300">
                <Icon className="h-12 w-12 mb-3" />
                <span className="text-lg font-bold">{text}</span>
                <span className="text-sm text-purple-200">{subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
