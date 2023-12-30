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

    <section className='w-full flex flex-col   lg:p-16 md:p-10 p-6 max-container '>
      <div className='w-full flex flex-row gap-40 justify-between  items-center  '>

        <h1 className='font-display italic text-[120px]   text-secondary'>Work</h1>

        <h1 className='  h-fit font-montserrat font-light leadinng-normal text-lg text-right pr-20  text-secondary border-r-2  sm:border-secondary'>
          Crafting unique digital experiences as a Web Designer and Developer, 
          I also excel in videography and video editing. 
          Let's create something extraordinary together
        </h1>

      </div>

      

      <div className='flex flex-row justify-end '>
           {/* relative */}
        <div className='  w-max  h-max mt-20  flex flex-col font-montserrat text-xl font-light italic gap-8 border-l-2 border-secondary px-12'>
          
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

        <div className='w-full  max-h-[720px] overflow-y-scroll hide-scrollbar  '>

          <div className='flex flex-col gap-20 mt-20 '>

          {workFeatured.map((project, index) => (
              <div id={project.id} className='flex flex-wrap gap-10  justify-center mb-20'>
                
              {/* <h2 className='font-montserrat text-7xl text-secondary'>{index+1}</h2> */}
              <img className='h-[600px] rounded-xl shadow-2xl'
                src={project.thumbnail} 
                alt={project.title} />

              <div className='flex flex-col gap-4 justify-center w-80 ' >

                <p className='font-montserrat text-lg font-light leading-normal bg-slate-200 '> 
                React Skateboard Retail website, inspired by Zumiez. 
                Currently front-end only, with an interactive back-end coming soon!
                </p>

                <div className='flex flex-wrap gap-2'>

                  {project.skills.map(skill => (
                    <img className='w-[48px]'
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