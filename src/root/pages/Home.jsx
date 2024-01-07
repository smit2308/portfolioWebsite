import React from "react"
import {Routes, Route} from "react-router-dom"
import {Hero, Work, Connect, About, StickyScroll} from "../../sections"
import Nav from "../../components/Nav"

export default function Home() {
  return (
    <main className="  flex flex-col gap-10 sm:gap-20 lg:gap-40 items-center bg-primary pb-32">
      
        
        {/*  bg-[linear-gradient(to_right,_#F1F1F1_60%,_#b03e49_40%)] */}
        <div className=" w-full bg-[linear-gradient(to_right,_#F1F1F1_70%,_#b03e49_40%)]"> 
        <Hero />
        </div>
        
        <div className="max-lg:hidden">
         <StickyScroll />
        </div>
        
        <div className="lg:hidden">
          <Work />
          </div>
  
        <About />

        <div id="connect">
        <Connect />
        </div>
       
    </main>
  )
}