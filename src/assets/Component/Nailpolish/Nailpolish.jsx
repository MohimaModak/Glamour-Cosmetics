import React from 'react'
import demo from "../../../../src/Gallery/demo.png"

export default function Nailpolish() {
  return (
    <div id='/Nailpolish' className="relative bg-red-100 py-20 px-6 md:px-16 lg:px-24 text-center">
      <div className="flex justify-center items-center">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-300 textshadow">
          Nail Polish Collection
        </h2>
        <div className='flex justify-center items-center'>
        <p className="text-lg md:text-xl text-gray-600 my-6 max-w-lg">
          Explore our stunning range of premium nail polishes, designed to give you a flawless finish with every application.
        </p>
        </div>
        <div className="relative">
          <img
            src={demo}
            className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="Nail Polish Collection"
          />
        </div>
      </div>
      </div>
    </div>
  )
}
