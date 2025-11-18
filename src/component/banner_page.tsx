import React from 'react';
import { Gem, Award, Heart } from 'lucide-react';

export default function MemorialCraftsmanship() {
  return (
    <div className="w-full mb-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row ml-25 mr-25 mt-5">
        {/* Left Image */}
        <div className="w-full md:w-2/5">
          <img 
            src="/gray/AdobeStockswd.webp" 
            alt="Craftsman at work" 
            className="w-120 h-95 object-cover rounded-bl-lg rounded-tl-lg "
          />
        </div>
        
        {/* Right Content */}
        <div className="w-full md:w-4/5 bg-gray-100 flex items-center justify-center px-8 md:px-6 py-6 md:py-14">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-2xl font-light text-gray-800 mb-7">
              50 years of quality craftsmanship.
            </h2>
            <p className="text-gray-600 leading-relaxed text-center md:text-lg tracking-1">
              Our team of passionate and talented craftsman have been producing quality 
              memorial headstones, tombstones & grave markers for over 50 years. It's our 
              mission to provide quality cemetery markers and headstones at an affordable rate. 
              We offer an ironclad promise to our customers for quality and care.
            </p>
          </div>
        </div>
      </div>

      {/* Three Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto my-9 ">
        {/* Affordable Card */}
        <div className="bg-gray-100 p-5 flex flex-col items-center text-center w-90 h-70 ">
          <div className="w-12 h-12 mb-6 flex items-center justify-center">
            <Gem className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-normal text-gray-800 mb-4">Affordable</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            As a natural stone quarrier and fabricator, we are able to provide flat markers & upright 
            headstones at an affordable rate.
          </p>
        </div>

        {/* Quality Card */}
        <div className="bg-gray-100 p-5 flex flex-col items-center text-center w-90 h-70  ">
          <div className="w-12 h-12 mb-6 flex items-center justify-center">
            <Award className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-normal text-gray-800 mb-4">Quality</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our marble and gray granite grave markers are quarried and fabricated in the United 
            States and made with the highest quality materials.
          </p>
        </div>

        {/* Craftsmanship Card */}
        <div className="bg-gray-100 p-4 flex flex-col items-center text-center w-90 h-70 ">
          <div className="w-12 h-12 mb-6 flex items-center justify-center">
            <Heart className="w-10 h-10 text-gray-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-normal text-gray-800 mb-4">Craftsmanship</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            As a family and veteran-owned company, we know the importance of craftsmanship and 
            strive for quality & care.
          </p>
        </div>
      </div>

      {/* Made in USA Section */}
      <div className="flex flex-col md:flex-row-reverse mt-8 ml-25 mr-25 mt-5">
        {/* Right Image */}
        <div className="w-full md:w-2/5">
          <img 
            src="/gray/usa.webp" 
            alt="American flag" 
            className="w-120 h-95 object-cover rounded-br-lg rounded-tr-lg "
          />
        </div>
        
        {/* Left Content */}
        <div className="w-full md:w-4/5 bg-gray-100 flex items-center justify-center md:py-4">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-2xl font-light text-gray-800 mb-7 text-right">
              Proudly Made in the U.S.A.
            </h2>
            <h3 className="text-xl font-normal text-gray-700 mb-6 text-right">
              Service Disabled Veteran Owned Small Business
            </h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-lg tracking-1 text-right">
              We are a service disabled veteran owned small business. As a natural stone 
              quarrier and fabricator, we have perfected the process of making a grave stone to 
              honor your loved ones.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}