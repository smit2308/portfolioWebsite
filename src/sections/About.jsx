import React from 'react'
import { useState } from 'react';
import { Collapsible     } from '../components';
import { About_image } from '../assets/images';
const About = () => {

    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };

  return (
    <section className='h-full max-container w-full flex flex-col items-center max-container lg:px-16 md:px-10 px-6 max-md:gap-6 gap-16 '>
        <h1 className='font-montserrat italic font-thin text-[60px] lg:text-[100px]  text-secondary'>
           <span className='font-display italic text-[64px] lg:text-[120px]'>Questions?</span>
        </h1>

        <div className='h-fit md:h-full w-full flex md:flex-row flex-col md:justify-center lg:gap-20 gap-10 items-center'>
            <div className='md:w-1/2 w-full'> 
                <img src={About_image} alt='about' className='w-full md:h-[600px] h-[300px] object-cover rounded-xl' />
            </div>
            <div className='md:w-1/2 w-full flex flex-col justify-start  gap-8 bg-red-200f'>

            <Collapsible 
                title='What can I create?'
                children='I can create a wide range of digital products, from websites to mobile apps. ' 
            />
   

            <Collapsible 
                title='What is my Education'
                children='I am currently completing Masters in Computer Science
                from University of Southern California. I have a Bachelors in Computer Science 
                from University of Mumbai' 
            />

            <Collapsible 
                title='What is my Experience?'
                children='2 Software Engineering Internships,
                            2 UI/UX Design Internships,
                            1 Video Editor Internship,
                            and I have beeen currently working as a part-time
                            Videographer/Editor for USC Viterbi School of Engineering' 
            />

            <Collapsible 
                title='What are my Hobbies?'
                children='Making content for Instagram, Formula-1, Travelling, Exercise, Film-making' 
            />

            </div>
        </div>
    </section>
  )
}

export default About 