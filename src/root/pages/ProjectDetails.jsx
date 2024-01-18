import React from 'react'
import { ProjectsData} from '../../constants';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import {Button} from '../../components';
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { ImagesSlider } from '../../components';

const ProjectDetails = (props) => {

    const { id, sec} = useParams();

    const Setter = () => {
      // Fetching product details
      const projectTitle = id.replace(/-/g, ' ');
      const projectFound = (ProjectsData['codingProjects'].find(p => p.title === projectTitle))||
       (ProjectsData['uiProjects'].find(p => p.title === projectTitle)) ||
       (ProjectsData['videoProjects'].find(p => p.title === projectTitle)) ;
    
        return projectFound;
      
      }
      

      
    

    const [pro, setpro] = useState(Setter);
    // const [scrollPosition, setScrollPosition] = useState(0);


  



    
  return (
    <section className='h-screen w-full small-container flex  lg:gap-20 gap-10  md:px-10 px-6 lg:my-32 my-20'>
      <div className='flex lg:w-1/2 '>
        {/* <img src={proj.images[0]} alt={proj.title} className='w-full lg:h-[700px] sm:h-[400px] h-[300px] object-cover object-top rounded-2xl shadow-xl' /> */}
        {<ImagesSlider images={pro.images} /> ? <ImagesSlider images={pro.images} /> : ''}
      </div>

      <div className='flex flex-col lg:w-1/2 gap-8 max-sm:items-center max-sm:text-center'>
        <h1 className='sm:text-4xl text-2xl  font-bold text-secondary '>{pro.title}</h1>
     
          
        <div className='flex flex-row gap-4'>
          
          {pro.demoLink !== 'Unavailable' ? (
            <a href={pro.demoLink} target='_blank'>
            <Button label='Demo' 
              bgColor={'bg-none'} 
              iconReact={<HiArrowTopRightOnSquare />}/>
            </a>
          )
          : ('')}

        {pro.repoLink !== 'Unavailable' ? (
           <a href={pro.repoLink} target='_blank'>
                      <Button label='Github' 
                      bgColor={'bg-secondary'}
                      textColor={'text-primary'}
                      customHover={'hover:bg-white hover:text-secondary'}
                      iconReact={<HiArrowTopRightOnSquare />} />
                      </a>
          
          )
          : ('')}
          



        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='sm:text-xl max-sm:text-lg font-medium text-secondary'>Description</h2>
          <p className='text-secondary sm:text-lg max-sm:text-sm font-light'>{pro.description}</p>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='sm:text-xl max-sm:text-lg font-medium text-secondary'>Skills</h2>
          <div className='flex flex-row gap-4'>
            {
              pro.skills.map((skill) => (
                <img src={skill.logo} alt={skill.name} className='w-[48px] max-sm:w-[24px]' />
              ))
            } 
          </div>
        </div>
 
      </div>
        
    </section>
  )
}

export default ProjectDetails