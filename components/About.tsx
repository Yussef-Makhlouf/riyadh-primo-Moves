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
    <section id="about" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">عن شركتنا</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            الشركة الرائدة في نقل الأثاث بالرياض
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
            نفتخر بتقديم خدمات نقل أثاث احترافية تلبي جميع احتياجاتكم مع الحفاظ على أعلى معايير الجودة والأمان.
          </p>
        </div>

        <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative group">
            <Image
              src="/02.png"
              alt="فريق نقل العفش المحترف في الرياض"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-purple-600 opacity-10 rounded-3xl group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="mt-10 lg:mt-0">
            <ul className="space-y-10">
              {features.map(({ text, icon: Icon }) => (
                <li key={text} className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-100">
                    <Icon className="h-6 w-6 text-purple-600" />
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
