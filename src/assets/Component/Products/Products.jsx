import React from 'react';
import nailpolish from "../../../../src/Gallery/Book.jpeg";

export default function Products() {
  return (
    <div
      id="/Products"
      className="bg-gradient-to-br from-[#7a6908] via-[#6b4a03] to-neutral-950 py-20 px-6 md:px-20"
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
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4 textshadow">
            How To Find Love
          </h2>

          <p className="text-xl md:text-2xl text-neutral-200 max-w-md mb-4">
            A Master’s Guide To Finding Your Soulmate. Guaranteed!  
            <br />
            <span className="italic text-neutral-300">
              by Psychic Billy Caputo
            </span>
          </p>

          {/* Price */}
          <p className="text-3xl font-semibold text-white mb-6">
            $4.99 <span className="text-lg font-normal text-neutral-300">USD</span>
          </p>

          {/* CTA */}
          <a
            href="https://www.paypal.com/ncp/payment/T54G287MTFMD8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-neutral-100 text-neutral-800 textshadow text-xl font-semibold px-10 py-3 rounded-full hover:bg-neutral-800 hover:text-neutral-100 transition-all">
              Buy Now
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}
