import React from "react";

const HelpSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white flex items-center"
      style={{
        backgroundImage: "url('/gray/Chisels.jpg')",
        height: "512px", 
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col items-start">
        <div className="bg-white bg-opacity-10 p-6 rounded-tl-lg rounded-bl-lg border-l-4 border-t-4 border-blue-500 max-w-lg">
          <h2 className="text-3xl font-semibold mb-2">How Can We Help?</h2>
          <p className="text-lg mb-4">
            Looking For A Custom Size Or Have A Question?
          </p>
          <p className="text-sm mb-6 leading-relaxed">
            Our memorials are crafted from 100% natural stone. We offer many
            standard types & sizes in gray granite, black granite, or white
            marble.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-300">
            CONTACT US +
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
