import React from 'react'
import { Link } from 'react-router-dom';
import { HiArrowSmallDown } from "react-icons/hi2";



const Button = ({onClick, label, iconURL, bgColor, textColor, borderColor, fullWidth, width, iconWidth, iconHeight,...buttonProps}) => {



  return (
    
    <button 
      className={`flex flex-row justify-between gap-2 items-center px-[24px] py-[14px]  text-lg rounded-[10px] font-medium shadow-element1 shadow-element2 hover:bg-secondary hover:text-primary transition duration-300 ease-in-out
                ${
                  bgColor ? `${bgColor} $
                  ${textColor ? textColor : "text-secondary"}`
                  :
                  " bg-primary  text-secondary"
                }
                ${fullWidth && 'w-full'}"}

                
                
              '}}`
                }
                
                {...buttonProps}
                
                onClick={onClick}>
        {label}
        <HiArrowSmallDown/>

        {iconURL ? (  
             
          <img 
            src={iconURL}
            width={iconWidth ? iconWidth : 24}
            height={iconHeight}
            alt='arrow right icon'
            className='fill-red-600 ' />
           ):("")}

           
    </button>
    
  )
}

export default Button