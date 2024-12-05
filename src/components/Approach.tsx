import { Search, Users, BarChart, Globe } from 'lucide-react';

const approaches = [
  {
    title: 'Quantitative & Qualitative Methods',
    description: 'Combining data-driven analysis with contextual insights for comprehensive understanding.',
    icon: Search,
  },
  {
    title: 'Multidisciplinary Analysis',
    description: 'Integrating diverse perspectives to address complex challenges effectively.',
    icon: Users,
  },
  {
    title: 'Evidence-Based Solutions',
    description: 'Developing strategies backed by robust research and proven methodologies.',
    icon: BarChart,
  },
  {
    title: 'Regional Adaptation',
    description: 'Tailoring solutions to local contexts while applying global best practices.',
    icon: Globe,
  },
];

export default function Approach() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Approach</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Methodology & Expertise
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Evidence-based solutions tailored to the MENA region
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {approaches.map((approach) => (
              <div
                key={approach.title}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative p-6 bg-white rounded-lg ring-1 ring-gray-900/5">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <approach.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-gray-500">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Commitment to Excellence
              </h3>
              <p className="text-gray-600 mb-6">
                We combine rigorous research methodologies with deep regional expertise to deliver impactful solutions. Our approach ensures that every project benefits from both global best practices and local insights.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
              >
                Learn More About Our Methods
              </a>
            </div>
            <div className="relative h-64 lg:h-full min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}