'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "ما هي تكلفة نقل الأثاث في الرياض؟",
    answer: "تختلف تكلفة نقل الأثاث حسب عدة عوامل مثل حجم المنزل، كمية الأثاث، والمسافة. نقدم تقييمًا مجانيًا لتزويدك بسعر دقيق."
  },
  {
    question: "كم من الوقت تستغرق عملية نقل الأثاث؟",
    answer: "تعتمد مدة النقل على حجم المنزل وكمية الأثاث. عادة ما تستغرق العملية من 4 إلى 8 ساعات للمنازل المتوسطة الحجم."
  },
  {
    question: "هل تقدمون خدمات التغليف؟",
    answer: "نعم، نقدم خدمات تغليف احترافية لجميع أنواع الأثاث والأغراض الشخصية لضمان سلامتها أثناء النقل."
  },
  {
    question: "هل أنتم مؤمنون ومرخصون؟",
    answer: "نعم، شركتنا مرخصة بالكامل ومؤمنة. نقدم أيضًا تأمينًا إضافيًا على الممتلكات أثناء النقل لراحة بالك."
  },
  {
    question: "هل تقدمون خدمات التخزين؟",
    answer: "نعم، نوفر خدمات تخزين آمنة وقصيرة وطويلة الأجل في مستودعات مكيفة ومؤمنة."
  },
  {
    question: "كيف يمكنني حجز خدمة نقل الأثاث معكم؟",
    answer: "يمكنك حجز خدمة النقل عن طريق الاتصال بنا أو ملء نموذج الطلب على موقعنا. سنقوم بالتواصل معك لتحديد موعد للمعاينة وتقديم عرض سعر."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">الأسئلة الشائعة</h2>
          <p className="mt-4 text-xl text-gray-600">إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا</p>
        </div>
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-right px-6 py-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-amber-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-amber-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

