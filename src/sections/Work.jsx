import React from 'react'
import { workFeatured } from '../constants'
import Button from '../components/Button'
import { useEffect } from 'react'
import { HiArrowSmallDown } from "react-icons/hi2";
import { HeroParallax } from '../components';
import { ProjectsData } from '../constants';
import  Projects  from '../root/pages/Projects';
const Work = () => {


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
          threshold: 0.4
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

    <section className='w-full flex flex-col  lg:px-16 md:px-10 px-6 max-container gap-10 sm:gap-20 '>
      <div className='w-full flex md:flex-row flex-col gap-6 sm:gap-10  xl:gap-40 md:justify-between  md:items-end items-center  '>

        <h1 className=' font-display   text-[64px] sm:text-[100px] lg:text-[140px] leading-none  text-secondary'>
          Work
        </h1>

        <h1 className=' font-montserrat font-light leadinng-normal sm:text-sm lg:text-lg md:text-right text-center xl:pr-20 md:pr-6 text-secondary  md:border-r-2  md:border-secondary'>
          Crafting unique digital experiences as a Web Designer and Developer,
          I also excel in videography and video editing.
          Let's create something extraordinary together
        </h1>

      </div>
      <div className='w-full h-max'>
      <Projects />
      </div>
      {/* <div className='flex sm:flex-row flex-col sm:justify-end max-sm:items-center '>
        relative
        <div className='max-sm:hidden sm:w-max  h-max sm:mt-20 max-sm:items-center  flex sm:flex-col flex-wrap font-montserrat text-sm sm:text-lg lg:text-xl  italic gap-8 border-l-2 sm:border-secondary xl:px-16 sm:px-8 mb-6 '>

          <h2 id='coding'>Coding</h2>
          <h2 id="ui">UI/UX</h2>
          <h2 id='video' className=' w-max'>Video Editing</h2>

          <div className='max-sm:hidden'>
            <Button
              label='More'
              bgColor={'bg-none'}
              textColor={'text-secondary'}
              logoTilt={' -rotate-90'}
              iconReact={<HiArrowSmallDown size={24} />}

            />
          </div>

        </div>

        <div className='w-full  max-sm:max-h-[500px] sm:max-h-[640px]    lg:max-h-[480px] xl:max-h-[600px]   overflow-y-scroll hide-scrollbar '>

          <div className=' flex flex-col mt-10  lg:justify-start items-center '>

            {workFeatured.map((project, index) => (
              <div id={project.id} className='flex lg:flex-row flex-col 2xl:gap-20 gap-10  lg:justify-between items-center mb-10 sm:mb-20  xl:pl-24 sm:pl-6 '>

                <h2 className='font-montserrat text-7xl text-secondary'>{index+1}</h2>
                <img className='h-[320px] md:h-[400px] xl:h-[500px] xl:w-[500px] rounded-xl md:shadow-image1 shadow-image2 object-cover'
                  src={project.thumbnail}
                  alt={project.title} />

                <div className='flex flex-col gap-4 justify-center max-w-96  ' >

                  <p className='font-montserrat text-xs sm:text-sm lg:text-lg font-light leading-normal  '>
                    {project.shortDescription}
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


            <div className='sm:hidden'>
              <Button
                label='More'
                textColor={'text-secondary'}
                logoTilt={' -rotate-90'}
                iconReact={<HiArrowSmallDown size={24} />}
              />
            </div>
          </div>


        </div>

        
        

      </div> */}
    </section>
  )
}

export default Work