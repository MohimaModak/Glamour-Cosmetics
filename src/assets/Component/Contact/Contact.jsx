import React from 'react';
import facebook from "../../../../src/Gallery/facebook.png";
import instagram from "../../../../src/Gallery/instagram.png";
import PhoneCall from "../../../../src/Gallery/PhoneCall.png";

export default function Contact() {
  return (
    <div
      id="/Contact"
      className="bg-gradient-to-br from-[#7a6908] via-[#6b4a03] to-neutral-950 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 textshadow">
            Contact Billy Caputo
          </h2>
          <p className="mt-4 text-lg text-neutral-100 font-medium">
            Get in touch for psychic readings, book inquiries, or guidance.
          </p>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Call */}
          <a
            href="tel:2013155587"
            className="flex flex-col items-center gap-3 hover:scale-105 transition-all"
          >
            <img src={PhoneCall} alt="Call Billy Caputo" className="w-16 h-16" />
            <span className="text-lg font-semibold text-neutral-100">
              Call: 201-315-5587
            </span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/BillyCaputoPsychic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 hover:scale-105 transition-all"
          >
            <img src={facebook} alt="Facebook" className="w-16 h-16" />
            <span className="text-lg font-semibold text-neutral-100">
              Facebook
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/billycaputo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 hover:scale-105 transition-all"
          >
            <img src={instagram} alt="Instagram" className="w-16 h-16" />
            <span className="text-lg font-semibold text-neutral-100">
              Instagram
            </span>
          </a>

        </div>
      </div>
    </div>
  );
}
