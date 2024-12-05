import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="hero" className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col h-screen justify-center">
        <div className="text-center sm:text-left max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Research | Design | Growth
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed">
            Innovative Solutions for Governance Reforms and Sustainable Development in the MENA Region
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#why-rd"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition duration-150 ease-in-out"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}