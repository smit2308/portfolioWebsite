"use client";
import React from "react";
import { ProjectsData } from "../../constants";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { DetailsScroll } from "../../components";
import { useEffect } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Button } from "../../components";

const ProjectDetailsScroll = (props) => {

    const { id} = useParams();
    const [proj, setproj] = useState();

    useEffect(() => {
      console.log(id, "id")
      const findProjectInArray = (array, title) => array.find(proj => proj.title === title);

      const project = findProjectInArray(ProjectsData['codingProjects'], id) ||
                      findProjectInArray(ProjectsData['uiProjects'], id) ||
                      findProjectInArray(ProjectsData['videoProjects'], id);
      
      console.log(project, "proj")
      setproj(project);
    }
    , [id])
   

  
    // const [scrollPosition, setScrollPosition] = useState(0);


  
  return (
    <div className="flex flex-col max-container w-full overflow-hidden ">
      
      {proj != null ?
            (
            
            <>
            <DetailsScroll
            users={proj}
            titleComponent={
              <>
                <h1 className="text-3xl font-display font-semibold text-secondary ">
                  Project <br />
                  <span className="text-4xl md:text-[6rem] font-bold  leading-none">
                  {proj.title}
                  </span>
                </h1>
              </>
            }
          />

            {/* <div className='flex flex-col small-container gap-8 items-center text-center my-32'>
     
     
          
        <div className='flex flex-row gap-4'>
          
          {proj.demoLink !== 'Unavailable' ? (
            <a href={proj.demoLink} target='_blank'>
            <Button label='Demo' 
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
                <img src={skill.logo} alt={skill.name} className='w-[48px] max-sm:w-[24px]' />
              ))
            } 
          </div>
        </div>
 
      </div>
 */}





        </>
          ):(<div>Loading</div>)
        }


      

    </div>
  );
}

export default ProjectDetailsScroll;