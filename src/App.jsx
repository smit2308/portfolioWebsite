import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home, Projects, Connect} from "./sections"
import Nav from "./components/Nav"

export default function App() {
  return (
    <main className="  flex flex-col gap-40 items-center bg-primary ">
      
        <Nav />
        {/*  bg-[linear-gradient(to_right,_#F1F1F1_60%,_#b03e49_40%)] */}
        <div className=" w-full bg-[linear-gradient(to_right,_#F1F1F1_70%,_#b03e49_40%)]"> 
        <Home />
        </div>
        

        <Projects />
        <Connect />
    </main>
  )
}