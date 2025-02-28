'use client'

import Link from 'next/link'
import { ArrowLeft, Truck, Clock, Shield, Star, Phone, MapPin, Package } from 'lucide-react'

declare const gtag_report_conversion: (url: string) => void;

const Hero = () => {
  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string) => {
    e.preventDefault();
    if (typeof gtag_report_conversion === 'function') {
      gtag_report_conversion(`tel:${phoneNumber}`);
    }
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-800 via-indigo-700 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-right">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">شركة نقل عفش متخصصة في الرياض</span>
                <span className="block text-purple-300 mt-3">خدمة نقل محترفة وآمنة وسريعة</span>
              </h1>
              <p className="mt-6 text-xl text-purple-100 sm:max-w-xl lg:mx-0">
                متخصصون في خدمات نقل الأثاث المنزلي والمكتبي في الرياض منذ 15 عاماً. نقدم خدمات الفك والتركيب والتغليف مع ضمان سلامة محتوياتك.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-right max-w-2xl lg:mx-0">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-purple-300" />
                  <span>نخدم جميع أحياء الرياض</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-purple-300" />
                  <span>تغليف احترافي ومؤمن</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-purple-300" />
                  <span>دعم فني 24/7</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="tel:0565265233"
                  onClick={(e) => handleCallClick(e, '0565265233')}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white text-purple-800 hover:bg-purple-100 transition-all duration-300 hover:shadow-2xl"
                  aria-label="اتصل بنا الآن للحصول على خدمة نقل عفش محترفة"
                >
                  اتصل بنا الآن
                  <Phone className="mr-2 h-5 w-5 animate-bounce" />
                </a>
                <Link 
                  href="https://wa.me/966565265233" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-purple-800 transition-all duration-300"
                  aria-label="تواصل معنا عبر واتساب للاستفسار عن خدمات نقل العفش"
                >
                  تواصل واتساب
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </main>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-white">
            {[
              { 
                icon: Truck, 
                text: 'تغطية شاملة للرياض', 
                subtext: 'نصل لجميع الأحياء',
                description: 'خدمة نقل عفش متوفرة في كافة مناطق الرياض الشمالية والجنوبية والشرقية والغربية' 
              },
              { 
                icon: Clock, 
                text: 'سرعة في التنفيذ', 
                subtext: 'جدولة مرنة',
                description: 'ننجز عملية النقل في نفس اليوم مع إمكانية تحديد موعد يناسبك' 
              },
              { 
                icon: Shield, 
                text: 'ضمان كامل', 
                subtext: 'تأمين شامل',
                description: 'نقدم ضمان على سلامة المنقولات مع تأمين ضد الأضرار' 
              }
            ].map(({ icon: Icon, text, subtext, description }) => (
              <div 
                key={text} 
                className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 p-6 rounded-xl hover:bg-white/10"
              >
                <Icon className="h-12 w-12 mb-3 text-purple-300" />
                <h3 className="text-lg font-bold">{text}</h3>
                <p className="text-sm text-purple-200 mb-2">{subtext}</p>
                <p className="text-xs text-purple-100/80">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
