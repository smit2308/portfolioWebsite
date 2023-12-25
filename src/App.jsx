import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home, Projects, Connect} from "./root/pages"
import RootLayout  from "./root/RootLayout"
import Nav from "./components/Nav"

export default function App() {
  return (
    <main className="  flex flex-col  max-container ">
      
        <Nav />
        
      
        <div className=" "> 
        <Routes>

          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/connect" element={<Connect />} />

           
          </Route>

        </Routes>

        </div>
    </main>
  )
}