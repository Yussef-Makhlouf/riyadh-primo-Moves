import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Truck, Shield, Clock, Package } from 'lucide-react'
import { motion } from 'framer-motion'

const HomeMovingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>خدمات نقل الأثاث المنزلي في الرياض | شركة نقل عفش الرياض</title>
        <meta name="description" content="خدمات نقل الأثاث المنزلي في الرياض بأعلى معايير الجودة والاحترافية. فريق محترف، معدات حديثة، وأسعار تنافسية. اتصل بنا الآن!" />
        <meta name="keywords" content="نقل عفش, نقل أثاث, نقل منزلي, شركة نقل عفش الرياض, نقل أثاث منزلي" />
        <meta property="og:title" content="خدمات نقل الأثاث المنزلي في الرياض | شركة نقل عفش الرياض" />
        <meta property="og:description" content="خدمات نقل الأثاث المنزلي في الرياض بأعلى معايير الجودة والاحترافية. فريق محترف، معدات حديثة، وأسعار تنافسية." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-r from-[#c19a5b]/20 via-[#c19a5b]/10 to-transparent">
          <div className="absolute inset-0 bg-[url('/home-moving-hero.jpg')] bg-cover bg-center opacity-30 transition-opacity duration-500 hover:opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                خدمات نقل الأثاث المنزلي
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed">
                نقدم خدمات نقل الأثاث المنزلي بأعلى معايير الجودة والاحترافية، مع ضمان سلامة أثاثك من البداية حتى النهاية
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Truck,
                  title: "سيارات مجهزة",
                  description: "أسطول حديث من السيارات المجهزة خصيصاً لنقل الأثاث"
                },
                {
                  icon: Shield,
                  title: "ضمان السلامة",
                  description: "تأمين كامل على الأثاث ضد أي أضرار"
                },
                {
                  icon: Clock,
                  title: "خدمة سريعة",
                  description: "نقل سريع وفعال مع الحفاظ على جودة الخدمة"
                },
                {
                  icon: Package,
                  title: "تغليف احترافي",
                  description: "خدمات تغليف متكاملة لحماية أثاثك"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <feature.icon className="h-14 w-14 text-[#c19a5b] mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/home-moving-service.png"
                  alt="خدمات نقل الأثاث المنزلي"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-right"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">خدمات نقل الأثاث المنزلي الشاملة</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>نقدم خدمات نقل الأثاث المنزلي في الرياض بأعلى معايير الجودة والاحترافية. نحن نتفهم أهمية أثاثك المنزلي وقيمته العاطفية، لذلك نحرص على تقديم خدمة متميزة تضمن سلامة ونقل آمن لجميع محتويات منزلك.</p>
                  <p>فريقنا المدرب والمحترف يمتلك الخبرة الكافية للتعامل مع جميع أنواع الأثاث والمقتنيات المنزلية، مع استخدام أحدث المعدات والتقنيات لضمان عملية نقل سلسة وآمنة.</p>
                  <p>نقدم خدماتنا على مدار الساعة، مع ضمان أسعار تنافسية وشفافة، دون أي رسوم خفية أو إضافية.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[#c19a5b] to-[#b08d4f] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">احصل على عرض سعر مجاني الآن</h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">اتصل بنا على الرقم 0563009155 للحصول على عرض سعر مجاني وخدمة متميزة</p>
              <motion.a
                href="tel:0563009155"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-[#c19a5b] px-10 py-5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                اتصل بنا الآن
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomeMovingPage 