'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Truck, Building, Package, Warehouse } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    id: 'home-moving',
    title: 'نقل الأثاث المنزلي',
    description: 'خدمات نقل الأثاث المنزلي بأعلى معايير الجودة والاحترافية',
    icon: Truck,
    image: '/home-moving-service.png',
  },
  {
    id: 'office-moving',
    title: 'نقل المكاتب',
    description: 'خدمات نقل المكاتب والشركات بكفاءة واحترافية عالية',
    icon: Building,
    image: '/office-moving-service.png',
  },
  {
    id: 'storage',
    title: 'تخزين الأثاث',
    description: 'خدمات تخزين آمنة ومؤمنة لجميع أنواع الأثاث والمقتنيات',
    icon: Warehouse,
    image: '/storage-service.avif',
  },
  {
    id: 'packing',
    title: 'تغليف الأثاث',
    description: 'خدمات تغليف احترافية لحماية أثاثك أثناء النقل',
    icon: Package,
    image: '/packing-hero.png',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-r from-[#c19a5b]/20 via-[#c19a5b]/10 to-transparent">
          <div className="absolute inset-0 bg-[url('/services-hero.png')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-right space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
                خدماتنا
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                نقدم مجموعة متكاملة من خدمات النقل والتخزين والتغليف بأعلى معايير الجودة والاحترافية
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-72">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-4 mb-4">
                        <service.icon className="h-10 w-10 text-[#c19a5b]" />
                        <h3 className="text-3xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-gray-200 text-lg leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[#c19a5b] to-[#b38a4b] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">احصل على عرض سعر مجاني الآن</h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              اتصل بنا على الرقم 0563009155 للحصول على عرض سعر مجاني وخدمة متميزة
            </p>
            <a
              href="tel:0563009155"
              className="inline-block bg-white text-[#c19a5b] px-10 py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              اتصل بنا الآن
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 