import React from 'react'
import { Myimage, Myimage_small } from '../../assets/images'
import Button from '../../components/Button'

const Home = () => {
  return (
    <section className='h-screen w-full flex flex-row items-center justify-between lg:pl-10 sm:pl-8   '>
      
      <div className=' flex flex-col gap-2 xl:pr-10 pr-6 w-1/2 z-1 -mt-10'>

        <h1 className='lg:text-xl sm:text-lg max-sm:text-sm text-secondary font-light leading-normal '>
          Welcome To My Portfolio
        </h1>

        <h2 className='2xl:text-7xl xl:text-6xl   lg:text-5xl sm:text-4xl max-sm:text-2xl   text-secondary font-medium leading-normal'>
          I’m A Software Engineer
        </h2>

        <p className='lg:text-lg sm:text-sm max-sm:text-xs text-secondary font-light leading-normal md:mb-10 mb-6'>
          Crafting unique digital experiences as a Web Designer and Developer, I also excel in videography and video editing. Let's create something extraordinary together
        </p>

        <Button
          label='Resume'
         /> 

      </div>

      <div className='bg-[#b03e49] h-screen flex xl:w-[600px] lg:w-[500px] md:w-[400px] w-1/2   overflow-hidden  ' >

        <img className='object-cover w-full  z-10 max-lg:hidden '
        src={Myimage}/>

        <img className='object-cover w-full object-left  z-10 lg:hidden  '
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