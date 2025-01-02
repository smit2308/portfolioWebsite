import React from 'react'
import { workFeatured } from '../constants'
import {Button} from '../components'
import { useEffect } from 'react'
import { HiArrowSmallDown } from "react-icons/hi2";
import { ProjectsData } from '../constants';
import  Projects  from '../root/pages/Projects';
const Work = () => {


  // To change the color of the text in the navbar when the user scrolls to a certain section
  // useEffect(() => {
  //   const pairs = [
  //     { mainDivId: 'coding', childDivId: 'Coding', textColor: 'text-accent' },
  //     { mainDivId: 'ui', childDivId: 'UI/UX', textColor: 'text-accent' },
  //     { mainDivId: 'video', childDivId: 'Video Editing', textColor: 'text-accent' }
  //   ];

  //   const observers = pairs.map(pair => {
  //     const mainDiv = document.getElementById(pair.mainDivId);
  //     const childDiv = document.getElementById(pair.childDivId);

  //     if (mainDiv && childDiv) {
  //       const observer = new IntersectionObserver((entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             mainDiv.classList.add(pair.textColor);
  //           } else {
  //             mainDiv.classList.remove(pair.textColor);
  //           }
  //         });
  //       }, {
  //         root: null,
  //         threshold: 0.4
  //       });

  //       observer.observe(childDiv);
  //       return observer;
  //     }
  //   });

  //   return () => {
  //     observers.forEach(observer => {
  //       if (observer) {
  //         pairs.forEach(pair => {
  //           const childDiv = document.getElementById(pair.childDivId);
  //           if (childDiv) {
  //             observer.unobserve(childDiv);
  //           }
  //         });
  //       }
  //     });
  //   };
  // }, []);



  return (

    <section className='w-full flex flex-col max-sm:min-h-screen  lg:px-16 md:px-10 px-6 max-container gap-10 sm:gap-20 '>
      <div className='w-full flex md:flex-row flex-col gap-6 sm:gap-10  xl:gap-40 md:justify-between  md:items-end items-center  '>

        <h1 className=' font-display   text-[64px] sm:text-[100px] lg:text-[140px] leading-none  text-secondary'>
          Work
        </h1>

        <h1 className=' font-montserrat font-normal leadinng-normal sm:text-sm lg:text-lg md:text-right text-center xl:pr-20 md:pr-6 text-secondary  md:border-r-2  md:border-secondary'>
        Discover a variety of digital experiences that highlight my skills as a UI Designer and Developer.
         Additionally, explore my work in videography and video editing for a 
        glimpse into my creative versatility.
        
        </h1>

      </div>
      <div className='w-full h-max'>
      <Projects />
      </div>

    </section>
  )
}

export default Work