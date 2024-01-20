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



    return (
      <motion.div
      initial={{translateY:10000}} 
      animate={{translateY:0}} 
     transition={{duration:2, ease: [0.22, 1, 0.36, 1],  }}
        style={{
          rotateX: rotate, // rotate in X-axis
          scale,
          boxShadow:
          "0 0 #0000004d, 0 9px 15px #0000004a, 0 20px 20px #00000042, 0 40px 40px #00000026, 0 100px 50px #0000000a, 0 230px 30px #00000003",
        }}
        className=" max-w-5xl -mt-12 mx-auto h-[70vh] md:h-[70vh] xl:h-[85vh] w-full border-4 border-[#6C6C6C] lg:p-6 p-2 bg-[#222222] rounded-2xl lg:rounded-3xl shadow-2xl"
      >



      {showAnimation ? (
        <motion.div
          key="animation"
          initial={{ opacity: 0.9 }}
          animate={{ 
            opacity: [0, 1,1, 1, 0], // Keyframes for fading: 0 (start), 1 (fade-in), 1 (hold), 0 (fade-out)
            times: [0, 0,0, 0.99, 1], // Times corresponding to the keyframes
            transition: { duration: duration, delay: 2 }, // Total duration of the animation
          }}
          onAnimationComplete={() => setShowAnimation(false)}
          className=' h-full w-full rounded-xl flex flex-col bg-black  items-center'
        >
          <TextGenerateEffect words={message} className='font-montserrat  text-3xl text-primary p-8 mt-10' />
        </motion.div>
      ) : (
         <motion.div 
         initial={{opacity:0}}
          animate={{opacity:1 , transition: {duration: 1, ease: "circOut" }}}

         className=" h-full w-full rounded-xl flex flex-col bg-black overflow-y-scroll  hide-scrollbar ">
 
                     
            {users.demoLink != "Unavailable" ? 
            (
              <div  className="flex flex-col items-center justify-center w-full h-full   rounded-xl ">
                  
                  {users.section == 'ui' ?
                    <iframe  className='w-full' height={640} src={users.demoLink} allowFullscreen></iframe>
                    :
                    <iframe  className='w-full h-full'  src={users.demoLink} async allowFullScreen></iframe> 
                  }
                
 
              </div>

              ) : (''
            
                // <div className='flex w-full h-full items-center justify-center text-white'>
                //   {'prototype not available :('}
                // </div>
                )
            }
           
              {users.images[0] && <img className=' w-full object-cover' src={users.images[0]}/>}
            
  
       </motion.div>
      )}
       
      </motion.div>
    );
  };

  export default Card;