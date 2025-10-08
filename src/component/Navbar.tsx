"use client"

import { Menu, X, Search, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">WebCraft</span>
            </div>

            <div className="hidden md:flex ml-10 space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Features
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <User size={20} />
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-900 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-gray-100">
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
