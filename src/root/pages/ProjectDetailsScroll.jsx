"use client";
import React from "react";
import { ProjectsData } from "../../constants";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { DetailsScroll } from "../../components";
import { useEffect } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Button } from "../../components";
import Transition from "../../Transition";
import {motion} from 'framer-motion'
import { AnimatePresence, useIsPresent } from "framer-motion";
import { Loader } from "../../components";
import {TextGenerateEffect} from "../../components";
import { LoadingMessages } from "../../constants";



const ProjectDetailsScroll = (props) => {

    const { id} = useParams();
    const [proj, setproj] = useState();
    const isPresent = useIsPresent();

    useEffect(() => {
      const findProjectInArray = (array, title) => array.find(proj => proj.title === title);

      const project = findProjectInArray(ProjectsData['codingProjects'], id) ||
                      findProjectInArray(ProjectsData['uiProjects'], id) ||
                      findProjectInArray(ProjectsData['videoProjects'], id);
      
      setproj(project);
    }
    , [id])
   
    

  
    // const [scrollPosition, setScrollPosition] = useState(0);


  
  return (
    <>
    {proj != null ?
      (
    
    <motion.div 
    // initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5, ease: [0.22, 1, 0.36, 1]}}
    initial={{translateY: "100%"}}
    animate={{translateY: "0%"}}
    transition={{duration: 2, ease: 'easeOut'}}
    exit={{opacity:1}}
    className="flex flex-col  w-full overflow-hidden max-container">
      

            
            <>
            <DetailsScroll
            message={LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)]}
            users={proj}
            titleComponent={
              <>
                <h1 className="text-3xl font-display font-semibold text-secondary ">
                  Project <br />
                  <span className="text-4xl md:text-[6rem] sm:text-[4rem] font-bold  leading-none">
                  {proj.title}
                  </span>
                </h1>
              </>
            }
          />

            <div className='flex flex-col small-container gap-8 items-center text-center mt-32'>
     
     
          
        <div className='flex flex-row gap-4'>
          
          {proj.demoLink !== 'Unavailable' ? (
            <a href={proj.demoLink} target='_blank'>
            <Button label='Visit' 
              bgColor={'bg-none'} 
              iconReact={<HiArrowTopRightOnSquare />}/>
            </a>
          )
          : ('')}

        {proj.repoLink !== 'Unavailable' ? (
           <a href={proj.repoLink} target='_blank'>
                      <Button label='Github' 
                      bgColor={'bg-secondary'}
                      textColor={'text-primary'}
                      customHover={'hover:bg-green-800 '}
                      iconReact={<HiArrowTopRightOnSquare />} />
                      </a>
          
          )
          : ('')}
          



        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='sm:text-xl max-sm:text-lg font-medium text-secondary'>Description</h2>
          <p className='text-secondary sm:text-lg max-sm:text-sm font-light'>{proj.description}</p>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='sm:text-xl max-sm:text-lg font-medium text-secondary'>Skills</h2>
          <div className='flex flex-row gap-4'>
            {
              proj.skills.map((skill) => (
                <img key={skill.name} src={skill.logo} alt={skill.name} className='w-[48px] max-sm:w-[24px]' />
              ))
            } 
          </div>
        </div>
 
      </div>




     
        </>



      

    </motion.div>
    ):(<div>Loading</div>)
  }


<motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-accent z-50 text-4xl font-display  text-center text-primary flex justify-center items-center"
      >
                 {/* <motion.div
          initial={{opacity: '0%'}}
          animate={{opacity: '100%', transition: {duration: 0.5, ease: "circOut" }}}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}>
            I hope you enjoyed it
          </motion.div>

        
        <TextGenerateEffect words='I Hope You Enjoyed It' className='font-montserrat font-semibold text-4xl text-primary p-8 '/> */}
      </motion.div>

        
  </>
  );
}

export default ProjectDetailsScroll;