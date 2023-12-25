import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home, Projects, Connect} from "./sections"
import Nav from "./components/Nav"

export default function App() {
  return (
    <main className="  flex flex-col items-center bg-primary ">
      
        <Nav />
        
      
        <Home />

        <Projects />
        <Connect />
    </main>
  )
}