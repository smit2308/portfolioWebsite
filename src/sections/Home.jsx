import React from 'react'
import { Myimage, Myimage_small } from '../assets/images'
import Button from '../components/Button'

const Home = () => {
  return (
    <section className='max-container h-screen w-full flex flex-row max-sm:flex-col items-center justify-between max-sm:justify-center  md:pl-10 pl-6 max-sm:p-0 '>
      
      <div className='h-screen w-full flex flex-col justify-between max-sm:items-center  pr-6   overflow-hidden transition-all ease-in-out delay-100 max-sm:z-10  max-sm:px-6'>

        <div className=' my-auto flex flex-col gap-2 max-sm:items-center max-sm:gap-2'>
        <h1 className='font-montserrat italic lg:text-xl sm:text-sm max-sm:text-xs max-sm:text-center text-secondary max-sm:text-primary font-light leading-normal '>
                  Welcome To My Portfolio, I’m A 
                </h1>

                <h2 className='font-display  xl:text-[150px] xl:leading-[130px] lg:text-[120px]  lg:leading-[100px] md:text-[100px] md:leading-[80px] sm:text-[70px] sm:leading-[60px] text-[60px] leading-[48px] 
                max-sm:text-center  text-secondary max-sm:text-primary font-medium mb-4 '>
                  Software Engineer
                </h2>


                <Button
                  label='Resume'
                  bgColor={'bg-none'}
                  textColor={'text-secondary'}
                /> 
        </div>

    
        
        <p className='w-full border-l-2  sm:border-secondary pb-4 pr-1 sm:px-10 max-sm:pl-4 max-sm:mb-10 lg:text-lg sm:text-sm max-sm:text-xs  text-secondary max-sm:text-primary font-light leading-normal  '>
                  Crafting unique digital experiences as a Web Designer and Developer, I also excel in videography and video editing.
                  Let's create something extraordinary together
                </p>
       


      </div>

      <div className='bg-[#b03e49] h-screen flex  xl:w-[1100px] lg:w-[800px] sm:w-[600px]  max-sm:w-screen  overflow-hidden  max-sm:z-0 max-sm:absolute  max-sm:brightness-75  ' >

        <img className='sm:object-cover w-full  z-10 max-lg:hidden'
        src={Myimage}/>

        <img className='sm:object-cover w-full object-left  z-10 lg:hidden  max-sm:object-cover   '
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