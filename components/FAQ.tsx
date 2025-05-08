'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'ما هي الخدمات التي تقدمونها؟',
    answer: 'نقدم مجموعة متكاملة من خدمات نقل العفش تشمل: نقل الأثاث المنزلي والمكتبي، فك وتركيب الأثاث، تغليف محترف، تخزين آمن، ونقل المكيفات. كل هذه الخدمات تتم بأيدي فنيين متخصصين وأدوات حديثة.'
  },
  {
    question: 'كيف يتم تحديد سعر خدمة النقل؟',
    answer: 'يتم تحديد السعر بناءً على عدة عوامل: حجم المنقولات، المسافة، عدد القطع، نوع الخدمات المطلوبة (فك، تركيب، تغليف). نقدم عروض أسعار مجانية قبل بدء العمل.'
  },
  {
    question: 'هل تقدمون ضمان على سلامة المنقولات؟',
    answer: 'نعم، نقدم ضمان شامل على جميع خدماتنا. جميع المنقولات مؤمنة ضد الأضرار، ونستخدم مواد تغليف عالية الجودة لحماية محتوياتك.'
  },
  {
    question: 'كم تستغرق عملية النقل؟',
    answer: 'تختلف مدة النقل حسب حجم المنقولات والمسافة. عادةً ما تستغرق عملية نقل شقة متوسطة من 4-6 ساعات. نلتزم بالمواعيد المحددة ونضمن سرعة إنجاز العمل.'
  },
  {
    question: 'هل تقدمون خدمة التخزين؟',
    answer: 'نعم، نوفر مستودعات آمنة ومكيفة لتخزين الأثاث والممتلكات. المستودعات مجهزة بأحدث أنظمة الأمان والمراقبة.'
  },
  {
    question: 'كيف يمكنني حجز موعد للنقل؟',
    answer: 'يمكنك التواصل معنا عبر الهاتف أو الواتساب أو من خلال نموذج الاتصال في موقعنا. نتوفر على مدار الساعة لخدمتك وتحديد الموعد المناسب.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#c19a5b]/5 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] bg-clip-text text-transparent">
            الأسئلة الشائعة
          </h2>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-[#c19a5b]/10 hover:border-[#c19a5b]/20 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-right flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-[#c19a5b]" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-[#c19a5b]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org structured data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}

export default FAQ

