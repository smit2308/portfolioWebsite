import React from 'react'
import { useState } from 'react';
import { Collapsible     } from '../components';
const About = () => {

    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };

  return (
    <section className='h-screen w-full flex flex-col items-center max-container px-40 gap-10'>
        <h1 className='font-montserrat italic font-thin text-[60px] lg:text-[100px]  text-secondary'>
           <span className='font-display italic text-[80px] lg:text-[120px]'>Questions?</span>
        </h1>

        <div className='w-full flex flex-row justify-center gap-10'>
            <div className='w-1/2'> 
                <p>Image tagff</p>
            </div>
            <div className='w-1/2 flex flex-col justify-start  gap-6 bg-red-200f'>

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