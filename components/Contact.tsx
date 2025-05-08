'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#c19a5b]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] bg-clip-text text-transparent">
            تواصل معنا
          </h2>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في نقل عفشك بكل سهولة وأمان. تواصل معنا الآن للحصول على أفضل الخدمات
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-[#c19a5b]/10 hover:border-[#c19a5b]/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">معلومات الاتصال</h3>
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="bg-[#c19a5b]/10 p-3 rounded-full ml-4 group-hover:bg-[#c19a5b]/20 transition-all duration-300">
                  <Phone className="h-6 w-6 text-[#c19a5b]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">اتصل بنا</p>
                  <p className="text-lg font-medium text-gray-900">0500000000</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="bg-[#c19a5b]/10 p-3 rounded-full ml-4 group-hover:bg-[#c19a5b]/20 transition-all duration-300">
                  <Mail className="h-6 w-6 text-[#c19a5b]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">البريد الإلكتروني</p>
                  <p className="text-lg font-medium text-gray-900">info@riyadhmovers.com</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="bg-[#c19a5b]/10 p-3 rounded-full ml-4 group-hover:bg-[#c19a5b]/20 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-[#c19a5b]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">العنوان</p>
                  <p className="text-lg font-medium text-gray-900">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-[#c19a5b]/10 hover:border-[#c19a5b]/20 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#c19a5b] focus:border-transparent transition-all duration-300"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#c19a5b] focus:border-transparent transition-all duration-300"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#c19a5b] focus:border-transparent transition-all duration-300"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full border border-gray-200 rounded-xl shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#c19a5b] focus:border-transparent transition-all duration-300"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-3 px-6 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-[#c19a5b] hover:bg-[#8b6b3d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c19a5b] transition-all duration-300"
                >
                  <Send className="h-5 w-5" />
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

