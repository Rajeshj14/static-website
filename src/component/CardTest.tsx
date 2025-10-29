// "use client";

// import React from "react";
// import { useState } from "react";

// const products = [
//   {
//     id: 1,
//     title: "Flat Headstone Marker with Symbol - (16 x 8 x 3 in)",
//     price: "$197.99",
//     tag: "$197.99 Special Offer",
//     mainImage: "/images/headstone-main1.jpg",
//     hoverImage: "/images/headstone-hover1.jpg",
//   },
//   {
//     id: 2,
//     title: "Classic Granite Marker with Design - (20 x 10 x 3 in)",
//     price: "$249.99",
//     tag: "$249.99 Special Offer",
//     mainImage: "/images/headstone-main2.jpg",
//     hoverImage: "/images/headstone-hover2.jpg",
//   },
//   {
//     id: 3,
//     title: "Premium Memorial Marker - (24 x 12 x 3 in)",
//     price: "$299.99",
//     tag: "$299.99 Special Offer",
//     mainImage: "/images/headstone-main3.jpg",
//     hoverImage: "/images/headstone-hover3.jpg",
//   },
// ];

// const ProductGrid = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-6">
//       <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {products.map((item) => (
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProductCard = ({ product }) => {
//   const [hover, setHover] = useState(false);
//   return (
//     <div className="min-h-screen ">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-white py-4 px-6 rounded-t-lg mb-0">
//           <h1 className="text-2xl tracking-2 text-center text-black pt-2 pb-2">
//             Order & Design a headstone online with our easy-to-use design tool.
//           </h1>
//         </div>
//         <div className="bg-blue-500 text-white py-4 px-6 mb-0">
//           <h1 className="text-2xl font-semibold text-center">
//             Gray Granite Products
//           </h1>
//         </div>

//         {/* Description */}
//         <div className="bg-white py-4 mb-6">
//           <p className="text-gray-800">Over 50 symbols & designs available.</p>
//           <p className="text-gray-800">
//             Click Customize Now to start designing.
//           </p>
//         </div>
//  <div
//       className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300"
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       {/* Image Section */}
//       <div className="relative w-full h-[230px] overflow-hidden">
//         <img
//           src={hover ? product.hoverImage : product.mainImage}
//           alt={product.title}
//           className="w-full h-full object-cover transition-opacity duration-500"
//         />
//         {/* Red Offer Tag */}
//         <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-br-md">
//           {product.tag.split(" ")[0]} <br />
//           <span className="font-normal text-[11px]">
//             {product.tag.split(" ").slice(1).join(" ")}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="bg-gray-50 text-center px-4 py-4">
//         <p className="text-gray-800 text-sm leading-snug mb-2">
//           {product.title}
//         </p>
//         <p className="text-gray-900 font-semibold text-lg mb-4">
//           {product.price}
//         </p>
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-5 rounded-md shadow-md">
//           Customize Now
//         </button>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
"use client"
import React, { useState } from 'react';

const HeadstoneCard = ({ 
  title, 
  price, 
  originalPrice, 
  hasOffer, 
  image1, 
  image2 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#e9e9e9] rounded-lg shadow-lg overflow-hidden w-full max-w-sm">
      {/* Image Section */}
      <div 
        className="relative cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div className="flex items-center justify-center  min-h-[280px]">
          <img 
            src={isHovered ? image2 : image1}
            alt={title}
            className="max-w-full h-auto transition-opacity duration-300 object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h3 className={`text-gray-800 text-sm tracking-5 font-medium mb-4 transition-all duration-300 ${
          isHovered ? 'underline decoration-2 underline-offset-4' : ''
        }`}>
          {title}
        </h3>
        
        <div className="flex items-center justify-center gap-3 mb-6">
          {originalPrice && (
            <span className="text-gray-400 line-through text-lg">
              ${originalPrice}
            </span>
          )}
          <span className="text-gray-900 text-lg">
            ${price}
          </span>
        </div>

        <button className="w-[70%] bg-[#1a7cff] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
          Customize Now
        </button>
      </div>
    </div>
  );
};

const HeadstoneCards = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <HeadstoneCard
            title="Flat Headstone Marker with Symbol - (16 x 8 x 3 in)"
            price="197.99"
            hasOffer={true}
            image1="/gray/flat.webp"
            image2="/gray/flat-heads.webp
            "
          />
          
          <HeadstoneCard
            title="Flat Headstone Marker with One Symbol - (20 x 10 x 3 in)"
            price="329.00"
            originalPrice="339.99"
            hasOffer={true}
            image1="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&h=300&fit=crop"
            image2="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop"
          />
          <HeadstoneCard
            title="Flat Headstone Marker with One Symbol - (20 x 10 x 3 in)"
            price="329.00"
            originalPrice="339.99"
            hasOffer={true}
            image1="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&h=300&fit=crop"
            image2="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop"
          />
          <HeadstoneCard
            title="Flat Headstone Marker with One Symbol - (20 x 10 x 3 in)"
            price="329.00"
            originalPrice="339.99"
            hasOffer={true}
            image1="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&h=300&fit=crop"
            image2="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=300&fit=crop"
          />
        </div>
      </div>
    </div>
  );
};

export default HeadstoneCards;