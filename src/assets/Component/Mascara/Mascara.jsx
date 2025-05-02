import React from "react";
import mascara from "../../../../src/Gallery/mascara.webp";
import makeup2 from "../../../../src/Gallery/eyeliner.webp";

export default function Mascara() {
  return (
    <div id="/Mascara" className="bg-red-200 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Slider Section */}
        <div className="flex-1 overflow-hidden rounded-2xl shadow-lg">
          <div className="slider w-full h-full flex animate-slide">
            <img
              src={mascara}
              alt="High-Quality Mascara"
              className="w-full h-auto object-cover flex-shrink-0"
            />
            <img
              src={makeup2}
              alt="Perfect Eyeliner"
              className="w-full h-auto object-cover flex-shrink-0"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-red-50 mb-6 textshadow">
            Elevate Your Look
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 my-6 max-w-md">
            Discover our premium mascara that defines, lifts, and volumizes your lashes with a single stroke. 
            Our formula is lightweight, long-lasting, and perfect for creating stunning, bold eyes.
          </p>
          <button className="bg-red-50 text-red-400 text-lg px-8 py-3 rounded-full hover:bg-red-300 hover:text-red-50 transition-all">
            Shop Now
          </button>
        </div>

      </div>

      {/* Core CSS for slider */}
      <style jsx>{`
        .slider {
          width: 200%;
        }
        .slider img {
          width: 50%;
        }
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          45% {
            transform: translateX(0%);
          }
          55% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 3s infinite alternate ease-in-out;
        }
      `}</style>

    </div>
  );
}
