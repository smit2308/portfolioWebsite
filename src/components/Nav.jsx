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
    
      <div className='absolute  flex  justify-between items-center  z-30  w-full max-container pb-4 pt-2 px-10 '>
        <Button
        label= "Resume" />
        
     
       <ul className='max-lg:hidden flex flex-row items-center gap-10 text-primary text-lg font-medium mr-10'>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <Link to={item.path}
                
                className=' '
                >
                  {item.label}
                </Link>
            </li>
          )
          )}
        </ul>

        <div className='lg:hidden place-self-end'>
          <button className='hover:scale-110'>          
            <HiBars3 size={32} color='slate'/>
          </button>

        </div>
       
{/* 
       {isMenuOpen && (
          <div className='absolute top-full left-0 w-full bg-white lg:hidden rounded-2xl  shadow-nav -mt-1 pb-10 '>
            <ul className='flex flex-col items-center gap-2'>
              {navLinks.map((item) => (
                <li key={item.label} className='w-full text-center '>
                  <Link
                    to={item.path}
                    className=' font-monsterrat leading-normal text-xl  text-gray-900 hover:text-rose-600 my-2'
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}

        
                
      


                  {/* Collapsible Mobile Links */}


     </div>



  )
}

export default Nav