import React, { useState } from "react";
import logo from "../../../Gallery/icon2.png"
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white bg-gradient-to-bl to-neutral-900 from-[#7e1212] via-[#530404] backdrop-blur-3xl font-medium top-0 z-50 shadow-sm">
      <div className="flex justify items-center">
        <div className="md:hidden sm:block  text-sm p-2" onClick={toggleButton}>
          <div className="cursor-pointer">
            <div className="">
              <div className="w-8 h-1 rounded-full bg-red-100"></div>
              <div className="w-8 h-1 mt-1 rounded-full bg-red-100"></div>
              <div className="w-8 h-1 mt-1 rounded-full bg-red-100"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""}`}>
        <div className="navbar-links bg-black font-bold text-neutral-100">
          <div className="flex items-center justify-center"><img src={logo} className="w-10" />
            <h1 className="font-bold  text-neutral-100 text-3xl text-center p-4">Love</h1></div>
          {/* <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link> */}
          <Link to="/Products" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Book
          </Link>
          
          <Link to="/Nailpolish" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Author
          </Link>
          <Link to="/Contact" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Contact
          </Link>
           <Link to="/Mascara" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            CTA
          </Link>
         
        </div>
      </div>


      <div className="flex justify-between items-center bg-gradient-to-bl to-neutral-900 from-[#7e1212] via-[#530404] backdrop-blur-3xl">
        <div className="hidden md:block w-full ">
          <nav className="navbar flex justify-between items-center">
            <div className="flex justify-center items-center gap-4">
              <img src={logo} className="w-14" />
            </div>
            <div className="navbar-links lg:flex justify-center items-center gap-5">
              {/* <Link to="/" smooth={true} duration={1000} className="text-2xl text hover: text-neutral-100 hover:underline">
                Home
              </Link> */}
              <Link to="/Products" smooth={true} duration={1000} className="text-2xl text hover: text-neutral-100 hover:underline">
                Book
              </Link>
             
              <Link to="/Nailpolish" smooth={true} duration={1000} className="text-2xl text hover: text-neutral-100 hover:underline">
                Author
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-2xl text hover: text-neutral-100 hover:underline">
                Contact
              </Link>
               <Link to="/Mascara" smooth={true} duration={1000} className="text-2xl text hover: text-neutral-100 hover:underline">
                CTA
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <a
                href="https://www.paypal.com/ncp/payment/T54G287MTFMD8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-red-500 text-neutral-100 px-10 py-4 rounded-full text-xl font-semibold
           hover:bg-red-100 hover:text-black transition-all shadow-lg">
                  Buy Now
                </button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}