import React from "react"
import {Routes, Route} from "react-router-dom"
import {Hero, Work, Connect} from "./sections"
import Nav from "./components/Nav"
import {Home,Projects, ProjectDetails} from "./root/pages"
import RootLayout from "./root/RootLayout"

export default function App() {
  return (
    <main className="flex flex-col items-center  ">
      
        <Nav />
        {/*  bg-[linear-gradient(to_right,_#F1F1F1_60%,_#b03e49_40%)] */}
        
        <div className="w-full">
          <Routes>
           
          
            <Route element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Route>
          </Routes>

       
        </div>
   
    </main>
  )
}