import React from 'react'
import { assets } from '../assets/assets'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const Header = () => {
    return (
        <div>
            
            <Carousel class="px-2 py-4" responsive={responsive} >
                <div class='px-1'>
                <img class="h-48 w-96 object-fill ..." src="https://iili.io/3qbGLfj.md.png" />
                </div>
                <div class=''>
                <img class="h-48 w-96 object-fill ..." src="https://iili.io/3qDN0dJ.md.png" />
                </div>
                <div class="px-1">
                <img class="h-48 w-96 object-fill ..." src="https://iili.io/3qbEEu9.md.png" />
                </div>
               
         
            </Carousel>
            
        <div className='py-4 px-4 flex flex-col md:flex-row flex-wrap bg-orange-50 rounded-lg px-2 md:px-10 lg:px-20 '>
             
            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4  m-auto md:py-[5vw] md:mb-[-5px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white-800 font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Choose From Most Experts Pages
              
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-black text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Find the Right Mentor, Get the Right Advice <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-yellow-600 px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book appointment 
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src='https://iili.io/3ujFkKJ.png' alt="" />
            </div>
        </div>
        </div>
    )
}

export default Header