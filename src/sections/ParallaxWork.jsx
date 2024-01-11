import React from 'react'
import { HeroParallax } from '../components'
import { ProjectsData } from '../constants'
const ParallaxWork = () => {
  return (
    <section className=' flex flex-col gap-10  '>
      <div className='max-container lg:px-16 md:px-10 px-6 flex sm:flex-row flex-col sm:gap-10 md:gap-20 lg:gap-40 sm:justify-between  items-center   '>

        <h1 className='font-display italic text-[64px] lg:text-[120px]   text-secondary'>
          Work
        </h1>

        <h1 className='  h-fit font-montserrat font-light leadinng-normal sm:text-sm lg:text-lg sm:text-right text-center lg:pr-20 pr-6 text-secondary  sm:border-r-2  sm:border-secondary'>
          Crafting unique digital experiences as a Web Designer and Developer,
          I also excel in videography and video editing.
          Let's create something extraordinary together
        </h1>

      </div>
        <div className='w-full '>
        <HeroParallax projects={ProjectsData} />
        </div>
      
      </section>

  )
}

export default ParallaxWork