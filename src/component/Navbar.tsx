"use client";
import React, { useState } from "react";

const Header = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <div>
      {/* Top Bar - Contact Info */}
      <div className="bg-white py-2 border-b border-gray-200 ">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-gray-700 tracking-1">
            Give us a Call: 1 (800) 775-0089 or Email:
            info@markersandheadstones.com
          </p>
        </div>
      </div>

      {/* Blue Banner - Shipping Info */}
      <div className="bg-[#1E90FF] py-3 ">
        <div className="container mx-auto px-4">
          <p className="text-sm text-center text-white font-medium tracking-1">
            FREE shipping within the lower 48 States - Delivered in 20 Business
            Days for Flat Markers
          </p>
        </div>
      </div>

      {/* Main Navigation */}
    <div className="bg-white py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left Side - Logo + Nav Links */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/Company-logo.avif"
              alt="Markers & Headstones Co."
              className="h-13 w-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-800 text-sm hover:text-blue-600 transition-colors"
            >
              Home
            </a>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center text-gray-800 text-sm hover:text-blue-600 transition-colors"
              >
                Products
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Product 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Product 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Product 3
                  </a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center text-gray-800 text-sm hover:text-blue-600 transition-colors"
              >
                Resources
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Resource 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Resource 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Resource 3
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="flex items-center text-gray-800 text-sm hover:text-blue-600 transition-colors"
            >
              <span className="mr-2">📞</span> Contact Us
            </a>
          </div>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <button className="text-gray-800 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Account */}
          <button className="text-gray-800 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
              />
              <circle cx="12" cy="7" r="4" strokeWidth={2} />
            </svg>
          </button>

          {/* Cart */}
          <button className="text-gray-800 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
