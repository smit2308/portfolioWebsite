import React from 'react'
import { useState } from 'react';
import { HiMiniPlus } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";
import {motion, AnimatePresence} from 'framer-motion';
const Collapsible = (
    { 
        title, 
        children, 

    }
) => {

    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
      };
      

  return (
    <motion.div     className='flex flex-col items-start gap-4 font-montserrat text-left text-secondary  pb-4 border-b-2 border-secondary    '>
        <button onClick={toggle}   className=' w-full flex flex-row justify-between font-medium lg:text-lg sm:text-md max-sm:text-sm'>
            <span className=' '>    {title}</span>

            <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={open ? "minus" : "plus"}
              initial={{
                rotate: open ? -90 : 90,
              }}
              animate={{
                zIndex: 1,
                rotate: 0,
                transition: {
                  type: "tween",
                  duration: 0.15,
                  ease: "circOut",
                },
              }}
              exit={{
                zIndex: 0,
                rotate: open ? -90 : 90,
                transition: {
                  type: "tween",
                  duration: 0.15,
                  ease: "circIn",
                },
              }}
            >
              {open ? <HiMiniMinus size={24} color="black"  /> :     <HiMiniPlus size={24} color="black"  />}
            </motion.div>
          </AnimatePresence>



        </button>

        <AnimatePresence>
        {open && (
          <motion.div 
          transition={{ duration: 0.2, ease: "easeInOut" }}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            key={children}
            className="font-light  "
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Collapsible