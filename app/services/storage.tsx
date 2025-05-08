import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Warehouse, Shield, Clock, Key } from 'lucide-react'
import { motion } from 'framer-motion'

const StoragePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>خدمات التخزين في الرياض | شركة نقل عفش الرياض</title>
        <meta name="description" content="خدمات تخزين آمنة في الرياض بأعلى معايير الجودة. مستودعات حديثة ومراقبة 24/7. اتصل بنا الآن!" />
        <meta name="keywords" content="تخزين, تخزين أثاث, تخزين منزلي, شركة تخزين الرياض, مستودعات" />
        <meta property="og:title" content="خدمات التخزين في الرياض | شركة نقل عفش الرياض" />
        <meta property="og:description" content="خدمات تخزين آمنة في الرياض بأعلى معايير الجودة. مستودعات حديثة ومراقبة 24/7." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] bg-gradient-to-r from-[#c19a5b]/20 via-[#c19a5b]/10 to-transparent">
          <div className="absolute inset-0 bg-[url('/storage-hero.avif')] bg-cover bg-center opacity-30 transition-opacity duration-500 hover:opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                خدمات التخزين الآمنة
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed">
                نقدم خدمات تخزين آمنة في مستودعات حديثة مع مراقبة على مدار الساعة
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
                  icon: Warehouse,
                  title: "مستودعات حديثة",
                  description: "مستودعات مجهزة بأحدث التقنيات للحفاظ على أثاثك"
                },
                {
                  icon: Shield,
                  title: "حماية شاملة",
                  description: "نظام أمني متكامل ومراقبة على مدار الساعة"
                },
                {
                  icon: Clock,
                  title: "مرونة في التخزين",
                  description: "خدمة تخزين مرنة تناسب احتياجاتك"
                },
                {
                  icon: Key,
                  title: "وصول آمن",
                  description: "نظام وصول آمن ومحكم لمستودعاتنا"
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
                  src="/storage-service.avif"
                  alt="خدمات التخزين"
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
                <h2 className="text-4xl font-bold text-gray-900 mb-8">خدمات التخزين المتكاملة</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>نقدم خدمات تخزين آمنة في الرياض بأعلى معايير الجودة. مستودعاتنا الحديثة مجهزة بأحدث التقنيات وأنظمة الأمن للحفاظ على أثاثك ومقتنياتك.</p>
                  <p>نوفر نظام مراقبة على مدار الساعة، مع تأمين شامل على جميع المقتنيات المخزنة. يمكنك الوصول إلى مستودعاتنا في أي وقت مع ضمان أمان كامل.</p>
                  <p>نقدم خدمات تخزين مرنة تناسب احتياجاتك، مع إمكانية تجديد فترة التخزين أو استلام المقتنيات في أي وقت.</p>
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

export default StoragePage 