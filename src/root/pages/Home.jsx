import React from "react"
import {Routes, Route} from "react-router-dom"
import {Hero, Work, Connect, About, StickyScroll, ParallaxWork} from "../../sections"
import Nav from "../../components/Nav"
import Transition from "../../Transition"
import {motion} from "framer-motion"
import { useState, useEffect } from "react"
import { useIsPresent } from "framer-motion"
import { Loader } from "../../components"
import {TextGenerateEffect} from "../../components"
const  Home =() => {

  const gradientAnimation = {
    background: [
      'linear-gradient(to right, #F1F1F1 100%, #b03e49 0%)',
      'linear-gradient(to right, #F1F1F1 70%, #b03e49 40%)'
    ],
    
  };

  const isPresent = useIsPresent();

  return (
    // gap-10 sm:gap-20 lg:gap-40
   
    <div
    //  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}

     className="  flex flex-col    items-center bg-primary pb-32 overflow-hidden">



       

        
    {/* bg-[linear-gradient(to_right,_#F1F1F1_70%,_#b03e49_40%)] */}
    <motion.div
    id="hero"
    initial={{ background: 'linear-gradient(to right, #F1F1F1 100%, #b03e49 0%)' }}
    animate={gradientAnimation}
    transition={{duration:3, ease: [0.22, 1, 0.36, 1]}}
         className={` w-full border-b-2 border-secondary `}
        > 
        <Hero />
        </motion.div>


        <div id="projects" className="w-full border-b-2 border-secondary">
          <Work />
        </div>
          
         <motion.div id="about" className="w-full border-b-2 border-secondary">
          <About />
          </motion.div>

        <div id="connect" className="w-full border-b-2 border-secondary">
          <Connect />
        </div>

     
    
    <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut", delay: 0 } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn", } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-accent z-50 text-center text-5xl"
      />
    </div>
  
  )
}

export default Home;