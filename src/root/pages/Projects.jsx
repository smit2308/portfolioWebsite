import React, { useEffect } from 'react'
import { ProjectsData } from '../../constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
    <section className='w-full lg:min-h-screen min-h-[540px] max-container flex flex-col max-sm:items-center   lg:gap-20 gap-10  '>

     



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

        {/* <div className=  ' w-full  max-w-sm  flex flex-1 items-center max-sm:flex-col gap-8 p-2  border-b-2  border-slate-400 '>
        <input 
        type='text'
        placeholder='Search by projects, skills, etc'
        className='text-lg h-10 focus-visible:outline-none w-full bg-transparent' 
        value={searchTerm}
        
        onChange={Searchproducts}
      
        />

      

   


      </div>



      {/* <a href={project.demoLink!= "blank" ? project.demoLink : "/home"} target='_blank' className='w-max h-max self-center mx-auto' > */}
    {/* grid lg:grid-cols-3 grid-cols-2 sm:gap-y-16 gap-y-8  */}
      <div className='w-full lg:flex lg:flex-wrap lg:gap-10 lg:justify-between  max-lg:grid  max-lg:grid-cols-2 sm:gap-y-16 gap-y-8 gap-x-6  '>
      <AnimatePresence   mode="wait">
        {users.map((project, index ) => (
          <motion.div
            key={project.title} // Don't forget to add a unique key for each item
            className='w-max max-lg:mx-auto relative group rounded-lg  bg-black justify-center items-center overflow-hidden shadow-image2 '
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: ( index)*0.15  }}
          >
            <Link  to={`/projects/${project.title}`} state={{ id: project.title }} scroll={false} className='flex flex-col gap-10 justify-center items-center'>

              <img src={project.thumbnail} alt={project.title} className=' xl:w-[340px] sm:w-[270px] xs:w-[200px] w-[150px]  
                       place-self-center  transition-all ease-in-out group-hover:opacity-20  duration-500 group-hover:rotate-6 group-hover:scale-125 '

              
              />

 
              <div className='hidden text-semibold font-montserrat  absolute top-0 left-0 w-full h-full group-hover:flex  text-primary text-xl justify-center items-center gap-4 p-4  transition-all ease-in-out duration-500'>
                Open
    
                <HiArrowRight size={32} color='white' />
       
              </div>

              



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