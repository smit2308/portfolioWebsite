import React from 'react'
import { Button } from '../components'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'
const Connect = () => {


    
  return (
    <section className='w-full h-max  flex md:flex-row flex-col justify-center items-center  lg:px-16 md:px-10 px-6 max-container lg:py-32 py-20 lg:gap-20 gap-10' >
      <div className='flex flex-col text-primary  leading-none max-w-sm'>
      
        <h1 className='font-thin font-montserrat text-[54px]  sm:text-[80px] lg:text-[100px]'   >
          Get in 
        </h1>
        <h2 className='font-display italic text-[64px] sm:text-[100px] lg:text-[120px] ' >Touch</h2>
     
      </div>
        <div className=' h-full items-start flex flex-row gap-20 '>

          <div className=' h-full flex flex-col gap-10  '>
            <h1 className='text-primary max-md:text-center lg:text-2xl text-xl'>sshewale@usc.edu</h1>
            <div className='flex flex-row gap-4'>

              {socialLinks.map((item) => (
                <Link to={item.url} key={item.label} className='hover:text-accent transition-all ease-in-out'>
                  <img src={item.icon} alt={item.label} className='lg:w-16 w-10' />
                  
                </Link>
              ))}
              </div>
          </div>


        </div>




    </section>
  )
}

export default Connect