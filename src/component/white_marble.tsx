"use client";
import React, { useState } from "react";

const HeadstoneCard = ({
  title,
  price,
  originalPrice,
  hasOffer,
  image1,
  image2,
}: {
  title: string;
  price: string;
  originalPrice?: string;
  hasOffer?: boolean;
  image1: string;
  image2: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#e9e9e9] rounded-lg shadow-lg overflow-hidden w-full max-w-sm mx-auto">
      {/* Image Section */}
      <div
        className="relative cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hasOffer && (
          <div className="absolute top-3 right-3 bg-[#e9e9e9] text-black tracking-1 text-xs px-5 py-2 rounded-full shadow-md">
            Special Offer
          </div>
        )}
        <div className="flex items-center justify-center min-h-[280px] bg-white">
          <img
            src={isHovered ? image2 : image1}
            alt={title}
            className="max-w-full h-auto transition-opacity duration-300 object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h3
          className={`text-gray-800 text-sm tracking-wide font-medium mb-4 transition-all duration-300 ${
            isHovered ? "underline decoration-2 underline-offset-4" : ""
          }`}
        >
          {title}
        </h3>

        <div className="flex items-center justify-center gap-3 mb-3">
          {originalPrice && (
            <span className="text-gray-400 line-through text-lg">
              ${originalPrice}
            </span>
          )}
          <span className="text-gray-900 text-lg ">${price}</span>
        </div>

        {/* Uncomment this button if needed */}
        {/* <button className="w-[70%] bg-[#1a7cff] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
          Customize Now
        </button> */}
      </div>
    </div>
  );
};

const HeadstoneCardeds = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-white py-4 px-6 rounded-t-lg mb-0">
          <h1 className="text-2xl text-center text-black pt-2 pb-2">
            Order & Design a headstone online with our easy-to-use design tool.
          </h1>
        </div>

        <div className="bg-blue-500 text-white py-3 px-6 mb-0">
          <h1 className="text-2xl font-semibold text-center">
            Gray Granite Products
          </h1>
        </div>

        {/* Description */}
        <div className="py-4 mb-6 text-left">
          <p className="text-gray-800">Over 50 symbols & designs available.</p>
          <p className="text-gray-800">
            Click "Customize Now" to start designing.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <HeadstoneCard
            title="Flat Headstone Marker with Symbol - (16 x 8 x 3 in)"
            price="197.99"
            hasOffer={false}
            image1="/gray/flat.webp"
            image2="/gray/flat-heads.webp"
          />

          <HeadstoneCard
            title="Flat Headstone Marker with One Symbol - (20 x 10 x 3 in)"
            price="329.00"
            originalPrice="339.99"
            hasOffer={true}
            image1="/gray/flat-headstone.jpeg"
            image2="/gray/headstone.jpeg"
          />

          <HeadstoneCard
            title="Flat Headstone Marker with One Symbol - (20 x 10 x 3 in)"
            price="329.00"
            originalPrice="339.99"
            hasOffer={false}
            image1="/gray/margarot.jpeg"
            image2="/gray/william.webp"
          />

          <HeadstoneCard
            title="Flat Headstone Marker with One Symbol - (20 x 10 x 3 in)"
            price="329.00"
            originalPrice="339.99"
            hasOffer={true}
            image1="/gray/mitchell.jpg"
            image2="/gray/john.jpeg"
          />
        </div>
      </div>
      <div className="py-4 text-center">
        <p className="text-gray-800 font-semibold mb-9">
          Click to see more design options
        </p>
        <button className="bg-black text-white py-4 px-10 cursor-pointer font-medium rounded-md transition-all duration-500 transform hover:scale-105 hover:bg-gray-900">
          {" "}
          White Marble Products - View More
        </button>
      </div>
    </div>
  );
};

export default HeadstoneCardeds;
