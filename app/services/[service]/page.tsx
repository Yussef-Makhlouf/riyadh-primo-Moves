
import { Metadata } from 'next'
import Image from 'next/image'
import { Truck, Shield, Clock, Package, ChevronLeft, ChevronRight, Phone } from 'lucide-react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
// Define the service types and their metadata
const services = {
  'home-moving': {
    title: 'خدمات نقل الأثاث المنزلي في الرياض | شركة نقل عفش الرياض',
    description: 'خدمات نقل الأثاث المنزلي في الرياض بأعلى معايير الجودة والاحترافية. فريق محترف، معدات حديثة، وأسعار تنافسية. اتصل بنا الآن!',
    keywords: 'نقل عفش, نقل أثاث, نقل منزلي, شركة نقل عفش الرياض, نقل أثاث منزلي',
    heroImage: '/home-moving-hero.png',
    serviceImage: '/home-moving-service.png',
  },
  'office-moving': {
    title: 'خدمات نقل المكاتب في الرياض | شركة نقل عفش الرياض',
    description: 'خدمات نقل المكاتب في الرياض بأعلى معايير الجودة والاحترافية. فريق محترف، معدات حديثة، وأسعار تنافسية. اتصل بنا الآن!',
    keywords: 'نقل مكاتب, نقل شركات, نقل تجاري, شركة نقل عفش الرياض, نقل مكاتب الرياض',
    heroImage: '/office-moving-hero.png',
    serviceImage: '/office-moving-service.png',
  },
  'storage': {
    title: 'خدمات تخزين الأثاث في الرياض | شركة نقل عفش الرياض',
    description: 'خدمات تخزين الأثاث في الرياض بأعلى معايير الأمان والجودة. مستودعات آمنة، تأمين كامل، وأسعار تنافسية. اتصل بنا الآن!',
    keywords: 'تخزين أثاث, مستودعات تخزين, تخزين عفش, شركة تخزين أثاث الرياض',
    heroImage: '/storage-hero.avif',
    serviceImage: '/storage-service.avif',
  },
  'packing': {
    title: 'خدمات تغليف الأثاث في الرياض | شركة نقل عفش الرياض',
    description: 'خدمات تغليف الأثاث في الرياض بأعلى معايير الجودة والاحترافية. مواد تغليف عالية الجودة، فريق محترف، وأسعار تنافسية. اتصل بنا الآن!',
    keywords: 'تغليف أثاث, تغليف عفش, شركة تغليف أثاث الرياض, خدمات تغليف',
    heroImage: '/packing-hero.png',
    serviceImage: '/packing-hero.png',
  },
}

// Add generateStaticParams function
export function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service: service,
  }))
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  const service = services[params.service as keyof typeof services]
  
  if (!service) {
    return {
      title: '404 - Service Not Found',
      description: 'The requested service page could not be found.',
    }
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
    },
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service as keyof typeof services]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[80vh] bg-gradient-to-r from-[#c19a5b]/20 via-[#c19a5b]/10 to-transparent">
          <div className="absolute inset-0">
            <div 
              className="w-full h-full bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url(${service.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-right max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {service.title.split('|')[0]}
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl leading-relaxed">
                {service.description}
              </p>
              <a
                href="tel:0563009155"
                className="inline-flex items-center mt-8 px-8 py-4 rounded-full text-lg font-semibold text-white bg-[#c19a5b] hover:bg-[#8b6b3d] transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-5 w-5 ml-2" />
                احصل على عرض سعر مجاني
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">لماذا تختارنا؟</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">نقدم خدمات متميزة بأعلى معايير الجودة والاحترافية</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-[#c19a5b]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#c19a5b] group-hover:text-white transition-colors">
                  <Truck className="h-8 w-8 text-[#c19a5b] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">سيارات مجهزة</h3>
                <p className="text-gray-600">أسطول حديث من السيارات المجهزة خصيصاً لنقل الأثاث</p>
              </div>
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-[#c19a5b]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#c19a5b] group-hover:text-white transition-colors">
                  <Shield className="h-8 w-8 text-[#c19a5b] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">ضمان السلامة</h3>
                <p className="text-gray-600">تأمين كامل على الأثاث ضد أي أضرار</p>
              </div>
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-[#c19a5b]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#c19a5b] group-hover:text-white transition-colors">
                  <Clock className="h-8 w-8 text-[#c19a5b] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">خدمة سريعة</h3>
                <p className="text-gray-600">نقل سريع وفعال مع الحفاظ على جودة الخدمة</p>
              </div>
              <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-[#c19a5b]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#c19a5b] group-hover:text-white transition-colors">
                  <Package className="h-8 w-8 text-[#c19a5b] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">تغليف احترافي</h3>
                <p className="text-gray-600">خدمات تغليف متكاملة لحماية أثاثك</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.serviceImage}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-right space-y-8">
                <h2 className="text-4xl font-bold text-gray-900">{service.title.split('|')[0]}</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>{service.description}</p>
                  <p>فريقنا المدرب والمحترف يمتلك الخبرة الكافية للتعامل مع جميع أنواع الأثاث والمقتنيات، مع استخدام أحدث المعدات والتقنيات لضمان عملية نقل سلسة وآمنة.</p>
                  <p>نقدم خدماتنا على مدار الساعة، مع ضمان أسعار تنافسية وشفافة، دون أي رسوم خفية أو إضافية.</p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="tel:0563009155"
                    className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-[#c19a5b] hover:bg-[#8b6b3d] transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="h-5 w-5 ml-2" />
                    اتصل بنا الآن
                  </a>
                  <a
                    href="tel:0563009155"
                    className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-[#c19a5b] border-2 border-[#c19a5b] hover:bg-[#c19a5b] hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    احصل على عرض سعر
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
    

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">احصل على عرض سعر مجاني الآن</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">اتصل بنا على الرقم 0563009155 للحصول على عرض سعر مجاني وخدمة متميزة</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0563009155"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold bg-white text-[#c19a5b] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-5 w-5 ml-2" />
                اتصل بنا الآن
              </a>
              <a
                href="tel:0563009155"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[#c19a5b] transition-all duration-300 transform hover:scale-105"
              >
                احصل على عرض سعر
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 