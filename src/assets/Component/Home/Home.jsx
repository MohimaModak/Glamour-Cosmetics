import React from 'react'
import background from "../../../../src/Gallery/cover3.jpg"
import "./Home.css"
// import FeatureProduct from '../FeatureProduct/FeatureProduct'
import Products from '../Products/Products'
// import Makeup from '../Makeup/Makeup'
// import Mascara from '../mascara/mascara'
import Nailpolish from '../Nailpolish/Nailpolish'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

export default function Home() {
  return (
    <div>
      <div id='/' className='relative'>
        {/* Background Image */}
        <div className='relative'>
          <img src={background} className='w-full h-screen object-cover' alt="Background" />
        </div>

        {/* Text Section with Backdrop Blur */}
        <div className='absolute inset-0 flex justify-center items-center text-neutral-200 mx-5'>
          <div className='bg-white/10 backdrop-blur-3xl p-8 rounded-lg text-center shadow-md'>
            <h1 className='text-4xl md:text-8xl font-bold textshadow'>How To Find Love</h1>
            <p className='text-xl md:text-2xl mt-4 text-neutral-100'>A Master's Guide To Finding Your Soulmate. Guaranteed! <br />and include somewhere Psychic Billy Caputo <br /><p className='font-bold mt-4'>$4.99 USD</p></p>
          </div>
        </div>
      </div>
      {/* <FeatureProduct></FeatureProduct> */}
      <Products></Products>
      <Nailpolish></Nailpolish>
      {/* <Mascara></Mascara> */}
      {/* <Makeup></Makeup> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}
