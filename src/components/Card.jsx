import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import {TextGenerateEffect} from '../components'
import { useState } from 'react';

const Card = ({
  message,
    rotate,
    scale,
    translate,
    users,
  
  }) => {

    const [showAnimation, setShowAnimation] = useState(true);
    const [duration, setDuration] = useState(1 + 0.5 * message.split(" ").length   );

    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
    const checkSmall = () => {
      setIsSmall(window.innerWidth < 820);
    };

    checkSmall();

    window.addEventListener("resize", checkSmall);

    return () => {
      window.removeEventListener("resize", checkSmall);
    };
  }, []); 

    return (
      <motion.div
      initial={{translateY:10000}} 
      animate={{translateY:0}} 
     transition={{duration:2, ease: [0.22, 1, 0.36, 1],  }}
        style={{
          rotateX: rotate, // rotate in X-axis
          scale,
          boxShadow:
          "0 0 #0000004d, 0 9px 15px #0000004a, 0 20px 20px #00000042, 0 40px 40px #00000026, 0 100px 50px #0000000a, 0 230px 30px #00000003 ",
        }}
        className=" max-w-5xl -mt-12 mx-auto h-max  md:h-[70vh] xl:h-[85vh] w-full border-4 border-[#6C6C6C] lg:p-6 p-1 bg-[#222222] rounded-2xl lg:rounded-3xl shadow-2xl z-30"
      >
{/* max-xs:max-h-[420px] max-xs:max-h-[420px]  h-[70vh] */}


      {false ? (
        <motion.div
          key="animation"
          initial={{ opacity: 0.9 }}
          animate={{ 
            opacity: [0, 1,1, 1, 0], // Keyframes for fading: 0 (start), 1 (fade-in), 1 (hold), 0 (fade-out)
            times: [0, 0,0, 0.99, 1], // Times corresponding to the keyframes
            transition: { duration: duration, delay: 2 }, // Total duration of the animation
          }}
          onAnimationComplete={() => setShowAnimation(false)}
          className= {`h-full w-full rounded-xl flex flex-col   items-center`}
        >
          <TextGenerateEffect words={message} className='font-montserrat  md:text-3xl text-primary p-8 mt-10' />
        </motion.div>
      ) : (
         <motion.div 
         initial={{opacity:0}}
          animate={{opacity:1 , transition: {duration: 1, ease: "circOut", delay: 2 }}}

         className={` h-full w-full rounded-xl flex flex-col bg-[${users.bg? users.bg : "#00000"}] overflow-y-scroll  hide-scrollbar text-white  items-center`}>
 
 {
 
 users.section === 'video' ? (
  users.demoLink !== 'Unavailable' ? (
    <iframe className='w-full h-full' src={users.demoLink} async allowFullScreen></iframe>
  ) : (
    'Video Unavailable'
  )
) 

: 

isSmall ?

  users.gif ? (
    users.section == 'coding' ? (
    <img className=' w-full object-top' src={users.gif} />
    ) : (
      <img className='h-full object-cover' src={users.gif} />
    )
  ) : (
    'Image not available :('
  )



: 


    users.section === 'ui' ? (
      
      <iframe className='w-full h-full '  src={users.demoLink} allowFullscreen></iframe>
    ) : (
      <iframe className='w-full h-full' src={users.demoLink} async allowFullScreen></iframe>
    )







}

  
       </motion.div>
      )}
       
      </motion.div>
    );
  };

  export default Card;