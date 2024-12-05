import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About R&D</h3>
            <p className="text-gray-400 text-sm">
              Leading consultancy firm specializing in governance reforms and sustainable development in the MENA region.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white text-sm">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white text-sm">Services</a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-white text-sm">Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white text-sm">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#reforms" className="text-gray-400 hover:text-white text-sm">Governance Reforms</a>
              </li>
              <li>
                <a href="#development" className="text-gray-400 hover:text-white text-sm">Development</a>
              </li>
              <li>
                <a href="#consulting" className="text-gray-400 hover:text-white text-sm">Consulting</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-150"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} R&D Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}