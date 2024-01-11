import React from 'react'
import { HeroParallax } from '../components'
import { ProjectsData } from '../constants'
const ParallaxWork = () => {
  return (
    <section className=' flex flex-col items-center bg-primary'>
      <div className='text-primary max-container h-96  z-30 absolute lg:px-16 md:px-10 px-6 flex sm:flex-row flex-col sm:gap-10 md:gap-20 lg:gap-40 sm:justify-between  items-center   '>

        <h1 className='font-display italic text-[64px] lg:text-[120px]   '>
          Work
        </h1>

        <h1 className='  h-fit font-montserrat font-light leadinng-normal sm:text-sm lg:text-lg sm:text-right text-center lg:pr-20 pr-6  sm:border-r-2  sm:border-primary'>
          Crafting unique digital experiences as a Web Designer and Developer,
          I also excel in videography and video editing.
          Let's create something extraordinary together
        </h1>

      </div>
        <div className=' relative top-0 z-0 bg-black pb-10'>
        <HeroParallax projects={ProjectsData} />
        </div>
      
      </section>

  )
}

export default ParallaxWork