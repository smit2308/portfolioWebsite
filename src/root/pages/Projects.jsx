import React, { useEffect } from 'react'
import { ProjectsData } from '../../constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {

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
    <section className='w-full  max-container flex flex-col items-center  gap-20 lg:px-16 md:px-10 px-6 my-32 '>

      <div className='w-full flex sm:flex-row flex-col   items-center   '>



        <div className=' sm:w-max  lg:gap-10 gap-4 max-sm:items-center  flex sm:flex-row 
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


      </div>



      {/* <a href={project.demoLink!= "blank" ? project.demoLink : "/home"} target='_blank' className='w-max h-max self-center mx-auto' > */}

      <div className='w-full  grid lg:grid-cols-3 grid-cols-2 sm:gap-y-16 gap-y-8 '>
        {
          projects.map((project) => (

            <Link target='_blank' to={`/projects/${project.title}`} state={{ id: project.title }} >

              <img src={project.thumbnail} alt={project.title} className=' xl:w-[340px] sm:w-[270px] xs:w-[200px] w-[140px]  rounded-xl 
                      shadow-image2 place-self-center hover:scale-105 hover:shadow-2xl transition-all ease-in-out mx-auto '

                onClick={() => localStorage.setItem('projectData', JSON.stringify(project))}
              />
            </Link>

          ))
        }
      </div>
    </section>
  )
}

export default Projects