import React from 'react'
// import {headerLogo} from '../assets/images'
// import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import Button from './Button';
import { Link } from 'react-router-dom'

import {Routes, Route} from 'react-router-dom';
import { useState } from 'react'

import { HiBars3 } from "react-icons/hi2";


const Nav = () => {




const [isMenuOpen, setIsMenuOpen] = useState(false);


const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};


  return (
    
      <div className='absolute  flex justify-between  items-center  z-30  w-full max-container pb-4 pt-4 lg:px-10 px-6 '>
        <h1 className='font-display text-xl max-sm:text-lg sm:text-secondary max-sm:text-primary'>
          Smit Shewale
        </h1>
        
     
       <ul className='max-lg:hidden flex flex-row   gap-10 text-primary text-lg font-montserrat font-medium '>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a href={item.path} className=' '     >
                  {item.label}
                </a>
            </li>
          )
          )}
        </ul>

        <div className='lg:hidden '>
          <button className='hover:scale-110'
            onClick={toggleMenu}
            >          
            <HiBars3 size={28} color='whitesmoke'/>
          </button>



        </div>
       

       {isMenuOpen && (
          <div className='absolute left-0 top-0 w-full rounded-b-lg shadow-xl bg-primary lg:hidden  shadow-nav -mt-1 pb-10 '>
                 <h1 className='p-10 font-display text-xl text-center max-sm:text-lg sm:text-secondary '>
          Smit Shewale
        </h1>
            <ul className='flex flex-col gap-4'>
              {navLinks.map((item) => (
                <li key={item.label} className='w-full text-center '>
                  <a
                    href={item.path}
                    className=' font-monsterrat leading-normal text-lg  text-secondary '
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        
                
      


                  {/* Collapsible Mobile Links */}


     </div>



  )
}

export default Nav