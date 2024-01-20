import React from 'react'
import { Myimage, Myimage_small } from '../assets/images'
import {Button} from '../components'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import TextTransition, { presets } from 'react-text-transition';
import { HiArrowSmallDown } from "react-icons/hi2";
import {motion} from 'framer-motion'
import { useEffect } from 'react';
const TEXTS = ["Software Engineer", "UI/UX Designer", "Video-Editor"];

const Hero = () => {

  const [text] = useTypewriter({
    words: ["Software Engineer", "UI/UX Designer", "Video -Editor"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1600,
  
  })

  const [index, setIndex] = React.useState(0);



  return (
    <motion.div className='max-container h-screen w-full  flex flex-row max-sm:flex-col items-center justify-between max-sm:justify-center  lg:pl-16 md:pl-10 pl-6 max-sm:p-0  '>
      
            <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration:4, ease: [0.22, 1, 0.36, 1]}}
      className='h-full w-full flex flex-col justify-between max-sm:items-center  pr-6   overflow-hidden transition-all ease-in-out delay-100 max-sm:z-10  max-sm:px-6 '>

        <div className='my-auto flex flex-col gap-2 max-sm:items-center max-sm:gap-2'>
        <h2 className='font-montserrat  lg:text-xl sm:text-sm max-sm:text-xs max-sm:text-center text-secondary max-sm:text-primary font-light leading-normal '>
                  Welcome To My Portfolio, I’m A
                </h2>
                {/*text-[12vw] xl:text-[150px] lg:text-[120px] md:text-[100px] sm:text-[70px]  xl:leading-[130px]  lg:leading-[100px]  md:leading-[80px]  sm:leading-[60px]  max-sm:text-[60px] max-sm:leading-[48px] */}
                <div className='max-xl:h-[20vw] h-64 max-sm:h-32 mb-4'> 
                <h1 className='pb-6 h-full font-display italic  xl:text-[150px] xl:leading-[130px] max-xl:text-[12vw] max-xl:leading-[10vw] max-sm:text-[72px] max-sm:leading-[56px] 
                max-sm:text-center  text-secondary max-sm:text-primary  '>
                  {/* Software Engineer */}
                  {text}
                  {/* <span><Cursor /></span> */}
                  {/* <TextTransition 
                    translateValue='100' 
                    direction='up' 
                    springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition> */}
                 
                </h1>
                </div>
                


                <Button
                width={'w-max'}
                  label='Resume'
                  bgColor={'bg-primary'}
                  textColor={'text-secondary'}
                  iconReact={<HiArrowSmallDown size={24} />}
                /> 
        </div>

  
       


      </motion.div>

      <motion.div 
      initial={{translateX: 1000}}
      animate={{translateX: 0}}
      transition={{duration:2, ease: [0.22, 1, 0.36, 1]}}
      className='bg-[#b03e49] h-screen overflow-hidden  flex  xl:w-[1100px] lg:w-[800px] sm:w-[600px]  max-sm:w-screen  max-sm:z-0 max-sm:absolute  max-sm:brightness-75 ' >

        <img className='sm:object-cover object-left-top  w-full   max-lg:hidden '
        src={Myimage}/>

        <img className='sm:object-cover w-full object-left-top lg:hidden  max-sm:object-cover   '
        src={Myimage_small}/>

        {/* <div className='absolute bg-[#b03e49] w-full h-screen z-0 flex items-center  p-10' >
          <div className='w-2/5 bg-gray-200'>
          </div>          
          <h className='text-4xl rotate-90 text-primary'>
            Lets Work Together
          </h>
        </div> */}

      </motion.div>

      

    </motion.div>
  )
}

export default Hero