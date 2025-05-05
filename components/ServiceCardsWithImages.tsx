import Image from 'next/image'
import ServiceIcon from './ServiceIcon'
import { ServicesData } from '@/types'

interface ServiceCardProps {
  data: ServicesData;
}

export default function ServiceCardsWithImages({ data }: ServiceCardProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">{data.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {data.services.map((service) => (
            <div key={service.name} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover rounded-t-3xl"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <ServiceIcon iconType={service.icon as 'Home' | 'Package' | 'Truck'} />
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
