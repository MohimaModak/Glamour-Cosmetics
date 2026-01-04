import React from 'react'
import Author from "../../../../src/Gallery/Author.jpg"
import { Link } from 'react-scroll';


export default function Nailpolish() {
  return (
    <div id='/Nailpolish' className='bg-gradient-to-tr from-[#7a6908] via-[#6b4a03] to-neutral-950 py-20 px-6 md:px-20'>
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
          <h2 className='text-4xl md:text-5xl font-bold text-neutral-100 mb-6 textshadow'>
            Billy Caputo
            <br />
            <p className='text-xl md:text-2xl text-neutral-200 mt-2'>(Psychic & Relationship Guide)</p>
          </h2>
          <p className='text-xl md:text-2xl text-neutral-200 my-6 max-w-md'>
            Billy Caputo is a psychic and relationship guide with years of experience helping people gain clarity in love and relationships. Through intuitive insight and practical guidance, Billy helps readers understand their emotional paths and find meaningful connections.

          </p>
          <Link to='/Contact' smooth={true} duration={1000}>
            <button className="bg-neutral-100 text-neutral-800 textshadow text-xl font-semibold px-10 py-3 rounded-full hover:bg-neutral-800 hover:text-neutral-100 transition-all">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
} 