'use client'

import Link from 'next/link'
import { ArrowLeft, Truck, Clock, Shield, Star, Phone, MapPin, Package, CheckCircle2, Building2, Users, Award } from 'lucide-react'
import { useEffect } from 'react'

declare const gtag_report_conversion: (url: string) => void;

const Hero = () => {
  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string) => {
    e.preventDefault();
    if (typeof gtag_report_conversion === 'function') {
      gtag_report_conversion(`tel:${phoneNumber}`);
    }
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "شركة نقل عفش الرياض",
      "image": "/images/moving-company.jpg",
      "description": "شركة نقل عفش متخصصة في الرياض - خدمات نقل الأثاث المنزلي والمكتبي مع الفك والتركيب والتغليف",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "الرياض",
        "addressRegion": "الرياض",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.7136",
        "longitude": "46.6753"
      },
      "url": "https://riyadh-moves.com",
      "telephone": "+966565265233",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#c19a5b]/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-right">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#c19a5b]/10 mb-6 border border-[#c19a5b]/20">
                <Star className="h-5 w-5 text-[#c19a5b] mr-2" />
                <span className="text-[#c19a5b] font-medium">أفضل شركة نقل عفش في الرياض 2024</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d]">شركة نقل عفش متخصصة في الرياض</span>
                <span className="block text-[#c19a5b] mt-3">خدمة نقل محترفة وآمنة وسريعة</span>
              </h1>
              
              {/* Description */}
              <p className="mt-6 text-xl text-gray-600 sm:max-w-xl lg:mx-0 leading-relaxed">
                متخصصون في خدمات نقل الأثاث المنزلي والمكتبي في الرياض منذ 15 عاماً. نقدم خدمات الفك والتركيب والتغليف مع ضمان سلامة محتوياتك. خبرة واسعة في نقل العفش مع فريق محترف وأدوات حديثة.
              </p>
              
              {/* Features Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-800 text-right max-w-2xl lg:mx-0">
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                  <MapPin className="h-6 w-6 text-[#c19a5b]" />
                  <span>نخدم جميع أحياء الرياض</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                  <Package className="h-6 w-6 text-[#c19a5b]" />
                  <span>تغليف احترافي ومؤمن</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                  <Phone className="h-6 w-6 text-[#c19a5b]" />
                  <span>دعم فني 24/7</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="tel:0565265233"
                  onClick={(e) => handleCallClick(e, '0565265233')}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-[#c19a5b] text-white hover:bg-[#8b6b3d] transition-all duration-300 hover:shadow-lg hover:scale-105"
                  aria-label="اتصل بنا الآن للحصول على خدمة نقل عفش محترفة"
                >
                  اتصل بنا الآن
                  <Phone className="mr-2 h-5 w-5 animate-bounce" />
                </a>
                <Link 
                  href="https://wa.me/966565265233" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full border-2 border-[#c19a5b] text-[#c19a5b] hover:bg-[#c19a5b] hover:text-white transition-all duration-300 hover:scale-105"
                  aria-label="تواصل معنا عبر واتساب للاستفسار عن خدمات نقل العفش"
                >
                  تواصل واتساب
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </main>

          {/* Services Grid */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Why Choose Us */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#c19a5b] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-[#c19a5b]" />
                  لماذا تختارنا؟
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c19a5b]" />
                    <span>فريق محترف مدرب على أعلى مستوى</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c19a5b]" />
                    <span>أدوات ومعدات حديثة للفك والتركيب</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c19a5b]" />
                    <span>أسعار تنافسية مع ضمان الجودة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c19a5b]" />
                    <span>خدمة عملاء متواصلة على مدار الساعة</span>
                  </li>
                </ul>
              </div>

              {/* Our Services */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-[#c19a5b] mb-4 flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-[#c19a5b]" />
                  خدماتنا
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c19a5b]" />
                    <span>نقل الأثاث المنزلي والمكتبي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c19a5b]" />
                    <span>فك وتركيب الأثاث والمكيفات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c19a5b]" />
                    <span>تغليف محترف للمحتويات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#c19a5b]" />
                    <span>تخزين آمن للمنقولات</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile-Only Features */}
          <div className="mt-8 md:hidden">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Truck className="h-6 w-6 text-[#c19a5b]" />
                  <h4 className="text-[#c19a5b] font-bold">تغطية شاملة</h4>
                </div>
                <p className="text-gray-600 text-sm">خدمة نقل عفش متوفرة في كافة مناطق الرياض مع أسطول سيارات حديث</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-6 w-6 text-[#c19a5b]" />
                  <h4 className="text-[#c19a5b] font-bold">سرعة في التنفيذ</h4>
                </div>
                <p className="text-gray-600 text-sm">ننجز عملية النقل في نفس اليوم مع إمكانية تحديد موعد يناسبك</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-6 w-6 text-[#c19a5b]" />
                  <h4 className="text-[#c19a5b] font-bold">ضمان كامل</h4>
                </div>
                <p className="text-gray-600 text-sm">نقدم ضمان على سلامة المنقولات مع تأمين ضد الأضرار</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
