import { Award, Users, Truck, Shield, Clock, ThumbsUp } from 'lucide-react'

const reasons = [
  {
    title: 'خبرة 15 عام',
    description: 'نفتخر بخبرتنا الواسعة في نقل الأثاث بالرياض منذ عام 2008',
    icon: Award,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'فريق متخصص',
    description: 'نمتلك فريق عمل مدرب على أعلى مستوى للتعامل مع جميع أنواع الأثاث',
    icon: Users,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    title: 'أسعار منافسة',
    description: 'نقدم أفضل الأسعار في السوق مع ضمان جودة الخدمة',
    icon: ThumbsUp,
    color: 'bg-violet-100 text-violet-600'
  },
  {
    title: 'سرعة التنفيذ',
    description: 'نلتزم بالمواعيد المحددة ونضمن سرعة إنجاز العمل',
    icon: Clock,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'معدات حديثة',
    description: 'نستخدم أحدث التقنيات والمعدات في عمليات النقل والتغليف',
    icon: Truck,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    title: 'ضمان شامل',
    description: 'نقدم ضمان شامل على جميع خدماتنا مع تأمين كامل على المنقولات',
    icon: Shield,
    color: 'bg-violet-100 text-violet-600'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">لماذا نحن الاختيار الأفضل</h2>
          <p className="text-xl text-gray-600">نقدم خدمات نقل عفش متكاملة تجمع بين الاحترافية والأمان والسعر المناسب</p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} 
                 className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`${reason.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs