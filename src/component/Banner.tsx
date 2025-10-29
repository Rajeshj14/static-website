import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.pexels.com/video/engraving-machine-clip-example.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Quality Grave Markers & Headstones at Affordable Prices
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Our mission is to provide quality grave markers and headstones
          at affordable prices. We strive to provide customers with an
          effortless experience when ordering a headstone to honor your
          loved one.
        </p>
        <p className="text-xl font-semibold mb-6">
          Proudly Made in the U.S.A.
        </p>

        {/* Trustpilot Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-[#00b67a] text-xl font-semibold">★ Trustpilot</span>
          </div>
          <div className="flex mt-2 space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#00b67a] text-3xl">★</span>
            ))}
          </div>
          <p className="text-sm mt-2">
            TrustScore <span className="font-bold">4.9</span> |{" "}
            <a href="#" className="underline">2,170 reviews</a>
          </p>
        </div>

        <p className="italic text-lg">Ranked #1 in Customer Satisfaction</p>
      </div>
    </div>
  );
};

export default HeroSection;
