import React from 'react'
// import {headerLogo} from '../assets/images'
// import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import Button from './Button';
import { Link } from 'react-router-dom'

import {Routes, Route} from 'react-router-dom';
import {useRef, useEffect, useState } from 'react'

import { HiBars3 } from "react-icons/hi2";


const Nav = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const menuRef = useRef();

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const handleClickOutside = (event) => {
  if (menuRef.current && !menuRef.current.contains(event.target)) {
    setIsMenuOpen(false);
  }
};

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);


  return (
    <>
    {isMenuOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu}></div>
    )}
      <div className='absolute     flex justify-between  items-center  z-30  w-full max-container pb-4 pt-4 lg:px-16 md:px-10 px-6 '>

        
     
       <ul className='max-lg:hidden flex flex-row   gap-10 text-secondary text-lg font-montserrat font-medium '>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <Link to={`/`} className='hover:text-accent transition-all ease-in-out '  scroll={false}   >
                  {item.label}
                </Link>
            </li>
          )
          )}
        </ul>

        <Link to='./' scroll={false} className='font-display text-xl max-sm:text-lg sm:text-primary hover:text-secondary max-sm:text-primary transition-all ease-in-out  '>
          Smit Shewale
        </Link>

        <div className='lg:hidden '>
          <button className='hover:scale-110'
            onClick={toggleMenu}
            >          
            <HiBars3 size={28} color='whitesmoke'/>
          </button>



        </div>
       

       {isMenuOpen && (
          <div ref={menuRef} 
              className='absolute left-0 top-0 w-full rounded-b-lg shadow-xl bg-primary lg:hidden  shadow-nav -mt-1 pb-10 '>
                 <a href='./' 
                  className='p-10 font-display text-xl text-center max-sm:text-lg sm:text-secondary '>
          Smit Shewale
        </a>
            <ul className='flex flex-col gap-4'>
              {navLinks.map((item) => (
                <li key={item.label} className='w-full text-center '>
                  <Link
                    to={`/${item.path}`}
                    // className=' font-monsterrat leading-normal text-lg  text-secondary '
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        
                
      


                  {/* Collapsible Mobile Links */}


     </div>


     </>
  )
}

export default Nav