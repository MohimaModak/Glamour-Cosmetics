import React from 'react'
import Author from "../../../../src/Gallery/Author.jpg"
import { Link } from 'react-scroll';


export default function Nailpolish() {
  return (
    // <div id='/Nailpolish' className='bg-gradient-to-tr from-[#7a6908] via-[#6b4a03] to-neutral-950 py-20 px-6 md:px-20'>
    <div id='/Nailpolish' className='bg-gradient-to-bl to-neutral-900 from-[#7e1212] via-[#530404] py-20 px-6 md:px-20'>
      <div className='lg:flex items-center justify-center gap-12'>


        <div className='flex items-center justify-center'>
          <img
            src={Author}
            alt="Nail Polish"
            className='w-[500px] object-contain shadow-2xl rounded-md'
          />
        </div>

        {/* Text Content */}
        <div className=' text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl font-bold text-neutral-100 mb-6 textshadow pt-6'>
            Billy Caputo
            <br />
            <p className='text-xl md:text-2xl text-neutral-200 mt-2'>(Psychic & Relationship Guide)</p>
          </h2>
          <p className='text-xl md:text-2xl text-neutral-200 my-6 max-w-md'>
            Billy Caputo is a psychic and relationship guide with years of experience helping people gain clarity in love and relationships. Through intuitive insight and practical guidance, Billy helps readers understand their emotional paths and find meaningful connections.

          </p>
          <Link to='/Contact' smooth={true} duration={1000}>
            <button className="bg-red-500 text-neutral-100 px-8 py-3 lg:px-10 lg:py-4 rounded-full text-lg lg:text-xl font-semibold
           hover:bg-red-100 hover:text-black transition-all shadow-lg">
            Contact Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
} 