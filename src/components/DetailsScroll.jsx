"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import Card from "./Card";
import Button from "./Button";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";


import { useEffect, useState } from "react";

const DetailsScroll = ({
  message,
  users,
  titleComponent,
  section,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [1.2, 1] : [1.05, 1];
  };

  const originalPosition = isMobile? 30 :40;
  const rotate = useTransform(scrollYProgress, [0, isMobile ? 0.6 : 1], isMobile? [30,0] : [40, 0]);
  const scale = useTransform(scrollYProgress, [0, isMobile ? 0.6 : 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, isMobile ? 0.6 : 1], [originalPosition, isMobile? -400:-400]);

  

  return (
    <>
    <div
      className="pt-[30vh] sm:pt-[30vh]  h-max flex flex-col items-center justify-center relative sm:px-6 max-sm:px-3 lg:px-16    "
      ref={containerRef}
    >
      <div
        className=" w-full relative"
        style={{
          perspective: `${isMobile? '800px' : '1200px'}`,
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} isMobile={isMobile}/>
        
        <Card
        message={message}
          rotate={rotate}
          translate={translate}
          scale={scale}
          users={users}
        />
    
      {isMobile && <Content  users={users} />}
      </div>
   
    </div>
    {!isMobile &&
    <Content  users={users} />}
    </>
  );
};

export const Header = ({ translate, titleComponent, isMobile }) => {
  return (
    <motion.div

      style={{
        translateY: translate,
      }}
      initial={{  translateY:800}}
      animate={{  translateY: isMobile? 30 : 40}}
     
      
       transition={{duration:2, ease: [0.22, 1, 0.36, 1], delay:1.2}}
      className="div  sm:max-w-5xl mx-auto text-center relative z-0"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Content = ({ translate, users }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-xs sm:max-w-5xl mx-auto text-center items-center justify-center flex flex-col gap-10  sm:mt-20 mt-10  relative sm:px-6 max-sm:px-3 lg:px-16 "
    >
     
     
     
     
        
     {users.section == 'coding' ? (
           <div className='flex flex-row gap-4'>

{users.demoLink != "Unavailable" ?
<a href={users.demoLink} target='_blank'>
<Button label='Visit' 
  bgColor={'bg-none'} 
  iconReact={<HiArrowTopRightOnSquare />}/>
</a> : null
     }
      
        <a href={users.repoLink} target='_blank'>
                   <Button label={'Github'} 
                   bgColor={'bg-secondary'}
                   textColor={'text-primary'}
                   customHover={'hover:bg-green-800 '}
                   iconReact={<HiArrowTopRightOnSquare />} />
                   </a>

                   </div>
       
       )
       : (
        <a href={users.repoLink} target='_blank'>
        <Button label={'Visit'} 
        bgColor={'bg-none'}
        iconReact={<HiArrowTopRightOnSquare />} />
        </a>
       )
       
       }
       



     

     <div className='flex flex-col gap-2'>
       <h2 className='sm:text-xl max-sm:text-xl font-semibold text-secondary'>Description</h2>
       <p className='text-secondary sm:text-lg max-sm:text-sm font-normal'>{users.description}</p>
     </div>

     <div className='flex flex-col gap-4'>
       <h2 className='sm:text-xl max-sm:text-lg font-medium text-secondary'>Skills</h2>
       <div className='flex flex-wrap gap-2'>
         {
           users.skills.map((skill) => (
             <img key={skill.name} src={skill.logo} alt={skill.name} className='w-12 max-sm:w-8 ' />
           ))
         } 
       </div>
     </div>

  
    </motion.div>
  );
};





export default DetailsScroll;