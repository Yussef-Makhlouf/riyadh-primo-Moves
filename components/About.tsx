import Image from 'next/image'
import { CheckCircle, Award, Users, Truck } from 'lucide-react'

const features = [
  { text: 'خبرة 15 عاماً في نقل الأثاث بالرياض', icon: Award },
  { text: 'فريق محترف مدرب على أعلى المستويات', icon: Users },
  { text: 'أسطول شاحنات حديث ومجهز بأحدث التقنيات', icon: Truck },
  { text: 'خدمة عملاء متميزة على مدار 24 ساعة', icon: CheckCircle },
]

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/arabic-pattern.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#c19a5b]/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#c19a5b]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#c19a5b]/10 mb-6 border border-[#c19a5b]/20">
            <Award className="h-5 w-5 text-[#c19a5b] ml-2" />
            <span className="text-[#c19a5b] font-medium">عن شركتنا</span>
          </span>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#c19a5b] to-[#8b6b3d] bg-clip-text text-transparent lg:text-5xl">
            الشركة الرائدة في نقل الأثاث بالرياض
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
            نفتخر بتقديم خدمات نقل أثاث احترافية تلبي جميع احتياجاتكم مع الحفاظ على أعلى معايير الجودة والأمان.
          </p>
        </div>

        <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative group">
            <Image
              src="/logo2.png"
              alt="فريق نقل العفش المحترف في الرياض"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#c19a5b] opacity-10 rounded-3xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="mt-10 lg:mt-0">
            <ul className="space-y-10">
              {features.map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#c19a5b]/10">
                    <Icon className="h-6 w-6 text-[#c19a5b]" />
                  </div>
                  <p className="mr-3 text-lg font-medium text-gray-900">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
