import React from 'react'
import { Myimage, Myimage_small } from '../assets/images'
import {Button} from '../components'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import TextTransition, { presets } from 'react-text-transition';
import { HiArrowSmallDown } from "react-icons/hi2";
import {AnimatePresence, motion, useIsPresent, useAnimation} from 'framer-motion'
import { useEffect, useState, useRef } from 'react';
import { resumeLinks } from '../constants';
import { HiOutlineX } from "react-icons/hi";
const TEXTS = ["Software Engineer", "UI/UX Designer", "Video-Editor"];

const Hero = () => {

  const [text] = useTypewriter({
    words: ["Software Engineer", "UI/UX Designer", "Video -Editor"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1600,
  
  })

  const [index, setIndex] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
const menuRef = useRef();

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const menuAnimation = useAnimation();

// Trigger animations based on isMenuOpen
const animateMenu = async () => {
  if (isMenuOpen) {
    await menuAnimation.start({
      opacity: '100%',
      transition: { duration: 0.2, ease: 'circOut', delay: 0 },
    });
  } else {
    await menuAnimation.start({
      opacity: '0%',
      transition: { duration: 0.2, ease: 'circIn', delay: 0 },
    });
  }
};

  // Call animateMenu whenever isMenuOpen changes
  useEffect(() => {
    animateMenu();
  }, [isMenuOpen]);


const handleClickOutside = (event) => {
  if (menuRef.current && !menuRef.current.contains(event.target)) {
    setIsMenuOpen(false);
  }
};

const isPresent = useIsPresent();

  return (
    <AnimatePresence mode='wait'>
    <motion.div className='max-container h-screen w-full  flex flex-row max-sm:flex-col items-center justify-between max-sm:justify-center  lg:pl-16 md:pl-10 pl-6 max-sm:p-0  '>
      
        
       {isMenuOpen &&  <motion.div 
        ref={menuRef}
        initial={{ opacity: '0%' }}
        animate={menuAnimation}
        style={{ opacity: isPresent ? 1 : 0 }}
        className='absolute z-20  w-screen h-screen left-0 top-0 transform   flex items-center justify-center backdrop-blur-sm   bg-black bg-opacity-40'>
          <div className=' bg-primary rounded-lg flex flex-col   gap-6 lg:px-10 px-6 pb-10 pt-6 shadow-xl'>
            

          <button
                className='hover:scale-110 self-end '
                onClick={toggleMenu}
              >
                <HiOutlineX size={28} color='#b7404b' />
              </button>
            {resumeLinks.map((item, index) => (
              <a href={item.link} target='_blank' 
              key={index}
              onClick={toggleMenu}
              rel='noreferrer' 
              className='font-montserrat  text-secondary max-sm:text-lg text-xl hover:text-accent hover:underline transition-all ease-in-out '>{item.label}</a>
            ))}



          </div>
        </motion.div>}
      
            <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration:4, ease: [0.22, 1, 0.36, 1]}}
      className='h-full w-full flex flex-col justify-between max-sm:items-center  pr-6    transition-all ease-in-out delay-100 max-sm:z-10  max-sm:px-6 '>

        <div className='my-auto flex flex-col gap-2 max-sm:items-center max-sm:gap-2'>
        <h2 className='font-montserrat  lg:text-xl sm:text-sm max-sm:text-xs max-sm:text-center text-secondary max-sm:text-primary font-normal leading-normal '>
                  Welcome To My Portfolio, I’m A
                </h2>
                {/*text-[12vw] xl:text-[150px] lg:text-[120px] md:text-[100px] sm:text-[70px]  xl:leading-[130px]  lg:leading-[100px]  md:leading-[80px]  sm:leading-[60px]  max-sm:text-[60px] max-sm:leading-[48px] */}
                <div className='max-xl:h-[20vw] h-72 max-sm:h-32 mb-4 max-sm:w-80 '> 
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
                

                <div onClick={toggleMenu} >
                <Button
                
                width={'w-max'}
                  label='Resume'
                  bgColor={'bg-primary'}
                  textColor={'text-secondary'}
                  iconReact={<HiArrowSmallDown size={24} />}
                /> 
                </div>
        </div>

  
       


      </motion.div>

      <motion.div 
      initial={{translateX: 1000}}
      animate={{translateX: 0}}
      transition={{duration:2, ease: [0.22, 1, 0.36, 1]}}
      className='bg-[#b03e49] h-screen overflow-hidden  flex  xl:w-[1100px] lg:w-[800px] sm:w-[600px]  max-sm:w-screen  max-sm:z-0 max-sm:absolute  max-sm:brightness-75 ' >

        <img className='sm:object-cover object-left w-full   max-lg:hidden '
        src={Myimage}/>

        <img className='sm:object-cover w-full object-bottom sm:object-left lg:hidden  max-sm:object-cover   '
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
    </AnimatePresence>
  )
}

export default Hero