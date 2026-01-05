import React from 'react';
import nailpolish from "../../../../src/Gallery/Book.jpeg";

export default function Products() {
  return (
    <div
      id="/Products"
      className="bg-gradient-to-br from-neutral-900 to-[#7e1212] via-[#530404] mt-8 py-20 px-6 md:px-20"
    >
      <div className="lg:flex items-center justify-center gap-12">

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={nailpolish}
            alt="How To Find Love Book"
            className="w-[500px] object-contain shadow-2xl rounded-md"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-red-100 mb-6 textshadow pt-6">
            How To Find Love
          </h2>

          <p className="text-xl md:text-2xl text-neutral-200 max-w-md mb-4">
            Stop wasting time and money on dating sites.
            This book shows a clear, focused path to finding love.
            <br />
            <br />
            <span className="italic text-neutral-300">
              Written by Psychic <span className='font-bold text-red-400'>Billy Caputo </span> 
               Helping people with love & relationship guidance for years
            </span>
          </p>

          {/* Price */}
          <p className="text-3xl font-semibold text-white mb-6">
            $4.99 <span className="text-lg font-bold text-red-400">USD</span>
          </p>

          {/* CTA */}
         <a
          href="https://www.paypal.com/ncp/payment/T54G287MTFMD8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-red-500 text-neutral-100 px-8 py-3 lg:px-10 lg:py-4 rounded-full text-lg lg:text-xl font-semibold
           hover:bg-red-100 hover:text-black transition-all shadow-lg">
            Buy Now
          </button>
        </a>
        </div>

      </div>
    </div>
  );
}
