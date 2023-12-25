import React from 'react'
import { Myimage, Myimage_small } from '../../assets/images'
import Button from '../../components/Button'

const Home = () => {
  return (
    <section className='h-screen w-full flex flex-row max-sm:flex-col items-center justify-between max-sm:justify-center lg:pl-10 sm:pl-8 max-sm:p-0'>
      
      <div className=' flex flex-col gap-2 max-sm:items-center xl:pr-10 pr-6 sm:w-1/2  sm:-mt-10 overflow-hidden transition-all ease-in-out delay-100 max-sm:z-10  max-sm:px-6 '>

        <h1 className='lg:text-xl sm:text-lg max-sm:text-sm max-sm:text-center text-secondary max-sm:text-primary font-light leading-normal '>
          Welcome To My Portfolio
        </h1>

        <h2 className='2xl:text-7xl xl:text-6xl lg:text-5xl sm:text-4xl max-sm:text-3xl max-sm:text-center  text-secondary max-sm:text-primary font-medium leading-normal'>
          I’m A Software Engineer
        </h2>

        <p className='lg:text-lg sm:text-sm max-sm:text-xs max-sm:text-center text-secondary max-sm:text-primary font-light leading-normal md:mb-10 mb-6'>
          Crafting unique digital experiences as a Web Designer and Developer, I also excel in videography and video editing.
           Let's create something extraordinary together
        </p>

        <Button
          label='Resume'
         /> 

      </div>

      <div className='bg-[#b03e49] h-screen flex xl:w-[600px] lg:w-[500px] md:w-[400px] sm:w-1/2 max-sm:w-screen  overflow-hidden  max-sm:z-0 max-sm:absolute max-sm:top-0 max-sm:left-0 ' >

        <img className='sm:object-cover w-full  z-10 max-lg:hidden   '
        src={Myimage}/>

        <img className='sm:object-cover w-full object-left  z-10 lg:hidden  max-sm:object-none max-sm:object-left-bottom   max-sm:brightness-75   '
        src={Myimage_small}/>

        {/* <div className='absolute bg-[#b03e49] w-full h-screen z-0 flex items-center  p-10 ' >
          <div className='w-2/5 bg-gray-200'>
          </div>          
          <h className='text-4xl rotate-90 text-primary'>
            Lets Work Together
          </h>
        </div> */}

      </div>

      

    </section>
  )
}

export default Home