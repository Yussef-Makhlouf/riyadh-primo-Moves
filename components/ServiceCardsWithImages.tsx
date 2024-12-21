import Image from 'next/image'
import { Truck, Home, Package } from 'lucide-react'

const services = [
  {
    name: 'فك وتركيب الأثاث',
    description: 'فريق متخصص في فك وتركيب جميع أنواع الأثاث المنزلي والمكتبي بدقة واحترافية عالية',
    icon: Home,
    image: '/Artboard 4.avif',
    features: ['فك وتركيب غرف النوم', 'تركيب المطابخ', 'فك الستائر والديكورات']
  },
  {
    name: 'تغليف احترافي',
    description: 'نستخدم أحدث مواد التغليف العالمية لضمان حماية كاملة لممتلكاتك أثناء النقل',
    icon: Package,
    image: '/Artboard 1.avif',
    features: ['تغليف الأثاث الخشبي', 'تغليف الأجهزة الكهربائية', 'تغليف التحف والأنتيكات']
  },
  {
    name: 'نقل منزلي شامل',
    description: 'خدمة متكاملة لنقل محتويات منزلك من الباب إلى الباب مع ضمان السلامة',
    icon: Truck,
    image: '/Artboard 6.avif',
    features: ['نقل المنازل والفلل', 'نقل المكاتب', 'نقل القصور']
  }
]

const ServiceCardsWithImages = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">خدمات نقل العفش المتكاملة</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم باقة شاملة من خدمات نقل الأثاث في الرياض بأحدث الأساليب وأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-t-3xl"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCardsWithImages
