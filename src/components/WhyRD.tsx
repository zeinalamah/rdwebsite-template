import { Lightbulb, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    name: 'Innovation',
    description: 'Pioneering solutions that transform governance and development practices in the MENA region.',
    icon: Lightbulb,
  },
  {
    name: 'Collaboration',
    description: 'Building strong partnerships to create lasting positive impact across communities.',
    icon: Users,
  },
  {
    name: 'Optimization',
    description: 'Maximizing efficiency and effectiveness through data-driven strategies and methodologies.',
    icon: TrendingUp,
  },
];

export default function WhyRD() {
  return (
    <div id="why-rd" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why R&D?</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Driving Sustainable Change
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We integrate governance reforms with development planning to create lasting positive impact.
          </p>
        </div>

        <div id="drivers" className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative p-8 bg-white rounded-lg shadow-lg ring-1 ring-black/5 h-full">
                  <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}