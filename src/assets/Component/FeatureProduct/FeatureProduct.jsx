import React from 'react'
import nailpolish from "../../../../src/Gallery/nailpolish1.webp"
import { Link } from 'react-scroll';


export default function FeatureProduct() {
  return (
    <div id='/FeatureProduct' className='bg-red-100 py-20 px-6 md:px-20'>
      <div className='lg:flex items-center justify-center gap-12'>


        <div className='flex items-center justify-center'>
          <img
            src={nailpolish}
            alt="Nail Polish"
            className='w-[750px] object-contain shadow-2xl rounded-md'
          />
        </div>

        {/* Text Content */}
        <div className=' text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl font-bold text-red-300 mb-6 textshadow'>
            Shine With Every Stroke
          </h2>
          <p className='text-xl md:text-2xl text-gray-600 my-6 max-w-md'>
            Explore our luxurious range of nail colors designed for bold, beautiful expressions.
          </p>
          <Link to='/Contact' smooth={true} duration={1000}>
            <button className="bg-red-300 text-white textshadow px-8 py-3 rounded-full hover:bg-red-400 transition-all">
              Shop Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
} 