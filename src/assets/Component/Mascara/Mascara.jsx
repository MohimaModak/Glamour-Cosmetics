import React from "react";

export default function Mascara() {
  return (
    <section
      id="/Mascara"
      className="bg-gradient-to-bl from-[#7e1212] via-[#530404] to-neutral-900 py-20 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center text-neutral-100">

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 textshadow">
          Single and Still Looking for Love?
        </h2>

        {/* Sub headline */}
        <p className="text-xl md:text-2xl text-neutral-200 mb-10">
          Stop wasting time and money on dating sites.
          The real solution is finally HERE.
        </p>

        {/* Benefits */}
        <div className="space-y-4 text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-12 text-left">
          <p>✔ A clear step-by-step guide to attracting true love</p>
          <p>✔ Written by Psychic Billy Caputo</p>
          <p>✔ Designed for people serious about relationships</p>
          <p>✔ 90-Day Results — or Your Money Back Guarantee*</p>
        </div>

        {/* Price */}
        <div className="mb-8">
          <p className="text-3xl font-bold text-neutral-100">
            Only <span className="text-red-400">$4.99 USD</span>
          </p>
        </div>


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


        <p className="mt-10 text-lg lg:text-xl text-neutral-100">
          Questions? Contact:{" "}
          <a
            href="mailto:billy@billycaputo.com"
            className="underline font-semibold hover:text-neutral-200"
          >
            billy@billycaputo.com
          </a>
        </p>

      </div>
    </section>
  );
}
