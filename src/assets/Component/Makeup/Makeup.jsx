import React from 'react';
import makeup from "../../../../src/Gallery/Background2.png";
import "./Makeup.css"

export default function Makeup() {
  return (
    <div id='/Makeup' className="relative bg-red-100 py-20 px-6 md:px-20">
    <div className="hidden lg:block relative">
      
      {/* Background Image */}
      <div className="relative flex justify-center items-center">
        <img 
          src={makeup} 
          className="h-[670px] shadow-2xl rounded-lg" 
          alt="Makeup" 
        />
        
        {/* Text Section on Top of Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-lg text-center max-w-2xl mx-4">
            <h2 className="text-4xl md:text-5xl font-bold text-red-300 mb-4 textshadow">
              Unleash Your Inner Beauty
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Elevate your everyday look with our premium cosmetics that promise brilliance in every swipe. 
              It's time to glow like never before!
            </p>
            <button className="bg-red-300 textshadow text-white text-lg px-8 py-3 rounded-full hover:bg-red-400 hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

      </div>

    </div>
    <div className=" block lg:hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        
        {/* Makeup Image */}
        <div className="flex justify-center items-center">
          <img src={makeup} className="w-96 object-cover rounded-lg" alt="Makeup" />
        </div>

        {/* Text Section */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg max-w-lg text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-red-300 mb-4 textshadow">
            Unleash Your Inner Beauty
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Dive into a world of colors and textures crafted to celebrate your unique charm. 
            Elevate your everyday look with our premium cosmetics that promise brilliance in every swipe. 
            It's time to glow like never before!
          </p>
          <button className="bg-red-300 text-white px-8 py-3 rounded-full hover:bg-red-400 hover:scale-105 transition-all duration-300">
            Shop Now
          </button>
        </div>

      </div>
    </div>

    </div>
  );
}
