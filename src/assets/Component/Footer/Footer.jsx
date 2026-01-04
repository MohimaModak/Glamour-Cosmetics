import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4 tracking-wide">
            Billy Caputo
          </h2>
          <p className="text-base leading-relaxed">
            Psychic guidance and relationship insights designed to bring clarity,
            confidence, and meaningful connections into your life.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition">
                Book
              </Link>
            </li>
            <li>
              <Link className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm mb-2">
            Phone: <a href="tel:2013155587" className="hover:text-white transition">201-315-5587</a>
          </p>
          <p className="text-sm mb-4">
            Email: <span className="text-gray-300">gash66@aol.com
            </span>
          </p>

          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/BillyCaputoPsychic"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/billycaputo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Billy Caputo. All rights reserved.
      </div>
    </footer>
  );
}
