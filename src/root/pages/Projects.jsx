import React, { useEffect } from 'react'
import { codingProjects, uiProjects, videoProjects } from '../../constants'
import { useState } from 'react'

const Projects = () => {

  const [activeButton, setActiveButton] = useState('coding');

  const [projects, setProjects] = useState(codingProjects);

  const changeSection = (section) => {
    if (section === 'coding') {
      setProjects(codingProjects);
    } else if (section === 'ui') {
      setProjects(uiProjects);
    } else if (section === 'video') {
      setProjects(videoProjects);
    }

    setActiveButton(section);
  }


  
  return (
    <section className='w-full  max-container flex flex-col  gap-10 lg:px-16 md:px-10 px-6 my-20 '>

<div className='w-full flex sm:flex-row flex-col  sm:justify-evenly  items-center   '>

<h1 className='font-display italic text-[80px] lg:text-[120px] leading-0  text-secondary lg:mr-auto '>   
  Projects
</h1>

<div className='sm:w-max  lg:gap-10 gap-4 max-sm:items-center  flex sm:flex-row 
            font-montserrfat text-secondary text-sm sm:text-lg lg:text-2xl  '>
          
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

 
</div>





          <div className='w-full  grid lg:grid-cols-3 grid-cols-2 gap-y-16'>
            {
              projects.map((project) => (
                <img src={project.thumbnail} alt={project.title} className=' xl:w-[340px] sm:w-[270px] w-[200px]  rounded-xl shadow-image1 place-self-center mx-6' />
              ))
            }
          </div>
    </section>
  )
}

export default Projects