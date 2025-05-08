import { Truck, Home, Package, Shield, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    name: 'نقل الأثاث المنزلي',
    description: 'خدمة نقل شاملة لجميع محتويات المنزل مع الفك والتركيب. نضمن لك نقل آمن وسريع مع فريق محترف ومركبات مجهزة',
    features: ['فك وتركيب احترافي', 'تغليف آمن', 'نقل سريع', 'ضمان سلامة الأثاث'],
    icon: Home,
    image: '/serv2.avif',
    slug: 'home-moving',
    phoneNumber: '0563009155'
  },
  {
    name: 'خدمات التغليف',
    description: 'تغليف احترافي باستخدام أفضل المواد لحماية ممتلكاتك. نستخدم أحدث تقنيات التغليف لضمان سلامة أغراضك',
    features: ['مواد تغليف عالية الجودة', 'تغليف مخصص', 'حماية ضد الصدمات', 'تغليف سريع'],
    icon: Package,
    image: '/serv3.avif',
    slug: 'packing-services',
    phoneNumber: '0563009155'
  },
  {
    name: 'فك وتركيب الأثاث',
    description: 'فنيون متخصصون في فك وتركيب جميع أنواع الأثاث. خبرة واسعة في التعامل مع مختلف أنواع الأثاث',
    features: ['فنيون متخصصون', 'أدوات حديثة', 'ضمان الجودة', 'خدمة سريعة'],
    icon: Truck,
    image: '/serv4.avif',
    slug: 'furniture-assembly',
    phoneNumber: '0563009155' 
  },
  {
    name: 'نقل المكاتب',
    description: 'خدمة نقل متكاملة للمكاتب والشركات مع الحفاظ على سرية وأمان المعدات والوثائق',
    features: ['نقل آمن للمعدات', 'حماية البيانات', 'تخطيط مسبق', 'خدمة 24/7'],
    icon: Home,
    image: '/serv5.avif',
    slug: 'office-moving',
    phoneNumber: '0563009155'
  },
]

const Services = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#c19a5b]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d]">خدماتنا المتميزة</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            نقدم باقة متكاملة من خدمات نقل العفش في الرياض بأعلى معايير الجودة والاحترافية
          </p>
          <div className="flex justify-center gap-8 text-gray-600">
            <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <Shield className="w-6 h-6 text-[#c19a5b] ml-2" />
              <span>ضمان الجودة</span>
            </div>
            <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <Clock className="w-6 h-6 text-[#c19a5b] ml-2" />
              <span>خدمة 24/7</span>
            </div>
            <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm">
              <Star className="w-6 h-6 text-[#c19a5b] ml-2" />
              <span>خبرة واسعة</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <div 
              key={service.name} 
              className="bg-gray-50 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
            >
              <div className="overflow-hidden rounded-t-3xl relative">
                <Image 
                  src={service.image} 
                  alt={service.name}
                  width={600}
                  height={400}
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-[#c19a5b]/10 ml-4">
                    <service.icon className="w-8 h-8 text-[#c19a5b] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#c19a5b] rounded-full ml-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`tel:${service.phoneNumber}`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#c19a5b] hover:bg-[#8b6b3d] transition-colors duration-300 shadow-sm hover:shadow-md"
                >
                  احصل على الخدمة
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "provider": {
                "@type": "LocalBusiness",
                "name": "شركة نقل العفش في الرياض"
              },
              "serviceType": services.map(service => service.name),
              "description": "خدمات نقل العفش المنزلي والمكتبي في الرياض مع الفك والتركيب والتغليف"
            })
          }}
        />
      </div>
    </section>
  )
}

export default Services
