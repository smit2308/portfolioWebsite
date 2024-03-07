import React, { useEffect } from 'react'
import { ProjectsData } from '../../constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useIsPresent } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
const Projects = () => {

  const [activeButton, setActiveButton] = useState('coding');

  const [projects, setProjects] = useState(ProjectsData['codingProjects']);

  const changeSection = (section) => {
    if (section === 'coding') {
      setUsers(ProjectsData['codingProjects']);
    } else if (section === 'ui') {
      setUsers(ProjectsData['uiProjects']);
    } else if (section === 'video') {
      setUsers(ProjectsData['videoProjects']);
    }

    setActiveButton(section);
  }

  const isPresent = useIsPresent();

  const [users, setUsers] = useState(projects);
  const [searchTerm, setSearchTerm] = useState('');
 
  const Searchproducts = (event) => {
    setSearchTerm(event.target.value);
    let searched = '';

    const filteredProducts = projects.filter((proj) =>(
      searched = proj.title,
      proj.skills.map((skill) => (

        searched += ' ' + skill.name)),
      searched.toLowerCase().includes(event.target.value.toLowerCase()) 

    ));
    setUsers(filteredProducts);
  };


  
  return (
    // lg:px-16 md:px-10 px-6 my-32 
    <section className='w-full h-full  flex flex-col max-lg:items-center max-lg:justify-center    lg:gap-20 gap-10  '>

     



        <div className=' sm:w-max  lg:gap-10 gap-4 max-sm:items-center max-lg:justify-center  flex 
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

    
      <div className='w-full lg:grid lg:grid-cols-3 lg:gap-6  max-lg:gap-4  max-lg:grid  max-lg:grid-cols-2 max-xs:flex-col max-xs:flex  gap-y-8 gap-x-6  '>
      <AnimatePresence   mode="wait">
        {users.map((project, index ) => (
          <motion.div
            key={project.title} // Don't forget to add a unique key for each item
            className=' max-lg:mx-auto relative group rounded-lg   justify-center items-center overflow-hidden shadow-image2 '
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.5, ease: 'circInOut', delay: ( index)*0.1  }}
          >
            <Link  to={`/projects/${project.title}`} state={{ id: project.title }}  className={`flex  
             w-full brightness-90
              transition-all ease-in-out duration-300 ` }>
                {/* md:saturate-[100%] max-md:saturate-100 hover:saturate-80 hover:brightness-75 */}
                  {/*  bg-[${project.bg}] */}


            {/* Change this for thumbnails */}
            {/*  {project.gif != null ? for gifs  */}
            {false? 
            <>
                        <img src={project.gif} alt={project.title} className=' object-top object-cover w-full
                        transition-all ease-in-out  duration-500 group-hover:hidden  '             
               />
               <img src={project.thumbnail} alt={project.title} className='object-top object-cover w-full
               transition-all ease-in-out flex hidden group-hover:block  '

      
      />
      </>

               
                :
                <img src={project.thumbnail} alt={project.title} className='object-top object-cover w-full
                transition-all ease-in-out flex hover:scale-105 duration-500  '

       
       />
            }
  
              

     

 


              



            </Link>
            
       
  
           
            </motion.div>

          ))
        }

</AnimatePresence>
        <div className='w-max max-lg:hidden '>
           
              <div  className=' xl:w-[340px] sm:w-[270px] xs:w-[200px] w-[140px]  rounded-xl 
                      place-self-center  transition-all ease-in-out  '

              
              />
      
            </div>
      </div>
    </section>
  )
}

export default Projects