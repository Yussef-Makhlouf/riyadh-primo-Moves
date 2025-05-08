import { Award, Users, Truck, Shield, Clock, ThumbsUp } from 'lucide-react'

const reasons = [
  {
    title: 'خبرة 15 عام',
    description: 'نفتخر بخبرتنا الواسعة في نقل الأثاث بالرياض منذ عام 2008',
    icon: Award,
    color: 'bg-[#c19a5b]/10 text-[#c19a5b]'
  },
  {
    title: 'فريق متخصص',
    description: 'نمتلك فريق عمل مدرب على أعلى مستوى للتعامل مع جميع أنواع الأثاث',
    icon: Users,
    color: 'bg-[#c19a5b]/10 text-[#c19a5b]'
  },
  {
    title: 'أسعار منافسة',
    description: 'نقدم أفضل الأسعار في السوق مع ضمان جودة الخدمة',
    icon: ThumbsUp,
    color: 'bg-[#c19a5b]/10 text-[#c19a5b]'
  },
  {
    title: 'سرعة التنفيذ',
    description: 'نلتزم بالمواعيد المحددة ونضمن سرعة إنجاز العمل',
    icon: Clock,
    color: 'bg-[#c19a5b]/10 text-[#c19a5b]'
  },
  {
    title: 'معدات حديثة',
    description: 'نستخدم أحدث التقنيات والمعدات في عمليات النقل والتغليف',
    icon: Truck,
    color: 'bg-[#c19a5b]/10 text-[#c19a5b]'
  },
  {
    title: 'ضمان شامل',
    description: 'نقدم ضمان شامل على جميع خدماتنا مع تأمين كامل على المنقولات',
    icon: Shield,
    color: 'bg-[#c19a5b]/10 text-[#c19a5b]'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#c19a5b]/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d]">لماذا نحن الاختيار الأفضل</span>
          </h2>
          <p className="text-xl text-gray-600">نقدم خدمات نقل عفش متكاملة تجمع بين الاحترافية والأمان والسعر المناسب</p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} 
                 className="group relative bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className={`${reason.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs