import React from 'react'
import { codingProjects } from '../constants'
import { workFeatured } from '../constants'
import Button from '../components/Button'
import { useEffect } from 'react'

const Projects = () => {


  // To change the color of the text in the navbar when the user scrolls to a certain section
  useEffect(() => {
    const pairs = [
      { mainDivId: 'coding', childDivId: 'Coding', textColor: 'text-accent' },
      { mainDivId: 'ui', childDivId: 'UI/UX', textColor: 'text-accent' },
      { mainDivId: 'video', childDivId: 'Video Editing', textColor: 'text-accent' }
    ];

    const observers = pairs.map(pair => {
      const mainDiv = document.getElementById(pair.mainDivId);
      const childDiv = document.getElementById(pair.childDivId);

      if (mainDiv && childDiv) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              mainDiv.classList.add(pair.textColor);
            } else {
              mainDiv.classList.remove(pair.textColor);
            }
          });
        }, {
          root: null,
          threshold: 0.5
        });

        observer.observe(childDiv);
        return observer;
      }
    });

    return () => {
      observers.forEach(observer => {
        if (observer) {
          pairs.forEach(pair => {
            const childDiv = document.getElementById(pair.childDivId);
            if (childDiv) {
              observer.unobserve(childDiv);
            }
          });
        }
      });
    };
  }, []); 



  return (

    <section className='w-full flex flex-col max-sm:gap-10  lg:p-16 md:p-10 p-6 max-container '>
      <div className='w-full flex sm:flex-row flex-col sm:gap-10 md:gap-20 lg:gap-40 sm:justify-between  items-center  '>

        <h1 className='font-display italic text-[80px] lg:text-[120px]   text-secondary'>   
          Work
        </h1>

        <h1 className='  h-fit font-montserrat font-light leadinng-normal sm:text-sm lg:text-lg sm:text-right text-center lg:pr-20 pr-6 text-secondary border-r-2  sm:border-secondary'>
          Crafting unique digital experiences as a Web Designer and Developer, 
          I also excel in videography and video editing. 
          Let's create something extraordinary together
        </h1>

      </div>

      

      <div className='flex sm:flex-row flex-col sm:justify-end max-sm:items-center '>
           {/* relative */}
        <div className='sm:w-max  h-max sm:mt-20 max-sm:items-center  flex sm:flex-col flex-wrap font-montserrat text-sm sm:text-lg lg:text-xl font-light italic gap-8 border-l-2 border-secondary xl:px-16 px-8  '>
          
          <h2 id='coding'>Coding</h2>
          <h2 id="ui">UI/UX</h2>
          <h2 id='video' className=' w-max'>Video Editing</h2>

          <Button 
            label='More'
            bgColor={'bg-none'}
            textColor={'text-secondary'}
            logoTilt={' -rotate-90'}

          />
        </div>

        <div className='w-full h-[560px]  sm:max-h-[720px] overflow-y-scroll hide-scrollbar   '>

          <div className='flex flex-col gap-20 mt-10 sm:mt-20  lg:justify-start '>

          {workFeatured.map((project, index) => (
              <div id={project.id} className='flex lg:flex-row flex-col gap-10  lg:justify-center items-center mb-20 sm:px-6'>
                
              {/* <h2 className='font-montserrat text-7xl text-secondary'>{index+1}</h2> */}
              <img className='h-[340px] md:h-[400px] xl:h-[500px] 2xl:h-[600px] rounded-xl shadow-2xl'
                src={project.thumbnail} 
                alt={project.title} />

              <div className='flex flex-col gap-4 justify-center max-w-96 xl:pr-20 ' >

                <p className='font-montserrat text-xs sm:text-sm lg:text-lg font-light leading-normal  '> 
                React Skateboard Retail website, inspired by Zumiez. 
                Currently front-end only, with an interactive back-end coming soon!
                </p>

                <div className='flex flex-wrap gap-2'>

                  {project.skills.map(skill => (
                    <img className='sm:w-[48px] w-[24px]'
                      src={skill.logo} 
                      alt={skill.name} />
                    ))}

                </div>
              </div>
            </div>

          ))}
          

          </div>


        </div>

      </div>
    </section>
  )
}

export default Projects