import React from 'react'
import {motion} from 'framer-motion'

const Card = ({
    rotate,
    scale,
    translate,
    users,
  
  }) => {
    return (
      <motion.div
        style={{
          rotateX: rotate, // rotate in X-axis
          scale,
          boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        }}
        className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-3xl shadow-2xl"
      >
         <div className="bg-gray-100 h-full w-full rounded-xl flex flex-col overflow-y-scroll  ">
 
          {/* <div className="flex w-full ">  */}
                                      {/* <img className='w-full flex object-cover' src={users.images[0]}/> */}
                                      {/* */}
         
              {/* </div> */}
                     
            {users.demoLink != "Unavailable" ? 
            (
                <div  className="flex flex-col items-center justify-center w-full h-full  hide-scrollbar rounded-xl ">
                <iframe height={640} className='relative w-full object-top object-cover' src={users.demoLink} allowFullScreen></iframe> 
 
              </div>
            ) : 
            (<div>
                Unavailable
                
                </div>)}
           
              {users.images[0] && <img className=' w-full object-cover' src={users.images[0]}/>}
            
  
       </div>
       
      </motion.div>
    );
  };

  export default Card;