import React from 'react'
// import {headerLogo} from '../assets/images'
// import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import Button from './Button';
import { Link } from 'react-router-dom'

import {Routes, Route} from 'react-router-dom';
import { useState } from 'react'



const Nav = () => {




const [isMenuOpen, setIsMenuOpen] = useState(false);


const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};


  return (
    
      <div className='absolute  flex  justify-between xl:px-32 lg:px-20  md:px-20 sm:px-10 my-4 z-30 bg-none max-container w-full '>
        <Button
        label= "Resume" />
        
     
       <ul className='flex flex-row items-center gap-10   text-lg font-medium'>
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

        
                
      
        {/* <div className='lg:hidden place-self-end'>
          <button>          
            <img
             onClick={toggleMenu}
            src={hamburger}
            alt='"Hamburger'
            width={25}
            height={25} />
          </button>

        </div> */}

                  {/* Collapsible Mobile Links */}


     </div>



  )
}

export default Nav