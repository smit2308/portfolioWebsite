import React from 'react'
import { Link } from 'react-router-dom';




const Button = ({ onClick, logoTilt, label, iconURL, iconReact, bgColor, textColor, borderColor, fullWidth, customHover, width, iconWidth, iconHeight, ...buttonProps }) => {



  return (

    <button
      className={`flex flex-row min-w-40  border border-slate-200  justify-center gap-2 items-center px-[24px] py-[14px]  text-lg max-sm:text-sm  rounded-[10px] font-medium shadow-image2  transition duration-300 ease-in-out
                ${customHover ? customHover : " hover:bg-secondary hover:text-primary"}
                ${bgColor ? `${bgColor} $
                  ${textColor ? textColor : "text-secondary"}`
          :
          " bg-primary  text-secondary"
        }
                ${fullWidth && 'w-full'}"}
              ${width && `${width}`}
                
                
              '}}`
      }

      {...buttonProps}

      onClick={onClick}>
      {label}


      {iconURL ? (

        <img
          src={iconURL}
          width={iconWidth ? iconWidth : 24}
          height={iconHeight}
          alt='arrow right icon' />
      ) : ("")}

      {iconReact ? (
        <div className={`${logoTilt}`}>
          {iconReact}
        </div>
      ) : ("")}


    </button>

  )
}

export default Button