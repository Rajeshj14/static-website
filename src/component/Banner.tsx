
import { Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: "url('https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 leading-tight">
            Quality Grave Markers &<br />
            Headstones at Affordable Prices
          </h1>
          
          <p className="text-lg md:text-xl text-center max-w-4xl mb-12 leading-relaxed">
            Our mission is to provide quality grave markers and headstones
            at affordable prices. We strive to provide customers with an
            effortless experience when ordering a headstone to honor your
            loved one.
          </p>
          
          <div className="text-2xl md:text-3xl font-semibold mb-16">
            Proudly Made in the U.S.A.
          </div>
          
          {/* Trustpilot Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <img src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2" alt="Trustpilot" className="h-6 w-6 mr-2 rounded" />
              <span className="text-lg font-semibold">Trustpilot</span>
            </div>
            
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-green-500 text-green-500" />
              ))}
            </div>
            
            <div className="text-sm mb-4">
              TrustScore 4.9 | 2,102 reviews
            </div>
            
            <div className="text-xl italic">
              Ranked #1 in Customer Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Order & Design a headstone online with our easy-to-use design tool.
            </h2>
            
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold">Gray Granite Products</h3>
            </div>
            
            <p className="text-gray-600 mb-12">
              Over 50 symbols & designs available.<br />
              Click Customize Now to start designing.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1731660/pexels-photo-1731660.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2')"
                  }}
                >
                  <div className="absolute inset-0 bg-green-800 bg-opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-200 p-6 rounded shadow-lg text-center text-gray-800 text-sm">
                      <div className="font-bold">TIMOTHY J.<br />ANDERSON</div>
                      <div className="my-2">🏈</div>
                      <div>NOV 22 1990<br />MAR 10 2025</div>
                      <div className="mt-2 italic">GONE BUT NOT FORGOTTEN</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded transform -rotate-12">
                  NEW!<br />Best Seller
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Flat Headstone Marker with Symbol - (16 x 8 x 3 in)
                </h4>
                <div className="text-xl font-bold text-gray-800 mb-4">$197.99</div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold transition-colors">
                  Customize Now
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1731660/pexels-photo-1731660.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2')"
                  }}
                >
                  <div className="absolute inset-0 bg-green-800 bg-opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-200 p-6 rounded shadow-lg text-center text-gray-800 text-sm">
                      <div className="font-bold">JENNIFER<br />MARKSMAN</div>
                      <div className="my-2">🕊️</div>
                      <div>NOV 19 1953<br />JAN 17 2023</div>
                      <div className="mt-2 italic">FOREVER IN OUR HEARTS</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white text-gray-800 px-2 py-1 text-xs rounded border">
                  Special Offer
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Flat Headstone Marker with One Symbol - (20 x 10 x 3 in)
                </h4>
                <div className="flex items-center mb-4">
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
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1731660/pexels-photo-1731660.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2')"
                  }}
                >
                  <div className="absolute inset-0 bg-green-800 bg-opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-200 p-6 rounded shadow-lg text-center text-gray-800 text-sm">
                      <div className="font-bold">MARGAREOT<br />WILLIAMSON</div>
                      <div className="my-2">🌹 🌹</div>
                      <div>FEB 20 1940<br />JUN 14 2015</div>
                      <div className="mt-2 italic">A LIFE MEASURED IN MEMORIES</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded transform -rotate-12">
                  NEW!<br />Best Seller
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Flat Headstone Marker with Two Symbols - (24 x 12 x 4 in)
                </h4>
                <div className="flex items-center mb-4">
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
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/1731660/pexels-photo-1731660.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2')"
                  }}
                >
                  <div className="absolute inset-0 bg-green-800 bg-opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-gray-200 p-6 rounded shadow-lg text-center text-gray-800 text-sm">
                      <div className="font-bold">DEBORAH ANN<br />MITCHELL</div>
                      <div className="my-2">🦋</div>
                      <div>FEB 10 1959<br />JAN 19 2020</div>
                      <div className="mt-2 italic">IN LOVING MEMORY</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-white text-gray-800 px-2 py-1 text-xs rounded border">
                  Special Offer
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Flat Headstone Marker with Border - (24 x 12 x 4 in)
                </h4>
                <div className="flex items-center mb-4">
                  <span className="text-gray-500 line-through mr-2">$529.99</span>
                  <span className="text-xl font-bold text-gray-800">$499.00</span>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold transition-colors">
                  Customize Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Click to see more size & design options
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-8 rounded-lg font-semibold transition-colors">
              Gray Granite Products - View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
