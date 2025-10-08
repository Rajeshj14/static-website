import React from 'react';

function CardsSection() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-blue-500 text-white py-4 px-6 rounded-t-lg mb-0">
          <h1 className="text-2xl font-semibold text-center">Gray Granite Products</h1>
        </div>
        
        {/* Description */}
        <div className="bg-white px-6 py-4 mb-8">
          <p className="text-gray-800 mb-2">Over 50 symbols & designs available.</p>
          <p className="text-gray-800">Click Customize Now to start designing.</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              {/* Grass Background */}
              <div className="h-80 bg-gradient-to-b from-green-600 to-green-700 relative overflow-hidden">
                {/* Grass texture pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.1) 1px,
                      rgba(0,0,0,0.1) 2px
                    ), repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.1) 1px,
                      rgba(0,0,0,0.1) 2px
                    )`
                  }}></div>
                </div>
                
                {/* Size indicator */}
                <div className="absolute top-4 left-4 text-white text-sm">
                  <div className="bg-black bg-opacity-50 px-2 py-1 rounded">
                    Gray Granite<br />
                    16in x 8in x 3in
                  </div>
                </div>
                
                {/* Measurement lines */}
                <div className="absolute bottom-16 right-4 text-white text-xs">
                  <div className="flex items-center">
                    <div className="w-8 h-px bg-white mr-1"></div>
                    <span>8"</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="w-px h-8 bg-white mr-1"></div>
                    <span className="transform -rotate-90 origin-left">16"</span>
                  </div>
                </div>
                
                {/* Headstone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-200 p-4 rounded shadow-lg text-center text-gray-800 text-sm w-48 h-32 flex flex-col justify-center border-2 border-gray-300">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 border-2 border-gray-600 rounded-full flex items-center justify-center mr-2">
                        <div className="text-xs font-bold">⚔</div>
                      </div>
                      <div>
                        <div className="font-bold text-xs">ANGELA L.</div>
                        <div className="font-bold text-xs">CARMICHAEL</div>
                      </div>
                    </div>
                    <div className="text-xs">MAR 29 1950</div>
                    <div className="text-xs">OCT 11 2022</div>
                    <div className="text-xs italic mt-1">REST IN GOD'S LOVING CARE</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2 text-center">
                Flat Headstone Marker with Symbol -<br />
                (16 x 8 x 3 in)
              </h3>
              <div className="text-xl font-bold text-gray-800 mb-4 text-center">$197.99</div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold transition-colors">
                Customize Now
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              {/* Special Offer Badge */}
              <div className="absolute top-2 right-2 bg-white text-gray-800 px-3 py-1 text-xs rounded-full border z-10">
                Special Offer
              </div>
              
              {/* Grass Background */}
              <div className="h-80 bg-gradient-to-b from-green-600 to-green-700 relative overflow-hidden">
                {/* Grass texture pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.1) 1px,
                      rgba(0,0,0,0.1) 2px
                    ), repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.1) 1px,
                      rgba(0,0,0,0.1) 2px
                    )`
                  }}></div>
                </div>
                
                {/* Headstone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-200 p-4 rounded shadow-lg text-center text-gray-800 text-sm w-48 h-32 flex flex-col justify-center border-2 border-gray-300">
                    <div className="flex items-center justify-center mb-2">
                      <div className="text-2xl mr-2">🕊</div>
                      <div>
                        <div className="font-bold text-xs">JENNIFER</div>
                        <div className="font-bold text-xs">MARKSMAN</div>
                      </div>
                    </div>
                    <div className="text-xs">NOV 19 1953</div>
                    <div className="text-xs">MAY 13 2019</div>
                    <div className="text-xs italic mt-1">FOREVER IN OUR HEARTS</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-[#e9e9e9]">
              <h3 className="font-semibold text-gray-800 mb-2 text-center">
                Flat Headstone Marker with One<br />
                Symbol - (20 x 10 x 3 in)
              </h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-gray-500 line-through mr-2">$339.99</span>
                <span className="text-xl font-bold text-gray-800">$329.00</span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold transition-colors">
                Customize Now
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              {/* Most Popular Badge */}
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded transform -rotate-12 z-10">
                <div className="font-bold">MOST</div>
                <div className="font-bold">Popular</div>
              </div>
              
              {/* Special Offer Badge */}
              <div className="absolute top-2 right-2 bg-white text-gray-800 px-3 py-1 text-xs rounded-full border z-10">
                Special Offer
              </div>
              
              {/* Grass Background */}
              <div className="h-80 bg-gradient-to-b from-green-600 to-green-700 relative overflow-hidden">
                {/* Grass texture pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.1) 1px,
                      rgba(0,0,0,0.1) 2px
                    ), repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.1) 1px,
                      rgba(0,0,0,0.1) 2px
                    )`
                  }}></div>
                </div>
                
                {/* Headstone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-200 p-4 rounded shadow-lg text-center text-gray-800 text-sm w-48 h-32 flex flex-col justify-center border-2 border-gray-300">
                    <div className="flex items-center justify-center mb-2">
                      <div className="text-lg mr-2">🌹</div>
                      <div>
                        <div className="font-bold text-xs">MARGAREOT</div>
                        <div className="font-bold text-xs">WILLIAMSON</div>
                      </div>
                      <div className="text-lg ml-2">🌹</div>
                    </div>
                    <div className="text-xs">FEB 20 1940</div>
                    <div className="text-xs">JUN 14 2015</div>
                    <div className="text-xs italic mt-1">A LIFE MEASURED IN MEMORIES</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2 text-center">
                Flat Headstone Marker with Two<br />
                Symbols - (24 x 12 x 4 in)
              </h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-gray-500 line-through mr-2">$519.99</span>
                <span className="text-xl font-bold text-gray-800">$489.00</span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold transition-colors">
                Customize Now
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              {/* Special Offer Badge */}
              <div className="absolute top-2 right-2 bg-white text-gray-800 px-3 py-1 text-xs rounded-full border z-10">
                Special Offer
              </div>
              
              {/* Grass Background */}
              <div className="h-80 bg-gradient-to-b from-green-600 to-green-700 relative overflow-hidden">
                {/* Grass texture pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.1) 1px,
                      rgba(0,0,0,0.1) 2px
                    ), repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.1) 1px,
                      rgba(0,0,0,0.1) 2px
                    )`
                  }}></div>
                </div>
                
                {/* Headstone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-200 p-4 rounded shadow-lg text-center text-gray-800 text-sm w-48 h-32 flex flex-col justify-center border-2 border-gray-300">
                    <div className="flex items-center justify-center mb-2">
                      <div className="text-2xl mr-2">✝</div>
                      <div>
                        <div className="font-bold text-xs">DEBORAH ANN</div>
                        <div className="font-bold text-xs">MITCHELL</div>
                      </div>
                      <div className="text-lg ml-2">🌹</div>
                    </div>
                    <div className="text-xs">FEB 10 1959</div>
                    <div className="text-xs">JAN 15 2020</div>
                    <div className="text-xs italic mt-1">IN LOVING MEMORY</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2 text-center">
                Flat Headstone Marker with Border -<br />
                (24 x 12 x 4 in)
              </h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-gray-500 line-through mr-2">$529.99</span>
                <span className="text-xl font-bold text-gray-800">$499.00</span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold transition-colors">
                Customize Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsSection;