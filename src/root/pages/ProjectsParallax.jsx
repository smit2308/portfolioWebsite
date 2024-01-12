import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ProjectsData } from '../../constants'
import { Link } from 'react-router-dom'
import { ScrollParallax } from '../../components'

const ProjectsParallax = () => {

    const [activeButton, setActiveButton] = useState('coding');

  const [projects, setProjects] = useState(ProjectsData['codingProjects']);

  const changeSection = (section) => {
    if (section === 'coding') {
      setProjects(ProjectsData['codingProjects']);
    } else if (section === 'ui') {
      setProjects(ProjectsData['uiProjects']);
    } else if (section === 'video') {
      setProjects(ProjectsData['videoProjects']);
    }

    setActiveButton(section);
  }

  const [users, setUsers] = useState(projects);


  return (
     <section className='w-full  max-container flex flex-col   gap-20   '>


      <div className='w-full'>
        
     



<div className='sticky top-60 left-0 rotate-90 sm:w-max  lg:gap-10 gap-4 max-sm:items-center  flex sm:flex-row 
    font-montserrat text-secondary text-sm sm:text-lg lg:text-xl  '>

  <button id='coding' className={` hover:text-accent ${activeButton === "coding" ? "text-accent border-b-2 border-accent" : ""}`}
    onClick={() => changeSection("coding")}>
    Coding
  </button>

  <button id="ui" className={` hover:text-accent ${activeButton === "ui" ? "text-accent border-b-2 border-accent" : ""}`}
    onClick={() => changeSection("ui")}>
    UI/UX
  </button>

  <button id='video' className={` hover:text-accent w-max ${activeButton === "video" ? "text-accent border-b-2 border-accent" : ""}`}
    onClick={() => changeSection("video")}>
    Video Editing
  </button>

</div>





            <ScrollParallax projects={projects} />
        </div>
      </section>

  )
}

export default ProjectsParallax