import React from 'react'
import nailpolish from "../../../../src/Gallery/Book.jpeg"
import { Link } from 'react-scroll';


export default function FeatureProduct() {
  return (
    <div id='/FeatureProduct' className='bg-gradient-to-b from-neutral-950 to-white py-20 px-6 md:px-20'>
      <div className='lg:flex items-center justify-center gap-12'>


        <div className='flex items-center justify-center'>
          <img
            src={nailpolish}
            alt="Nail Polish"
            className='w-[500px] object-contain shadow-2xl rounded-md'
          /> 
        </div>

        {/* Text Content */}
        <div className=' text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl font-bold text-neutral-100 mb-6 textshadow'>
           How To Find Love
          </h2>
          <p className='text-xl md:text-2xl text-neutral-200 my-6 max-w-md'>
            A Master's Guide To Finding Your Soulmate. Guaranteed!  and include somewhere Psychic Billy Caputo
          </p>
          <Link to='/Contact' smooth={true} duration={1000}>
            <button className="bg-neutral-600 text-white textshadow px-8 py-3 rounded-full hover:bg-red-400 transition-all">
              Buy Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
} 