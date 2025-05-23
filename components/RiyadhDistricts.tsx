'use client'

import { MapPin, CheckCircle, ArrowLeft, Phone } from 'lucide-react'

declare const gtag_report_conversion: (url: string) => void;

const districts = [
  {
    name: 'حي النرجس',
    description: 'خدمات نقل عفش احترافية في حي النرجس شمال الرياض مع فريق متخصص وأسعار مميزة',
    services: ['نقل أثاث', 'فك وتركيب', 'تغليف محترف'],
    location: 'شمال الرياض'
  },
  {
    name: 'حي الملقا',
    description: 'نقل عفش في حي الملقا بأحدث المعدات وأفضل الفنيين المتخصصين في فك وتركيب الأثاث',
    services: ['نقل عفش', 'تركيب مطابخ', 'تغليف أثاث'],
    location: 'شمال الرياض'
  },
  {
    name: 'حي العليا',
    description: 'خدمة نقل عفش متكاملة في حي العليا تشمل الفك والتركيب والتغليف مع الضمان',
    services: ['نقل منازل', 'تركيب غرف نوم', 'تغليف احترافي'],
    location: 'وسط الرياض'
  },
  {
    name: 'حي الياسمين',
    description: 'نقل أثاث في حي الياسمين بأفضل المعدات وفريق محترف مع ضمان سلامة المنقولات',
    services: ['نقل أثاث', 'فك وتركيب', 'تغليف وتخزين'],
    location: 'شمال الرياض'
  }
]

const RiyadhDistricts = () => {
  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string) => {
    e.preventDefault();
    if (typeof gtag_report_conversion === 'function') {
      gtag_report_conversion(`tel:${phoneNumber}`);
    }
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#c19a5b]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c19a5b]/10 mb-6 border border-[#c19a5b]/20">
            <MapPin className="h-5 w-5 text-[#c19a5b] ml-2" />
            <span className="text-[#c19a5b] font-medium">خدماتنا في أحياء الرياض</span>
          </span>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] bg-clip-text text-transparent mb-6">
            نخدم جميع أحياء الرياض
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            نقدم خدمات نقل العفش المتكاملة في جميع أحياء الرياض بأعلى معايير الجودة وأفضل الأسعار
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {districts.map((district) => (
            <div 
              key={district.name} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-[#c19a5b]/10"
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-[#c19a5b] ml-2" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{district.name}</h3>
                  <p className="text-sm text-[#c19a5b]">{district.location}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{district.description}</p>
              
              <div className="space-y-3">
                {district.services.map((service) => (
                  <div key={service} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#c19a5b] ml-2" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              <a 
                href="tel:0563009155"
                onClick={(e) => handleCallClick(e, '0563009155')}
                className="mt-6 w-full bg-[#c19a5b] text-white py-3 px-6 rounded-xl hover:bg-[#8b6b3d] transition-all duration-300 flex items-center justify-center group"
                aria-label={`احجز خدمة نقل العفش في ${district.name}`}
              >
                <Phone className="h-5 w-5 ml-2" />
                احجز خدمة نقل العفش
                <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RiyadhDistricts
