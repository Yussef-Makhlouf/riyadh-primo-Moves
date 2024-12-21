import { Truck, Home, Package } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    name: 'نقل الأثاث المنزلي',
    description: 'خدمة نقل شاملة لجميع محتويات المنزل مع الفك والتركيب',
    icon: Home,
    image: '/Artboard 2.avif'
  },
  {
    name: 'خدمات التغليف',
    description: 'تغليف احترافي باستخدام أفضل المواد لحماية ممتلكاتك',
    icon: Package,
    image: '/Artboard 3.avif'
  },
  {
    name: 'فك وتركيب الأثاث',
    description: 'فنيون متخصصون في فك وتركيب جميع أنواع الأثاث',
    icon: Truck,
    image: '/Artboard 5.avif'
  }
]

const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">خدماتنا المتميزة</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            نقدم باقة متكاملة من خدمات نقل العفش في الرياض بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden rounded-t-3xl">
                <Image 
                  src={service.image} 
                  alt={service.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <service.icon className="w-10 h-10 text-purple-600 ml-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
