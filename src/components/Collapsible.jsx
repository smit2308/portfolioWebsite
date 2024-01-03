import React from 'react'
import { useState } from 'react';
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
    <div className='flex flex-col items-start gap-2 font-montserrat text-left text-secondary '>
        <button className='font-medium text-lg  '
            onClick={toggle}>{title}</button>
        {open && 
        
            <p className='font-light text-md'>
                {children}
            </p>}
    </div>
  )
}

export default Collapsible