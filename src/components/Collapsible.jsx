import React from 'react'
import { useState } from 'react';
import { HiMiniPlus } from "react-icons/hi2";
import { HiMiniMinus } from "react-icons/hi2";
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
    <div className='flex flex-col items-start gap-2 font-montserrat text-left text-secondary border-b-2 border-secondary py-4 transition-all ease-in-out duration-300  '>
        <button className='w-full flex flex-row justify-between font-medium text-lg '
            onClick={toggle}>
        <span>    {title}</span>


        <HiMiniPlus size={24} color="black" className={open ? 'hidden rotate-0' : 'block '} />
        <HiMiniMinus size={24} color="black" className={open ? 'block' : 'hidden'} />

        </button>
        {open && 
        
            <p className='font-light text-md transition-all ease-in-out duration-300'>
                {children}
            </p>}
    </div>
  )
}

export default Collapsible