import React from "react"
import {Routes, Route, useLocation} from "react-router-dom"
import {Hero, Work, Connect} from "./sections"
import Nav from "./components/Nav"
import Home from "./root/pages/Home"
import  ProjectDetailsScroll  from "./root/pages/ProjectDetailsScroll"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { useIsPresent } from "framer-motion"

export default function App() {

  const location = useLocation();

const isPresent = useIsPresent();

  return (

    <main className="flex flex-col items-center w-full h-full ">

<motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut"} }}
        exit={{ scaleX: 0, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className=" top-0 left-0 right-0 bottom-0 bg-black z-50 text-center text-5xl"
      >

        </motion.div>
      
      <Nav />
     
        
        {/*  bg-[linear-gradient(to_right,_#F1F1F1_60%,_#b03e49_40%)] */}
       
        <div className="w-full h-full">
        <AnimatePresence  mode="wait"        onExitComplete={() => {
            if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "instant" });
            }
        }}>
          <Routes location={location} key={location.pathname}  >
           
          
           
              <Route index element={<Home />} />
              
              {/* <Route path="/projects" element={<Projects />} /> */}
              {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetailsScroll />} />
              {/* <Route path="/connect" element= {<ProjectsParallax />}/> */}
            
          </Routes>
       
          </AnimatePresence>
       
        </div>
       
   
    </main>
  )
}