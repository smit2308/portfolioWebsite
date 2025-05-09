import React from "react"
import {Routes, Route, useLocation} from "react-router-dom"
import {Hero, Work, Connect} from "./sections"
import Nav from "./components/Nav"
import Home from "./root/pages/Home"
import  ProjectDetailsScroll  from "./root/pages/ProjectDetailsScroll"
import {motion, useIsPresent, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { SmitLogo } from "./assets/logos"
import { useGoogleAnalytics } from "./components"

export default function App() {

  useGoogleAnalytics();

  const location = useLocation();

const isPresent = useIsPresent();


useEffect(() => {
  // Set scroll position to the top without animation
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Disable automatic scroll restoration using history.replaceState
  history.replaceState(null, null, location.pathname);
}, [location.pathname, history]);


const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }
};


  return (

    <main className="flex flex-col items-center w-full h-full bg-primary ">
{/* 
    <motion.a href="./" className="fixed right-10 bottom-10 w-16 h-16 z-50">
      <img src={SmitLogo} alt="Smit Logo" className="w-full h-full hover:scale-105 transition-all ease-in-out"/>
    </motion.a>
    */}
      <Nav scrollToSection={scrollToSection}/>
     
       
        {/*  bg-[linear-gradient(to_right,_#F1F1F1_60%,_#b03e49_40%)] */}
       
        <div className="w-full h-full">
        <AnimatePresence  mode="wait"       >
          <Routes location={location} key={location.pathname}  >
           
          
           
              <Route index element={<Home />} />
              
              {/* <Route path="/projects" element={<Projects />} /> */}
              {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
              <Route path="/" element={<Home scrollToSection={scrollToSection}/>} />
              <Route path="/projects/:id" element={<ProjectDetailsScroll />} />
              {/* <Route path="/connect" element= {<ProjectsParallax />}/> */}
            
          </Routes>
       
          </AnimatePresence>


       
        </div>

        <div id="connect" className="w-full  bg-[#1f1f1f] lg:mt-40 mt-20">
          <Connect />

        </div>
       
   
    </main>
  )
}