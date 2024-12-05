import { Building2, LineChart, BarChart3, Briefcase, Users2, FileSearch } from 'lucide-react';

const services = [
  {
    category: 'Reforms',
    id: 'reforms',
    items: [
      {
        title: 'Institutional and Governance Enhancement',
        description: 'Improving institutional frameworks and governance systems for sustainable development.',
        icon: Building2,
      },
      {
        title: 'Public Policies & Strategies',
        description: 'Crafting evidence-based policies and sectorial strategies for effective governance.',
        icon: LineChart,
      }
    ]
  },
  {
    category: 'Development',
    id: 'development',
    items: [
      {
        title: 'Strategic Growth',
        description: 'Developing comprehensive strategies for sustainable economic and social growth.',
        icon: BarChart3,
      },
      {
        title: 'Urban Development',
        description: 'Creating sustainable urban solutions that preserve cultural heritage.',
        icon: Building2,
      },
      {
        title: 'Project Support',
        description: 'End-to-end project management and technical assistance services.',
        icon: Briefcase,
      }
    ]
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Comprehensive Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Tailored approaches for governance reforms and sustainable development
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {services.map((category) => (
            <div key={category.category} id={category.id}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((service) => (
                  <div
                    key={service.title}
                    className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h4>
                      <p className="mt-2 text-gray-500">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}